chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(event, content) {
alert(event.url);
alert(content);

var script = "var clientContext;" +
"var website;" +

"SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);" +

"function sharePointReady() {" +
"    clientContext = SP.ClientContext.get_current();" +
"    website = clientContext.get_web();" +

"    clientContext.load(website);" +
"    clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);" +
"}"+
"function onRequestSucceeded() {" +
"    alert('URL of the website: ' + website.get_url());" +
"}"+
"function onRequestFailed(sender, args) {" +
"    alert('Error: ' + args.get_message());" +
"}";

      chrome.devtools.inspectedWindow.eval(script);
});
