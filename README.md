Chrome SP Editor
==
A Google Chrome Extension for creating and updating files (js, css) in SharePoint Online from Chrome Developer Tools

## Version history
* 1.2.18 Added possibility to create indexed webproperties
* 1.2.17 Small fix
* 1.2.16 Small fix
* 1.2.15 All injections will now respect the sequence, no matter if loaded from CDN or locally
* 1.2.14 Small fix
* 1.2.13 Added possibility to inject new file from add new file view.
* 1.2.12 Fixed issue where editors in different tabs could affect others settings.
* 1.2.11 Added default content to new js/css files created from the editor.
* 1.2.10 Bug fix. Edited file was always published as a major version.
* 1.2.9 Fixed major bug after latest improvements
* 1.2.8 Added notifications for all events. Removed rest of the alert boxes
* 1.2.7 Added file name to the notification
* 1.2.6 Changed alert boxes to notifications when saving a file
* 1.2.5 Added SP2013 OnPrem support
* 1.2.4 Added filtering for propertybag value listing
* 1.2.3 Small messaging enhancements
* 1.2.2 Small messaging enhancements
* 1.2.1 Small usability enhancements
* 1.2.0 Added support for view, add, edit and delete web propertybag values
* 1.1.0 Added support for chrome workspaces and querystring for injections
* 1.0.0 First published version

## Description

Creating and editing js / css files in SharePoint Online from any device which has Chrome desktop browser.
Also possibility to add local and external js/css resources references with usercustomactions.

Introduction video http://youtu.be/Nk_NZhdpZEo

## Installation
Install extension from Chrome web store http://tiny.cc/chromesp

## Manual installation
Clone the repository
* git clone https://github.com/tavikukko/Chrome-SP-Editor.git
* Open Chrome with url chrome://extensions/
* Click "Load unpacked extension..." and select Chrome-SP-Editor folder

## Usage

Go to your SharePoint Online site and
open Chrome developer tools.

### Disable Chrome Developer Tools cache
![alt](http://i.stack.imgur.com/LcDvz.png)

### Edit files
* Select SharePoint tab, select "Save to SharePoint" from left navigation" and select "Update changes to SharePoint".
* Select sources tab
* Select js/css file for editing
* Make changes and save (cmd+s / ctrl+s)
* You will get promt saying if the save was successful or not

### Create files
* Select SharePoint tab, select "Files" from left navigation
* Write filename (.js/.css) and press add
* New empty file will be created in the Style library of the rootweb

### Add css / js references to site / sitecollection
* Select SharePoint tab, select "Scriptlinks" from left navigation
* Give sequence for the link to be added. The sequence will tell the order to load the files
* Add the URL to the file. Local js files, use ~sitecollection/path/to/your/file.js. Local css and external css and js files must use absolute url.
* From the dropdown, select if you want the file to be added only to current site, or to the whole site collection.

### Web properties
* Select SharePoint tab, select "Web properties" from left navigation
* Add new property and value and press "Add property"
* Edit or modify current properties from the list below

### Chrome Workspaces
* The tools works also when using Chrome workspaces, is saves the file to the disk and also the SharePoint.

### Known issues
* [#3](https://github.com/tavikukko/Chrome-SP-Editor/issues/3) The tool does not work on personal site frontpage, _layouts/15/onedrive.aspx. (Found by [admiralman](https://github.com/admiralman))
