(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.graph"] = factory();
	else
		root["pnp.graph"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safeGlobal; });
// export either window or global
var safeGlobal = typeof global === "undefined" ? window : global;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*! adal-angular v1.0.17 2018-02-27 */
var AuthenticationContext=function(){"use strict";return AuthenticationContext=function(a){if(this.REQUEST_TYPE={LOGIN:"LOGIN",RENEW_TOKEN:"RENEW_TOKEN",UNKNOWN:"UNKNOWN"},this.RESPONSE_TYPE={ID_TOKEN_TOKEN:"id_token token",TOKEN:"token"},this.CONSTANTS={ACCESS_TOKEN:"access_token",EXPIRES_IN:"expires_in",ID_TOKEN:"id_token",ERROR_DESCRIPTION:"error_description",SESSION_STATE:"session_state",ERROR:"error",STORAGE:{TOKEN_KEYS:"adal.token.keys",ACCESS_TOKEN_KEY:"adal.access.token.key",EXPIRATION_KEY:"adal.expiration.key",STATE_LOGIN:"adal.state.login",STATE_RENEW:"adal.state.renew",NONCE_IDTOKEN:"adal.nonce.idtoken",SESSION_STATE:"adal.session.state",USERNAME:"adal.username",IDTOKEN:"adal.idtoken",ERROR:"adal.error",ERROR_DESCRIPTION:"adal.error.description",LOGIN_REQUEST:"adal.login.request",LOGIN_ERROR:"adal.login.error",RENEW_STATUS:"adal.token.renew.status",ANGULAR_LOGIN_REQUEST:"adal.angular.login.request"},RESOURCE_DELIMETER:"|",CACHE_DELIMETER:"||",LOADFRAME_TIMEOUT:6e3,TOKEN_RENEW_STATUS_CANCELED:"Canceled",TOKEN_RENEW_STATUS_COMPLETED:"Completed",TOKEN_RENEW_STATUS_IN_PROGRESS:"In Progress",LOGGING_LEVEL:{ERROR:0,WARN:1,INFO:2,VERBOSE:3},LEVEL_STRING_MAP:{0:"ERROR:",1:"WARNING:",2:"INFO:",3:"VERBOSE:"},POPUP_WIDTH:483,POPUP_HEIGHT:600},AuthenticationContext.prototype._singletonInstance)return AuthenticationContext.prototype._singletonInstance;if(AuthenticationContext.prototype._singletonInstance=this,this.instance="https://login.microsoftonline.com/",this.config={},this.callback=null,this.popUp=!1,this.isAngular=!1,this._user=null,this._activeRenewals={},this._loginInProgress=!1,this._acquireTokenInProgress=!1,this._renewStates=[],this._callBackMappedToRenewStates={},this._callBacksMappedToRenewStates={},this._openedWindows=[],this._requestType=this.REQUEST_TYPE.LOGIN,window._adalInstance=this,a.displayCall&&"function"!=typeof a.displayCall)throw new Error("displayCall is not a function");if(!a.clientId)throw new Error("clientId is required");this.config=this._cloneConfig(a),void 0===this.config.navigateToLoginRequestUrl&&(this.config.navigateToLoginRequestUrl=!0),this.config.popUp&&(this.popUp=!0),this.config.callback&&"function"==typeof this.config.callback&&(this.callback=this.config.callback),this.config.instance&&(this.instance=this.config.instance),this.config.loginResource||(this.config.loginResource=this.config.clientId),this.config.redirectUri||(this.config.redirectUri=window.location.href.split("?")[0].split("#")[0]),this.config.postLogoutRedirectUri||(this.config.postLogoutRedirectUri=window.location.href.split("?")[0].split("#")[0]),this.config.anonymousEndpoints||(this.config.anonymousEndpoints=[]),this.config.isAngular&&(this.isAngular=this.config.isAngular),this.config.loadFrameTimeout&&(this.CONSTANTS.LOADFRAME_TIMEOUT=this.config.loadFrameTimeout)},"undefined"!=typeof window&&(window.Logging={piiLoggingEnabled:!1,level:0,log:function(a){}}),AuthenticationContext.prototype.login=function(){if(this._loginInProgress)return void this.info("Login in progress");this._loginInProgress=!0;var a=this._guid();this.config.state=a,this._idTokenNonce=this._guid();var b=this._getItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST);b&&""!==b?this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST,""):b=window.location.href,this.verbose("Expected state: "+a+" startPage:"+b),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,b),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,a,!0),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"");var c=this._getNavigateUrl("id_token",null)+"&nonce="+encodeURIComponent(this._idTokenNonce);this.config.displayCall?this.config.displayCall(c):this.popUp?(this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,""),this._renewStates.push(a),this.registerCallback(a,this.config.clientId,this.callback),this._loginPopup(c)):this.promptUser(c)},AuthenticationContext.prototype._openPopup=function(a,b,c,d){try{var e=window.screenLeft?window.screenLeft:window.screenX,f=window.screenTop?window.screenTop:window.screenY,g=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=g/2-c/2+e,j=h/2-d/2+f,k=window.open(a,b,"width="+c+", height="+d+", top="+j+", left="+i);return k.focus&&k.focus(),k}catch(a){return this.warn("Error opening popup, "+a.message),this._loginInProgress=!1,this._acquireTokenInProgress=!1,null}},AuthenticationContext.prototype._handlePopupError=function(a,b,c,d,e){this.warn(d),this._saveItem(this.CONSTANTS.STORAGE.ERROR,c),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,d),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,e),b&&this._activeRenewals[b]&&(this._activeRenewals[b]=null),this._loginInProgress=!1,this._acquireTokenInProgress=!1,a&&a(d,null,c)},AuthenticationContext.prototype._loginPopup=function(a,b,c){var d=this._openPopup(a,"login",this.CONSTANTS.POPUP_WIDTH,this.CONSTANTS.POPUP_HEIGHT),e=c||this.callback;if(null==d){var f="Popup Window is null. This can happen if you are using IE";return void this._handlePopupError(e,b,"Error opening popup",f,f)}if(this._openedWindows.push(d),-1!=this.config.redirectUri.indexOf("#"))var g=this.config.redirectUri.split("#")[0];else var g=this.config.redirectUri;var h=this,i=window.setInterval(function(){if(!d||d.closed||void 0===d.closed){var a="Popup Window closed",c="Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";return h.isAngular&&h._broadcast("adal:popUpClosed",c+h.CONSTANTS.RESOURCE_DELIMETER+a),h._handlePopupError(e,b,a,c,c),void window.clearInterval(i)}try{var f=d.location;if(-1!=encodeURI(f.href).indexOf(encodeURI(g)))return h.isAngular?h._broadcast("adal:popUpHashChanged",f.hash):h.handleWindowCallback(f.hash),window.clearInterval(i),h._loginInProgress=!1,h._acquireTokenInProgress=!1,h.info("Closing popup window"),h._openedWindows=[],void d.close()}catch(a){}},1)},AuthenticationContext.prototype._broadcast=function(a,b){!function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype,window.CustomEvent=a}();var c=new CustomEvent(a,{detail:b});window.dispatchEvent(c)},AuthenticationContext.prototype.loginInProgress=function(){return this._loginInProgress},AuthenticationContext.prototype._hasResource=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);return b&&!this._isEmpty(b)&&b.indexOf(a+this.CONSTANTS.RESOURCE_DELIMETER)>-1},AuthenticationContext.prototype.getCachedToken=function(a){if(!this._hasResource(a))return null;var b=this._getItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a),c=this._getItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a),d=this.config.expireOffsetSeconds||300;return c&&c>this._now()+d?b:(this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a,""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a,0),null)},AuthenticationContext.prototype.getCachedUser=function(){if(this._user)return this._user;var a=this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);return this._user=this._createUser(a),this._user},AuthenticationContext.prototype.registerCallback=function(a,b,c){this._activeRenewals[b]=a,this._callBacksMappedToRenewStates[a]||(this._callBacksMappedToRenewStates[a]=[]);var d=this;this._callBacksMappedToRenewStates[a].push(c),this._callBackMappedToRenewStates[a]||(this._callBackMappedToRenewStates[a]=function(c,e,f,g){d._activeRenewals[b]=null;for(var h=0;h<d._callBacksMappedToRenewStates[a].length;++h)try{d._callBacksMappedToRenewStates[a][h](c,e,f,g)}catch(f){d.warn(f)}d._callBacksMappedToRenewStates[a]=null,d._callBackMappedToRenewStates[a]=null})},AuthenticationContext.prototype._renewToken=function(a,b,c){this.info("renewToken is called for resource:"+a);var d=this._addAdalFrame("adalRenewFrame"+a),e=this._guid()+"|"+a;this.config.state=e,this._renewStates.push(e),this.verbose("Renew token Expected state: "+e),c=c||"token";var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl(c,a),"prompt");c===this.RESPONSE_TYPE.ID_TOKEN_TOKEN&&(this._idTokenNonce=this._guid(),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),f+="&nonce="+encodeURIComponent(this._idTokenNonce)),f+="&prompt=none",f=this._addHintParameters(f),this.registerCallback(e,a,b),this.verbosePii("Navigate to:"+f),d.src="about:blank",this._loadFrameTimeout(f,"adalRenewFrame"+a,a)},AuthenticationContext.prototype._renewIdToken=function(a,b){this.info("renewIdToken is called");var c=this._addAdalFrame("adalIdTokenFrame"),d=this._guid()+"|"+this.config.clientId;this._idTokenNonce=this._guid(),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),this.config.state=d,this._renewStates.push(d),this.verbose("Renew Idtoken Expected state: "+d);var e=null===b||void 0===b?null:this.config.clientId,b=b||"id_token",f=this._urlRemoveQueryStringParameter(this._getNavigateUrl(b,e),"prompt");f+="&prompt=none",f=this._addHintParameters(f),f+="&nonce="+encodeURIComponent(this._idTokenNonce),this.registerCallback(d,this.config.clientId,a),this.verbosePii("Navigate to:"+f),c.src="about:blank",this._loadFrameTimeout(f,"adalIdTokenFrame",this.config.clientId)},AuthenticationContext.prototype._urlContainsQueryStringParameter=function(a,b){return new RegExp("[\\?&]"+a+"=").test(b)},AuthenticationContext.prototype._urlRemoveQueryStringParameter=function(a,b){var c=new RegExp("(\\&"+b+"=)[^&]+");return a=a.replace(c,""),c=new RegExp("("+b+"=)[^&]+&"),a=a.replace(c,""),c=new RegExp("("+b+"=)[^&]+"),a=a.replace(c,"")},AuthenticationContext.prototype._loadFrameTimeout=function(a,b,c){this.verbose("Set loading state to pending for: "+c),this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS+c,this.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS),this._loadFrame(a,b);var d=this;setTimeout(function(){if(d._getItem(d.CONSTANTS.STORAGE.RENEW_STATUS+c)===d.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS){d.verbose("Loading frame has timed out after: "+d.CONSTANTS.LOADFRAME_TIMEOUT/1e3+" seconds for resource "+c);var a=d._activeRenewals[c];a&&d._callBackMappedToRenewStates[a]&&d._callBackMappedToRenewStates[a]("Token renewal operation failed due to timeout",null,"Token Renewal Failed"),d._saveItem(d.CONSTANTS.STORAGE.RENEW_STATUS+c,d.CONSTANTS.TOKEN_RENEW_STATUS_CANCELED)}},d.CONSTANTS.LOADFRAME_TIMEOUT)},AuthenticationContext.prototype._loadFrame=function(a,b){var c=this;c.info("LoadFrame: "+b);var d=b;setTimeout(function(){var b=c._addAdalFrame(d);""!==b.src&&"about:blank"!==b.src||(b.src=a,c._loadFrame(a,d))},500)},AuthenticationContext.prototype.acquireToken=function(a,b){if(this._isEmpty(a))return this.warn("resource is required"),void b("resource is required",null,"resource is required");var c=this.getCachedToken(a);return c?(this.info("Token is already in cache for resource:"+a),void b(null,c,null)):this._user||this.config.extraQueryParameter&&-1!==this.config.extraQueryParameter.indexOf("login_hint")?void(this._activeRenewals[a]?this.registerCallback(this._activeRenewals[a],a,b):(this._requestType=this.REQUEST_TYPE.RENEW_TOKEN,a===this.config.clientId?this._user?(this.verbose("renewing idtoken"),this._renewIdToken(b)):(this.verbose("renewing idtoken and access_token"),this._renewIdToken(b,this.RESPONSE_TYPE.ID_TOKEN_TOKEN)):this._user?(this.verbose("renewing access_token"),this._renewToken(a,b)):(this.verbose("renewing idtoken and access_token"),this._renewToken(a,b,this.RESPONSE_TYPE.ID_TOKEN_TOKEN)))):(this.warn("User login is required"),void b("User login is required",null,"login required"))},AuthenticationContext.prototype.acquireTokenPopup=function(a,b,c,d){if(this._isEmpty(a))return this.warn("resource is required"),void d("resource is required",null,"resource is required");if(!this._user)return this.warn("User login is required"),void d("User login is required",null,"login required");if(this._acquireTokenInProgress)return this.warn("Acquire token interactive is already in progress"),void d("Acquire token interactive is already in progress",null,"Acquire token interactive is already in progress");var e=this._guid()+"|"+a;this.config.state=e,this._renewStates.push(e),this._requestType=this.REQUEST_TYPE.RENEW_TOKEN,this.verbose("Renew token Expected state: "+e);var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",a),"prompt");if(f+="&prompt=select_account",b&&(f+=b),c&&-1===f.indexOf("&claims"))f+="&claims="+encodeURIComponent(c);else if(c&&-1!==f.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");f=this._addHintParameters(f),this._acquireTokenInProgress=!0,this.info("acquireToken interactive is called for the resource "+a),this.registerCallback(e,a,d),this._loginPopup(f,a,d)},AuthenticationContext.prototype.acquireTokenRedirect=function(a,b,c){if(this._isEmpty(a))return this.warn("resource is required"),void d("resource is required",null,"resource is required");var d=this.callback;if(!this._user)return this.warn("User login is required"),void d("User login is required",null,"login required");if(this._acquireTokenInProgress)return this.warn("Acquire token interactive is already in progress"),void d("Acquire token interactive is already in progress",null,"Acquire token interactive is already in progress");var e=this._guid()+"|"+a;this.config.state=e,this.verbose("Renew token Expected state: "+e);var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",a),"prompt");if(f+="&prompt=select_account",b&&(f+=b),c&&-1===f.indexOf("&claims"))f+="&claims="+encodeURIComponent(c);else if(c&&-1!==f.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");f=this._addHintParameters(f),this._acquireTokenInProgress=!0,this.info("acquireToken interactive is called for the resource "+a),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,window.location.href),this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,e,!0),this.promptUser(f)},AuthenticationContext.prototype.promptUser=function(a){a?(this.infoPii("Navigate to:"+a),window.location.replace(a)):this.info("Navigate url is empty")},AuthenticationContext.prototype.clearCache=function(){this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,""),this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST,""),this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,""),this._renewStates=[],this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,""),this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,""),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,"");var a=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);if(!this._isEmpty(a)){a=a.split(this.CONSTANTS.RESOURCE_DELIMETER);for(var b=0;b<a.length&&""!==a[b];b++)this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a[b],""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a[b],0)}this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,"")},AuthenticationContext.prototype.clearCacheForResource=function(a){this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,""),this._hasResource(a)&&(this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a,""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a,0))},AuthenticationContext.prototype.logOut=function(){this.clearCache(),this._user=null;var a;if(this.config.logOutUri)a=this.config.logOutUri;else{var b="common",c="";this.config.tenant&&(b=this.config.tenant),this.config.postLogoutRedirectUri&&(c="post_logout_redirect_uri="+encodeURIComponent(this.config.postLogoutRedirectUri)),a=this.instance+b+"/oauth2/logout?"+c}this.infoPii("Logout navigate to: "+a),this.promptUser(a)},AuthenticationContext.prototype._isEmpty=function(a){return void 0===a||!a||0===a.length},AuthenticationContext.prototype.getUser=function(a){if("function"!=typeof a)throw new Error("callback is not a function");if(this._user)return void a(null,this._user);var b=this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);this._isEmpty(b)?(this.warn("User information is not available"),a("User information is not available",null)):(this.info("User exists in cache: "),this._user=this._createUser(b),a(null,this._user))},AuthenticationContext.prototype._addHintParameters=function(a){if(this._user&&this._user.profile)if(this._user.profile.sid&&-1!==a.indexOf("&prompt=none"))this._urlContainsQueryStringParameter("sid",a)||(a+="&sid="+encodeURIComponent(this._user.profile.sid));else if(this._user.profile.upn&&(this._urlContainsQueryStringParameter("login_hint",a)||(a+="&login_hint="+encodeURIComponent(this._user.profile.upn)),!this._urlContainsQueryStringParameter("domain_hint",a)&&this._user.profile.upn.indexOf("@")>-1)){var b=this._user.profile.upn.split("@");a+="&domain_hint="+encodeURIComponent(b[b.length-1])}return a},AuthenticationContext.prototype._createUser=function(a){var b=null,c=this._extractIdToken(a);return c&&c.hasOwnProperty("aud")&&(c.aud.toLowerCase()===this.config.clientId.toLowerCase()?(b={userName:"",profile:c},c.hasOwnProperty("upn")?b.userName=c.upn:c.hasOwnProperty("email")&&(b.userName=c.email)):this.warn("IdToken has invalid aud field")),b},AuthenticationContext.prototype._getHash=function(a){return a.indexOf("#/")>-1?a=a.substring(a.indexOf("#/")+2):a.indexOf("#")>-1&&(a=a.substring(1)),a},AuthenticationContext.prototype.isCallback=function(a){a=this._getHash(a);var b=this._deserialize(a);return b.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)||b.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)||b.hasOwnProperty(this.CONSTANTS.ID_TOKEN)},AuthenticationContext.prototype.getLoginError=function(){return this._getItem(this.CONSTANTS.STORAGE.LOGIN_ERROR)},AuthenticationContext.prototype.getRequestInfo=function(a){a=this._getHash(a);var b=this._deserialize(a),c={valid:!1,parameters:{},stateMatch:!1,stateResponse:"",requestType:this.REQUEST_TYPE.UNKNOWN};if(b&&(c.parameters=b,b.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)||b.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)||b.hasOwnProperty(this.CONSTANTS.ID_TOKEN))){c.valid=!0;var d="";if(!b.hasOwnProperty("state"))return this.warn("No state returned"),c;if(this.verbose("State: "+b.state),d=b.state,c.stateResponse=d,this._matchState(c))return c;if(!c.stateMatch&&window.parent){c.requestType=this._requestType;for(var e=this._renewStates,f=0;f<e.length;f++)if(e[f]===c.stateResponse){c.stateMatch=!0;break}}}return c},AuthenticationContext.prototype._matchNonce=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN);if(b){b=b.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<b.length;c++)if(b[c]===a.profile.nonce)return!0}return!1},AuthenticationContext.prototype._matchState=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.STATE_LOGIN);if(b){b=b.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<b.length;c++)if(b[c]===a.stateResponse)return a.requestType=this.REQUEST_TYPE.LOGIN,a.stateMatch=!0,!0}var d=this._getItem(this.CONSTANTS.STORAGE.STATE_RENEW);if(d){d=d.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<d.length;c++)if(d[c]===a.stateResponse)return a.requestType=this.REQUEST_TYPE.RENEW_TOKEN,a.stateMatch=!0,!0}return!1},AuthenticationContext.prototype._getResourceFromState=function(a){if(a){var b=a.indexOf("|");if(b>-1&&b+1<a.length)return a.substring(b+1)}return""},AuthenticationContext.prototype.saveTokenFromHash=function(a){this.info("State status:"+a.stateMatch+"; Request type:"+a.requestType),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"");var b=this._getResourceFromState(a.stateResponse);if(a.parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION))this.infoPii("Error :"+a.parameters.error+"; Error description:"+a.parameters[this.CONSTANTS.ERROR_DESCRIPTION]),this._saveItem(this.CONSTANTS.STORAGE.ERROR,a.parameters.error),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,a.parameters[this.CONSTANTS.ERROR_DESCRIPTION]),a.requestType===this.REQUEST_TYPE.LOGIN&&(this._loginInProgress=!1,this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,a.parameters.error_description));else if(a.stateMatch){this.info("State is right"),a.parameters.hasOwnProperty(this.CONSTANTS.SESSION_STATE)&&this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE,a.parameters[this.CONSTANTS.SESSION_STATE]);var c;a.parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)&&(this.info("Fragment has access token"),this._hasResource(b)||(c=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS)||"",this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,c+b+this.CONSTANTS.RESOURCE_DELIMETER)),this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+b,a.parameters[this.CONSTANTS.ACCESS_TOKEN]),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+b,this._expiresIn(a.parameters[this.CONSTANTS.EXPIRES_IN]))),a.parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)&&(this.info("Fragment has id token"),this._loginInProgress=!1,this._user=this._createUser(a.parameters[this.CONSTANTS.ID_TOKEN]),this._user&&this._user.profile?this._matchNonce(this._user)?(this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN,a.parameters[this.CONSTANTS.ID_TOKEN]),b=this.config.loginResource?this.config.loginResource:this.config.clientId,this._hasResource(b)||(c=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS)||"",this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,c+b+this.CONSTANTS.RESOURCE_DELIMETER)),this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+b,a.parameters[this.CONSTANTS.ID_TOKEN]),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+b,this._user.profile.exp)):(this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,"Nonce received: "+this._user.profile.nonce+" is not same as requested: "+this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN)),this._user=null):(a.parameters.error="invalid id_token",a.parameters.error_description="Invalid id_token. id_token: "+a.parameters[this.CONSTANTS.ID_TOKEN],this._saveItem(this.CONSTANTS.STORAGE.ERROR,"invalid id_token"),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"Invalid id_token. id_token: "+a.parameters[this.CONSTANTS.ID_TOKEN])))}else a.parameters.error="Invalid_state",a.parameters.error_description="Invalid_state. state: "+a.stateResponse,this._saveItem(this.CONSTANTS.STORAGE.ERROR,"Invalid_state"),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"Invalid_state. state: "+a.stateResponse);this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS+b,this.CONSTANTS.TOKEN_RENEW_STATUS_COMPLETED)},AuthenticationContext.prototype.getResourceForEndpoint=function(a){if(this.config&&this.config.anonymousEndpoints)for(var b=0;b<this.config.anonymousEndpoints.length;b++)if(a.indexOf(this.config.anonymousEndpoints[b])>-1)return null;if(this.config&&this.config.endpoints)for(var c in this.config.endpoints)if(a.indexOf(c)>-1)return this.config.endpoints[c];return a.indexOf("http://")>-1||a.indexOf("https://")>-1?this._getHostFromUri(a)===this._getHostFromUri(this.config.redirectUri)?this.config.loginResource:null:this.config.loginResource},AuthenticationContext.prototype._getHostFromUri=function(a){var b=String(a).replace(/^(https?:)\/\//,"");return b=b.split("/")[0]},AuthenticationContext.prototype.handleWindowCallback=function(a){if(null==a&&(a=window.location.hash),this.isCallback(a)){var b=null,c=!1;this._openedWindows.length>0&&this._openedWindows[this._openedWindows.length-1].opener&&this._openedWindows[this._openedWindows.length-1].opener._adalInstance?(b=this._openedWindows[this._openedWindows.length-1].opener._adalInstance,c=!0):window.parent&&window.parent._adalInstance&&(b=window.parent._adalInstance);var d,e,f=b.getRequestInfo(a),g=null;e=c||window.parent!==window?b._callBackMappedToRenewStates[f.stateResponse]:b.callback,b.info("Returned from redirect url"),b.saveTokenFromHash(f),f.requestType===this.REQUEST_TYPE.RENEW_TOKEN&&window.parent?(window.parent!==window?b.verbose("Window is in iframe, acquiring token silently"):b.verbose("acquiring token interactive in progress"),d=f.parameters[b.CONSTANTS.ACCESS_TOKEN]||f.parameters[b.CONSTANTS.ID_TOKEN],g=b.CONSTANTS.ACCESS_TOKEN):f.requestType===this.REQUEST_TYPE.LOGIN&&(d=f.parameters[b.CONSTANTS.ID_TOKEN],g=b.CONSTANTS.ID_TOKEN);var h=f.parameters[b.CONSTANTS.ERROR_DESCRIPTION],i=f.parameters[b.CONSTANTS.ERROR];try{e&&e(h,d,i,g)}catch(a){b.error("Error occurred in user defined callback function: "+a)}window.parent!==window||c||(b.config.navigateToLoginRequestUrl?window.location.href=b._getItem(b.CONSTANTS.STORAGE.LOGIN_REQUEST):window.location.hash="")}},AuthenticationContext.prototype._getNavigateUrl=function(a,b){var c="common";this.config.tenant&&(c=this.config.tenant);var d=this.instance+c+"/oauth2/authorize"+this._serialize(a,this.config,b)+this._addLibMetadata();return this.info("Navigate url:"+d),d},AuthenticationContext.prototype._extractIdToken=function(a){var b=this._decodeJwt(a);if(!b)return null;try{var c=b.JWSPayload,d=this._base64DecodeStringUrlSafe(c);return d?JSON.parse(d):(this.info("The returned id_token could not be base64 url safe decoded."),null)}catch(a){this.error("The returned id_token could not be decoded",a)}return null},AuthenticationContext.prototype._base64DecodeStringUrlSafe=function(a){return a=a.replace(/-/g,"+").replace(/_/g,"/"),window.atob?decodeURIComponent(escape(window.atob(a))):decodeURIComponent(escape(this._decode(a)))},AuthenticationContext.prototype._decode=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=String(a).replace(/=+$/,"");var c=a.length;if(c%4==1)throw new Error("The token to be decoded is not correctly encoded.");for(var d,e,f,g,h,i,j,k,l="",m=0;m<c;m+=4){if(d=b.indexOf(a.charAt(m)),e=b.indexOf(a.charAt(m+1)),f=b.indexOf(a.charAt(m+2)),g=b.indexOf(a.charAt(m+3)),m+2===c-1){h=d<<18|e<<12|f<<6,i=h>>16&255,j=h>>8&255,l+=String.fromCharCode(i,j);break}if(m+1===c-1){h=d<<18|e<<12,i=h>>16&255,l+=String.fromCharCode(i);break}h=d<<18|e<<12|f<<6|g,i=h>>16&255,j=h>>8&255,k=255&h,l+=String.fromCharCode(i,j,k)}return l},AuthenticationContext.prototype._decodeJwt=function(a){if(this._isEmpty(a))return null;var b=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/,c=b.exec(a);return!c||c.length<4?(this.warn("The returned id_token is not parseable."),null):{header:c[1],JWSPayload:c[2],JWSSig:c[3]}},AuthenticationContext.prototype._convertUrlSafeToRegularBase64EncodedString=function(a){return a.replace("-","+").replace("_","/")},AuthenticationContext.prototype._serialize=function(a,b,c){var d=[];if(null!==b){d.push("?response_type="+a),d.push("client_id="+encodeURIComponent(b.clientId)),c&&d.push("resource="+encodeURIComponent(c)),d.push("redirect_uri="+encodeURIComponent(b.redirectUri)),d.push("state="+encodeURIComponent(b.state)),b.hasOwnProperty("slice")&&d.push("slice="+encodeURIComponent(b.slice)),b.hasOwnProperty("extraQueryParameter")&&d.push(b.extraQueryParameter);var e=b.correlationId?b.correlationId:this._guid();d.push("client-request-id="+encodeURIComponent(e))}return d.join("&")},AuthenticationContext.prototype._deserialize=function(a){var b,c=/\+/g,d=/([^&=]+)=([^&]*)/g,e=function(a){return decodeURIComponent(a.replace(c," "))},f={};for(b=d.exec(a);b;)f[e(b[1])]=e(b[2]),b=d.exec(a);return f},AuthenticationContext.prototype._decimalToHex=function(a){for(var b=a.toString(16);b.length<2;)b="0"+b;return b},AuthenticationContext.prototype._guid=function(){var a=window.crypto||window.msCrypto;if(a&&a.getRandomValues){var b=new Uint8Array(16);return a.getRandomValues(b),b[6]|=64,b[6]&=79,b[8]|=128,b[8]&=191,this._decimalToHex(b[0])+this._decimalToHex(b[1])+this._decimalToHex(b[2])+this._decimalToHex(b[3])+"-"+this._decimalToHex(b[4])+this._decimalToHex(b[5])+"-"+this._decimalToHex(b[6])+this._decimalToHex(b[7])+"-"+this._decimalToHex(b[8])+this._decimalToHex(b[9])+"-"+this._decimalToHex(b[10])+this._decimalToHex(b[11])+this._decimalToHex(b[12])+this._decimalToHex(b[13])+this._decimalToHex(b[14])+this._decimalToHex(b[15])}for(var c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",d="0123456789abcdef",e=0,f="",g=0;g<36;g++)"-"!==c[g]&&"4"!==c[g]&&(e=16*Math.random()|0),"x"===c[g]?f+=d[e]:"y"===c[g]?(e&=3,e|=8,f+=d[e]):f+=c[g];return f},AuthenticationContext.prototype._expiresIn=function(a){return a||(a=3599),this._now()+parseInt(a,10)},AuthenticationContext.prototype._now=function(){return Math.round((new Date).getTime()/1e3)},AuthenticationContext.prototype._addAdalFrame=function(a){if(void 0!==a){this.info("Add adal frame to document:"+a);var b=document.getElementById(a);if(!b){if(document.createElement&&document.documentElement&&(window.opera||-1===window.navigator.userAgent.indexOf("MSIE 5.0"))){var c=document.createElement("iframe");c.setAttribute("id",a),c.setAttribute("aria-hidden","true"),c.style.visibility="hidden",c.style.position="absolute",c.style.width=c.style.height=c.borderWidth="0px",b=document.getElementsByTagName("body")[0].appendChild(c)}else document.body&&document.body.insertAdjacentHTML&&document.body.insertAdjacentHTML("beforeEnd",'<iframe name="'+a+'" id="'+a+'" style="display:none"></iframe>');window.frames&&window.frames[a]&&(b=window.frames[a])}return b}},AuthenticationContext.prototype._saveItem=function(a,b,c){if(this.config&&this.config.cacheLocation&&"localStorage"===this.config.cacheLocation){if(!this._supportsLocalStorage())return this.info("Local storage is not supported"),!1;if(c){var d=this._getItem(a)||"";localStorage.setItem(a,d+b+this.CONSTANTS.CACHE_DELIMETER)}else localStorage.setItem(a,b);return!0}return this._supportsSessionStorage()?(sessionStorage.setItem(a,b),!0):(this.info("Session storage is not supported"),!1)},AuthenticationContext.prototype._getItem=function(a){return this.config&&this.config.cacheLocation&&"localStorage"===this.config.cacheLocation?this._supportsLocalStorage()?localStorage.getItem(a):(this.info("Local storage is not supported"),null):this._supportsSessionStorage()?sessionStorage.getItem(a):(this.info("Session storage is not supported"),null)},AuthenticationContext.prototype._supportsLocalStorage=function(){try{return!!window.localStorage&&(window.localStorage.setItem("storageTest","A"),"A"==window.localStorage.getItem("storageTest")&&(window.localStorage.removeItem("storageTest"),!window.localStorage.getItem("storageTest")))}catch(a){return!1}},AuthenticationContext.prototype._supportsSessionStorage=function(){try{return!!window.sessionStorage&&(window.sessionStorage.setItem("storageTest","A"),"A"==window.sessionStorage.getItem("storageTest")&&(window.sessionStorage.removeItem("storageTest"),!window.sessionStorage.getItem("storageTest")))}catch(a){return!1}},AuthenticationContext.prototype._cloneConfig=function(a){if(null===a||"object"!=typeof a)return a;var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},AuthenticationContext.prototype._addLibMetadata=function(){return"&x-client-SKU=Js&x-client-Ver="+this._libVersion()},AuthenticationContext.prototype.log=function(a,b,c,d){if(a<=Logging.level){if(!Logging.piiLoggingEnabled&&d)return;var e=(new Date).toUTCString(),f="";f=this.config.correlationId?e+":"+this.config.correlationId+"-"+this._libVersion()+"-"+this.CONSTANTS.LEVEL_STRING_MAP[a]+" "+b:e+":"+this._libVersion()+"-"+this.CONSTANTS.LEVEL_STRING_MAP[a]+" "+b,c&&(f+="\nstack:\n"+c.stack),Logging.log(f)}},AuthenticationContext.prototype.error=function(a,b){this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR,a,b)},AuthenticationContext.prototype.warn=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.WARN,a,null)},AuthenticationContext.prototype.info=function(a){
this.log(this.CONSTANTS.LOGGING_LEVEL.INFO,a,null)},AuthenticationContext.prototype.verbose=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE,a,null)},AuthenticationContext.prototype.errorPii=function(a,b){this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR,a,b,!0)},AuthenticationContext.prototype.warnPii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.WARN,a,null,!0)},AuthenticationContext.prototype.infoPii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.INFO,a,null,!0)},AuthenticationContext.prototype.verbosePii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE,a,null,!0)},AuthenticationContext.prototype._libVersion=function(){return"1.0.17"}, true&&module.exports&&(module.exports=AuthenticationContext,module.exports.inject=function(a){return new AuthenticationContext(a)}),AuthenticationContext}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Attachment", function() { return /* reexport */ Attachment; });
__webpack_require__.d(__webpack_exports__, "Attachments", function() { return /* reexport */ Attachments; });
__webpack_require__.d(__webpack_exports__, "Calendar", function() { return /* reexport */ Calendar; });
__webpack_require__.d(__webpack_exports__, "Calendars", function() { return /* reexport */ Calendars; });
__webpack_require__.d(__webpack_exports__, "Event", function() { return /* reexport */ Event; });
__webpack_require__.d(__webpack_exports__, "Events", function() { return /* reexport */ Events; });
__webpack_require__.d(__webpack_exports__, "Contact", function() { return /* reexport */ Contact; });
__webpack_require__.d(__webpack_exports__, "ContactFolder", function() { return /* reexport */ ContactFolder; });
__webpack_require__.d(__webpack_exports__, "ContactFolders", function() { return /* reexport */ ContactFolders; });
__webpack_require__.d(__webpack_exports__, "Contacts", function() { return /* reexport */ Contacts; });
__webpack_require__.d(__webpack_exports__, "Conversation", function() { return /* reexport */ Conversation; });
__webpack_require__.d(__webpack_exports__, "Conversations", function() { return /* reexport */ Conversations; });
__webpack_require__.d(__webpack_exports__, "Post", function() { return /* reexport */ Post; });
__webpack_require__.d(__webpack_exports__, "Posts", function() { return /* reexport */ Posts; });
__webpack_require__.d(__webpack_exports__, "Senders", function() { return /* reexport */ Senders; });
__webpack_require__.d(__webpack_exports__, "Thread", function() { return /* reexport */ Thread; });
__webpack_require__.d(__webpack_exports__, "Threads", function() { return /* reexport */ Threads; });
__webpack_require__.d(__webpack_exports__, "DirectoryObjectTypes", function() { return /* reexport */ DirectoryObjectTypes; });
__webpack_require__.d(__webpack_exports__, "DirectoryObject", function() { return /* reexport */ DirectoryObject; });
__webpack_require__.d(__webpack_exports__, "DirectoryObjects", function() { return /* reexport */ DirectoryObjects; });
__webpack_require__.d(__webpack_exports__, "Group", function() { return /* reexport */ Group; });
__webpack_require__.d(__webpack_exports__, "GroupType", function() { return /* reexport */ GroupType; });
__webpack_require__.d(__webpack_exports__, "Groups", function() { return /* reexport */ Groups; });
__webpack_require__.d(__webpack_exports__, "Insights", function() { return /* reexport */ Insights; });
__webpack_require__.d(__webpack_exports__, "SharedInsight", function() { return /* reexport */ SharedInsight; });
__webpack_require__.d(__webpack_exports__, "SharedInsights", function() { return /* reexport */ SharedInsights; });
__webpack_require__.d(__webpack_exports__, "TrendingInsight", function() { return /* reexport */ TrendingInsight; });
__webpack_require__.d(__webpack_exports__, "TrendingInsights", function() { return /* reexport */ TrendingInsights; });
__webpack_require__.d(__webpack_exports__, "UsedInsight", function() { return /* reexport */ UsedInsight; });
__webpack_require__.d(__webpack_exports__, "UsedInsights", function() { return /* reexport */ UsedInsights; });
__webpack_require__.d(__webpack_exports__, "Resource", function() { return /* reexport */ Resource; });
__webpack_require__.d(__webpack_exports__, "Invitations", function() { return /* reexport */ Invitations; });
__webpack_require__.d(__webpack_exports__, "Member", function() { return /* reexport */ Member; });
__webpack_require__.d(__webpack_exports__, "Members", function() { return /* reexport */ Members; });
__webpack_require__.d(__webpack_exports__, "MailFolder", function() { return /* reexport */ MailFolder; });
__webpack_require__.d(__webpack_exports__, "MailFolders", function() { return /* reexport */ MailFolders; });
__webpack_require__.d(__webpack_exports__, "MailboxSettings", function() { return /* reexport */ MailboxSettings; });
__webpack_require__.d(__webpack_exports__, "Message", function() { return /* reexport */ Message; });
__webpack_require__.d(__webpack_exports__, "Messages", function() { return /* reexport */ Messages; });
__webpack_require__.d(__webpack_exports__, "Drive", function() { return /* reexport */ Drive; });
__webpack_require__.d(__webpack_exports__, "DriveItem", function() { return /* reexport */ DriveItem; });
__webpack_require__.d(__webpack_exports__, "DriveItems", function() { return /* reexport */ DriveItems; });
__webpack_require__.d(__webpack_exports__, "Drives", function() { return /* reexport */ Drives; });
__webpack_require__.d(__webpack_exports__, "Root", function() { return /* reexport */ Root; });
__webpack_require__.d(__webpack_exports__, "Notebook", function() { return /* reexport */ Notebook; });
__webpack_require__.d(__webpack_exports__, "Notebooks", function() { return /* reexport */ Notebooks; });
__webpack_require__.d(__webpack_exports__, "OneNote", function() { return /* reexport */ OneNote; });
__webpack_require__.d(__webpack_exports__, "Section", function() { return /* reexport */ Section; });
__webpack_require__.d(__webpack_exports__, "Sections", function() { return /* reexport */ Sections; });
__webpack_require__.d(__webpack_exports__, "Photo", function() { return /* reexport */ Photo; });
__webpack_require__.d(__webpack_exports__, "Bucket", function() { return /* reexport */ Bucket; });
__webpack_require__.d(__webpack_exports__, "Buckets", function() { return /* reexport */ Buckets; });
__webpack_require__.d(__webpack_exports__, "Plan", function() { return /* reexport */ Plan; });
__webpack_require__.d(__webpack_exports__, "Planner", function() { return /* reexport */ Planner; });
__webpack_require__.d(__webpack_exports__, "Plans", function() { return /* reexport */ Plans; });
__webpack_require__.d(__webpack_exports__, "Task", function() { return /* reexport */ Task; });
__webpack_require__.d(__webpack_exports__, "Tasks", function() { return /* reexport */ Tasks; });
__webpack_require__.d(__webpack_exports__, "Subscription", function() { return /* reexport */ Subscription; });
__webpack_require__.d(__webpack_exports__, "Subscriptions", function() { return /* reexport */ Subscriptions; });
__webpack_require__.d(__webpack_exports__, "Channel", function() { return /* reexport */ Channel; });
__webpack_require__.d(__webpack_exports__, "Channels", function() { return /* reexport */ Channels; });
__webpack_require__.d(__webpack_exports__, "Tab", function() { return /* reexport */ Tab; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ Tabs; });
__webpack_require__.d(__webpack_exports__, "Team", function() { return /* reexport */ Team; });
__webpack_require__.d(__webpack_exports__, "Teams", function() { return /* reexport */ Teams; });
__webpack_require__.d(__webpack_exports__, "User", function() { return /* reexport */ User; });
__webpack_require__.d(__webpack_exports__, "Users", function() { return /* reexport */ Users; });
__webpack_require__.d(__webpack_exports__, "People", function() { return /* reexport */ People; });
__webpack_require__.d(__webpack_exports__, "graph", function() { return /* reexport */ graph; });
__webpack_require__.d(__webpack_exports__, "GraphRest", function() { return /* reexport */ rest_GraphRest; });

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: ./node_modules/@pnp/common/util.js
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
function getCtxCallback(context, method) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    var ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths
        .filter(function (path) { return !stringIsNullOrEmpty(path); })
        .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    var text = new Array(chars);
    for (var i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* tslint:disable no-bitwise */
function getGUID() {
    var d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* tslint:enable */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(f) {
    return typeof f === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray ? Array.isArray(array) : array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
function util_assign(target, source, noOverwrite, filter) {
    if (noOverwrite === void 0) { noOverwrite = false; }
    if (filter === void 0) { filter = function () { return true; }; }
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
    // final filter we will use
    var f = function (v) { return check(target, v) && filter(v); };
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce(function (t, v) {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return s === undefined || s === null || s.length < 1;
}
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
function sanitizeGuid(guid) {
    if (stringIsNullOrEmpty(guid)) {
        return guid;
    }
    var matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
    return matches === null ? guid : matches[1];
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
// tslint:disable:no-bitwise
function getHashCode(s) {
    var hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
// tslint:enable:no-bitwise

// CONCATENATED MODULE: ./node_modules/@pnp/common/collections.js

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = isFunc(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if (o !== undefined && o !== null) {
        return new Map(objectEntries(o));
    }
    return new Map();
}
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
function mergeMaps(target) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < maps.length; i++) {
        maps[i].forEach(function (v, k) {
            target.set(k, v);
        });
    }
    return target;
}

// CONCATENATED MODULE: ./node_modules/@pnp/common/libconfig.js

function setup(config) {
    RuntimeConfig.assign(config);
}
// lable mapping for known config values
var libconfig_s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
var libconfig_RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl(_v) {
        if (_v === void 0) { _v = new Map(); }
        this._v = _v;
        // setup defaults
        this._v.set(libconfig_s[0], "session");
        this._v.set(libconfig_s[1], 60);
        this._v.set(libconfig_s[2], false);
        this._v.set(libconfig_s[3], false);
        this._v.set(libconfig_s[4], 750);
        this._v.set(libconfig_s[5], null);
        this._v.set(libconfig_s[6], false);
    }
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    RuntimeConfigImpl.prototype.assign = function (config) {
        this._v = mergeMaps(this._v, objectToMap(config));
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get(libconfig_s[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get(libconfig_s[1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get(libconfig_s[2]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get(libconfig_s[3]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get(libconfig_s[4]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get(libconfig_s[5]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "ie11", {
        get: function () {
            return this.get(libconfig_s[6]);
        },
        enumerable: true,
        configurable: true
    });
    return RuntimeConfigImpl;
}());

var _runtimeConfig = new libconfig_RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;

// EXTERNAL MODULE: ./node_modules/@pnp/common/safe-global.js
var safe_global = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@pnp/common/net.js



function mergeHeaders(target, source) {
    if (objectDefinedNotNull(source)) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (objectDefinedNotNull(source)) {
        var headers = util_assign(target.headers || {}, source.headers);
        target = util_assign(target, source);
        target.headers = headers;
    }
}
/**
 * Parses out the root of the request url to use as the resource when getting the token
 *
  * @param url The url to parse
 */
function getADALResource(url) {
    var u = new URL(url);
    return u.protocol + "//" + u.hostname;
}
/**
 * Makes requests using the global/window fetch API
 */
var net_FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return safe_global["a" /* safeGlobal */].fetch(url, options);
    };
    return FetchClient;
}());

/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var net_BearerTokenFetchClient = /** @class */ (function (_super) {
    __extends(BearerTokenFetchClient, _super);
    function BearerTokenFetchClient(_token) {
        var _this = _super.call(this) || this;
        _this._token = _token;
        return _this;
    }
    Object.defineProperty(BearerTokenFetchClient.prototype, "token", {
        get: function () {
            return this._token || "";
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    BearerTokenFetchClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", "Bearer " + this._token);
        options.headers = headers;
        return _super.prototype.fetch.call(this, url, options);
    };
    return BearerTokenFetchClient;
}(net_FetchClient));

/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
var net_SPFxAdalClient = /** @class */ (function (_super) {
    __extends(SPFxAdalClient, _super);
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    function SPFxAdalClient(context) {
        var _this = _super.call(this, null) || this;
        _this.context = context;
        return _this;
    }
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    SPFxAdalClient.prototype.fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken(getADALResource(url))];
                    case 1:
                        token = _a.sent();
                        this.token = token;
                        return [2 /*return*/, _super.prototype.fetch.call(this, url, options)];
                }
            });
        });
    };
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    SPFxAdalClient.prototype.getToken = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.aadTokenProviderFactory.getTokenProvider()];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, provider.getToken(resource)];
                }
            });
        });
    };
    return SPFxAdalClient;
}(net_BearerTokenFetchClient));


// CONCATENATED MODULE: ./node_modules/@pnp/common/storage.js



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var storage_PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        if (defaultTimeoutMinutes === void 0) { defaultTimeoutMinutes = -1; }
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (RuntimeConfig.enableCacheExpiration) {
            this.cacheExpirationHandler();
        }
    }
    PnPClientStorageWrapper.bind = function (store) {
        return new PnPClientStorageWrapper(typeof (store) === "undefined" ? new MemoryStorage() : store);
    };
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (!objectDefinedNotNull(o)) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        return __awaiter(this, void 0, void 0, function () {
            var o;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/, getter()];
                        }
                        o = this.get(key);
                        if (!(o === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getter()];
                    case 1:
                        o = _a.sent();
                        this.put(key, o, expire);
                        _a.label = 2;
                    case 2: return [2 /*return*/, o];
                }
            });
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/];
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.store.length)) return [3 /*break*/, 4];
                        key = this.store.key(i);
                        if (!(key !== null)) return [3 /*break*/, 3];
                        if (!/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) return [3 /*break*/, 3];
                        // get those items as get will delete from cache if they are expired
                        return [4 /*yield*/, this.get(key)];
                    case 2:
                        // get those items as get will delete from cache if they are expired
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = RuntimeConfig.defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = dateAdd(new Date(), "second", defaultTimeout);
        }
        return jsS({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        this.deleteExpired().then(function (_) {
            // call ourself in the future
            setTimeout(getCtxCallback(_this, _this.cacheExpirationHandler), RuntimeConfig.cacheExpirationIntervalMilliseconds);
        }).catch(console.error);
    };
    return PnPClientStorageWrapper;
}());

/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new Map(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.size;
        },
        enumerable: true,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return Array.from(this._store)[index][0];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.delete(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.set(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = storage_PnPClientStorageWrapper.bind(localStorage);
            }
            return this._local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = storage_PnPClientStorageWrapper.bind(sessionStorage);
            }
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    return PnPClientStorage;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/common/index.js







// CONCATENATED MODULE: ./node_modules/@pnp/odata/batch.js

var batch_Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = getGUID(); }
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
        this._index = -1;
    }
    Object.defineProperty(Batch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batch.prototype, "requests", {
        /**
         * The requests contained in this batch
         */
        get: function () {
            // we sort these each time this is accessed
            return this._reqs.sort(function (info1, info2) { return info1.index - info2.index; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    Batch.prototype.track = function (batchee) {
        batchee.data.batch = this;
        // we need to track the order requests are added to the batch to ensure we always
        // operate on them in order
        if (typeof batchee.data.batchIndex === "undefined" || batchee.data.batchIndex < 0) {
            batchee.data.batchIndex = ++this._index;
        }
    };
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    Batch.prototype.add = function (context) {
        var info = {
            id: context.requestId,
            index: context.batchIndex,
            method: context.method.toUpperCase(),
            options: context.options,
            parser: context.parser,
            reject: null,
            resolve: null,
            url: context.url,
        };
        // we create a new promise that will be resolved within the batch
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    Batch.prototype.addDependency = function () {
        var resolver = function () { return void (0); };
        this._deps.push(new Promise(function (resolve) {
            resolver = resolve;
        }));
        return resolver;
    };
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    Batch.prototype.addResolveBatchDependency = function (p) {
        this._rDeps.push(p);
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    Batch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(function () { return Promise.all(_this._deps); })
            .then(function () { return _this.executeImpl(); })
            .then(function () { return Promise.all(_this._rDeps); })
            .then(function () { return void (0); });
    };
    return Batch;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/odata/caching.js

var caching_CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        if (storeName === void 0) { storeName = RuntimeConfig.defaultCachingStore; }
        if (expiration === void 0) { expiration = dateAdd(new Date(), "second", RuntimeConfig.defaultCachingTimeoutSeconds); }
        this.key = key;
        this.storeName = storeName;
        this.expiration = expiration;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return CachingOptions.storage.local;
            }
            else {
                return CachingOptions.storage.session;
            }
        },
        enumerable: true,
        configurable: true
    });
    CachingOptions.storage = new PnPClientStorage();
    return CachingOptions;
}());

var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        return this.parser.parse(response).then(function (r) { return _this.cacheData(r); });
    };
    CachingParserWrapper.prototype.cacheData = function (data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    };
    return CachingParserWrapper;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/odata/add-prop.js
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path);
        },
    });
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-extensions.js


var _enableExtensions = false;
var globaExtensions = [];
var ObjExtensionsSym = Symbol("__extensions");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
var extendGlobal = function (e) {
    _enableExtensions = true;
    extendCol(globaExtensions, e);
};
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
var extendObj = function (target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
};
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
var extendFactory = function (factory, extensions) {
    _enableExtensions = true;
    if (factory.__proto__[ObjExtensionsSym] === undefined) {
        factory.__proto__[ObjExtensionsSym] = [];
    }
    extendCol(factory.__proto__[ObjExtensionsSym], extensions);
};
function extendCol(a, e) {
    if (isArray(e)) {
        // @ts-ignore
        a.push.apply(a, __spread(e));
    }
    else {
        // @ts-ignore
        a.push(e);
    }
}
/**
 * Clears all global extensions
 */
var clearGlobalExtensions = function () {
    globaExtensions.length = 0;
};
/**
 * Disables all extensions
 */
var disableExtensions = function () {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
var enableExtensions = function () {
    _enableExtensions = true;
};
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
var applyFactoryExtensions = function (factory, args) {
    var o = factory(args);
    if (factory.__proto__[ObjExtensionsSym]) {
        o = extendObj(o, factory.__proto__[ObjExtensionsSym]);
    }
    return o;
};
function extensionOrDefault(op, or, target) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (_enableExtensions) {
        var extensions = [];
        // we need to first invoke extensions tied to only this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push.apply(extensions, __spread(Reflect.get(target, ObjExtensionsSym)));
        }
        // second we need to process any global extensions
        extensions.push.apply(extensions, __spread(globaExtensions));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if (isFunc(extension)) {
                // this extension is a function which we call
                result = extension.apply(void 0, __spread([op, target], rest));
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op).apply(void 0, __spread([target], rest));
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or.apply(void 0, __spread([target], rest));
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-binder.js



var invokableBinder = function (invoker) { return function (constructor) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var factory = function (as) {
            var r = Object.assign(function () {
                var ags = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    ags[_i] = arguments[_i];
                }
                return invoker.apply(r, ags);
            }, new (constructor.bind.apply(constructor, __spread([void 0], as)))());
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        if (RuntimeConfig.ie11) {
            return factory(args);
        }
        else {
            return new Proxy(applyFactoryExtensions(factory, args), {
                apply: function (target, _thisArg, argArray) {
                    return extensionOrDefault("apply", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.apply(a[0], a[1], a[2]);
                    }, target, _thisArg, argArray);
                },
                get: function (target, p, receiver) {
                    return extensionOrDefault("get", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.get(a[0], a[1], a[2]);
                    }, target, p, receiver);
                },
                has: function (target, p) {
                    return extensionOrDefault("has", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.has(a[0], a[1]);
                    }, target, p);
                },
                set: function (target, p, value, receiver) {
                    return extensionOrDefault("set", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.set(a[0], a[1], a[2], a[3]);
                    }, target, p, value, receiver);
                },
            });
        }
    };
}; };
var invokableFactory = invokableBinder(function (options) {
    return this.defaultAction(options);
});

// CONCATENATED MODULE: ./node_modules/@pnp/odata/parsers.js


var parsers_ODataParser = /** @class */ (function () {
    function ODataParser() {
    }
    ODataParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                _this.parseImpl(r, resolve, reject);
            }
        });
    };
    ODataParser.prototype.parseImpl = function (r, resolve, reject) {
        var _this = this;
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                .catch(function (e) { return reject(e); });
        }
    };
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    ODataParser.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            parsers_HttpRequestError.init(r).then(reject);
        }
        return r.ok;
    };
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    ODataParser.prototype.parseODataJSON = function (json) {
        var result = json;
        if (hOP(json, "d")) {
            if (hOP(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (hOP(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var parsers_TextParser = /** @class */ (function (_super) {
    __extends(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(parsers_ODataParser));

var parsers_BlobParser = /** @class */ (function (_super) {
    __extends(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(parsers_ODataParser));

var parsers_JSONParser = /** @class */ (function (_super) {
    __extends(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(parsers_ODataParser));

var parsers_BufferParser = /** @class */ (function (_super) {
    __extends(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (isFunc(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(parsers_ODataParser));

var parsers_LambdaParser = /** @class */ (function (_super) {
    __extends(LambdaParser, _super);
    function LambdaParser(parser) {
        var _this = _super.call(this) || this;
        _this.parser = parser;
        return _this;
    }
    LambdaParser.prototype.parseImpl = function (r, resolve) {
        this.parser(r).then(resolve);
    };
    return LambdaParser;
}(parsers_ODataParser));

var parsers_HttpRequestError = /** @class */ (function (_super) {
    __extends(HttpRequestError, _super);
    function HttpRequestError(message, response, status, statusText) {
        if (status === void 0) { status = response.status; }
        if (statusText === void 0) { statusText = response.statusText; }
        var _this = _super.call(this, message) || this;
        _this.response = response;
        _this.status = status;
        _this.statusText = statusText;
        _this.isHttpRequestError = true;
        return _this;
    }
    HttpRequestError.init = function (r) {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, r.clone().text()];
                    case 1:
                        t = _a.sent();
                        return [2 /*return*/, new HttpRequestError("Error making HttpClient request in queryable [" + r.status + "] " + r.statusText + " ::> " + t, r.clone())];
                }
            });
        });
    };
    return HttpRequestError;
}(Error));


// CONCATENATED MODULE: ./node_modules/@pnp/odata/queryable.js



function cloneQueryableData(source) {
    var s = JSON.stringify(source, function (key, value) {
        switch (key) {
            case "query":
                return JSON.stringify(__spread(value));
            case "batch":
                return "-";
            case "batchDependency":
                return "-";
            case "cachingOptions":
                return "-";
            case "clientFactory":
                return "-";
            case "parser":
                return "-";
            default:
                return value;
        }
    }, 0);
    var parsed = JSON.parse(s, function (key, value) {
        switch (key) {
            case "query":
                return new Map(JSON.parse(value));
            case "batch":
                return source.batch;
            case "batchDependency":
                return source.batchDependency;
            case "cachingOptions":
                return source.cachingOptions;
            case "clientFactory":
                return source.clientFactory;
            case "parser":
                return source.parser;
            default:
                return value;
        }
    });
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    if (source.options && source.options.body) {
        parsed.options.body = source.options.body;
    }
    return parsed;
}
var queryable_Queryable = /** @class */ (function () {
    function Queryable(dataSeed) {
        if (dataSeed === void 0) { dataSeed = {}; }
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new parsers_ODataParser(),
            query: new Map(),
            url: "",
            useCaching: false,
        }, cloneQueryableData(dataSeed));
    }
    Object.defineProperty(Queryable.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = Object.assign({}, cloneQueryableData(this.data), cloneQueryableData(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Gets the currentl url
    *
    */
    Queryable.prototype.toUrl = function () {
        return this.data.url;
    };
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
     */
    Queryable.prototype.concat = function (pathPart) {
        this.data.url += pathPart;
        return this;
    };
    Object.defineProperty(Queryable.prototype, "query", {
        /**
         * Provides access to the query builder for this url
         *
         */
        get: function () {
            return this.data.query;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    Queryable.prototype.configure = function (options) {
        mergeOptions(this.data.options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        mergeOptions(this.data.options, o.data.options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!RuntimeConfig.globalCacheDisable) {
            this.data.useCaching = true;
            if (options !== undefined) {
                this.data.cachingOptions = options;
            }
        }
        return this;
    };
    Queryable.prototype.usingParser = function (parser) {
        this.data.parser = parser;
        return this;
    };
    /**
     * Allows you to set a request specific processing pipeline
     *
     * @param pipeline The set of methods, in order, to execute a given request
     */
    Queryable.prototype.withPipeline = function (pipeline) {
        this.data.pipes = pipeline.slice(0);
        return this;
    };
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    Queryable.prototype.append = function (pathPart) {
        this.data.url = combine(this.data.url, pathPart);
    };
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    Queryable.prototype.inBatch = function (batch) {
        if (this.hasBatch) {
            throw Error("This query is already part of a batch.");
        }
        if (objectDefinedNotNull(batch)) {
            batch.track(this);
        }
        return this;
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    Queryable.prototype.addBatchDependency = function () {
        if (objectDefinedNotNull(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(Queryable.prototype, "hasBatch", {
        /**
         * Indicates if the current query has a batch associated
         *
         */
        get: function () {
            return objectDefinedNotNull(this.data.batch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "batch", {
        /**
         * The batch currently associated with this query or null
         *
         */
        get: function () {
            return this.hasBatch ? this.data.batch : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "parentUrl", {
        /**
         * Gets the parent url used when creating this instance
         *
         */
        get: function () {
            return this.data.parentUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clones this instance's data to target
     *
     * @param target Instance to which data is written
     * @param settings [Optional] Settings controlling how clone is applied
     */
    Queryable.prototype.cloneTo = function (target, settings) {
        if (settings === void 0) { settings = { includeBatch: true }; }
        target.data = Object.assign({}, cloneQueryableData(this.data), {
            batch: null,
            cloneParentCacheOptions: null,
            cloneParentWasCaching: false,
        }, cloneQueryableData(target.data));
        target.configureFrom(this);
        if (settings.includeBatch) {
            target.inBatch(this.batch);
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    };
    return Queryable;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/logging/logger.js
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        /**
         * Gets or sets the active log level to apply for log filtering
         */
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance === undefined || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.forEach(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
     * Clears the subscribers collection, returning the collection before modification
     */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
         * Gets the current subscriber count
         */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.write(JSON.stringify(json), level);
    };
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    Logger.error = function (err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    };
    return Logger;
}());

var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = 2 /* Warning */; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: true,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
        }
    };
    return LoggerImpl;
}());
/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));

// CONCATENATED MODULE: ./node_modules/@pnp/logging/listeners.js
/**
 * Implementation of LogListener which logs to the console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (entry.data !== undefined) {
            try {
                msg.push(" Data: " + JSON.stringify(entry.data));
            }
            catch (e) {
                msg.push(" Data: Error in stringify of supplied data " + e);
            }
        }
        return msg.join("");
    };
    return ConsoleListener;
}());

/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/logging/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline.js




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    Logger.log({
        data: Logger.activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result from pipeline. Set logging to verbose to see data.",
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    return c.pipes.length > 0 ? c.pipes.shift()(c) : Promise.resolve(c);
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipes.length < 1) {
        Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    var promise = next(context).then(function (ctx) { return returnResult(ctx); }).catch(function (e) {
        Logger.error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requets have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && hOP(args[0], "hasResult") && args[0].hasResult) {
                Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
var pipeline_PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            Logger.log({
                data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.method + " request (" + context.url + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.useCaching) {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new caching_CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = util_assign(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        Logger.log({
                            data: Logger.activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        // ensure we clear any held batch dependency we are resolving from the cache
                        if (isFunc(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (hOP(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                var p = context.batch.add(context);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (isFunc(context.batchDependency)) {
                    context.batchDependency();
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = util_assign(context.options || {}, { method: context.method });
                client.fetch(context.url, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.method + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.method + " request.",
                });
            }
            resolve(context);
        });
    };
    __decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    __decorate([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    __decorate([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    __decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());

function getDefaultPipeline() {
    return [
        pipeline_PipelineMethods.logStart,
        pipeline_PipelineMethods.caching,
        pipeline_PipelineMethods.send,
        pipeline_PipelineMethods.logEnd,
    ].slice(0);
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline-binder.js




// first we bind the pipeline we will use for all requests within this closure
function pipelineBinder(pipes) {
    // then we bind the client factory we'll use (typically done in an implementing library such as sp)
    return function (clientFactory) {
        // then we create a binder we can apply for each type of method (GET, POST, etc.)
        return function (method) {
            // finally we get a function back to which we can pass an IQueryableData instance and execute the request it defines
            return function (o) {
                // send the IQueryableData down the pipeline
                return pipe(Object.assign({}, {
                    batch: null,
                    batchDependency: null,
                    batchIndex: -1,
                    cachingOptions: null,
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: objectDefinedNotNull(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new parsers_ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: getGUID(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(getDefaultPipeline());

// CONCATENATED MODULE: ./node_modules/@pnp/odata/request-builders.js

function body(o, previous) {
    return Object.assign({ body: jsS(o) }, previous);
}
function request_builders_headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}

// CONCATENATED MODULE: ./node_modules/@pnp/odata/index.js











// CONCATENATED MODULE: ./node_modules/@pnp/graph/types.js
var GraphEndpoints = /** @class */ (function () {
    function GraphEndpoints() {
    }
    /**
     *
     * @param url The url to set the endpoint
     */
    GraphEndpoints.ensure = function (url, endpoint) {
        var all = [GraphEndpoints.Beta, GraphEndpoints.V1];
        var regex = new RegExp(endpoint, "i");
        var replaces = all.filter(function (s) { return !regex.test(s); }).map(function (s) { return s.replace(".", "\\."); });
        regex = new RegExp("/?(" + replaces.join("|") + ")/", "ig");
        return url.replace(regex, "/" + endpoint + "/");
    };
    GraphEndpoints.Beta = "beta";
    GraphEndpoints.V1 = "v1.0";
    return GraphEndpoints;
}());


// EXTERNAL MODULE: ./node_modules/adal-angular/dist/adal.min.js
var adal_min = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@pnp/adaljsclient/adalclient.js


// @ts-ignore

/**
 * Azure AD Client for use in the browser
 */
var adalclient_AdalClient = /** @class */ (function (_super) {
    __extends(AdalClient, _super);
    /**
     * Creates a new instance of AdalClient
     * @param clientId Azure App Id
     * @param tenant Office 365 tenant (Ex: {tenant}.onmicrosoft.com)
     * @param redirectUri The redirect url used to authenticate the
     */
    function AdalClient(clientId, tenant, redirectUri) {
        var _this = _super.call(this, null) || this;
        _this.clientId = clientId;
        _this.tenant = tenant;
        _this.redirectUri = redirectUri;
        _this._displayCallback = null;
        _this._loginPromise = null;
        return _this;
    }
    /**
     * Creates a new AdalClient using the values of the supplied SPFx context (requires SPFx >= 1.6)
     *
     * @param spfxContext Current SPFx context
     * @description Using this method requires that the features described in this article
     * https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient are activated in the tenant.
     */
    AdalClient.fromSPFxContext = function (spfxContext) {
        return new net_SPFxAdalClient(spfxContext);
    };
    /**
     * Conducts the fetch opertation against the AAD secured resource
     *
     * @param url Absolute URL for the request
     * @param options Any fetch options passed to the underlying fetch implementation
     */
    AdalClient.prototype.fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isUrlAbsolute(url)) {
                            throw Error("You must supply absolute urls to AdalClient.fetch.");
                        }
                        return [4 /*yield*/, this.getToken(getADALResource(url))];
                    case 1:
                        token = _a.sent();
                        this.token = token;
                        return [2 /*return*/, _super.prototype.fetch.call(this, url, options)];
                }
            });
        });
    };
    /**
     * Gets a token based on the current user
     *
     * @param resource The resource for which we are requesting a token
     */
    AdalClient.prototype.getToken = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureAuthContext()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.login()];
                    case 2:
                        _a.sent();
                        token = null;
                        AdalClient._authContext.acquireToken(resource, function (message, tok) {
                            if (message) {
                                throw Error(message);
                            }
                            token = tok;
                        });
                        return [2 /*return*/, token];
                }
            });
        });
    };
    /**
     * Ensures we have created and setup the adal AuthenticationContext instance
     */
    AdalClient.prototype.ensureAuthContext = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (AdalClient._authContext === null) {
                AdalClient._authContext = adal_min["inject"]({
                    clientId: _this.clientId,
                    displayCall: function (url) {
                        if (_this._displayCallback) {
                            _this._displayCallback(url);
                        }
                    },
                    navigateToLoginRequestUrl: false,
                    redirectUri: _this.redirectUri,
                    tenant: _this.tenant,
                });
            }
            resolve();
        });
    };
    /**
     * Ensures the current user is logged in
     */
    AdalClient.prototype.login = function () {
        var _this = this;
        if (this._loginPromise) {
            return this._loginPromise;
        }
        this._loginPromise = new Promise(function (resolve, reject) {
            if (AdalClient._authContext.getCachedUser()) {
                return resolve();
            }
            _this._displayCallback = function (url) {
                var popupWindow = window.open(url, "login", "width=483, height=600");
                if (!popupWindow) {
                    return reject(Error("Could not open pop-up window for auth. Likely pop-ups are blocked by the browser."));
                }
                if (popupWindow && popupWindow.focus) {
                    popupWindow.focus();
                }
                var pollTimer = window.setInterval(function () {
                    if (!popupWindow || popupWindow.closed || popupWindow.closed === undefined) {
                        window.clearInterval(pollTimer);
                    }
                    try {
                        if (popupWindow.document.URL.indexOf(_this.redirectUri) !== -1) {
                            window.clearInterval(pollTimer);
                            AdalClient._authContext.handleWindowCallback(popupWindow.location.hash);
                            popupWindow.close();
                            resolve();
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                }, 30);
            };
            // this triggers the login process
            _this.ensureAuthContext().then(function (_) {
                AdalClient._authContext._loginInProgress = false;
                AdalClient._authContext.login();
                _this._displayCallback = null;
            });
        });
        return this._loginPromise;
    };
    /**
     * Our auth context
     */
    AdalClient._authContext = null;
    return AdalClient;
}(net_BearerTokenFetchClient));


// CONCATENATED MODULE: ./node_modules/@pnp/adaljsclient/index.js


// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphlibconfig.js


function graphlibconfig_setup(config) {
    RuntimeConfig.assign(config);
}
var graphlibconfig_GraphRuntimeConfigImpl = /** @class */ (function () {
    function GraphRuntimeConfigImpl() {
    }
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var graphPart = RuntimeConfig.get("graph");
            if (graphPart !== undefined && graphPart !== null && graphPart.headers !== undefined) {
                return graphPart.headers;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var graphPart = RuntimeConfig.get("graph");
            // use a configured factory firt
            if (graphPart !== undefined && graphPart !== null && graphPart.fetchClientFactory !== undefined) {
                return graphPart.fetchClientFactory;
            }
            // then try and use spfx context if available
            if (RuntimeConfig.spfxContext !== undefined) {
                return function () { return adalclient_AdalClient.fromSPFxContext(RuntimeConfig.spfxContext); };
            }
            throw Error("There is no Graph Client available, either set one using configuraiton or provide a valid SPFx Context using setup.");
        },
        enumerable: true,
        configurable: true
    });
    return GraphRuntimeConfigImpl;
}());

var GraphRuntimeConfig = new graphlibconfig_GraphRuntimeConfigImpl();

// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphhttpclient.js


var graphhttpclient_GraphHttpClient = /** @class */ (function () {
    function GraphHttpClient() {
        this._impl = GraphRuntimeConfig.fetchClientFactory();
    }
    GraphHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        mergeHeaders(headers, GraphRuntimeConfig.headers);
        // second we add the local options so we can overwrite the globals
        mergeHeaders(headers, options.headers);
        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json");
        }
        if (!headers.has("SdkVersion")) {
            // this marks the requests for understanding by the service
            headers.append("SdkVersion", "PnPCoreJS/2.0.4");
        }
        var opts = util_assign(options, { headers: headers });
        return this.fetchRaw(url, opts);
    };
    GraphHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        mergeHeaders(rawHeaders, options.headers);
        options = util_assign(options, { headers: rawHeaders });
        var retry = function (ctx) {
            _this._impl.fetch(url, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
                // Check if request was throttled - http status code 429
                // Check if request failed due to server unavailable - http status code 503
                // Check if request failed due to gateway timeout - http status code 504
                if (response.status !== 429 && response.status !== 503 && response.status !== 504) {
                    ctx.reject(response);
                }
                // grab our current delay
                var delay = ctx.delay;
                // Increment our counters.
                ctx.delay *= 2;
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(response);
                }
                // Set our retry timeout for {delay} milliseconds.
                setTimeout(getCtxCallback(_this, retry, ctx), delay);
            });
        };
        return new Promise(function (resolve, reject) {
            var retryContext = {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            };
            retry.call(_this, retryContext);
        });
    };
    GraphHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return GraphHttpClient;
}());


// CONCATENATED MODULE: ./node_modules/@pnp/graph/operations.js




var graphClientBinder = defaultPipelineBinder(function () { return new graphhttpclient_GraphHttpClient(); });
var send = function (operation) {
    return function (o, options) {
        return __awaiter(this, void 0, void 0, function () {
            var data, batchDependency, url;
            return __generator(this, function (_a) {
                data = cloneQueryableData(o.data);
                batchDependency = objectDefinedNotNull(data.batch) ? data.batch.addDependency() : function () { return; };
                url = o.toUrlAndQuery();
                mergeOptions(data.options, options);
                return [2 /*return*/, operation(Object.assign({}, data, {
                        batchDependency: batchDependency,
                        url: url,
                    }))];
            });
        });
    };
};
var graphGet = function (o, options) { return send(graphClientBinder("GET"))(o, options); };
var graphPost = function (o, options) { return send(graphClientBinder("POST"))(o, options); };
var graphDelete = function (o, options) { return send(graphClientBinder("DELETE"))(o, options); };
var graphPatch = function (o, options) { return send(graphClientBinder("PATCH"))(o, options); };
var graphPut = function (o, options) { return send(graphClientBinder("PUT"))(o, options); };

// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphqueryable.js





var graphInvokableFactory = function (f) {
    return invokableFactory(f);
};
/**
 * Queryable Base Class
 *
 */
var graphqueryable_GraphQueryable = /** @class */ (function (_super) {
    __extends(_GraphQueryable, _super);
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param baseUrl A string or Queryable that should form the base part of the url
     *
     */
    function _GraphQueryable(baseUrl, path) {
        var _this = this;
        var url = "";
        var parentUrl = "";
        var query = new Map();
        if (typeof baseUrl === "string") {
            parentUrl = baseUrl;
            url = combine(parentUrl, path);
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = combine(parentUrl, path);
        }
        _this = _super.call(this, {
            parentUrl: parentUrl,
            query: query,
            url: url,
        }) || this;
        // post init actions
        if (typeof baseUrl !== "string") {
            _this.configureFrom(baseUrl);
        }
        return _this;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    _GraphQueryable.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    _GraphQueryable.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    };
    _GraphQueryable.prototype.defaultAction = function (options) {
        return graphGet(this, options);
    };
    _GraphQueryable.prototype.get = function (options) {
        return graphGet(this, options);
    };
    /**
     * Gets the full url with query information
     *
     */
    _GraphQueryable.prototype.toUrlAndQuery = function () {
        var url = this.toUrl();
        if (!isUrlAbsolute(url)) {
            url = combine("https://graph.microsoft.com", url);
        }
        if (this.query.size > 0) {
            var char = url.indexOf("?") > -1 ? "&" : "?";
            url += "" + char + Array.from(this.query).map(function (v) { return v[0] + "=" + v[1]; }).join("&");
        }
        return url;
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    _GraphQueryable.prototype.getParent = function (factory, baseUrl, path) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        return new factory(baseUrl, path);
    };
    /**
     * Clones this queryable into a new queryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    _GraphQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        return _super.prototype.cloneTo.call(this, factory(this, additionalPath), { includeBatch: includeBatch });
    };
    _GraphQueryable.prototype.setEndpoint = function (endpoint) {
        this.data.url = GraphEndpoints.ensure(this.data.url, endpoint);
        return this;
    };
    return _GraphQueryable;
}(queryable_Queryable));

var GraphQueryable = graphInvokableFactory(graphqueryable_GraphQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var graphqueryable_GraphQueryableCollection = /** @class */ (function (_super) {
    __extends(_GraphQueryableCollection, _super);
    function _GraphQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param filter The string representing the filter query
     */
    _GraphQueryableCollection.prototype.filter = function (filter) {
        this.query.set("$filter", filter);
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    _GraphQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var o = "$orderby";
        var query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(orderBy + " " + (ascending ? "asc" : "desc"));
        this.query.set(o, query.join(","));
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    _GraphQueryableCollection.prototype.top = function (top) {
        this.query.set("$top", top.toString());
        return this;
    };
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    _GraphQueryableCollection.prototype.skip = function (num) {
        this.query.set("$skip", num.toString());
        return this;
    };
    /**
     * 	To request second and subsequent pages of Graph data
     */
    _GraphQueryableCollection.prototype.skipToken = function (token) {
        this.query.set("$skiptoken", token);
        return this;
    };
    Object.defineProperty(_GraphQueryableCollection.prototype, "count", {
        /**
         * 	Retrieves the total count of matching resources
         */
        get: function () {
            this.query.set("$count", "true");
            return this;
        },
        enumerable: true,
        configurable: true
    });
    return _GraphQueryableCollection;
}(graphqueryable_GraphQueryable));

var GraphQueryableCollection = graphInvokableFactory(graphqueryable_GraphQueryableCollection);
var graphqueryable_GraphQueryableSearchableCollection = /** @class */ (function (_super) {
    __extends(_GraphQueryableSearchableCollection, _super);
    function _GraphQueryableSearchableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 	To request second and subsequent pages of Graph data
     */
    _GraphQueryableSearchableCollection.prototype.search = function (query) {
        this.query.set("$search", query);
        return this;
    };
    return _GraphQueryableSearchableCollection;
}(graphqueryable_GraphQueryableCollection));

var GraphQueryableSearchableCollection = graphInvokableFactory(graphqueryable_GraphQueryableSearchableCollection);
/**
 * Represents an instance that can be selected
 *
 */
var graphqueryable_GraphQueryableInstance = /** @class */ (function (_super) {
    __extends(_GraphQueryableInstance, _super);
    function _GraphQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _GraphQueryableInstance;
}(graphqueryable_GraphQueryable));

var GraphQueryableInstance = graphInvokableFactory(graphqueryable_GraphQueryableInstance);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/decorators.js



/**
 * Decorator used to specify the default path for Queryable objects
 *
 * @param path
 */
function defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.call(this, args[0], args.length > 1 && args[1] !== undefined ? args[1] : path) || this;
            }
            return class_1;
        }(target));
    };
}
/**
 * Adds the delete method to the tagged class
 */
function deleteable() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_2.prototype.delete = function () {
                return graphDelete(this);
            };
            return class_2;
        }(target));
    };
}
/**
 * Adds the delete method to the tagged class
 */
function deleteableWithETag() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_3, _super);
            function class_3() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_3.prototype.delete = function (eTag) {
                if (eTag === void 0) { eTag = "*"; }
                return graphDelete(this, request_builders_headers({
                    "If-Match": eTag,
                }));
            };
            return class_3;
        }(target));
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateable() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_4, _super);
            function class_4() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_4.prototype.update = function (props) {
                return graphPatch(this, body(props));
            };
            return class_4;
        }(target));
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateableWithETag() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_5, _super);
            function class_5() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_5.prototype.update = function (props, eTag) {
                if (eTag === void 0) { eTag = "*"; }
                return graphPatch(this, body(props, request_builders_headers({
                    "If-Match": eTag,
                })));
            };
            return class_5;
        }(target));
    };
}
/**
 * Adds the add method to the tagged class
 */
function addable() {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_6, _super);
            function class_6() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_6.prototype.add = function (props) {
                return graphPost(this, body(props));
            };
            return class_6;
        }(target));
    };
}
/**
 * Adds the getById method to a collection
 */
function getById(factory) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_7, _super);
            function class_7() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_7.prototype.getById = function (id) {
                return factory(this, id);
            };
            return class_7;
        }(target));
    };
}

// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/types.js





/**
 * Conversation
 */
var types_Conversation = /** @class */ (function (_super) {
    __extends(_Conversation, _super);
    function _Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Conversation.prototype, "threads", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return Threads(this);
        },
        enumerable: true,
        configurable: true
    });
    _Conversation = __decorate([
        updateable(),
        deleteable()
    ], _Conversation);
    return _Conversation;
}(graphqueryable_GraphQueryableInstance));

var Conversation = graphInvokableFactory(types_Conversation);
/**
 * Conversations
 */
var types_Conversations = /** @class */ (function (_super) {
    __extends(_Conversations, _super);
    function _Conversations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Conversations = __decorate([
        defaultPath("conversations"),
        addable(),
        getById(Conversation)
    ], _Conversations);
    return _Conversations;
}(graphqueryable_GraphQueryableCollection));

var Conversations = graphInvokableFactory(types_Conversations);
/**
 * Thread
 */
var types_Thread = /** @class */ (function (_super) {
    __extends(_Thread, _super);
    function _Thread() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Thread.prototype, "posts", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return Posts(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    _Thread.prototype.reply = function (post) {
        return graphPost(this.clone(Thread, "reply"), body(post));
    };
    _Thread = __decorate([
        deleteable()
    ], _Thread);
    return _Thread;
}(graphqueryable_GraphQueryableInstance));

var Thread = graphInvokableFactory(types_Thread);
/**
 * Threads
 */
var types_Threads = /** @class */ (function (_super) {
    __extends(_Threads, _super);
    function _Threads() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Threads = __decorate([
        defaultPath("threads"),
        addable(),
        getById(Thread)
    ], _Threads);
    return _Threads;
}(graphqueryable_GraphQueryableCollection));

var Threads = graphInvokableFactory(types_Threads);
/**
 * Post
 */
var types_Post = /** @class */ (function (_super) {
    __extends(_Post, _super);
    function _Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Forward a post to a recipient
     */
    _Post.prototype.forward = function (info) {
        return graphPost(this.clone(Post, "forward"), body(info));
    };
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    _Post.prototype.reply = function (post) {
        return graphPost(this.clone(Post, "reply"), body(post));
    };
    _Post = __decorate([
        deleteable()
    ], _Post);
    return _Post;
}(graphqueryable_GraphQueryableInstance));

var Post = graphInvokableFactory(types_Post);
/**
 * Posts
 */
var types_Posts = /** @class */ (function (_super) {
    __extends(_Posts, _super);
    function _Posts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Posts = __decorate([
        defaultPath("posts"),
        addable(),
        getById(Post)
    ], _Posts);
    return _Posts;
}(graphqueryable_GraphQueryableCollection));

var Posts = graphInvokableFactory(types_Posts);
/**
 * Senders
 */
var types_Senders = /** @class */ (function (_super) {
    __extends(_Senders, _super);
    function _Senders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add a new user or group to this senders collection
     * @param id The full @odata.id value to add (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    _Senders.prototype.add = function (id) {
        return graphPost(this.clone(Senders, "$ref"), body({ "@odata.id": id }));
    };
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    _Senders.prototype.remove = function (id) {
        var remover = this.clone(Senders, "$ref");
        remover.query.set("$id", id);
        return graphDelete(remover);
    };
    return _Senders;
}(graphqueryable_GraphQueryableCollection));

var Senders = graphInvokableFactory(types_Senders);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/utils/type.js
function type_type(n, a) {
    return Object.assign({ "@odata.type": n }, a);
}

// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/types.js






/**
 * Attachment
 */
var types_Attachment = /** @class */ (function (_super) {
    __extends(_Attachment, _super);
    function _Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Attachment;
}(graphqueryable_GraphQueryableInstance));

var Attachment = graphInvokableFactory(types_Attachment);
/**
 * Attachments
 */
var types_Attachments = /** @class */ (function (_super) {
    __extends(_Attachments, _super);
    function _Attachments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add attachment to this collection
     *
     * @param name Name given to the attachment file
     * @param bytes File content
     */
    _Attachments.prototype.addFile = function (name, bytes) {
        return graphPost(this, body(type_type("#microsoft.graph.fileAttachment", {
            contentBytes: bytes,
            name: name,
        })));
    };
    _Attachments = __decorate([
        defaultPath("attachments"),
        getById(Attachment)
    ], _Attachments);
    return _Attachments;
}(graphqueryable_GraphQueryableCollection));

var Attachments = graphInvokableFactory(types_Attachments);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/conversations.js



addProp(types_Post, "attachments", Attachments);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/types.js





/**
 * Represents a Directory Object entity
 */
var types_DirectoryObject = /** @class */ (function (_super) {
    __extends(_DirectoryObject, _super);
    function _DirectoryObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns all the groups and directory roles that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    _DirectoryObject.prototype.getMemberObjects = function (securityEnabledOnly) {
        if (securityEnabledOnly === void 0) { securityEnabledOnly = false; }
        return graphPost(this.clone(DirectoryObject, "getMemberObjects"), body({ securityEnabledOnly: securityEnabledOnly }));
    };
    /**
     * Returns all the groups that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    _DirectoryObject.prototype.getMemberGroups = function (securityEnabledOnly) {
        if (securityEnabledOnly === void 0) { securityEnabledOnly = false; }
        return graphPost(this.clone(DirectoryObject, "getMemberGroups"), body({ securityEnabledOnly: securityEnabledOnly }));
    };
    /**
     * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
     * This function is transitive.
     * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
     */
    _DirectoryObject.prototype.checkMemberGroups = function (groupIds) {
        return graphPost(this.clone(DirectoryObject, "checkMemberGroups"), body({ groupIds: groupIds }));
    };
    _DirectoryObject = __decorate([
        deleteable()
    ], _DirectoryObject);
    return _DirectoryObject;
}(graphqueryable_GraphQueryableInstance));

var DirectoryObject = graphInvokableFactory(types_DirectoryObject);
/**
 * Describes a collection of Directory Objects
 *
 */
var types_DirectoryObjects = /** @class */ (function (_super) {
    __extends(_DirectoryObjects, _super);
    function _DirectoryObjects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the directory objects specified in a list of ids. NOTE: The directory objects returned are the full objects containing all their properties.
    * The $select query option is not available for this operation.
    *
    * @param ids A collection of ids for which to return objects. You can specify up to 1000 ids.
    * @param type A collection of resource types that specifies the set of resource collections to search. Default is directoryObject.
    */
    _DirectoryObjects.prototype.getByIds = function (ids, type) {
        if (type === void 0) { type = DirectoryObjectTypes.directoryObject; }
        return graphPost(this.clone(DirectoryObjects, "getByIds"), body({ ids: ids, type: type }));
    };
    _DirectoryObjects = __decorate([
        defaultPath("directoryObjects"),
        getById(DirectoryObject)
    ], _DirectoryObjects);
    return _DirectoryObjects;
}(graphqueryable_GraphQueryableCollection));

var DirectoryObjects = graphInvokableFactory(types_DirectoryObjects);
/**
 * DirectoryObjectTypes
 */
var DirectoryObjectTypes;
(function (DirectoryObjectTypes) {
    /**
     * Directory Objects
     */
    DirectoryObjectTypes[DirectoryObjectTypes["directoryObject"] = 0] = "directoryObject";
    /**
     * User
     */
    DirectoryObjectTypes[DirectoryObjectTypes["user"] = 1] = "user";
    /**
     * Group
     */
    DirectoryObjectTypes[DirectoryObjectTypes["group"] = 2] = "group";
    /**
     * Device
     */
    DirectoryObjectTypes[DirectoryObjectTypes["device"] = 3] = "device";
})(DirectoryObjectTypes || (DirectoryObjectTypes = {}));

// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/types.js







var GroupType;
(function (GroupType) {
    /**
     * Office 365 (aka unified group)
     */
    GroupType[GroupType["Office365"] = 0] = "Office365";
    /**
     * Dynamic membership
     */
    GroupType[GroupType["Dynamic"] = 1] = "Dynamic";
    /**
     * Security
     */
    GroupType[GroupType["Security"] = 2] = "Security";
})(GroupType || (GroupType = {}));
/**
 * Represents a group entity
 */
var types_Group = /** @class */ (function (_super) {
    __extends(_Group, _super);
    function _Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add the group to the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    _Group.prototype.addFavorite = function () {
        return graphPost(this.clone(Group, "addFavorite"));
    };
    /**
     * Remove the group from the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    _Group.prototype.removeFavorite = function () {
        return graphPost(this.clone(Group, "removeFavorite"));
    };
    /**
     * Reset the unseenCount of all the posts that the current user has not seen since their last visit
     */
    _Group.prototype.resetUnseenCount = function () {
        return graphPost(this.clone(Group, "resetUnseenCount"));
    };
    /**
     * Calling this method will enable the current user to receive email notifications for this group,
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    _Group.prototype.subscribeByMail = function () {
        return graphPost(this.clone(Group, "subscribeByMail"));
    };
    /**
     * Calling this method will prevent the current user from receiving email notifications for this group
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    _Group.prototype.unsubscribeByMail = function () {
        return graphPost(this.clone(Group, "unsubscribeByMail"));
    };
    /**
     * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group
     *
     * @param start Start date and time of the time range
     * @param end End date and time of the time range
     */
    _Group.prototype.getCalendarView = function (start, end) {
        var view = this.clone(Group, "calendarView");
        view.query.set("startDateTime", start.toISOString());
        view.query.set("endDateTime", end.toISOString());
        return view();
    };
    _Group = __decorate([
        deleteable(),
        updateable()
    ], _Group);
    return _Group;
}(types_DirectoryObject));

var Group = graphInvokableFactory(types_Group);
/**
 * Describes a collection of Field objects
 *
 */
var types_Groups = /** @class */ (function (_super) {
    __extends(_Groups, _super);
    function _Groups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new group as specified in the request body.
     *
     * @param name Name to display in the address book for the group
     * @param mailNickname Mail alias for the group
     * @param groupType Type of group being created
     * @param additionalProperties A plain object collection of additional properties you want to set on the new group
     */
    _Groups.prototype.add = function (name, mailNickname, groupType, additionalProperties) {
        if (additionalProperties === void 0) { additionalProperties = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = util_assign({
                            displayName: name,
                            mailEnabled: groupType === GroupType.Office365,
                            mailNickname: mailNickname,
                            securityEnabled: groupType !== GroupType.Office365,
                        }, additionalProperties);
                        // include a group type if required
                        if (groupType !== GroupType.Security) {
                            postBody = util_assign(postBody, {
                                groupTypes: groupType === GroupType.Office365 ? ["Unified"] : ["DynamicMembership"],
                            });
                        }
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                group: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Groups = __decorate([
        defaultPath("groups"),
        getById(Group)
    ], _Groups);
    return _Groups;
}(graphqueryable_GraphQueryableCollection));

var Groups = graphInvokableFactory(types_Groups);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/types.js





/**
 * Calendars
 */
var types_Calendars = /** @class */ (function (_super) {
    __extends(_Calendars, _super);
    function _Calendars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Calendars = __decorate([
        defaultPath("calendars")
    ], _Calendars);
    return _Calendars;
}(graphqueryable_GraphQueryableCollection));

var Calendars = graphInvokableFactory(types_Calendars);
/**
 * Calendar
 */
var types_Calendar = /** @class */ (function (_super) {
    __extends(_Calendar, _super);
    function _Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Calendar.prototype, "events", {
        get: function () {
            return Events(this);
        },
        enumerable: true,
        configurable: true
    });
    return _Calendar;
}(graphqueryable_GraphQueryableInstance));

var Calendar = graphInvokableFactory(types_Calendar);
/**
 * Event
 */
var types_Event = /** @class */ (function (_super) {
    __extends(_Event, _super);
    function _Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Event = __decorate([
        deleteable(),
        updateable()
    ], _Event);
    return _Event;
}(graphqueryable_GraphQueryableInstance));

var Event = graphInvokableFactory(types_Event);
/**
 * Events
 */
var types_Events = /** @class */ (function (_super) {
    __extends(_Events, _super);
    function _Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    _Events.prototype.add = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, body(properties))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                event: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Events = __decorate([
        defaultPath("events"),
        getById(Event)
    ], _Events);
    return _Events;
}(graphqueryable_GraphQueryableCollection));

var Events = graphInvokableFactory(types_Events);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/groups.js



addProp(types_Group, "calendar", Calendar, "calendar");
addProp(types_Group, "events", Events);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/types.js




var types_User = /** @class */ (function (_super) {
    __extends(_User, _super);
    function _User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_User.prototype, "memberOf", {
        /**
        * The groups and directory roles associated with the user
        */
        get: function () {
            return DirectoryObjects(this, "memberOf");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_User.prototype, "people", {
        /**
         * Retrieve a collection of person objects ordered by their relevance to the user
         */
        get: function () {
            return People(this);
        },
        enumerable: true,
        configurable: true
    });
    _User = __decorate([
        updateable(),
        deleteable()
    ], _User);
    return _User;
}(types_DirectoryObject));

var User = graphInvokableFactory(types_User);
var types_Users = /** @class */ (function (_super) {
    __extends(_Users, _super);
    function _Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Users = __decorate([
        defaultPath("users"),
        getById(User)
    ], _Users);
    return _Users;
}(graphqueryable_GraphQueryableCollection));

var Users = graphInvokableFactory(types_Users);
var types_People = /** @class */ (function (_super) {
    __extends(_People, _super);
    function _People() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _People = __decorate([
        defaultPath("people")
    ], _People);
    return _People;
}(graphqueryable_GraphQueryableCollection));

var People = graphInvokableFactory(types_People);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/types.js






/**
 * Contact
 */
var types_Contact = /** @class */ (function (_super) {
    __extends(_Contact, _super);
    function _Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Contact = __decorate([
        updateable(),
        deleteable()
    ], _Contact);
    return _Contact;
}(graphqueryable_GraphQueryableInstance));

var Contact = graphInvokableFactory(types_Contact);
/**
 * Contacts
 */
var types_Contacts = /** @class */ (function (_super) {
    __extends(_Contacts, _super);
    function _Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Create a new Contact for the user.
    *
    * @param givenName The contact's given name.
    * @param surName The contact's surname.
    * @param emailAddresses The contact's email addresses.
    * @param businessPhones The contact's business phone numbers.
    * @param additionalProperties A plain object collection of additional properties you want to set on the new contact
    */
    _Contacts.prototype.add = function (givenName, surName, emailAddresses, businessPhones, additionalProperties) {
        if (additionalProperties === void 0) { additionalProperties = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = util_assign({ businessPhones: businessPhones, emailAddresses: emailAddresses, givenName: givenName, surName: surName }, additionalProperties);
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                contact: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _Contacts = __decorate([
        defaultPath("contacts"),
        getById(Contact)
    ], _Contacts);
    return _Contacts;
}(graphqueryable_GraphQueryableCollection));

var Contacts = graphInvokableFactory(types_Contacts);
/**
 * Contact Folder
 */
var types_ContactFolder = /** @class */ (function (_super) {
    __extends(_ContactFolder, _super);
    function _ContactFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_ContactFolder.prototype, "contacts", {
        /**
         * Gets the contacts in this contact folder
         */
        get: function () {
            return Contacts(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContactFolder.prototype, "childFolders", {
        /**
        * Gets the contacts in this contact folder
        */
        get: function () {
            return ContactFolders(this, "childFolders");
        },
        enumerable: true,
        configurable: true
    });
    _ContactFolder = __decorate([
        deleteable(),
        updateable()
    ], _ContactFolder);
    return _ContactFolder;
}(graphqueryable_GraphQueryableInstance));

var ContactFolder = graphInvokableFactory(types_ContactFolder);
/**
 * Contact Folders
 */
var types_ContactFolders = /** @class */ (function (_super) {
    __extends(_ContactFolders, _super);
    function _ContactFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Contact Folder for the user.
     *
     * @param displayName The folder's display name.
     * @param parentFolderId The ID of the folder's parent folder.
     */
    _ContactFolders.prototype.add = function (displayName, parentFolderId) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            displayName: displayName,
                            parentFolderId: parentFolderId,
                        };
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                contactFolder: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _ContactFolders = __decorate([
        defaultPath("contactFolders"),
        getById(ContactFolder)
    ], _ContactFolders);
    return _ContactFolders;
}(graphqueryable_GraphQueryableCollection));

var ContactFolders = graphInvokableFactory(types_ContactFolders);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/users.js



addProp(types_User, "contacts", Contacts);
addProp(types_User, "contactFolders", ContactFolders);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/groups.js



addProp(types_Group, "conversations", Conversations);
addProp(types_Group, "acceptedSenders", Senders, "acceptedsenders");
addProp(types_Group, "rejectedSenders", Senders, "rejectedsenders");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/batch.js






var batch_GraphBatch = /** @class */ (function (_super) {
    __extends(GraphBatch, _super);
    function GraphBatch(batchUrl, maxRequests) {
        if (batchUrl === void 0) { batchUrl = "https://graph.microsoft.com/v1.0/$batch"; }
        if (maxRequests === void 0) { maxRequests = 20; }
        var _this = _super.call(this) || this;
        _this.batchUrl = batchUrl;
        _this.maxRequests = maxRequests;
        return _this;
    }
    /**
     * Urls come to the batch absolute, but the processor expects relative
     * @param url Url to ensure is relative
     */
    GraphBatch.makeUrlRelative = function (url) {
        if (!isUrlAbsolute(url)) {
            // already not absolute, just give it back
            return url;
        }
        var index = url.indexOf(".com/v1.0/");
        if (index < 0) {
            index = url.indexOf(".com/beta/");
            if (index > -1) {
                // beta url
                return url.substr(index + 10);
            }
        }
        else {
            // v1.0 url
            return url.substr(index + 9);
        }
        // no idea
        return url;
    };
    GraphBatch.formatRequests = function (requests) {
        var _this = this;
        return requests.map(function (reqInfo, index) {
            var requestFragment = {
                id: "" + ++index,
                method: reqInfo.method,
                url: _this.makeUrlRelative(reqInfo.url),
            };
            var headers = {};
            // merge global config headers
            if (GraphRuntimeConfig.headers !== undefined && GraphRuntimeConfig.headers !== null) {
                headers = util_assign(headers, GraphRuntimeConfig.headers);
            }
            if (reqInfo.options !== undefined) {
                // merge per request headers
                if (reqInfo.options.headers !== undefined && reqInfo.options.headers !== null) {
                    headers = util_assign(headers, reqInfo.options.headers);
                }
                // all non-get requests need their own content-type header
                if (reqInfo.method !== "GET") {
                    headers["Content-Type"] = "application/json";
                }
                // add a request body
                if (reqInfo.options.body !== undefined && reqInfo.options.body !== null) {
                    // we need to parse the body which was previously turned into a string
                    requestFragment = util_assign(requestFragment, {
                        body: JSON.parse(reqInfo.options.body),
                    });
                }
            }
            requestFragment = util_assign(requestFragment, {
                headers: headers,
            });
            return requestFragment;
        });
    };
    GraphBatch.parseResponse = function (requests, graphResponse) {
        return new Promise(function (resolve, reject) {
            // we need to see if we have an error and report that
            if (hOP(graphResponse, "error")) {
                return reject(Error("Error Porcessing Batch: (" + graphResponse.error.code + ") " + graphResponse.error.message));
            }
            var parsedResponses = new Array(requests.length).fill(null);
            for (var i = 0; i < graphResponse.responses.length; ++i) {
                var response = graphResponse.responses[i];
                // we create the request id by adding 1 to the index, so we place the response by subtracting one to match
                // the array of requests and make it easier to map them by index
                var responseId = parseInt(response.id, 10) - 1;
                if (response.status === 204) {
                    parsedResponses[responseId] = new Response();
                }
                else {
                    parsedResponses[responseId] = new Response(JSON.stringify(response.body), response);
                }
            }
            resolve({
                nextLink: graphResponse.nextLink,
                responses: parsedResponses,
            });
        });
    };
    GraphBatch.prototype.executeImpl = function () {
        var _this = this;
        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
        if (this.requests.length < 1) {
            Logger.write("Resolving empty batch.", 1 /* Info */);
            return Promise.resolve();
        }
        var client = new graphhttpclient_GraphHttpClient();
        // create a working copy of our requests
        var requests = this.requests.slice();
        var error = false;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _loop_1, this_1, state_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function () {
                            var requestsChunk, batchRequest, batchOptions;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        requestsChunk = requests.splice(0, this_1.maxRequests);
                                        batchRequest = {
                                            requests: GraphBatch.formatRequests(requestsChunk),
                                        };
                                        batchOptions = {
                                            body: jsS(batchRequest),
                                            headers: {
                                                "Accept": "application/json",
                                                "Content-Type": "application/json",
                                            },
                                            method: "POST",
                                        };
                                        Logger.write("[" + this_1.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
                                        return [4 /*yield*/, client.fetch(this_1.batchUrl, batchOptions)
                                                .then(function (r) { return r.json(); })
                                                .then(function (j) { return GraphBatch.parseResponse(requestsChunk, j); })
                                                .then(function (parsedResponse) {
                                                Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                                                parsedResponse.responses.reduce(function (chain, response, index) {
                                                    var request = requestsChunk[index];
                                                    Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched request " + request.method + " " + request.url + ".", 0 /* Verbose */);
                                                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                                                }, Promise.resolve());
                                            }).catch(function (e) {
                                                reject(e);
                                                error = true;
                                            })];
                                    case 1:
                                        _a.sent();
                                        if (error) {
                                            return [2 /*return*/, "break"];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 1;
                    case 1:
                        if (!(requests.length > 0)) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 3];
                        return [3 /*break*/, 1];
                    case 3:
                        if (!error) {
                            // if we didn't have an error go ahead and resolve the promise as successful
                            resolve();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return GraphBatch;
}(batch_Batch));


// CONCATENATED MODULE: ./node_modules/@pnp/graph/rest.js




var rest_GraphRest = /** @class */ (function (_super) {
    __extends(GraphRest, _super);
    function GraphRest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraphRest.prototype.createBatch = function () {
        return new batch_GraphBatch();
    };
    GraphRest.prototype.setup = function (config) {
        graphlibconfig_setup(config);
    };
    return GraphRest;
}(graphqueryable_GraphQueryable));

var graph = new rest_GraphRest("v1.0");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "directoryObjects", {
    configurable: true,
    enumerable: true,
    get: function () {
        return DirectoryObjects(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "groups", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Groups(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/types.js



/**
 * Represents a insights entity
 */
var types_Insights = /** @class */ (function (_super) {
    __extends(_Insights, _super);
    function _Insights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Insights.prototype, "trending", {
        get: function () {
            return TrendingInsights(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Insights.prototype, "used", {
        get: function () {
            return UsedInsights(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Insights.prototype, "shared", {
        get: function () {
            return SharedInsights(this);
        },
        enumerable: true,
        configurable: true
    });
    _Insights = __decorate([
        defaultPath("insights")
    ], _Insights);
    return _Insights;
}(graphqueryable_GraphQueryableInstance));

var Insights = graphInvokableFactory(types_Insights);
/**
 * Describes a Trending Insight instance
 */
var types_TrendingInsight = /** @class */ (function (_super) {
    __extends(_TrendingInsight, _super);
    function _TrendingInsight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_TrendingInsight.prototype, "resource", {
        get: function () {
            return Resource(this);
        },
        enumerable: true,
        configurable: true
    });
    return _TrendingInsight;
}(graphqueryable_GraphQueryableInstance));

var TrendingInsight = graphInvokableFactory(types_TrendingInsight);
/**
 * Describes a collection of Trending Insight objects
 *
 */
var types_TrendingInsights = /** @class */ (function (_super) {
    __extends(_TrendingInsights, _super);
    function _TrendingInsights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _TrendingInsights = __decorate([
        defaultPath("trending"),
        getById(TrendingInsight)
    ], _TrendingInsights);
    return _TrendingInsights;
}(graphqueryable_GraphQueryableCollection));

var TrendingInsights = graphInvokableFactory(types_TrendingInsights);
/**
 * Describes a Used Insight instance
 */
var types_UsedInsight = /** @class */ (function (_super) {
    __extends(_UsedInsight, _super);
    function _UsedInsight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_UsedInsight.prototype, "resource", {
        get: function () {
            return Resource(this);
        },
        enumerable: true,
        configurable: true
    });
    return _UsedInsight;
}(graphqueryable_GraphQueryableInstance));

var UsedInsight = graphInvokableFactory(types_UsedInsight);
/**
 * Describes a collection of Used Insight objects
 *
 */
var types_UsedInsights = /** @class */ (function (_super) {
    __extends(_UsedInsights, _super);
    function _UsedInsights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _UsedInsights = __decorate([
        defaultPath("used"),
        getById(UsedInsight)
    ], _UsedInsights);
    return _UsedInsights;
}(graphqueryable_GraphQueryableCollection));

var UsedInsights = graphInvokableFactory(types_UsedInsights);
/**
 * Describes a Shared Insight instance
 */
var types_SharedInsight = /** @class */ (function (_super) {
    __extends(_SharedInsight, _super);
    function _SharedInsight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_SharedInsight.prototype, "resource", {
        get: function () {
            return Resource(this);
        },
        enumerable: true,
        configurable: true
    });
    return _SharedInsight;
}(graphqueryable_GraphQueryableInstance));

var SharedInsight = graphInvokableFactory(types_SharedInsight);
/**
 * Describes a collection of Shared Insight objects
 *
 */
var types_SharedInsights = /** @class */ (function (_super) {
    __extends(_SharedInsights, _super);
    function _SharedInsights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _SharedInsights = __decorate([
        defaultPath("shared"),
        getById(SharedInsight)
    ], _SharedInsights);
    return _SharedInsights;
}(graphqueryable_GraphQueryableCollection));

var SharedInsights = graphInvokableFactory(types_SharedInsights);
/**
 * Describes a Resource Entity instance
 */
var types_Resource = /** @class */ (function (_super) {
    __extends(_Resource, _super);
    function _Resource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Resource = __decorate([
        defaultPath("resource")
    ], _Resource);
    return _Resource;
}(graphqueryable_GraphQueryableInstance));

var Resource = graphInvokableFactory(types_Resource);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/users.js



addProp(types_User, "insights", Insights);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/invitations/types.js






/**
 * Invitations
 */
var types_Invitations = /** @class */ (function (_super) {
    __extends(_Invitations, _super);
    function _Invitations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Invitation via invitation manager.
     *
     * @param invitedUserEmailAddress The email address of the user being invited.
     * @param inviteRedirectUrl The URL user should be redirected to once the invitation is redeemed.
     * @param additionalProperties A plain object collection of additional properties you want to set in the invitation
     */
    _Invitations.prototype.create = function (invitedUserEmailAddress, inviteRedirectUrl, additionalProperties) {
        if (additionalProperties === void 0) { additionalProperties = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = util_assign({ inviteRedirectUrl: inviteRedirectUrl, invitedUserEmailAddress: invitedUserEmailAddress }, additionalProperties);
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data }];
                }
            });
        });
    };
    _Invitations = __decorate([
        defaultPath("invitations")
    ], _Invitations);
    return _Invitations;
}(graphqueryable_GraphQueryableCollection));

var Invitations = graphInvokableFactory(types_Invitations);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/invitations/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "invitations", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Invitations(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/types.js





/**
 * Member
 */
var types_Member = /** @class */ (function (_super) {
    __extends(_Member, _super);
    function _Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes this Member
     */
    _Member.prototype.remove = function () {
        return graphDelete(this.clone(Member, "$ref"));
    };
    return _Member;
}(graphqueryable_GraphQueryableInstance));

var Member = graphInvokableFactory(types_Member);
/**
 * Members
 */
var types_Members = /** @class */ (function (_super) {
    __extends(_Members, _super);
    function _Members() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: `https://graph.microsoft.com/v1.0/directoryObjects/${id}`)
     */
    _Members.prototype.add = function (id) {
        return graphPost(this.clone(Members, "$ref"), body({ "@odata.id": id }));
    };
    _Members = __decorate([
        defaultPath("members"),
        getById(Member)
    ], _Members);
    return _Members;
}(graphqueryable_GraphQueryableCollection));

var Members = graphInvokableFactory(types_Members);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/groups.js



addProp(types_Group, "owners", Members, "owners");
addProp(types_Group, "members", Members);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/types.js



/**
 * Message
 */
var types_Message = /** @class */ (function (_super) {
    __extends(_Message, _super);
    function _Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Message;
}(graphqueryable_GraphQueryableInstance));

var Message = graphInvokableFactory(types_Message);
/**
 * Messages
 */
var types_Messages = /** @class */ (function (_super) {
    __extends(_Messages, _super);
    function _Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Messages = __decorate([
        defaultPath("messages"),
        getById(Message),
        addable()
    ], _Messages);
    return _Messages;
}(graphqueryable_GraphQueryableCollection));

var Messages = graphInvokableFactory(types_Messages);
/**
 * MailFolder
 */
var types_MailFolder = /** @class */ (function (_super) {
    __extends(_MailFolder, _super);
    function _MailFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _MailFolder;
}(graphqueryable_GraphQueryableInstance));

var MailFolder = graphInvokableFactory(types_MailFolder);
/**
 * MailFolders
 */
var types_MailFolders = /** @class */ (function (_super) {
    __extends(_MailFolders, _super);
    function _MailFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MailFolders = __decorate([
        defaultPath("mailFolders"),
        getById(MailFolder),
        addable()
    ], _MailFolders);
    return _MailFolders;
}(graphqueryable_GraphQueryableCollection));

var MailFolders = graphInvokableFactory(types_MailFolders);
/**
 * MailboxSettings
 */
var types_MailboxSettings = /** @class */ (function (_super) {
    __extends(_MailboxSettings, _super);
    function _MailboxSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MailboxSettings = __decorate([
        defaultPath("mailboxSettings"),
        updateable()
    ], _MailboxSettings);
    return _MailboxSettings;
}(graphqueryable_GraphQueryableInstance));

var MailboxSettings = graphInvokableFactory(types_MailboxSettings);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/users.js




addProp(types_User, "messages", Messages);
addProp(types_User, "mailboxSettings", MailboxSettings);
addProp(types_User, "mailFolders", MailFolders);
types_User.prototype.sendMail = function (message) {
    return graphPost(this.clone(User, "sendMail"), body(message));
};

// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/types.js






/**
 * Describes a Drive instance
 *
 */
var types_Drive = /** @class */ (function (_super) {
    __extends(_Drive, _super);
    function _Drive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Drive.prototype, "root", {
        get: function () {
            return Root(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Drive.prototype, "list", {
        get: function () {
            return GraphQueryableInstance(this, "list");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Drive.prototype, "recent", {
        get: function () {
            return DriveItems(this, "recent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Drive.prototype, "sharedWithMe", {
        get: function () {
            return DriveItems(this, "sharedWithMe");
        },
        enumerable: true,
        configurable: true
    });
    _Drive.prototype.getItemById = function (id) {
        return DriveItem(this, combine("items", id));
    };
    _Drive = __decorate([
        defaultPath("drive")
    ], _Drive);
    return _Drive;
}(graphqueryable_GraphQueryableInstance));

var Drive = graphInvokableFactory(types_Drive);
/**
 * Describes a collection of Drive objects
 *
 */
var types_Drives = /** @class */ (function (_super) {
    __extends(_Drives, _super);
    function _Drives() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Drives = __decorate([
        defaultPath("drives"),
        getById(Drive)
    ], _Drives);
    return _Drives;
}(graphqueryable_GraphQueryableCollection));

var Drives = graphInvokableFactory(types_Drives);
/**
 * Describes a Root instance
 *
 */
var types_Root = /** @class */ (function (_super) {
    __extends(_Root, _super);
    function _Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Root.prototype, "children", {
        get: function () {
            return DriveItems(this, "children");
        },
        enumerable: true,
        configurable: true
    });
    _Root.prototype.search = function (query) {
        var searcher = this.clone(Root);
        searcher.query.set("search", "'" + query + "'");
        return searcher();
    };
    Object.defineProperty(_Root.prototype, "thumbnails", {
        get: function () {
            return GraphQueryableCollection(this, "thumbnails");
        },
        enumerable: true,
        configurable: true
    });
    _Root = __decorate([
        defaultPath("root")
    ], _Root);
    return _Root;
}(graphqueryable_GraphQueryableInstance));

var Root = graphInvokableFactory(types_Root);
/**
 * Describes a Drive Item instance
 *
 */
var types_DriveItem = /** @class */ (function (_super) {
    __extends(_DriveItem, _super);
    function _DriveItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_DriveItem.prototype, "children", {
        get: function () {
            return DriveItems(this, "children");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DriveItem.prototype, "thumbnails", {
        get: function () {
            return GraphQueryableCollection(this, "thumbnails");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_DriveItem.prototype, "versions", {
        get: function () {
            return GraphQueryableCollection(this, "versions");
        },
        enumerable: true,
        configurable: true
    });
    _DriveItem.prototype.move = function (parentReference, name) {
        return graphPatch(this, body(util_assign(parentReference, { name: name })));
    };
    _DriveItem.prototype.getContent = function () {
        return graphGet(this.clone(DriveItem, "content"));
    };
    _DriveItem.prototype.setContent = function (content) {
        return graphPut(this.clone(DriveItem, "content"), {
            body: content,
        });
    };
    _DriveItem = __decorate([
        deleteable(),
        updateable()
    ], _DriveItem);
    return _DriveItem;
}(graphqueryable_GraphQueryableInstance));

var DriveItem = graphInvokableFactory(types_DriveItem);
/**
 * Describes a collection of Drive Item objects
 *
 */
var types_DriveItems = /** @class */ (function (_super) {
    __extends(_DriveItems, _super);
    function _DriveItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _DriveItems = __decorate([
        getById(DriveItem)
    ], _DriveItems);
    return _DriveItems;
}(graphqueryable_GraphQueryableCollection));

var DriveItems = graphInvokableFactory(types_DriveItems);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/users.js



addProp(types_User, "drive", Drive);
addProp(types_User, "drives", Drives);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/types.js





/**
 * Represents a onenote entity
 */
var types_OneNote = /** @class */ (function (_super) {
    __extends(_OneNote, _super);
    function _OneNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_OneNote.prototype, "notebooks", {
        get: function () {
            return Notebooks(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_OneNote.prototype, "sections", {
        get: function () {
            return Sections(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_OneNote.prototype, "pages", {
        get: function () {
            return GraphQueryableCollection(this, "pages");
        },
        enumerable: true,
        configurable: true
    });
    _OneNote = __decorate([
        defaultPath("onenote")
    ], _OneNote);
    return _OneNote;
}(graphqueryable_GraphQueryableInstance));

var OneNote = graphInvokableFactory(types_OneNote);
/**
 * Describes a notebook instance
 *
 */
var types_Notebook = /** @class */ (function (_super) {
    __extends(_Notebook, _super);
    function _Notebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Notebook.prototype, "sections", {
        get: function () {
            return Sections(this);
        },
        enumerable: true,
        configurable: true
    });
    return _Notebook;
}(graphqueryable_GraphQueryableInstance));

var Notebook = graphInvokableFactory(types_Notebook);
/**
 * Describes a collection of Notebook objects
 *
 */
var types_Notebooks = /** @class */ (function (_super) {
    __extends(_Notebooks, _super);
    function _Notebooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new notebook as specified in the request body.
     *
     * @param displayName Notebook display name
     */
    _Notebooks.prototype.add = function (displayName) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, body({ displayName: displayName }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                notebook: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Notebooks = __decorate([
        defaultPath("notebooks"),
        getById(Notebook)
    ], _Notebooks);
    return _Notebooks;
}(graphqueryable_GraphQueryableCollection));

var Notebooks = graphInvokableFactory(types_Notebooks);
/**
 * Describes a sections instance
 */
var types_Section = /** @class */ (function (_super) {
    __extends(_Section, _super);
    function _Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Section;
}(graphqueryable_GraphQueryableInstance));

var Section = graphInvokableFactory(types_Section);
/**
 * Describes a collection of Sections objects
 *
 */
var types_Sections = /** @class */ (function (_super) {
    __extends(_Sections, _super);
    function _Sections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new section
     *
     * @param displayName New section display name
     */
    _Sections.prototype.add = function (displayName) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, body({ displayName: displayName }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                section: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Sections = __decorate([
        defaultPath("sections"),
        getById(Section)
    ], _Sections);
    return _Sections;
}(graphqueryable_GraphQueryableCollection));

var Sections = graphInvokableFactory(types_Sections);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/users.js



addProp(types_User, "onenote", OneNote);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/types.js





var types_Photo = /** @class */ (function (_super) {
    __extends(_Photo, _super);
    function _Photo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the image bytes as a blob (browser)
     */
    _Photo.prototype.getBlob = function () {
        return this.clone(Photo, "$value", false).usingParser(new parsers_BlobParser())();
    };
    /**
     * Gets the image file byets as a Buffer (node.js)
     */
    _Photo.prototype.getBuffer = function () {
        return this.clone(Photo, "$value", false).usingParser(new parsers_BufferParser())();
    };
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    _Photo.prototype.setContent = function (content) {
        return graphPatch(this.clone(Photo, "$value", false), { body: content });
    };
    _Photo = __decorate([
        defaultPath("photo")
    ], _Photo);
    return _Photo;
}(graphqueryable_GraphQueryableInstance));

var Photo = graphInvokableFactory(types_Photo);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/groups.js



addProp(types_Group, "photo", Photo);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/index.js



// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/types.js







/**
 * Planner
 */
var types_Planner = /** @class */ (function (_super) {
    __extends(_Planner, _super);
    function _Planner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Planner.prototype, "plans", {
        // Should Only be able to get by id, or else error occur
        get: function () {
            return Plans(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Planner.prototype, "tasks", {
        // Should Only be able to get by id, or else error occur
        get: function () {
            return Tasks(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Planner.prototype, "buckets", {
        // Should Only be able to get by id, or else error occur
        get: function () {
            return Buckets(this);
        },
        enumerable: true,
        configurable: true
    });
    _Planner = __decorate([
        defaultPath("planner")
    ], _Planner);
    return _Planner;
}(graphqueryable_GraphQueryableInstance));

var Planner = graphInvokableFactory(types_Planner);
/**
 * Plan
 */
var types_Plan = /** @class */ (function (_super) {
    __extends(_Plan, _super);
    function _Plan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Plan.prototype, "tasks", {
        get: function () {
            return Tasks(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Plan.prototype, "buckets", {
        get: function () {
            return Buckets(this);
        },
        enumerable: true,
        configurable: true
    });
    _Plan = __decorate([
        updateableWithETag(),
        deleteableWithETag()
    ], _Plan);
    return _Plan;
}(graphqueryable_GraphQueryableInstance));

var Plan = graphInvokableFactory(types_Plan);
var types_Plans = /** @class */ (function (_super) {
    __extends(_Plans, _super);
    function _Plans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Planner Plan.
     *
     * @param owner Id of Group object.
     * @param title The Title of the Plan.
     */
    _Plans.prototype.add = function (owner, title) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, graphPost(this, body({ owner: owner, title: title }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                plan: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Plans = __decorate([
        defaultPath("plans"),
        getById(Plan)
    ], _Plans);
    return _Plans;
}(graphqueryable_GraphQueryableCollection));

var Plans = graphInvokableFactory(types_Plans);
/**
 * Task
 */
var types_Task = /** @class */ (function (_super) {
    __extends(_Task, _super);
    function _Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Task = __decorate([
        updateableWithETag(),
        deleteableWithETag()
    ], _Task);
    return _Task;
}(graphqueryable_GraphQueryableInstance));

var Task = graphInvokableFactory(types_Task);
/**
 * Tasks
 */
var types_Tasks = /** @class */ (function (_super) {
    __extends(_Tasks, _super);
    function _Tasks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Planner Task.
     *
     * @param planId Id of Plan.
     * @param title The Title of the Task.
     * @param assignments Assign the task
     * @param bucketId Id of Bucket
     */
    _Tasks.prototype.add = function (planId, title, assignments, bucketId) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = util_assign({
                            planId: planId,
                            title: title,
                        }, assignments);
                        if (bucketId) {
                            postBody = util_assign(postBody, {
                                bucketId: bucketId,
                            });
                        }
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                task: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Tasks = __decorate([
        defaultPath("tasks"),
        getById(Task)
    ], _Tasks);
    return _Tasks;
}(graphqueryable_GraphQueryableCollection));

var Tasks = graphInvokableFactory(types_Tasks);
/**
 * Bucket
 */
var types_Bucket = /** @class */ (function (_super) {
    __extends(_Bucket, _super);
    function _Bucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Bucket.prototype, "tasks", {
        get: function () {
            return Tasks(this);
        },
        enumerable: true,
        configurable: true
    });
    _Bucket = __decorate([
        updateableWithETag(),
        deleteableWithETag()
    ], _Bucket);
    return _Bucket;
}(graphqueryable_GraphQueryableInstance));

var Bucket = graphInvokableFactory(types_Bucket);
/**
 * Buckets
 */
var types_Buckets = /** @class */ (function (_super) {
    __extends(_Buckets, _super);
    function _Buckets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Bucket.
     *
     * @param name Name of Bucket object.
     * @param planId The Id of the Plan.
     * @param oderHint Hint used to order items of this type in a list view.
     */
    _Buckets.prototype.add = function (name, planId, orderHint) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            name: name,
                            orderHint: orderHint ? orderHint : "",
                            planId: planId,
                        };
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                bucket: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _Buckets = __decorate([
        defaultPath("buckets"),
        getById(Bucket)
    ], _Buckets);
    return _Buckets;
}(graphqueryable_GraphQueryableCollection));

var Buckets = graphInvokableFactory(types_Buckets);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/groups.js



addProp(types_Group, "plans", Plans, "planner/plans");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/users.js



addProp(types_User, "tasks", Tasks, "planner/tasks");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/index.js





Reflect.defineProperty(rest_GraphRest.prototype, "planner", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Planner(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/types.js






/**
 * Subscription
 */
var types_Subscription = /** @class */ (function (_super) {
    __extends(_Subscription, _super);
    function _Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Subscription = __decorate([
        deleteable(),
        updateable()
    ], _Subscription);
    return _Subscription;
}(graphqueryable_GraphQueryableInstance));

var Subscription = graphInvokableFactory(types_Subscription);
/**
 * Subscriptions
 */
var types_Subscriptions = /** @class */ (function (_super) {
    __extends(_Subscriptions, _super);
    function _Subscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Subscription.
     *
     * @param changeType Indicates the type of change in the subscribed resource that will raise a notification. The supported values are: created, updated, deleted.
     * @param notificationUrl The URL of the endpoint that will receive the notifications. This URL must make use of the HTTPS protocol.
     * @param resource Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/).
     * @param expirationDateTime Specifies the date and time when the webhook subscription expires. The time is in UTC.
     * @param props A plain object collection of additional properties you want to set on the new subscription
     *
     */
    _Subscriptions.prototype.add = function (changeType, notificationUrl, resource, expirationDateTime, props) {
        if (props === void 0) { props = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = util_assign({
                            changeType: changeType,
                            expirationDateTime: expirationDateTime,
                            notificationUrl: notificationUrl,
                            resource: resource,
                        }, props);
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                subscription: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Subscriptions = __decorate([
        defaultPath("subscriptions"),
        getById(Subscription)
    ], _Subscriptions);
    return _Subscriptions;
}(graphqueryable_GraphQueryableCollection));

var Subscriptions = graphInvokableFactory(types_Subscriptions);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "subscriptions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Subscriptions(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/types.js







/**
 * Represents a Microsoft Team
 */
var types_Team = /** @class */ (function (_super) {
    __extends(_Team, _super);
    function _Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Team.prototype, "channels", {
        get: function () {
            return Channels(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Archives this Team
     *
     * @param shouldSetSpoSiteReadOnlyForMembers Should members have Read-only in associated Team Site
     */
    _Team.prototype.archive = function (shouldSetSpoSiteReadOnlyForMembers) {
        if (shouldSetSpoSiteReadOnlyForMembers === void 0) { shouldSetSpoSiteReadOnlyForMembers = false; }
        return graphPost(this.clone(Team, "archive"), body({ shouldSetSpoSiteReadOnlyForMembers: shouldSetSpoSiteReadOnlyForMembers }));
    };
    /**
    * Unarchives this Team
    */
    _Team.prototype.unarchive = function () {
        return graphPost(this.clone(Team, "unarchive"));
    };
    /**
     * Clones this Team
     * @param name The name of the new Group
     * @param description Optional description of the group
     * @param partsToClone Parts to clone ex: apps,tabs,settings,channels,members
     * @param visibility Set visibility to public or private
     */
    _Team.prototype.cloneTeam = function (name, description, partsToClone, visibility) {
        if (description === void 0) { description = ""; }
        if (partsToClone === void 0) { partsToClone = "apps,tabs,settings,channels,members"; }
        if (visibility === void 0) { visibility = "private"; }
        var postBody = {
            description: description ? description : "",
            displayName: name,
            mailNickname: name,
            partsToClone: partsToClone,
            visibility: visibility,
        };
        // TODO:: we need to get the Location header from the response and return an operation
        // instance that folks can query to see if/when this is complete
        // it could just have a single method getResult (or whatever) that returns a promise that
        // resolves when the operation is successful or rejects when it is not
        return graphPost(this.clone(Team, "clone"), body(postBody));
    };
    _Team = __decorate([
        defaultPath("team"),
        updateable()
    ], _Team);
    return _Team;
}(graphqueryable_GraphQueryableInstance));

var Team = graphInvokableFactory(types_Team);
/**
 * Teams
 */
var types_Teams = /** @class */ (function (_super) {
    __extends(_Teams, _super);
    function _Teams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Teams = __decorate([
        defaultPath("teams"),
        getById(Team)
    ], _Teams);
    return _Teams;
}(graphqueryable_GraphQueryableCollection));

var Teams = graphInvokableFactory(types_Teams);
/**
 * Channel
 */
var types_Channel = /** @class */ (function (_super) {
    __extends(_Channel, _super);
    function _Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Channel.prototype, "tabs", {
        get: function () {
            return Tabs(this);
        },
        enumerable: true,
        configurable: true
    });
    return _Channel;
}(graphqueryable_GraphQueryableInstance));

var Channel = graphInvokableFactory(types_Channel);
/**
 * Channels
 */
var types_Channels = /** @class */ (function (_super) {
    __extends(_Channels, _super);
    function _Channels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new Channel in the Team
     * @param displayName The display name of the new channel
     * @param description Optional description of the channel
     *
     */
    _Channels.prototype.add = function (displayName, description) {
        if (description === void 0) { description = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            description: description,
                            displayName: displayName,
                        };
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                channel: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    _Channels = __decorate([
        defaultPath("channels"),
        getById(Channel)
    ], _Channels);
    return _Channels;
}(graphqueryable_GraphQueryableCollection));

var Channels = graphInvokableFactory(types_Channels);
/**
 * Tab
 */
var types_Tab = /** @class */ (function (_super) {
    __extends(_Tab, _super);
    function _Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Tab = __decorate([
        defaultPath("tab"),
        updateable(),
        deleteable()
    ], _Tab);
    return _Tab;
}(graphqueryable_GraphQueryableInstance));

var Tab = graphInvokableFactory(types_Tab);
/**
 * Tabs
 */
var types_Tabs = /** @class */ (function (_super) {
    __extends(_Tabs, _super);
    function _Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a tab to the cahnnel
     * @param name The name of the new Tab
     * @param appUrl The url to an app ex: https://graph.microsoft.com/beta/appCatalogs/teamsApps/12345678-9abc-def0-123456789a
     * @param tabsConfiguration visit https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamstab_add for reference
     */
    _Tabs.prototype.add = function (name, appUrl, properties) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = util_assign({
                            displayName: name,
                            "teamsApp@odata.bind": appUrl,
                        }, properties);
                        return [4 /*yield*/, graphPost(this, body(postBody))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                tab: this.getById(data.id),
                            }];
                }
            });
        });
    };
    _Tabs = __decorate([
        defaultPath("tabs"),
        getById(Tab)
    ], _Tabs);
    return _Tabs;
}(graphqueryable_GraphQueryableCollection));

var Tabs = graphInvokableFactory(types_Tabs);

// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/users.js



addProp(types_User, "joinedTeams", Teams, "joinedTeams");

// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/index.js








addProp(types_Group, "team", Team);
types_Group.prototype.createTeam = function (props) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, graphPut(this.clone(Group, "team"), body(props))];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, {
                            data: data,
                            team: this.team,
                        }];
            }
        });
    });
};
Reflect.defineProperty(rest_GraphRest.prototype, "teams", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Teams(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "me", {
    configurable: true,
    enumerable: true,
    get: function () {
        return User(this, "me");
    },
});
Reflect.defineProperty(rest_GraphRest.prototype, "users", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Users(this);
    },
});

// CONCATENATED MODULE: ./node_modules/@pnp/graph/presets/all.js




































// CONCATENATED MODULE: ./pnpjs-sources/index-graph.ts



/***/ })
/******/ ]);
});