SP Editor
==
A Google Chrome Extension for creating and updating files (js, css) in SharePoint Online from Chrome Developer Tools

Here's a great introduction video by [Jeff Jones](http://www.spjeff.com/2017/04/24/video-sp-editor-chrome-extension)


[![](https://raw.githubusercontent.com/tavikukko/Chrome-SP-Editor/master/icons/icon-video.png)](http://www.spjeff.com/2017/04/24/video-sp-editor-chrome-extension "Introduction Video")

## Version history
- 5.6.17
    * Added link to Modern App Catalog, thanks [@MarkusLanger](https://github.com/MarkusLanger) for the PR!
    * Fixed issue where in some pages SP Editor was not able to get the context, thanks [@anoopt](https://github.com/anoopt) for the fix!
- 5.6.16
    * Updated PnPjs to 2.11.0
    * Updated monaco-editor to 0.30.1
- 5.6.15
    * Fixed issue with Search, thanks [@jhholm](https://github.com/jhholm) for the PR!
    * Updated PnPjs to 2.10.0
    * Updated monaco-editor to 0.29.1
    * Reverted microsoft-graph-client back to 2.2.1
- 5.6.14 updates
    * removed unused permissions
- 5.6.13 updates
    * Issue with pagelayout change fixed
    * Updated PnPjs to 2.8.0
    * Updated monaco-editor to 0.27.0
    * updated microsoft-graph-client to 3.0.0
- 5.6.12 updates
    * Updated PnPjs to 2.7.0
- 5.6.11 bug fix
    * Fixed issue SP Editor not working in incognito mode
- 5.6.10 updates
    * Updated PnPjs to 2.6.0
    * Updated monaco-editor to 0.25.2
    * fixed issue with search not showing results, thanks [@alooft](https://github.com/alooft) & [@MarkusLanger](https://github.com/MarkusLanger)
    * fixed Classic Admin Center url, thanks [@Gennady-G](https://github.com/Gennady-G)
- 5.6.9 updates
    * Updated PnPjs to 2.3.0
    * Updated monaco-editor to 0.23.0
- 5.6.8 bug fix
    * Saving file using sources tab was not working, thanks [@Gennady-G](https://github.com/Gennady-G) for spotting it
- 5.6.7 updates
    * Updated PnPjs to 2.1.1
    * Updated monaco-editor to 0.22.3
- 5.6.6 updates
    * Updated PnPjs to 2.1.0
- 5.6.5 bug fix
    * fixed bug related to cache
- 5.6.4 updates
    * Updated PnPjs to 2.0.13
- 5.6.3 updates
    * Updated Graph SDK Client to 2.2.1
    * fixed issue in search, now get all managed properties for user objects, thanks [@kasperbolarsen](https://github.com/kasperbolarsen)
- 5.6.2 updates
    * Updated PnPjs to 2.0.12
    * Updated Graph SDK Client to 2.1.1
- 5.6.1 Small fix
- 5.6.0 New feature
    * Graph SDK Console
    * removed Graph Man
- 5.5.11 updates
    * Updated PnPjs to 2.0.11
- 5.5.10 updates
    * Updated PnPjs to 2.0.10
    * Updated monaco-editor to 0.21.2
- 5.5.9 updated quicklinks
    * Added link new Term store and maintenancemode, thanks [@Rafaelki](https://github.com/Rafaelki)
    * Updated PnPjs to 2.0.6
- 5.5.8 updated quicklinks
    * Added link "Sign in as another user" to on-premises
    * Updated PnPjs to 2.0.5
- 5.5.7 updated quicklinks
    * Added link "Sign in as another user", thanks [@Gennady-G](https://github.com/Gennady-G)
- 5.5.5 updates PnPjs to 2.0.4
- 5.5.4 small fixes
    * Fixed issue with Modern Properties, thanks [@IvanTheBearable](https://github.com/IvanTheBearable) 
- 5.5.3 updates & speedmode
    * Updated PnPjs to 2.0.3
    * Updated sp-clientsvc to 1.3.10
    * Updated sp-taxonomyto to 1.3.10
    * Updated monaco-editor to 0.20.0
    * speedmode in quiclinks
- 5.5.2 updates
    * Updated PnPjs to 2.0.2
    * Updated sp-clientsvc to 1.3.9
    * Updated sp-taxonomyto to 1.3.9
- 5.5.1 updates
    * Updated PnPjs to 2.0.1
    * Updated monaco-editor to 0.19.3
- 5.5.0 updates
    * Updated PnPjs to 2.0.0
      - Selective Imports
      - Presets
      - Invokable Objects
      - Aliased Parameters
    * File editor: color picker with css colors
    * Updated monaco-editor to 0.19.0
- 5.4.8 updates
    * Updated PnPjs to 1.3.8
- 5.4.7 updates
    * Updated PnPjs to 1.3.7
- 5.4.6 GraphMan fix
- 5.4.5 bug fix
    - Fixed GraphMan functionality, thanks [@thomyg](https://github.com/thomyg) 
    - Fixed snippets in PnPjs Console
- 5.4.4 bug fix
    * previous fix did not work on all tenants, added conditional check for siteid/SiteId
- 5.4.3 bug fix
    * tenant properties was failing, siteid property was changed to SiteId
- 5.4.2 updates
    * Updated PnPjs to 1.3.6
    * Updated monaco-editor to 0.18.1
- 5.4.1 bug fix & updates
    * For some reason the uniqueId property disapeared from _spPageContextInfo... workaround was to fetch it
    * Updated monaco-editor to 0.18.0
- 5.4.0 New feature in search
    * Search current page and show all available managed properties
- 5.3.1 Small adjustments
- 5.3.0 New feature
    * Change Promoted State
- 5.2.0 New feature in Search
    * View all ManagedProperties
- 5.1.1 Small adjustments 
- 5.1.0 New feature in Quick links
    * Change PageLayoutType for modern page (Home, Article, SingleWebPartAppPage)
- 5.0.6 New link to Quick links
    * Link to Site contents
- 5.0.5 updates
    * Updated PnPjs to 1.3.5
- 5.0.4 added possibility to modify loadedjs/css also in modern pages, thanks [@Gennady-G](https://github.com/Gennady-G)
- 5.0.3 updates
    * Updated PnPjs to 1.3.4
    * Updated monaco-editor 0.17.1
- 5.0.2 small adjustments
- 5.0.1 updates
    * Updated PnPjs to 1.3.3
    * Updated monaco-editor 0.17.0
    * Updated Riot 3.13.2
- 5.0.0 New feature
    * Quick links, thanks [@poikjo](https://github.com/poikjo)
    * Quick access to _spPageContextInfo
- 4.6.1 small fixes in search feature
- 4.6.0 New features in Search
    * RefinementFilters, thanks [@forgetalex](https://github.com/forgetalex)
    * SourceIds
    * SortList
- 4.5.3 updates
    * Fixed bug in Page Editor, which stopped working after page refresh
- 4.5.2 updates
    * Updated PnPjs to 1.3.2
- 4.5.1 updates
    * Updated PnPjs to 1.3.1
    * Updated monaco editor 0.16.2
- 4.5.0 updates and bug fixes
    * Updated PnPjs to 1.3.0
    * Updated monaco editor 0.16.0
    * Added max length (80) to webhook clientstate, thanks [@thomyg](https://github.com/thomyg) 
    * Fixed issue with chrome devtool shorcuts popping up when hitting the shortcut when editing files, thanks [@johannes-z](https://github.com/johannes-z) for reporting
    * Support for SP2019
- 4.4.1 Refactoring
- 4.4.0 New feature in Search
    * Request reindex for web, thanks [@koskila](https://github.com/koskila) for the contribution.
    * Updated PnPjs to 1.2.6
- 4.3.2 Updated PnPjs to 1.2.3
- 4.3.1 Bug fix in Modern Properties
- 4.3.0 Updated PnPjs to 1.2.1 and monaco editor to 0.14.3 
- 4.2.1 Search query tool enhancements
    * submit on Enter
    * auto scroll to results
    * view preview of search payload
    * show spinner while searching
    * show errors
- 4.2.0 New feature
    * Search query tool
- 4.1.4 Added optional ClientState when subscribing to list webhooks, thanks [@thomyg](https://github.com/thomyg) for the contribution.
- 4.1.3 Updated PnPjs to 1.1.4
- 4.1.2 Updated PnPjs to 1.1.3
- 4.1.1 Updated PnPjs to 1.1.2
- 4.1.0 Updated monaco editor to 0.13.1
    * Added some new sample scripts
    * Restored snippets
- 4.0.0 Updated PnPjs Console to use new PnPjs modules
    * bugfix: css injections will not be loaded when in termstoremanager, thanks [@juhaalhojoki](https://github.com/juhaalhojoki)
- 3.7.0 New feature in Modern Properties
    * View HubSites and Sites connected to HubSites
- 3.6.3 New feature in Webhooks
    * Added button to update webhook expiration date for 6 months more
- 3.6.2 New feature in File Editor
    * Pressing ctrl/cmd + D downloads the current file in editor
    * Updated sp-pnp-js to 3.0.6
- 3.6.1 some adjustments
- 3.6.0 New feature
    * Manage Site Designs & Scripts
- 3.5.1 bug fix for Tenant Properties
- 3.5.0 Updated feature
    * Modern properties: View/Add/Remove Tenant Properties
    * Updated sp-pnp-js to 3.0.4
- 3.4.0 Updated feature
    * Modern properties: Add/Remove public/private origins, thanks [@ytterstrom](https://github.com/ytterstrom)
    * Updated sp-pnp-js to 3.0.3
- 3.3.2 _legacyPageContext bug fix (modern)
- 3.3.1 File editor bug fix (on-prem)
- 3.3.0 File editor update
    * Browse subsites
- 3.2.1 Bug fixes 
    * Possible to have multiple editor open
    * Moved save settings to main menu
- 3.2.0 Update in Modern properties 
    * Enable/Disable O365 Public/Private CDN
- 3.1.0 New feature
    * Modern properties: enable/disable scripts in modern team & communication sites
    * Webhooks will now show hidden lists
- 3.0.1 bug fix
    * List webhooks did not show
- 3.0.0 New feature
    * Graph Man: query graph.microsoft.com api from PnP JS Console
- 2.4.5 bug fix and new snippet, thanks [@ytterstrom](https://github.com/ytterstrom)
- 2.4.4 SP2013 headers fix, thanks [@ytterstrom](https://github.com/ytterstrom)
- 2.4.3 Snippets update
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
    sp: {
        headers: {            
            "Accept": "application/json;odata=verbose",
        }
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
