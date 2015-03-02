String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length == 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

var files = [];

chrome.devtools.network.onRequestFinished.addListener(function(request) {
	var filesCount = files.length;
	var requestUrl = request.request.url.toLowerCase();
	var addit = true;

	if(requestUrl.indexOf("?") > -1) 
	{
		requestUrl = requestUrl.substring(0, requestUrl.indexOf("?"));
	}

	for (i = 0; i < filesCount; i++)
	{
		if(files[i] == requestUrl)
		{
			addit = false;
			break;
		}
	}

	if(addit) files.push(requestUrl);
});


chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(event, content) {

	var port = chrome.runtime.connect();

	var payload = { "type":"save", "content":content.hashCode() };

	port.postMessage(payload);

	port.onMessage.addListener(function (msg) {

    var updateFile = function updateFile(checkout, publish) {

			SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
				SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
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

								var fileContent = "REPLACE-CONTENT";
								var unescapedFileContent = unescape(fileContent);

								var clientContext = new SP.ClientContext(webUrl);

								this.file = clientContext.get_web().getFileByServerRelativeUrl(fileRelUrl);

								var fileCreateInfo = new SP.FileCreationInformation();
								fileCreateInfo.set_content(new SP.Base64EncodedByteArray());

						                for (var i = 0; i < unescapedFileContent.length; i++) {
						                    fileCreateInfo.get_content().append(unescapedFileContent.charCodeAt(i));
						                }

								if (!checkout) this.file.checkOut();
								this.file.saveBinary(fileCreateInfo);
								if (!checkout) this.file.checkIn();
								if (!publish) this.file.publish();

								clientContext.load(this.file);
								clientContext.executeQueryAsync(
					                  Function.createDelegate(this, updateFileSucceeded),
					                  Function.createDelegate(this, updateFileFailed)
				                );
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
      		window.postMessage({ function: 'updateFile', success: true, result: null, source: 'chrome-sp-editor' }, '*');
		};

		var updateFileFailed = function updateFileFailed(sender, args) {
      		window.postMessage({ function: 'updateFile', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
		};

		var script = updateFile + " " + updateFileSucceeded + " " + updateFileFailed + " " ;

		var eventUrl = event.url.toLowerCase();

		// if using chrome "Workspaces" and "map file to network" we need to find the file from the request list
		if(eventUrl.indexOf("file:") > -1)
		{
			var filesCount = files.length;

			for (i = 0; i < filesCount; i++)
			{
				if(files[i].endsWith(eventUrl.substring(eventUrl.lastIndexOf('/')+1)))
				{
					eventUrl = files[i];
					break;
				}
			}			
			if(eventUrl.indexOf("file:") > -1) {
				alert("Could not find '" + eventUrl.substring(eventUrl.lastIndexOf('/')+1) + "' from SharePoint, please refresh the page while devtools is open.")
				return;
			}			
		}

		script = script.replace("REPLACE-FILE-URL", eventUrl);
		script = script.replace("REPLACE-CONTENT", encodeURIComponent(content));
    script = script + " updateFile("+msg.autoCheckout+", "+msg.autoPublish+");";

    chrome.devtools.inspectedWindow.eval(script);
	});
});

chrome.devtools.panels.create("SharePoint", "", "panel.html",
	function(panel) {
		// add actions here if necessary
	}
);
