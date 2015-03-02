Chrome SP Editor
==
A Google Chrome Extension for creating and updating files (js, css) in SharePoint Online from Chrome Developer Tools

## Description

Creating and editing js / css files in SharePoint Online from any device which has Chrome desktop browser.
Also possibility to add local and external js/css resources references with usercustomactions.

Introduction video http://youtu.be/Nk_NZhdpZEo

## Installation
* Install extension from Chrome web store http://tiny.cc/chromesp
* OR
* Clone the repository (git clone https://github.com/tavikukko/Chrome-SP-Editor.git OR download ZIP)
* Open Chrome with url chrome://extensions/
* Click "Load unpacked extension..." and select Chrome-SP-Editor folder

## Usage

Go to your SharePoint Online site and
open Chrome developer tools.
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

### Chrome Workspaces
* The tools works also when using Chrome workspaces, is saves the file to the disk and also the SharePoint.
