riot.tag("save", `
<div id="page-content-wrapper">
<h1>SP Editor</h1>

<h2>Usage</h2>

<p>Go to your SharePoint site and open Chrome developer tools.</p>

<h3>Disable Chrome Developer Tools cache</h3>

<p><img src="http://i.stack.imgur.com/LcDvz.png" alt="alt" /></p>

<h3>Edit files</h3>

<ul>
<li>Select SharePoint tab, select "Save to SharePoint" from left navigation" and select "Update changes to SharePoint".</li>

<li>Select sources tab</li>

<li>Select js/css file for editing</li>

<li>Make changes and save (cmd+s / ctrl+s)</li>

<li>You will get notifivation if the save was successful or not</li>
</ul>

<h3>Create files</h3>

<ul>
<li>Select SharePoint tab, select "Files" from left navigation</li>

<li>Write filename (.js/.css) and press add</li>

<li>New empty file will be created in the Style library of the rootweb</li>

<li>You can inject the file after adding it</li>
</ul>

<h3>Add css / js references to site / sitecollection</h3>

<ul>
<li>Select SharePoint tab, select "Scriptlinks" from left navigation</li>

<li>Give sequence for the link to be added. The sequence will tell the order to load the files</li>

<li>Add the URL to the file. Local js files, use ~sitecollection/path/to/your/file.js. Local css and external css and js files must use absolute url.</li>

<li>From the dropdown, select if you want the file to be added only to current site, or to the whole site collection.</li>
</ul>

<h3>Web properties</h3>

<ul>
<li>Select SharePoint tab, select "Web properties" from left navigation</li>

<li>Add new property and value and press "Add property"</li>

<li>Edit or modify current properties from the list below</li>

<li>click index in you want make the property searchable (you need to create managedproperty after the property has been crawled)</li>
</ul>

<h3>List properties</h3>

<ul>
<li>Select SharePoint tab, select "List properties" from left navigation</li>

<li>Select list from dropdown to see RootFolder properties</li>

<li>Add new property and value and press "Add property"</li>

<li>Edit or modify current properties from the list below</li>

<li>click index in you want make the property searchable (you need to create managedproperty after the property has been crawled)</li>
</ul>

<h3>Webhooks</h3>

<ul>
<li>Select list where the webhook subscription will be added</li>

<li>Give the full path to the endpoint (endpoint must handle POST request and return provided validationstring)</li>
</ul>

<h3 >PnP JS Console</h3>

<ul>
<li>Write TypeScript using PnP-JS-Core definitions and execute on current context</li>

<li>ctrl + d to execute</li>

<li>for sp2013 change the headers of the request:</li>
</ul>



<h3>Page editor</h3>

<ul>
<li>Edit the webpart properties using the the editor.</li>

<li>Make sure the page is checked out to be able to save it back with changes.</li>
</ul>

<h3>File editor</h3>

<ul>
<li>View all files and folder of the current web</li>

<li>Ctrl + s to save edited file (select "Update changes to SharePoint" first)


<ul>
<li>white file icon = content file</li>

<li>red file icon = ghosted file (Un-Customized)</li>

<li>yellow file icon = unghosted file (Customized) </li></ul>
</li>
</ul>

<h3>AppCatalog</h3>

<ul>
<li>View and edit all apps in App Catalog</li>

<li>Ctrl + s to save locally and Ctrl + D to upload back to appCatalog


<ul>
<li>blue icon mean that file has been edited locally but not yet uploaded to app catalog</li></ul>
</li>
</ul>

<h3>Chrome Workspaces</h3>

<ul>
<li>SP Editor works also when using Chrome workspaces, it saves the file to the disk and also the SharePoint.</li>
</ul>
</div>
</div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      // init code here
      // bgautosave = false;
      // bgautopublish = false;
    };
/*
    this.autosave = function (e) {
      bgautosave = e.target.checked;
      var payload = { "type": "autosavechange", "content": e.target.checked, "tabId": chrome.devtools.inspectedWindow.tabId };
      port.postMessage(payload);

    }.bind(this);

    this.autopublish = function (e) {
      bgautopublish = e.target.checked;
      var payload = { "type": "autopublishchange", "content": e.target.checked, "tabId": chrome.devtools.inspectedWindow.tabId };
      port.postMessage(payload);

    }.bind(this);
*/
  });
