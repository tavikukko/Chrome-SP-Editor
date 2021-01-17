(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.sp"] = factory();
	else
		root["pnp.sp"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AddFieldOptions": () => /* reexport */ AddFieldOptions,
  "App": () => /* reexport */ App,
  "AppCatalog": () => /* reexport */ AppCatalog,
  "Attachment": () => /* reexport */ Attachment,
  "Attachments": () => /* reexport */ Attachments,
  "CalendarType": () => /* reexport */ CalendarType,
  "CanvasColumn": () => /* reexport */ CanvasColumn,
  "CanvasSection": () => /* reexport */ CanvasSection,
  "CheckinType": () => /* reexport */ CheckinType,
  "Children": () => /* reexport */ Children,
  "ChoiceFieldFormatType": () => /* reexport */ ChoiceFieldFormatType,
  "ClientsidePageFromFile": () => /* reexport */ ClientsidePageFromFile,
  "ClientsideText": () => /* reexport */ ClientsideText,
  "ClientsideWebpart": () => /* reexport */ ClientsideWebpart,
  "ColumnControl": () => /* reexport */ ColumnControl,
  "Comment": () => /* reexport */ Comment,
  "Comments": () => /* reexport */ Comments,
  "ContentType": () => /* reexport */ ContentType,
  "ContentTypes": () => /* reexport */ ContentTypes,
  "ControlMode": () => /* reexport */ ControlMode,
  "CreateClientsidePage": () => /* reexport */ CreateClientsidePage,
  "DateTimeFieldFormatType": () => /* reexport */ DateTimeFieldFormatType,
  "DateTimeFieldFriendlyFormatType": () => /* reexport */ DateTimeFieldFriendlyFormatType,
  "Feature": () => /* reexport */ Feature,
  "Features": () => /* reexport */ Features,
  "Field": () => /* reexport */ Field,
  "FieldLink": () => /* reexport */ FieldLink,
  "FieldLinks": () => /* reexport */ FieldLinks,
  "FieldTypes": () => /* reexport */ FieldTypes,
  "FieldUserSelectionMode": () => /* reexport */ FieldUserSelectionMode,
  "Fields": () => /* reexport */ Fields,
  "File": () => /* reexport */ File,
  "Files": () => /* reexport */ Files,
  "Folder": () => /* reexport */ Folder,
  "Folders": () => /* reexport */ Folders,
  "Form": () => /* reexport */ Form,
  "Forms": () => /* reexport */ Forms,
  "HubSite": () => /* reexport */ HubSite,
  "HubSites": () => /* reexport */ HubSites,
  "Item": () => /* reexport */ Item,
  "ItemVersion": () => /* reexport */ ItemVersion,
  "ItemVersions": () => /* reexport */ ItemVersions,
  "Items": () => /* reexport */ Items,
  "LimitedWebPartManager": () => /* reexport */ LimitedWebPartManager,
  "List": () => /* reexport */ List,
  "Lists": () => /* reexport */ Lists,
  "MoveOperations": () => /* reexport */ MoveOperations,
  "MySocial": () => /* reexport */ MySocial,
  "Navigation": () => /* reexport */ Navigation,
  "NavigationNode": () => /* reexport */ NavigationNode,
  "NavigationNodes": () => /* reexport */ NavigationNodes,
  "NavigationService": () => /* reexport */ NavigationService,
  "PageType": () => /* reexport */ PageType,
  "PagedItemCollection": () => /* reexport */ PagedItemCollection,
  "PermissionKind": () => /* reexport */ PermissionKind,
  "PrincipalSource": () => /* reexport */ PrincipalSource,
  "PrincipalType": () => /* reexport */ PrincipalType,
  "Profiles": () => /* reexport */ Profiles,
  "PromotedState": () => /* reexport */ PromotedState,
  "QueryPropertyValueType": () => /* reexport */ QueryPropertyValueType,
  "RegionalSettings": () => /* reexport */ RegionalSettings,
  "RelatedItemManager": () => /* reexport */ RelatedItemManager,
  "Relation": () => /* reexport */ Relation,
  "Relations": () => /* reexport */ Relations,
  "RenderListDataOptions": () => /* reexport */ RenderListDataOptions,
  "ReorderingRuleMatchType": () => /* reexport */ ReorderingRuleMatchType,
  "Replies": () => /* reexport */ Replies,
  "RoleAssignment": () => /* reexport */ RoleAssignment,
  "RoleAssignments": () => /* reexport */ RoleAssignments,
  "RoleDefinition": () => /* reexport */ RoleDefinition,
  "RoleDefinitions": () => /* reexport */ RoleDefinitions,
  "RoleType": () => /* reexport */ RoleType,
  "SPBatch": () => /* reexport */ SPBatch,
  "SPHttpClient": () => /* reexport */ SPHttpClient,
  "SPRest": () => /* reexport */ SPRest,
  "SPSharedObjectType": () => /* reexport */ SPSharedObjectType,
  "Search": () => /* reexport */ Search,
  "SearchBuiltInSourceId": () => /* reexport */ SearchBuiltInSourceId,
  "SearchQueryBuilder": () => /* reexport */ SearchQueryBuilder,
  "SearchResults": () => /* reexport */ SearchResults,
  "SharePointQueryable": () => /* reexport */ SharePointQueryable,
  "SharePointQueryableCollection": () => /* reexport */ SharePointQueryableCollection,
  "SharePointQueryableInstance": () => /* reexport */ SharePointQueryableInstance,
  "SharingDomainRestrictionMode": () => /* reexport */ SharingDomainRestrictionMode,
  "SharingLinkKind": () => /* reexport */ SharingLinkKind,
  "SharingOperationStatusCode": () => /* reexport */ SharingOperationStatusCode,
  "SharingRole": () => /* reexport */ SharingRole,
  "Site": () => /* reexport */ Site,
  "SiteDesigns": () => /* reexport */ SiteDesigns,
  "SiteGroup": () => /* reexport */ SiteGroup,
  "SiteGroups": () => /* reexport */ SiteGroups,
  "SiteScripts": () => /* reexport */ SiteScripts,
  "SiteUser": () => /* reexport */ SiteUser,
  "SiteUsers": () => /* reexport */ SiteUsers,
  "Social": () => /* reexport */ Social,
  "SocialActorType": () => /* reexport */ SocialActorType,
  "SocialActorTypes": () => /* reexport */ SocialActorTypes,
  "SocialFollowResult": () => /* reexport */ SocialFollowResult,
  "SocialStatusCode": () => /* reexport */ SocialStatusCode,
  "SortDirection": () => /* reexport */ SortDirection,
  "Subscription": () => /* reexport */ Subscription,
  "Subscriptions": () => /* reexport */ Subscriptions,
  "Suggest": () => /* reexport */ Suggest,
  "TemplateFileType": () => /* reexport */ TemplateFileType,
  "Term": () => /* reexport */ Term,
  "TermGroup": () => /* reexport */ TermGroup,
  "TermGroups": () => /* reexport */ TermGroups,
  "TermSet": () => /* reexport */ TermSet,
  "TermSets": () => /* reexport */ TermSets,
  "TermStore": () => /* reexport */ TermStore,
  "Terms": () => /* reexport */ Terms,
  "TimeZone": () => /* reexport */ TimeZone,
  "TimeZones": () => /* reexport */ TimeZones,
  "UrlFieldFormatType": () => /* reexport */ UrlFieldFormatType,
  "UrlZone": () => /* reexport */ UrlZone,
  "UserCustomAction": () => /* reexport */ UserCustomAction,
  "UserCustomActionRegistrationType": () => /* reexport */ UserCustomActionRegistrationType,
  "UserCustomActionScope": () => /* reexport */ UserCustomActionScope,
  "UserCustomActions": () => /* reexport */ UserCustomActions,
  "Utilities": () => /* reexport */ Utilities,
  "Version": () => /* reexport */ Version,
  "Versions": () => /* reexport */ Versions,
  "View": () => /* reexport */ View,
  "ViewFields": () => /* reexport */ ViewFields,
  "ViewScope": () => /* reexport */ ViewScope,
  "Views": () => /* reexport */ Views,
  "Web": () => /* reexport */ Web,
  "WebPartDefinition": () => /* reexport */ WebPartDefinition,
  "WebPartDefinitions": () => /* reexport */ WebPartDefinitions,
  "WebPartsPersonalizationScope": () => /* reexport */ WebPartsPersonalizationScope,
  "Webs": () => /* reexport */ Webs,
  "containsInvalidFileFolderChars": () => /* reexport */ containsInvalidFileFolderChars,
  "defaultPath": () => /* reexport */ defaultPath,
  "extractWebUrl": () => /* reexport */ extractWebUrl,
  "objectToSPKeyValueCollection": () => /* reexport */ objectToSPKeyValueCollection,
  "registerCustomRequestClientFactory": () => /* reexport */ registerCustomRequestClientFactory,
  "sp": () => /* reexport */ all_sp,
  "spDelete": () => /* reexport */ spDelete,
  "spGet": () => /* reexport */ spGet,
  "spInvokableFactory": () => /* reexport */ spInvokableFactory,
  "spODataEntity": () => /* reexport */ spODataEntity,
  "spODataEntityArray": () => /* reexport */ spODataEntityArray,
  "spPatch": () => /* reexport */ spPatch,
  "spPost": () => /* reexport */ spPost,
  "spPostDelete": () => /* reexport */ spPostDelete,
  "spPostDeleteETag": () => /* reexport */ spPostDeleteETag,
  "stripInvalidFileFolderChars": () => /* reexport */ stripInvalidFileFolderChars,
  "toAbsoluteUrl": () => /* reexport */ toAbsoluteUrl
});

;// CONCATENATED MODULE: ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

function tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

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

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@pnp/common/util.js
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function getCtxCallback(context, method, ...params) {
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
    let ret = new Date(date.toString()); // don't change original date
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
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
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
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function util_getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
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
function util_assign(target, source, noOverwrite = false, filter = () => true) {
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    const check = noOverwrite ? (o, i) => !(i in o) : () => true;
    // final filter we will use
    const f = (v) => check(target, v) && filter(v);
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce((t, v) => {
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
    const matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
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
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=util.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/collections.js

/**
 * Used to calculate the object properties, with polyfill if needed
 */
const objectEntries = isFunc(Object.entries) ? Object.entries : (o) => Object.keys(o).map((k) => [k, o[k]]);
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if (objectDefinedNotNull(o)) {
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
function mergeMaps(target, ...maps) {
    for (let i = 0; i < maps.length; i++) {
        maps[i].forEach((v, k) => {
            // let's not run the spfx context through Object.assign :)
            if ((typeof k === "string" && k !== "spfxContext") && Object.prototype.toString.call(v) === "[object Object]") {
                // we only handle one level of deep object merging
                target.set(k, Object.assign({}, target.get(k) || {}, v));
            }
            else {
                target.set(k, v);
            }
        });
    }
    return target;
}
//# sourceMappingURL=collections.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/libconfig.js

function setup(config, runtime = DefaultRuntime) {
    runtime.assign(config);
}
// lable mapping for known config values
const s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
const runtimeCreateHooks = [];
function onRuntimeCreate(hook) {
    if (runtimeCreateHooks.indexOf(hook) < 0) {
        // apply hook logic to default runtime
        hook(DefaultRuntime);
        runtimeCreateHooks.push(hook);
    }
}
class Runtime {
    constructor(_v = new Map()) {
        this._v = _v;
        const defaulter = (key, def) => {
            if (!this._v.has(key)) {
                this._v.set(key, def);
            }
        };
        // setup defaults
        defaulter(s[0], "session");
        defaulter(s[1], 60);
        defaulter(s[2], false);
        defaulter(s[3], false);
        defaulter(s[4], 750);
        defaulter(s[5], null);
        defaulter(s[6], false);
        runtimeCreateHooks.forEach(hook => hook(this));
    }
    /**
     *
     * @param config The set of properties to add to this runtime instance
     */
    assign(config) {
        this._v = mergeMaps(this._v, objectToMap(config));
    }
    /**
     * Gets a runtime value using T to define the available keys, and R to define the type returned by that key
     *
     * @param key
     */
    get(key) {
        return this._v.get(key);
    }
    /**
     * Exports the internal Map representing this runtime
     */
    export() {
        const expt = new Map();
        for (const [key, value] of this._v) {
            if (key !== "__isDefault__") {
                expt.set(key, value);
            }
        }
        return expt;
    }
}
// default runtime used globally
const _runtime = new Runtime(new Map([["__isDefault__", true]]));
const DefaultRuntime = _runtime;
//# sourceMappingURL=libconfig.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/safe-global.js
// export either window or global
const safeGlobal = typeof __webpack_require__.g === "undefined" ? window : __webpack_require__.g;
//# sourceMappingURL=safe-global.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/net.js



function mergeHeaders(target, source) {
    if (objectDefinedNotNull(source)) {
        const temp = new Request("", { headers: source });
        temp.headers.forEach((value, name) => {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (objectDefinedNotNull(source)) {
        const headers = util_assign(target.headers || {}, source.headers);
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
    const u = new URL(url);
    return `${u.protocol}//${u.hostname}`;
}
/**
 * Makes requests using the global/window fetch API
 */
class FetchClient {
    fetch(url, options) {
        return safeGlobal.fetch(url, options);
    }
}
/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
class BearerTokenFetchClient extends (/* unused pure expression or super */ null && (FetchClient)) {
    constructor(token) {
        super();
        this.token = token;
    }
    fetch(url, options = {}) {
        const headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", `Bearer ${this.token}`);
        options.headers = headers;
        return super.fetch(url, options);
    }
}
class LambdaFetchClient extends (/* unused pure expression or super */ null && (BearerTokenFetchClient)) {
    constructor(tokenFactory) {
        super(null);
        this.tokenFactory = tokenFactory;
    }
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    fetch(url, options) {
        const _super = Object.create(null, {
            fetch: { get: () => super.fetch }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.token = yield this.tokenFactory({ url, options });
            return _super.fetch.call(this, url, options);
        });
    }
}
/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
class SPFxAdalClient extends (/* unused pure expression or super */ null && (LambdaFetchClient)) {
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    constructor(context) {
        super((params) => __awaiter(this, void 0, void 0, function* () {
            const provider = yield context.aadTokenProviderFactory.getTokenProvider();
            return provider.getToken(getADALResource(params.url));
        }));
        this.context = context;
    }
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    getToken(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.context.aadTokenProviderFactory.getTokenProvider();
            return provider.getToken(resource);
        });
    }
}
//# sourceMappingURL=net.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var tslib_es6_extendStatics = function(d, b) {
    tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return tslib_es6_extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function tslib_es6_rest(s, e) {
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

function tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_es6_generator(thisArg, body) {
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

var tslib_es6_createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function tslib_es6_exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) tslib_es6_createBinding(o, m, p);
}

function tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function tslib_es6_read(o, n) {
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

/** @deprecated */
function tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_es6_read(arguments[i]));
    return ar;
}

/** @deprecated */
function tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function tslib_es6_spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function tslib_es6_await(v) {
    return this instanceof tslib_es6_await ? (this.v = v, this) : new tslib_es6_await(v);
}

function tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_es6_values === "function" ? tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var tslib_es6_setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) tslib_es6_createBinding(result, mod, k);
    tslib_es6_setModuleDefault(result, mod);
    return result;
}

function tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@pnp/common/storage.js



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store, defaultTimeoutMinutes = -1) {
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (DefaultRuntime.get("enableCacheExpiration")) {
            this.cacheExpirationHandler();
        }
    }
    static bind(store) {
        return new PnPClientStorageWrapper(typeof (store) === "undefined" ? new MemoryStorage() : store);
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!objectDefinedNotNull(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    getOrPut(key, getter, expire) {
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return getter();
            }
            let o = this.get(key);
            if (o === null) {
                o = yield getter();
                this.put(key, o, expire);
            }
            return o;
        });
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    deleteExpired() {
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            for (let i = 0; i < this.store.length; i++) {
                const key = this.store.key(i);
                if (key !== null) {
                    // test the stored item to see if we stored it
                    if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                        // get those items as get will delete from cache if they are expired
                        yield this.get(key);
                    }
                }
            }
        });
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            let defaultTimeout = DefaultRuntime.get("defaultCachingTimeoutSeconds");
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = dateAdd(new Date(), "second", defaultTimeout);
        }
        return jsS({ pnp: 1, expiration: expire, value: o });
    }
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    cacheExpirationHandler() {
        if (!this.enabled) {
            return;
        }
        this.deleteExpired().then(() => {
            // call ourself in the future
            setTimeout(getCtxCallback(this, this.cacheExpirationHandler), DefaultRuntime.get("cacheExpirationIntervalMilliseconds"));
        }).catch(console.error);
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof (localStorage) === "undefined" ? new MemoryStorage() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof (sessionStorage) === "undefined" ? new MemoryStorage() : sessionStorage);
        }
        return this._session;
    }
}
//# sourceMappingURL=storage.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/splibconfig.js

const emptyGuid = "00000000-0000-0000-0000-000000000000";
onRuntimeCreate((runtime) => {
    const existing = runtime.get("sp");
    const spPart = Object.assign({}, {
        fetchClientFactory: () => new FetchClient(),
    }, existing);
    runtime.assign({ sp: spPart });
});
function splibconfig_setup(config, runtime = DefaultRuntime) {
    runtime.assign(config);
}
//# sourceMappingURL=splibconfig.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/rest.js



/**
 * Root of the SharePoint REST module
 */
class SPRest {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(_options = {}, _baseUrl = "", _runtime = DefaultRuntime) {
        this._options = _options;
        this._baseUrl = _baseUrl;
        this._runtime = _runtime;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    configure(options, baseUrl = "") {
        return new SPRest(options, baseUrl);
    }
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    setup(config) {
        if (config.pageContext) {
            splibconfig_setup({
                spfxContext: config,
            }, this._runtime);
        }
        else {
            splibconfig_setup(config, this._runtime);
        }
    }
    createIsolated(init) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // merge our defaults
            init = Object.assign({
                baseUrl: "",
                cloneGlobal: true,
                config: {},
                options: {},
            }, init || {});
            const { baseUrl, cloneGlobal, options, config } = init;
            const runtime = cloneGlobal ? new Runtime(DefaultRuntime.export()) : new Runtime();
            runtime.assign(config);
            return new SPRest(options, baseUrl, runtime);
        });
    }
    childConfigHook(callback) {
        return callback({ options: this._options, baseUrl: this._baseUrl, runtime: this._runtime });
    }
}
const sp = new SPRest();
//# sourceMappingURL=rest.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/batch.js

class Batch {
    constructor(_batchId = util_getGUID()) {
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
        this._index = -1;
    }
    get batchId() {
        return this._batchId;
    }
    /**
     * The requests contained in this batch
     */
    get requests() {
        // we sort these each time this is accessed
        return this._reqs.sort((info1, info2) => info1.index - info2.index);
    }
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    track(batchee) {
        batchee.data.batch = this;
        // we need to track the order requests are added to the batch to ensure we always
        // operate on them in order
        if (typeof batchee.data.batchIndex === "undefined" || batchee.data.batchIndex < 0) {
            batchee.data.batchIndex = ++this._index;
        }
    }
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    add(context) {
        const info = {
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
        const p = new Promise((resolve, reject) => {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    }
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    addDependency() {
        let resolver = () => void (0);
        this._deps.push(new Promise((resolve) => {
            resolver = resolve;
        }));
        return resolver;
    }
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    addResolveBatchDependency(p) {
        this._rDeps.push(p);
    }
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    execute() {
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(() => Promise.all(this._deps))
            .then(() => this.executeImpl())
            .then(() => Promise.all(this._rDeps))
            .then(() => void (0));
    }
}
//# sourceMappingURL=batch.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/caching.js

const storage = new PnPClientStorage();
class CachingOptions {
    constructor(key, storeName, expiration) {
        this.key = key;
        this.storeName = storeName;
        this.expiration = expiration;
    }
    get store() {
        if (this.storeName === "local") {
            return storage.local;
        }
        else {
            return storage.session;
        }
    }
}
class CachingParserWrapper {
    constructor(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    parse(response) {
        return this.parser.parse(response).then(r => this.cacheData(r));
    }
    cacheData(data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    }
}
//# sourceMappingURL=caching.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/add-prop.js
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
//# sourceMappingURL=add-prop.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-extensions.js

let _enableExtensions = false;
const globalExtensions = [];
const factoryExtensions = new Map();
const ObjExtensionsSym = Symbol.for("43f7a601");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
const extendGlobal = (e) => {
    _enableExtensions = true;
    extendCol(globalExtensions, e);
};
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const extendObj = (target, extensions) => {
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
const extendFactory = (factory, extensions) => {
    _enableExtensions = true;
    // factoryExtensions
    const proto = Reflect.getPrototypeOf(factory);
    if (!Reflect.has(proto, ObjExtensionsSym)) {
        Reflect.defineProperty(proto, ObjExtensionsSym, {
            value: getGUID(),
        });
    }
    const key = proto[ObjExtensionsSym];
    if (!factoryExtensions.has(key)) {
        factoryExtensions.set(key, []);
    }
    extendCol(factoryExtensions.get(key), extensions);
};
function extendCol(a, e) {
    if (Array.isArray(e)) {
        a.push(...e);
    }
    else {
        a.push(e);
    }
}
/**
 * Clears all global extensions
 */
const clearGlobalExtensions = () => {
    globalExtensions.length = 0;
};
/**
 * Disables all extensions
 */
const disableExtensions = () => {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
const enableExtensions = () => {
    _enableExtensions = true;
};
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const applyFactoryExtensions = (factory, args) => {
    let o = factory(args);
    const proto = Reflect.getPrototypeOf(factory);
    if (Reflect.has(proto, ObjExtensionsSym)) {
        const extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
        o = extendObj(o, extensions);
    }
    return o;
};
function extensionOrDefault(op, or, target, ...rest) {
    if (_enableExtensions) {
        const extensions = [];
        // we need to first invoke extensions tied to only this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push(...Reflect.get(target, ObjExtensionsSym));
        }
        // second we need to process any global extensions
        extensions.push(...globalExtensions);
        for (let i = 0; i < extensions.length; i++) {
            const extension = extensions[i];
            let result = undefined;
            if (isFunc(extension)) {
                // this extension is a function which we call
                result = extension(op, target, ...rest);
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op)(target, ...rest);
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or(target, ...rest);
}
//# sourceMappingURL=invokable-extensions.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-binder.js


const invokableBinder = (invoker) => (constructor) => {
    return (...args) => {
        const factory = (as) => {
            const r = Object.assign(function (...ags) {
                return invoker.call(r, ...ags);
            }, new constructor(...as));
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        // ie11 setting is always global
        if (DefaultRuntime.get("ie11") || false) {
            return factory(args);
        }
        else {
            return new Proxy(applyFactoryExtensions(factory, args), {
                apply: (target, _thisArg, argArray) => {
                    return extensionOrDefault("apply", (...a) => Reflect.apply(a[0], a[1], a[2]), target, _thisArg, argArray);
                },
                get: (target, p, receiver) => {
                    return extensionOrDefault("get", (...a) => Reflect.get(a[0], a[1], a[2]), target, p, receiver);
                },
                has: (target, p) => {
                    return extensionOrDefault("has", (...a) => Reflect.has(a[0], a[1]), target, p);
                },
                set: (target, p, value, receiver) => {
                    return extensionOrDefault("set", (...a) => Reflect.set(a[0], a[1], a[2], a[3]), target, p, value, receiver);
                },
            });
        }
    };
};
const invokableFactory = invokableBinder(function (options) {
    return this.defaultAction(options);
});
//# sourceMappingURL=invokable-binder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var tslib_tslib_es6_extendStatics = function(d, b) {
    tslib_tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return tslib_tslib_es6_extendStatics(d, b);
};

function tslib_tslib_es6_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    tslib_tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_tslib_es6_assign = function() {
    tslib_tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_tslib_es6_assign.apply(this, arguments);
}

function tslib_tslib_es6_rest(s, e) {
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

function tslib_tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function node_modules_tslib_tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_tslib_es6_generator(thisArg, body) {
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

var tslib_tslib_es6_createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function tslib_tslib_es6_exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) tslib_tslib_es6_createBinding(o, m, p);
}

function tslib_tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function tslib_tslib_es6_read(o, n) {
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

/** @deprecated */
function tslib_tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_tslib_es6_read(arguments[i]));
    return ar;
}

/** @deprecated */
function tslib_tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function tslib_tslib_es6_spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function tslib_tslib_es6_await(v) {
    return this instanceof tslib_tslib_es6_await ? (this.v = v, this) : new tslib_tslib_es6_await(v);
}

function tslib_tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_tslib_es6_values === "function" ? tslib_tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var tslib_tslib_es6_setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function tslib_tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) tslib_tslib_es6_createBinding(result, mod, k);
    tslib_tslib_es6_setModuleDefault(result, mod);
    return result;
}

function tslib_tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_tslib_es6_classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function tslib_tslib_es6_classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/@pnp/odata/parsers.js


class ODataParser {
    parse(r) {
        return new Promise((resolve, reject) => {
            if (this.handleError(r, reject)) {
                this.parseImpl(r, resolve, reject);
            }
        });
    }
    parseImpl(r, resolve, reject) {
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(txt => txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {})
                .then(json => resolve(this.parseODataJSON(json)))
                .catch(e => reject(e));
        }
    }
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    handleError(r, reject) {
        if (!r.ok) {
            HttpRequestError.init(r).then(reject);
        }
        return r.ok;
    }
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    parseODataJSON(json) {
        let result = json;
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
    }
}
class TextParser extends ODataParser {
    parseImpl(r, resolve) {
        r.text().then(resolve);
    }
}
class BlobParser extends ODataParser {
    parseImpl(r, resolve) {
        r.blob().then(resolve);
    }
}
class JSONParser extends ODataParser {
    parseImpl(r, resolve) {
        r.json().then(resolve);
    }
}
class BufferParser extends ODataParser {
    parseImpl(r, resolve) {
        if (isFunc(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    }
}
class LambdaParser extends (/* unused pure expression or super */ null && (ODataParser)) {
    constructor(parser) {
        super();
        this.parser = parser;
    }
    parseImpl(r, resolve) {
        this.parser(r).then(resolve);
    }
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static init(r) {
        return node_modules_tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            const t = yield r.clone().text();
            return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r.clone());
        });
    }
}
//# sourceMappingURL=parsers.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/queryable.js


function cloneQueryableData(source) {
    let body;
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    // Note however, even bodies that can be serialized will not be cloned.
    if (source.options && source.options.body) {
        body = source.options.body;
        source.options.body = "-";
    }
    const s = JSON.stringify(source, (key, value) => {
        switch (key) {
            case "query":
                return JSON.stringify([...value]);
            case "batch":
            case "batchDependency":
            case "cachingOptions":
            case "clientFactory":
            case "parser":
                return "-";
            default:
                return value;
        }
    }, 0);
    const parsed = JSON.parse(s, (key, value) => {
        switch (key) {
            case "query":
                return new Map(JSON.parse(value));
            case "batch":
            case "batchDependency":
            case "cachingOptions":
            case "clientFactory":
            case "parser":
                return source[key];
            default:
                return value;
        }
    });
    if (body) {
        parsed.options.body = body;
        source.options.body = body;
    }
    return parsed;
}
class Queryable {
    constructor(dataSeed = {}) {
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new ODataParser(),
            query: new Map(),
            url: "",
            useCaching: false,
        }, cloneQueryableData(dataSeed));
        this._runtime = null;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = Object.assign({}, this.data, cloneQueryableData(value));
    }
    getRuntime() {
        if (this._runtime === null) {
            return DefaultRuntime;
        }
        return this._runtime;
    }
    setRuntime(...args) {
        // need to wait for ts update in spfx: [runtime: Runtime] | [cloneGlobal: boolean, additionalConfig?: ITypedHash<any>]
        if (args[0] instanceof Runtime) {
            this._runtime = args[0];
        }
        else {
            this._runtime = args[0] ? new Runtime(DefaultRuntime.export()) : new Runtime();
            if (args.length > 1 && objectDefinedNotNull(args[1])) {
                this._runtime.assign(args[1]);
            }
        }
        return this;
    }
    /**
  * Gets the current url
  *
  */
    toUrl() {
        return this.data.url;
    }
    /**
   * Directly concatenates the supplied string to the current url, not normalizing "/" chars
   *
   * @param pathPart The string to concatenate to the url
   */
    concat(pathPart) {
        this.data.url += pathPart;
        return this;
    }
    /**
   * Provides access to the query builder for this url
   *
   */
    get query() {
        return this.data.query;
    }
    /**
   * Sets custom options for current object and all derived objects accessible via chaining
   *
   * @param options custom options
   */
    configure(options) {
        mergeOptions(this.data.options, options);
        return this;
    }
    /**
   * Configures this instance from the configure options of the supplied instance
   *
   * @param o Instance from which options should be taken
   */
    configureFrom(o) {
        mergeOptions(this.data.options, o.data.options);
        const sourceRuntime = o.getRuntime();
        if (!sourceRuntime.get("__isDefault__")) {
            this.setRuntime(sourceRuntime);
        }
        return this;
    }
    /**
   * Enables caching for this request
   *
   * @param options Defines the options used when caching this request
   */
    usingCaching(options) {
        const runtime = this.getRuntime();
        if (!runtime.get("globalCacheDisable")) {
            this.data.useCaching = true;
            // handle getting just the key
            if (typeof options === "string") {
                if (stringIsNullOrEmpty(options)) {
                    throw Error("Cache key cannot be empty.");
                }
                options = { key: options };
            }
            // this uses our local options if they are defined as defaults
            const defaultOpts = {
                expiration: dateAdd(new Date(), "second", runtime.get("defaultCachingTimeoutSeconds")),
                storeName: runtime.get("defaultCachingStore"),
            };
            this.data.cachingOptions = util_assign(defaultOpts, options);
        }
        return this;
    }
    usingParser(parser) {
        this.data.parser = parser;
        return this;
    }
    /**
   * Allows you to set a request specific processing pipeline
   *
   * @param pipeline The set of methods, in order, to execute a given request
   */
    withPipeline(pipeline) {
        this.data.pipes = pipeline.slice(0);
        return this;
    }
    /**
   * Appends the given string and normalizes "/" chars
   *
   * @param pathPart The string to append
   */
    append(pathPart) {
        this.data.url = combine(this.data.url, pathPart);
    }
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
    inBatch(batch) {
        if (this.hasBatch) {
            throw Error("This query is already part of a batch.");
        }
        if (objectDefinedNotNull(batch)) {
            batch.track(this);
        }
        return this;
    }
    /**
   * Blocks a batch call from occuring, MUST be cleared by calling the returned function
  */
    addBatchDependency() {
        if (objectDefinedNotNull(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return () => null;
    }
    /**
   * Indicates if the current query has a batch associated
   *
   */
    get hasBatch() {
        return objectDefinedNotNull(this.data.batch);
    }
    /**
   * The batch currently associated with this query or null
   *
   */
    get batch() {
        return this.hasBatch ? this.data.batch : null;
    }
    /**
   * Gets the parent url used when creating this instance
   *
   */
    get parentUrl() {
        return this.data.parentUrl;
    }
    /**
   * Clones this instance's data to target
   *
   * @param target Instance to which data is written
   * @param settings [Optional] Settings controlling how clone is applied
   */
    cloneTo(target, settings = {}) {
        // default values for settings
        settings = util_assign({
            includeBatch: true,
            includeQuery: false,
        }, settings);
        target.data = Object.assign({}, cloneQueryableData(this.data), {
            batch: null,
            cloneParentCacheOptions: null,
            cloneParentWasCaching: false,
        }, cloneQueryableData(target.data));
        target.configureFrom(this);
        if (settings.includeBatch) {
            target.inBatch(this.batch);
        }
        if (settings.includeQuery && this.query.size > 0) {
            this.query.forEach((v, k) => target.query.set(k, v));
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    }
}
//# sourceMappingURL=queryable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/logging/logger.js
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
class Logger {
    /**
   * Gets or sets the active log level to apply for log filtering
   */
    static get activeLogLevel() {
        return Logger.instance.activeLogLevel;
    }
    static set activeLogLevel(value) {
        Logger.instance.activeLogLevel = value;
    }
    static get instance() {
        if (Logger._instance === undefined || Logger._instance === null) {
            Logger._instance = new LoggerImpl();
        }
        return Logger._instance;
    }
    /**
   * Adds ILogListener instances to the set of subscribed listeners
   *
   * @param listeners One or more listeners to subscribe to this log
   */
    static subscribe(...listeners) {
        listeners.forEach(listener => Logger.instance.subscribe(listener));
    }
    /**
   * Clears the subscribers collection, returning the collection before modification
   */
    static clearSubscribers() {
        return Logger.instance.clearSubscribers();
    }
    /**
   * Gets the current subscriber count
   */
    static get count() {
        return Logger.instance.count;
    }
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param message The message to write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    static write(message, level = 1 /* Info */) {
        Logger.instance.log({ level: level, message: message });
    }
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param json The json object to stringify and write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    static writeJSON(json, level = 1 /* Info */) {
        this.write(JSON.stringify(json), level);
    }
    /**
   * Logs the supplied entry to the subscribed listeners
   *
   * @param entry The message to log
   */
    static log(entry) {
        Logger.instance.log(entry);
    }
    /**
   * Logs an error object to the subscribed listeners
   *
   * @param err The error object
   */
    static error(err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    }
}
class LoggerImpl {
    constructor(activeLogLevel = 2 /* Warning */, subscribers = []) {
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    subscribe(listener) {
        this.subscribers.push(listener);
    }
    clearSubscribers() {
        const s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    }
    get count() {
        return this.subscribers.length;
    }
    write(message, level = 1 /* Info */) {
        this.log({ level: level, message: message });
    }
    log(entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(subscriber => subscriber.log(entry));
        }
    }
}
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
//# sourceMappingURL=logger.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/logging/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline.js




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    Logger.log({
        data: Logger.activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: `[${context.requestId}] (${(new Date()).getTime()}) Returning result from pipeline. Set logging to verbose to see data.`,
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise((resolve) => {
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
        Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Request pipeline contains no methods!`, 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    const promise = next(context).then(ctx => returnResult(ctx)).catch((e) => {
        Logger.error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requests have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun = false) {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && hOP(args[0], "hasResult") && args[0].hasResult) {
                Logger.write(`[${args[0].requestId}] (${(new Date()).getTime()}) Skipping request pipeline method ${propertyKey}, existing result in pipeline.`, 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            Logger.write(`[${args[0].requestId}] (${(new Date()).getTime()}) Calling request pipeline method ${propertyKey}.`, 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then((ctx) => next(ctx));
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
class PipelineMethods {
    /**
     * Logs the start of the request
     */
    static logStart(context) {
        return new Promise(resolve => {
            Logger.log({
                data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: `[${context.requestId}] (${(new Date()).getTime()}) Beginning ${context.method} request (${context.url})`,
            });
            resolve(context);
        });
    }
    /**
     * Handles caching of the request
     */
    static caching(context) {
        return new Promise(resolve => {
            // handle caching, if applicable
            if (context.useCaching) {
                Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Caching is enabled for request, checking cache...`, 1 /* Info */);
                let cacheOptions = new CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = util_assign(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    let data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        Logger.log({
                            data: Logger.activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: `[${context.requestId}] (${(new Date()).getTime()}) Value returned from cache.`,
                        });
                        // ensure we clear any held batch dependency we are resolving from the cache
                        if (isFunc(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (hOP(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(ctx => resolve(ctx));
                    }
                }
                Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Value not found in cache.`, 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    }
    /**
     * Sends the request
     */
    static send(context) {
        return new Promise((resolve, reject) => {
            // send or batch the request
            if (context.isBatched) {
                const p = context.batch.add(context);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (isFunc(context.batchDependency)) {
                    context.batchDependency();
                }
                Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Batching request in batch ${context.batch.batchId}.`, 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Sending request.`, 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                const client = context.clientFactory();
                const opts = util_assign(context.options || {}, { method: context.method });
                client.fetch(context.url, opts)
                    .then(response => context.parser.parse(response))
                    .then(result => setResult(context, result))
                    .then(ctx => resolve(ctx))
                    .catch(e => reject(e));
            }
        });
    }
    /**
     * Logs the end of the request
     */
    static logEnd(context) {
        return new Promise(resolve => {
            if (context.isBatched) {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: `[${context.requestId}] (${(new Date()).getTime()}) ${context.method} request will complete in batch ${context.batch.batchId}.`,
                });
            }
            else {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: `[${context.requestId}] (${(new Date()).getTime()}) Completing ${context.method} request.`,
                });
            }
            resolve(context);
        });
    }
}
tslib_tslib_es6_decorate([
    requestPipelineMethod(true)
], PipelineMethods, "logStart", null);
tslib_tslib_es6_decorate([
    requestPipelineMethod()
], PipelineMethods, "caching", null);
tslib_tslib_es6_decorate([
    requestPipelineMethod()
], PipelineMethods, "send", null);
tslib_tslib_es6_decorate([
    requestPipelineMethod(true)
], PipelineMethods, "logEnd", null);
function getDefaultPipeline() {
    return [
        PipelineMethods.logStart,
        PipelineMethods.caching,
        PipelineMethods.send,
        PipelineMethods.logEnd,
    ].slice(0);
}
//# sourceMappingURL=pipeline.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline-binder.js




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
                    clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: objectDefinedNotNull(o.batch),
                    method,
                    options: null,
                    parentUrl: "",
                    parser: new ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: util_getGUID(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
const defaultPipelineBinder = pipelineBinder(getDefaultPipeline());
//# sourceMappingURL=pipeline-binder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/request-builders.js

function body(o, previous) {
    return Object.assign({ body: jsS(o) }, previous);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/index.js










//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/metadata.js
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
//# sourceMappingURL=metadata.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/extractweburl.js

function extractWebUrl(candidateUrl) {
    if (stringIsNullOrEmpty(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extractweburl.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/telemetry.js



/**
 * Includes this method name in the X-ClientService-ClientTag used to record pnpjs usage
 *
 * @param name Method name, displayed in the
 */
function tag(name) {
    return function (target, key, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            return tslib_es6_awaiter(this, void 0, void 0, function* () {
                this.configure(headers({ "X-PnPjs-Tracking": name }));
                return originalMethod.apply(this, args);
            });
        };
        return descriptor;
    };
}
tag.getClientTag = (h, deleteFromCollection = true) => {
    if (h.has("X-PnPjs-Tracking")) {
        const methodName = h.get("X-PnPjs-Tracking");
        if (deleteFromCollection) {
            h.delete("X-PnPjs-Tracking");
        }
        if (!stringIsNullOrEmpty(methodName)) {
            return methodName;
        }
    }
    return "";
};
tag.configure = (o, name) => {
    return o.configure(headers({ "X-PnPjs-Tracking": name }));
};
tag.isTagged = (o) => {
    return o.data.options.headers && o.data.options.headers["X-PnPjs-Tracking"];
};
//# sourceMappingURL=telemetry.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sphttpclient.js





class SPHttpClient {
    constructor(...args) {
        // constructor(...args: [runtime: Runtime] | [impl: IHttpClientImpl, runtime?: Runtime]) {
        var _a;
        if (args[0] instanceof Runtime) {
            this._runtime = args[0];
        }
        else {
            this._runtime = args.length > 1 && args[1] instanceof Runtime ? args[1] : DefaultRuntime;
            this._impl = args[0];
        }
        this._impl = ((_a = this._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.fetchClientFactory()) || null;
        if (this._impl === null) {
            throw Error("Could not generate fetchClientFactory in SPHttpClient.");
        }
        this._digestCache = getDigestFactory(this);
    }
    fetch(url, options = {}) {
        var _a, _b;
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            let opts = util_assign(options, { cache: "no-cache", credentials: "same-origin" }, true);
            const headers = new Headers();
            // first we add the global headers so they can be overwritten by any passed in locally to this call
            mergeHeaders(headers, (_b = (_a = this._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.sp) === null || _b === void 0 ? void 0 : _b.headers);
            // second we add the local options so we can overwrite the globals
            mergeHeaders(headers, options.headers);
            // lastly we apply any default headers we need that may not exist
            if (!headers.has("Accept")) {
                headers.append("Accept", "application/json");
            }
            if (!headers.has("Content-Type")) {
                headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
            }
            if (!headers.has("X-ClientService-ClientTag")) {
                const methodName = tag.getClientTag(headers);
                let clientTag = `PnPCoreJS:2.1.0:${methodName}`;
                if (clientTag.length > 32) {
                    clientTag = clientTag.substr(0, 32);
                }
                headers.append("X-ClientService-ClientTag", clientTag);
            }
            opts = util_assign(opts, { headers: headers });
            // if we have either a request digest or an authorization header we don't need a digest
            if (opts.method && opts.method.toUpperCase() !== "GET" && !headers.has("X-RequestDigest") && !headers.has("Authorization")) {
                const digest = yield this._digestCache(extractWebUrl(url));
                headers.append("X-RequestDigest", digest);
            }
            return this.fetchRaw(url, opts);
        });
    }
    fetchRaw(url, options = {}) {
        // here we need to normalize the headers
        const rawHeaders = new Headers();
        mergeHeaders(rawHeaders, options.headers);
        options = util_assign(options, { headers: rawHeaders });
        const retry = (ctx) => {
            // handles setting the proper timeout for a retry
            const setRetry = (response) => {
                let delay;
                if (response.headers.has("Retry-After")) {
                    // if we have gotten a header, use that value as the delay value in seconds
                    delay = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                }
                else {
                    // grab our current delay
                    delay = ctx.delay;
                    // Increment our counters.
                    ctx.delay *= 2;
                }
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(Error(`Retry count exceeded (${ctx.retryCount}) for request. Response status: [${response.status}] ${response.statusText}`));
                }
                else {
                    // Set our retry timeout for {delay} milliseconds.
                    setTimeout(getCtxCallback(this, retry, ctx), delay);
                }
            };
            // send the actual request
            this._impl.fetch(url, options).then((response) => {
                if (response.status === 429) {
                    // we have been throttled
                    setRetry(response);
                }
                else {
                    ctx.resolve(response);
                }
            }).catch((response) => {
                if (response.status === 503 || response.status === 504) {
                    // http status code 503 or 504, we can retry this
                    setRetry(response);
                }
                else {
                    ctx.reject(response);
                }
            });
        };
        return new Promise((resolve, reject) => {
            retry.call(this, {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            });
        });
    }
    get(url, options = {}) {
        const opts = util_assign(options, { method: "GET" });
        return this.fetch(url, opts);
    }
    post(url, options = {}) {
        const opts = util_assign(options, { method: "POST" });
        return this.fetch(url, opts);
    }
    patch(url, options = {}) {
        const opts = util_assign(options, { method: "PATCH" });
        return this.fetch(url, opts);
    }
    delete(url, options = {}) {
        const opts = util_assign(options, { method: "DELETE" });
        return this.fetch(url, opts);
    }
}
// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
const digests = new Map();
function getDigestFactory(client) {
    return (webUrl) => tslib_es6_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const cachedDigest = digests.get(webUrl);
        if (cachedDigest !== undefined) {
            const now = new Date();
            if (now < cachedDigest.expiration) {
                return cachedDigest.value;
            }
        }
        const url = combine(webUrl, "/_api/contextinfo");
        const headers = {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose;charset=utf-8",
        };
        const resp = yield client.fetchRaw(url, {
            cache: "no-cache",
            credentials: "same-origin",
            headers: util_assign(headers, (_b = (_a = client._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.sp) === null || _b === void 0 ? void 0 : _b.headers, true),
            method: "POST",
        });
        const parsed = yield (new ODataParser()).parse(resp).then(r => r.GetContextWebInformation);
        const newCachedDigest = {
            expiration: dateAdd(new Date(), "second", parsed.FormDigestTimeoutSeconds),
            value: parsed.FormDigestValue,
        };
        digests.set(webUrl, newCachedDigest);
        return newCachedDigest.value;
    });
}
//# sourceMappingURL=sphttpclient.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/toabsoluteurl.js


/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl, runtime = DefaultRuntime) {
    var _a, _b;
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        if (isUrlAbsolute(candidateUrl)) {
            // if we are already absolute, then just return the url
            return candidateUrl;
        }
        const baseUrl = (_a = runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.baseUrl;
        const fetchClientFactory = (_b = runtime.get("sp")) === null || _b === void 0 ? void 0 : _b.fetchClientFactory;
        if (!stringIsNullOrEmpty(baseUrl)) {
            // base url specified either with baseUrl of spfxContext config property
            return combine(baseUrl, candidateUrl);
        }
        // use a passed context if provided, if not see if we get one from the current runtime
        const context = runtime.get("spfxContext");
        if (context) {
            return combine(context.pageContext.web.absoluteUrl, candidateUrl);
        }
        // to make the existing node client work in a backwards compatible way we do the following (hacky thing)
        // get the client
        // see if it has a siteUrl property
        // use that to absolute the url
        if (fetchClientFactory) {
            const tempClient = fetchClientFactory();
            if (hOP(tempClient, "siteUrl")) {
                return combine(tempClient.siteUrl, candidateUrl);
            }
        }
        if (safeGlobal._spPageContextInfo !== undefined) {
            // operating in classic pages
            if (hOP(safeGlobal._spPageContextInfo, "webAbsoluteUrl")) {
                return combine(safeGlobal._spPageContextInfo.webAbsoluteUrl, candidateUrl);
            }
            else if (hOP(safeGlobal._spPageContextInfo, "webServerRelativeUrl")) {
                return combine(safeGlobal._spPageContextInfo.webServerRelativeUrl, candidateUrl);
            }
        }
        // does window.location exist and have a certain path part in it?
        if (safeGlobal.location !== undefined) {
            const location = safeGlobal.location.toString().toLowerCase();
            ["/_layouts/", "/siteassets/", "/sitepages/"].forEach((s) => {
                const index = location.indexOf(s);
                if (index > 0) {
                    return combine(location.substr(0, index), candidateUrl);
                }
            });
        }
        return candidateUrl;
    });
}
//# sourceMappingURL=toabsoluteurl.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/operations.js





function registerCustomRequestClientFactory(requestClientFactory) {
    httpClientFactory = isFunc(requestClientFactory) ? () => requestClientFactory : defaultFactory;
}
const defaultFactory = (runtime) => () => new SPHttpClient(runtime);
let httpClientFactory = defaultFactory;
const send = (method) => {
    return function (o, options) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // use the current runtime
            const runtime = o.getRuntime();
            const operation = defaultPipelineBinder(httpClientFactory(runtime))(method);
            const data = cloneQueryableData(o.data);
            const batchDependency = objectDefinedNotNull(data.batch) ? data.batch.addDependency() : () => {
                return;
            };
            const url = yield toAbsoluteUrl(o.toUrlAndQuery(), runtime);
            mergeOptions(data.options, options);
            return operation(Object.assign({}, data, {
                batchDependency,
                url,
            }));
        });
    };
};
const spGet = (o, options) => {
    // Fix for #304 - when we clone objects we in some cases then execute a get request
    // in these cases the caching settings were getting dropped from the request
    // this tracks if the object from which this was cloned was caching and applies that to an immediate get request
    // does not affect objects cloned from this as we are using different fields to track the settings so it won't
    // be triggered
    if (o.data.cloneParentWasCaching) {
        o.usingCaching(o.data.cloneParentCacheOptions);
    }
    // if we are forcing caching set that in the data here
    if (o._forceCaching) {
        o.data.useCaching = true;
    }
    return send("GET")(o, options);
};
const spPost = (o, options) => send("POST")(o, options);
const spDelete = (o, options) => send("DELETE")(o, options);
const spPatch = (o, options) => send("PATCH")(o, options);
const spPostDelete = (o, options) => {
    const opts = Object.assign(headers({ "X-HTTP-Method": "DELETE" }), options);
    return spPost(o, opts);
};
const spPostDeleteETag = (o, options, eTag = "*") => {
    const opts = Object.assign(headers({ "X-HTTP-Method": "DELETE", "IF-Match": eTag }), options);
    return spPost(o, opts);
};
//# sourceMappingURL=operations.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharepointqueryable.js






const spInvokableFactory = (f) => {
    return invokableFactory(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SharePointQueryable extends Queryable {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(baseUrl, path) {
        let url = "";
        let parentUrl = "";
        const query = new Map();
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (isUrlAbsolute(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                parentUrl = baseUrl;
                url = combine(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = baseUrl.lastIndexOf("/");
                parentUrl = baseUrl.slice(0, index);
                path = combine(baseUrl.slice(index), path);
                url = combine(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = baseUrl.lastIndexOf("(");
                parentUrl = baseUrl.slice(0, index);
                url = combine(baseUrl, path);
            }
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = combine(parentUrl, path || "");
            const target = baseUrl.query.get("@target");
            if (target !== undefined) {
                query.set("@target", target);
            }
        }
        // init base with correct values for data seed
        super({
            parentUrl,
            query,
            url,
        });
        // post init actions
        if (typeof baseUrl !== "string") {
            this.configureFrom(baseUrl);
        }
        this._forceCaching = false;
    }
    /**
     * Gets the full url with query information
     */
    toUrlAndQuery() {
        const aliasedParams = new Map(this.query);
        let url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, (match, labelName, value) => {
            Logger.write(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0 /* Verbose */);
            aliasedParams.set(labelName, `'${value}'`);
            return labelName;
        });
        if (aliasedParams.size > 0) {
            const char = url.indexOf("?") > -1 ? "&" : "?";
            url += `${char}${Array.from(aliasedParams).map((v) => v[0] + "=" + v[1]).join("&")}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.map(encodeURIComponent).join(","));
        }
        return this;
    }
    get(options) {
        return spGet(this, options);
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.map(encodeURIComponent).join(","));
        }
        return this;
    }
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     * @param includeQuery If true all of the query values will be copied to the cloned instance
     */
    clone(factory, additionalPath, includeBatch = true, includeQuery = false) {
        const clone = super.cloneTo(factory(this, additionalPath), { includeBatch, includeQuery });
        // handle sp specific clone actions
        if (!includeQuery) {
            // we would have already copied this over if we got the entire query
            const t = "@target";
            if (this.query.has(t)) {
                clone.query.set(t, this.query.get(t));
            }
        }
        return clone;
    }
    /**
     * The default action for this object (unless overridden spGet)
     *
     * @param options optional request options
     */
    defaultAction(options) {
        return spGet(this, options);
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, baseUrl = this.parentUrl, path, batch) {
        let parent = factory(baseUrl, path).configureFrom(this);
        const t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        if (batch !== undefined) {
            parent = parent.inBatch(batch);
        }
        return parent;
    }
}
const SharePointQueryable = spInvokableFactory(_SharePointQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SharePointQueryableCollection extends _SharePointQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", encodeURIComponent(filter));
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${encodeURIComponent(orderBy)} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SharePointQueryableCollection = spInvokableFactory(_SharePointQueryableCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SharePointQueryableInstance extends _SharePointQueryable {
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    _update(type, mapper) {
        return (props) => spPost(tag.configure(this, `${type}.Update`), {
            body: jsS(util_assign(metadata(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then((d) => mapper(d, props));
    }
}
const SharePointQueryableInstance = spInvokableFactory(_SharePointQueryableInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable(t) {
    return function () {
        return spPostDelete(tag.configure(this, `${t}.delete`));
    };
}
function deleteableWithETag(t) {
    return function (eTag = "*") {
        return spPostDeleteETag(tag.configure(this, `${t}.delete`), {}, eTag);
    };
}
//# sourceMappingURL=sharepointqueryable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/decorators.js
/**
 * Class Decorators
 */
/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}
// TODO::?
// performance tracking method decorator
// redirect to graph api
//# sourceMappingURL=decorators.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/odata.js




function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (hOP(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (hOP(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (hOP(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (hOP(candidate, s[3]) && hOP(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = isUrlAbsolute(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(extractWebUrl(candidate[s[3]]), "_api", editLink);
        }
        else if (hOP(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (hOP(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return combine(...parts);
}
class SPODataEntityParserImpl extends ODataParser {
    constructor(factory) {
        super();
        this.factory = factory;
        this.hydrate = (d) => {
            const o = this.factory(odataUrlFrom(d), null);
            return util_assign(o, d);
        };
    }
    parse(r) {
        return super.parse(r).then((d) => {
            const o = this.factory(odataUrlFrom(d), null);
            return util_assign(o, d);
        });
    }
}
class SPODataEntityArrayParserImpl extends ODataParser {
    constructor(factory) {
        super();
        this.factory = factory;
        this.hydrate = (d) => {
            return d.map(v => {
                const o = this.factory(odataUrlFrom(v), null);
                return util_assign(o, v);
            });
        };
    }
    parse(r) {
        return super.parse(r).then((d) => {
            return d.map(v => {
                const o = this.factory(odataUrlFrom(v), null);
                return util_assign(o, v);
            });
        });
    }
}
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}
//# sourceMappingURL=odata.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/batch.js






/**
 * Manages a batch of OData operations
 */
class SPBatch extends Batch {
    constructor(url, runtime = DefaultRuntime) {
        super();
        this.url = url;
        this.runtime = runtime;
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    static ParseResponse(body) {
        const responses = [];
        const header = "--batchresponse_";
        // Ex. "HTTP/1.1 500 Internal Server Error"
        const statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
        const lines = body.split("\n");
        let state = "batch";
        let status;
        let statusText;
        for (let i = 0; i < lines.length; ++i) {
            const line = lines[i];
            switch (state) {
                case "batch":
                    if (line.substr(0, header.length) === header) {
                        state = "batchHeaders";
                    }
                    else {
                        if (line.trim() !== "") {
                            throw Error(`Invalid response, line ${i}`);
                        }
                    }
                    break;
                case "batchHeaders":
                    if (line.trim() === "") {
                        state = "status";
                    }
                    break;
                case "status": {
                    const parts = statusRegExp.exec(line);
                    if (parts.length !== 3) {
                        throw Error(`Invalid status, line ${i}`);
                    }
                    status = parseInt(parts[1], 10);
                    statusText = parts[2];
                    state = "statusHeaders";
                    break;
                }
                case "statusHeaders":
                    if (line.trim() === "") {
                        state = "body";
                    }
                    break;
                case "body":
                    responses.push((status === 204) ? new Response() : new Response(line, { status: status, statusText: statusText }));
                    state = "batch";
                    break;
            }
        }
        if (state !== "status") {
            throw Error("Unexpected end of input");
        }
        return responses;
    }
    executeImpl() {
        var _a;
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Executing batch with ${this.requests.length} requests.`, 1 /* Info */);
            // if we don't have any requests, don't bother sending anything
            // this could be due to caching further upstream, or just an empty batch
            if (this.requests.length < 1) {
                Logger.write("Resolving empty batch.", 1 /* Info */);
                return;
            }
            // creating the client here allows the url to be populated for nodejs client as well as potentially
            // any other hacks needed for other types of clients. Essentially allows the absoluteRequestUrl
            // below to be correct
            const client = new SPHttpClient(this.runtime);
            // due to timing we need to get the absolute url here so we can use it for all the individual requests
            // and for sending the entire batch
            const absoluteRequestUrl = yield toAbsoluteUrl(this.url, this.runtime);
            // build all the requests, send them, pipe results in order to parsers
            const batchBody = [];
            let currentChangeSetId = "";
            for (let i = 0; i < this.requests.length; i++) {
                const reqInfo = this.requests[i];
                if (reqInfo.method === "GET") {
                    if (currentChangeSetId.length > 0) {
                        // end an existing change set
                        batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                        currentChangeSetId = "";
                    }
                    batchBody.push(`--batch_${this.batchId}\n`);
                }
                else {
                    if (currentChangeSetId.length < 1) {
                        // start new change set
                        currentChangeSetId = util_getGUID();
                        batchBody.push(`--batch_${this.batchId}\n`);
                        batchBody.push(`Content-Type: multipart/mixed; boundary="changeset_${currentChangeSetId}"\n\n`);
                    }
                    batchBody.push(`--changeset_${currentChangeSetId}\n`);
                }
                // common batch part prefix
                batchBody.push("Content-Type: application/http\n");
                batchBody.push("Content-Transfer-Encoding: binary\n\n");
                // these are the per-request headers
                const headers = new Headers();
                // this is the url of the individual request within the batch
                const url = isUrlAbsolute(reqInfo.url) ? reqInfo.url : combine(absoluteRequestUrl, reqInfo.url);
                Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Adding request ${reqInfo.method} ${url} to batch.`, 0 /* Verbose */);
                if (reqInfo.method !== "GET") {
                    let method = reqInfo.method;
                    const castHeaders = reqInfo.options.headers;
                    if (hOP(reqInfo, "options") && hOP(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
                        method = castHeaders["X-HTTP-Method"];
                        delete castHeaders["X-HTTP-Method"];
                    }
                    batchBody.push(`${method} ${url} HTTP/1.1\n`);
                    headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                else {
                    batchBody.push(`${reqInfo.method} ${url} HTTP/1.1\n`);
                }
                // merge global config headers
                mergeHeaders(headers, (_a = this.runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.headers);
                // merge per-request headers
                if (reqInfo.options) {
                    mergeHeaders(headers, reqInfo.options.headers);
                }
                // lastly we apply any default headers we need that may not exist
                if (!headers.has("Accept")) {
                    headers.append("Accept", "application/json");
                }
                if (!headers.has("Content-Type")) {
                    headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                if (!headers.has("X-ClientService-ClientTag")) {
                    headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.1.0:batch");
                }
                // write headers into batch body
                headers.forEach((value, name) => {
                    batchBody.push(`${name}: ${value}\n`);
                });
                batchBody.push("\n");
                if (reqInfo.options.body) {
                    batchBody.push(`${reqInfo.options.body}\n\n`);
                }
            }
            if (currentChangeSetId.length > 0) {
                // Close the changeset
                batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                currentChangeSetId = "";
            }
            batchBody.push(`--batch_${this.batchId}--\n`);
            const batchOptions = {
                "body": batchBody.join(""),
                "headers": {
                    "Content-Type": `multipart/mixed; boundary=batch_${this.batchId}`,
                },
                "method": "POST",
            };
            Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Sending batch request.`, 1 /* Info */);
            const fetchResponse = yield client.fetch(combine(absoluteRequestUrl, "/_api/$batch"), batchOptions);
            if (!fetchResponse.ok) {
                // the entire batch resulted in an error and we need to handle that better #1356
                // things consistently with the rest of the http errors
                throw (yield HttpRequestError.init(fetchResponse));
            }
            const text = yield fetchResponse.clone().text();
            const responses = SPBatch.ParseResponse(text);
            if (responses.length !== this.requests.length) {
                throw Error("Could not properly parse responses to match requests in batch.");
            }
            Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Resolving batched requests.`, 1 /* Info */);
            // this structure ensures that we resolve the batched requests in the order we expect
            // using async this is not guaranteed depending on the requests
            return responses.reduce((p, response, index) => p.then(() => tslib_es6_awaiter(this, void 0, void 0, function* () {
                const request = this.requests[index];
                Logger.write(`[${request.id}] (${(new Date()).getTime()}) Resolving request in batch ${this.batchId}.`, 1 /* Info */);
                try {
                    request.resolve(yield request.parser.parse(response));
                }
                catch (e) {
                    request.reject(e);
                }
            })), Promise.resolve(void (0)));
        });
    }
}
//# sourceMappingURL=batch.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/escapeQueryStrValue.js


function escapeQueryStrValue(value) {
    if (stringIsNullOrEmpty(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            Logger.write(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${v}`, 0 /* Verbose */);
            return `!${labelName}::${encodeURIComponent(v.replace(/'/ig, "''"))}`;
        });
    }
    else {
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}
//# sourceMappingURL=escapeQueryStrValue.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/types.js














let _Site = class _Site extends _SharePointQueryableInstance {
    /**
     * Gets the root web of the site collection
     *
     */
    get rootWeb() {
        return tag.configure(Web(this, "rootweb"), "si.rootWeb");
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        const postBody = body({ "query": util_assign(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
    }
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    openWebById(webId) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(Site, `openWebById('${webId}')`));
            return {
                data,
                web: Web(extractWebUrl(odataUrlFrom(data))),
            };
        });
    }
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    getRootWeb() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const web = yield this.rootWeb.select("Url")();
            return tag.configure(Web(web.Url), "si.getRootWeb");
        });
    }
    /**
     * Gets the context information for this site collection
     */
    getContextInfo() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = tag.configure(Site(this.parentUrl, "_api/contextinfo"), "si.getContextInfo");
            const data = yield spPost(q);
            if (hOP(data, "GetContextWebInformation")) {
                const info = data.GetContextWebInformation;
                info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                return info;
            }
            else {
                return data;
            }
        });
    }
    createBatch() {
        return new SPBatch(this.parentUrl, this.getRuntime());
    }
    /**
     * Deletes the current site
     *
     */
    delete() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const site = yield this.clone(Site, "").select("Id")();
            const q = tag.configure(Site(this.parentUrl, "_api/SPSiteManager/Delete"), "si.delete");
            yield spPost(q, body({ siteId: site.Id }));
        });
    }
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    getDocumentLibraries(absoluteWebUrl) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = tag.configure(SharePointQueryable("", "_api/sp.web.getdocumentlibraries(@v)"), "si.getDocumentLibraries");
            q.query.set("@v", `'${escapeQueryStrValue(absoluteWebUrl)}'`);
            const data = yield q();
            return hOP(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data;
        });
    }
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    getWebUrlFromPageUrl(absolutePageUrl) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = tag.configure(SharePointQueryable("", "_api/sp.web.getweburlfrompageurl(@v)"), "si.getWebUrlFromPageUrl");
            q.query.set("@v", `'${escapeQueryStrValue(absolutePageUrl)}'`);
            const data = yield q();
            return hOP(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data;
        });
    }
    /**
     * Creates a Modern communication site.
     *
     * @param title The title of the site to create
     * @param lcid The language to use for the site. If not specified will default to 1033 (English).
     * @param shareByEmailEnabled If set to true, it will enable sharing files via Email. By default it is set to false
     * @param url The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site.
     * @param description The description of the communication site.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param siteDesignId The Guid of the site design to be used.
     *                     You can use the below default OOTB GUIDs:
     *                     Topic: 00000000-0000-0000-0000-000000000000
     *                     Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
     *                     Blank: f6cc5403-0d63-442e-96c0-285923709ffc
     * @param hubSiteId The id of the hub site to which the new site should be associated
     * @param owner Optional owner value, required if executing the method in app only mode
     */
    createCommunicationSite(title, lcid = 1033, shareByEmailEnabled = false, url, description, classification, siteDesignId, hubSiteId, owner) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return this.createCommunicationSiteFromProps({
                Classification: classification,
                Description: description,
                HubSiteId: hubSiteId,
                Lcid: lcid,
                Owner: owner,
                ShareByEmailEnabled: shareByEmailEnabled,
                SiteDesignId: siteDesignId,
                Title: title,
                Url: url,
            });
        });
    }
    createCommunicationSiteFromProps(props) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // handle defaults
            const p = Object.assign({}, {
                Classification: "",
                Description: "",
                HubSiteId: emptyGuid,
                Lcid: 1033,
                ShareByEmailEnabled: false,
                SiteDesignId: emptyGuid,
                WebTemplate: "SITEPAGEPUBLISHING#0",
                WebTemplateExtensionId: emptyGuid,
            }, props);
            const postBody = body({
                "request": util_assign(metadata("Microsoft.SharePoint.Portal.SPSiteCreationRequest"), p),
            });
            return spPost(Site(extractWebUrl(this.toUrl()), "/_api/SPSiteManager/Create"), postBody);
        });
    }
    /**
     *
     * @param url Site Url that you want to check if exists
     */
    exists(url) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body({ url });
            const value = yield spPost(Site(extractWebUrl(this.toUrl()), "/_api/SP.Site.Exists"), postBody);
            return value;
        });
    }
    /**
     * Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens
     *
     * @param displayName The title or display name of the Modern team site to be created
     * @param alias Alias of the underlying Office 365 Group
     * @param isPublic Defines whether the Office 365 Group will be public (default), or private.
     * @param lcid The language to use for the site. If not specified will default to English (1033).
     * @param description The description of the site to be created.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param owners The Owners of the site to be created
     */
    createModernTeamSite(displayName, alias, isPublic, lcid, description, classification, owners, hubSiteId, siteDesignId) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return this.createModernTeamSiteFromProps({
                alias,
                classification,
                description,
                displayName,
                hubSiteId,
                isPublic,
                lcid,
                owners,
                siteDesignId,
            });
        });
    }
    createModernTeamSiteFromProps(props) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // handle defaults
            const p = Object.assign({}, {
                classification: "",
                description: "",
                hubSiteId: emptyGuid,
                isPublic: true,
                lcid: 1033,
                owners: [],
            }, props);
            const postBody = {
                alias: p.alias,
                displayName: p.displayName,
                isPublic: p.isPublic,
                optionalParams: {
                    Classification: p.classification,
                    CreationOptions: {
                        "results": [`SPSiteLanguage:${p.lcid}`, `HubSiteId:${p.hubSiteId}`],
                    },
                    Description: p.description,
                    Owners: {
                        "results": p.owners,
                    },
                },
            };
            if (p.siteDesignId) {
                postBody.optionalParams.CreationOptions.results.push(`implicit_formula_292aa8a00786498a87a5ca52d9f4214a_${p.siteDesignId}`);
            }
            return spPost(Site(extractWebUrl(this.toUrl()), "/_api/GroupSiteManager/CreateGroupEx"), body(postBody));
        });
    }
};
__decorate([
    tag("si.getChanges")
], _Site.prototype, "getChanges", null);
__decorate([
    tag("si.openWebById")
], _Site.prototype, "openWebById", null);
_Site = __decorate([
    defaultPath("_api/site")
], _Site);

const Site = spInvokableFactory(_Site);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/index.js



Reflect.defineProperty(SPRest.prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Site(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webs/types.js












let _Webs = class _Webs extends _SharePointQueryableCollection {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    add(title, url, description = "", template = "STS", language = 1033, inheritPermissions = true) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body({
                "parameters": util_assign(metadata("SP.WebCreationInformation"), {
                    Description: description,
                    Language: language,
                    Title: title,
                    Url: url,
                    UseSamePermissionsAsParentSite: inheritPermissions,
                    WebTemplate: template,
                }),
            });
            const data = yield spPost(this.clone(Webs, "add"), postBody);
            return {
                data,
                web: Web(odataUrlFrom(data).replace(/_api\/web\/?/i, "")),
            };
        });
    }
};
__decorate([
    tag("ws.add")
], _Webs.prototype, "add", null);
_Webs = __decorate([
    defaultPath("webs")
], _Webs);

const Webs = spInvokableFactory(_Webs);
/**
 * Describes a web
 *
 */
let _Web = class _Web extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("w");
    }
    /**
     * Gets this web's subwebs
     *
     */
    get webs() {
        return Webs(this);
    }
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties() {
        return tag.configure(this.clone(SharePointQueryableInstance, "allproperties"), "w.allprops");
    }
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos() {
        return tag.configure(SharePointQueryableCollection(this, "webinfos"), "w.webinfos");
    }
    /**
     * Gets this web's parent web and data
     *
     */
    getParentWeb() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const { ParentWeb } = yield spGet(this.select("ParentWeb/Id").expand("ParentWeb"));
            return (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.Id) ? Site(this.parentUrl).openWebById(ParentWeb.Id) : null;
        });
    }
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    update(properties) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(util_assign(metadata("SP.Web"), properties), headers({ "X-HTTP-Method": "MERGE" }));
            const data = yield spPost(this, postBody);
            return { data, web: this };
        });
    }
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        const postBody = body({
            backgroundImageUrl,
            colorPaletteUrl,
            fontSchemeUrl,
            shareGenerated,
        });
        return spPost(this.clone(Web, "applytheme"), postBody);
    }
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template) {
        const q = this.clone(Web, "applywebtemplate");
        q.concat(`(webTemplate='${escapeQueryStrValue(template)}')`);
        return spPost(q);
    }
    /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
         *
         * @param query The change query
         */
    getChanges(query) {
        const postBody = body({ "query": util_assign(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
    }
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename, size = 0, progId = "") {
        return spGet(this.clone(Web, `maptoicon(filename='${escapeQueryStrValue(filename)}', progid='${escapeQueryStrValue(progId)}', size=${size})`));
    }
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key) {
        return spGet(this.clone(Web, `getStorageEntity('${escapeQueryStrValue(key)}')`));
    }
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key, value, description = "", comments = "") {
        return spPost(this.clone(Web, "setStorageEntity"), body({
            comments,
            description,
            key,
            value,
        }));
    }
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key) {
        return spPost(this.clone(Web, `removeStorageEntity('${escapeQueryStrValue(key)}')`));
    }
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter = -1, nConfigurationFilter = -1) {
        const o = this.clone(SharePointQueryableCollection, `getSubwebsFilteredForCurrentUser(nWebTemplateFilter=${nWebTemplateFilter},nConfigurationFilter=${nConfigurationFilter})`);
        return tag.configure(o, "w.getSubwebsFilteredForCurrentUser");
    }
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    createBatch() {
        return new SPBatch(this.parentUrl, this.getRuntime());
    }
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language = 1033, includeCrossLanugage = true) {
        const path = `getavailablewebtemplates(lcid=${language}, doincludecrosslanguage=${includeCrossLanugage})`;
        return tag.configure(SharePointQueryableCollection(this, path), "w.availableWebTemplates");
    }
};
__decorate([
    tag("w.getParentWeb")
], _Web.prototype, "getParentWeb", null);
__decorate([
    tag("w.update")
], _Web.prototype, "update", null);
__decorate([
    tag("w.applyTheme")
], _Web.prototype, "applyTheme", null);
__decorate([
    tag("w.applyWebTemplate")
], _Web.prototype, "applyWebTemplate", null);
__decorate([
    tag("w.getChanges")
], _Web.prototype, "getChanges", null);
__decorate([
    tag("w.mapToIcon")
], _Web.prototype, "mapToIcon", null);
__decorate([
    tag("w.getStorageEntity")
], _Web.prototype, "getStorageEntity", null);
__decorate([
    tag("w.setStorageEntity")
], _Web.prototype, "setStorageEntity", null);
__decorate([
    tag("w.removeStorageEntity")
], _Web.prototype, "removeStorageEntity", null);
_Web = __decorate([
    defaultPath("_api/web")
], _Web);

const Web = spInvokableFactory(_Web);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/toResourcePath.js
function toResourcePath(url) {
    return {
        DecodedUrl: url,
        __metadata: { type: "SP.ResourcePath" },
    };
}
//# sourceMappingURL=toResourcePath.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/types.js











let _Lists = class _Lists extends _SharePointQueryableCollection {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id) {
        return tag.configure(List(this).concat(`('${id}')`), "ls.getById");
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title) {
        return tag.configure(List(this, `getByTitle('${escapeQueryStrValue(title)}')`), "ls.getByTitle");
    }
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    add(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const addSettings = Object.assign({
                "AllowContentTypes": enableContentTypes,
                "BaseTemplate": template,
                "ContentTypesEnabled": enableContentTypes,
                "Description": desc,
                "Title": title,
            }, metadata("SP.List"), additionalSettings);
            const data = yield spPost(this, body(addSettings));
            return { data, list: this.getByTitle(addSettings.Title) };
        });
    }
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    ensure(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (this.hasBatch) {
                throw Error("The ensure list method is not supported for use in a batch.");
            }
            const addOrUpdateSettings = util_assign(additionalSettings, { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes }, true);
            const list = this.getByTitle(addOrUpdateSettings.Title);
            try {
                // this will throw if the list doesn't exist
                yield list.select("Title")();
                const data = yield list.update(addOrUpdateSettings).then(r => r.data);
                return { created: false, data, list: this.getByTitle(addOrUpdateSettings.Title) };
            }
            catch (e) {
                const data = yield this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(r => r.data);
                return { created: true, data, list: this.getByTitle(addOrUpdateSettings.Title) };
            }
        });
    }
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const json = yield spPost(this.clone(Lists, "ensuresiteassetslibrary"));
            return List(odataUrlFrom(json));
        });
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const json = yield spPost(this.clone(Lists, "ensuresitepageslibrary"));
            return List(odataUrlFrom(json));
        });
    }
};
__decorate([
    tag("ls.add")
], _Lists.prototype, "add", null);
__decorate([
    tag("ls.ensure")
], _Lists.prototype, "ensure", null);
__decorate([
    tag("ls.ensureSiteAssetsLibrary")
], _Lists.prototype, "ensureSiteAssetsLibrary", null);
__decorate([
    tag("ls.ensureSitePagesLibrary")
], _Lists.prototype, "ensureSitePagesLibrary", null);
_Lists = __decorate([
    defaultPath("lists")
], _Lists);

const Lists = spInvokableFactory(_Lists);
class _List extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteableWithETag("l");
    }
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions() {
        return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "l.effectiveBasePermissions");
    }
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers() {
        return tag.configure(SharePointQueryableCollection(this, "EventReceivers"), "l.eventReceivers");
    }
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields() {
        return tag.configure(SharePointQueryable(this, "getRelatedFields"), "l.relatedFields");
    }
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings() {
        return tag.configure(SharePointQueryable(this, "InformationRightsManagementSettings"), "l.informationRightsManagementSettings");
    }
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    update(properties, eTag = "*") {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(util_assign(metadata("SP.List"), properties), headers({
                "IF-Match": eTag,
                "X-HTTP-Method": "MERGE",
            }));
            const data = yield spPost(this, postBody);
            const list = hOP(properties, "Title") ? this.getParent(List, this.parentUrl, `getByTitle('${properties.Title}')`) : List(this);
            return {
                data,
                list,
            };
        });
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query) {
        return spPost(this.clone(List, "getchanges"), body({ query: util_assign(metadata("SP.ChangeQuery"), query) }));
    }
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query, ...expands) {
        const q = this.clone(List, "getitems");
        return spPost(q.expand(...expands), body({ query: util_assign(metadata("SP.CamlQuery"), query) }));
    }
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query) {
        const o = this.clone(List, "getlistitemchangessincetoken").usingParser({
            parse(r) {
                return r.text();
            },
        });
        return spPost(o, body({ "query": util_assign(metadata("SP.ChangeLogItemQuery"), query) }));
    }
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(List, "recycle"));
            return hOP(data, "Recycle") ? data.Recycle : data;
        });
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    renderListData(viewXml) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = this.clone(List, "renderlistdata(@viewXml)");
            q.query.set("@viewXml", `'${viewXml}'`);
            const data = yield spPost(q);
            // data will be a string, so we parse it again
            return JSON.parse(hOP(data, "RenderListData") ? data.RenderListData : data);
        });
    }
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    renderListDataAsStream(parameters, overrideParams = null, query = new Map()) {
        if (hOP(parameters, "RenderOptions") && isArray(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce((v, c) => v + c);
        }
        let bodyOptions = { parameters: util_assign(metadata("SP.RenderListDataParameters"), parameters) };
        if (objectDefinedNotNull(overrideParams)) {
            bodyOptions = util_assign(bodyOptions, { overrideParameters: util_assign(metadata("SP.RenderListDataOverrideParameters"), overrideParams) });
        }
        const clone = this.clone(List, "RenderListDataAsStream", true, true);
        if (query && query.size > 0) {
            query.forEach((v, k) => clone.query.set(k, v));
        }
        return spPost(clone, body(bodyOptions));
    }
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    renderListFormData(itemId, formId, mode) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(List, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
            // data will be a string, so we parse it again
            return JSON.parse(hOP(data, "RenderListFormData") ? data.RenderListFormData : data);
        });
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    reserveListItemId() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(List, "reservelistitemid"));
            return hOP(data, "ReserveListItemId") ? data.ReserveListItemId : data;
        });
    }
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    getListItemEntityTypeFullName() {
        // we cache these requests as the entity name doesn't change and we can save traffic
        // this is justified as this method generates our second highest number of monthly executions ahead of item add and update
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").usingCaching({
            expiration: dateAdd(new Date(), "day", 5),
            key: `PnPjs-ListEntityName:${this.toUrl()}`,
            storeName: "local",
        })().then(o => o.ListItemEntityTypeFullName);
    }
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    addValidateUpdateItemUsingPath(formValues, decodedUrl, bNewDocumentUpdate = false, checkInComment, additionalProps) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const addProps = {
                FolderPath: toResourcePath(decodedUrl),
            };
            if (objectDefinedNotNull(additionalProps)) {
                if (additionalProps.leafName) {
                    addProps.LeafName = toResourcePath(additionalProps.leafName);
                }
                if (additionalProps.objectType) {
                    addProps.UnderlyingObjectType = additionalProps.objectType;
                }
            }
            const res = yield spPost(this.clone(List, "AddValidateUpdateItemUsingPath()"), body({
                bNewDocumentUpdate,
                checkInComment,
                formValues,
                listItemCreateInfo: util_assign(metadata("SP.ListItemCreationInformationUsingPath"), addProps),
            }));
            return hOP(res, "AddValidateUpdateItemUsingPath") ? res.AddValidateUpdateItemUsingPath : res;
        });
    }
    /**
     * Gets the parent information for this item's list and web
     */
    getParentInfos() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const urlInfo = yield this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")();
            return {
                List: {
                    Id: urlInfo.Id,
                    RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                    RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                    RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
                },
                ParentWeb: {
                    Id: urlInfo.ParentWeb.Id,
                    ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                    ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                    Url: urlInfo.ParentWeb.Url,
                },
            };
        });
    }
}
__decorate([
    tag("l.update")
], _List.prototype, "update", null);
__decorate([
    tag("l.getChanges")
], _List.prototype, "getChanges", null);
__decorate([
    tag("l.CAMLQuery")
], _List.prototype, "getItemsByCAMLQuery", null);
__decorate([
    tag("l.ChangesSinceToken")
], _List.prototype, "getListItemChangesSinceToken", null);
__decorate([
    tag("l.recycle")
], _List.prototype, "recycle", null);
__decorate([
    tag("l.renderListData")
], _List.prototype, "renderListData", null);
__decorate([
    tag("l.AsStream")
], _List.prototype, "renderListDataAsStream", null);
__decorate([
    tag("l.renderListFormData")
], _List.prototype, "renderListFormData", null);
__decorate([
    tag("l.reserveListItemId")
], _List.prototype, "reserveListItemId", null);
__decorate([
    tag("l.getListItemEntityTypeFullName")
], _List.prototype, "getListItemEntityTypeFullName", null);
__decorate([
    tag("l.addValidateUpdateItemUsingPath")
], _List.prototype, "addValidateUpdateItemUsingPath", null);
const List = spInvokableFactory(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/types.js










/**
 * Describes a collection of Item objects
 *
 */
let _Items = class _Items extends _SharePointQueryableCollection {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id) {
        return tag.configure(Item(this).concat(`(${id})`), "is.getById");
    }
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId) {
        // creates an item with the parent list path and append out method call
        return tag.configure(Item(this.parentUrl, `getItemByStringId('${stringId}')`), "is.getItemByStringId");
    }
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    skip(skip, reverse = false) {
        if (reverse) {
            this.query.set("$skiptoken", encodeURIComponent(`Paged=TRUE&PagedPrev=TRUE&p_ID=${skip}`));
        }
        else {
            this.query.set("$skiptoken", encodeURIComponent(`Paged=TRUE&p_ID=${skip}`));
        }
        return this;
    }
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    getPaged() {
        return this.usingParser(new PagedItemCollectionParser(this))();
    }
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    getAll(requestSize = 2000, acceptHeader = "application/json;odata=nometadata") {
        Logger.write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", 2 /* Warning */);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        const items = Items(this, "").top(requestSize).configure({
            headers: {
                "Accept": acceptHeader,
            },
        });
        // let's copy over the odata query params that can be applied
        // $top - allow setting the page size this way (override what we did above)
        // $select - allow picking the return fields (good behavior)
        // $filter - allow setting a filter, though this may fail due for large lists
        this.query.forEach((v, k) => {
            if (/^\$select|filter|top|expand$/i.test(k)) {
                items.query.set(k, v);
            }
        });
        // give back the promise
        return new Promise((resolve, reject) => {
            // this will eventually hold the items we return
            const itemsCollector = [];
            // action that will gather up our results recursively
            const gatherer = (last) => {
                // collect that set of results
                [].push.apply(itemsCollector, last.results);
                // if we have more, repeat - otherwise resolve with the collected items
                if (last.hasNext) {
                    last.getNext().then(gatherer).catch(reject);
                }
                else {
                    resolve(itemsCollector);
                }
            };
            // start the cycle
            items.getPaged().then(gatherer).catch(reject);
        });
    }
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    add(properties = {}, listItemEntityTypeFullName = null) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const removeDependency = this.addBatchDependency();
            const listItemEntityType = yield this.ensureListItemEntityTypeName(listItemEntityTypeFullName);
            const postBody = body(util_assign(metadata(listItemEntityType), properties));
            const promise = spPost(this.clone(Items, ""), postBody).then((data) => {
                return {
                    data: data,
                    item: this.getById(data.Id),
                };
            });
            removeDependency();
            return promise;
        });
    }
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    ensureListItemEntityTypeName(candidatelistItemEntityTypeFullName) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return candidatelistItemEntityTypeFullName ?
                candidatelistItemEntityTypeFullName :
                this.getParent(List).getListItemEntityTypeFullName();
        });
    }
};
__decorate([
    tag("is.getPaged")
], _Items.prototype, "getPaged", null);
__decorate([
    tag("is.getAll")
], _Items.prototype, "getAll", null);
__decorate([
    tag("is.add")
], _Items.prototype, "add", null);
_Items = __decorate([
    defaultPath("items")
], _Items);

const Items = spInvokableFactory(_Items);
/**
 * Descrines a single Item instance
 *
 */
class _Item extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteableWithETag("i");
    }
    /**
     * Gets the effective base permissions for the item
     *
     */
    get effectiveBasePermissions() {
        return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "i.effectiveBasePermissions");
    }
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    get effectiveBasePermissionsForUI() {
        return tag.configure(SharePointQueryable(this, "EffectiveBasePermissionsForUI"), "i.effectiveBasePermissionsForUI");
    }
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    get fieldValuesAsHTML() {
        return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsHTML"), "i.fvHTML");
    }
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    get fieldValuesAsText() {
        return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsText"), "i.fvText");
    }
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    get fieldValuesForEdit() {
        return tag.configure(SharePointQueryableInstance(this, "FieldValuesForEdit"), "i.fvEdit");
    }
    /**
     * Gets the collection of versions associated with this item
     */
    get versions() {
        return tag.configure(ItemVersions(this), "i.versions");
    }
    get list() {
        return this.getParent(List, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
    }
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    update(properties, eTag = "*", listItemEntityTypeFullName = null) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const removeDependency = this.addBatchDependency();
            const listItemEntityType = yield this.ensureListItemEntityTypeName(listItemEntityTypeFullName);
            const postBody = body(util_assign(metadata(listItemEntityType), properties), headers({
                "IF-Match": eTag,
                "X-HTTP-Method": "MERGE",
            }));
            removeDependency();
            const poster = tag.configure(this.clone(Item).usingParser(new ItemUpdatedParser()), "i.update");
            const data = yield spPost(poster, postBody);
            return {
                data,
                item: this,
            };
        });
    }
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return spPost(this.clone(Item, "recycle"));
    }
    /**
     * Deletes the item object with options.
     *
     * @param parameters Specifies the options to use when deleting a item.
     */
    deleteWithParams(parameters) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return spPost(this.clone(Item, "DeleteWithParameters"), body({ parameters }));
        });
    }
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    getWopiFrameUrl(action = 0) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const i = this.clone(Item, "getWOPIFrameUrl(@action)");
            i.query.set("@action", action);
            const data = yield spPost(i);
            // handle verbose mode
            if (hOP(data, "GetWOPIFrameUrl")) {
                return data.GetWOPIFrameUrl;
            }
            return data;
        });
    }
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues, bNewDocumentUpdate = false) {
        return spPost(this.clone(Item, "validateupdatelistitem"), body({ formValues, bNewDocumentUpdate }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    getParentInfos() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const urlInfo = yield this.select("Id", "ParentList/Id", "ParentList/RootFolder/UniqueId", "ParentList/RootFolder/ServerRelativeUrl", "ParentList/RootFolder/ServerRelativePath", "ParentList/ParentWeb/Id", "ParentList/ParentWeb/Url", "ParentList/ParentWeb/ServerRelativeUrl", "ParentList/ParentWeb/ServerRelativePath").expand("ParentList", "ParentList/RootFolder", "ParentList/ParentWeb")();
            return {
                Item: {
                    Id: urlInfo.Id,
                },
                ParentList: {
                    Id: urlInfo.ParentList.Id,
                    RootFolderServerRelativePath: urlInfo.ParentList.RootFolder.ServerRelativePath,
                    RootFolderServerRelativeUrl: urlInfo.ParentList.RootFolder.ServerRelativeUrl,
                    RootFolderUniqueId: urlInfo.ParentList.RootFolder.UniqueId,
                },
                ParentWeb: {
                    Id: urlInfo.ParentList.ParentWeb.Id,
                    ServerRelativePath: urlInfo.ParentList.ParentWeb.ServerRelativePath,
                    ServerRelativeUrl: urlInfo.ParentList.ParentWeb.ServerRelativeUrl,
                    Url: urlInfo.ParentList.ParentWeb.Url,
                },
            };
        });
    }
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    ensureListItemEntityTypeName(candidatelistItemEntityTypeFullName) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return candidatelistItemEntityTypeFullName ?
                candidatelistItemEntityTypeFullName :
                this.list.getListItemEntityTypeFullName();
        });
    }
}
__decorate([
    tag("i.recycle")
], _Item.prototype, "recycle", null);
__decorate([
    tag("i.del-params")
], _Item.prototype, "deleteWithParams", null);
__decorate([
    tag("i.getWopiFrameUrl")
], _Item.prototype, "getWopiFrameUrl", null);
__decorate([
    tag("i.validateUpdateListItem")
], _Item.prototype, "validateUpdateListItem", null);
const Item = spInvokableFactory(_Item);
/**
 * Describes a collection of Version objects
 *
 */
let _ItemVersions = class _ItemVersions extends _SharePointQueryableCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return tag.configure(ItemVersion(this).concat(`(${versionId})`), "iv.getById");
    }
};
_ItemVersions = __decorate([
    defaultPath("versions")
], _ItemVersions);

const ItemVersions = spInvokableFactory(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
class _ItemVersion extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteableWithETag("iv");
    }
}
const ItemVersion = spInvokableFactory(_ItemVersion);
/**
 * Provides paging functionality for list items
 */
class PagedItemCollection {
    constructor(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    /**
     * If true there are more results available in the set, otherwise there are not
     */
    get hasNext() {
        return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
    }
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    getNext() {
        if (this.hasNext) {
            const items = tag.configure(Items(this.nextUrl, null).configureFrom(this.parent), "ip.getNext");
            return items.getPaged();
        }
        return new Promise(r => r(null));
    }
}
class PagedItemCollectionParser extends ODataParser {
    constructor(_parent) {
        super();
        this._parent = _parent;
    }
    parse(r) {
        return new Promise((resolve, reject) => {
            if (this.handleError(r, reject)) {
                r.json().then(json => {
                    const nextUrl = hOP(json, "d") && hOP(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new PagedItemCollection(this._parent, nextUrl, this.parseODataJSON(json)));
                });
            }
        });
    }
}
class ItemUpdatedParser extends ODataParser {
    parse(r) {
        return new Promise((resolve, reject) => {
            if (this.handleError(r, reject)) {
                resolve({
                    "odata.etag": r.headers.get("etag"),
                });
            }
        });
    }
}
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/list.js



addProp(_List, "items", Items);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/types.js












/**
 * Describes a collection of File objects
 *
 */
let _Files = class _Files extends _SharePointQueryableCollection {
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    getByName(name) {
        if (/%#/.test(name)) {
            throw Error("For file names containing % or # please use web.getFileByServerRelativePath");
        }
        return tag.configure(File(this).concat(`('${escapeQueryStrValue(name)}')`), "fis.getByName");
    }
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The file contents
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @returns The new File and the raw response.
     */
    add(url, content, shouldOverWrite = true) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const response = yield spPost(Files(this, `add(overwrite=${shouldOverWrite},url='${escapeQueryStrValue(url)}')`), {
                body: content,
            });
            return {
                data: response,
                file: this.getByName(url),
            };
        });
    }
    /**
     * Adds a file using the pound percent safe methods
     *
     * @param url Excoded url of the file
     * @param content The file content
     * @param parameters Additional parameters to control method behavior
     */
    addUsingPath(url, content, parameters = { Overwrite: false }) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const path = [`AddUsingPath(decodedurl='${escapeQueryStrValue(url)}'`];
            if (parameters) {
                if (parameters.Overwrite) {
                    path.push(",Overwrite=true");
                }
                if (parameters.AutoCheckoutOnInvalidData) {
                    path.push(",AutoCheckoutOnInvalidData=true");
                }
                if (!stringIsNullOrEmpty(parameters.XorHash)) {
                    path.push(`,XorHash=${escapeQueryStrValue(parameters.XorHash)}`);
                }
            }
            path.push(")");
            const resp = yield spPost(Files(this, path.join("")), { body: content });
            return {
                data: resp,
                file: File(odataUrlFrom(resp)),
            };
        });
    }
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The Blob file content to add
     * @param progress A callback function which can be used to track the progress of the upload
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     * @returns The new File and the raw response.
     */
    addChunked(url, content, progress, shouldOverWrite = true, chunkSize = 10485760) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const response = yield spPost(this.clone(Files, `add(overwrite=${shouldOverWrite},url='${escapeQueryStrValue(url)}')`, false));
            const file = File(odataUrlFrom(response));
            return yield file.setContentChunked(content, progress, chunkSize);
        });
    }
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    addTemplateFile(fileUrl, templateFileType) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const response = yield spPost(this.clone(Files, `addTemplateFile(urloffile='${escapeQueryStrValue(fileUrl)}',templatefiletype=${templateFileType})`, false));
            return {
                data: response,
                file: File(odataUrlFrom(response)),
            };
        });
    }
};
__decorate([
    tag("fis.add")
], _Files.prototype, "add", null);
__decorate([
    tag("fis.addUsingPath")
], _Files.prototype, "addUsingPath", null);
__decorate([
    tag("fis.addChunked")
], _Files.prototype, "addChunked", null);
__decorate([
    tag("fis.addTemplateFile")
], _Files.prototype, "addTemplateFile", null);
_Files = __decorate([
    defaultPath("files")
], _Files);

const Files = spInvokableFactory(_Files);
/**
 * Describes a single File instance
 *
 */
class _File extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteableWithETag("fi");
    }
    /**
     * Gets a value that specifies the list item field values for the list item corresponding to the file.
     *
     */
    get listItemAllFields() {
        return tag.configure(SharePointQueryableInstance(this, "listItemAllFields"), "fi.listItemAllFields");
    }
    /**
     * Gets a collection of versions
     *
     */
    get versions() {
        return tag.configure(Versions(this), "fi.versions");
    }
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    approve(comment = "") {
        return spPost(this.clone(File, `approve(comment='${escapeQueryStrValue(comment)}')`));
    }
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    cancelUpload(uploadId) {
        return spPost(this.clone(File, `cancelUpload(uploadId=guid'${uploadId}')`, false));
    }
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    checkin(comment = "", checkinType = CheckinType.Major) {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, `checkin(comment='${escapeQueryStrValue(comment)}',checkintype=${checkinType})`));
    }
    /**
     * Checks out the file from a document library.
     */
    checkout() {
        return spPost(this.clone(File, "checkout"));
    }
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    copyTo(url, shouldOverWrite = true) {
        return spPost(this.clone(File, `copyTo(strnewurl='${escapeQueryStrValue(url)}',boverwrite=${shouldOverWrite})`));
    }
    /**
     * Copies the file by path to destination path.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    copyByPath(destUrl, shouldOverWrite, KeepBoth = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const { ServerRelativeUrl: srcUrl, ["odata.id"]: absoluteUrl } = yield this.select("ServerRelativeUrl")();
            const webBaseUrl = extractWebUrl(absoluteUrl);
            const hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
            yield spPost(File(webBaseUrl, `/_api/SP.MoveCopyUtil.CopyFileByPath(overwrite=@a1)?@a1=${shouldOverWrite}`), body({
                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : `${hostUrl}${destUrl}`),
                options: {
                    KeepBoth: KeepBoth,
                    ResetAuthorAndCreatedOnCopy: true,
                    ShouldBypassSharedLocks: true,
                    __metadata: {
                        type: "SP.MoveCopyOptions",
                    },
                },
                srcPath: toResourcePath(isUrlAbsolute(srcUrl) ? srcUrl : `${hostUrl}${srcUrl}`),
            }));
        });
    }
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    deny(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, `deny(comment='${escapeQueryStrValue(comment)}')`));
    }
    /**
     * Moves the file to the specified destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to move to.
     * @param moveOperations The bitwise MoveOperations value for how to move the file.
     */
    moveTo(url, moveOperations = MoveOperations.Overwrite) {
        return spPost(this.clone(File, `moveTo(newurl='${escapeQueryStrValue(url)}',flags=${moveOperations})`));
    }
    /**
     * Moves the file by path to the specified destination url.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to move to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    moveByPath(destUrl, shouldOverWrite, KeepBoth = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const { ServerRelativeUrl: srcUrl, ["odata.id"]: absoluteUrl } = yield this.select("ServerRelativeUrl")();
            const webBaseUrl = extractWebUrl(absoluteUrl);
            const hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
            yield spPost(File(webBaseUrl, `/_api/SP.MoveCopyUtil.MoveFileByPath(overwrite=@a1)?@a1=${shouldOverWrite}`), body({
                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : `${hostUrl}${destUrl}`),
                options: {
                    KeepBoth: KeepBoth,
                    ResetAuthorAndCreatedOnCopy: false,
                    ShouldBypassSharedLocks: true,
                    __metadata: {
                        type: "SP.MoveCopyOptions",
                    },
                },
                srcPath: toResourcePath(isUrlAbsolute(srcUrl) ? srcUrl : `${hostUrl}${srcUrl}`),
            }));
        });
    }
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    publish(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, `publish(comment='${escapeQueryStrValue(comment)}')`));
    }
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    recycle() {
        return spPost(this.clone(File, "recycle"));
    }
    /**
     * Deletes the file object with options.
     *
     * @param parameters Specifies the options to use when deleting a file.
     */
    deleteWithParams(parameters) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return spPost(this.clone(File, "DeleteWithParameters"), body({ parameters }));
        });
    }
    /**
     * Reverts an existing checkout for the file.
     *
     */
    undoCheckout() {
        return spPost(this.clone(File, "undoCheckout"));
    }
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    unpublish(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, `unpublish(comment='${escapeQueryStrValue(comment)}')`));
    }
    /**
     * Checks to see if the file represented by this object exists
     *
     */
    exists() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            try {
                const r = yield this.clone(File).select("Exists")();
                return r.Exists;
            }
            catch (e) {
                // this treats any error here as the file not existing, which
                // might not be true, but is good enough.
                return false;
            }
        });
    }
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    getText() {
        return this.clone(File, "$value", false).usingParser(new TextParser())(headers({ "binaryStringResponseBody": "true" }));
    }
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    getBlob() {
        return this.clone(File, "$value", false).usingParser(new BlobParser())(headers({ "binaryStringResponseBody": "true" }));
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    getBuffer() {
        return this.clone(File, "$value", false).usingParser(new BufferParser())(headers({ "binaryStringResponseBody": "true" }));
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    getJSON() {
        return this.clone(File, "$value", false).usingParser(new JSONParser())(headers({ "binaryStringResponseBody": "true" }));
    }
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    setContent(content) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            yield spPost(this.clone(File, "$value", false), {
                body: content,
                headers: {
                    "X-HTTP-Method": "PUT",
                },
            });
            return File(this);
        });
    }
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    getItem(...selects) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = this.listItemAllFields;
            const d = yield q.select(...selects)();
            return util_assign(Item(odataUrlFrom(d)), d);
        });
    }
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    setContentChunked(file, progress, chunkSize = 10485760) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (!isFunc(progress)) {
                progress = () => null;
            }
            const fileSize = file.size;
            const totalBlocks = parseInt((fileSize / chunkSize).toString(), 10) + ((fileSize % chunkSize === 0) ? 1 : 0);
            const uploadId = util_getGUID();
            // report that we are starting
            progress({ uploadId, blockNumber: 1, chunkSize, currentPointer: 0, fileSize, stage: "starting", totalBlocks });
            let currentPointer = yield this.startUpload(uploadId, file.slice(0, chunkSize));
            // skip the first and last blocks
            for (let i = 2; i < totalBlocks; i++) {
                progress({ uploadId, blockNumber: i, chunkSize, currentPointer, fileSize, stage: "continue", totalBlocks });
                currentPointer = yield this.continueUpload(uploadId, currentPointer, file.slice(currentPointer, currentPointer + chunkSize));
            }
            progress({ uploadId, blockNumber: totalBlocks, chunkSize, currentPointer, fileSize, stage: "finishing", totalBlocks });
            return this.finishUpload(uploadId, currentPointer, file.slice(currentPointer));
        });
    }
    /**
     * Starts a new chunk upload session and uploads the first fragment.
     * The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully
     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    startUpload(uploadId, fragment) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            let n = yield spPost(this.clone(File, `startUpload(uploadId=guid'${uploadId}')`, false), { body: fragment });
            if (typeof n === "object") {
                // When OData=verbose the payload has the following shape:
                // { StartUpload: "10485760" }
                n = n.StartUpload;
            }
            return parseFloat(n);
        });
    }
    /**
     * Continues the chunk upload session with an additional fragment.
     * The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    continueUpload(uploadId, fileOffset, fragment) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            let n = yield spPost(this.clone(File, `continueUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})`, false), { body: fragment });
            if (typeof n === "object") {
                // When OData=verbose the payload has the following shape:
                // { ContinueUpload: "20971520" }
                n = n.ContinueUpload;
            }
            return parseFloat(n);
        });
    }
    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The newly uploaded file.
     */
    finishUpload(uploadId, fileOffset, fragment) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const response = yield spPost(this.clone(File, `finishUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})`, false), { body: fragment });
            return {
                data: response,
                file: File(odataUrlFrom(response)),
            };
        });
    }
}
__decorate([
    tag("fi.approve")
], _File.prototype, "approve", null);
__decorate([
    tag("fi.cancelUpload")
], _File.prototype, "cancelUpload", null);
__decorate([
    tag("fi.checkin")
], _File.prototype, "checkin", null);
__decorate([
    tag("fi.checkout")
], _File.prototype, "checkout", null);
__decorate([
    tag("fi.copyTo")
], _File.prototype, "copyTo", null);
__decorate([
    tag("fi.copyByPath")
], _File.prototype, "copyByPath", null);
__decorate([
    tag("fi.deny")
], _File.prototype, "deny", null);
__decorate([
    tag("fi.moveTo")
], _File.prototype, "moveTo", null);
__decorate([
    tag("fi.moveByPath")
], _File.prototype, "moveByPath", null);
__decorate([
    tag("fi.publish")
], _File.prototype, "publish", null);
__decorate([
    tag("fi.recycle")
], _File.prototype, "recycle", null);
__decorate([
    tag("fi.del-params")
], _File.prototype, "deleteWithParams", null);
__decorate([
    tag("fi.undoCheckout")
], _File.prototype, "undoCheckout", null);
__decorate([
    tag("fi.unpublish")
], _File.prototype, "unpublish", null);
__decorate([
    tag("fi.exists")
], _File.prototype, "exists", null);
__decorate([
    tag("fi.getText")
], _File.prototype, "getText", null);
__decorate([
    tag("fi.getBlob")
], _File.prototype, "getBlob", null);
__decorate([
    tag("fi.getBuffer")
], _File.prototype, "getBuffer", null);
__decorate([
    tag("fi.getJSON")
], _File.prototype, "getJSON", null);
__decorate([
    tag("fi.setContent")
], _File.prototype, "setContent", null);
__decorate([
    tag("fi.getItem")
], _File.prototype, "getItem", null);
__decorate([
    tag("fi.startUpload")
], _File.prototype, "startUpload", null);
__decorate([
    tag("fi.continueUpload")
], _File.prototype, "continueUpload", null);
__decorate([
    tag("fi.finishUpload")
], _File.prototype, "finishUpload", null);
const File = spInvokableFactory(_File);
/**
 * Describes a collection of Version objects
 *
 */
let _Versions = class _Versions extends _SharePointQueryableCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return tag.configure(Version(this).concat(`(${versionId})`), "vers.getById");
    }
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    deleteAll() {
        return spPost(Versions(this, "deleteAll"));
    }
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    deleteById(versionId) {
        return spPost(this.clone(Versions, `deleteById(vid=${versionId})`));
    }
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    recycleByID(versionId) {
        return spPost(this.clone(Versions, `recycleByID(vid=${versionId})`));
    }
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    deleteByLabel(label) {
        return spPost(this.clone(Versions, `deleteByLabel(versionlabel='${escapeQueryStrValue(label)}')`));
    }
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    recycleByLabel(label) {
        return spPost(this.clone(Versions, `recycleByLabel(versionlabel='${escapeQueryStrValue(label)}')`));
    }
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    restoreByLabel(label) {
        return spPost(this.clone(Versions, `restoreByLabel(versionlabel='${escapeQueryStrValue(label)}')`));
    }
};
__decorate([
    tag("vers.deleteAll")
], _Versions.prototype, "deleteAll", null);
__decorate([
    tag("vers.deleteById")
], _Versions.prototype, "deleteById", null);
__decorate([
    tag("vers.recycleByID")
], _Versions.prototype, "recycleByID", null);
__decorate([
    tag("vers.deleteByLabel")
], _Versions.prototype, "deleteByLabel", null);
__decorate([
    tag("vers.recycleByLabel")
], _Versions.prototype, "recycleByLabel", null);
__decorate([
    tag("vers.restoreByLabel")
], _Versions.prototype, "restoreByLabel", null);
_Versions = __decorate([
    defaultPath("versions")
], _Versions);

const Versions = spInvokableFactory(_Versions);
/**
 * Describes a single Version instance
 *
 */
class _Version extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteableWithETag("ver");
    }
}
const Version = spInvokableFactory(_Version);
/**
 * Types for document check in.
 * Minor = 0
 * Major = 1
 * Overwrite = 2
 */
var CheckinType;
(function (CheckinType) {
    CheckinType[CheckinType["Minor"] = 0] = "Minor";
    CheckinType[CheckinType["Major"] = 1] = "Major";
    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
})(CheckinType || (CheckinType = {}));
/**
 * File move opertions
 * Overwrite = 1
 * AllowBrokenThickets = 8
 */
var MoveOperations;
(function (MoveOperations) {
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
})(MoveOperations || (MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType || (TemplateFileType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webs/index.js



Reflect.defineProperty(SPRest.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Web(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
SPRest.prototype.createBatch = function () {
    return this.web.createBatch();
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/types.js









class _AppCatalog extends _SharePointQueryableCollection {
    constructor(baseUrl, path = "_api/web/tenantappcatalog/AvailableApps") {
        super(extractWebUrl(typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl()), path);
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    getAppById(id) {
        return tag.configure(App(this, `getById('${id}')`), "ac.getAppById");
    }
    /**
     * Synchronize a solution to the Microsoft Teams App Catalog
     * @param id - Specify the guid of the app
     * @param useSharePointItemId (optional) - By default this REST call requires the SP Item id of the app, not the app id.
     *                            PnPjs will try to fetch the item id by default, you can still use this parameter to pass your own item id in the first parameter
     */
    syncSolutionToTeams(id, useSharePointItemId = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // This REST call requires that you refer the list item id of the solution in the app catalog site.
            let appId = null;
            const webUrl = extractWebUrl(this.toUrl());
            if (useSharePointItemId) {
                appId = id;
            }
            else {
                const web = Web(webUrl);
                const listId = (yield web.lists.select("Id").filter("EntityTypeName eq 'AppCatalog'")())[0].Id;
                const listItems = yield web.lists.getById(listId).items.filter(`AppProductID eq '${id}'`).top(1)();
                if (listItems && listItems.length > 0) {
                    appId = listItems[0].Id;
                }
                else {
                    throw Error(`Did not find the app with id ${id} in the appcatalog.`);
                }
            }
            const poster = tag.configure(AppCatalog(webUrl, `_api/web/tenantappcatalog/SyncSolutionToTeams(id=${appId})`), "ac.syncSolutionToTeams");
            return yield spPost(poster, {});
        });
    }
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<IAppAddResult>
     */
    add(filename, content, shouldOverWrite = true) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // you don't add to the availableapps collection
            const adder = tag.configure(AppCatalog(extractWebUrl(this.toUrl()), `_api/web/tenantappcatalog/add(overwrite=${shouldOverWrite},url='${filename}')`), "ac.add");
            const r = yield spPost(adder, {
                body: content, headers: {
                    "binaryStringRequestBody": "true",
                },
            });
            return {
                data: r,
                file: File(odataUrlFrom(r)),
            };
        });
    }
}
const AppCatalog = spInvokableFactory(_AppCatalog);
class _App extends _SharePointQueryableInstance {
    /**
     * This method deploys an app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     *
     * @param skipFeatureDeployment Deploy the app to the entire tenant
     */
    deploy(skipFeatureDeployment = false) {
        return this.do(`Deploy(${skipFeatureDeployment})`);
    }
    /**
     * This method retracts a deployed app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    retract() {
        return this.do("Retract");
    }
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    install() {
        return this.do("Install");
    }
    /**
     * This method allows an app which is already installed to be uninstalled on a web
     * Note: when you use the REST API to uninstall a solution package from the site, it is not relocated to the recycle bin
     */
    uninstall() {
        return this.do("Uninstall");
    }
    /**
     * This method allows an app which is already installed to be upgraded on a web
     */
    upgrade() {
        return this.do("Upgrade");
    }
    /**
     * This method removes an app from the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    remove() {
        return this.do("Remove");
    }
    do(path) {
        return spPost(this.clone(App, path));
    }
}
__decorate([
    tag("app.deploy")
], _App.prototype, "deploy", null);
__decorate([
    tag("app.retract")
], _App.prototype, "retract", null);
__decorate([
    tag("app.install")
], _App.prototype, "install", null);
__decorate([
    tag("app.uninstall")
], _App.prototype, "uninstall", null);
__decorate([
    tag("app.upgrade")
], _App.prototype, "upgrade", null);
__decorate([
    tag("app.remove")
], _App.prototype, "remove", null);
const App = spInvokableFactory(_App);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/web.js


_Web.prototype.getAppCatalog = function (url) {
    return AppCatalog(url || this);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/index.js






SPRest.prototype.getTenantAppCatalogWeb = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        return this.childConfigHook(({ options, runtime }) => tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield SharePointQueryable("/", "_api/SP_TenantSettings_Current").configure(options).setRuntime(runtime)();
            return Web(data.CorporateCatalogUrl).configure(options).setRuntime(runtime);
        }));
    });
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/types.js






let _Attachments = class _Attachments extends _SharePointQueryableCollection {
    /**
    * Gets a Attachment File by filename
    *
    * @param name The name of the file, including extension.
    */
    getByName(name) {
        const f = tag.configure(Attachment(this), "ats.getByName");
        f.concat(`('${name}')`);
        return f;
    }
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    add(name, content) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const response = yield spPost(this.clone(Attachments, `add(FileName='${name}')`, false), { body: content });
            return {
                data: response,
                file: this.getByName(name),
            };
        });
    }
    /**
     * Adds multiple new attachment to the collection. Not supported for batching.
     *
     * @param files The collection of files to add
     */
    addMultiple(files) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < files.length; i++) {
                yield this.add(files[i].name, files[i].content);
            }
        });
    }
    /**
     * Delete multiple attachments from the collection. Not supported for batching.
     *
     * @param files The collection of files to delete
     */
    deleteMultiple(...files) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < files.length; i++) {
                yield this.getByName(files[i]).delete();
            }
        });
    }
    /**
     * Delete multiple attachments from the collection and send to recycle bin. Not supported for batching.
     *
     * @param files The collection of files to be deleted and sent to recycle bin
     */
    recycleMultiple(...files) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < files.length; i++) {
                yield this.getByName(files[i]).recycle();
            }
        });
    }
};
__decorate([
    tag("ats.add")
], _Attachments.prototype, "add", null);
__decorate([
    tag("ats.addMultiple")
], _Attachments.prototype, "addMultiple", null);
__decorate([
    tag("ats.deleteMultiple")
], _Attachments.prototype, "deleteMultiple", null);
__decorate([
    tag("ats.recycleMultiple")
], _Attachments.prototype, "recycleMultiple", null);
_Attachments = __decorate([
    defaultPath("AttachmentFiles")
], _Attachments);

const Attachments = spInvokableFactory(_Attachments);
class _Attachment extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteableWithETag("at");
    }
    /**
     * Gets the contents of the file as text
     *
     */
    getText() {
        return this.getParsed(new TextParser());
    }
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    getBlob() {
        return this.getParsed(new BlobParser());
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    getBuffer() {
        return this.getParsed(new BufferParser());
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    getJSON() {
        return this.getParsed(new JSONParser());
    }
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    setContent(content) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            yield spPost(this.clone(Attachment, "$value", false), headers({ "X-HTTP-Method": "PUT" }, {
                body: content,
            }));
            return Attachment(this);
        });
    }
    /**
     * Delete this attachment file and send it to recycle bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    recycle(eTag = "*") {
        return spPost(this.clone(Attachment, "recycleObject"), headers({
            "IF-Match": eTag,
            "X-HTTP-Method": "DELETE",
        }));
    }
    getParsed(parser) {
        return this.clone(Attachment, "$value", false).usingParser(parser)();
    }
}
__decorate([
    tag("at.getText")
], _Attachment.prototype, "getText", null);
__decorate([
    tag("at.getBlob")
], _Attachment.prototype, "getBlob", null);
__decorate([
    tag("at.getBuffer")
], _Attachment.prototype, "getBuffer", null);
__decorate([
    tag("at.getJSON")
], _Attachment.prototype, "getJSON", null);
__decorate([
    tag("at.setContent")
], _Attachment.prototype, "setContent", null);
__decorate([
    tag("at.recycle")
], _Attachment.prototype, "recycle", null);
const Attachment = spInvokableFactory(_Attachment);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/item.js



addProp(_Item, "attachmentFiles", Attachments);
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/funcs.js

/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
function getNextOrder(collection) {
    return collection.length < 1 ? 1 : (Math.max.apply(null, collection.map(i => i.order)) + 1);
}
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
function reindex(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].order = i + 1;
        if (hOP(collection[i], "columns")) {
            reindex(collection[i].columns);
        }
        else if (hOP(collection[i], "controls")) {
            reindex(collection[i].controls);
        }
    }
}
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/web.js



_Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
    return File(this, `getFileByServerRelativeUrl('${escapeQueryStrValue(fileRelativeUrl)}')`);
};
_Web.prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return File(this, `getFileByServerRelativePath(decodedUrl='${escapeQueryStrValue(fileRelativeUrl)}')`);
};
_Web.prototype.getFileById = function (uniqueId) {
    return File(this, `getFileById('${uniqueId}')`);
};
_Web.prototype.getFileByUrl = function (fileUrl) {
    return File(this, `getFileByUrl('!@p1::${escapeQueryStrValue(fileUrl)}')`);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/types.js









let _Comments = class _Comments extends _SharePointQueryableCollection {
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    add(info) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (typeof info === "string") {
                info = { text: info };
            }
            const postBody = body(util_assign(metadata("Microsoft.SharePoint.Comments.comment"), info));
            const d = yield spPost(this.clone(Comments, null), postBody);
            return util_assign(this.getById(d.id), d);
        });
    }
    /**
     * Gets a comment by id
     *
     * @param id Id of the comment to load
     */
    getById(id) {
        return tag.configure(Comment(this).concat(`(${id})`), "coms.getById");
    }
    /**
     * Deletes all the comments in this collection
     */
    clear() {
        return spPost(tag.configure(this.clone(Comments, "DeleteAll"), "coms.clear"));
    }
};
__decorate([
    tag("coms.add")
], _Comments.prototype, "add", null);
_Comments = __decorate([
    defaultPath("comments")
], _Comments);

const Comments = spInvokableFactory(_Comments);
class _Comment extends _SharePointQueryableInstance {
    /**
     * A comment's replies
     */
    get replies() {
        return tag.configure(Replies(this), "com.replies");
    }
    /**
     * Likes the comment as the current user
     */
    like() {
        return spPost(this.clone(Comment, "Like"));
    }
    /**
     * Unlikes the comment as the current user
     */
    unlike() {
        return spPost(this.clone(Comment, "Unlike"));
    }
    /**
     * Deletes this comment
     */
    delete() {
        return spPost(this.clone(Comment, "DeleteComment"));
    }
}
__decorate([
    tag("com.like")
], _Comment.prototype, "like", null);
__decorate([
    tag("com.unlike")
], _Comment.prototype, "unlike", null);
__decorate([
    tag("com.delete")
], _Comment.prototype, "delete", null);
const Comment = spInvokableFactory(_Comment);
let _Replies = class _Replies extends _SharePointQueryableCollection {
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    add(info) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (typeof info === "string") {
                info = { text: info };
            }
            const postBody = body(util_assign(metadata("Microsoft.SharePoint.Comments.comment"), info));
            const d = yield spPost(this.clone(Replies, null), postBody);
            return util_assign(Comment(odataUrlFrom(d)), d);
        });
    }
};
__decorate([
    tag("reps.add")
], _Replies.prototype, "add", null);
_Replies = __decorate([
    defaultPath("replies")
], _Replies);

const Replies = spInvokableFactory(_Replies);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/item.js








addProp(_Item, "comments", Comments);
_Item.prototype.getLikedBy = function () {
    return spPost(this.clone(Item, "likedBy"));
};
_Item.prototype.like = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const itemInfo = yield this.getParentInfos();
        const baseUrl = extractWebUrl(this.toUrl());
        const reputationUrl = "_api/Microsoft.Office.Server.ReputationModel.Reputation.SetLike(listID=@a1,itemID=@a2,like=@a3)";
        const likeUrl = combine(baseUrl, reputationUrl) + `?@a1='{${itemInfo.ParentList.Id}}'&@a2='${itemInfo.Item.Id}'&@a3=true`;
        return spPost(SharePointQueryable(likeUrl));
    });
};
_Item.prototype.unlike = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const itemInfo = yield this.getParentInfos();
        const baseUrl = extractWebUrl(this.toUrl());
        const reputationUrl = "_api/Microsoft.Office.Server.ReputationModel.Reputation.SetLike(listID=@a1,itemID=@a2,like=@a3)";
        const likeUrl = combine(baseUrl, reputationUrl) + `?@a1='{${itemInfo.ParentList.Id}}'&@a2='${itemInfo.Item.Id}'&@a3=false`;
        return spPost(SharePointQueryable(likeUrl));
    });
};
_Item.prototype.getLikedByInformation = function () {
    return this.clone(Item, "likedByInformation").expand("likedby")();
};
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/types.js
















/**
 * Page promotion state
 */
var PromotedState;
(function (PromotedState) {
    /**
     * Regular client side page
     */
    PromotedState[PromotedState["NotPromoted"] = 0] = "NotPromoted";
    /**
     * Page that will be promoted as news article after publishing
     */
    PromotedState[PromotedState["PromoteOnPublish"] = 1] = "PromoteOnPublish";
    /**
     * Page that is promoted as news article
     */
    PromotedState[PromotedState["Promoted"] = 2] = "Promoted";
})(PromotedState || (PromotedState = {}));
function initFrom(o, url) {
    return ClientsidePage(extractWebUrl(o.toUrl()), url).configureFrom(o);
}
/**
 * Represents the data and methods associated with client side "modern" pages
 */
class _ClientsidePage extends _SharePointQueryable {
    /**
     * PLEASE DON'T USE THIS CONSTRUCTOR DIRECTLY, thank you 🐇
     */
    constructor(baseUrl, path, json, noInit = false, sections = [], commentsDisabled = false) {
        super(baseUrl, path);
        this.json = json;
        this.sections = sections;
        this.commentsDisabled = commentsDisabled;
        this._bannerImageDirty = false;
        this._bannerImageThumbnailUrlDirty = false;
        // ensure we have a good url to build on for the pages api
        if (typeof baseUrl === "string") {
            this.data.parentUrl = "";
            this.data.url = combine(extractWebUrl(baseUrl), path);
        }
        else {
            this.assign(initFrom(baseUrl, null), path);
        }
        // set a default page settings slice
        this._pageSettings = { controlType: 0, pageSettingsSlice: { isDefaultDescription: true, isDefaultThumbnail: true } };
        // set a default layout part
        this._layoutPart = _ClientsidePage.getDefaultLayoutPart();
        if (typeof json !== "undefined" && !noInit) {
            this.fromJSON(json);
        }
    }
    static getDefaultLayoutPart() {
        return {
            dataVersion: "1.4",
            description: "Title Region Description",
            id: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            instanceId: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            properties: {
                authorByline: [],
                authors: [],
                layoutType: "FullWidthImage",
                showPublishDate: false,
                showTopicHeader: false,
                textAlignment: "Left",
                title: "",
                topicHeader: "",
            },
            reservedHeight: 280,
            serverProcessedContent: { htmlStrings: {}, searchablePlainTexts: {}, imageSources: {}, links: {} },
            title: "Title area",
        };
    }
    get pageLayout() {
        return this.json.PageLayoutType;
    }
    set pageLayout(value) {
        this.json.PageLayoutType = value;
    }
    get bannerImageUrl() {
        return this.json.BannerImageUrl;
    }
    set bannerImageUrl(value) {
        this.setBannerImage(value);
    }
    get thumbnailUrl() {
        return this._pageSettings.pageSettingsSlice.isDefaultThumbnail ? this.json.BannerImageUrl : this.json.BannerThumbnailUrl;
    }
    set thumbnailUrl(value) {
        this.json.BannerThumbnailUrl = value;
        this._bannerImageThumbnailUrlDirty = true;
        this._pageSettings.pageSettingsSlice.isDefaultThumbnail = false;
    }
    get topicHeader() {
        return objectDefinedNotNull(this.json.TopicHeader) ? this.json.TopicHeader : "";
    }
    set topicHeader(value) {
        this.json.TopicHeader = value;
        this._layoutPart.properties.topicHeader = value;
        if (stringIsNullOrEmpty(value)) {
            this.showTopicHeader = false;
        }
    }
    get title() {
        return this._layoutPart.properties.title;
    }
    set title(value) {
        this.json.Title = value;
        this._layoutPart.properties.title = value;
    }
    get reservedHeight() {
        return this._layoutPart.reservedHeight;
    }
    set reservedHeight(value) {
        this._layoutPart.reservedHeight = value;
    }
    get description() {
        return this.json.Description;
    }
    set description(value) {
        if (!stringIsNullOrEmpty(value) && value.length > 255) {
            throw Error("Modern Page description is limited to 255 chars.");
        }
        this.json.Description = value;
        if (!hOP(this._pageSettings, "htmlAttributes")) {
            this._pageSettings.htmlAttributes = [];
        }
        if (this._pageSettings.htmlAttributes.indexOf("modifiedDescription") < 0) {
            this._pageSettings.htmlAttributes.push("modifiedDescription");
        }
        this._pageSettings.pageSettingsSlice.isDefaultDescription = false;
    }
    get layoutType() {
        return this._layoutPart.properties.layoutType;
    }
    set layoutType(value) {
        this._layoutPart.properties.layoutType = value;
    }
    get headerTextAlignment() {
        return this._layoutPart.properties.textAlignment;
    }
    set headerTextAlignment(value) {
        this._layoutPart.properties.textAlignment = value;
    }
    get showTopicHeader() {
        return this._layoutPart.properties.showTopicHeader;
    }
    set showTopicHeader(value) {
        this._layoutPart.properties.showTopicHeader = value;
    }
    get showPublishDate() {
        return this._layoutPart.properties.showPublishDate;
    }
    set showPublishDate(value) {
        this._layoutPart.properties.showPublishDate = value;
    }
    get hasVerticalSection() {
        return this.sections.findIndex(s => s.layoutIndex === 2) > -1;
    }
    get authorByLine() {
        if (isArray(this.json.AuthorByline) && this.json.AuthorByline.length > 0) {
            return this.json.AuthorByline[0];
        }
        return null;
    }
    get verticalSection() {
        if (this.hasVerticalSection) {
            return this.addVerticalSection();
        }
        return null;
    }
    /**
     * Add a section to this page
     */
    addSection() {
        const section = new CanvasSection(this, getNextOrder(this.sections), 1);
        this.sections.push(section);
        return section;
    }
    /**
     * Add a section to this page
     */
    addVerticalSection() {
        // we can only have one vertical section so we find it if it exists
        const sectionIndex = this.sections.findIndex(s => s.layoutIndex === 2);
        if (sectionIndex > -1) {
            return this.sections[sectionIndex];
        }
        const section = new CanvasSection(this, getNextOrder(this.sections), 2);
        this.sections.push(section);
        return section;
    }
    /**
     * Loads this instance from the appropriate JSON data
     *
     * @param pageData JSON data to load (replaces any existing data)
     */
    fromJSON(pageData) {
        this.json = pageData;
        const canvasControls = JSON.parse(pageData.CanvasContent1);
        const layouts = JSON.parse(pageData.LayoutWebpartsContent);
        if (layouts && layouts.length > 0) {
            this._layoutPart = layouts[0];
        }
        this.setControls(canvasControls);
        return this;
    }
    /**
     * Loads this page's content from the server
     */
    load() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const item = yield this.getItem("Id", "CommentsDisabled");
            const pageData = yield SharePointQueryable(this, `_api/sitepages/pages(${item.Id})`)();
            this.commentsDisabled = item.CommentsDisabled;
            return this.fromJSON(pageData);
        });
    }
    /**
     * Persists the content changes (sections, columns, and controls) [does not work with batching]
     *
     * @param publish If true the page is published, if false the changes are persisted to SharePoint but not published [Default: true]
     */
    save(publish = true) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (this.json.Id === null) {
                throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
            }
            if (this._bannerImageDirty) {
                const serverRelativePath = this.bannerImageUrl;
                let imgInfo;
                let webUrl;
                const web = Web(extractWebUrl(this.toUrl()));
                const batch = web.createBatch();
                web.getFileByServerRelativePath(serverRelativePath.replace(/%20/ig, " "))
                    .select("ListId", "WebId", "UniqueId", "Name", "SiteId").inBatch(batch)().then(r1 => imgInfo = r1);
                web.select("Url").inBatch(batch)().then(r2 => webUrl = r2.Url);
                // we know the .then calls above will run before execute resolves, ensuring the vars are set
                yield batch.execute();
                const f = SharePointQueryable(webUrl, "_layouts/15/getpreview.ashx");
                f.query.set("guidSite", `${imgInfo.SiteId}`);
                f.query.set("guidWeb", `${imgInfo.WebId}`);
                f.query.set("guidFile", `${imgInfo.UniqueId}`);
                this.bannerImageUrl = f.toUrlAndQuery();
                if (!objectDefinedNotNull(this._layoutPart.serverProcessedContent)) {
                    this._layoutPart.serverProcessedContent = {};
                }
                this._layoutPart.serverProcessedContent.imageSources = { imageSource: serverRelativePath };
                if (!objectDefinedNotNull(this._layoutPart.serverProcessedContent.customMetadata)) {
                    this._layoutPart.serverProcessedContent.customMetadata = {};
                }
                this._layoutPart.serverProcessedContent.customMetadata.imageSource = {
                    listId: imgInfo.ListId,
                    siteId: imgInfo.SiteId,
                    uniqueId: imgInfo.UniqueId,
                    webId: imgInfo.WebId,
                };
                this._layoutPart.properties.webId = imgInfo.WebId;
                this._layoutPart.properties.siteId = imgInfo.SiteId;
                this._layoutPart.properties.listId = imgInfo.ListId;
                this._layoutPart.properties.uniqueId = imgInfo.UniqueId;
            }
            // we try and check out the page for the user
            if (!this.json.IsPageCheckedOutToCurrentUser) {
                yield spPost(initFrom(this, `_api/sitepages/pages(${this.json.Id})/checkoutpage`));
            }
            // create the body for the save request
            let saveBody = Object.assign(metadata("SP.Publishing.SitePage"), {
                AuthorByline: this.json.AuthorByline || [],
                CanvasContent1: this.getCanvasContent1(),
                Description: this.description,
                LayoutWebpartsContent: this.getLayoutWebpartsContent(),
                Title: this.title,
                TopicHeader: this.topicHeader,
            });
            if (this._bannerImageDirty || this._bannerImageThumbnailUrlDirty) {
                const bannerImageUrlValue = this._bannerImageThumbnailUrlDirty ? this.thumbnailUrl : this.bannerImageUrl;
                saveBody = util_assign(saveBody, {
                    BannerImageUrl: bannerImageUrlValue,
                });
            }
            const updater = initFrom(this, `_api/sitepages/pages(${this.json.Id})/savepage`);
            yield spPost(updater, headers({ "if-match": "*" }, body(saveBody)));
            let r = true;
            if (publish) {
                r = yield spPost(initFrom(this, `_api/sitepages/pages(${this.json.Id})/publish`));
                if (r) {
                    this.json.IsPageCheckedOutToCurrentUser = false;
                }
            }
            this._bannerImageDirty = false;
            this._bannerImageThumbnailUrlDirty = false;
            return r;
        });
    }
    /**
     * Discards the checkout of this page
     */
    discardPageCheckout() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (this.json.Id === null) {
                throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
            }
            const d = yield spPost(initFrom(this, `_api/sitepages/pages(${this.json.Id})/discardPage`), body(metadata("SP.Publishing.SitePage")));
            this.fromJSON(d);
        });
    }
    /**
     * Promotes this page as a news item
     */
    promoteToNews() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return this.promoteNewsImpl("promoteToNews");
        });
    }
    // API is currently broken on server side
    // public async demoteFromNews(): Promise<boolean> {
    //     return this.promoteNewsImpl("demoteFromNews");
    // }
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    findControlById(id) {
        return this.findControl((c) => c.id === id);
    }
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    findControl(predicate) {
        // check all sections
        for (let i = 0; i < this.sections.length; i++) {
            // check all columns
            for (let j = 0; j < this.sections[i].columns.length; j++) {
                // check all controls
                for (let k = 0; k < this.sections[i].columns[j].controls.length; k++) {
                    // check to see if the predicate likes this control
                    if (predicate(this.sections[i].columns[j].controls[k])) {
                        return this.sections[i].columns[j].controls[k];
                    }
                }
            }
        }
        // we found nothing so give nothing back
        return null;
    }
    /**
     * Creates a copy of this page
     *
     * @param web The web where we will create the copy
     * @param pageName The file name of the new page
     * @param title The title of the new page
     * @param publish If true the page will be published
     */
    copy(web, pageName, title, publish = true, promotedState) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const page = yield CreateClientsidePage(web, pageName, title, this.pageLayout, promotedState);
            // we know the method is on the class - but it is protected so not part of the interface
            page.setControls(this.getControls());
            // we need to do some work to set the banner image url in the copied page
            if (!stringIsNullOrEmpty(this.json.BannerImageUrl)) {
                // use a URL to parse things for us
                const url = new URL(this.json.BannerImageUrl);
                // helper function to translate the guid strings into properly formatted guids with dashes
                const makeGuid = (s) => s.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/g, "$1-$2-$3-$4-$5");
                // protect against errors because the serverside impl has changed, we'll just skip
                if (url.searchParams.has("guidSite") && url.searchParams.has("guidWeb") && url.searchParams.has("guidFile")) {
                    const guidSite = makeGuid(url.searchParams.get("guidSite"));
                    const guidWeb = makeGuid(url.searchParams.get("guidWeb"));
                    const guidFile = makeGuid(url.searchParams.get("guidFile"));
                    const site = Site(extractWebUrl(this.toUrl()));
                    const id = yield site.select("Id")();
                    // the site guid must match the current site's guid or we are unable to set the image
                    if (id.Id === guidSite) {
                        const openWeb = yield site.openWebById(guidWeb);
                        const file = yield openWeb.web.getFileById(guidFile).select("ServerRelativeUrl")();
                        const props = {};
                        if (this._layoutPart.properties) {
                            if (hOP(this._layoutPart.properties, "translateX")) {
                                props.translateX = this._layoutPart.properties.translateX;
                            }
                            if (hOP(this._layoutPart.properties, "translateY")) {
                                props.translateY = this._layoutPart.properties.translateY;
                            }
                            if (hOP(this._layoutPart.properties, "imageSourceType")) {
                                props.imageSourceType = this._layoutPart.properties.imageSourceType;
                            }
                            if (hOP(this._layoutPart.properties, "altText")) {
                                props.altText = this._layoutPart.properties.altText;
                            }
                        }
                        page.setBannerImage(file.ServerRelativeUrl, props);
                    }
                }
            }
            yield page.save(publish);
            return page;
        });
    }
    /**
     * Sets the modern page banner image
     *
     * @param url Url of the image to display
     * @param altText Alt text to describe the image
     * @param bannerProps Additional properties to control display of the banner
     */
    setBannerImage(url, props) {
        if (isUrlAbsolute(url)) {
            // do our best to make this a server relative url by removing the x.sharepoint.com part
            url = url.replace(/^https?:\/\/[a-z0-9.]*?\.[a-z]{2,3}\//i, "/");
        }
        this.json.BannerImageUrl = url;
        this._bannerImageDirty = true;
        /*
            setting the banner image resets the thumbnail image (matching UI functionality)
            but if the thumbnail is dirty they are likely trying to set them both to
            different values, so we allow that here.
            Also allows the banner image to be updated safely with the calculated one in save()
        */
        if (!this._bannerImageThumbnailUrlDirty) {
            this.thumbnailUrl = url;
            this._pageSettings.pageSettingsSlice.isDefaultThumbnail = true;
        }
        // this seems to always be true, so default
        this._layoutPart.properties.imageSourceType = 2;
        if (objectDefinedNotNull(props)) {
            if (hOP(props, "translateX")) {
                this._layoutPart.properties.translateX = props.translateX;
            }
            if (hOP(props, "translateY")) {
                this._layoutPart.properties.translateY = props.translateY;
            }
            if (hOP(props, "imageSourceType")) {
                this._layoutPart.properties.imageSourceType = props.imageSourceType;
            }
            if (hOP(props, "altText")) {
                this._layoutPart.properties.altText = props.altText;
            }
        }
    }
    /**
     * Sets the banner image url from an external source. You must call save to persist the changes
     *
     * @param url absolute url of the external file
     * @param props optional set of properties to control display of the banner image
     */
    setBannerImageFromExternalUrl(url, props) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // validate and parse our input url
            const fileUrl = new URL(url);
            // get our page name without extension, used as a folder name when creating the file
            const pageName = this.json.FileName.replace(/\.[^/.]+$/, "");
            // get the filename we will use
            const filename = fileUrl.pathname.split(/[\\/]/i).pop();
            const request = initFrom(this, "_api/sitepages/AddImageFromExternalUrl");
            request.query.set("imageFileName", `'${encodeURIComponent(filename)}'`);
            request.query.set("pageName", `'${encodeURIComponent(pageName)}'`);
            request.query.set("externalUrl", `'${encodeURIComponent(url)}'`);
            request.select("ServerRelativeUrl");
            const result = yield spPost(request);
            // set with the newly created relative url
            this.setBannerImage(result.ServerRelativeUrl, props);
        });
    }
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorId The integer id of the user to set as the author
     */
    setAuthorById(authorId) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const userLoginData = yield SharePointQueryableCollection(extractWebUrl(this.toUrl()), "/_api/web/siteusers")
                .configureFrom(this)
                .filter(`Id eq ${authorId}`)
                .select("LoginName")();
            if (userLoginData.length < 1) {
                throw Error(`Could not find user with id ${authorId}.`);
            }
            return this.setAuthorByLoginName(userLoginData[0].LoginName);
        });
    }
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorLoginName The login name of the user (ex: i:0#.f|membership|name@tenant.com)
     */
    setAuthorByLoginName(authorLoginName) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const userLoginData = yield SharePointQueryableCollection(extractWebUrl(this.toUrl()), "/_api/web/siteusers")
                .configureFrom(this)
                .filter(`LoginName eq '${encodeURIComponent(authorLoginName)}'`)
                .select("UserPrincipalName", "Title")();
            if (userLoginData.length < 1) {
                throw Error(`Could not find user with login name '${authorLoginName}'.`);
            }
            this.json.AuthorByline = [authorLoginName];
            this._layoutPart.properties.authorByline = [authorLoginName];
            this._layoutPart.properties.authors = [{
                    id: authorLoginName,
                    name: userLoginData[0].Title,
                    role: "",
                    upn: userLoginData[0].UserPrincipalName,
                }];
        });
    }
    /**
     * Gets the list item associated with this clientside page
     *
     * @param selects Specific set of fields to include when getting the item
     */
    getItem(...selects) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const initer = initFrom(this, "/_api/lists/EnsureClientRenderedSitePagesLibrary").select("EnableModeration", "EnableMinorVersions", "Id");
            const listData = yield spPost(initer);
            const item = (List(listData["odata.id"])).configureFrom(this).items.getById(this.json.Id);
            const itemData = yield item.select(...selects)();
            return util_assign((Item(odataUrlFrom(itemData))).configureFrom(this), itemData);
        });
    }
    /**
     * Extends this queryable from the provided parent
     *
     * @param parent Parent queryable from which we will derive a base url
     * @param path Additional path
     */
    assign(parent, path) {
        this.data.parentUrl = parent.data.url;
        this.data.url = combine(this.data.parentUrl, path || "");
        this.configureFrom(parent);
    }
    getCanvasContent1() {
        return JSON.stringify(this.getControls());
    }
    getLayoutWebpartsContent() {
        if (this._layoutPart) {
            return JSON.stringify([this._layoutPart]);
        }
        else {
            return JSON.stringify(null);
        }
    }
    setControls(controls) {
        // reset the sections
        this.sections = [];
        if (controls && controls.length) {
            for (let i = 0; i < controls.length; i++) {
                // if no control type is present this is a column which we give type 0 to let us process it
                const controlType = hOP(controls[i], "controlType") ? controls[i].controlType : 0;
                switch (controlType) {
                    case 0:
                        // empty canvas column or page settings
                        if (hOP(controls[i], "pageSettingsSlice")) {
                            this._pageSettings = controls[i];
                        }
                        else {
                            // we have an empty column
                            this.mergeColumnToTree(new CanvasColumn(controls[i]));
                        }
                        break;
                    case 3: {
                        const part = new ClientsideWebpart(controls[i]);
                        this.mergePartToTree(part, part.data.position);
                        break;
                    }
                    case 4: {
                        const textData = controls[i];
                        const text = new ClientsideText(textData.innerHTML, textData);
                        this.mergePartToTree(text, text.data.position);
                        break;
                    }
                }
            }
            reindex(this.sections);
        }
    }
    getControls() {
        // reindex things
        reindex(this.sections);
        // rollup the control changes
        const canvasData = [];
        this.sections.forEach(section => {
            section.columns.forEach(column => {
                if (column.controls.length < 1) {
                    // empty column
                    canvasData.push({
                        displayMode: column.data.displayMode,
                        emphasis: this.getEmphasisObj(section.emphasis),
                        position: column.data.position,
                    });
                }
                else {
                    column.controls.forEach(control => {
                        control.data.emphasis = this.getEmphasisObj(section.emphasis);
                        canvasData.push(control.data);
                    });
                }
            });
        });
        canvasData.push(this._pageSettings);
        return canvasData;
    }
    getEmphasisObj(value) {
        if (value < 1 || value > 3) {
            return {};
        }
        return { zoneEmphasis: value };
    }
    promoteNewsImpl(method) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (this.json.Id === null) {
                throw Error("The id for this page is null.");
            }
            // per bug #858 if we promote before we have ever published the last published date will
            // forever not be updated correctly in the modern news web part. Because this will affect very
            // few folks we just go ahead and publish for them here as that is likely what they intended.
            if (stringIsNullOrEmpty(this.json.VersionInfo.LastVersionCreatedBy)) {
                const lastPubData = new Date(this.json.VersionInfo.LastVersionCreated);
                // no modern page should reasonable be published before the year 2000 :)
                if (lastPubData.getFullYear() < 2000) {
                    yield this.save(true);
                }
            }
            return yield spPost(initFrom(this, `_api/sitepages/pages(${this.json.Id})/${method}`), body(metadata("SP.Publishing.SitePage")));
        });
    }
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    mergePartToTree(control, positionData) {
        var _a, _b, _c;
        let column = null;
        let sectionFactor = 12;
        let sectionIndex = 0;
        let zoneIndex = 0;
        let layoutIndex = 1;
        // handle case where we don't have position data (shouldn't happen?)
        if (positionData) {
            if (hOP(positionData, "zoneIndex")) {
                zoneIndex = positionData.zoneIndex;
            }
            if (hOP(positionData, "sectionIndex")) {
                sectionIndex = positionData.sectionIndex;
            }
            if (hOP(positionData, "sectionFactor")) {
                sectionFactor = positionData.sectionFactor;
            }
            if (hOP(positionData, "layoutIndex")) {
                layoutIndex = positionData.layoutIndex;
            }
        }
        const zoneEmphasis = (_c = (_b = (_a = control.data) === null || _a === void 0 ? void 0 : _a.emphasis) === null || _b === void 0 ? void 0 : _b.zoneEmphasis) !== null && _c !== void 0 ? _c : 0;
        const section = this.getOrCreateSection(zoneIndex, layoutIndex, zoneEmphasis);
        const columns = section.columns.filter(c => c.order === sectionIndex);
        if (columns.length < 1) {
            column = section.addColumn(sectionFactor, layoutIndex);
        }
        else {
            column = columns[0];
        }
        control.column = column;
        column.addControl(control);
    }
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    mergeColumnToTree(column) {
        var _a, _b;
        const order = hOP(column.data, "position") && hOP(column.data.position, "zoneIndex") ? column.data.position.zoneIndex : 0;
        const layoutIndex = hOP(column.data, "position") && hOP(column.data.position, "layoutIndex") ? column.data.position.layoutIndex : 1;
        const section = this.getOrCreateSection(order, layoutIndex, ((_b = (_a = column.data) === null || _a === void 0 ? void 0 : _a.emphasis) === null || _b === void 0 ? void 0 : _b.zoneEmphasis) || 0);
        column.section = section;
        section.columns.push(column);
    }
    /**
     * Handle the logic to get or create a section based on the supplied order and layoutIndex
     *
     * @param order Section order
     * @param layoutIndex Layout Index (1 === normal, 2 === vertical section)
     * @param emphasis The section emphasis
     */
    getOrCreateSection(order, layoutIndex, emphasis) {
        let section = null;
        const sections = this.sections.filter(s => s.order === order && s.layoutIndex === layoutIndex);
        if (sections.length < 1) {
            section = layoutIndex === 2 ? this.addVerticalSection() : this.addSection();
            section.order = order;
            section.emphasis = emphasis;
        }
        else {
            section = sections[0];
        }
        return section;
    }
}
__decorate([
    tag("csp.load")
], _ClientsidePage.prototype, "load", null);
__decorate([
    tag("csp.save")
], _ClientsidePage.prototype, "save", null);
__decorate([
    tag("csp.discardPageCheckout")
], _ClientsidePage.prototype, "discardPageCheckout", null);
__decorate([
    tag("csp.promoteToNews")
], _ClientsidePage.prototype, "promoteToNews", null);
__decorate([
    tag("csp.copy")
], _ClientsidePage.prototype, "copy", null);
__decorate([
    tag("csp.getItem")
], _ClientsidePage.prototype, "getItem", null);
/**
 * Invokable factory for IClientSidePage instances
 */
const ClientsidePage = (baseUrl, path, json, noInit = false, sections = [], commentsDisabled = false) => {
    return invokableFactory(_ClientsidePage)(baseUrl, path, json, noInit, sections, commentsDisabled);
};
/**
 * Loads a client side page from the supplied IFile instance
 *
 * @param file Source IFile instance
 */
const ClientsidePageFromFile = (file) => tslib_es6_awaiter(void 0, void 0, void 0, function* () {
    const item = yield file.getItem();
    const page = ClientsidePage(extractWebUrl(file.toUrl()), "", { Id: item.Id }, true);
    return page.configureFrom(file).load();
});
/**
 * Creates a new client side page
 *
 * @param web The web or list
 * @param pageName The name of the page (filename)
 * @param title The page's title
 * @param PageLayoutType Layout to use when creating the page
 */
const CreateClientsidePage = (web, pageName, title, PageLayoutType = "Article", promotedState = 0) => tslib_es6_awaiter(void 0, void 0, void 0, function* () {
    // patched because previously we used the full page name with the .aspx at the end
    // this allows folk's existing code to work after the re-write to the new API
    pageName = pageName.replace(/\.aspx$/i, "");
    // initialize the page, at this point a checked-out page with a junk filename will be created.
    const pageInitData = yield spPost(initFrom(web, "_api/sitepages/pages"), body(Object.assign(metadata("SP.Publishing.SitePage"), {
        PageLayoutType,
        PromotedState: promotedState,
    })));
    // now we can init our page with the save data
    const newPage = ClientsidePage(web, "", pageInitData);
    newPage.title = pageName;
    yield newPage.save(false);
    newPage.title = title;
    return newPage;
});
class CanvasSection {
    constructor(page, order, layoutIndex, columns = [], _emphasis = 0) {
        this.page = page;
        this.columns = columns;
        this._emphasis = _emphasis;
        this._memId = util_getGUID();
        this._order = order;
        this._layoutIndex = layoutIndex;
    }
    get order() {
        return this._order;
    }
    set order(value) {
        this._order = value;
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].data.position.zoneIndex = value;
        }
    }
    get layoutIndex() {
        return this._layoutIndex;
    }
    set layoutIndex(value) {
        this._layoutIndex = value;
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].data.position.layoutIndex = value;
        }
    }
    /**
     * Default column (this.columns[0]) for this section
     */
    get defaultColumn() {
        if (this.columns.length < 1) {
            this.addColumn(12);
        }
        return this.columns[0];
    }
    /**
     * Adds a new column to this section
     */
    addColumn(factor, layoutIndex = this.layoutIndex) {
        const column = new CanvasColumn();
        column.section = this;
        column.data.position.zoneIndex = this.order;
        column.data.position.layoutIndex = layoutIndex;
        column.data.position.sectionFactor = factor;
        column.order = getNextOrder(this.columns);
        this.columns.push(column);
        return column;
    }
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    addControl(control) {
        this.defaultColumn.addControl(control);
        return this;
    }
    get emphasis() {
        return this._emphasis;
    }
    set emphasis(value) {
        this._emphasis = value;
    }
    /**
     * Removes this section and all contained columns and controls from the collection
     */
    remove() {
        this.page.sections = this.page.sections.filter(section => section._memId !== this._memId);
        reindex(this.page.sections);
    }
}
class CanvasColumn {
    constructor(json = JSON.parse(JSON.stringify(CanvasColumn.Default)), controls = []) {
        this.json = json;
        this.controls = controls;
        this._section = null;
        this._memId = util_getGUID();
    }
    get data() {
        return this.json;
    }
    get section() {
        return this._section;
    }
    set section(section) {
        this._section = section;
    }
    get order() {
        return this.data.position.sectionIndex;
    }
    set order(value) {
        this.data.position.sectionIndex = value;
        for (let i = 0; i < this.controls.length; i++) {
            this.controls[i].data.position.zoneIndex = this.data.position.zoneIndex;
            this.controls[i].data.position.layoutIndex = this.data.position.layoutIndex;
            this.controls[i].data.position.sectionIndex = value;
        }
    }
    get factor() {
        return this.data.position.sectionFactor;
    }
    set factor(value) {
        this.data.position.sectionFactor = value;
    }
    addControl(control) {
        control.column = this;
        this.controls.push(control);
        return this;
    }
    getControl(index) {
        return this.controls[index];
    }
    remove() {
        this.section.columns = this.section.columns.filter(column => column._memId !== this._memId);
        reindex(this.section.columns);
    }
}
CanvasColumn.Default = {
    controlType: 0,
    displayMode: 2,
    emphasis: {},
    position: {
        layoutIndex: 1,
        sectionFactor: 12,
        sectionIndex: 1,
        zoneIndex: 1,
    },
};
class ColumnControl {
    constructor(json) {
        this.json = json;
    }
    get id() {
        return this.json.id;
    }
    get data() {
        return this.json;
    }
    get column() {
        return this._column;
    }
    set column(value) {
        this._column = value;
        this.onColumnChange(this._column);
    }
    remove() {
        this.column.controls = this.column.controls.filter(control => control.id !== this.id);
        reindex(this.column.controls);
    }
    setData(data) {
        this.json = data;
    }
}
class ClientsideText extends ColumnControl {
    constructor(text, json = JSON.parse(JSON.stringify(ClientsideText.Default))) {
        if (stringIsNullOrEmpty(json.id)) {
            json.id = util_getGUID();
            json.anchorComponentId = json.id;
        }
        super(json);
        this.text = text;
    }
    get text() {
        return this.data.innerHTML;
    }
    set text(value) {
        this.data.innerHTML = value;
    }
    get order() {
        return this.data.position.controlIndex;
    }
    set order(value) {
        this.data.position.controlIndex = value;
    }
    onColumnChange(col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = getNextOrder(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.order;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    }
}
ClientsideText.Default = {
    addedFromPersistedData: false,
    anchorComponentId: "",
    controlType: 4,
    displayMode: 2,
    editorType: "CKEditor",
    emphasis: {},
    id: "",
    innerHTML: "",
    position: {
        controlIndex: 1,
        layoutIndex: 1,
        sectionFactor: 12,
        sectionIndex: 1,
        zoneIndex: 1,
    },
};
class ClientsideWebpart extends ColumnControl {
    constructor(json = JSON.parse(JSON.stringify(ClientsideWebpart.Default))) {
        super(json);
    }
    static fromComponentDef(definition) {
        const part = new ClientsideWebpart();
        part.import(definition);
        return part;
    }
    get title() {
        return this.data.webPartData.title;
    }
    set title(value) {
        this.data.webPartData.title = value;
    }
    get description() {
        return this.data.webPartData.description;
    }
    set description(value) {
        this.data.webPartData.description = value;
    }
    get order() {
        return this.data.position.controlIndex;
    }
    set order(value) {
        this.data.position.controlIndex = value;
    }
    get height() {
        return this.data.reservedHeight;
    }
    set height(value) {
        this.data.reservedHeight = value;
    }
    get width() {
        return this.data.reservedWidth;
    }
    set width(value) {
        this.data.reservedWidth = value;
    }
    get dataVersion() {
        return this.data.webPartData.dataVersion;
    }
    set dataVersion(value) {
        this.data.webPartData.dataVersion = value;
    }
    setProperties(properties) {
        this.data.webPartData.properties = util_assign(this.data.webPartData.properties, properties);
        return this;
    }
    getProperties() {
        return this.data.webPartData.properties;
    }
    onColumnChange(col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = getNextOrder(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.data.position.sectionIndex;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    }
    import(component) {
        const id = util_getGUID();
        const componendId = component.Id.replace(/^\{|\}$/g, "").toLowerCase();
        const manifest = JSON.parse(component.Manifest);
        const preconfiguredEntries = manifest.preconfiguredEntries[0];
        this.setData(Object.assign({}, this.data, {
            id,
            webPartData: {
                dataVersion: "1.0",
                description: preconfiguredEntries.description.default,
                id: componendId,
                instanceId: id,
                properties: preconfiguredEntries.properties,
                title: preconfiguredEntries.title.default,
            },
            webPartId: componendId,
        }));
    }
}
ClientsideWebpart.Default = {
    addedFromPersistedData: false,
    controlType: 3,
    displayMode: 2,
    emphasis: {},
    id: null,
    position: {
        controlIndex: 1,
        layoutIndex: 1,
        sectionFactor: 12,
        sectionIndex: 1,
        zoneIndex: 1,
    },
    reservedHeight: 500,
    reservedWidth: 500,
    webPartData: null,
    webPartId: null,
};
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/web.js



_Web.prototype.getClientsideWebParts = function () {
    return this.clone(SharePointQueryableCollection, "GetClientSideWebParts")();
};
_Web.prototype.addClientsidePage =
    function (pageName, title = pageName.replace(/\.[^/.]+$/, ""), layout, promotedState) {
        return CreateClientsidePage(this, pageName, title, layout, promotedState);
    };
_Web.prototype.loadClientsidePage = function (path) {
    return ClientsidePageFromFile(this.getFileByServerRelativePath(path));
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/types.js












let _Folders = class _Folders extends _SharePointQueryableCollection {
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    getByName(name) {
        return tag.configure(Folder(this).concat(`('${escapeQueryStrValue(name)}')`), "fs.getByName");
    }
    /**
     * Adds a new folder at the specified URL
     *
     * @param url
     */
    add(url) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(Folders, `add('${escapeQueryStrValue(url)}')`));
            return {
                data,
                folder: this.getByName(url),
            };
        });
    }
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    addUsingPath(serverRelativeUrl, overwrite = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(Folders, `addUsingPath(DecodedUrl='${escapeQueryStrValue(serverRelativeUrl)}',overwrite=${overwrite})`));
            return {
                data,
                folder: Folder(extractWebUrl(this.toUrl()), `_api/web/getFolderByServerRelativePath(decodedUrl='${escapeQueryStrValue(serverRelativeUrl)}')`),
            };
        });
    }
};
__decorate([
    tag("fs.add")
], _Folders.prototype, "add", null);
__decorate([
    tag("fs.addUsingPath")
], _Folders.prototype, "addUsingPath", null);
_Folders = __decorate([
    defaultPath("folders")
], _Folders);

const Folders = spInvokableFactory(_Folders);
class _Folder extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteableWithETag("f");
        /**
         * Updates folder's properties
         * @param props Folder's properties to update
         */
        this.update = this._update("SP.Folder", data => ({ data, folder: this }));
    }
    /**
     * Specifies the sequence in which content types are displayed.
     *
     */
    get contentTypeOrder() {
        return tag.configure(SharePointQueryableCollection(this, "contentTypeOrder"), "f.contentTypeOrder");
    }
    /**
     * Gets this folder's sub folders
     *
     */
    get folders() {
        return Folders(this);
    }
    /**
     * Gets this folder's list item field values
     *
     */
    get listItemAllFields() {
        return tag.configure(SharePointQueryableInstance(this, "listItemAllFields"), "f.listItemAllFields");
    }
    /**
     * Gets the parent folder, if available
     *
     */
    get parentFolder() {
        return tag.configure(Folder(this, "parentFolder"), "f.parentFolder");
    }
    /**
     * Gets this folder's properties
     *
     */
    get properties() {
        return tag.configure(SharePointQueryableInstance(this, "properties"), "f.properties");
    }
    /**
     * Gets this folder's server relative url
     *
     */
    get serverRelativeUrl() {
        return tag.configure(SharePointQueryable(this, "serverRelativeUrl"), "f.serverRelativeUrl");
    }
    /**
     * Gets a value that specifies the content type order.
     *
     */
    get uniqueContentTypeOrder() {
        return tag.configure(SharePointQueryableCollection(this, "uniqueContentTypeOrder"), "f.uniqueContentTypeOrder");
    }
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return spPost(this.clone(Folder, "recycle"));
    }
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    getItem(...selects) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = yield this.listItemAllFields.select(...selects)();
            return util_assign(Item(odataUrlFrom(q)), q);
        });
    }
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    moveTo(destUrl) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const urlInfo = yield this.getParentInfos();
            const uri = new URL(urlInfo.ParentWeb.Url);
            yield spPost(Folder(uri.origin, "/_api/SP.MoveCopyUtil.MoveFolder()"), body({
                destUrl: isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl),
                srcUrl: combine(uri.origin, urlInfo.Folder.ServerRelativeUrl),
            }));
        });
    }
    /**
     * Moves a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    moveByPath(destUrl, KeepBoth = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const urlInfo = yield this.getParentInfos();
            const uri = new URL(urlInfo.ParentWeb.Url);
            yield spPost(Folder(uri.origin, "/_api/SP.MoveCopyUtil.MoveFolderByPath()"), body({
                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl)),
                options: {
                    KeepBoth,
                    ResetAuthorAndCreatedOnCopy: true,
                    ShouldBypassSharedLocks: true,
                    __metadata: {
                        type: "SP.MoveCopyOptions",
                    },
                },
                srcPath: toResourcePath(combine(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
            }));
        });
    }
    /**
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    copyTo(destUrl) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const urlInfo = yield this.getParentInfos();
            const uri = new URL(urlInfo.ParentWeb.Url);
            yield spPost(Folder(uri.origin, "/_api/SP.MoveCopyUtil.CopyFolder()"), body({
                destUrl: isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl),
                srcUrl: combine(uri.origin, urlInfo.Folder.ServerRelativeUrl),
            }));
        });
    }
    /**
     * Copies a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    copyByPath(destUrl, KeepBoth = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const urlInfo = yield this.getParentInfos();
            const uri = new URL(urlInfo.ParentWeb.Url);
            yield spPost(Folder(uri.origin, "/_api/SP.MoveCopyUtil.CopyFolderByPath()"), body({
                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl)),
                options: {
                    KeepBoth: KeepBoth,
                    ResetAuthorAndCreatedOnCopy: true,
                    ShouldBypassSharedLocks: true,
                    __metadata: {
                        type: "SP.MoveCopyOptions",
                    },
                },
                srcPath: toResourcePath(combine(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
            }));
        });
    }
    /**
     * Deletes the folder object with options.
     *
     * @param parameters Specifies the options to use when deleting a folder.
     */
    deleteWithParams(parameters) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return spPost(this.clone(Folder, "DeleteWithParameters"), body({ parameters }));
        });
    }
    /**
     * Create the subfolder inside the current folder, as specified by the leafPath
     *
     * @param leafPath leafName of the new folder
     */
    addSubFolderUsingPath(leafPath) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            yield spPost(this.clone(Folder, "AddSubFolderUsingPath"), body({ leafPath: toResourcePath(leafPath) }));
            return this.folders.getByName(leafPath);
        });
    }
    /**
     * Gets the parent information for this folder's list and web
     */
    getParentInfos() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const urlInfo = yield this.select("ServerRelativeUrl", "ListItemAllFields/ParentList/Id", "ListItemAllFields/ParentList/RootFolder/UniqueId", "ListItemAllFields/ParentList/RootFolder/ServerRelativeUrl", "ListItemAllFields/ParentList/RootFolder/ServerRelativePath", "ListItemAllFields/ParentList/ParentWeb/Id", "ListItemAllFields/ParentList/ParentWeb/Url", "ListItemAllFields/ParentList/ParentWeb/ServerRelativeUrl", "ListItemAllFields/ParentList/ParentWeb/ServerRelativePath").expand("ListItemAllFields/ParentList", "ListItemAllFields/ParentList/RootFolder", "ListItemAllFields/ParentList/ParentWeb")();
            return {
                Folder: {
                    ServerRelativeUrl: urlInfo.ServerRelativeUrl,
                },
                ParentList: {
                    Id: urlInfo.ListItemAllFields.ParentList.Id,
                    RootFolderServerRelativePath: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativePath,
                    RootFolderServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativeUrl,
                    RootFolderUniqueId: urlInfo.ListItemAllFields.ParentList.RootFolder.UniqueId,
                },
                ParentWeb: {
                    Id: urlInfo.ListItemAllFields.ParentList.ParentWeb.Id,
                    ServerRelativePath: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativePath,
                    ServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativeUrl,
                    Url: urlInfo.ListItemAllFields.ParentList.ParentWeb.Url,
                },
            };
        });
    }
    /**
     * Gets the shareable item associated with this folder
     */
    getShareable() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            // sharing only works on the item end point, not the file one - so we create a folder instance with the item url internally
            const d = yield this.clone(SharePointQueryableInstance, "listItemAllFields", false).select("odata.id")();
            let shareable = Item(odataUrlFrom(d));
            // we need to handle batching
            if (this.hasBatch) {
                shareable = shareable.inBatch(this.batch);
            }
            return shareable;
        });
    }
}
__decorate([
    tag("f.recycle")
], _Folder.prototype, "recycle", null);
__decorate([
    tag("f.getItem")
], _Folder.prototype, "getItem", null);
__decorate([
    tag("f.moveTo")
], _Folder.prototype, "moveTo", null);
__decorate([
    tag("f.moveByPath")
], _Folder.prototype, "moveByPath", null);
__decorate([
    tag("f.copyTo")
], _Folder.prototype, "copyTo", null);
__decorate([
    tag("f.copyByPath")
], _Folder.prototype, "copyByPath", null);
__decorate([
    tag("f.del-params")
], _Folder.prototype, "deleteWithParams", null);
__decorate([
    tag("f.getShareable")
], _Folder.prototype, "getShareable", null);
const Folder = spInvokableFactory(_Folder);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/column-defaults/list.js









addProp(_List, "rootFolder", Folder, "rootFolder");
_List.prototype.getDefaultColumnValues = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const pathPart = yield this.rootFolder.select("ServerRelativePath")();
        const webUrl = yield this.select("ParentWeb/Url").expand("ParentWeb")();
        const path = combine("/", pathPart.ServerRelativePath.DecodedUrl, "Forms/client_LocationBasedDefaults.html");
        const baseFilePath = combine(webUrl.ParentWeb.Url, "_api/web", `getFileByServerRelativePath(decodedUrl='${escapeQueryStrValue(path)}')`);
        // we do this because we don't want to import file if we don't have to
        let xml = "";
        try {
            xml = yield Folder(baseFilePath, "$value").usingParser(new TextParser())(headers({ "binaryStringResponseBody": "true" }));
        }
        catch (e) {
            // if this call fails we assume it is because the file is 404
            if (e && e.status && e.status === 404) {
                // return an empty array
                return [];
            }
            throw e;
        }
        // get all the tags from the xml
        const matches = xml.match(/<a.*?<\/a>/ig);
        const tags = matches === null ? [] : matches.map(t => t.trim());
        // now we need to turn these tags of form into objects
        // <a href="/sites/dev/My%20Title"><DefaultValue FieldName="TextField">Test</DefaultValue></a>
        return tags.reduce((defVals, t) => {
            const m = /<a href="(.*?)">/ig.exec(t);
            // if things worked out captures are:
            // 0: whole string
            // 1: ENCODED server relative path
            if (m.length < 1) {
                // this indicates an error somewhere, but we have no way to meaningfully recover
                // perhaps the way the tags are stored has changed on the server? Check that first.
                Logger.write(`Could not parse default column value from '${t}'`, 2 /* Warning */);
                return null;
            }
            // return the parsed out values
            const subMatches = t.match(/<DefaultValue.*?<\/DefaultValue>/ig);
            const subTags = subMatches === null ? [] : subMatches.map(st => st.trim());
            subTags.map(st => {
                const sm = /<DefaultValue FieldName="(.*?)">(.*?)<\/DefaultValue>/ig.exec(st);
                // if things worked out captures are:
                // 0: whole string
                // 1: Field internal name
                // 2: Default value as string
                if (sm.length < 1) {
                    Logger.write(`Could not parse default column value from '${st}'`, 2 /* Warning */);
                }
                else {
                    defVals.push({
                        name: sm[1],
                        path: decodeURIComponent(m[1]),
                        value: sm[2],
                    });
                }
            });
            return defVals;
        }, []).filter(v => v !== null);
    });
};
_List.prototype.setDefaultColumnValues = function (defaults) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        // we need the field types from the list to map the values
        // eslint-disable-next-line max-len
        const fieldDefs = yield SharePointQueryableCollection(this, "fields").select("InternalName", "TypeAsString").filter("Hidden ne true")();
        // map the values into the right format and produce our xml elements
        const tags = defaults.map(fieldDefault => {
            const index = fieldDefs.findIndex(fd => fd.InternalName === fieldDefault.name);
            if (index < 0) {
                throw Error(`Field '${fieldDefault.name}' does not exist in the list. Please check the internal field name. Failed to set defaults.`);
            }
            const fieldDef = fieldDefs[index];
            let value = "";
            switch (fieldDef.TypeAsString) {
                case "Boolean":
                case "Currency":
                case "Text":
                case "DateTime":
                case "Number":
                case "Choice":
                case "User":
                    if (isArray(fieldDefault.value)) {
                        throw Error(`The type '${fieldDef.TypeAsString}' does not support multiple values.`);
                    }
                    value = `${fieldDefault.value}`;
                    break;
                case "MultiChoice":
                    if (isArray(fieldDefault.value)) {
                        value = fieldDefault.value.map(v => `${v}`).join(";");
                    }
                    else {
                        value = `${fieldDefault.value}`;
                    }
                    break;
                case "UserMulti":
                    if (isArray(fieldDefault.value)) {
                        value = fieldDefault.value.map(v => `${v}`).join(";#");
                    }
                    else {
                        value = `${fieldDefault.value}`;
                    }
                    break;
                case "Taxonomy":
                case "TaxonomyFieldType":
                    if (isArray(fieldDefault.value)) {
                        throw Error(`The type '${fieldDef.TypeAsString}' does not support multiple values.`);
                    }
                    else {
                        value = `${fieldDefault.value.wssId};#${fieldDefault.value.termName}|${fieldDefault.value.termId}`;
                    }
                    break;
                case "TaxonomyMulti":
                case "TaxonomyFieldTypeMulti":
                    if (isArray(fieldDefault.value)) {
                        value = fieldDefault.value.map(v => `${v.wssId};#${v.termName}|${v.termId}`).join(";#");
                    }
                    value = `${fieldDefault.value.wssId};#${fieldDefault.value.termName}|${fieldDefault.value.termId}`;
                    break;
            }
            return `<a href="${fieldDefault.path.replace(/ /gi, "%20")}"><DefaultValue FieldName="${fieldDefault.name}">${value}</DefaultValue></a>`;
        });
        const xml = `<MetadataDefaults>${tags.join("")}</MetadataDefaults>`;
        const pathPart = yield this.rootFolder.select("ServerRelativePath")();
        const webUrl = yield this.select("ParentWeb/Url").expand("ParentWeb")();
        const path = combine("/", pathPart.ServerRelativePath.DecodedUrl, "Forms");
        const baseFilePath = combine(webUrl.ParentWeb.Url, "_api/web", `getFolderByServerRelativePath(decodedUrl='${escapeQueryStrValue(path)}')`, "files");
        yield spPost(Folder(baseFilePath, "add(overwrite=true,url='client_LocationBasedDefaults.html')"), { body: xml });
        // finally we need to ensure this list has the right event receiver added
        const existingReceivers = yield this.eventReceivers.filter("ReceiverName eq 'LocationBasedMetadataDefaultsReceiver ItemAdded'").select("ReceiverId")();
        if (existingReceivers.length < 1) {
            yield spPost(List(this.eventReceivers, "add"), body({
                eventReceiverCreationInformation: {
                    EventType: 10001,
                    ReceiverAssembly: "Microsoft.Office.DocumentManagement, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c",
                    ReceiverClass: "Microsoft.Office.DocumentManagement.LocationBasedMetadataDefaultsReceiver",
                    ReceiverName: "LocationBasedMetadataDefaultsReceiver ItemAdded",
                    SequenceNumber: 1000,
                    Synchronization: 1,
                },
            }));
        }
    });
};
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/web.js







addProp(_Web, "lists", Lists);
addProp(_Web, "siteUserInfoList", List, "siteuserinfolist");
addProp(_Web, "defaultDocumentLibrary", List, "DefaultDocumentLibrary");
addProp(_Web, "customListTemplates", SharePointQueryableCollection, "getcustomlisttemplates");
_Web.prototype.getList = function (listRelativeUrl) {
    return List(this, `getList('${escapeQueryStrValue(listRelativeUrl)}')`);
};
_Web.prototype.getCatalog = function (type) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const data = yield this.clone(Web, `getcatalog(${type})`).select("Id").get();
        return List(odataUrlFrom(data));
    });
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/column-defaults/folder.js






_Folder.prototype.getDefaultColumnValues = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const folderProps = yield Folder(this, "Properties").select("vti_x005f_listname")();
        const { ServerRelativePath: serRelPath } = yield this.select("ServerRelativePath")();
        const web = Web(extractWebUrl(odataUrlFrom(folderProps)));
        const docLib = web.lists.getById(folderProps.vti_x005f_listname);
        // and we return the defaults associated with this folder's server relative path only
        // if you want all the defaults use list.getDefaultColumnValues()
        return (yield docLib.getDefaultColumnValues()).filter(v => v.path.toLowerCase() === serRelPath.DecodedUrl.toLowerCase());
    });
};
_Folder.prototype.setDefaultColumnValues = function (fieldDefaults, merge = true) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        // we start by figuring out where we are
        const folderProps = yield Folder(this, "Properties").select("vti_x005f_listname")();
        // now we create a web, list and batch to get some info we need
        const web = Web(extractWebUrl(odataUrlFrom(folderProps)));
        const docLib = web.lists.getById(folderProps.vti_x005f_listname);
        // we need the proper folder path
        const folderPath = (yield this.select("ServerRelativePath")()).ServerRelativePath.DecodedUrl;
        // at this point we should have all the defaults to update
        // and we need to get all the defaults to update the entire doc
        const existingDefaults = yield docLib.getDefaultColumnValues();
        // we filter all defaults to remove any associated with this folder if merge is false
        const filteredExistingDefaults = merge ? existingDefaults : existingDefaults.filter(f => f.path !== folderPath);
        // we update / add any new defaults from those passed to this method
        fieldDefaults.forEach(d => {
            const existing = filteredExistingDefaults.find(ed => ed.name === d.name && ed.path === folderPath);
            if (existing) {
                existing.value = d.value;
            }
            else {
                filteredExistingDefaults.push({
                    name: d.name,
                    path: folderPath,
                    value: d.value,
                });
            }
        });
        // after this operation filteredExistingDefaults should contain all the value we want to write to the file
        yield docLib.setDefaultColumnValues(filteredExistingDefaults);
    });
};
_Folder.prototype.clearDefaultColumnValues = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        yield this.setDefaultColumnValues([], false);
    });
};
//# sourceMappingURL=folder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/column-defaults/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/types.js







let _ContentTypes = class _ContentTypes extends _SharePointQueryableCollection {
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    addAvailableContentType(contentTypeId) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(ContentTypes, "addAvailableContentType"), body({ "contentTypeId": contentTypeId }));
            return {
                contentType: this.getById(data.id),
                data: data,
            };
        });
    }
    /**
     * Gets a ContentType by content type id
     * @param id The id of the content type to get, in the following format, for example: 0x010102
     */
    getById(id) {
        return tag.configure(ContentType(this).concat(`('${id}')`), "cts.getById");
    }
    /**
     * Adds a new content type to the collection
     *
     * @param id The desired content type id for the new content type (also determines the parent content type)
     * @param name The name of the content type
     * @param description The description of the content type
     * @param group The group in which to add the content type
     * @param additionalSettings Any additional settings to provide when creating the content type
     *
     */
    add(id, name, description = "", group = "Custom Content Types", additionalSettings = {}) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(Object.assign(metadata("SP.ContentType"), {
                "Description": description,
                "Group": group,
                "Id": { "StringValue": id },
                "Name": name,
            }, additionalSettings));
            const data = yield spPost(this, postBody);
            return { contentType: this.getById(data.id), data };
        });
    }
};
__decorate([
    tag("cts.addAvailableContentType")
], _ContentTypes.prototype, "addAvailableContentType", null);
__decorate([
    tag("cts.add")
], _ContentTypes.prototype, "add", null);
_ContentTypes = __decorate([
    defaultPath("contenttypes")
], _ContentTypes);

const ContentTypes = spInvokableFactory(_ContentTypes);
class _ContentType extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("ct");
    }
    /**
     * Gets the column (also known as field) references in the content type.
     */
    get fieldLinks() {
        return tag.configure(FieldLinks(this), "ct.fieldLinks");
    }
    /**
     * Gets a value that specifies the collection of fields for the content type.
     */
    get fields() {
        return tag.configure(SharePointQueryableCollection(this, "fields"), "ct.fields");
    }
    /**
     * Gets the parent content type of the content type.
     */
    get parent() {
        return tag.configure(ContentType(this, "parent"), "ct.parent");
    }
    /**
     * Gets a value that specifies the collection of workflow associations for the content type.
     */
    get workflowAssociations() {
        return tag.configure(SharePointQueryableCollection(this, "workflowAssociations"), "ct.workflowAssociations");
    }
}
const ContentType = spInvokableFactory(_ContentType);
let _FieldLinks = class _FieldLinks extends _SharePointQueryableCollection {
    /**
    *  Gets a FieldLink by GUID id
    *
    * @param id The GUID id of the field link
    */
    getById(id) {
        return tag.configure(FieldLink(this).concat(`(guid'${id}')`), "fls.getById");
    }
};
_FieldLinks = __decorate([
    defaultPath("fieldlinks")
], _FieldLinks);

const FieldLinks = spInvokableFactory(_FieldLinks);
class _FieldLink extends _SharePointQueryableInstance {
}
const FieldLink = spInvokableFactory(_FieldLink);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/web.js



addProp(_Web, "contentTypes", ContentTypes);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/item.js



addProp(_Item, "contentType", ContentType, "ContentType");
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/list.js



addProp(_List, "contentTypes", ContentTypes);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/types.js






let _Features = class _Features extends _SharePointQueryableCollection {
    /**
     * Adds (activates) the specified feature
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    add(id, force = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(Features, "add"), body({
                featdefScope: 0,
                featureId: id,
                force: force,
            }));
            return {
                data: data,
                feature: this.getById(id),
            };
        });
    }
    /**
     * Gets a feature from the collection with the specified guid
     *
     * @param id The Id of the feature (GUID)
     */
    getById(id) {
        const feature = Feature(this);
        feature.concat(`('${id}')`);
        return tag.configure(feature, "fes.getById");
    }
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    remove(id, force = false) {
        return spPost(this.clone(Features, "remove"), body({
            featureId: id,
            force: force,
        }));
    }
};
__decorate([
    tag("fes.add")
], _Features.prototype, "add", null);
__decorate([
    tag("fes.remove")
], _Features.prototype, "remove", null);
_Features = __decorate([
    defaultPath("features")
], _Features);

const Features = spInvokableFactory(_Features);
class _Feature extends _SharePointQueryableInstance {
    /**
     * Removes (deactivates) the feature
     *
     * @param force If true the feature deactivation will be forced
     */
    deactivate(force = false) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const removeDependency = this.addBatchDependency();
            const feature = yield Feature(this).select("DefinitionId")();
            const promise = this.getParent(Features, this.parentUrl, "", this.batch).remove(feature.DefinitionId, force);
            removeDependency();
            return promise;
        });
    }
}
__decorate([
    tag("fe.deactivate")
], _Feature.prototype, "deactivate", null);
const Feature = spInvokableFactory(_Feature);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/site.js



addProp(_Site, "features", Features);
//# sourceMappingURL=site.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/web.js



addProp(_Web, "features", Features);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/index.js



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/types.js








let _Fields = class _Fields extends _SharePointQueryableCollection {
    /**
     * Creates a field based on the specified schema
     *
     * @param xml A string or XmlSchemaFieldCreationInformation instance descrbing the field to create
     */
    createFieldAsXml(xml) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (typeof xml === "string") {
                xml = { SchemaXml: xml };
            }
            const postBody = body({
                "parameters": util_assign(metadata("SP.XmlSchemaFieldCreationInformation"), xml),
            });
            const data = yield spPost(this.clone(Fields, "createfieldasxml"), postBody);
            return {
                data,
                field: this.getById(data.Id),
            };
        });
    }
    /**
   * Gets a field from the collection by id
   *
   * @param id The Id of the list
   */
    getById(id) {
        return tag.configure(Field(this).concat(`('${id}')`), "fs.getById");
    }
    /**
   * Gets a field from the collection by title
   *
   * @param title The case-sensitive title of the field
   */
    getByTitle(title) {
        return tag.configure(Field(this, `getByTitle('${title}')`), "fs.getByTitle");
    }
    /**
   * Gets a field from the collection by using internal name or title
   *
   * @param name The case-sensitive internal name or title of the field
   */
    getByInternalNameOrTitle(name) {
        return tag.configure(Field(this, `getByInternalNameOrTitle('${name}')`), "fs.getByInternalNameOrTitle");
    }
    /**
   * Adds a new field to the collection
   *
   * @param title The new field's title
   * @param fieldType The new field's type (ex: SP.FieldText)
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    add(title, fieldType, properties) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(Object.assign(metadata(fieldType), {
                "Title": title,
            }, properties));
            if (!tag.isTagged(this)) {
                tag.configure(this, "fs.add");
            }
            const data = yield spPost(this.clone(Fields, null), postBody);
            return {
                data,
                field: this.getById(data.Id),
            };
        });
    }
    /**
   * Adds a new SP.FieldText to the collection
   *
   * @param title The field title
   * @param maxLength The maximum number of characters allowed in the value of the field.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addText(title, maxLength = 255, properties) {
        const props = {
            FieldTypeKind: 2,
            MaxLength: maxLength,
        };
        return this.add(title, "SP.FieldText", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldCalculated to the collection
   *
   * @param title The field title.
   * @param formula The formula for the field.
   * @param dateFormat The date and time format that is displayed in the field.
   * @param outputType Specifies the output format for the field. Represents a FieldType value.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addCalculated(title, formula, dateFormat, outputType = FieldTypes.Text, properties) {
        const props = {
            DateFormat: dateFormat,
            FieldTypeKind: 17,
            Formula: formula,
            OutputType: outputType,
        };
        return this.add(title, "SP.FieldCalculated", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldDateTime to the collection
   *
   * @param title The field title
   * @param displayFormat The format of the date and time that is displayed in the field.
   * @param calendarType Specifies the calendar type of the field.
   * @param friendlyDisplayFormat The type of friendly display format that is used in the field.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addDateTime(title, displayFormat = DateTimeFieldFormatType.DateOnly, calendarType = CalendarType.Gregorian, friendlyDisplayFormat = DateTimeFieldFriendlyFormatType.Unspecified, properties) {
        const props = {
            DateTimeCalendarType: calendarType,
            DisplayFormat: displayFormat,
            FieldTypeKind: 4,
            FriendlyDisplayFormat: friendlyDisplayFormat,
        };
        return this.add(title, "SP.FieldDateTime", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldNumber to the collection
   *
   * @param title The field title
   * @param minValue The field's minimum value
   * @param maxValue The field's maximum value
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addNumber(title, minValue, maxValue, properties) {
        let props = { FieldTypeKind: 9 };
        if (minValue !== undefined) {
            props = util_assign({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = util_assign({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldNumber", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldCurrency to the collection
   *
   * @param title The field title
   * @param minValue The field's minimum value
   * @param maxValue The field's maximum value
   * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addCurrency(title, minValue, maxValue, currencyLocalId = 1033, properties) {
        let props = {
            CurrencyLocaleId: currencyLocalId,
            FieldTypeKind: 10,
        };
        if (minValue !== undefined) {
            props = util_assign({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = util_assign({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldCurrency", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldMultiLineText to the collection
   *
   * @param title The field title
   * @param numberOfLines Specifies the number of lines of text to display for the field.
   * @param richText Specifies whether the field supports rich formatting.
   * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
   * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
   * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   *
   */
    addMultilineText(title, numberOfLines = 6, richText = true, restrictedMode = false, appendOnly = false, allowHyperlink = true, properties) {
        const props = {
            AllowHyperlink: allowHyperlink,
            AppendOnly: appendOnly,
            FieldTypeKind: 3,
            NumberOfLines: numberOfLines,
            RestrictedMode: restrictedMode,
            RichText: richText,
        };
        return this.add(title, "SP.FieldMultiLineText", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldUrl to the collection
   *
   * @param title The field title
   */
    addUrl(title, displayFormat = UrlFieldFormatType.Hyperlink, properties) {
        const props = {
            DisplayFormat: displayFormat,
            FieldTypeKind: 11,
        };
        return this.add(title, "SP.FieldUrl", util_assign(props, properties));
    }
    /** Adds a user field to the colleciton
  *
  * @param title The new field's title
  * @param selectionMode The selection mode of the field
  * @param selectionGroup Value that specifies the identifier of the SharePoint group whose members can be selected as values of the field
  * @param properties
  */
    addUser(title, selectionMode, properties) {
        const props = {
            FieldTypeKind: 20,
            SelectionMode: selectionMode,
        };
        return this.add(title, "SP.FieldUser", util_assign(props, properties));
    }
    /**
   * Adds a SP.FieldLookup to the collection
   *
   * @param title The new field's title
   * @param lookupListId The guid id of the list where the source of the lookup is found
   * @param lookupFieldName The internal name of the field in the source list
   * @param properties Set of additional properties to set on the new field
   */
    addLookup(title, lookupListId, lookupFieldName, properties) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const props = util_assign({
                FieldTypeKind: 7,
                LookupFieldName: lookupFieldName,
                LookupListId: lookupListId,
                Title: title,
            }, properties);
            const postBody = body({
                "parameters": util_assign(metadata("SP.FieldCreationInformation"), props),
            });
            const data = yield spPost(this.clone(Fields, "addfield"), postBody);
            return {
                data,
                field: this.getById(data.Id),
            };
        });
    }
    /**
   * Adds a new SP.FieldChoice to the collection
   *
   * @param title The field title.
   * @param choices The choices for the field.
   * @param format The display format of the available options for the field.
   * @param fillIn Specifies whether the field allows fill-in values.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addChoice(title, choices, format = ChoiceFieldFormatType.Dropdown, fillIn, properties) {
        const props = {
            Choices: {
                results: choices,
            },
            EditFormat: format,
            FieldTypeKind: 6,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldChoice", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldMultiChoice to the collection
   *
   * @param title The field title.
   * @param choices The choices for the field.
   * @param fillIn Specifies whether the field allows fill-in values.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addMultiChoice(title, choices, fillIn, properties) {
        const props = {
            Choices: {
                results: choices,
            },
            FieldTypeKind: 15,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldMultiChoice", util_assign(props, properties));
    }
    /**
   * Adds a new SP.FieldBoolean to the collection
   *
   * @param title The field title.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addBoolean(title, properties) {
        const props = {
            FieldTypeKind: 8,
        };
        return this.add(title, "SP.Field", util_assign(props, properties));
    }
    /**
  * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
  *
  * @param displayName The display name of the new field.
  * @param primaryLookupFieldId The guid of the primary Lookup Field.
  * @param showField Which field to show from the lookup list.
  */
    addDependentLookupField(displayName, primaryLookupFieldId, showField) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const path = `adddependentlookupfield(displayName='${displayName}', primarylookupfieldid='${primaryLookupFieldId}', showfield='${showField}')`;
            const data = yield spPost(this.clone(Fields, path));
            return {
                data,
                field: this.getById(data.Id),
            };
        });
    }
    /**
   * Adds a new SP.FieldLocation to the collection
   *
   * @param title The field title.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addLocation(title, properties) {
        const props = { FieldTypeKind: 33 };
        return this.add(title, "SP.FieldLocation", util_assign(props, properties));
    }
};
__decorate([
    tag("fs.createFieldAsXml")
], _Fields.prototype, "createFieldAsXml", null);
__decorate([
    tag("fs.addText")
], _Fields.prototype, "addText", null);
__decorate([
    tag("fs.addCalculated")
], _Fields.prototype, "addCalculated", null);
__decorate([
    tag("fs.addDateTime")
], _Fields.prototype, "addDateTime", null);
__decorate([
    tag("fs.addNumber")
], _Fields.prototype, "addNumber", null);
__decorate([
    tag("fs.addCurrency")
], _Fields.prototype, "addCurrency", null);
__decorate([
    tag("fs.addMultilineText")
], _Fields.prototype, "addMultilineText", null);
__decorate([
    tag("fs.addUrl")
], _Fields.prototype, "addUrl", null);
__decorate([
    tag("fs.addUser")
], _Fields.prototype, "addUser", null);
__decorate([
    tag("fs.addLookup")
], _Fields.prototype, "addLookup", null);
__decorate([
    tag("fs.addChoice")
], _Fields.prototype, "addChoice", null);
__decorate([
    tag("fs.addMultiChoice")
], _Fields.prototype, "addMultiChoice", null);
__decorate([
    tag("fs.addBoolean")
], _Fields.prototype, "addBoolean", null);
__decorate([
    tag("fs.addDependentLookupField")
], _Fields.prototype, "addDependentLookupField", null);
__decorate([
    tag("fs.addLocation")
], _Fields.prototype, "addLocation", null);
_Fields = __decorate([
    defaultPath("fields")
], _Fields);

const Fields = spInvokableFactory(_Fields);
class _Field extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("f");
    }
    /**
   * Updates this field instance with the supplied properties
   *
   * @param properties A plain object hash of values to update for the list
   * @param fieldType The type value such as SP.FieldLookup. Optional, looked up from the field if not provided
   */
    update(properties, fieldType) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            if (typeof fieldType === "undefined" || fieldType === null) {
                const info = yield Field(this).select("FieldTypeKind").configure({
                    headers: {
                        "Accept": "application/json",
                    },
                })();
                fieldType = info["odata.type"];
            }
            const req = body(util_assign(metadata(fieldType), properties), headers({ "X-HTTP-Method": "MERGE" }));
            const data = yield spPost(this, req);
            return {
                data,
                field: this,
            };
        });
    }
    /**
   * Sets the value of the ShowInDisplayForm property for this field.
   */
    setShowInDisplayForm(show) {
        return spPost(this.clone(Field, `setshowindisplayform(${show})`));
    }
    /**
   * Sets the value of the ShowInEditForm property for this field.
   */
    setShowInEditForm(show) {
        return spPost(this.clone(Field, `setshowineditform(${show})`));
    }
    /**
   * Sets the value of the ShowInNewForm property for this field.
   */
    setShowInNewForm(show) {
        return spPost(this.clone(Field, `setshowinnewform(${show})`));
    }
}
__decorate([
    tag("f.update")
], _Field.prototype, "update", null);
__decorate([
    tag("f.setShowInDisplayForm")
], _Field.prototype, "setShowInDisplayForm", null);
__decorate([
    tag("f.setShowInEditForm")
], _Field.prototype, "setShowInEditForm", null);
__decorate([
    tag("f.setShowInNewForm")
], _Field.prototype, "setShowInNewForm", null);
const Field = spInvokableFactory(_Field);
/**
 * Specifies the type of the field.
 */
var FieldTypes;
(function (FieldTypes) {
    FieldTypes[FieldTypes["Invalid"] = 0] = "Invalid";
    FieldTypes[FieldTypes["Integer"] = 1] = "Integer";
    FieldTypes[FieldTypes["Text"] = 2] = "Text";
    FieldTypes[FieldTypes["Note"] = 3] = "Note";
    FieldTypes[FieldTypes["DateTime"] = 4] = "DateTime";
    FieldTypes[FieldTypes["Counter"] = 5] = "Counter";
    FieldTypes[FieldTypes["Choice"] = 6] = "Choice";
    FieldTypes[FieldTypes["Lookup"] = 7] = "Lookup";
    FieldTypes[FieldTypes["Boolean"] = 8] = "Boolean";
    FieldTypes[FieldTypes["Number"] = 9] = "Number";
    FieldTypes[FieldTypes["Currency"] = 10] = "Currency";
    FieldTypes[FieldTypes["URL"] = 11] = "URL";
    FieldTypes[FieldTypes["Computed"] = 12] = "Computed";
    FieldTypes[FieldTypes["Threading"] = 13] = "Threading";
    FieldTypes[FieldTypes["Guid"] = 14] = "Guid";
    FieldTypes[FieldTypes["MultiChoice"] = 15] = "MultiChoice";
    FieldTypes[FieldTypes["GridChoice"] = 16] = "GridChoice";
    FieldTypes[FieldTypes["Calculated"] = 17] = "Calculated";
    FieldTypes[FieldTypes["File"] = 18] = "File";
    FieldTypes[FieldTypes["Attachments"] = 19] = "Attachments";
    FieldTypes[FieldTypes["User"] = 20] = "User";
    FieldTypes[FieldTypes["Recurrence"] = 21] = "Recurrence";
    FieldTypes[FieldTypes["CrossProjectLink"] = 22] = "CrossProjectLink";
    FieldTypes[FieldTypes["ModStat"] = 23] = "ModStat";
    FieldTypes[FieldTypes["Error"] = 24] = "Error";
    FieldTypes[FieldTypes["ContentTypeId"] = 25] = "ContentTypeId";
    FieldTypes[FieldTypes["PageSeparator"] = 26] = "PageSeparator";
    FieldTypes[FieldTypes["ThreadIndex"] = 27] = "ThreadIndex";
    FieldTypes[FieldTypes["WorkflowStatus"] = 28] = "WorkflowStatus";
    FieldTypes[FieldTypes["AllDayEvent"] = 29] = "AllDayEvent";
    FieldTypes[FieldTypes["WorkflowEventType"] = 30] = "WorkflowEventType";
})(FieldTypes || (FieldTypes = {}));
var DateTimeFieldFormatType;
(function (DateTimeFieldFormatType) {
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
})(DateTimeFieldFormatType || (DateTimeFieldFormatType = {}));
var DateTimeFieldFriendlyFormatType;
(function (DateTimeFieldFriendlyFormatType) {
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Unspecified"] = 0] = "Unspecified";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Disabled"] = 1] = "Disabled";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Relative"] = 2] = "Relative";
})(DateTimeFieldFriendlyFormatType || (DateTimeFieldFriendlyFormatType = {}));
/**
 * Specifies the control settings while adding a field.
 */
var AddFieldOptions;
(function (AddFieldOptions) {
    /**
   *  Specify that a new field added to the list must also be added to the default content type in the site collection
   */
    AddFieldOptions[AddFieldOptions["DefaultValue"] = 0] = "DefaultValue";
    /**
   * Specify that a new field added to the list must also be added to the default content type in the site collection.
   */
    AddFieldOptions[AddFieldOptions["AddToDefaultContentType"] = 1] = "AddToDefaultContentType";
    /**
   * Specify that a new field must not be added to any other content type
   */
    AddFieldOptions[AddFieldOptions["AddToNoContentType"] = 2] = "AddToNoContentType";
    /**
   *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
   */
    AddFieldOptions[AddFieldOptions["AddToAllContentTypes"] = 4] = "AddToAllContentTypes";
    /**
   * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
   */
    AddFieldOptions[AddFieldOptions["AddFieldInternalNameHint"] = 8] = "AddFieldInternalNameHint";
    /**
   * Specify that a new field that is added to the specified list must also be added to the default list view
   */
    AddFieldOptions[AddFieldOptions["AddFieldToDefaultView"] = 16] = "AddFieldToDefaultView";
    /**
   * Specify to confirm that no other field has the same display name
   */
    AddFieldOptions[AddFieldOptions["AddFieldCheckDisplayName"] = 32] = "AddFieldCheckDisplayName";
})(AddFieldOptions || (AddFieldOptions = {}));
var CalendarType;
(function (CalendarType) {
    CalendarType[CalendarType["Gregorian"] = 1] = "Gregorian";
    CalendarType[CalendarType["Japan"] = 3] = "Japan";
    CalendarType[CalendarType["Taiwan"] = 4] = "Taiwan";
    CalendarType[CalendarType["Korea"] = 5] = "Korea";
    CalendarType[CalendarType["Hijri"] = 6] = "Hijri";
    CalendarType[CalendarType["Thai"] = 7] = "Thai";
    CalendarType[CalendarType["Hebrew"] = 8] = "Hebrew";
    CalendarType[CalendarType["GregorianMEFrench"] = 9] = "GregorianMEFrench";
    CalendarType[CalendarType["GregorianArabic"] = 10] = "GregorianArabic";
    CalendarType[CalendarType["GregorianXLITEnglish"] = 11] = "GregorianXLITEnglish";
    CalendarType[CalendarType["GregorianXLITFrench"] = 12] = "GregorianXLITFrench";
    CalendarType[CalendarType["KoreaJapanLunar"] = 14] = "KoreaJapanLunar";
    CalendarType[CalendarType["ChineseLunar"] = 15] = "ChineseLunar";
    CalendarType[CalendarType["SakaEra"] = 16] = "SakaEra";
    CalendarType[CalendarType["UmAlQura"] = 23] = "UmAlQura";
})(CalendarType || (CalendarType = {}));
var UrlFieldFormatType;
(function (UrlFieldFormatType) {
    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
})(UrlFieldFormatType || (UrlFieldFormatType = {}));
var FieldUserSelectionMode;
(function (FieldUserSelectionMode) {
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleAndGroups"] = 1] = "PeopleAndGroups";
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleOnly"] = 0] = "PeopleOnly";
})(FieldUserSelectionMode || (FieldUserSelectionMode = {}));
var ChoiceFieldFormatType;
(function (ChoiceFieldFormatType) {
    ChoiceFieldFormatType[ChoiceFieldFormatType["Dropdown"] = 0] = "Dropdown";
    ChoiceFieldFormatType[ChoiceFieldFormatType["RadioButtons"] = 1] = "RadioButtons";
})(ChoiceFieldFormatType || (ChoiceFieldFormatType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/web.js



addProp(_Web, "fields", Fields);
addProp(_Web, "availablefields", Fields, "availablefields");
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/list.js



addProp(_List, "fields", Fields);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/folder.js



addProp(_Folder, "files", Files);
//# sourceMappingURL=folder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/item.js



addProp(_Item, "file", File, "file");
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/item.js



addProp(_Item, "folder", Folder, "folder");
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/list.js



addProp(_List, "rootFolder", Folder, "rootFolder");
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/web.js




addProp(_Web, "folders", Folders);
addProp(_Web, "rootFolder", Folder, "rootFolder");
_Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
    return Folder(this, `getFolderByServerRelativeUrl('${escapeQueryStrValue(folderRelativeUrl)}')`);
};
_Web.prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return Folder(this, `getFolderByServerRelativePath(decodedUrl='${escapeQueryStrValue(folderRelativeUrl)}')`);
};
_Web.prototype.getFolderById = function (uniqueId) {
    return Folder(this, `getFolderById('${uniqueId}')`);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/types.js




/**
 * Describes a collection of Form objects
 *
 */
let _Forms = class _Forms extends _SharePointQueryableCollection {
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    getById(id) {
        return tag.configure(Form(this).concat(`('${id}')`), "fos.getById");
    }
};
_Forms = __decorate([
    defaultPath("forms")
], _Forms);

const Forms = spInvokableFactory(_Forms);
/**
 * Describes a single of Form instance
 *
 */
class _Form extends _SharePointQueryableInstance {
}
const Form = spInvokableFactory(_Form);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/list.js



addProp(_List, "forms", Forms, "forms");
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/types.js





let _HubSites = class _HubSites extends _SharePointQueryableCollection {
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    getById(id) {
        return tag.configure(HubSite(this, `GetById?hubSiteId='${id}'`), "hss.getById");
    }
};
_HubSites = __decorate([
    defaultPath("_api/hubsites")
], _HubSites);

const HubSites = spInvokableFactory(_HubSites);
class _HubSite extends _SharePointQueryableInstance {
    /**
     * Gets the ISite instance associated with this hubsite
     */
    getSite() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const d = yield this.select("SiteUrl")();
            return Site(d.SiteUrl);
        });
    }
}
__decorate([
    tag("hs.getSite")
], _HubSite.prototype, "getSite", null);
const HubSite = spInvokableFactory(_HubSite);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/site.js



_Site.prototype.joinHubSite = function (siteId) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        yield spPost(this.clone(Site, `joinHubSite('${siteId}')`));
    });
};
_Site.prototype.registerHubSite = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        yield spPost(this.clone(Site, "registerHubSite"));
    });
};
_Site.prototype.unRegisterHubSite = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        yield spPost(this.clone(Site, "unRegisterHubSite"));
    });
};
//# sourceMappingURL=site.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/web.js



_Web.prototype.hubSiteData = function (forceRefresh = false) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const data = yield this.clone(Web, `hubSiteData(${forceRefresh})`)();
        if (typeof data === "string") {
            return JSON.parse(data);
        }
        return data;
    });
};
_Web.prototype.syncHubSiteTheme = function () {
    return spPost(this.clone(Web, "syncHubSiteTheme"));
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/index.js





Reflect.defineProperty(SPRest.prototype, "hubSites", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return HubSites(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/types.js








/**
 * Represents a collection of navigation nodes
 *
 */
class _NavigationNodes extends _SharePointQueryableCollection {
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    getById(id) {
        return tag.configure(NavigationNode(this).concat(`(${id})`), "nns.getById");
    }
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    add(title, url, visible = true) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(util_assign(metadata("SP.NavigationNode"), {
                IsVisible: visible,
                Title: title,
                Url: url,
            }));
            const data = yield spPost(this.clone(NavigationNodes, null), postBody);
            return {
                data,
                node: this.getById(data.Id),
            };
        });
    }
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    moveAfter(nodeId, previousNodeId) {
        const postBody = body({
            nodeId: nodeId,
            previousNodeId: previousNodeId,
        });
        return spPost(this.clone(NavigationNodes, "MoveAfter"), postBody);
    }
}
__decorate([
    tag("nns.add")
], _NavigationNodes.prototype, "add", null);
__decorate([
    tag("nns.moveAfter")
], _NavigationNodes.prototype, "moveAfter", null);
const NavigationNodes = spInvokableFactory(_NavigationNodes);
/**
 * Represents an instance of a navigation node
 *
 */
class _NavigationNode extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("nn");
    }
    /**
     * Represents the child nodes of this node
     */
    get children() {
        return tag.configure(NavigationNodes(this, "children"), "nn.children");
    }
    /**
     * Updates this node
     *
     * @param properties Properties used to update this node
     */
    update(properties) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(util_assign(metadata("SP.NavigationNode"), properties), headers({ "X-HTTP-Method": "MERGE" }));
            const data = yield spPost(this, postBody);
            return {
                data,
                node: this,
            };
        });
    }
}
__decorate([
    tag("nn.update")
], _NavigationNode.prototype, "update", null);
const NavigationNode = spInvokableFactory(_NavigationNode);
/**
 * Exposes the navigation components
 *
 */
let _Navigation = class _Navigation extends _SharePointQueryable {
    /**
     * Gets the quicklaunch navigation nodes for the current context
     *
     */
    get quicklaunch() {
        return tag.configure(NavigationNodes(this, "quicklaunch"), "n.quicklaunch");
    }
    /**
     * Gets the top bar navigation nodes for the current context
     *
     */
    get topNavigationBar() {
        return tag.configure(NavigationNodes(this, "topnavigationbar"), "n.topnavigationbar");
    }
};
_Navigation = __decorate([
    defaultPath("navigation")
], _Navigation);

const Navigation = spInvokableFactory(_Navigation);
/**
 * Represents the top level navigation service
 */
class _NavigationService extends _SharePointQueryable {
    constructor(path = null) {
        super("_api/navigation", path);
    }
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    getMenuState(menuNodeKey = null, depth = 10, mapProviderName = null, customProperties = null) {
        return spPost(NavigationService("MenuState"), body({
            customProperties,
            depth,
            mapProviderName,
            menuNodeKey,
        }));
    }
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    getMenuNodeKey(currentUrl, mapProviderName = null) {
        return spPost(NavigationService("MenuNodeKey"), body({
            currentUrl,
            mapProviderName,
        }));
    }
}
__decorate([
    tag("ns.getMenuState")
], _NavigationService.prototype, "getMenuState", null);
__decorate([
    tag("ns.getMenuNodeKey")
], _NavigationService.prototype, "getMenuNodeKey", null);
const NavigationService = (path) => new _NavigationService(path);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/web.js



addProp(_Web, "navigation", Navigation);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/index.js




Reflect.defineProperty(SPRest.prototype, "navigation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return NavigationService(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/profiles/types.js







class _Profiles extends _SharePointQueryableInstance {
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    constructor(baseUrl, path = "_api/sp.userprofiles.peoplemanager") {
        super(baseUrl, path);
        this.clientPeoplePickerQuery = (new ClientPeoplePickerQuery(baseUrl)).configureFrom(this);
        this.profileLoader = (new ProfileLoader(baseUrl)).configureFrom(this);
    }
    /**
     * The url of the edit profile page for the current user
     */
    get editProfileLink() {
        return this.clone(Profiles, "EditProfileLink").get();
    }
    /**
     * A boolean value that indicates whether the current user's "People I'm Following" list is public
     */
    get isMyPeopleListPublic() {
        return this.clone(Profiles, "IsMyPeopleListPublic").get();
    }
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowedBy(loginName) {
        const q = this.clone(Profiles, "amifollowedby(@v)");
        q.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return q.get();
    }
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowing(loginName) {
        const q = this.clone(Profiles, "amifollowing(@v)");
        q.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return q.get();
    }
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    getFollowedTags(maxCount = 20) {
        return this.clone(Profiles, `getfollowedtags(${maxCount})`).get();
    }
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    getFollowersFor(loginName) {
        const q = this.clone(Profiles, "getfollowersfor(@v)");
        q.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return q.get();
    }
    /**
     * Gets the people who are following the current user
     *
     */
    get myFollowers() {
        return SharePointQueryableCollection(this, "getmyfollowers");
    }
    /**
     * Gets user properties for the current user
     *
     */
    get myProperties() {
        return new _Profiles(this, "getmyproperties");
    }
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    getPeopleFollowedBy(loginName) {
        const q = this.clone(Profiles, "getpeoplefollowedby(@v)");
        q.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return q.get();
    }
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    getPropertiesFor(loginName) {
        const q = this.clone(Profiles, "getpropertiesfor(@v)");
        q.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return q.get();
    }
    /**
     * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
     *
     */
    get trendingTags() {
        const q = this.clone(Profiles, null);
        q.concat(".gettrendingtags");
        return q.get();
    }
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    getUserProfilePropertyFor(loginName, propertyName) {
        const q = this.clone(Profiles, `getuserprofilepropertyfor(accountname=@v, propertyname='${propertyName}')`);
        q.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return q.get();
    }
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    hideSuggestion(loginName) {
        const q = this.clone(Profiles, "hidesuggestion(@v)");
        q.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return spPost(q);
    }
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    isFollowing(follower, followee) {
        const q = this.clone(Profiles, null);
        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
        q.query.set("@v", `'${encodeURIComponent(follower)}'`);
        q.query.set("@y", `'${encodeURIComponent(followee)}'`);
        return q.get();
    }
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    setMyProfilePic(profilePicSource) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => tslib_es6_awaiter(this, void 0, void 0, function* () {
                const buffer = e.target.result;
                try {
                    yield spPost(Profiles(this, "setmyprofilepicture"), { body: buffer });
                    resolve();
                }
                catch (e) {
                    reject(e);
                }
            });
            reader.readAsArrayBuffer(profilePicSource);
        });
    }
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    setSingleValueProfileProperty(accountName, propertyName, propertyValue) {
        return spPost(this.clone(Profiles, "SetSingleValueProfileProperty"), body({
            accountName: accountName,
            propertyName: propertyName,
            propertyValue: propertyValue,
        }));
    }
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    setMultiValuedProfileProperty(accountName, propertyName, propertyValues) {
        return spPost(this.clone(Profiles, "SetMultiValuedProfileProperty"), body({
            accountName: accountName,
            propertyName: propertyName,
            propertyValues: propertyValues,
        }));
    }
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    createPersonalSiteEnqueueBulk(...emails) {
        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
    }
    /**
     * Gets the user profile of the site owner
     *
     */
    get ownerUserProfile() {
        return this.profileLoader.ownerUserProfile;
    }
    /**
     * Gets the user profile for the current user
     */
    get userProfile() {
        return this.profileLoader.userProfile;
    }
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    createPersonalSite(interactiveRequest = false) {
        return this.profileLoader.createPersonalSite(interactiveRequest);
    }
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    shareAllSocialData(share) {
        return this.profileLoader.shareAllSocialData(share);
    }
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    clientPeoplePickerResolveUser(queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerResolveUser(queryParams);
    }
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    clientPeoplePickerSearchUser(queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerSearchUser(queryParams);
    }
}
const Profiles = spInvokableFactory(_Profiles);
let ProfileLoader = class ProfileLoader extends _SharePointQueryable {
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    createPersonalSiteEnqueueBulk(emails) {
        return spPost(this.clone(ProfileLoaderFactory, "createpersonalsiteenqueuebulk", false), body({ "emailIDs": emails }));
    }
    /**
     * Gets the user profile of the site owner.
     *
     */
    get ownerUserProfile() {
        let q = this.getParent(ProfileLoaderFactory, this.parentUrl, "_api/sp.userprofiles.profileloader.getowneruserprofile");
        if (this.hasBatch) {
            q = q.inBatch(this.batch);
        }
        return spPost(q);
    }
    /**
     * Gets the user profile of the current user.
     *
     */
    get userProfile() {
        return spPost(this.clone(ProfileLoaderFactory, "getuserprofile"));
    }
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    createPersonalSite(interactiveRequest = false) {
        return spPost(this.clone(ProfileLoaderFactory, `getuserprofile/createpersonalsiteenque(${interactiveRequest})`));
    }
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    shareAllSocialData(share) {
        return spPost(this.clone(ProfileLoaderFactory, `getuserprofile/shareallsocialdata(${share})`));
    }
};
ProfileLoader = __decorate([
    defaultPath("_api/sp.userprofiles.profileloader.getprofileloader")
], ProfileLoader);
const ProfileLoaderFactory = (baseUrl, path) => {
    return new ProfileLoader(baseUrl, path);
};
let ClientPeoplePickerQuery = class ClientPeoplePickerQuery extends _SharePointQueryable {
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    clientPeoplePickerResolveUser(queryParams) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = this.clone(ClientPeoplePickerFactory, null);
            q.concat(".clientpeoplepickerresolveuser");
            const res = yield spPost(q, this.getBodyFrom(queryParams));
            return JSON.parse(typeof res === "object" ? res.ClientPeoplePickerResolveUser : res);
        });
    }
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    clientPeoplePickerSearchUser(queryParams) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const q = this.clone(ClientPeoplePickerFactory, null);
            q.concat(".clientpeoplepickersearchuser");
            const res = yield spPost(q, this.getBodyFrom(queryParams));
            return JSON.parse(typeof res === "object" ? res.ClientPeoplePickerSearchUser : res);
        });
    }
    /**
     * Creates ClientPeoplePickerQueryParameters request body
     *
     * @param queryParams The query parameters to create request body
     */
    getBodyFrom(queryParams) {
        return body({ "queryParams": util_assign(metadata("SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters"), queryParams) });
    }
};
ClientPeoplePickerQuery = __decorate([
    defaultPath("_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface")
], ClientPeoplePickerQuery);
const ClientPeoplePickerFactory = (baseUrl, path) => {
    return new ClientPeoplePickerQuery(baseUrl, path);
};
/**
 * Specifies the originating zone of a request received.
 */
var UrlZone;
(function (UrlZone) {
    /**
     * Specifies the default zone used for requests unless another zone is specified.
     */
    UrlZone[UrlZone["DefaultZone"] = 0] = "DefaultZone";
    /**
     * Specifies an intranet zone.
     */
    UrlZone[UrlZone["Intranet"] = 1] = "Intranet";
    /**
     * Specifies an Internet zone.
     */
    UrlZone[UrlZone["Internet"] = 2] = "Internet";
    /**
     * Specifies a custom zone.
     */
    UrlZone[UrlZone["Custom"] = 3] = "Custom";
    /**
     * Specifies an extranet zone.
     */
    UrlZone[UrlZone["Extranet"] = 4] = "Extranet";
})(UrlZone || (UrlZone = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/profiles/index.js



Reflect.defineProperty(SPRest.prototype, "profiles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Profiles(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/types.js







let _RegionalSettings = class _RegionalSettings extends _SharePointQueryableInstance {
    /**
     * Gets the collection of languages used in a server farm.
     * ** Please use getInstalledLanguages instead of this method **
     */
    get installedLanguages() {
        console.warn("Deprecated: RegionalSettings.installedLanguages is deprecated, please use RegionalSettings.getInstalledLanguages");
        return tag.configure(SharePointQueryableCollection(this, "installedlanguages"), "rs.installedLanguages");
    }
    /**
     * Gets time zone
     */
    get timeZone() {
        return tag.configure(TimeZone(this), "rs.tz");
    }
    /**
     * Gets time zones
     */
    get timeZones() {
        return tag.configure(TimeZones(this), "rs.tzs");
    }
    /**
     * Gets the collection of languages used in a server farm.
     */
    getInstalledLanguages() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const results = yield tag.configure(SharePointQueryableCollection(this, "installedlanguages"), "rs.getInstalledLanguages")();
            return results.Items;
        });
    }
};
_RegionalSettings = __decorate([
    defaultPath("regionalsettings")
], _RegionalSettings);

const RegionalSettings = spInvokableFactory(_RegionalSettings);
let _TimeZone = class _TimeZone extends _SharePointQueryableInstance {
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    utcToLocalTime(utcTime) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            let dateIsoString;
            if (typeof utcTime === "string") {
                dateIsoString = utcTime;
            }
            else {
                dateIsoString = utcTime.toISOString();
            }
            const res = yield spPost(this.clone(TimeZone, `utctolocaltime('${dateIsoString}')`));
            return hOP(res, "UTCToLocalTime") ? res.UTCToLocalTime : res;
        });
    }
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    localTimeToUTC(localTime) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            let dateIsoString;
            if (typeof localTime === "string") {
                dateIsoString = localTime;
            }
            else {
                dateIsoString = dateAdd(localTime, "minute", localTime.getTimezoneOffset() * -1).toISOString();
            }
            const res = yield spPost(this.clone(TimeZone, `localtimetoutc('${dateIsoString}')`));
            return hOP(res, "LocalTimeToUTC") ? res.LocalTimeToUTC : res;
        });
    }
};
__decorate([
    tag("tz.utcToLocalTime")
], _TimeZone.prototype, "utcToLocalTime", null);
__decorate([
    tag("tz.localTimeToUTC")
], _TimeZone.prototype, "localTimeToUTC", null);
_TimeZone = __decorate([
    defaultPath("timezone")
], _TimeZone);

const TimeZone = spInvokableFactory(_TimeZone);
let _TimeZones = class _TimeZones extends _SharePointQueryableCollection {
    /**
     * Gets an TimeZone by id (see: https://msdn.microsoft.com/en-us/library/office/jj247008.aspx)
     *
     * @param id The integer id of the timezone to retrieve
     */
    getById(id) {
        // do the post and merge the result into a TimeZone instance so the data and methods are available
        return spPost(this.clone(TimeZones, `GetById(${id})`).usingParser(spODataEntity(TimeZone)));
    }
};
__decorate([
    tag("tzs.getById")
], _TimeZones.prototype, "getById", null);
_TimeZones = __decorate([
    defaultPath("timezones")
], _TimeZones);

const TimeZones = spInvokableFactory(_TimeZones);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/funcs.js



function getValueForUICultureBinder(propName) {
    return function (cultureName) {
        return spPost(this.clone(SharePointQueryable, `${propName}/getValueForUICulture`), body({ cultureName }));
    };
}
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/web.js




addProp(_Web, "regionalSettings", RegionalSettings);
_Web.prototype.titleResource = getValueForUICultureBinder("titleResource");
_Web.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/types.js








let _UserCustomActions = class _UserCustomActions extends _SharePointQueryableCollection {
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    getById(id) {
        return tag.configure(UserCustomAction(this).concat(`('${id}')`), "ucas.getById");
    }
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     */
    add(properties) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this, body(util_assign(metadata("SP.UserCustomAction"), properties)));
            return {
                action: this.getById(data.Id),
                data,
            };
        });
    }
    /**
     * Deletes all user custom actions in the collection
     */
    clear() {
        return spPost(this.clone(UserCustomActions, "clear"));
    }
};
__decorate([
    tag("ucas.add")
], _UserCustomActions.prototype, "add", null);
__decorate([
    tag("ucas.clear")
], _UserCustomActions.prototype, "clear", null);
_UserCustomActions = __decorate([
    defaultPath("usercustomactions")
], _UserCustomActions);

const UserCustomActions = spInvokableFactory(_UserCustomActions);
class _UserCustomAction extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("uca");
        /**
        * Updates this user custom action with the supplied properties
        *
        * @param properties An information object of property names and values to update for this user custom action
        */
        this.update = this._update("SP.UserCustomAction", (data) => ({ data, action: this }));
    }
}
const UserCustomAction = spInvokableFactory(_UserCustomAction);
var UserCustomActionRegistrationType;
(function (UserCustomActionRegistrationType) {
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["None"] = 0] = "None";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["List"] = 1] = "List";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ContentType"] = 2] = "ContentType";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ProgId"] = 3] = "ProgId";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["FileType"] = 4] = "FileType";
})(UserCustomActionRegistrationType || (UserCustomActionRegistrationType = {}));
var UserCustomActionScope;
(function (UserCustomActionScope) {
    UserCustomActionScope[UserCustomActionScope["Unknown"] = 0] = "Unknown";
    UserCustomActionScope[UserCustomActionScope["Site"] = 2] = "Site";
    UserCustomActionScope[UserCustomActionScope["Web"] = 3] = "Web";
    UserCustomActionScope[UserCustomActionScope["List"] = 4] = "List";
})(UserCustomActionScope || (UserCustomActionScope = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/user-custom-actions.js


_UserCustomAction.prototype.titleResource = getValueForUICultureBinder("titleResource");
_UserCustomAction.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=user-custom-actions.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/list.js


_List.prototype.titleResource = getValueForUICultureBinder("titleResource");
_List.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/field.js


_Field.prototype.titleResource = getValueForUICultureBinder("titleResource");
_Field.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=field.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/content-type.js


_ContentType.prototype.titleResource = getValueForUICultureBinder("titleResource");
_ContentType.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=content-type.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/related-items/types.js







let _RelatedItemManager = class _RelatedItemManager extends _SharePointQueryable {
    getRelatedItems(sourceListName, sourceItemId) {
        const query = this.clone(RelatedItemManager, null);
        query.concat(".GetRelatedItems");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    }
    getPageOneRelatedItems(sourceListName, sourceItemId) {
        const query = this.clone(RelatedItemManager, null);
        query.concat(".GetPageOneRelatedItems");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    }
    addSingleLink(sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemID, targetWebUrl, tryAddReverseLink = false) {
        const query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLink");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemID,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    }
    addSingleLinkToUrl(sourceListName, sourceItemId, targetItemUrl, tryAddReverseLink = false) {
        const query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLinkToUrl");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            TargetItemUrl: targetItemUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    }
    addSingleLinkFromUrl(sourceItemUrl, targetListName, targetItemId, tryAddReverseLink = false) {
        const query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLinkFromUrl");
        return spPost(query, body({
            SourceItemUrl: sourceItemUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TryAddReverseLink: tryAddReverseLink,
        }));
    }
    deleteSingleLink(sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemId, targetWebUrl, tryDeleteReverseLink = false) {
        const query = this.clone(RelatedItemManager, null);
        query.concat(".DeleteSingleLink");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryDeleteReverseLink: tryDeleteReverseLink,
        }));
    }
};
__decorate([
    tag("rim.getRelatedItems")
], _RelatedItemManager.prototype, "getRelatedItems", null);
__decorate([
    tag("rim.getPageOneRelatedItems")
], _RelatedItemManager.prototype, "getPageOneRelatedItems", null);
__decorate([
    tag("rim.addSingleLink")
], _RelatedItemManager.prototype, "addSingleLink", null);
__decorate([
    tag("rim.ToUrl")
], _RelatedItemManager.prototype, "addSingleLinkToUrl", null);
__decorate([
    tag("rim.FromUrl")
], _RelatedItemManager.prototype, "addSingleLinkFromUrl", null);
__decorate([
    tag("rim.deleteSingleLink")
], _RelatedItemManager.prototype, "deleteSingleLink", null);
_RelatedItemManager = __decorate([
    defaultPath("_api/SP.RelatedItemManager")
], _RelatedItemManager);

const RelatedItemManager = (url) => new _RelatedItemManager(extractWebUrl(typeof url === "string" ? url : url.toUrl()));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/related-items/index.js

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/query.js








const funcs = new Map([
    ["text", "Querytext"],
    ["template", "QueryTemplate"],
    ["sourceId", "SourceId"],
    ["trimDuplicatesIncludeId", ""],
    ["startRow", ""],
    ["rowLimit", ""],
    ["rankingModelId", ""],
    ["rowsPerPage", ""],
    ["selectProperties", ""],
    ["culture", ""],
    ["timeZoneId", ""],
    ["refinementFilters", ""],
    ["refiners", ""],
    ["hiddenConstraints", ""],
    ["sortList", ""],
    ["timeout", ""],
    ["hithighlightedProperties", ""],
    ["clientType", ""],
    ["personalizationData", ""],
    ["resultsURL", ""],
    ["queryTag", ""],
    ["properties", ""],
    ["queryTemplatePropertiesUrl", ""],
    ["reorderingRules", ""],
    ["hitHighlightedMultivaluePropertyLimit", ""],
    ["collapseSpecification", ""],
    ["uiLanguage", ""],
    ["desiredSnippetLength", ""],
    ["maxSnippetLength", ""],
    ["summaryLength", ""],
]);
const props = new Map([]);
function toPropCase(str) {
    return str.replace(/^(.)/, ($1) => $1.toUpperCase());
}
/**
 * Creates a new instance of the SearchQueryBuilder
 *
 * @param queryText Initial query text
 * @param _query Any initial query configuration
 */
function SearchQueryBuilder(queryText = "", _query = {}) {
    return new Proxy({
        query: Object.assign({
            Querytext: queryText,
        }, _query),
    }, {
        get(self, propertyKey, proxy) {
            const pk = propertyKey.toString();
            if (pk === "toSearchQuery") {
                return () => self.query;
            }
            if (funcs.has(pk)) {
                return (...value) => {
                    const mappedPk = funcs.get(pk);
                    self.query[mappedPk.length > 0 ? mappedPk : toPropCase(pk)] = value.length > 1 ? value : value[0];
                    return proxy;
                };
            }
            const propKey = props.has(pk) ? props.get(pk) : toPropCase(pk);
            self.query[propKey] = true;
            return proxy;
        },
    });
}
const queryRegex = /_api\/search\/postquery$/i;
/**
 * Describes the search API
 *
 */
let _Search = class _Search extends _SharePointQueryableInstance {
    /**
     * @returns Promise
     */
    execute(queryInit) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const query = this.parseQuery(queryInit);
            const postBody = body({
                request: util_assign(metadata("Microsoft.Office.Server.Search.REST.SearchRequest"), Object.assign({}, query, {
                    HitHighlightedProperties: this.fixArrProp(query.HitHighlightedProperties),
                    Properties: this.fixArrProp(query.Properties),
                    RefinementFilters: this.fixArrProp(query.RefinementFilters),
                    ReorderingRules: this.fixArrProp(query.ReorderingRules),
                    SelectProperties: this.fixArrProp(query.SelectProperties),
                    SortList: this.fixArrProp(query.SortList),
                })),
            });
            // if we are using caching with this search request, then we need to handle some work upfront to enable that
            if (this.data.useCaching) {
                // force use of the cache for this request if .usingCaching was called
                this._forceCaching = true;
                // because all the requests use the same url they would collide in the cache we use a special key
                const cacheKey = `PnPjs.SearchWithCaching(${getHashCode(postBody.body)})`;
                if (objectDefinedNotNull(this.data.cachingOptions)) {
                    // if our key ends in the postquery url we overwrite it
                    if (queryRegex.test(this.data.cachingOptions.key)) {
                        this.data.cachingOptions.key = cacheKey;
                    }
                }
                else {
                    this.data.cachingOptions = new CachingOptions(cacheKey);
                }
            }
            const data = yield spPost(this, postBody);
            return new SearchResults(data, this.toUrl(), query);
        });
    }
    /**
     * Fix array property
     *
     * @param prop property to fix for container struct
     */
    fixArrProp(prop) {
        if (typeof prop === "undefined") {
            return ({ results: [] });
        }
        return { results: isArray(prop) ? prop : [prop] };
    }
    /**
     * Translates one of the query initializers into a SearchQuery instance
     *
     * @param query
     */
    parseQuery(query) {
        let finalQuery;
        if (typeof query === "string") {
            finalQuery = { Querytext: query };
        }
        else if (query.toSearchQuery) {
            finalQuery = query.toSearchQuery();
        }
        else {
            finalQuery = query;
        }
        return finalQuery;
    }
};
__decorate([
    tag("se.execute")
], _Search.prototype, "execute", null);
_Search = __decorate([
    defaultPath("_api/search/postquery")
], _Search);

const Search = (baseUrl, options = {}, runtime = DefaultRuntime) => (queryInit) => {
    return (new _Search(baseUrl)).configure(options).setRuntime(runtime).execute(queryInit);
};
class SearchResults {
    constructor(rawResponse, _url, _query, _raw = null, _primary = null) {
        this._url = _url;
        this._query = _query;
        this._raw = _raw;
        this._primary = _primary;
        this._url = this._url.replace(queryRegex, "");
        this._raw = rawResponse.postquery ? rawResponse.postquery : rawResponse;
    }
    get ElapsedTime() {
        var _a;
        return ((_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.ElapsedTime) || 0;
    }
    get RowCount() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.RowCount) || 0;
    }
    get TotalRows() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.TotalRows) || 0;
    }
    get TotalRowsIncludingDuplicates() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.TotalRowsIncludingDuplicates) || 0;
    }
    get RawSearchResults() {
        return this._raw;
    }
    get PrimarySearchResults() {
        var _a, _b, _c, _d;
        if (this._primary === null) {
            this._primary = this.formatSearchResults(((_d = (_c = (_b = (_a = this._raw) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.Table) === null || _d === void 0 ? void 0 : _d.Rows) || null);
        }
        return this._primary;
    }
    /**
     * Gets a page of results
     *
     * @param pageNumber Index of the page to return. Used to determine StartRow
     * @param pageSize Optional, items per page (default = 10)
     */
    getPage(pageNumber, pageSize) {
        // if we got all the available rows we don't have another page
        if (this.TotalRows < this.RowCount) {
            return Promise.resolve(null);
        }
        // if pageSize is supplied, then we use that regardless of any previous values
        // otherwise get the previous RowLimit or default to 10
        const rows = pageSize !== undefined ? pageSize : hOP(this._query, "RowLimit") ? this._query.RowLimit : 10;
        const query = util_assign(this._query, {
            RowLimit: rows,
            StartRow: rows * (pageNumber - 1),
        });
        // we have reached the end
        if (query.StartRow > this.TotalRows) {
            return Promise.resolve(null);
        }
        return Search(this._url)(query);
    }
    /**
     * Formats a search results array
     *
     * @param rawResults The array to process
     */
    formatSearchResults(rawResults) {
        const results = new Array();
        if (typeof (rawResults) === "undefined" || rawResults == null) {
            return [];
        }
        const tempResults = rawResults.results ? rawResults.results : rawResults;
        for (const tempResult of tempResults) {
            const cells = tempResult.Cells.results ? tempResult.Cells.results : tempResult.Cells;
            results.push(cells.reduce((res, cell) => {
                Reflect.defineProperty(res, cell.Key, {
                    configurable: false,
                    enumerable: true,
                    value: cell.Value,
                    writable: false,
                });
                return res;
            }, {}));
        }
        return results;
    }
}
//# sourceMappingURL=query.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/suggest.js





let _Suggest = class _Suggest extends _SharePointQueryableInstance {
    execute(query) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            this.mapQueryToQueryString(query);
            const response = yield this.get();
            const mapper = hOP(response, "suggest") ? (s_1) => response.suggest[s_1].results : (s_2) => response[s_2];
            return {
                PeopleNames: mapper("PeopleNames"),
                PersonalResults: mapper("PersonalResults"),
                Queries: mapper("Queries"),
            };
        });
    }
    mapQueryToQueryString(query) {
        const setProp = (q) => (checkProp) => (sp) => {
            if (hOP(q, checkProp)) {
                this.query.set(sp, q[checkProp].toString());
            }
        };
        this.query.set("querytext", `'${query.querytext}'`);
        const querySetter = setProp(query);
        querySetter("count")("inumberofquerysuggestions");
        querySetter("personalCount")("inumberofresultsuggestions");
        querySetter("preQuery")("fprequerysuggestions");
        querySetter("hitHighlighting")("fhithighlighting");
        querySetter("capitalize")("fcapitalizefirstletters");
        querySetter("culture")("culture");
        querySetter("stemming")("enablestemming");
        querySetter("includePeople")("showpeoplenamesuggestions");
        querySetter("queryRules")("enablequeryrules");
        querySetter("prefixMatch")("fprefixmatchallterms");
    }
};
__decorate([
    tag("su.execute")
], _Suggest.prototype, "execute", null);
_Suggest = __decorate([
    defaultPath("_api/search/suggest")
], _Suggest);

const Suggest = (baseUrl, options = {}, runtime = DefaultRuntime) => (query) => {
    return (new _Suggest(baseUrl)).configure(options).setRuntime(runtime).execute(query);
};
//# sourceMappingURL=suggest.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/types.js
/**
 * defines the SortDirection enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
})(SortDirection || (SortDirection = {}));
/**
 * defines the ReorderingRuleMatchType  enum
 */
var ReorderingRuleMatchType;
(function (ReorderingRuleMatchType) {
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultContainsKeyword"] = 0] = "ResultContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleContainsKeyword"] = 1] = "TitleContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleMatchesKeyword"] = 2] = "TitleMatchesKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlStartsWith"] = 3] = "UrlStartsWith";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlExactlyMatches"] = 4] = "UrlExactlyMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ContentTypeIs"] = 5] = "ContentTypeIs";
    ReorderingRuleMatchType[ReorderingRuleMatchType["FileExtensionMatches"] = 6] = "FileExtensionMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultHasTag"] = 7] = "ResultHasTag";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ManualCondition"] = 8] = "ManualCondition";
})(ReorderingRuleMatchType || (ReorderingRuleMatchType = {}));
/**
 * Specifies the type value for the property
 */
var QueryPropertyValueType;
(function (QueryPropertyValueType) {
    QueryPropertyValueType[QueryPropertyValueType["None"] = 0] = "None";
    QueryPropertyValueType[QueryPropertyValueType["StringType"] = 1] = "StringType";
    QueryPropertyValueType[QueryPropertyValueType["Int32Type"] = 2] = "Int32Type";
    QueryPropertyValueType[QueryPropertyValueType["BooleanType"] = 3] = "BooleanType";
    QueryPropertyValueType[QueryPropertyValueType["StringArrayType"] = 4] = "StringArrayType";
    QueryPropertyValueType[QueryPropertyValueType["UnSupportedType"] = 5] = "UnSupportedType";
})(QueryPropertyValueType || (QueryPropertyValueType = {}));
class SearchBuiltInSourceId {
}
SearchBuiltInSourceId.Documents = "e7ec8cee-ded8-43c9-beb5-436b54b31e84";
SearchBuiltInSourceId.ItemsMatchingContentType = "5dc9f503-801e-4ced-8a2c-5d1237132419";
SearchBuiltInSourceId.ItemsMatchingTag = "e1327b9c-2b8c-4b23-99c9-3730cb29c3f7";
SearchBuiltInSourceId.ItemsRelatedToCurrentUser = "48fec42e-4a92-48ce-8363-c2703a40e67d";
SearchBuiltInSourceId.ItemsWithSameKeywordAsThisItem = "5c069288-1d17-454a-8ac6-9c642a065f48";
SearchBuiltInSourceId.LocalPeopleResults = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
SearchBuiltInSourceId.LocalReportsAndDataResults = "203fba36-2763-4060-9931-911ac8c0583b";
SearchBuiltInSourceId.LocalSharePointResults = "8413cd39-2156-4e00-b54d-11efd9abdb89";
SearchBuiltInSourceId.LocalVideoResults = "78b793ce-7956-4669-aa3b-451fc5defebf";
SearchBuiltInSourceId.Pages = "5e34578e-4d08-4edc-8bf3-002acf3cdbcc";
SearchBuiltInSourceId.Pictures = "38403c8c-3975-41a8-826e-717f2d41568a";
SearchBuiltInSourceId.Popular = "97c71db1-58ce-4891-8b64-585bc2326c12";
SearchBuiltInSourceId.RecentlyChangedItems = "ba63bbae-fa9c-42c0-b027-9a878f16557c";
SearchBuiltInSourceId.RecommendedItems = "ec675252-14fa-4fbe-84dd-8d098ed74181";
SearchBuiltInSourceId.Wiki = "9479bf85-e257-4318-b5a8-81a180f5faa1";
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/index.js







SPRest.prototype.search = function (query) {
    return this.childConfigHook(({ options, baseUrl, runtime }) => {
        return Search(baseUrl, options, runtime)(query);
    });
};
SPRest.prototype.searchWithCaching = function (query, cacheOptions) {
    return this.childConfigHook(({ options, baseUrl, runtime }) => {
        return (new _Search(baseUrl)).configure(options).setRuntime(runtime).usingCaching(cacheOptions).execute(query);
    });
};
SPRest.prototype.searchSuggest = function (query) {
    return this.childConfigHook(({ options, baseUrl, runtime }) => {
        return Suggest(baseUrl, options, runtime)(typeof query === "string" ? { querytext: query } : query);
    });
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/types.js









let _SiteUsers = class _SiteUsers extends _SharePointQueryableCollection {
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    getById(id) {
        return tag.configure(SiteUser(this, `getById(${id})`), "sus.getById");
    }
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    getByEmail(email) {
        return tag.configure(SiteUser(this, `getByEmail('${email}')`), "sus.getByEmail");
    }
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    getByLoginName(loginName) {
        return tag.configure(SiteUser(this).concat(`('!@v::${encodeURIComponent(loginName)}')`), "sus.getByLoginName");
    }
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    removeById(id) {
        return spPost(this.clone(SiteUsers, `removeById(${id})`));
    }
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    removeByLoginName(loginName) {
        const o = this.clone(SiteUsers, "removeByLoginName(@v)");
        o.query.set("@v", `'${encodeURIComponent(loginName)}'`);
        return spPost(o);
    }
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    add(loginName) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            yield spPost(this, body(util_assign(metadata("SP.User"), { LoginName: loginName })));
            return this.getByLoginName(loginName);
        });
    }
};
__decorate([
    tag("sus.remId")
], _SiteUsers.prototype, "removeById", null);
__decorate([
    tag("sus.remLoginName")
], _SiteUsers.prototype, "removeByLoginName", null);
__decorate([
    tag("sus.add")
], _SiteUsers.prototype, "add", null);
_SiteUsers = __decorate([
    defaultPath("siteusers")
], _SiteUsers);

const SiteUsers = spInvokableFactory(_SiteUsers);
/**
 * Describes a single user
 *
 */
class _SiteUser extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("su");
        /**
        * Updates this user instance with the supplied properties
        *
        * @param properties A plain object of property names and values to update for the user
        */
        this.update = this._update("SP.User", data => ({ data, user: this }));
    }
    /**
     * Gets the groups for this user
     *
     */
    get groups() {
        return tag.configure(SiteGroups(this, "groups"), "su.groups");
    }
}
const SiteUser = spInvokableFactory(_SiteUser);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/types.js









let _SiteGroups = class _SiteGroups extends _SharePointQueryableCollection {
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    getById(id) {
        return tag.configure(SiteGroup(this).concat(`(${id})`), "sgs.getById");
    }
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    add(properties) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(util_assign(metadata("SP.Group"), properties));
            const data = yield spPost(tag.configure(this, "sgs.add"), postBody);
            return {
                data,
                group: this.getById(data.Id),
            };
        });
    }
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    getByName(groupName) {
        return tag.configure(SiteGroup(this, `getByName('${groupName}')`), "sgs.getByName");
    }
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    removeById(id) {
        return spPost(this.clone(SiteGroups, `removeById('${id}')`));
    }
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    removeByLoginName(loginName) {
        return spPost(this.clone(SiteGroups, `removeByLoginName('${loginName}')`));
    }
};
__decorate([
    tag("sgs.removeById")
], _SiteGroups.prototype, "removeById", null);
__decorate([
    tag("sgs.removeByLoginName")
], _SiteGroups.prototype, "removeByLoginName", null);
_SiteGroups = __decorate([
    defaultPath("sitegroups")
], _SiteGroups);

const SiteGroups = spInvokableFactory(_SiteGroups);
class _SiteGroup extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        /**
         * Updates the group with the given property values
         *
         * @param props The group properties object of property names and values to be set for the group
         */
        this.update = this._update("SP.Group", (d, p) => {
            const retGroup = hOP(p, "Title") ? this.getParent(SiteGroup, this.parentUrl, `getByName('${p.Title}')`) : SiteGroup(this);
            return {
                data: d,
                group: retGroup,
            };
        });
    }
    /**
     * Gets the users for this group
     *
     */
    get users() {
        return tag.configure(SiteUsers(this, "users"), "sg.users");
    }
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    setUserAsOwner(userId) {
        return spPost(this.clone(SiteGroup, `SetUserAsOwner(${userId})`));
    }
}
__decorate([
    tag("sg.setUserAsOwner")
], _SiteGroup.prototype, "setUserAsOwner", null);
const SiteGroup = spInvokableFactory(_SiteGroup);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/types.js









/**
 * Describes a set of role assignments for the current scope
 *
 */
let _RoleAssignments = class _RoleAssignments extends _SharePointQueryableCollection {
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    getById(id) {
        return RoleAssignment(this).concat(`(${id})`);
    }
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    add(principalId, roleDefId) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            yield spPost(this.clone(RoleAssignments, `addroleassignment(principalid=${principalId}, roledefid=${roleDefId})`));
        });
    }
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    remove(principalId, roleDefId) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            yield spPost(this.clone(RoleAssignments, `removeroleassignment(principalid=${principalId}, roledefid=${roleDefId})`));
        });
    }
};
_RoleAssignments = __decorate([
    defaultPath("roleassignments")
], _RoleAssignments);

const RoleAssignments = spInvokableFactory(_RoleAssignments);
/**
 * Describes a role assignment
 *
 */
class _RoleAssignment extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("ra");
    }
    /**
     * Gets the groups that directly belong to the access control list (ACL) for this securable object
     *
     */
    get groups() {
        return tag.configure(SiteGroups(this, "groups"), "ra.groups");
    }
    /**
     * Gets the role definition bindings for this role assignment
     *
     */
    get bindings() {
        return SharePointQueryableCollection(this, "roledefinitionbindings");
    }
}
const RoleAssignment = spInvokableFactory(_RoleAssignment);
/**
 * Describes a collection of role definitions
 *
 */
let _RoleDefinitions = class _RoleDefinitions extends _SharePointQueryableCollection {
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    getById(id) {
        return RoleDefinition(this, `getById(${id})`);
    }
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    getByName(name) {
        return RoleDefinition(this, `getbyname('${name}')`);
    }
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    getByType(roleTypeKind) {
        return RoleDefinition(this, `getbytype(${roleTypeKind})`);
    }
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition, high and low values need to be converted to string
     *
     */
    add(name, description, order, basePermissions) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body({
                BasePermissions: { "High": basePermissions.High.toString(), "Low": basePermissions.Low.toString() },
                Description: description,
                Name: name,
                Order: order,
                __metadata: { "type": "SP.RoleDefinition" },
            });
            const data = yield spPost(this, postBody);
            return {
                data: data,
                definition: this.getById(data.Id),
            };
        });
    }
};
_RoleDefinitions = __decorate([
    defaultPath("roledefinitions")
], _RoleDefinitions);

const RoleDefinitions = spInvokableFactory(_RoleDefinitions);
/**
 * Describes a role definition
 *
 */
class _RoleDefinition extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("rd");
    }
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    update(properties) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const s = ["BasePermissions"];
            if (hOP(properties, s[0]) !== undefined) {
                properties[s[0]] = util_assign(metadata(`SP.${s[0]}`), properties[s[0]]);
                const bpObj = properties[s[0]];
                bpObj.High = bpObj.High.toString();
                bpObj.Low = bpObj.Low.toString();
            }
            const postBody = body(util_assign(metadata("SP.RoleDefinition"), properties), headers({ "X-HTTP-Method": "MERGE" }));
            const data = yield spPost(this, postBody);
            let definition = this;
            if (hOP(properties, "Name")) {
                const parent = this.getParent(RoleDefinitions, this.parentUrl, "");
                definition = parent.getByName(properties.Name);
            }
            return {
                data,
                definition,
            };
        });
    }
}
const RoleDefinition = spInvokableFactory(_RoleDefinition);
var PermissionKind;
(function (PermissionKind) {
    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["EmptyMask"] = 0] = "EmptyMask";
    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["ViewListItems"] = 1] = "ViewListItems";
    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["AddListItems"] = 2] = "AddListItems";
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    PermissionKind[PermissionKind["EditListItems"] = 3] = "EditListItems";
    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    PermissionKind[PermissionKind["DeleteListItems"] = 4] = "DeleteListItems";
    /**
     * Approve a minor version of a list item or document.
     */
    PermissionKind[PermissionKind["ApproveItems"] = 5] = "ApproveItems";
    /**
     * View the source of documents with server-side file handlers.
     */
    PermissionKind[PermissionKind["OpenItems"] = 6] = "OpenItems";
    /**
     * View past versions of a list item or document.
     */
    PermissionKind[PermissionKind["ViewVersions"] = 7] = "ViewVersions";
    /**
     * Delete past versions of a list item or document.
     */
    PermissionKind[PermissionKind["DeleteVersions"] = 8] = "DeleteVersions";
    /**
     * Discard or check in a document which is checked out to another user.
     */
    PermissionKind[PermissionKind["CancelCheckout"] = 9] = "CancelCheckout";
    /**
     * Create, change, and delete personal views of lists.
     */
    PermissionKind[PermissionKind["ManagePersonalViews"] = 10] = "ManagePersonalViews";
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    PermissionKind[PermissionKind["ManageLists"] = 12] = "ManageLists";
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    PermissionKind[PermissionKind["ViewFormPages"] = 13] = "ViewFormPages";
    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessList"] = 14] = "AnonymousSearchAccessList";
    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    PermissionKind[PermissionKind["Open"] = 17] = "Open";
    /**
     * View pages in a Site.
     */
    PermissionKind[PermissionKind["ViewPages"] = 18] = "ViewPages";
    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    PermissionKind[PermissionKind["AddAndCustomizePages"] = 19] = "AddAndCustomizePages";
    /**
     * Apply a theme or borders to the entire Site.
     */
    PermissionKind[PermissionKind["ApplyThemeAndBorder"] = 20] = "ApplyThemeAndBorder";
    /**
     * Apply a style sheet (.css file) to the Site.
     */
    PermissionKind[PermissionKind["ApplyStyleSheets"] = 21] = "ApplyStyleSheets";
    /**
     * View reports on Site usage.
     */
    PermissionKind[PermissionKind["ViewUsageData"] = 22] = "ViewUsageData";
    /**
     * Create a Site using Self-Service Site Creation.
     */
    PermissionKind[PermissionKind["CreateSSCSite"] = 23] = "CreateSSCSite";
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    PermissionKind[PermissionKind["ManageSubwebs"] = 24] = "ManageSubwebs";
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    PermissionKind[PermissionKind["CreateGroups"] = 25] = "CreateGroups";
    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    PermissionKind[PermissionKind["ManagePermissions"] = 26] = "ManagePermissions";
    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    PermissionKind[PermissionKind["BrowseDirectories"] = 27] = "BrowseDirectories";
    /**
     * View information about users of the Site.
     */
    PermissionKind[PermissionKind["BrowseUserInfo"] = 28] = "BrowseUserInfo";
    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    PermissionKind[PermissionKind["AddDelPrivateWebParts"] = 29] = "AddDelPrivateWebParts";
    /**
     * Update Web Parts to display personalized information.
     */
    PermissionKind[PermissionKind["UpdatePersonalWebParts"] = 30] = "UpdatePersonalWebParts";
    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    PermissionKind[PermissionKind["ManageWeb"] = 31] = "ManageWeb";
    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessWebLists"] = 32] = "AnonymousSearchAccessWebLists";
    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    PermissionKind[PermissionKind["UseClientIntegration"] = 37] = "UseClientIntegration";
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    PermissionKind[PermissionKind["UseRemoteAPIs"] = 38] = "UseRemoteAPIs";
    /**
     * Manage alerts for all users of the Site.
     */
    PermissionKind[PermissionKind["ManageAlerts"] = 39] = "ManageAlerts";
    /**
     * Create e-mail alerts.
     */
    PermissionKind[PermissionKind["CreateAlerts"] = 40] = "CreateAlerts";
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    PermissionKind[PermissionKind["EditMyUserInfo"] = 41] = "EditMyUserInfo";
    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    PermissionKind[PermissionKind["EnumeratePermissions"] = 63] = "EnumeratePermissions";
    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["FullMask"] = 65] = "FullMask";
})(PermissionKind || (PermissionKind = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/funcs.js





/**
* Gets the effective permissions for the user supplied
*
* @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
*/
function getUserEffectivePermissions(loginName) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const q = this.clone(SharePointQueryableInstance, "getUserEffectivePermissions(@user)");
        q.query.set("@user", `'${encodeURIComponent(loginName)}'`);
        const r = yield q.get();
        // handle verbose mode
        return hOP(r, "GetUserEffectivePermissions") ? r.GetUserEffectivePermissions : r;
    });
}
/**
 * Gets the effective permissions for the current user
 */
function getCurrentUserEffectivePermissions() {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const q = this.clone(SharePointQueryable, "EffectiveBasePermissions");
        return q.get().then(r => {
            // handle verbose mode
            return hOP(r, "EffectiveBasePermissions") ? r.EffectiveBasePermissions : r;
        });
    });
}
/**
 * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
 *
 * @param copyRoleAssignments If true the permissions are copied from the current parent scope
 * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
 */
function breakRoleInheritance(copyRoleAssignments = false, clearSubscopes = false) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        yield spPost(this.clone(SharePointQueryable, `breakroleinheritance(copyroleassignments=${copyRoleAssignments}, clearsubscopes=${clearSubscopes})`));
    });
}
/**
 * Removes the local role assignments so that it re-inherit role assignments from the parent object.
 *
 */
function resetRoleInheritance() {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        yield spPost(this.clone(SharePointQueryable, "resetroleinheritance"));
    });
}
/**
 * Determines if a given user has the appropriate permissions
 *
 * @param loginName The user to check
 * @param permission The permission being checked
 */
function userHasPermissions(loginName, permission) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const perms = yield getUserEffectivePermissions.call(this, loginName);
        return this.hasPermissions(perms, permission);
    });
}
/**
 * Determines if the current user has the requested permissions
 *
 * @param permission The permission we wish to check
 */
function currentUserHasPermissions(permission) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const perms = yield getCurrentUserEffectivePermissions.call(this);
        return this.hasPermissions(perms, permission);
    });
}
/**
 * Taken from sp.js, checks the supplied permissions against the mask
 *
 * @param value The security principal's permissions on the given object
 * @param perm The permission checked against the value
 */
/* eslint-disable no-bitwise */
function hasPermissions(value, perm) {
    if (!perm) {
        return true;
    }
    if (perm === PermissionKind.FullMask) {
        return (value.High & 32767) === 32767 && value.Low === 65535;
    }
    perm = perm - 1;
    let num = 1;
    if (perm >= 0 && perm < 32) {
        num = num << perm;
        return 0 !== (value.Low & num);
    }
    else if (perm >= 32 && perm < 64) {
        num = num << perm - 32;
        return 0 !== (value.High & num);
    }
    return false;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/item.js





addProp(_Item, "roleAssignments", RoleAssignments);
addProp(_Item, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
_Item.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
_Item.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
_Item.prototype.breakRoleInheritance = breakRoleInheritance;
_Item.prototype.resetRoleInheritance = resetRoleInheritance;
_Item.prototype.userHasPermissions = userHasPermissions;
_Item.prototype.currentUserHasPermissions = currentUserHasPermissions;
_Item.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/list.js





addProp(_List, "roleAssignments", RoleAssignments);
addProp(_List, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
_List.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
_List.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
_List.prototype.breakRoleInheritance = breakRoleInheritance;
_List.prototype.resetRoleInheritance = resetRoleInheritance;
_List.prototype.userHasPermissions = userHasPermissions;
_List.prototype.currentUserHasPermissions = currentUserHasPermissions;
_List.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/web.js





addProp(_Web, "roleDefinitions", RoleDefinitions);
addProp(_Web, "roleAssignments", RoleAssignments);
addProp(_Web, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
_Web.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
_Web.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
_Web.prototype.breakRoleInheritance = breakRoleInheritance;
_Web.prototype.resetRoleInheritance = resetRoleInheritance;
_Web.prototype.userHasPermissions = userHasPermissions;
_Web.prototype.currentUserHasPermissions = currentUserHasPermissions;
_Web.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/types.js
/**
 * Indicates the role of the sharing link
 */
var SharingRole;
(function (SharingRole) {
    SharingRole[SharingRole["None"] = 0] = "None";
    SharingRole[SharingRole["View"] = 1] = "View";
    SharingRole[SharingRole["Edit"] = 2] = "Edit";
    SharingRole[SharingRole["Owner"] = 3] = "Owner";
})(SharingRole || (SharingRole = {}));
var SPSharedObjectType;
(function (SPSharedObjectType) {
    SPSharedObjectType[SPSharedObjectType["Unknown"] = 0] = "Unknown";
    SPSharedObjectType[SPSharedObjectType["File"] = 1] = "File";
    SPSharedObjectType[SPSharedObjectType["Folder"] = 2] = "Folder";
    SPSharedObjectType[SPSharedObjectType["Item"] = 3] = "Item";
    SPSharedObjectType[SPSharedObjectType["List"] = 4] = "List";
    SPSharedObjectType[SPSharedObjectType["Web"] = 5] = "Web";
    SPSharedObjectType[SPSharedObjectType["Max"] = 6] = "Max";
})(SPSharedObjectType || (SPSharedObjectType = {}));
var SharingDomainRestrictionMode;
(function (SharingDomainRestrictionMode) {
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["None"] = 0] = "None";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["AllowList"] = 1] = "AllowList";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["BlockList"] = 2] = "BlockList";
})(SharingDomainRestrictionMode || (SharingDomainRestrictionMode = {}));
var SharingOperationStatusCode;
(function (SharingOperationStatusCode) {
    /**
     * The share operation completed without errors.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CompletedSuccessfully"] = 0] = "CompletedSuccessfully";
    /**
     * The share operation completed and generated requests for access.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessRequestsQueued"] = 1] = "AccessRequestsQueued";
    /**
     * The share operation failed as there were no resolved users.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NoResolvedUsers"] = -1] = "NoResolvedUsers";
    /**
     * The share operation failed due to insufficient permissions.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessDenied"] = -2] = "AccessDenied";
    /**
     * The share operation failed when attempting a cross site share, which is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CrossSiteRequestNotSupported"] = -3] = "CrossSiteRequestNotSupported";
    /**
     * The sharing operation failed due to an unknown error.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["UnknowError"] = -4] = "UnknowError";
    /**
     * The text you typed is too long. Please shorten it.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["EmailBodyTooLong"] = -5] = "EmailBodyTooLong";
    /**
     * The maximum number of unique scopes in the list has been exceeded.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ListUniqueScopesExceeded"] = -6] = "ListUniqueScopesExceeded";
    /**
     * The share operation failed because a sharing capability is disabled in the site.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CapabilityDisabled"] = -7] = "CapabilityDisabled";
    /**
     * The specified object for the share operation is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ObjectNotSupported"] = -8] = "ObjectNotSupported";
    /**
     * A SharePoint group cannot contain another SharePoint group.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NestedGroupsNotSupported"] = -9] = "NestedGroupsNotSupported";
})(SharingOperationStatusCode || (SharingOperationStatusCode = {}));
var SharingLinkKind;
(function (SharingLinkKind) {
    /**
     * Uninitialized link
     */
    SharingLinkKind[SharingLinkKind["Uninitialized"] = 0] = "Uninitialized";
    /**
     * Direct link to the object being shared
     */
    SharingLinkKind[SharingLinkKind["Direct"] = 1] = "Direct";
    /**
     * Organization-shareable link to the object being shared with view permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationView"] = 2] = "OrganizationView";
    /**
     * Organization-shareable link to the object being shared with edit permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationEdit"] = 3] = "OrganizationEdit";
    /**
     * View only anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousView"] = 4] = "AnonymousView";
    /**
     * Read/Write anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousEdit"] = 5] = "AnonymousEdit";
    /**
     * Flexible sharing Link where properties can change without affecting link URL
     */
    SharingLinkKind[SharingLinkKind["Flexible"] = 6] = "Flexible";
})(SharingLinkKind || (SharingLinkKind = {}));
var RoleType;
(function (RoleType) {
    RoleType[RoleType["None"] = 0] = "None";
    RoleType[RoleType["Guest"] = 1] = "Guest";
    RoleType[RoleType["Reader"] = 2] = "Reader";
    RoleType[RoleType["Contributor"] = 3] = "Contributor";
    RoleType[RoleType["WebDesigner"] = 4] = "WebDesigner";
    RoleType[RoleType["Administrator"] = 5] = "Administrator";
})(RoleType || (RoleType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/funcs.js











/**
 * Shares an object based on the supplied options
 *
 * @param options The set of options to send to the ShareObject method
 * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
 */
function shareObject(o, options, bypass = false) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        if (bypass) {
            // if the bypass flag is set send the supplied parameters directly to the service
            return sendShareObjectRequest(o, options);
        }
        // extend our options with some defaults
        options = util_assign(options, {
            group: null,
            includeAnonymousLinkInEmail: false,
            propagateAcl: false,
            useSimplifiedRoles: true,
        }, true);
        const roleValue = yield getRoleValue(options.role, options.group);
        // handle the multiple input types
        if (!Array.isArray(options.loginNames)) {
            options.loginNames = [options.loginNames];
        }
        const userStr = jsS(options.loginNames.map(Key => ({ Key })));
        let postBody = {
            peoplePickerInput: userStr,
            roleValue: roleValue,
            url: options.url,
        };
        if (options.emailData !== undefined && options.emailData !== null) {
            postBody = util_assign(postBody, {
                emailBody: options.emailData.body,
                emailSubject: options.emailData.subject !== undefined ? options.emailData.subject : "Shared with you.",
                sendEmail: true,
            });
        }
        return sendShareObjectRequest(o, postBody);
    });
}
/**
 * Gets a sharing link for the supplied
 *
 * @param kind The kind of link to share
 * @param expiration The optional expiration for this link
 */
function getShareLink(kind, expiration = null) {
    // date needs to be an ISO string or null
    const expString = expiration !== null ? expiration.toISOString() : null;
    // clone using the factory and send the request
    const o = tag.configure(this.clone(SharePointQueryableInstance, "shareLink"), "sh.getShareLink");
    return spPost(o, body({
        request: {
            createLink: true,
            emailData: null,
            settings: {
                expiration: expString,
                linkKind: kind,
            },
        },
    }));
}
/**
 * Checks Permissions on the list of Users and returns back role the users have on the Item.
 *
 * @param recipients The array of Entities for which Permissions need to be checked.
 */
function checkPermissions(recipients) {
    const o = tag.configure(this.clone(SharePointQueryableInstance, "checkPermissions"), "sh.checkPermissions");
    return spPost(o, body({ recipients }));
}
/**
 * Get Sharing Information.
 *
 * @param request The SharingInformationRequest Object.
 * @param expands Expand more fields.
 *
 */
function getSharingInformation(request = null, expands = []) {
    const o = tag.configure(this.clone(SharePointQueryableInstance, "getSharingInformation"), "sh.getSharingInformation");
    return spPost(o.expand(...expands), body({ request }));
}
/**
 * Gets the sharing settings of an item.
 *
 * @param useSimplifiedRoles Determines whether to use simplified roles.
 */
function getObjectSharingSettings(useSimplifiedRoles = true) {
    const o = tag.configure(this.clone(SharePointQueryableInstance, "getObjectSharingSettings"), "sh.getObjectSharingSettings");
    return spPost(o, body({ useSimplifiedRoles }));
}
/**
 * Unshares this object
 */
function unshareObject() {
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "unshareObject"), "sh.unshareObject"));
}
/**
 * Deletes a link by type
 *
 * @param kind Deletes a sharing link by the kind of link
 */
function deleteLinkByKind(linkKind) {
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "deleteLinkByKind"), "sh.deleteLinkByKind"), body({ linkKind }));
}
/**
 * Removes the specified link to the item.
 *
 * @param kind The kind of link to be deleted.
 * @param shareId
 */
function unshareLink(linkKind, shareId = emptyGuid) {
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "unshareLink"), "sh.unshareLink"), body({ linkKind, shareId }));
}
/**
 * Shares this instance with the supplied users
 *
 * @param loginNames Resolved login names to share
 * @param role The role
 * @param requireSignin True to require the user is authenticated, otherwise false
 * @param propagateAcl True to apply this share to all children
 * @param emailData If supplied an email will be sent with the indicated properties
 */
function shareWith(o, loginNames, role, requireSignin = false, propagateAcl = false, emailData) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        // handle the multiple input types
        if (!Array.isArray(loginNames)) {
            loginNames = [loginNames];
        }
        const userStr = jsS(loginNames.map(login => {
            return { Key: login };
        }));
        const roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
        // start by looking up the role definition id we need to set the roleValue
        // remove need to reference Web here, which created a circular build issue
        const w = SharePointQueryableCollection("_api/web", "roledefinitions");
        const def = yield w.select("Id").filter(`RoleTypeKind eq ${roleFilter}`).get();
        if (!Array.isArray(def) || def.length < 1) {
            throw Error(`Could not locate a role defintion with RoleTypeKind ${roleFilter}`);
        }
        let postBody = {
            includeAnonymousLinkInEmail: requireSignin,
            peoplePickerInput: userStr,
            propagateAcl: propagateAcl,
            roleValue: `role:${def[0].Id}`,
            useSimplifiedRoles: true,
        };
        if (emailData !== undefined) {
            postBody = util_assign(postBody, {
                emailBody: emailData.body,
                emailSubject: emailData.subject !== undefined ? emailData.subject : "",
                sendEmail: true,
            });
        }
        return spPost(tag.configure(o.clone(SharePointQueryableInstance, "shareObject"), "sh.shareWith"), body(postBody));
    });
}
function sendShareObjectRequest(o, options) {
    const w = tag.configure(Web(extractWebUrl(o.toUrl()), "/_api/SP.Web.ShareObject"), "sh.sendShareObjectRequest");
    return spPost(w.expand("UsersWithAccessRequests", "GroupsSharedWith"), body(options));
}
/**
 * Calculates the roleValue string used in the sharing query
 *
 * @param role The Sharing Role
 * @param group The Group type
 */
function getRoleValue(role, group) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        // we will give group precedence, because we had to make a choice
        if (group !== undefined && group !== null) {
            switch (group) {
                case RoleType.Contributor: {
                    const g1 = yield Web("_api/web", "associatedmembergroup").select("Id")();
                    return `group: ${g1.Id}`;
                }
                case RoleType.Reader:
                case RoleType.Guest: {
                    const g2 = yield Web("_api/web", "associatedvisitorgroup").select("Id")();
                    return `group: ${g2.Id}`;
                }
                default:
                    throw Error("Could not determine role value for supplied value. Contributor, Reader, and Guest are supported");
            }
        }
        else {
            const roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
            const def = yield RoleDefinitions("_api/web").select("Id").top(1).filter(`RoleTypeKind eq ${roleFilter}`)();
            if (def.length < 1) {
                throw Error("Could not locate associated role definition for supplied role. Edit and View are supported");
            }
            return `role: ${def[0].Id}`;
        }
    });
}
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/file.js



_File.prototype.shareWith = function (loginNames, role = SharingRole.View, requireSignin = false, emailData) {
    return shareWith(this, loginNames, role, requireSignin, false, emailData);
};
_File.prototype.getShareLink = getShareLink;
_File.prototype.checkSharingPermissions = checkPermissions;
_File.prototype.getSharingInformation = getSharingInformation;
_File.prototype.getObjectSharingSettings = getObjectSharingSettings;
_File.prototype.unshare = unshareObject;
_File.prototype.deleteSharingLinkByKind = deleteLinkByKind;
_File.prototype.unshareLink = unshareLink;
//# sourceMappingURL=file.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/folder.js



_Folder.prototype.shareWith = function (loginNames, role = SharingRole.View, requireSignin = false, shareEverything = false, emailData) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.shareWith(loginNames, role, requireSignin, shareEverything, emailData);
    });
};
_Folder.prototype.getShareLink = function (kind, expiration = null) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.getShareLink(kind, expiration);
    });
};
_Folder.prototype.checkSharingPermissions = function (recipients) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.checkSharingPermissions(recipients);
    });
};
_Folder.prototype.getSharingInformation = function (request, expands) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.getSharingInformation(request, expands);
    });
};
_Folder.prototype.getObjectSharingSettings = function (useSimplifiedRoles = true) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.getObjectSharingSettings(useSimplifiedRoles);
    });
};
_Folder.prototype.unshare = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.unshare();
    });
};
_Folder.prototype.deleteSharingLinkByKind = function (kind) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.deleteSharingLinkByKind(kind);
    });
};
_Folder.prototype.unshareLink = function (kind, shareId) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        const shareable = yield this.getShareable();
        dependency();
        return shareable.unshareLink(kind, shareId);
    });
};
//# sourceMappingURL=folder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/item.js



_Item.prototype.shareWith = function (loginNames, role = SharingRole.View, requireSignin = false, emailData) {
    return shareWith(this, loginNames, role, requireSignin, false, emailData);
};
_Item.prototype.getShareLink = getShareLink;
_Item.prototype.checkSharingPermissions = checkPermissions;
_Item.prototype.getSharingInformation = getSharingInformation;
_Item.prototype.getObjectSharingSettings = getObjectSharingSettings;
_Item.prototype.unshare = unshareObject;
_Item.prototype.deleteSharingLinkByKind = deleteLinkByKind;
_Item.prototype.unshareLink = unshareLink;
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/web.js









/**
 * Shares this web with the supplied users
 * @param loginNames The resolved login names to share
 * @param role The role to share this web
 * @param emailData Optional email data
 */
_Web.prototype.shareWith = function (loginNames, role = SharingRole.View, emailData) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const dependency = this.addBatchDependency();
        // remove need to reference Web here, which created a circular build issue
        const web = new _SharePointQueryableInstance(extractWebUrl(this.toUrl()), "/_api/web/url");
        const url = yield web.get();
        dependency();
        return this.shareObject(combine(url, "/_layouts/15/aclinv.aspx?forSharing=1&mbypass=1"), loginNames, role, emailData);
    });
};
/**
 * Provides direct access to the static web.ShareObject method
 *
 * @param url The url to share
 * @param loginNames Resolved loginnames string[] of a single login name string
 * @param roleValue Role value
 * @param emailData Optional email data
 * @param groupId Optional group id
 * @param propagateAcl
 * @param includeAnonymousLinkInEmail
 * @param useSimplifiedRoles
 */
_Web.prototype.shareObject = function (url, loginNames, role, emailData, group, propagateAcl = false, includeAnonymousLinkInEmail = false, useSimplifiedRoles = true) {
    return shareObject(this, {
        emailData: emailData,
        group: group,
        includeAnonymousLinkInEmail: includeAnonymousLinkInEmail,
        loginNames: loginNames,
        propagateAcl: propagateAcl,
        role: role,
        url: url,
        useSimplifiedRoles: useSimplifiedRoles,
    });
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
_Web.prototype.shareObjectRaw = function (options) {
    return shareObject(this, options, true);
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
_Web.prototype.unshareObject = function (url) {
    return spPost(Web(this, "unshareObject"), body({ url }));
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/index.js





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/types.js







class _SiteDesigns extends _SharePointQueryable {
    constructor(baseUrl, methodName = "") {
        const url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        super(extractWebUrl(url), `_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.${methodName}`);
    }
    execute(props) {
        return spPost(this, body(props, headers({ "Content-Type": "application/json;charset=utf-8" })));
    }
    /**
     * Creates a new site design available to users when they create a new site from the SharePoint home page.
     *
     * @param creationInfo A sitedesign creation information object
     */
    createSiteDesign(creationInfo) {
        return this.clone(SiteDesignsCloneFactory, "CreateSiteDesign").execute({ info: creationInfo });
    }
    /**
     * Applies a site design to an existing site collection.
     *
     * @param siteDesignId The ID of the site design to apply.
     * @param webUrl The URL of the site collection where you want to apply the site design.
     */
    applySiteDesign(siteDesignId, webUrl) {
        return this.clone(SiteDesignsCloneFactory, "ApplySiteDesign").execute({ siteDesignId: siteDesignId, "webUrl": webUrl });
    }
    /**
     * Gets the list of available site designs
     */
    getSiteDesigns() {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesigns").execute({});
    }
    /**
     * Gets information about a specific site design.
     * @param id The ID of the site design to get information about.
     */
    getSiteDesignMetadata(id) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignMetadata").execute({ id: id });
    }
    /**
     * Updates a site design with new values. In the REST call, all parameters are optional except the site script Id.
     * If you had previously set the IsDefault parameter to TRUE and wish it to remain true, you must pass in this parameter again (otherwise it will be reset to FALSE).
     * @param updateInfo A sitedesign update information object
     */
    updateSiteDesign(updateInfo) {
        return this.clone(SiteDesignsCloneFactory, "UpdateSiteDesign").execute({ updateInfo: updateInfo });
    }
    /**
     * Deletes a site design.
     * @param id The ID of the site design to delete.
     */
    deleteSiteDesign(id) {
        return this.clone(SiteDesignsCloneFactory, "DeleteSiteDesign").execute({ id: id });
    }
    /**
     * Gets a list of principals that have access to a site design.
     * @param id The ID of the site design to get rights information from.
     */
    getSiteDesignRights(id) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRights").execute({ id: id });
    }
    /**
     * Grants access to a site design for one or more principals.
     * @param id The ID of the site design to grant rights on.
     * @param principalNames An array of one or more principals to grant view rights.
     *                       Principals can be users or mail-enabled security groups in the form of "alias" or "alias@<domain name>.com"
     * @param grantedRights Always set to 1. This represents the View right.
     */
    grantSiteDesignRights(id, principalNames, grantedRights = 1) {
        return this.clone(SiteDesignsCloneFactory, "GrantSiteDesignRights")
            .execute({
            "grantedRights": grantedRights.toString(),
            "id": id,
            "principalNames": principalNames,
        });
    }
    /**
     * Revokes access from a site design for one or more principals.
     * @param id The ID of the site design to revoke rights from.
     * @param principalNames An array of one or more principals to revoke view rights from.
     *                       If all principals have rights revoked on the site design, the site design becomes viewable to everyone.
     */
    revokeSiteDesignRights(id, principalNames) {
        return this.clone(SiteDesignsCloneFactory, "RevokeSiteDesignRights")
            .execute({
            "id": id,
            "principalNames": principalNames,
        });
    }
    /**
     * Adds a site design task on the specified web url to be invoked asynchronously.
     * @param webUrl The absolute url of the web on where to create the task
     * @param siteDesignId The ID of the site design to create a task for
     */
    addSiteDesignTask(webUrl, siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "AddSiteDesignTask")
            .execute({ "webUrl": webUrl, "siteDesignId": siteDesignId });
    }
    /**
     * Adds a site design task on the current web to be invoked asynchronously.
     * @param siteDesignId The ID of the site design to create a task for
     */
    addSiteDesignTaskToCurrentWeb(siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "AddSiteDesignTaskToCurrentWeb")
            .execute({ "siteDesignId": siteDesignId });
    }
    /**
     * Retrieves the site design task, if the task has finished running null will be returned
     * @param id The ID of the site design task
     */
    getSiteDesignTask(id) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const task = yield this.clone(SiteDesignsCloneFactory, "GetSiteDesignTask")
                .execute({ "taskId": id });
            return hOP(task, "ID") ? task : null;
        });
    }
    /**
     * Retrieves a list of site design that have run on a specific web
     * @param webUrl The url of the web where the site design was applied
     * @param siteDesignId (Optional) the site design ID, if not provided will return all site design runs
     */
    getSiteDesignRun(webUrl, siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRun")
            .execute({ "webUrl": webUrl, siteDesignId: siteDesignId });
    }
    /**
     * Retrieves the status of a site design that has been run or is still running
     * @param webUrl The url of the web where the site design was applied
     * @param runId the run ID
     */
    getSiteDesignRunStatus(webUrl, runId) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRunStatus")
            .execute({ "webUrl": webUrl, runId: runId });
    }
}
__decorate([
    tag("sd.createSiteDesign")
], _SiteDesigns.prototype, "createSiteDesign", null);
__decorate([
    tag("sd.applySiteDesign")
], _SiteDesigns.prototype, "applySiteDesign", null);
__decorate([
    tag("sd.getSiteDesigns")
], _SiteDesigns.prototype, "getSiteDesigns", null);
__decorate([
    tag("sd.getSiteDesignMetadata")
], _SiteDesigns.prototype, "getSiteDesignMetadata", null);
__decorate([
    tag("sd.updateSiteDesign")
], _SiteDesigns.prototype, "updateSiteDesign", null);
__decorate([
    tag("sd.deleteSiteDesign")
], _SiteDesigns.prototype, "deleteSiteDesign", null);
__decorate([
    tag("sd.getSiteDesignRights")
], _SiteDesigns.prototype, "getSiteDesignRights", null);
__decorate([
    tag("sd.grantSiteDesignRights")
], _SiteDesigns.prototype, "grantSiteDesignRights", null);
__decorate([
    tag("sd.revokeSiteDesignRights")
], _SiteDesigns.prototype, "revokeSiteDesignRights", null);
__decorate([
    tag("sd.addSiteDesignTask")
], _SiteDesigns.prototype, "addSiteDesignTask", null);
__decorate([
    tag("sd.addSiteDesignTaskToCurrentWeb")
], _SiteDesigns.prototype, "addSiteDesignTaskToCurrentWeb", null);
__decorate([
    tag("sd.getSiteDesignTask")
], _SiteDesigns.prototype, "getSiteDesignTask", null);
__decorate([
    tag("sd.getSiteDesignRun")
], _SiteDesigns.prototype, "getSiteDesignRun", null);
__decorate([
    tag("sd.getSiteDesignRunStatus")
], _SiteDesigns.prototype, "getSiteDesignRunStatus", null);
const SiteDesigns = (baseUrl, methodName) => new _SiteDesigns(baseUrl, methodName);
const SiteDesignsCloneFactory = (baseUrl, methodName = "") => SiteDesigns(baseUrl, methodName);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/web.js


_Web.prototype.getSiteDesignRuns = function (siteDesignId) {
    return SiteDesigns(this, "").getSiteDesignRun(undefined, siteDesignId);
};
_Web.prototype.addSiteDesignTask = function (siteDesignId) {
    return SiteDesigns(this, "").addSiteDesignTaskToCurrentWeb(siteDesignId);
};
_Web.prototype.getSiteDesignRunStatus = function (runId) {
    return SiteDesigns(this, "").getSiteDesignRunStatus(undefined, runId);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/index.js




Reflect.defineProperty(SPRest.prototype, "siteDesigns", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return SiteDesigns(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/web.js







addProp(_Web, "siteGroups", SiteGroups);
addProp(_Web, "associatedOwnerGroup", SiteGroups, "associatedownergroup");
addProp(_Web, "associatedMemberGroup", SiteGroups, "associatedmembergroup");
addProp(_Web, "associatedVisitorGroup", SiteGroups, "associatedvisitorgroup");
_Web.prototype.createDefaultAssociatedGroups = function (groupNameSeed, siteOwner, copyRoleAssignments = false, clearSubscopes = true, siteOwner2) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        yield this.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
        const q = this.clone(Web, "createDefaultAssociatedGroups(userLogin=@u,userLogin2=@v,groupNameSeed=@s)");
        q.query.set("@u", `'${escapeQueryStrValue(siteOwner || "")}'`);
        q.query.set("@v", `'${escapeQueryStrValue(siteOwner2 || "")}'`);
        q.query.set("@s", `'${escapeQueryStrValue(groupNameSeed || "")}'`);
        return spPost(q);
    });
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/types.js







class _SiteScripts extends _SharePointQueryable {
    constructor(baseUrl, methodName = "") {
        const url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        super(extractWebUrl(url), `_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.${methodName}`);
    }
    execute(props) {
        return spPost(this, body(props));
    }
    /**
     * Gets a list of information on all existing site scripts.
     */
    getSiteScripts() {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScripts", true).execute({});
    }
    /**
     * Creates a new site script.
     *
     * @param title The display name of the site script.
     * @param content JSON value that describes the script. For more information, see JSON reference.
     */
    createSiteScript(title, description, content) {
        return this.clone(SiteScriptsCloneFactory, `CreateSiteScript(Title=@title,Description=@desc)?@title='${escapeQueryStrValue(title)}'&@desc='${escapeQueryStrValue(description)}'`)
            .execute(content);
    }
    /**
     * Gets information about a specific site script. It also returns the JSON of the script.
     *
     * @param id The ID of the site script to get information about.
     */
    getSiteScriptMetadata(id) {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScriptMetadata").execute({ id });
    }
    /**
     * Deletes a site script.
     *
     * @param id The ID of the site script to delete.
     */
    deleteSiteScript(id) {
        return this.clone(SiteScriptsCloneFactory, "DeleteSiteScript").execute({ id });
    }
    /**
     * Updates a site script with new values. In the REST call, all parameters are optional except the site script Id.
     *
     * @param siteScriptUpdateInfo Object that contains the information to update a site script.
     *                             Make sure you stringify the content object or pass it in the second 'content' parameter
     * @param content (Optional) A new JSON script defining the script actions. For more information, see Site design JSON schema.
     */
    updateSiteScript(updateInfo, content) {
        if (content) {
            updateInfo.Content = JSON.stringify(content);
        }
        return this.clone(SiteScriptsCloneFactory, "UpdateSiteScript").execute({ updateInfo });
    }
    /**
     * Gets the site script syntax (JSON) for a specific list
     * @param listUrl The absolute url of the list to retrieve site script
     */
    getSiteScriptFromList(listUrl) {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScriptFromList").execute({ listUrl });
    }
    /**
     * Gets the site script syntax (JSON) for a specific web
     * @param webUrl The absolute url of the web to retrieve site script
     * @param extractInfo configuration object to specify what to extract
     */
    getSiteScriptFromWeb(webUrl, info) {
        return this.clone(SiteScriptsCloneFactory, "getSiteScriptFromWeb").execute({ webUrl, info });
    }
    /**
     * Executes the indicated site design action on the indicated web.
     *
     * @param webUrl The absolute url of the web to retrieve site script
     * @param extractInfo configuration object to specify what to extract
     */
    executeSiteScriptAction(actionDefinition) {
        return this.clone(SiteScriptsCloneFactory, "executeSiteScriptAction").execute({ actionDefinition });
    }
}
__decorate([
    tag("ss.getSiteScripts")
], _SiteScripts.prototype, "getSiteScripts", null);
__decorate([
    tag("ss.createSiteScript")
], _SiteScripts.prototype, "createSiteScript", null);
__decorate([
    tag("ss.getSiteScriptMetadata")
], _SiteScripts.prototype, "getSiteScriptMetadata", null);
__decorate([
    tag("ss.deleteSiteScript")
], _SiteScripts.prototype, "deleteSiteScript", null);
__decorate([
    tag("ss.updateSiteScript")
], _SiteScripts.prototype, "updateSiteScript", null);
__decorate([
    tag("ss.getSiteScriptFromList")
], _SiteScripts.prototype, "getSiteScriptFromList", null);
__decorate([
    tag("ss.getSiteScriptFromWeb")
], _SiteScripts.prototype, "getSiteScriptFromWeb", null);
__decorate([
    tag("ss.executeSiteScriptAction")
], _SiteScripts.prototype, "executeSiteScriptAction", null);
const SiteScripts = (baseUrl, methodName) => new _SiteScripts(baseUrl, methodName);
const SiteScriptsCloneFactory = (baseUrl, methodName = "") => SiteScripts(baseUrl, methodName);
var SiteScriptActionOutcome;
(function (SiteScriptActionOutcome) {
    /**
     * The stage was deemed to have completed successfully.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["Success"] = 0] = "Success";
    /**
     * The stage was deemed to have failed to complete successfully (non-blocking, rest of recipe
     * execution should still be able to proceed).
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["Failure"] = 1] = "Failure";
    /**
     * No action was taken for this stage / this stage was skipped.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["NoOp"] = 2] = "NoOp";
    /**
     * There was an exception but the operation succeeded. This is analagous to the operation completing
     * in a "yellow" state.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["SucceededWithException"] = 3] = "SucceededWithException";
})(SiteScriptActionOutcome || (SiteScriptActionOutcome = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/web.js


_Web.prototype.getSiteScript = function (extractInfo) {
    return SiteScripts(this.toUrl(), "").getSiteScriptFromWeb(undefined, extractInfo);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/list.js







_List.prototype.getSiteScript = function () {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const rootFolder = yield this.clone(List).rootFolder.get();
        const web = yield Web(extractWebUrl(this.toUrl())).select("Url").get();
        const absoluteListUrl = combine(web.Url, "Lists", rootFolder.Name);
        return SiteScripts(this, "").getSiteScriptFromList(absoluteListUrl);
    });
};
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/index.js





Reflect.defineProperty(SPRest.prototype, "siteScripts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return SiteScripts(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/web.js






addProp(_Web, "siteUsers", SiteUsers);
addProp(_Web, "currentUser", SiteUser, "currentuser");
_Web.prototype.ensureUser = function (logonName) {
    return tslib_es6_awaiter(this, void 0, void 0, function* () {
        const data = yield spPost(this.clone(Web, "ensureuser"), body({ logonName }));
        return {
            data,
            user: SiteUser(odataUrlFrom(data)),
        };
    });
};
_Web.prototype.getUserById = function (id) {
    return SiteUser(this, `getUserById(${id})`);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/social/types.js








let _Social = class _Social extends _SharePointQueryableInstance {
    get my() {
        return MySocial(this);
    }
    getFollowedSitesUri() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const r = yield this.clone(SocialCloneFactory, "FollowedSitesUri").get();
            return r.FollowedSitesUri || r;
        });
    }
    getFollowedDocumentsUri() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const r = yield this.clone(SocialCloneFactory, "FollowedDocumentsUri").get();
            return r.FollowedDocumentsUri || r;
        });
    }
    follow(actorInfo) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return yield spPost(this.clone(SocialCloneFactory, "follow"), this.createSocialActorInfoRequestBody(actorInfo));
        });
    }
    isFollowed(actorInfo) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return yield spPost(this.clone(SocialCloneFactory, "isfollowed"), this.createSocialActorInfoRequestBody(actorInfo));
        });
    }
    stopFollowing(actorInfo) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            return yield spPost(this.clone(SocialCloneFactory, "stopfollowing"), this.createSocialActorInfoRequestBody(actorInfo));
        });
    }
    createSocialActorInfoRequestBody(actorInfo) {
        return body({
            "actor": Object.assign(metadata("SP.Social.SocialActorInfo"), {
                Id: null,
            }, actorInfo),
        });
    }
};
__decorate([
    tag("soc.getFollowedSitesUri")
], _Social.prototype, "getFollowedSitesUri", null);
__decorate([
    tag("soc.getFollowedDocumentsUri")
], _Social.prototype, "getFollowedDocumentsUri", null);
__decorate([
    tag("soc.follow")
], _Social.prototype, "follow", null);
__decorate([
    tag("soc.isFollowed")
], _Social.prototype, "isFollowed", null);
__decorate([
    tag("soc.stopFollowing")
], _Social.prototype, "stopFollowing", null);
_Social = __decorate([
    defaultPath("_api/social.following")
], _Social);

/**
 * Get a new Social instance for the particular Url
 */
const Social = (baseUrl) => new _Social(baseUrl);
const SocialCloneFactory = (baseUrl, paths) => new _Social(baseUrl, paths);
/**
 * Current user's Social instance
 */
let _MySocial = class _MySocial extends _SharePointQueryableInstance {
    followed(types) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const r = yield this.clone(MySocialCloneFactory, `followed(types=${types})`)();
            return hOP(r, "Followed") ? r.Followed.results : r;
        });
    }
    followedCount(types) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const r = yield this.clone(MySocialCloneFactory, `followedcount(types=${types})`)();
            return r.FollowedCount || r;
        });
    }
    followers() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const r = yield this.clone(MySocialCloneFactory, "followers")();
            return hOP(r, "Followers") ? r.Followers.results : r;
        });
    }
    suggestions() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const r = yield this.clone(MySocialCloneFactory, "suggestions")();
            return hOP(r, "Suggestions") ? r.Suggestions.results : r;
        });
    }
};
__decorate([
    tag("msoc.followed")
], _MySocial.prototype, "followed", null);
__decorate([
    tag("msoc.followedCount")
], _MySocial.prototype, "followedCount", null);
__decorate([
    tag("msoc.followers")
], _MySocial.prototype, "followers", null);
__decorate([
    tag("msoc.suggestions")
], _MySocial.prototype, "suggestions", null);
_MySocial = __decorate([
    defaultPath("my")
], _MySocial);

/**
 * Invokable factory for IMySocial instances
 */
const MySocial = spInvokableFactory(_MySocial);
const MySocialCloneFactory = (baseUrl, path) => MySocial(baseUrl, path);
/**
 * Social actor type
 *
 */
var SocialActorType;
(function (SocialActorType) {
    SocialActorType[SocialActorType["User"] = 0] = "User";
    SocialActorType[SocialActorType["Document"] = 1] = "Document";
    SocialActorType[SocialActorType["Site"] = 2] = "Site";
    SocialActorType[SocialActorType["Tag"] = 3] = "Tag";
})(SocialActorType || (SocialActorType = {}));
/**
 * Social actor type
 *
 */
/* eslint-disable no-bitwise */
var SocialActorTypes;
(function (SocialActorTypes) {
    SocialActorTypes[SocialActorTypes["None"] = 0] = "None";
    SocialActorTypes[SocialActorTypes["User"] = 1] = "User";
    SocialActorTypes[SocialActorTypes["Document"] = 2] = "Document";
    SocialActorTypes[SocialActorTypes["Site"] = 4] = "Site";
    SocialActorTypes[SocialActorTypes["Tag"] = 8] = "Tag";
    /**
   * The set excludes documents and sites that do not have feeds.
   */
    SocialActorTypes[SocialActorTypes["ExcludeContentWithoutFeeds"] = 268435456] = "ExcludeContentWithoutFeeds";
    /**
   * The set includes group sites
   */
    SocialActorTypes[SocialActorTypes["IncludeGroupsSites"] = 536870912] = "IncludeGroupsSites";
    /**
   * The set includes only items created within the last 24 hours
   */
    SocialActorTypes[SocialActorTypes["WithinLast24Hours"] = 1073741824] = "WithinLast24Hours";
})(SocialActorTypes || (SocialActorTypes = {}));
/* eslint-enable no-bitwise */
/**
 * Result from following
 *
 */
var SocialFollowResult;
(function (SocialFollowResult) {
    SocialFollowResult[SocialFollowResult["Ok"] = 0] = "Ok";
    SocialFollowResult[SocialFollowResult["AlreadyFollowing"] = 1] = "AlreadyFollowing";
    SocialFollowResult[SocialFollowResult["LimitReached"] = 2] = "LimitReached";
    SocialFollowResult[SocialFollowResult["InternalError"] = 3] = "InternalError";
})(SocialFollowResult || (SocialFollowResult = {}));
/**
 * Specifies an exception or status code.
 */
var SocialStatusCode;
(function (SocialStatusCode) {
    /**
   * The operation completed successfully
   */
    SocialStatusCode[SocialStatusCode["OK"] = 0] = "OK";
    /**
   * The request is invalid.
   */
    SocialStatusCode[SocialStatusCode["InvalidRequest"] = 1] = "InvalidRequest";
    /**
   *  The current user is not authorized to perform the operation.
   */
    SocialStatusCode[SocialStatusCode["AccessDenied"] = 2] = "AccessDenied";
    /**
   * The target of the operation was not found.
   */
    SocialStatusCode[SocialStatusCode["ItemNotFound"] = 3] = "ItemNotFound";
    /**
   * The operation is invalid for the target's current state.
   */
    SocialStatusCode[SocialStatusCode["InvalidOperation"] = 4] = "InvalidOperation";
    /**
   * The operation completed without modifying the target.
   */
    SocialStatusCode[SocialStatusCode["ItemNotModified"] = 5] = "ItemNotModified";
    /**
   * The operation failed because an internal error occurred.
   */
    SocialStatusCode[SocialStatusCode["InternalError"] = 6] = "InternalError";
    /**
   * The operation failed because the server could not access the distributed cache.
   */
    SocialStatusCode[SocialStatusCode["CacheReadError"] = 7] = "CacheReadError";
    /**
   * The operation succeeded but the server could not update the distributed cache.
   */
    SocialStatusCode[SocialStatusCode["CacheUpdateError"] = 8] = "CacheUpdateError";
    /**
   * No personal site exists for the current user, and no further information is available.
   */
    SocialStatusCode[SocialStatusCode["PersonalSiteNotFound"] = 9] = "PersonalSiteNotFound";
    /**
   * No personal site exists for the current user, and a previous attempt to create one failed.
   */
    SocialStatusCode[SocialStatusCode["FailedToCreatePersonalSite"] = 10] = "FailedToCreatePersonalSite";
    /**
   * No personal site exists for the current user, and a previous attempt to create one was not authorized.
   */
    SocialStatusCode[SocialStatusCode["NotAuthorizedToCreatePersonalSite"] = 11] = "NotAuthorizedToCreatePersonalSite";
    /**
   * No personal site exists for the current user, and no attempt should be made to create one.
   */
    SocialStatusCode[SocialStatusCode["CannotCreatePersonalSite"] = 12] = "CannotCreatePersonalSite";
    /**
   * The operation was rejected because an internal limit had been reached.
   */
    SocialStatusCode[SocialStatusCode["LimitReached"] = 13] = "LimitReached";
    /**
   * The operation failed because an error occurred during the processing of the specified attachment.
   */
    SocialStatusCode[SocialStatusCode["AttachmentError"] = 14] = "AttachmentError";
    /**
   * The operation succeeded with recoverable errors; the returned data is incomplete.
   */
    SocialStatusCode[SocialStatusCode["PartialData"] = 15] = "PartialData";
    /**
   * A required SharePoint feature is not enabled.
   */
    SocialStatusCode[SocialStatusCode["FeatureDisabled"] = 16] = "FeatureDisabled";
    /**
   * The site's storage quota has been exceeded.
   */
    SocialStatusCode[SocialStatusCode["StorageQuotaExceeded"] = 17] = "StorageQuotaExceeded";
    /**
   * The operation failed because the server could not access the database.
   */
    SocialStatusCode[SocialStatusCode["DatabaseError"] = 18] = "DatabaseError";
})(SocialStatusCode || (SocialStatusCode = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/social/index.js



Reflect.defineProperty(SPRest.prototype, "social", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Social(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/objectToSPKeyValueCollection.js


/**
 * Creates an object representing a SharePoint Collection(SP.KeyValue)
 *
 * @param obj The plain object defining the properties
 */
function objectToSPKeyValueCollection(obj) {
    return util_assign(metadata("Collection(SP.KeyValue)"), {
        results: Object.keys(obj).map(key => util_assign(metadata("SP.KeyValue"), {
            Key: key,
            Value: Reflect.get(obj, key),
            ValueType: "Edm.String",
        })),
    });
}
//# sourceMappingURL=objectToSPKeyValueCollection.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sputilities/types.js











class _Utilities extends _SharePointQueryable {
    constructor(baseUrl, methodName) {
        const url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        super(extractWebUrl(url), `_api/SP.Utilities.Utility.${methodName}`);
    }
    excute(props) {
        return spPost(this, body(props));
    }
    sendEmail(props) {
        const params = {
            properties: util_assign(metadata("SP.Utilities.EmailProperties"), {
                Body: props.Body,
                From: props.From,
                Subject: props.Subject,
            }),
        };
        if (props.To && props.To.length > 0) {
            params.properties = util_assign(params.properties, {
                To: { results: props.To },
            });
        }
        if (props.CC && props.CC.length > 0) {
            params.properties = util_assign(params.properties, {
                CC: { results: props.CC },
            });
        }
        if (props.BCC && props.BCC.length > 0) {
            params.properties = util_assign(params.properties, {
                BCC: { results: props.BCC },
            });
        }
        if (props.AdditionalHeaders) {
            params.properties = util_assign(params.properties, {
                AdditionalHeaders: objectToSPKeyValueCollection(props.AdditionalHeaders),
            });
        }
        return tag.configure(this.clone(UtilitiesCloneFactory, "SendEmail", true), "u.sendEmail").excute(params);
    }
    getCurrentUserEmailAddresses() {
        return tag.configure(this.clone(UtilitiesCloneFactory, "GetCurrentUserEmailAddresses", true), "u.getCurrentUserEmailAddresses").excute({});
    }
    resolvePrincipal(input, scopes, sources, inputIsEmailOnly, addToUserInfoList, matchUserInfoList = false) {
        const params = {
            addToUserInfoList,
            input,
            inputIsEmailOnly,
            matchUserInfoList,
            scopes,
            sources,
        };
        const clone = this.clone(UtilitiesCloneFactory, "ResolvePrincipalInCurrentContext", true);
        return tag.configure(clone, "u.ResolvePrincipalInCurrentContext").excute(params);
    }
    searchPrincipals(input, scopes, sources, groupName, maxCount) {
        const params = {
            groupName: groupName,
            input: input,
            maxCount: maxCount,
            scopes: scopes,
            sources: sources,
        };
        const clone = this.clone(UtilitiesCloneFactory, "SearchPrincipalsUsingContextWeb", true);
        return tag.configure(clone, "u.SearchPrincipalsUsingContextWeb").excute(params);
    }
    createEmailBodyForInvitation(pageAddress) {
        const params = {
            pageAddress: pageAddress,
        };
        const clone = this.clone(UtilitiesCloneFactory, "CreateEmailBodyForInvitation", true);
        return tag.configure(clone, "u.CreateEmailBodyForInvitation").excute(params);
    }
    expandGroupsToPrincipals(inputs, maxCount = 30) {
        const params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        const clone = this.clone(UtilitiesCloneFactory, "ExpandGroupsToPrincipals", true);
        return tag.configure(clone, "u.ExpandGroupsToPrincipals").excute(params);
    }
    createWikiPage(info) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const clone = this.clone(UtilitiesCloneFactory, "CreateWikiPageInContextWeb", true);
            const newPage = yield tag.configure(clone, "u.CreateWikiPageInContextWeb").excute({ parameters: info });
            return {
                data: newPage,
                file: File(odataUrlFrom(newPage)),
            };
        });
    }
}
const Utilities = spInvokableFactory(_Utilities);
const UtilitiesCloneFactory = (baseUrl, path) => Utilities(baseUrl, path);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sputilities/index.js



Reflect.defineProperty(SPRest.prototype, "utility", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Utilities(baseUrl, "").configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/types.js






let _Subscriptions = class _Subscriptions extends _SharePointQueryableCollection {
    /**
    * Returns all the webhook subscriptions or the specified webhook subscription
    *
    * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
    */
    getById(subscriptionId) {
        return tag.configure(Subscription(this).concat(`('${subscriptionId}')`), "subs.getById");
    }
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (optional)
     */
    add(notificationUrl, expirationDate, clientState) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = {
                "expirationDateTime": expirationDate,
                "notificationUrl": notificationUrl,
                "resource": this.toUrl(),
            };
            if (clientState) {
                postBody.clientState = clientState;
            }
            const data = yield spPost(this, body(postBody, headers({ "Content-Type": "application/json" })));
            return { data, subscription: this.getById(data.id) };
        });
    }
};
__decorate([
    tag("subs.add")
], _Subscriptions.prototype, "add", null);
_Subscriptions = __decorate([
    defaultPath("subscriptions")
], _Subscriptions);

const Subscriptions = spInvokableFactory(_Subscriptions);
class _Subscription extends _SharePointQueryableInstance {
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months, optional)
     * @param notificationUrl The url to receive the notifications (optional)
     * @param clientState A client specific string (optional)
     */
    update(expirationDate, notificationUrl, clientState) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = {};
            if (expirationDate) {
                postBody.expirationDateTime = expirationDate;
            }
            if (notificationUrl) {
                postBody.notificationUrl = notificationUrl;
            }
            if (clientState) {
                postBody.clientState = clientState;
            }
            const data = yield spPatch(this, body(postBody, headers({ "Content-Type": "application/json" })));
            return { data, subscription: this };
        });
    }
    /**
     * Removes this webhook subscription
     *
     */
    delete() {
        return spDelete(this);
    }
}
__decorate([
    tag("sub.update")
], _Subscription.prototype, "update", null);
__decorate([
    tag("sub.delete")
], _Subscription.prototype, "delete", null);
const Subscription = spInvokableFactory(_Subscription);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/list.js



addProp(_List, "subscriptions", Subscriptions);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/taxonomy/types.js




/**
 * Describes a collection of Form objects
 *
 */
let _TermStore = class _TermStore extends _SharePointQueryableInstance {
    /**
     * Gets the term groups associated with this tenant
     */
    get groups() {
        return tag.configure(TermGroups(this), "txts.groups");
    }
    /**
     * Gets the term groups associated with this tenant
     */
    get sets() {
        return tag.configure(TermSets(this), "txts.sets");
    }
};
_TermStore = __decorate([
    defaultPath("_api/v2.1/termstore")
], _TermStore);

const TermStore = spInvokableFactory(_TermStore);
let _TermGroups = class _TermGroups extends _SharePointQueryableCollection {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id) {
        return tag.configure(TermGroup(this, id), "txtgs.getById");
    }
};
_TermGroups = __decorate([
    defaultPath("groups")
], _TermGroups);

const TermGroups = spInvokableFactory(_TermGroups);
class _TermGroup extends _SharePointQueryableInstance {
    /**
     * Gets the term sets associated with this tenant
     */
    get sets() {
        return tag.configure(TermSets(this, "sets"), "txtg.sets");
    }
}
const TermGroup = spInvokableFactory(_TermGroup);
let _TermSets = class _TermSets extends _SharePointQueryableCollection {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id) {
        return tag.configure(TermSet(this, id), "txts.getById");
    }
};
_TermSets = __decorate([
    defaultPath("sets")
], _TermSets);

const TermSets = spInvokableFactory(_TermSets);
class _TermSet extends _SharePointQueryableInstance {
    /**
     * Gets all the terms in this set
     */
    get terms() {
        return Terms(this);
    }
    get parentGroup() {
        return tag.configure(TermGroup(this, "parentGroup"), "txts.parentGroup");
    }
    get children() {
        return tag.configure(Children(this), "txts.children");
    }
    get relations() {
        return tag.configure(Relations(this), "txts.relations");
    }
    getTermById(id) {
        return tag.configure(this.clone(Term, `terms/${id}`), "txts.getTermById");
    }
    /**
     * Gets all the terms in this termset in an ordered tree using the appropriate sort ordering
     * ** This is an expensive operation and you should strongly consider caching the results **
     */
    getAllChildrenAsOrderedTree() {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const setInfo = yield this.select("*", "customSortOrder")();
            const tree = [];
            const ensureOrder = (terms, sorts, setSorts) => {
                // handle custom sort order
                let ordering = null;
                if (sorts === null && setSorts.length > 0) {
                    ordering = [...setSorts];
                }
                else {
                    const index = sorts.findIndex(v => v.setId === setInfo.id);
                    if (index >= 0) {
                        ordering = [...sorts[index].order];
                    }
                }
                if (ordering !== null) {
                    const orderedChildren = [];
                    ordering.forEach(o => {
                        const found = terms.find(ch => o === ch.id);
                        if (found) {
                            orderedChildren.push(found);
                        }
                    });
                    return orderedChildren;
                }
                return terms;
            };
            const visitor = (source, parent) => tslib_es6_awaiter(this, void 0, void 0, function* () {
                const children = yield source.children.select("*", "customSortOrder")();
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    const orderedTerm = Object.assign({ children: [], defaultLabel: child.labels.find(l => l.isDefault).name }, child);
                    if (child.childrenCount > 0) {
                        yield visitor(this.getTermById(children[i].id), orderedTerm.children);
                        orderedTerm.children = ensureOrder(orderedTerm.children, child.customSortOrder);
                    }
                    parent.push(orderedTerm);
                }
            });
            yield visitor(this, tree);
            return ensureOrder(tree, null, setInfo.customSortOrder);
        });
    }
}
const TermSet = spInvokableFactory(_TermSet);
let _Children = class _Children extends _SharePointQueryableCollection {
};
_Children = __decorate([
    defaultPath("children")
], _Children);

const Children = spInvokableFactory(_Children);
let _Terms = class _Terms extends _SharePointQueryableCollection {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id) {
        return Term(this, id);
    }
};
_Terms = __decorate([
    defaultPath("terms")
], _Terms);

const Terms = spInvokableFactory(_Terms);
class _Term extends _SharePointQueryableInstance {
    get children() {
        return tag.configure(Children(this), "txt.children");
    }
    get relations() {
        return tag.configure(Relations(this), "txt.relations");
    }
    get set() {
        return tag.configure(TermSet(this, "set"), "txt.set");
    }
}
const Term = spInvokableFactory(_Term);
let _Relations = class _Relations extends _SharePointQueryableCollection {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id) {
        return tag.configure(Relation(this, id), "txrs.getById");
    }
};
_Relations = __decorate([
    defaultPath("relations")
], _Relations);

const Relations = spInvokableFactory(_Relations);
class _Relation extends _SharePointQueryableInstance {
    get fromTerm() {
        return tag.configure(Term(this, "fromTerm"), "txr.fromTerm");
    }
    get toTerm() {
        return tag.configure(Term(this, "toTerm"), "txr.toTerm");
    }
    get set() {
        return tag.configure(TermSet(this, "set"), "txr.set");
    }
}
const Relation = spInvokableFactory(_Relation);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/taxonomy/index.js



Reflect.defineProperty(SPRest.prototype, "termStore", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return TermStore(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/list.js



addProp(_List, "userCustomActions", UserCustomActions);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/web.js



addProp(_Web, "userCustomActions", UserCustomActions);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/site.js



addProp(_Site, "userCustomActions", UserCustomActions);
//# sourceMappingURL=site.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/types.js







let _Views = class _Views extends _SharePointQueryableCollection {
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    add(title, personalView = false, additionalSettings = {}) {
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const postBody = body(Object.assign(metadata("SP.View"), {
                "PersonalView": personalView,
                "Title": title,
            }, additionalSettings));
            const data = yield spPost(this.clone(Views, null), postBody);
            return {
                data,
                view: this.getById(data.Id),
            };
        });
    }
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    getById(id) {
        return View(this).concat(`('${id}')`);
    }
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    getByTitle(title) {
        return View(this, `getByTitle('${title}')`);
    }
};
__decorate([
    tag("vs.add")
], _Views.prototype, "add", null);
_Views = __decorate([
    defaultPath("views")
], _Views);

const Views = spInvokableFactory(_Views);
class _View extends _SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = deleteable("vw");
        /**
         * Updates this view intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the view
         */
        this.update = this._update("SP.View", data => ({ data, view: this }));
    }
    get fields() {
        return ViewFields(this);
    }
    /**
     * Returns the list view as HTML.
     *
     */
    renderAsHtml() {
        return this.clone(View, "renderashtml")();
    }
    /**
     * Sets the view schema
     *
     * @param viewXml The view XML to set
     */
    setViewXml(viewXml) {
        return spPost(this.clone(View, "SetViewXml"), body({ viewXml }));
    }
}
__decorate([
    tag("v.renderAsHtml")
], _View.prototype, "renderAsHtml", null);
__decorate([
    tag("v.setViewXml")
], _View.prototype, "setViewXml", null);
const View = spInvokableFactory(_View);
let _ViewFields = class _ViewFields extends _SharePointQueryableCollection {
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    getSchemaXml() {
        return this.clone(ViewFields, "schemaxml")();
    }
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    add(fieldTitleOrInternalName) {
        return spPost(this.clone(ViewFields, `addviewfield('${fieldTitleOrInternalName}')`));
    }
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param field The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    move(field, index) {
        return spPost(this.clone(ViewFields, "moveviewfieldto"), body({ field, index }));
    }
    /**
     * Removes all the fields from the collection.
     */
    removeAll() {
        return spPost(this.clone(ViewFields, "removeallviewfields"));
    }
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    remove(fieldInternalName) {
        return spPost(this.clone(ViewFields, `removeviewfield('${fieldInternalName}')`));
    }
};
__decorate([
    tag("vfs.getSchemaXml")
], _ViewFields.prototype, "getSchemaXml", null);
__decorate([
    tag("vfs.add")
], _ViewFields.prototype, "add", null);
__decorate([
    tag("vfs.move")
], _ViewFields.prototype, "move", null);
__decorate([
    tag("vfs.removeAll")
], _ViewFields.prototype, "removeAll", null);
__decorate([
    tag("vfs.remove")
], _ViewFields.prototype, "remove", null);
_ViewFields = __decorate([
    defaultPath("viewfields")
], _ViewFields);

const ViewFields = spInvokableFactory(_ViewFields);
var ViewScope;
(function (ViewScope) {
    ViewScope[ViewScope["DefaultValue"] = 0] = "DefaultValue";
    ViewScope[ViewScope["Recursive"] = 1] = "Recursive";
    ViewScope[ViewScope["RecursiveAll"] = 2] = "RecursiveAll";
    ViewScope[ViewScope["FilesOnly"] = 3] = "FilesOnly";
})(ViewScope || (ViewScope = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/list.js



addProp(_List, "views", Views);
addProp(_List, "defaultView", View, "DefaultView");
_List.prototype.getView = function (viewId) {
    return View(this, `getView('${viewId}')`);
};
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/types.js




class _LimitedWebPartManager extends _SharePointQueryable {
    get scope() {
        return tag.configure(SharePointQueryable(this, "Scope"), "f.scope");
    }
    get webparts() {
        return WebPartDefinitions(this, "webparts");
    }
    export(id) {
        return spPost(this.clone(LimitedWebPartManagerCloneFactory, "ExportWebPart"), body({ webPartId: id }));
    }
    import(xml) {
        return spPost(this.clone(LimitedWebPartManagerCloneFactory, "ImportWebPart"), body({ webPartXml: xml }));
    }
}
const LimitedWebPartManager = (baseUrl, path) => new _LimitedWebPartManager(baseUrl, path);
const LimitedWebPartManagerCloneFactory = (baseUrl, path) => LimitedWebPartManager(baseUrl, path);
class _WebPartDefinitions extends _SharePointQueryableCollection {
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    getById(id) {
        return WebPartDefinition(this, `getbyid('${id}')`);
    }
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    getByControlId(id) {
        return WebPartDefinition(this, `getByControlId('${id}')`);
    }
}
const WebPartDefinitions = spInvokableFactory(_WebPartDefinitions);
class _WebPartDefinition extends _SharePointQueryableInstance {
    /**
    * Gets the webpart information associated with this definition
    */
    get webpart() {
        return SharePointQueryableInstance(this, "webpart");
    }
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    saveChanges() {
        return spPost(this.clone(WebPartDefinition, "SaveWebPartChanges"));
    }
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    moveTo(zoneId, zoneIndex) {
        return spPost(this.clone(WebPartDefinition, `MoveWebPartTo(zoneID='${zoneId}', zoneIndex=${zoneIndex})`));
    }
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    close() {
        return spPost(this.clone(WebPartDefinition, "CloseWebPart"));
    }
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    open() {
        return spPost(this.clone(WebPartDefinition, "OpenWebPart"));
    }
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    delete() {
        return spPost(this.clone(WebPartDefinition, "DeleteWebPart"));
    }
}
const WebPartDefinition = spInvokableFactory(_WebPartDefinition);
var WebPartsPersonalizationScope;
(function (WebPartsPersonalizationScope) {
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
})(WebPartsPersonalizationScope || (WebPartsPersonalizationScope = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/file.js


_File.prototype.getLimitedWebPartManager = function (scope = WebPartsPersonalizationScope.Shared) {
    return LimitedWebPartManager(this, `getLimitedWebPartManager(scope=${scope})`);
};
//# sourceMappingURL=file.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/types.js
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/file-names.js
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise = false) {
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer = "", onPremise = false) {
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}
//# sourceMappingURL=file-names.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/index.js











//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/presets/all.js







































































const all_sp = new SPRest();
//# sourceMappingURL=all.js.map
;// CONCATENATED MODULE: ./pnpjs-sources/index-sp.ts



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(527);
/******/ })()
;
});