/*String.prototype.hashCode = function() {
	var hash = 0, i, chr, len;
	if (this.length == 0) return hash;
	for (i = 0, len = this.length; i < len; i++) {
		chr = this.charCodeAt(i);
		hash = ((hash << 5) - hash) + chr;
		hash |= 0;
	}
	return hash;
};
*/
if(typeof String.prototype.endsWith !== 'function') {
	String.prototype.endsWith = function(suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
}

chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(event, content) {

	var port = chrome.runtime.connect();

	var payload = { "type":"save", "content":content };

	port.postMessage(payload);

	port.onMessage.addListener(function (msg) {

	var updateFile = function updateFile(chkt, pblh) {

			SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
				SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
					this.checkout = chkt;
					this.publish = pblh;
					var fileAbsUrl = "REPLACE-FILE-URL";
					if(fileAbsUrl.indexOf("?") > -1) fileAbsUrl = fileAbsUrl.substring(0, fileAbsUrl.indexOf("?"));
					var siteAbsoluteUrl = _spPageContextInfo.siteAbsoluteUrl;
					var siteServerRelativeUrl = _spPageContextInfo.siteServerRelativeUrl;
					if(siteServerRelativeUrl.length == 1) siteAbsoluteUrl += siteServerRelativeUrl;
					var fileRelUrl = fileAbsUrl.replace(siteAbsoluteUrl.substring(0, siteAbsoluteUrl.lastIndexOf(siteServerRelativeUrl)),"");
					var documentPath = fileAbsUrl.substring(0, fileAbsUrl.lastIndexOf("/"));

					var executor = new SP.RequestExecutor(documentPath);

					executor.executeAsync({
						url: documentPath + "/_api/contextinfo",
						method: "POST",
						headers: { "Accept": "application/json; odata=verbose" },
						success: function (data) {
							if (data.body) {
								var body = JSON.parse(data.body);
								var webUrl = body.d.GetContextWebInformation.WebFullUrl;
								this.clientContext = new SP.ClientContext(webUrl);
								this.file = this.clientContext.get_web().getFileByServerRelativeUrl(fileRelUrl);
								this.clientContext.load(this.file);
								this.clientContext.executeQueryAsync(
								Function.createDelegate(this, updateFileSucceeded),
								Function.createDelegate(this, updateFileFailed));
							}
						},
						error: function (err) {
							alert(JSON.stringify(err));
						}
					});
				});
			});
		};

		var updateFileSucceeded = function updateFileSucceeded() {

			var fileContent = "REPLACE-CONTENT";
			var unescapedFileContent = unescape(fileContent);

			var fileCreateInfo = new SP.FileCreationInformation();
			fileCreateInfo.set_content(new SP.Base64EncodedByteArray());

			for (var i = 0; i < unescapedFileContent.length; i++) {
				fileCreateInfo.get_content().append(unescapedFileContent.charCodeAt(i));
			}

			if (this.file.get_checkOutType() == SP.CheckOutType.none)
			{
				this.file.checkOut();
				this.file.saveBinary(fileCreateInfo);
				this.file.checkIn();
			}
			else
			{
				this.file.saveBinary(fileCreateInfo);
				this.file.checkIn();
			}

			if (!this.publish) this.file.publish();

			this.clientContext.load(this.file);
			this.clientContext.executeQueryAsync(
			Function.createDelegate(this, updateFileSucceeded2),
			Function.createDelegate(this, updateFileFailed));
		};

		var updateFileFailed = function updateFileFailed(sender, args) {
			window.postMessage({ function: 'updateFile', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
		};

		var updateFileSucceeded2 = function updateFileSucceeded2() {
			window.postMessage({ function: 'updateFile', success: true, result: null, source: 'chrome-sp-editor' }, '*');
		};

		var script = updateFile + " " + updateFileSucceeded + " " + updateFileSucceeded2 + " " + updateFileFailed + " " ;

		var eventUrl = event.url.toLowerCase();

		chrome.devtools.inspectedWindow.getResources(function(resources) {
			// if using chrome "Workspaces" and "map file to network" we need to find the file from the request list
			if(eventUrl.indexOf("file:") > -1)
			{
				var eventFileName = eventUrl.substring(eventUrl.lastIndexOf('/')+1);
				var filesCount = resources.length;
				for (i = 0; i < filesCount; i++){
					var resource = resources[i].url.toLowerCase();

					if(resource.indexOf("?") > -1)
					{
						resource = resource.substring(0, resource.indexOf("?"));
					}
					if(resource.endsWith(eventFileName))
					{
						eventUrl = resource;
						break;
					}
				}

				if(eventUrl.indexOf("file:") > -1) {
					alert("Could not find '" + eventFileName + "' from current page.")
					return;
				}
			}

			script = script.replace("REPLACE-FILE-URL", eventUrl);
			script = script.replace("REPLACE-CONTENT", encodeURIComponent(content));
			script = script + " updateFile("+msg.autoCheckout+", "+msg.autoPublish+");";

			chrome.devtools.inspectedWindow.eval(script);
		});
	});
});

chrome.devtools.panels.create("SharePoint", "", "panel.html",
	function(panel) {
		// add actions here if necessary
	}
);
