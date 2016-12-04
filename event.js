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

			Promise.all([SystemJS.import(pnp), SystemJS.import(alertify)]).then(function (modules) {
				var $pnp = modules[0];
				var alertify = modules[1];

				alertify.logPosition('bottom right');
				alertify.maxLogItems(2);

				var fileAbsUrl = "REPLACE-FILE-URL";
				if (fileAbsUrl.indexOf("?") > -1) fileAbsUrl = fileAbsUrl.substring(0, fileAbsUrl.indexOf("?"));
				var siteAbsoluteUrl = _spPageContextInfo.siteAbsoluteUrl;
				var siteServerRelativeUrl = _spPageContextInfo.siteServerRelativeUrl;
				if (siteServerRelativeUrl.length == 1) siteAbsoluteUrl += siteServerRelativeUrl;
				var fileRelUrl = fileAbsUrl.replace(siteAbsoluteUrl.substring(0, siteAbsoluteUrl.lastIndexOf(siteServerRelativeUrl)), "");
				var documentPath = fileAbsUrl.substring(0, fileAbsUrl.lastIndexOf("/"));
				var fileToUpdate = fileAbsUrl.substring(fileAbsUrl.lastIndexOf("/") + 1);
				var relativeFolderUrl = fileRelUrl.substring(0, fileRelUrl.lastIndexOf("/"));
				alertify.delay(5000).log("Updating file <b>" + fileToUpdate + "</b>...");

				var contentStr = unescape("REPLACE-CONTENT");
				var contentBytes = new Uint8Array(contentStr.length);
				for (var i = 0; i < contentStr.length; i++)
					contentBytes[i] = contentStr.charCodeAt(i);
				var comment = "Updated from Chrome SP Editor";
				var checkinType = 0;
				if (pblh) checkinType = 1;

				$pnp.sp.site.rootWeb.getFolderByServerRelativeUrl(relativeFolderUrl).files.getByName(fileToUpdate).get().then(function (result) {
					if (result.CheckOutType == 2) {
						$pnp.sp.site.rootWeb.getFolderByServerRelativeUrl(relativeFolderUrl).files.getByName(fileToUpdate).checkout().then(function (result) {
							$pnp.sp.site.rootWeb.getFolderByServerRelativeUrl(relativeFolderUrl).files.add(fileToUpdate, contentBytes).then(function (result) {
								$pnp.sp.site.rootWeb.getFolderByServerRelativeUrl(relativeFolderUrl).files.getByName(fileToUpdate).checkin(comment, checkinType).then(function (result) {
									alertify.delay(5000).success("File <b>" + fileToUpdate + "</b> updated successfully!");
								}).catch(function (data) {
									alertify.delay(10000).error(data.message.value);
								});
							}).catch(function (data) {
								alertify.delay(10000).error(data.message.value);
							});
						}).catch(function (data) {
							alertify.delay(10000).error(data.message.value);
						});
					} else {
						$pnp.sp.site.rootWeb.getFolderByServerRelativeUrl(relativeFolderUrl).files.add(fileToUpdate, contentBytes).then(function (result) {
							$pnp.sp.site.rootWeb.getFolderByServerRelativeUrl(relativeFolderUrl).files.getByName(fileToUpdate).checkin(comment, checkinType).then(function (result) {
								alertify.delay(5000).success("File <b>" + fileToUpdate + "</b> updated successfully!");
							}).catch(function (data) {
								alertify.delay(10000).error(data.message.value);
							});
						}).catch(function (data) {
							alertify.delay(10000).error(data.message.value);
						});
					}
				}).catch(function (data) {
					alertify.delay(10000).error(data.message.value);
				});
			});
		};

		var alertError = function alertError() {

			var errorMsg = arguments[1];

			Promise.all([SystemJS.import(alertify)]).then(function (modules) {
				var alertify = modules[0];

				alertify.logPosition('bottom right');
				alertify.maxLogItems(2);

				alertify.delay(10000).error(errorMsg);

			});
		};

		var exescript = function exescript(script) {
			var params = arguments;
			if (typeof SystemJS == 'undefined') {
				var s = document.createElement('script');
				s.src = sj;
				s.onload = function () {
					script.apply(this, params);
				};
				(document.head || document.documentElement).appendChild(s);
			}
			else script.apply(this, params);
		}

		var pnp = "var pnp = '" + chrome.extension.getURL('pnp.js') + "';";
		var alertify = "var alertify = '" + chrome.extension.getURL('alertify.js') + "';";
		var sj = "var sj = '" + chrome.extension.getURL('system.js') + "';";

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
					var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
					script += " exescript(alertError, 'Could not find '" + eventFileName + "' from current page.');";
					chrome.devtools.inspectedWindow.eval(script);
					return;
				}
			}

			var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateFile;
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
