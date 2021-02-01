(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.config-store"] = factory();
	else
		root["pnp.config-store"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CachingConfigurationProvider": () => (/* reexport */ CachingConfigurationProvider),
  "SPListConfigurationProvider": () => (/* reexport */ SPListConfigurationProvider),
  "Settings": () => (/* reexport */ Settings)
});

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
function util_isFunc(f) {
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
const objectEntries = util_isFunc(Object.entries) ? Object.entries : (o) => Object.keys(o).map((k) => [k, o[k]]);
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
;// CONCATENATED MODULE: ./node_modules/@pnp/config-store/configuration.js

/**
 * Class used to manage the current application settings
 *
 */
class Settings {
    /**
     * Creates a new instance of the settings class
     *
     * @constructor
     */
    constructor(_settings = new Map()) {
        this._settings = _settings;
    }
    /**
     * Adds a new single setting, or overwrites a previous setting with the same key
     *
     * @param {string} key The key used to store this setting
     * @param {string} value The setting value to store
     */
    add(key, value) {
        this._settings.set(key, value);
    }
    /**
     * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
     *
     * @param {string} key The key used to store this setting
     * @param {any} value The setting value to store
     */
    addJSON(key, value) {
        this._settings.set(key, jsS(value));
    }
    /**
     * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
     *
     * @param {ITypedHash<any>} hash The set of values to add
     */
    apply(hash) {
        return new Promise((resolve, reject) => {
            try {
                this._settings = mergeMaps(this._settings, objectToMap(hash));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * Loads configuration settings into the collection from the supplied provider and returns a Promise
     *
     * @param {IConfigurationProvider} provider The provider from which we will load the settings
     */
    load(provider) {
        return new Promise((resolve, reject) => {
            provider.getConfiguration().then((value) => {
                this._settings = mergeMaps(this._settings, objectToMap(value));
                resolve();
            }).catch(reject);
        });
    }
    /**
     * Gets a value from the configuration
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {string} string value from the configuration
     */
    get(key) {
        return this._settings.get(key) || null;
    }
    /**
     * Gets a JSON value, rehydrating the stored string to the original object
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {any} object from the configuration
     */
    getJSON(key) {
        const o = this.get(key);
        if (o === undefined || o === null) {
            return o;
        }
        return JSON.parse(o);
    }
}
//# sourceMappingURL=configuration.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/cachingConfigurationProvider.js

/**
 * A caching provider which can wrap other non-caching providers
 *
 */
class CachingConfigurationProvider {
    /**
     * Creates a new caching configuration provider
     * @constructor
     * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
     * @param {string} cacheKey Key that will be used to store cached items to the cache
     * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
     */
    constructor(wrappedProvider, cacheKey, cacheStore) {
        this.wrappedProvider = wrappedProvider;
        this.cacheKey = cacheKey;
        this.wrappedProvider = wrappedProvider;
        this.store = (cacheStore) ? cacheStore : this.selectPnPCache();
    }
    /**
     * Gets the wrapped configuration providers
     *
     * @return {IConfigurationProvider} Wrapped configuration provider
     */
    getWrappedProvider() {
        return this.wrappedProvider;
    }
    /**
     * Loads the configuration values either from the cache or from the wrapped provider
     *
     * @return {Promise<ITypedHash<string>>} Promise of loaded configuration values
     */
    getConfiguration() {
        // Cache not available, pass control to the wrapped provider
        if ((!this.store) || (!this.store.enabled)) {
            return this.wrappedProvider.getConfiguration();
        }
        return this.store.getOrPut(this.cacheKey, () => {
            return this.wrappedProvider.getConfiguration().then((providedConfig) => {
                this.store.put(this.cacheKey, providedConfig);
                return providedConfig;
            });
        });
    }
    selectPnPCache() {
        const pnpCache = new PnPClientStorage();
        if ((pnpCache.local) && (pnpCache.local.enabled)) {
            return pnpCache.local;
        }
        if ((pnpCache.session) && (pnpCache.session.enabled)) {
            return pnpCache.session;
        }
        throw Error("Cannot create a caching configuration provider since cache is not available.");
    }
}
//# sourceMappingURL=cachingConfigurationProvider.js.map
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
            if (util_isFunc(extension)) {
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


class parsers_ODataParser {
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
class TextParser extends (/* unused pure expression or super */ null && (parsers_ODataParser)) {
    parseImpl(r, resolve) {
        r.text().then(resolve);
    }
}
class BlobParser extends (/* unused pure expression or super */ null && (parsers_ODataParser)) {
    parseImpl(r, resolve) {
        r.blob().then(resolve);
    }
}
class JSONParser extends (/* unused pure expression or super */ null && (parsers_ODataParser)) {
    parseImpl(r, resolve) {
        r.json().then(resolve);
    }
}
class BufferParser extends (/* unused pure expression or super */ null && (parsers_ODataParser)) {
    parseImpl(r, resolve) {
        if (isFunc(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    }
}
class LambdaParser extends (/* unused pure expression or super */ null && (parsers_ODataParser)) {
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
            parser: new parsers_ODataParser(),
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
                        if (util_isFunc(context.batchDependency)) {
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
                if (util_isFunc(context.batchDependency)) {
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
                    parser: new parsers_ODataParser(),
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
            return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        var _a;
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            let opts = util_assign(options, { cache: "no-cache", credentials: "same-origin" }, true);
            const headers = new Headers();
            // first we add the global headers so they can be overwritten by any passed in locally to this call
            mergeHeaders(headers, (_a = this._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.headers);
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
                let clientTag = `PnPCoreJS:2.1.1:${methodName}`;
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
    return (webUrl) => tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        const parsed = yield (new parsers_ODataParser()).parse(resp).then(r => r.GetContextWebInformation);
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
    return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
class SPODataEntityParserImpl extends (/* unused pure expression or super */ null && (ODataParser)) {
    constructor(factory) {
        super();
        this.factory = factory;
        this.hydrate = (d) => {
            const o = this.factory(odataUrlFrom(d), null);
            return assign(o, d);
        };
    }
    parse(r) {
        return super.parse(r).then((d) => {
            const o = this.factory(odataUrlFrom(d), null);
            return assign(o, d);
        });
    }
}
class SPODataEntityArrayParserImpl extends (/* unused pure expression or super */ null && (ODataParser)) {
    constructor(factory) {
        super();
        this.factory = factory;
        this.hydrate = (d) => {
            return d.map(v => {
                const o = this.factory(odataUrlFrom(v), null);
                return assign(o, v);
            });
        };
    }
    parse(r) {
        return super.parse(r).then((d) => {
            return d.map(v => {
                const o = this.factory(odataUrlFrom(v), null);
                return assign(o, v);
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
                    headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.1.1:batch");
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
            return responses.reduce((p, response, index) => p.then(() => tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            const web = yield this.rootWeb.select("Url")();
            return tag.configure(Web(web.Url), "si.getRootWeb");
        });
    }
    /**
     * Gets the context information for this site collection
     */
    getContextInfo() {
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
tslib_es6_decorate([
    tag("si.getChanges")
], _Site.prototype, "getChanges", null);
tslib_es6_decorate([
    tag("si.openWebById")
], _Site.prototype, "openWebById", null);
_Site = tslib_es6_decorate([
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
tslib_es6_decorate([
    tag("ws.add")
], _Webs.prototype, "add", null);
_Webs = tslib_es6_decorate([
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
tslib_es6_decorate([
    tag("w.getParentWeb")
], _Web.prototype, "getParentWeb", null);
tslib_es6_decorate([
    tag("w.update")
], _Web.prototype, "update", null);
tslib_es6_decorate([
    tag("w.applyTheme")
], _Web.prototype, "applyTheme", null);
tslib_es6_decorate([
    tag("w.applyWebTemplate")
], _Web.prototype, "applyWebTemplate", null);
tslib_es6_decorate([
    tag("w.getChanges")
], _Web.prototype, "getChanges", null);
tslib_es6_decorate([
    tag("w.mapToIcon")
], _Web.prototype, "mapToIcon", null);
tslib_es6_decorate([
    tag("w.getStorageEntity")
], _Web.prototype, "getStorageEntity", null);
tslib_es6_decorate([
    tag("w.setStorageEntity")
], _Web.prototype, "setStorageEntity", null);
tslib_es6_decorate([
    tag("w.removeStorageEntity")
], _Web.prototype, "removeStorageEntity", null);
_Web = tslib_es6_decorate([
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            const json = yield spPost(this.clone(Lists, "ensuresiteassetslibrary"));
            return List(odataUrlFrom(json));
        });
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary() {
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            const json = yield spPost(this.clone(Lists, "ensuresitepageslibrary"));
            return List(odataUrlFrom(json));
        });
    }
};
tslib_es6_decorate([
    tag("ls.add")
], _Lists.prototype, "add", null);
tslib_es6_decorate([
    tag("ls.ensure")
], _Lists.prototype, "ensure", null);
tslib_es6_decorate([
    tag("ls.ensureSiteAssetsLibrary")
], _Lists.prototype, "ensureSiteAssetsLibrary", null);
tslib_es6_decorate([
    tag("ls.ensureSitePagesLibrary")
], _Lists.prototype, "ensureSitePagesLibrary", null);
_Lists = tslib_es6_decorate([
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(List, "recycle"));
            return hOP(data, "Recycle") ? data.Recycle : data;
        });
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    renderListData(viewXml) {
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            const data = yield spPost(this.clone(List, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
            // data will be a string, so we parse it again
            return JSON.parse(hOP(data, "RenderListFormData") ? data.RenderListFormData : data);
        });
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    reserveListItemId() {
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
tslib_es6_decorate([
    tag("l.update")
], _List.prototype, "update", null);
tslib_es6_decorate([
    tag("l.getChanges")
], _List.prototype, "getChanges", null);
tslib_es6_decorate([
    tag("l.CAMLQuery")
], _List.prototype, "getItemsByCAMLQuery", null);
tslib_es6_decorate([
    tag("l.ChangesSinceToken")
], _List.prototype, "getListItemChangesSinceToken", null);
tslib_es6_decorate([
    tag("l.recycle")
], _List.prototype, "recycle", null);
tslib_es6_decorate([
    tag("l.renderListData")
], _List.prototype, "renderListData", null);
tslib_es6_decorate([
    tag("l.AsStream")
], _List.prototype, "renderListDataAsStream", null);
tslib_es6_decorate([
    tag("l.renderListFormData")
], _List.prototype, "renderListFormData", null);
tslib_es6_decorate([
    tag("l.reserveListItemId")
], _List.prototype, "reserveListItemId", null);
tslib_es6_decorate([
    tag("l.getListItemEntityTypeFullName")
], _List.prototype, "getListItemEntityTypeFullName", null);
tslib_es6_decorate([
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
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/web.js







addProp(_Web, "lists", Lists);
addProp(_Web, "siteUserInfoList", List, "siteuserinfolist");
addProp(_Web, "defaultDocumentLibrary", List, "DefaultDocumentLibrary");
addProp(_Web, "customListTemplates", SharePointQueryableCollection, "getcustomlisttemplates");
_Web.prototype.getList = function (listRelativeUrl) {
    return List(this, `getList('${escapeQueryStrValue(listRelativeUrl)}')`);
};
_Web.prototype.getCatalog = function (type) {
    return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
        const data = yield this.clone(Web, `getcatalog(${type})`).select("Id").get();
        return List(odataUrlFrom(data));
    });
};
//# sourceMappingURL=web.js.map
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            return candidatelistItemEntityTypeFullName ?
                candidatelistItemEntityTypeFullName :
                this.getParent(List).getListItemEntityTypeFullName();
        });
    }
};
tslib_es6_decorate([
    tag("is.getPaged")
], _Items.prototype, "getPaged", null);
tslib_es6_decorate([
    tag("is.getAll")
], _Items.prototype, "getAll", null);
tslib_es6_decorate([
    tag("is.add")
], _Items.prototype, "add", null);
_Items = tslib_es6_decorate([
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
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
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function* () {
            return candidatelistItemEntityTypeFullName ?
                candidatelistItemEntityTypeFullName :
                this.list.getListItemEntityTypeFullName();
        });
    }
}
tslib_es6_decorate([
    tag("i.recycle")
], _Item.prototype, "recycle", null);
tslib_es6_decorate([
    tag("i.del-params")
], _Item.prototype, "deleteWithParams", null);
tslib_es6_decorate([
    tag("i.getWopiFrameUrl")
], _Item.prototype, "getWopiFrameUrl", null);
tslib_es6_decorate([
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
_ItemVersions = tslib_es6_decorate([
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
class PagedItemCollectionParser extends parsers_ODataParser {
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
class ItemUpdatedParser extends parsers_ODataParser {
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
;// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/spListConfigurationProvider.js



/**
 * A configuration provider which loads configuration values from a SharePoint list
 *
 */
class SPListConfigurationProvider {
    /**
     * Creates a new SharePoint list based configuration provider
     * @constructor
     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default: "config")
     * @param {string} keyFieldName The name of the field in the list to use as the setting key (optional, default: "Title")
     * @param {string} valueFieldName The name of the field in the list to use as the setting value (optional, default: "Value")
     */
    constructor(web, listTitle = "config", keyFieldName = "Title", valueFieldName = "Value") {
        this.web = web;
        this.listTitle = listTitle;
        this.keyFieldName = keyFieldName;
        this.valueFieldName = valueFieldName;
    }
    /**
     * Loads the configuration values from the SharePoint list
     *
     * @return {Promise<ITypedHash<string>>} Promise of loaded configuration values
     */
    getConfiguration() {
        return this.web.lists.getByTitle(this.listTitle).items.select(this.keyFieldName, this.valueFieldName)()
            .then((data) => data.reduce((c, item) => {
            c[item[this.keyFieldName]] = item[this.valueFieldName];
            return c;
        }, {}));
    }
    /**
     * Wraps the current provider in a cache enabled provider
     *
     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
     */
    asCaching(cacheKey = `pnp_configcache_splist_${this.web.toUrl()}+${this.listTitle}`) {
        return new CachingConfigurationProvider(this, cacheKey);
    }
}
//# sourceMappingURL=spListConfigurationProvider.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/config-store/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./pnpjs-sources/index-config-store.ts



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
/******/ 	return __webpack_require__(912);
/******/ })()
;
});