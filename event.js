String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length == 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(event, content) {

	var port = chrome.extension.connect();

	var payload = { "type":"save", "content":content.hashCode() };

	port.postMessage(payload);

	port.onMessage.addListener(function () {

		var updateFile = function updateFile() {

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

								var file = clientContext.get_web().getFileByServerRelativeUrl(fileRelUrl);

								var fileCreateInfo = new SP.FileCreationInformation();
								fileCreateInfo.set_content(new SP.Base64EncodedByteArray());

								for (var i = 0; i < unescapedFileContent.length; i++) {
									fileCreateInfo.get_content().append(unescapedFileContent.charCodeAt(i));
								}

								file.checkOut();
								file.saveBinary(fileCreateInfo);
								file.checkIn();
								file.publish();
								clientContext.load(file);
								clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
							}
						},
						error: function (err) {
							alert(JSON.stringify(err));
						}
					});
				});
			});
		};

		var onRequestSucceeded = function onRequestSucceeded() {
			alert('File saved succesfully!');
		};

		var onRequestFailed = function onRequestFailed(sender, args) {
			alert(args.get_message());
		};

		var script = updateFile + " " + onRequestSucceeded + " " + onRequestFailed;
		script = script.replace("REPLACE-FILE-URL", event.url);
		script = script.replace("REPLACE-CONTENT", escape(content));
		script = script + " updateFile();";

		chrome.devtools.inspectedWindow.eval(script);
	});
});

chrome.devtools.panels.create("SharePoint", "", "panel.html",
	function(panel) {
		//
	}
);
