String.prototype.hashCode = function () {
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
	String.prototype.endsWith = function (suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
}

chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function (event, content) {

	var port = chrome.runtime.connect();

	var payload = { "type": "save", "content": content.hashCode(), "tabId": chrome.devtools.inspectedWindow.tabId };

	port.postMessage(payload);

	port.onMessage.addListener(function (msg) {

		var updateFile = function updateFile() {

			var pblh = arguments[1];

			requirejs([alertify], function (alertify) {
				SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
				SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
					SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
						var fileAbsUrl = "REPLACE-FILE-URL";
						if (fileAbsUrl.indexOf("?") > -1) fileAbsUrl = fileAbsUrl.substring(0, fileAbsUrl.indexOf("?"));
						var siteAbsoluteUrl = _spPageContextInfo.siteAbsoluteUrl;
						var siteServerRelativeUrl = _spPageContextInfo.siteServerRelativeUrl;
						if (siteServerRelativeUrl.length == 1) siteAbsoluteUrl += siteServerRelativeUrl;
						var fileRelUrl = fileAbsUrl.replace(siteAbsoluteUrl.substring(0, siteAbsoluteUrl.lastIndexOf(siteServerRelativeUrl)), "");
						var documentPath = fileAbsUrl.substring(0, fileAbsUrl.lastIndexOf("/"));
						var fileToUpdate = fileAbsUrl.substring(fileAbsUrl.lastIndexOf("/") + 1);
						alertify.delay(5000).log("Updating file <b>" + fileToUpdate + "</b>...");

						var executor = new SP.RequestExecutor(documentPath);

						executor.executeAsync({
							url: documentPath + "/_api/contextinfo",
							method: "POST",
							headers: { "Accept": "application/json; odata=verbose" },
							success: function (data) {
								if (data.body) {
									var body = JSON.parse(data.body);
									var webUrl = body.d.GetContextWebInformation.WebFullUrl;
									this.publish = pblh;
									this.clientContext = new SP.ClientContext(webUrl);
									this.file = this.clientContext.get_web().getFileByServerRelativeUrl(fileRelUrl);
									this.clientContext.load(this.file);
									this.fileToUpdate = fileToUpdate;
									this.clientContext.executeQueryAsync(
										Function.createDelegate(this, updateFileSucceeded),
										Function.createDelegate(this, updateFileFailed));
								}
							},
							error: function (err) {
								alertify.delay(10000).error(JSON.stringify(err));
							}
						});
					});
				});
			});
		};

		var updateFileSucceeded = function updateFileSucceeded() {
			var self = this;
			requirejs([alertify], function (alertify) {

				var fileContent = "REPLACE-CONTENT";
				var unescapedFileContent = unescape(fileContent);

				var fileCreateInfo = new SP.FileCreationInformation();
				fileCreateInfo.set_content(new SP.Base64EncodedByteArray());

				for (var i = 0; i < unescapedFileContent.length; i++) {
					fileCreateInfo.get_content().append(unescapedFileContent.charCodeAt(i));
				}

				if (self.file.get_checkOutType() == SP.CheckOutType.none)
					self.file.checkOut();

				self.file.saveBinary(fileCreateInfo);

				if (!self.publish) self.file.checkIn('Updated from Chrome SP Editor', SP.CheckinType.minorCheckIn);
				else self.file.checkIn('Updated from Chrome SP Editor', SP.CheckinType.majorCheckIn);

				self.clientContext.load(self.file);
				self.clientContext.executeQueryAsync(
					Function.createDelegate(self, updateFileSucceeded2),
					Function.createDelegate(self, updateFileFailed));
			});
		};

		var updateFileFailed = function updateFileFailed(sender, args) {
			requirejs([alertify], function (alertify) {
				alertify.delay(10000).error(args.get_message());
				window.postMessage(JSON.stringify({ function: 'updateFile', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
			});
		};

		var updateFileSucceeded2 = function updateFileSucceeded2() {
			var self = this;
			requirejs([alertify], function (alertify) {
				alertify.delay(5000).success("File <b>" + self.fileToUpdate + "</b> updated successfully!");
				window.postMessage(JSON.stringify({ function: 'updateFile', success: true, result: null, source: 'chrome-sp-editor' }), '*');
			});
		};

		var alertifyConf = "alertify.logPosition('bottom right'); alertify.maxLogItems(2); ";

		var exescript = function exescript(script) {
			var params = arguments;
			if (typeof requirejs == 'undefined') {
				var s = document.createElement('script');
				s.src = r;
				s.onload = function () {
					script.apply(this, params);
				};
				(document.head || document.documentElement).appendChild(s);
			}
			else script.apply(this, params);
		}

		var pnp = "var pnp = '" + chrome.extension.getURL('pnp.js') + "';";
		var r = "var r = '" + chrome.extension.getURL('r.js') + "';";
		var alertify = "var alertify = '" + chrome.extension.getURL('alertify.js') + "';";

		var eventUrl = event.url.toLowerCase();

		chrome.devtools.inspectedWindow.getResources(function (resources) {
			// if using chrome "Workspaces" and "map file to network" we need to find the file from the request list
			if (eventUrl.indexOf("file:") > -1) {
				var eventFileName = eventUrl.substring(eventUrl.lastIndexOf('/') + 1);
				var filesCount = resources.length;
				for (i = 0; i < filesCount; i++) {
					var resource = resources[i].url.toLowerCase();

					if (resource.indexOf("?") > -1) {
						resource = resource.substring(0, resource.indexOf("?"));
					}
					if (resource.endsWith(eventFileName)) {
						eventUrl = resource;
						break;
					}
				}

				if (eventUrl.indexOf("file:") > -1) {
					chrome.devtools.inspectedWindow.eval(alertifyConf + " alertify.delay(10000).error('Could not find '" + eventFileName + "' from current page.')");
					return;
				}
			}

			var script = r + ' ' + alertify + ' ' + exescript + ' ' + updateFile + " " + updateFileSucceeded + " " + updateFileSucceeded2 + " " + updateFileFailed;
			script += " exescript(updateFile, " + msg.autoPublish + ");";
			script = script.replace("REPLACE-FILE-URL", eventUrl);
			script = script.replace("REPLACE-CONTENT", encodeURIComponent(content));

			chrome.devtools.inspectedWindow.eval(script);
		});
	});
});

chrome.devtools.panels.create("SharePoint", "", "panel.html",
	function (panel) {
		var port = chrome.runtime.connect();
		var payload = { "type": "autosavechange", "content": false, "tabId": chrome.devtools.inspectedWindow.tabId };
		port.postMessage(payload);

		payload = { "type": "autopublishchange", "content": false, "tabId": chrome.devtools.inspectedWindow.tabId };
		port.postMessage(payload);
		// add actions here if necessary
	}
);
