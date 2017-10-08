SP Editor
==
A Google Chrome Extension for creating and updating files (js, css) in SharePoint Online from Chrome Developer Tools

Here's a great introduction video by [Jeff Jones](http://www.spjeff.com/2017/04/24/video-sp-editor-chrome-extension)


[![](https://raw.githubusercontent.com/tavikukko/Chrome-SP-Editor/master/icons/icon-video.png)](http://www.spjeff.com/2017/04/24/video-sp-editor-chrome-extension "Introduction Video")

## Version history
- 2.4.2 Changed snippet prefix to "snip"
- 2.4.1 Small fixes
    * error messages fix
    * PnP JS Console focus fix
- 2.4.0 New feature
    * PnP JS Console now with pre-defided snippets (submit your favourite snippets, will add them!)
    * Updated sp-pnp-js to 3.0.1
- 2.3.1 Small fixes
    * Fixed issue with PnP JS Console in modern pages
    * Fixed issue with File editor in modern pages
- 2.3.0 Upgraded monaco-editor to version 0.10.0
- 2.2.3 Small fix for modern pages / sites.
- 2.2.2 Updated sp-pnp-js to 2.0.8
- 2.2.1 Updated sp-pnp-js to 2.0.6
- 2.2 New Feature
    * AppCatalog: View and edit all apps in App Catalog
- 2.1.2 updates
    * Enhancements in Page editor: reorder webpart drag&drop by [@andrei-markeev](https://github.com/andrei-markeev)
    * Updated sp-pnp-js to 2.0.5
    * added CDN support for onpremise scripts
- 2.1.1 small fixes
- 2.1 New Feature
    * File editor: View and edit all files on current site
        * white file icon = content file
        * red file icon = ghosted file (Un-Customized)
        * yellow file icon = unghosted file (Customized)
    * Updated sp-pnp-js to 2.0.4
- 2.0 Almost complete re-write
    * Converted all pages to use riot.js ( Thanks [@andrei-markeev](https://github.com/andrei-markeev) )
    * Updated sp-pnp-js to 2.0.3
- 1.7.2 Small fixes
- 1.7.1 Small fixes
- 1.7 New Feature
    * List Properties: view, edit, add, remove and index list RootFolder properties
    * Enhancements in Page editor: add & remove webparts by [@andrei-markeev](https://github.com/andrei-markeev)
- 1.6.1 Small fix
- 1.6 New Feature
    * Page editor: edit webpart properties. created by [@andrei-markeev](https://github.com/andrei-markeev)
- 1.5 New Feature
    * PnP JS Console: Write TypeScript using PnP-JS-Core definitions and execute on current context
    * Updated pnp-js-core to v2.0.2
- 1.4 Bug fixes
    * Fixed issue when saving files from another web/sitecollection
    * Fixed issue about Scriptlinks were not always rendered
    * Updated pnp-js-core to v2.0.1
- 1.3.1 Name and Icon change
- 1.3.0 Added possibility to create webhooks for lists
    * Changed SharePoint Client Object Model to PnP-JS-Core
    * Chrome SP Editor works now in classic and modern pages
    * Chrome SP Editor works now with SP2013, SP2016 and SharePoint Online
    * Fixed some rendering issues
- 1.2.18 Added possibility to create indexed webproperties
- 1.2.17 Small fix
- 1.2.16 Small fix
- 1.2.15 All injections will now respect the sequence, no matter if loaded from CDN or locally
- 1.2.14 Small fix
- 1.2.13 Added possibility to inject new file from add new file view.
- 1.2.12 Fixed issue where editors in different tabs could affect others settings.
- 1.2.11 Added default content to new js/css files created from the editor.
- 1.2.10 Bug fix. Edited file was always published as a major version.
- 1.2.9 Fixed major bug after latest improvements
- 1.2.8 Added notifications for all events. Removed rest of the alert boxes
- 1.2.7 Added file name to the notification
- 1.2.6 Changed alert boxes to notifications when saving a file
- 1.2.5 Added SP2013 OnPrem support
- 1.2.4 Added filtering for propertybag value listing
- 1.2.3 Small messaging enhancements
- 1.2.2 Small messaging enhancements
- 1.2.1 Small usability enhancements
- 1.2.0 Added support for view, add, edit and delete web propertybag values
- 1.1.0 Added support for chrome workspaces and querystring for injections
- 1.0.0 First published version

## Description

Creating and editing js / css files in SharePoint Online from any device which has Chrome desktop browser.
Also possibility to add local and external js/css resources references with usercustomactions.

## Installation
Install extension from Chrome web store https://chrome.google.com/webstore/detail/sp-editor/ecblfcmjnbbgaojblcpmjoamegpbodhd

## Manual installation
Clone the repository
* git clone https://github.com/tavikukko/Chrome-SP-Editor.git
* Open Chrome with url chrome://extensions/
* Click "Load unpacked extension..." and select Chrome-SP-Editor folder

## Usage

Go to your SharePoint site and open Chrome developer tools.

### Disable Chrome Developer Tools cache
![alt](http://i.stack.imgur.com/LcDvz.png)

### Edit files
* Select SharePoint tab, select "Save to SharePoint" from left navigation" and select "Update changes to SharePoint".
* Select sources tab
* Select js/css file for editing
* Make changes and save (cmd+s / ctrl+s)
* You will get notifivation if the save was successful or not

### Create files
* Select SharePoint tab, select "Files" from left navigation
* Write filename (.js/.css) and press add
* New empty file will be created in the Style library of the rootweb
* You can inject the file after adding it

### Add css / js references to site / sitecollection
* Select SharePoint tab, select "Scriptlinks" from left navigation
* Give sequence for the link to be added. The sequence will tell the order to load the files
* Add the URL to the file. Local js files, use ~sitecollection/path/to/your/file.js. Local css and external css and js files must use absolute url.
* From the dropdown, select if you want the file to be added only to current site, or to the whole site collection.

### Web properties
* Select SharePoint tab, select "Web properties" from left navigation
* Add new property and value and press "Add property"
* Edit or modify current properties from the list below
* click index in you want make the property searchable (you need to create managedproperty after the property has been crawled)

### List properties
* Select SharePoint tab, select "List properties" from left navigation
* Select list from dropdown to see RootFolder properties
* Add new property and value and press "Add property"
* Edit or modify current properties from the list below
* click index in you want make the property searchable (you need to create managedproperty after the property has been crawled)

### Webhooks
* Select list where the webhook subscription will be added
* Give the full path to the endpoint (endpoint must handle POST request and return provided validationstring)

### PnP JS Console
* Write TypeScript using PnP-JS-Core definitions and execute on current context
* ctrl + d to execute
* for sp2013 change the headers of the request:
```
pnp.setup({
    headers: {
        "Accept": "application/json;odata=verbose",
    }
});
```
### Page editor
* Edit the webpart properties using the the editor.
* Make sure the page is checked out to be able to save it back with changes.

### File editor
* View all files and folder of the current web
* Ctrl + s to save edited file (select "Update changes to SharePoint" first)
    * white file icon = content file
    * red file icon = ghosted file (Un-Customized)
    * yellow file icon = unghosted file (Customized) 

### AppCatalog
* View and edit all apps in App Catalog
* Ctrl + s to save locally and Ctrl + D to upload back to appCatalog
    * blue icon mean that file has been edited locally but not yet uploaded to app catalog
### Chrome Workspaces
* SP Editor works also when using Chrome workspaces, it saves the file to the disk and also the SharePoint.
