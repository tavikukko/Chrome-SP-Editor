chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(event, content) {
	var updateFile = function updateFile() {

	    var clientContext = new SP.ClientContext.get_current();
	    
	    var relUrl = url.replace(_spPageContextInfo.siteAbsoluteUrl,'');
	    var file = clientContext.get_site().get_rootWeb().getFileByServerRelativeUrl(url); 
	    var listItem = file.get_listItemAllFields();
		var lista = listItem.get_parentList();
	                
		var fileCreateInfo = new SP.FileCreationInformation();
	        fileCreateInfo.set_url("REPLACE-FILE-URL");
	        fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
	        fileCreateInfo.set_overwrite(true);
	        fileContent = "REPLACE-CONTENT";
		var unescapedFileContent = unescape(fileContent);

	        for (var i = 0; i < unescapedFileContent.length; i++) {
	    
	            fileCreateInfo.get_content().append(unescapedFileContent.charCodeAt(i));
	        }
	    
	     var existingFile = lista.get_rootFolder().get_files().add(fileCreateInfo);
	                
		clientContext.load(existingFile);
		clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);        
	};

	var onRequestSucceeded = function onRequestSucceeded() {
		alert('Done');
	};

	var onRequestFailed = function onRequestFailed(sender, args) {
	    alert(args.get_message());
	};

	var script = updateFile + ' ' + onRequestSucceeded + ' ' + onRequestFailed;
	script = script.replace("REPLACE-FILE-URL", event.url);
	script = script.replace("REPLACE-CONTENT", escape(content));
	script = script + " updateFile();";
	//alert(script.substring(script.length - 400));

	chrome.devtools.inspectedWindow.eval(script);
});
