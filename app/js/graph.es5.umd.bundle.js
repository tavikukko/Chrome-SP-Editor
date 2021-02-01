(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.graph"] = factory();
	else
		root["pnp.graph"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Attachment": () => (/* reexport */ Attachment),
  "Attachments": () => (/* reexport */ Attachments),
  "Bucket": () => (/* reexport */ Bucket),
  "Buckets": () => (/* reexport */ Buckets),
  "Calendar": () => (/* reexport */ Calendar),
  "Calendars": () => (/* reexport */ Calendars),
  "Channel": () => (/* reexport */ Channel),
  "Channels": () => (/* reexport */ Channels),
  "Contact": () => (/* reexport */ Contact),
  "ContactFolder": () => (/* reexport */ ContactFolder),
  "ContactFolders": () => (/* reexport */ ContactFolders),
  "Contacts": () => (/* reexport */ Contacts),
  "Conversation": () => (/* reexport */ Conversation),
  "Conversations": () => (/* reexport */ Conversations),
  "DirectoryObject": () => (/* reexport */ DirectoryObject),
  "DirectoryObjectTypes": () => (/* reexport */ DirectoryObjectTypes),
  "DirectoryObjects": () => (/* reexport */ DirectoryObjects),
  "Drive": () => (/* reexport */ Drive),
  "DriveItem": () => (/* reexport */ DriveItem),
  "DriveItems": () => (/* reexport */ DriveItems),
  "Drives": () => (/* reexport */ Drives),
  "Event": () => (/* reexport */ Event),
  "Events": () => (/* reexport */ Events),
  "GraphBatch": () => (/* reexport */ GraphBatch),
  "GraphEndpoints": () => (/* reexport */ GraphEndpoints),
  "GraphHttpClient": () => (/* reexport */ GraphHttpClient),
  "GraphQueryable": () => (/* reexport */ GraphQueryable),
  "GraphQueryableCollection": () => (/* reexport */ GraphQueryableCollection),
  "GraphQueryableInstance": () => (/* reexport */ GraphQueryableInstance),
  "GraphQueryableSearchableCollection": () => (/* reexport */ GraphQueryableSearchableCollection),
  "GraphRest": () => (/* reexport */ GraphRest),
  "Group": () => (/* reexport */ Group),
  "GroupType": () => (/* reexport */ GroupType),
  "Groups": () => (/* reexport */ Groups),
  "Insights": () => (/* reexport */ Insights),
  "Invitations": () => (/* reexport */ Invitations),
  "MailFolder": () => (/* reexport */ MailFolder),
  "MailFolders": () => (/* reexport */ MailFolders),
  "MailboxSettings": () => (/* reexport */ MailboxSettings),
  "Member": () => (/* reexport */ Member),
  "Members": () => (/* reexport */ Members),
  "Message": () => (/* reexport */ Message),
  "Messages": () => (/* reexport */ Messages),
  "Notebook": () => (/* reexport */ Notebook),
  "Notebooks": () => (/* reexport */ Notebooks),
  "OneNote": () => (/* reexport */ OneNote),
  "People": () => (/* reexport */ People),
  "Photo": () => (/* reexport */ Photo),
  "Plan": () => (/* reexport */ Plan),
  "PlanDetails": () => (/* reexport */ PlanDetails),
  "Planner": () => (/* reexport */ Planner),
  "Plans": () => (/* reexport */ Plans),
  "Post": () => (/* reexport */ Post),
  "Posts": () => (/* reexport */ Posts),
  "Resource": () => (/* reexport */ Resource),
  "Root": () => (/* reexport */ Root),
  "Search": () => (/* reexport */ Search),
  "Section": () => (/* reexport */ Section),
  "Sections": () => (/* reexport */ Sections),
  "Senders": () => (/* reexport */ Senders),
  "SharedInsight": () => (/* reexport */ SharedInsight),
  "SharedInsights": () => (/* reexport */ SharedInsights),
  "Subscription": () => (/* reexport */ Subscription),
  "Subscriptions": () => (/* reexport */ Subscriptions),
  "Tab": () => (/* reexport */ Tab),
  "Tabs": () => (/* reexport */ Tabs),
  "Task": () => (/* reexport */ Task),
  "TaskDetails": () => (/* reexport */ TaskDetails),
  "Tasks": () => (/* reexport */ Tasks),
  "Team": () => (/* reexport */ Team),
  "Teams": () => (/* reexport */ Teams),
  "Thread": () => (/* reexport */ Thread),
  "Threads": () => (/* reexport */ Threads),
  "TrendingInsight": () => (/* reexport */ TrendingInsight),
  "TrendingInsights": () => (/* reexport */ TrendingInsights),
  "UsedInsight": () => (/* reexport */ UsedInsight),
  "UsedInsights": () => (/* reexport */ UsedInsights),
  "User": () => (/* reexport */ User),
  "Users": () => (/* reexport */ Users),
  "graph": () => (/* reexport */ graph),
  "graphDelete": () => (/* reexport */ graphDelete),
  "graphGet": () => (/* reexport */ graphGet),
  "graphPatch": () => (/* reexport */ graphPatch),
  "graphPost": () => (/* reexport */ graphPost),
  "graphPut": () => (/* reexport */ graphPut),
  "registerCustomRequestClientFactory": () => (/* reexport */ registerCustomRequestClientFactory),
  "toAbsoluteUrl": () => (/* reexport */ toAbsoluteUrl)
});

;// CONCATENATED MODULE: ./node_modules/@pnp/graph/node_modules/tslib/tslib.es6.js
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

function __awaiter(thisArg, _arguments, P, generator) {
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

function tslib_es6_awaiter(thisArg, _arguments, P, generator) {
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
class BearerTokenFetchClient extends FetchClient {
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
class LambdaFetchClient extends BearerTokenFetchClient {
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
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            this.token = yield this.tokenFactory({ url, options });
            return _super.fetch.call(this, url, options);
        });
    }
}
/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
class SPFxAdalClient extends LambdaFetchClient {
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    constructor(context) {
        super((params) => tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
            const provider = yield this.context.aadTokenProviderFactory.getTokenProvider();
            return provider.getToken(resource);
        });
    }
}
//# sourceMappingURL=net.js.map
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
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_es6_awaiter(this, void 0, void 0, function* () {
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

function tslib_tslib_es6_awaiter(thisArg, _arguments, P, generator) {
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
class TextParser extends (/* unused pure expression or super */ null && (ODataParser)) {
    parseImpl(r, resolve) {
        r.text().then(resolve);
    }
}
class BlobParser extends ODataParser {
    parseImpl(r, resolve) {
        r.blob().then(resolve);
    }
}
class JSONParser extends (/* unused pure expression or super */ null && (ODataParser)) {
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
class LambdaParser extends ODataParser {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/types.js
class GraphEndpoints {
    /**
     *
     * @param url The url to set the endpoint
     */
    static ensure(url, endpoint) {
        const all = [GraphEndpoints.Beta, GraphEndpoints.V1];
        let regex = new RegExp(endpoint, "i");
        const replaces = all.filter(s => !regex.test(s)).map(s => s.replace(".", "\\."));
        regex = new RegExp(`/?(${replaces.join("|")})/?`, "ig");
        return url.replace(regex, `/${endpoint}/`);
    }
}
GraphEndpoints.Beta = "beta";
GraphEndpoints.V1 = "v1.0";
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphhttpclient.js

class GraphHttpClient {
    constructor(...args) {
        // constructor(...args: [runtime: Runtime] | [impl: IHttpClientImpl, runtime?: Runtime]) {
        if (args[0] instanceof Runtime) {
            this._runtime = args[0];
        }
        else {
            this._runtime = args.length > 1 && args[1] instanceof Runtime ? args[1] : DefaultRuntime;
            this._impl = args[0];
        }
        this._impl = this._runtime.get("graph").fetchClientFactory();
    }
    fetch(url, options = {}) {
        var _a;
        const headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        mergeHeaders(headers, (_a = this._runtime.get("graph")) === null || _a === void 0 ? void 0 : _a.headers);
        // second we add the local options so we can overwrite the globals
        mergeHeaders(headers, options.headers);
        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json");
        }
        if (!headers.has("SdkVersion")) {
            // this marks the requests for understanding by the service
            headers.append("SdkVersion", "PnPCoreJS/2.1.1");
        }
        const opts = util_assign(options, { headers: headers });
        return this.fetchRaw(url, opts);
    }
    fetchRaw(url, options = {}) {
        // here we need to normalize the headers
        const rawHeaders = new Headers();
        mergeHeaders(rawHeaders, options.headers);
        options = util_assign(options, { headers: rawHeaders });
        const retry = (ctx) => {
            this._impl.fetch(url, options).then((response) => ctx.resolve(response)).catch((response) => {
                // Check if request was throttled - http status code 429
                // Check if request failed due to server unavailable - http status code 503
                // Check if request failed due to gateway timeout - http status code 504
                if (response.status !== 429 && response.status !== 503 && response.status !== 504) {
                    ctx.reject(response);
                }
                // grab our current delay
                const delay = ctx.delay;
                // Increment our counters.
                ctx.delay *= 2;
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(response);
                }
                // Set our retry timeout for {delay} milliseconds.
                setTimeout(getCtxCallback(this, retry, ctx), delay);
            });
        };
        return new Promise((resolve, reject) => {
            const retryContext = {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            };
            retry.call(this, retryContext);
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
//# sourceMappingURL=graphhttpclient.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/utils/toabsoluteurl.js


/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl, runtime = DefaultRuntime) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (isUrlAbsolute(candidateUrl)) {
            // if we are already absolute, then just return the url
            return candidateUrl;
        }
        let baseUrl = (_a = runtime.get("graph")) === null || _a === void 0 ? void 0 : _a.baseUrl;
        if (!stringIsNullOrEmpty(baseUrl)) {
            // base url specified either with baseUrl of spfxContext config property
            return combine(baseUrl, candidateUrl);
        }
        const spFxContext = runtime.get("spfxContext");
        if (objectDefinedNotNull(spFxContext)) {
            try {
                // this may let us read the url from the graph context
                const client = yield spFxContext.msGraphClientFactory.getClient();
                baseUrl = (_c = (_b = client) === null || _b === void 0 ? void 0 : _b.constructor) === null || _c === void 0 ? void 0 : _c._graphBaseUrl;
                if (!stringIsNullOrEmpty(baseUrl)) {
                    return combine(baseUrl, candidateUrl);
                }
                // eslint-disable-next-line no-empty
            }
            catch (e) { }
        }
        // try one last time with the default
        return combine("https://graph.microsoft.com", candidateUrl);
    });
}
//# sourceMappingURL=toabsoluteurl.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/operations.js





function registerCustomRequestClientFactory(requestClientFactory) {
    httpClientFactory = isFunc(requestClientFactory) ? () => requestClientFactory : defaultFactory;
}
const defaultFactory = (runtime) => () => new GraphHttpClient(runtime);
let httpClientFactory = defaultFactory;
const send = (method) => {
    return function (o, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
const graphGet = (o, options) => send("GET")(o, options);
const graphPost = (o, options) => send("POST")(o, options);
const graphDelete = (o, options) => send("DELETE")(o, options);
const graphPatch = (o, options) => send("PATCH")(o, options);
const graphPut = (o, options) => send("PUT")(o, options);
//# sourceMappingURL=operations.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphqueryable.js




const graphInvokableFactory = (f) => {
    return invokableFactory(f);
};
/**
 * Queryable Base Class
 *
 */
class _GraphQueryable extends Queryable {
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param baseUrl A string or Queryable that should form the base part of the url
     *
     */
    constructor(baseUrl, path) {
        let url = "";
        let parentUrl = "";
        const query = new Map();
        if (typeof baseUrl === "string") {
            parentUrl = baseUrl;
            url = combine(parentUrl, path);
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = combine(parentUrl, path);
        }
        super({
            parentUrl,
            query,
            url,
        });
        // post init actions
        if (typeof baseUrl !== "string") {
            this.configureFrom(baseUrl);
        }
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
    defaultAction(options) {
        return graphGet(this, options);
    }
    get(options) {
        return graphGet(this, options);
    }
    /**
     * Gets the full url with query information
     *
     */
    toUrlAndQuery() {
        let url = this.toUrl();
        if (this.query.size > 0) {
            const char = url.indexOf("?") > -1 ? "&" : "?";
            url += `${char}${Array.from(this.query).map((v) => v[0] + "=" + v[1]).join("&")}`;
        }
        return url;
    }
    setEndpoint(endpoint) {
        this.data.url = GraphEndpoints.ensure(this.data.url, endpoint);
        return this;
    }
    /**
     * Clones this queryable into a new queryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     * @param includeQuery If true all of the query values will be copied to the cloned instance
     */
    clone(factory, additionalPath, includeBatch = true, includeQuery = false) {
        return super.cloneTo(factory(this, additionalPath), { includeBatch, includeQuery });
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, baseUrl = this.parentUrl, path) {
        return new factory(baseUrl, path);
    }
}
const GraphQueryable = graphInvokableFactory(_GraphQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _GraphQueryableCollection extends _GraphQueryable {
    /**
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", filter);
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
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    skip(num) {
        this.query.set("$skip", num.toString());
        return this;
    }
    /**
     * 	To request second and subsequent pages of Graph data
     */
    skipToken(token) {
        this.query.set("$skiptoken", token);
        return this;
    }
    /**
     * 	Retrieves the total count of matching resources
     */
    get count() {
        this.query.set("$count", "true");
        return this;
    }
}
const GraphQueryableCollection = graphInvokableFactory(_GraphQueryableCollection);
class _GraphQueryableSearchableCollection extends _GraphQueryableCollection {
    /**
     * 	To request second and subsequent pages of Graph data
     */
    search(query) {
        this.query.set("$search", query);
        return this;
    }
}
const GraphQueryableSearchableCollection = graphInvokableFactory(_GraphQueryableSearchableCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _GraphQueryableInstance extends _GraphQueryable {
}
const GraphQueryableInstance = graphInvokableFactory(_GraphQueryableInstance);
//# sourceMappingURL=graphqueryable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/decorators.js


/**
 * Decorator used to specify the default path for Queryable objects
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
/**
 * Adds the delete method to the tagged class
 */
function deleteable() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            delete() {
                return graphDelete(this);
            }
        };
    };
}
/**
 * Adds the delete method to the tagged class
 */
function deleteableWithETag() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            delete(eTag = "*") {
                return graphDelete(this, headers({
                    "If-Match": eTag,
                }));
            }
        };
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateable() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            update(props) {
                return graphPatch(this, body(props));
            }
        };
    };
}
/**
 * Adds the update method to the tagged class
 */
function updateableWithETag() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            update(props, eTag = "*") {
                return graphPatch(this, body(props, headers({
                    "If-Match": eTag,
                })));
            }
        };
    };
}
/**
 * Adds the add method to the tagged class
 */
function addable() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            add(props) {
                return graphPost(this, body(props));
            }
        };
    };
}
/**
 * Adds the getById method to a collection
 */
function getById(factory) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            getById(id) {
                return factory(this, id);
            }
        };
    };
}
//# sourceMappingURL=decorators.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/types.js





/**
 * Conversation
 */
let _Conversation = class _Conversation extends _GraphQueryableInstance {
    /**
     * Get all the threads in a group conversation.
     */
    get threads() {
        return Threads(this);
    }
};
_Conversation = __decorate([
    updateable(),
    deleteable()
], _Conversation);

const Conversation = graphInvokableFactory(_Conversation);
/**
 * Conversations
 */
let _Conversations = class _Conversations extends _GraphQueryableCollection {
};
_Conversations = __decorate([
    defaultPath("conversations"),
    addable(),
    getById(Conversation)
], _Conversations);

const Conversations = graphInvokableFactory(_Conversations);
/**
 * Thread
 */
let _Thread = class _Thread extends _GraphQueryableInstance {
    /**
     * Get all the threads in a group conversation.
     */
    get posts() {
        return Posts(this);
    }
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    reply(post) {
        return graphPost(this.clone(Thread, "reply"), body(post));
    }
};
_Thread = __decorate([
    deleteable()
], _Thread);

const Thread = graphInvokableFactory(_Thread);
/**
 * Threads
 */
let _Threads = class _Threads extends _GraphQueryableCollection {
};
_Threads = __decorate([
    defaultPath("threads"),
    addable(),
    getById(Thread)
], _Threads);

const Threads = graphInvokableFactory(_Threads);
/**
 * Post
 */
let _Post = class _Post extends _GraphQueryableInstance {
    /**
     * Forward a post to a recipient
     */
    forward(info) {
        return graphPost(this.clone(Post, "forward"), body(info));
    }
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    reply(post) {
        return graphPost(this.clone(Post, "reply"), body(post));
    }
};
_Post = __decorate([
    deleteable()
], _Post);

const Post = graphInvokableFactory(_Post);
/**
 * Posts
 */
let _Posts = class _Posts extends _GraphQueryableCollection {
};
_Posts = __decorate([
    defaultPath("posts"),
    addable(),
    getById(Post)
], _Posts);

const Posts = graphInvokableFactory(_Posts);
/**
 * Senders
 */
class _Senders extends _GraphQueryableCollection {
    /**
     * Add a new user or group to this senders collection
     * @param id The full @odata.id value to add (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    add(id) {
        return graphPost(this.clone(Senders, "$ref"), body({ "@odata.id": id }));
    }
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    remove(id) {
        const remover = this.clone(Senders, "$ref");
        remover.query.set("$id", id);
        return graphDelete(remover);
    }
}
const Senders = graphInvokableFactory(_Senders);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/utils/type.js
function type(n, a) {
    return Object.assign({ "@odata.type": n }, a);
}
//# sourceMappingURL=type.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/types.js






/**
 * Attachment
 */
class _Attachment extends _GraphQueryableInstance {
}
const Attachment = graphInvokableFactory(_Attachment);
/**
 * Attachments
 */
let _Attachments = class _Attachments extends _GraphQueryableCollection {
    /**
     * Add attachment to this collection
     *
     * @param name Name given to the attachment file
     * @param bytes File content
     */
    addFile(name, bytes) {
        return graphPost(this, body(type("#microsoft.graph.fileAttachment", {
            contentBytes: bytes,
            name,
        })));
    }
};
_Attachments = __decorate([
    defaultPath("attachments"),
    getById(Attachment)
], _Attachments);

const Attachments = graphInvokableFactory(_Attachments);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/conversations.js



addProp(_Post, "attachments", Attachments);
//# sourceMappingURL=conversations.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/types.js





/**
 * Represents a Directory Object entity
 */
let _DirectoryObject = class _DirectoryObject extends _GraphQueryableInstance {
    /**
   * Returns all the groups and directory roles that the specified Directory Object is a member of. The check is transitive
   *
   * @param securityEnabledOnly
   */
    getMemberObjects(securityEnabledOnly = false) {
        return graphPost(this.clone(DirectoryObject, "getMemberObjects"), body({ securityEnabledOnly }));
    }
    /**
   * Returns all the groups that the specified Directory Object is a member of. The check is transitive
   *
   * @param securityEnabledOnly
   */
    getMemberGroups(securityEnabledOnly = false) {
        return graphPost(this.clone(DirectoryObject, "getMemberGroups"), body({ securityEnabledOnly }));
    }
    /**
   * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
   * This function is transitive.
   * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
   */
    checkMemberGroups(groupIds) {
        return graphPost(this.clone(DirectoryObject, "checkMemberGroups"), body({ groupIds }));
    }
};
_DirectoryObject = __decorate([
    deleteable()
], _DirectoryObject);

const DirectoryObject = graphInvokableFactory(_DirectoryObject);
/**
 * Describes a collection of Directory Objects
 *
 */
let _DirectoryObjects = class _DirectoryObjects extends _GraphQueryableCollection {
    /**
  * Returns the directory objects specified in a list of ids. NOTE: The directory objects returned are the full objects containing all their properties.
  * The $select query option is not available for this operation.
  *
  * @param ids A collection of ids for which to return objects. You can specify up to 1000 ids.
  * @param type A collection of resource types that specifies the set of resource collections to search. Default is directoryObject.
  */
    getByIds(ids, type = DirectoryObjectTypes.directoryObject) {
        return graphPost(this.clone(DirectoryObjects, "getByIds"), body({ ids, type }));
    }
};
_DirectoryObjects = __decorate([
    defaultPath("directoryObjects"),
    getById(DirectoryObject)
], _DirectoryObjects);

const DirectoryObjects = graphInvokableFactory(_DirectoryObjects);
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
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/types.js







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
let _Group = class _Group extends _DirectoryObject {
    /**
     * Add the group to the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    addFavorite() {
        return graphPost(this.clone(Group, "addFavorite"));
    }
    /**
     * Remove the group from the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    removeFavorite() {
        return graphPost(this.clone(Group, "removeFavorite"));
    }
    /**
     * Reset the unseenCount of all the posts that the current user has not seen since their last visit
     */
    resetUnseenCount() {
        return graphPost(this.clone(Group, "resetUnseenCount"));
    }
    /**
     * Calling this method will enable the current user to receive email notifications for this group,
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    subscribeByMail() {
        return graphPost(this.clone(Group, "subscribeByMail"));
    }
    /**
     * Calling this method will prevent the current user from receiving email notifications for this group
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    unsubscribeByMail() {
        return graphPost(this.clone(Group, "unsubscribeByMail"));
    }
    /**
     * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group
     *
     * @param start Start date and time of the time range
     * @param end End date and time of the time range
     */
    getCalendarView(start, end) {
        const view = this.clone(Group, "calendarView");
        view.query.set("startDateTime", start.toISOString());
        view.query.set("endDateTime", end.toISOString());
        return view();
    }
};
_Group = __decorate([
    deleteable(),
    updateable()
], _Group);

const Group = graphInvokableFactory(_Group);
/**
 * Describes a collection of Field objects
 *
 */
let _Groups = class _Groups extends _GraphQueryableCollection {
    /**
     * Create a new group as specified in the request body.
     *
     * @param name Name to display in the address book for the group
     * @param mailNickname Mail alias for the group
     * @param groupType Type of group being created
     * @param additionalProperties A plain object collection of additional properties you want to set on the new group
     */
    add(name, mailNickname, groupType, additionalProperties = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let postBody = util_assign({
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
            const data = yield graphPost(this, body(postBody));
            return {
                data,
                group: this.getById(data.id),
            };
        });
    }
};
_Groups = __decorate([
    defaultPath("groups"),
    getById(Group)
], _Groups);

const Groups = graphInvokableFactory(_Groups);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/funcs.js

/**
 * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range,
 * from the user's default calendar, or from some other calendar of the user's
 *
 * @param this IGraphQueryable instance
 * @param start start time
 * @param end end time
 */
function calendarView(start, end) {
    const query = this.clone(GraphQueryableCollection, "calendarView");
    query.query.set("startDateTime", encodeURIComponent(start));
    query.query.set("endDateTime", encodeURIComponent(end));
    return query;
}
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/types.js






/**
 * Calendar
 */
class _Calendar extends _GraphQueryableInstance {
    constructor() {
        super(...arguments);
        this.calendarView = calendarView;
    }
    get events() {
        return Events(this);
    }
}
const Calendar = graphInvokableFactory(_Calendar);
/**
 * Calendars
 */
let _Calendars = class _Calendars extends _GraphQueryableCollection {
};
_Calendars = __decorate([
    defaultPath("calendars"),
    getById(Calendar)
], _Calendars);

const Calendars = graphInvokableFactory(_Calendars);
/**
 * Event
 */
let _Event = class _Event extends _GraphQueryableInstance {
};
_Event = __decorate([
    deleteable(),
    updateable()
], _Event);

const Event = graphInvokableFactory(_Event);
/**
 * Events
 */
let _Events = class _Events extends _GraphQueryableCollection {
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    add(properties) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield graphPost(this, body(properties));
            return {
                data,
                event: this.getById(data.id),
            };
        });
    }
};
_Events = __decorate([
    defaultPath("events"),
    getById(Event)
], _Events);

const Events = graphInvokableFactory(_Events);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/groups.js



addProp(_Group, "calendar", Calendar, "calendar");
addProp(_Group, "events", Events);
//# sourceMappingURL=groups.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/types.js




let _User = class _User extends _DirectoryObject {
    /**
    * The groups and directory roles associated with the user
    */
    get memberOf() {
        return DirectoryObjects(this, "memberOf");
    }
    /**
     * Retrieve a collection of person objects ordered by their relevance to the user
     */
    get people() {
        return People(this);
    }
};
_User = __decorate([
    updateable(),
    deleteable()
], _User);

const User = graphInvokableFactory(_User);
let _Users = class _Users extends _GraphQueryableCollection {
};
_Users = __decorate([
    defaultPath("users"),
    getById(User)
], _Users);

const Users = graphInvokableFactory(_Users);
let _People = class _People extends _GraphQueryableCollection {
};
_People = __decorate([
    defaultPath("people")
], _People);

const People = graphInvokableFactory(_People);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/users.js




addProp(_User, "calendar", Calendar, "calendar");
addProp(_User, "calendars", Calendars, "calendars");
addProp(_User, "events", Events);
_User.prototype.calendarView = calendarView;
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/index.js



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/types.js






/**
 * Contact
 */
let _Contact = class _Contact extends _GraphQueryableInstance {
};
_Contact = __decorate([
    updateable(),
    deleteable()
], _Contact);

const Contact = graphInvokableFactory(_Contact);
/**
 * Contacts
 */
let _Contacts = class _Contacts extends _GraphQueryableCollection {
    /**
    * Create a new Contact for the user.
    *
    * @param givenName The contact's given name.
    * @param surName The contact's surname.
    * @param emailAddresses The contact's email addresses.
    * @param businessPhones The contact's business phone numbers.
    * @param additionalProperties A plain object collection of additional properties you want to set on the new contact
    */
    add(givenName, surName, emailAddresses, businessPhones, additionalProperties = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = util_assign({ businessPhones, emailAddresses, givenName, surName }, additionalProperties);
            const data = yield graphPost(this, body(postBody));
            return {
                contact: this.getById(data.id),
                data,
            };
        });
    }
};
_Contacts = __decorate([
    defaultPath("contacts"),
    getById(Contact)
], _Contacts);

const Contacts = graphInvokableFactory(_Contacts);
/**
 * Contact Folder
 */
let _ContactFolder = class _ContactFolder extends _GraphQueryableInstance {
    /**
     * Gets the contacts in this contact folder
     */
    get contacts() {
        return Contacts(this);
    }
    /**
    * Gets the contacts in this contact folder
    */
    get childFolders() {
        return ContactFolders(this, "childFolders");
    }
};
_ContactFolder = __decorate([
    deleteable(),
    updateable()
], _ContactFolder);

const ContactFolder = graphInvokableFactory(_ContactFolder);
/**
 * Contact Folders
 */
let _ContactFolders = class _ContactFolders extends _GraphQueryableCollection {
    /**
     * Create a new Contact Folder for the user.
     *
     * @param displayName The folder's display name.
     * @param parentFolderId The ID of the folder's parent folder.
     */
    add(displayName, parentFolderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = {
                displayName: displayName,
                parentFolderId: parentFolderId,
            };
            const data = yield graphPost(this, body(postBody));
            return {
                contactFolder: this.getById(data.id),
                data,
            };
        });
    }
};
_ContactFolders = __decorate([
    defaultPath("contactFolders"),
    getById(ContactFolder)
], _ContactFolders);

const ContactFolders = graphInvokableFactory(_ContactFolders);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/users.js



addProp(_User, "contacts", Contacts);
addProp(_User, "contactFolders", ContactFolders);
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/groups.js



addProp(_Group, "conversations", Conversations);
addProp(_Group, "acceptedSenders", Senders, "acceptedsenders");
addProp(_Group, "rejectedSenders", Senders, "rejectedsenders");
//# sourceMappingURL=groups.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphlibconfig.js

onRuntimeCreate((runtime) => {
    const existing = runtime.get("graph");
    const graphPart = Object.assign({}, {
        fetchClientFactory: () => {
            // we keep a ref to the runtime within which we are assigned
            const context = runtime.get("spfxContext");
            if (objectDefinedNotNull(context)) {
                return new SPFxAdalClient(context);
            }
            throw Error("There is no Graph Client available, either set one using configuraiton or provide a valid SPFx Context.");
        },
    }, existing);
    runtime.assign({ graph: graphPart });
});
function graphlibconfig_setup(config, runtime = DefaultRuntime) {
    runtime.assign(config);
}
//# sourceMappingURL=graphlibconfig.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/batch.js






class GraphBatch extends Batch {
    constructor(batchUrl = "v1.0/$batch", maxRequests = 20, runtime = DefaultRuntime) {
        super();
        this.batchUrl = batchUrl;
        this.maxRequests = maxRequests;
        this.runtime = runtime;
    }
    setRuntime(runtime) {
        this.runtime = runtime;
        return this;
    }
    executeImpl() {
        return __awaiter(this, void 0, void 0, function* () {
            Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Executing batch with ${this.requests.length} requests.`, 1 /* Info */);
            if (this.requests.length < 1) {
                Logger.write("Resolving empty batch.", 1 /* Info */);
                return Promise.resolve();
            }
            const client = new GraphHttpClient(this.runtime);
            // create a working copy of our requests
            const requests = this.requests.slice();
            // this is the root of our promise chain
            while (requests.length > 0) {
                const requestsChunk = requests.splice(0, this.maxRequests);
                const batchRequest = {
                    requests: this.formatRequests(requestsChunk),
                };
                const batchOptions = {
                    body: jsS(batchRequest),
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                };
                Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Sending batch request.`, 1 /* Info */);
                const queryUrl = yield toAbsoluteUrl(this.batchUrl, this.runtime);
                yield client.fetch(queryUrl, batchOptions)
                    .then(r => r.json())
                    .then((j) => this.parseResponse(requestsChunk, j))
                    .then((parsedResponse) => {
                    Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Resolving batched requests.`, 1 /* Info */);
                    parsedResponse.responses.reduce((chain, response, index) => {
                        const request = requestsChunk[index];
                        Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Resolving batched request ${request.method} ${request.url}.`, 0 /* Verbose */);
                        return chain.then(() => request.parser.parse(response).then(request.resolve).catch(request.reject));
                    }, Promise.resolve());
                }).catch(e => {
                    throw e;
                });
            }
        });
    }
    /**
     * Urls come to the batch absolute, but the processor expects relative
     * @param url Url to ensure is relative
     */
    makeUrlRelative(url) {
        if (!isUrlAbsolute(url)) {
            // already not absolute, just give it back
            return url;
        }
        let index = url.indexOf("/v1.0/");
        if (index < 0) {
            index = url.indexOf("/beta/");
            if (index > -1) {
                // beta url
                return url.substr(index + 6);
            }
        }
        else {
            // v1.0 url
            return url.substr(index + 5);
        }
        // no idea
        return url;
    }
    formatRequests(requests) {
        return requests.map((reqInfo, index) => {
            var _a;
            let requestFragment = {
                id: `${++index}`,
                method: reqInfo.method,
                url: this.makeUrlRelative(reqInfo.url),
            };
            let headers = {};
            // merge runtime headers
            headers = util_assign(headers, (_a = this.runtime.get("graph")) === null || _a === void 0 ? void 0 : _a.headers);
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
    }
    parseResponse(requests, graphResponse) {
        return new Promise((resolve, reject) => {
            // we need to see if we have an error and report that
            if (hOP(graphResponse, "error")) {
                return reject(Error(`Error Porcessing Batch: (${graphResponse.error.code}) ${graphResponse.error.message}`));
            }
            const parsedResponses = new Array(requests.length).fill(null);
            for (let i = 0; i < graphResponse.responses.length; ++i) {
                const response = graphResponse.responses[i];
                // we create the request id by adding 1 to the index, so we place the response by subtracting one to match
                // the array of requests and make it easier to map them by index
                const responseId = parseInt(response.id, 10) - 1;
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
    }
}
//# sourceMappingURL=batch.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/rest.js




class GraphRest {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(_options = {}, _baseUrl = "v1.0", _runtime = DefaultRuntime) {
        this._options = _options;
        this._baseUrl = _baseUrl;
        this._runtime = _runtime;
    }
    createBatch() {
        return new GraphBatch().setRuntime(this._runtime);
    }
    setup(config) {
        if (config.pageContext) {
            graphlibconfig_setup({
                spfxContext: config,
            }, this._runtime);
        }
        else {
            graphlibconfig_setup(config, this._runtime);
        }
    }
    createIsolated(init) {
        return __awaiter(this, void 0, void 0, function* () {
            // merge our defaults
            init = Object.assign({
                baseUrl: "v1.0",
                cloneGlobal: true,
                config: {},
                options: {},
            }, init || {});
            const { baseUrl, cloneGlobal, options, config } = init;
            const runtime = cloneGlobal ? new Runtime(DefaultRuntime.export()) : new Runtime();
            runtime.assign(config);
            return new GraphRest(options, baseUrl, runtime);
        });
    }
    childConfigHook(callback) {
        return callback({ options: this._options, baseUrl: this._baseUrl, runtime: this._runtime });
    }
}
const graph = new GraphRest();
//# sourceMappingURL=rest.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/index.js



Reflect.defineProperty(GraphRest.prototype, "directoryObjects", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return DirectoryObjects(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/index.js



Reflect.defineProperty(GraphRest.prototype, "groups", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Groups(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/types.js



/**
 * Represents a insights entity
 */
let _Insights = class _Insights extends _GraphQueryableInstance {
    get trending() {
        return TrendingInsights(this);
    }
    get used() {
        return UsedInsights(this);
    }
    get shared() {
        return SharedInsights(this);
    }
};
_Insights = __decorate([
    defaultPath("insights")
], _Insights);

const Insights = graphInvokableFactory(_Insights);
/**
 * Describes a Trending Insight instance
 */
class _TrendingInsight extends _GraphQueryableInstance {
    get resource() {
        return Resource(this);
    }
}
const TrendingInsight = graphInvokableFactory(_TrendingInsight);
/**
 * Describes a collection of Trending Insight objects
 *
 */
let _TrendingInsights = class _TrendingInsights extends _GraphQueryableCollection {
};
_TrendingInsights = __decorate([
    defaultPath("trending"),
    getById(TrendingInsight)
], _TrendingInsights);

const TrendingInsights = graphInvokableFactory(_TrendingInsights);
/**
 * Describes a Used Insight instance
 */
class _UsedInsight extends _GraphQueryableInstance {
    get resource() {
        return Resource(this);
    }
}
const UsedInsight = graphInvokableFactory(_UsedInsight);
/**
 * Describes a collection of Used Insight objects
 *
 */
let _UsedInsights = class _UsedInsights extends _GraphQueryableCollection {
};
_UsedInsights = __decorate([
    defaultPath("used"),
    getById(UsedInsight)
], _UsedInsights);

const UsedInsights = graphInvokableFactory(_UsedInsights);
/**
 * Describes a Shared Insight instance
 */
class _SharedInsight extends _GraphQueryableInstance {
    get resource() {
        return Resource(this);
    }
}
const SharedInsight = graphInvokableFactory(_SharedInsight);
/**
 * Describes a collection of Shared Insight objects
 *
 */
let _SharedInsights = class _SharedInsights extends _GraphQueryableCollection {
};
_SharedInsights = __decorate([
    defaultPath("shared"),
    getById(SharedInsight)
], _SharedInsights);

const SharedInsights = graphInvokableFactory(_SharedInsights);
/**
 * Describes a Resource Entity instance
 */
let _Resource = class _Resource extends _GraphQueryableInstance {
};
_Resource = __decorate([
    defaultPath("resource")
], _Resource);

const Resource = graphInvokableFactory(_Resource);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/users.js



addProp(_User, "insights", Insights);
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/insights/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/invitations/types.js






/**
 * Invitations
 */
let _Invitations = class _Invitations extends _GraphQueryableCollection {
    /**
     * Create a new Invitation via invitation manager.
     *
     * @param invitedUserEmailAddress The email address of the user being invited.
     * @param inviteRedirectUrl The URL user should be redirected to once the invitation is redeemed.
     * @param additionalProperties A plain object collection of additional properties you want to set in the invitation
     */
    create(invitedUserEmailAddress, inviteRedirectUrl, additionalProperties = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = util_assign({ inviteRedirectUrl, invitedUserEmailAddress }, additionalProperties);
            const data = yield graphPost(this, body(postBody));
            return { data };
        });
    }
};
_Invitations = __decorate([
    defaultPath("invitations")
], _Invitations);

const Invitations = graphInvokableFactory(_Invitations);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/invitations/index.js



Reflect.defineProperty(GraphRest.prototype, "invitations", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Invitations(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/types.js





/**
 * Member
 */
class _Member extends _GraphQueryableInstance {
    /**
     * Removes this Member
     */
    remove() {
        return graphDelete(this.clone(Member, "$ref"));
    }
}
const Member = graphInvokableFactory(_Member);
/**
 * Members
 */
let _Members = class _Members extends _GraphQueryableCollection {
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: `https://graph.microsoft.com/v1.0/directoryObjects/${id}`)
     */
    add(id) {
        return graphPost(this.clone(Members, "$ref"), body({ "@odata.id": id }));
    }
};
_Members = __decorate([
    defaultPath("members"),
    getById(Member)
], _Members);

const Members = graphInvokableFactory(_Members);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/groups.js



addProp(_Group, "owners", Members, "owners");
addProp(_Group, "members", Members);
//# sourceMappingURL=groups.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/types.js



/**
 * Message
 */
class _Message extends _GraphQueryableInstance {
}
const Message = graphInvokableFactory(_Message);
/**
 * Messages
 */
let _Messages = class _Messages extends _GraphQueryableCollection {
};
_Messages = __decorate([
    defaultPath("messages"),
    getById(Message),
    addable()
], _Messages);

const Messages = graphInvokableFactory(_Messages);
/**
 * MailFolder
 */
class _MailFolder extends _GraphQueryableInstance {
}
const MailFolder = graphInvokableFactory(_MailFolder);
/**
 * MailFolders
 */
let _MailFolders = class _MailFolders extends _GraphQueryableCollection {
};
_MailFolders = __decorate([
    defaultPath("mailFolders"),
    getById(MailFolder),
    addable()
], _MailFolders);

const MailFolders = graphInvokableFactory(_MailFolders);
/**
 * MailboxSettings
 */
let _MailboxSettings = class _MailboxSettings extends _GraphQueryableInstance {
};
_MailboxSettings = __decorate([
    defaultPath("mailboxSettings"),
    updateable()
], _MailboxSettings);

const MailboxSettings = graphInvokableFactory(_MailboxSettings);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/users.js




addProp(_User, "messages", Messages);
addProp(_User, "mailboxSettings", MailboxSettings);
addProp(_User, "mailFolders", MailFolders);
_User.prototype.sendMail = function (message) {
    return graphPost(this.clone(User, "sendMail"), body(message));
};
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/types.js






/**
 * Describes a Drive instance
 *
 */
let _Drive = class _Drive extends _GraphQueryableInstance {
    get root() {
        return Root(this);
    }
    get list() {
        return this.clone(GraphQueryableInstance, "list");
    }
    get recent() {
        return DriveItems(this, "recent");
    }
    get sharedWithMe() {
        return DriveItems(this, "sharedWithMe");
    }
    getItemById(id) {
        return DriveItem(this, combine("items", id));
    }
};
_Drive = __decorate([
    defaultPath("drive")
], _Drive);

const Drive = graphInvokableFactory(_Drive);
/**
 * Describes a collection of Drive objects
 *
 */
let _Drives = class _Drives extends _GraphQueryableCollection {
};
_Drives = __decorate([
    defaultPath("drives"),
    getById(Drive)
], _Drives);

const Drives = graphInvokableFactory(_Drives);
/**
 * Describes a Root instance
 *
 */
let _Root = class _Root extends _GraphQueryableInstance {
    get children() {
        return DriveItems(this, "children");
    }
    search(query) {
        const searcher = this.clone(Root);
        searcher.query.set("search", `'${query}'`);
        return searcher();
    }
    get thumbnails() {
        return this.clone(GraphQueryableCollection, "thumbnails");
    }
};
_Root = __decorate([
    defaultPath("root")
], _Root);

const Root = graphInvokableFactory(_Root);
/**
 * Describes a Drive Item instance
 *
 */
let _DriveItem = class _DriveItem extends _GraphQueryableInstance {
    get children() {
        return DriveItems(this, "children");
    }
    get thumbnails() {
        return this.clone(GraphQueryableCollection, "thumbnails");
    }
    get versions() {
        return this.clone(GraphQueryableCollection, "versions");
    }
    move(parentReference, name) {
        return graphPatch(this, body(util_assign(parentReference, { name })));
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.get();
            const r = yield safeGlobal.fetch(info["@microsoft.graph.downloadUrl"], {
                headers: {
                    "accept": "application/json",
                },
                method: "GET",
                responseType: "arraybuffer",
            });
            const p = new BlobParser();
            return p.parse(r);
        });
    }
    setContent(content) {
        return graphPut(this.clone(DriveItem, "content"), {
            body: content,
        });
    }
};
_DriveItem = __decorate([
    deleteable(),
    updateable()
], _DriveItem);

const DriveItem = graphInvokableFactory(_DriveItem);
/**
 * Describes a collection of Drive Item objects
 *
 */
let _DriveItems = class _DriveItems extends _GraphQueryableCollection {
};
_DriveItems = __decorate([
    getById(DriveItem)
], _DriveItems);

const DriveItems = graphInvokableFactory(_DriveItems);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/users.js



addProp(_User, "drive", Drive);
addProp(_User, "drives", Drives);
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/types.js





/**
 * Represents a onenote entity
 */
let _OneNote = class _OneNote extends _GraphQueryableInstance {
    get notebooks() {
        return Notebooks(this);
    }
    get sections() {
        return Sections(this);
    }
    get pages() {
        return this.clone(GraphQueryableCollection, "pages");
    }
};
_OneNote = __decorate([
    defaultPath("onenote")
], _OneNote);

const OneNote = graphInvokableFactory(_OneNote);
/**
 * Describes a notebook instance
 *
 */
class _Notebook extends _GraphQueryableInstance {
    get sections() {
        return Sections(this);
    }
}
const Notebook = graphInvokableFactory(_Notebook);
/**
 * Describes a collection of Notebook objects
 *
 */
let _Notebooks = class _Notebooks extends _GraphQueryableCollection {
    /**
     * Create a new notebook as specified in the request body.
     *
     * @param displayName Notebook display name
     */
    add(displayName) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield graphPost(this, body({ displayName }));
            return {
                data,
                notebook: this.getById(data.id),
            };
        });
    }
};
_Notebooks = __decorate([
    defaultPath("notebooks"),
    getById(Notebook)
], _Notebooks);

const Notebooks = graphInvokableFactory(_Notebooks);
/**
 * Describes a sections instance
 */
class _Section extends _GraphQueryableInstance {
}
const Section = graphInvokableFactory(_Section);
/**
 * Describes a collection of Sections objects
 *
 */
let _Sections = class _Sections extends _GraphQueryableCollection {
    /**
     * Adds a new section
     *
     * @param displayName New section display name
     */
    add(displayName) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield graphPost(this, body({ displayName }));
            return {
                data,
                section: this.getById(data.id),
            };
        });
    }
};
_Sections = __decorate([
    defaultPath("sections"),
    getById(Section)
], _Sections);

const Sections = graphInvokableFactory(_Sections);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/users.js



addProp(_User, "onenote", OneNote);
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/types.js





let _Photo = class _Photo extends _GraphQueryableInstance {
    /**
     * Gets the image bytes as a blob (browser)
     */
    getBlob() {
        return this.clone(Photo, "$value", false).usingParser(new BlobParser())();
    }
    /**
     * Gets the image file bytes as a Buffer (node.js)
     */
    getBuffer() {
        return this.clone(Photo, "$value", false).usingParser(new BufferParser())();
    }
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    setContent(content) {
        return graphPatch(this.clone(Photo, "$value", false), { body: content });
    }
};
_Photo = __decorate([
    defaultPath("photo")
], _Photo);

const Photo = graphInvokableFactory(_Photo);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/groups.js



addProp(_Group, "photo", Photo);
//# sourceMappingURL=groups.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/users.js



addProp(_User, "photo", Photo);
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/index.js



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/types.js







/**
 * Planner
 */
let _Planner = class _Planner extends _GraphQueryableInstance {
    // Should Only be able to get by id, or else error occur
    get plans() {
        return Plans(this);
    }
    // Should Only be able to get by id, or else error occur
    get tasks() {
        return Tasks(this);
    }
    // Should Only be able to get by id, or else error occur
    get buckets() {
        return Buckets(this);
    }
};
_Planner = __decorate([
    defaultPath("planner")
], _Planner);

const Planner = graphInvokableFactory(_Planner);
/**
 * Details
 */
let _PlanDetails = class _PlanDetails extends _GraphQueryableInstance {
};
_PlanDetails = __decorate([
    defaultPath("details"),
    updateableWithETag()
], _PlanDetails);

const PlanDetails = graphInvokableFactory(_PlanDetails);
/**
 * Plan
 */
let _Plan = class _Plan extends _GraphQueryableInstance {
    get tasks() {
        return Tasks(this);
    }
    get buckets() {
        return Buckets(this);
    }
    get details() {
        return PlanDetails(this);
    }
};
_Plan = __decorate([
    updateableWithETag(),
    deleteableWithETag()
], _Plan);

const Plan = graphInvokableFactory(_Plan);
let _Plans = class _Plans extends _GraphQueryableCollection {
    /**
     * Create a new Planner Plan.
     *
     * @param owner Id of Group object.
     * @param title The Title of the Plan.
     */
    add(owner, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield graphPost(this, body({ owner, title }));
            return {
                data,
                plan: this.getById(data.id),
            };
        });
    }
};
_Plans = __decorate([
    defaultPath("plans"),
    getById(Plan)
], _Plans);

const Plans = graphInvokableFactory(_Plans);
/**
 * Details
 */
let _TaskDetails = class _TaskDetails extends _GraphQueryableInstance {
};
_TaskDetails = __decorate([
    defaultPath("details"),
    updateableWithETag()
], _TaskDetails);

const TaskDetails = graphInvokableFactory(_TaskDetails);
/**
 * Task
 */
let _Task = class _Task extends _GraphQueryableInstance {
    get details() {
        return TaskDetails(this);
    }
};
_Task = __decorate([
    updateableWithETag(),
    deleteableWithETag()
], _Task);

const Task = graphInvokableFactory(_Task);
/**
 * Tasks
 */
let _Tasks = class _Tasks extends _GraphQueryableCollection {
    /**
     * Create a new Planner Task.
     *
     * @param planId Id of Plan.
     * @param title The Title of the Task.
     * @param assignments Assign the task
     * @param bucketId Id of Bucket
     */
    add(planId, title, assignments, bucketId) {
        return __awaiter(this, void 0, void 0, function* () {
            let postBody = util_assign({
                planId,
                title,
            }, assignments);
            if (bucketId) {
                postBody = util_assign(postBody, {
                    bucketId: bucketId,
                });
            }
            const data = yield graphPost(this, body(postBody));
            return {
                data,
                task: this.getById(data.id),
            };
        });
    }
};
_Tasks = __decorate([
    defaultPath("tasks"),
    getById(Task)
], _Tasks);

const Tasks = graphInvokableFactory(_Tasks);
/**
 * Bucket
 */
let _Bucket = class _Bucket extends _GraphQueryableInstance {
    get tasks() {
        return Tasks(this);
    }
};
_Bucket = __decorate([
    updateableWithETag(),
    deleteableWithETag()
], _Bucket);

const Bucket = graphInvokableFactory(_Bucket);
/**
 * Buckets
 */
let _Buckets = class _Buckets extends _GraphQueryableCollection {
    /**
     * Create a new Bucket.
     *
     * @param name Name of Bucket object.
     * @param planId The Id of the Plan.
     * @param oderHint Hint used to order items of this type in a list view.
     */
    add(name, planId, orderHint) {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = {
                name: name,
                orderHint: orderHint ? orderHint : "",
                planId: planId,
            };
            const data = yield graphPost(this, body(postBody));
            return {
                bucket: this.getById(data.id),
                data,
            };
        });
    }
};
_Buckets = __decorate([
    defaultPath("buckets"),
    getById(Bucket)
], _Buckets);

const Buckets = graphInvokableFactory(_Buckets);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/groups.js



addProp(_Group, "plans", Plans, "planner/plans");
//# sourceMappingURL=groups.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/users.js



addProp(_User, "tasks", Tasks, "planner/tasks");
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/index.js





Reflect.defineProperty(GraphRest.prototype, "planner", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Planner(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/search/types.js





/**
 * Search
 */
let _Search = class _Search extends _GraphQueryableInstance {
    executeQuery(request) {
        return graphPost(Search(this, "query"), body(request));
    }
};
_Search = __decorate([
    defaultPath("search")
], _Search);

const Search = graphInvokableFactory(_Search);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/search/index.js




GraphRest.prototype.query = function (...requests) {
    return __awaiter(this, void 0, void 0, function* () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Search(baseUrl).configure(options).setRuntime(runtime).executeQuery({ requests });
        });
    });
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/types.js






/**
 * Subscription
 */
let _Subscription = class _Subscription extends _GraphQueryableInstance {
};
_Subscription = __decorate([
    deleteable(),
    updateable()
], _Subscription);

const Subscription = graphInvokableFactory(_Subscription);
/**
 * Subscriptions
 */
let _Subscriptions = class _Subscriptions extends _GraphQueryableCollection {
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
    add(changeType, notificationUrl, resource, expirationDateTime, props = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = util_assign({
                changeType,
                expirationDateTime,
                notificationUrl,
                resource,
            }, props);
            const data = yield graphPost(this, body(postBody));
            return {
                data,
                subscription: this.getById(data.id),
            };
        });
    }
};
_Subscriptions = __decorate([
    defaultPath("subscriptions"),
    getById(Subscription)
], _Subscriptions);

const Subscriptions = graphInvokableFactory(_Subscriptions);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/index.js



Reflect.defineProperty(GraphRest.prototype, "subscriptions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Subscriptions(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/types.js







/**
 * Represents a Microsoft Team
 */
let _Team = class _Team extends _GraphQueryableInstance {
    get channels() {
        return Channels(this);
    }
    /**
     * Archives this Team
     *
     * @param shouldSetSpoSiteReadOnlyForMembers Should members have Read-only in associated Team Site
     */
    archive(shouldSetSpoSiteReadOnlyForMembers = false) {
        return graphPost(this.clone(Team, "archive"), body({ shouldSetSpoSiteReadOnlyForMembers }));
    }
    /**
    * Unarchives this Team
    */
    unarchive() {
        return graphPost(this.clone(Team, "unarchive"));
    }
    /**
     * Clones this Team
     * @param name The name of the new Group
     * @param description Optional description of the group
     * @param partsToClone Parts to clone ex: apps,tabs,settings,channels,members
     * @param visibility Set visibility to public or private
     */
    cloneTeam(name, description = "", partsToClone = "apps,tabs,settings,channels,members", visibility = "private") {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = {
                description: description ? description : "",
                displayName: name,
                mailNickname: name,
                partsToClone,
                visibility,
            };
            const parser = new LambdaParser((r) => Promise.resolve(r.headers));
            const creator = Teams(this, "clone").usingParser(parser);
            // const creator = Team(this, "clone").usingParser({
            //     parse(r: Response) {
            //         return (r.headers.has("location")) ? Promise.resolve(r.headers) : Promise.resolve(r);
            //     },
            // });
            const data = yield graphPost(creator, body(postBody));
            const result = { teamId: "", operationId: "" };
            if (data.has("location")) {
                const location = data.get("location");
                const locationArray = location.split("/");
                if (locationArray.length === 3) {
                    result.teamId = locationArray[1].substring(locationArray[1].indexOf("'") + 1, locationArray[1].lastIndexOf("'"));
                    result.operationId = locationArray[2].substring(locationArray[2].indexOf("'") + 1, locationArray[2].lastIndexOf("'"));
                }
            }
            return result;
        });
    }
    getOperationById(id) {
        return GraphQueryableInstance(this, `operations/${id}`)();
    }
};
_Team = __decorate([
    defaultPath("team"),
    updateable()
], _Team);

const Team = graphInvokableFactory(_Team);
/**
 * Teams
 */
let _Teams = class _Teams extends _GraphQueryableCollection {
    create(team) {
        return __awaiter(this, void 0, void 0, function* () {
            const parser = new LambdaParser((r) => Promise.resolve(r.headers));
            const creator = Teams(this, null).usingParser(parser);
            const data = yield graphPost(creator, body(team));
            const result = { teamId: "", operationId: "" };
            if (data.has("location")) {
                const location = data.get("location");
                const locationArray = location.split("/");
                if (locationArray.length === 3) {
                    result.teamId = locationArray[1].substring(locationArray[1].indexOf("'") + 1, locationArray[1].lastIndexOf("'"));
                    result.operationId = locationArray[2].substring(locationArray[2].indexOf("'") + 1, locationArray[2].lastIndexOf("'"));
                }
            }
            return result;
        });
    }
};
_Teams = __decorate([
    defaultPath("teams"),
    getById(Team)
], _Teams);

const Teams = graphInvokableFactory(_Teams);
/**
 * Channel
 */
class _Channel extends _GraphQueryableInstance {
    get tabs() {
        return Tabs(this);
    }
}
const Channel = graphInvokableFactory(_Channel);
/**
 * Channels
 */
let _Channels = class _Channels extends _GraphQueryableCollection {
    /**
     * Creates a new Channel in the Team
     * @param displayName The display name of the new channel
     * @param description Optional description of the channel
     *
     */
    add(displayName, description = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = {
                description,
                displayName,
            };
            const data = yield graphPost(this, body(postBody));
            return {
                channel: this.getById(data.id),
                data,
            };
        });
    }
};
_Channels = __decorate([
    defaultPath("channels"),
    getById(Channel)
], _Channels);

const Channels = graphInvokableFactory(_Channels);
/**
 * Tab
 */
let _Tab = class _Tab extends _GraphQueryableInstance {
};
_Tab = __decorate([
    defaultPath("tab"),
    updateable(),
    deleteable()
], _Tab);

const Tab = graphInvokableFactory(_Tab);
/**
 * Tabs
 */
let _Tabs = class _Tabs extends _GraphQueryableCollection {
    /**
     * Adds a tab to the channel
     * @param name The name of the new Tab
     * @param appUrl The url to an app ex: https://graph.microsoft.com/beta/appCatalogs/teamsApps/12345678-9abc-def0-123456789a
     * @param tabsConfiguration visit https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamstab_add for reference
     */
    add(name, appUrl, properties) {
        return __awaiter(this, void 0, void 0, function* () {
            const postBody = util_assign({
                displayName: name,
                "teamsApp@odata.bind": appUrl,
            }, properties);
            const data = yield graphPost(this, body(postBody));
            return {
                data,
                tab: this.getById(data.id),
            };
        });
    }
};
_Tabs = __decorate([
    defaultPath("tabs"),
    getById(Tab)
], _Tabs);

const Tabs = graphInvokableFactory(_Tabs);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/users.js



addProp(_User, "joinedTeams", Teams, "joinedTeams");
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/index.js








addProp(_Group, "team", Team);
_Group.prototype.createTeam = function (props) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield graphPut(this.clone(Group, "team"), body(props));
        return {
            data,
            team: this.team,
        };
    });
};
Reflect.defineProperty(GraphRest.prototype, "teams", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Teams(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/index.js



Reflect.defineProperty(GraphRest.prototype, "me", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return User(baseUrl, "me").configure(options).setRuntime(runtime);
        });
    },
});
Reflect.defineProperty(GraphRest.prototype, "users", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return Users(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/presets/all.js





































//# sourceMappingURL=all.js.map
;// CONCATENATED MODULE: ./pnpjs-sources/index-graph.ts



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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	return __webpack_require__(154);
/******/ })()
;
});