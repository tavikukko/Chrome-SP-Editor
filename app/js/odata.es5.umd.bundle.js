(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.odata"] = factory();
	else
		root["pnp.odata"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Batch": () => (/* reexport */ Batch),
  "BlobParser": () => (/* reexport */ BlobParser),
  "BufferParser": () => (/* reexport */ BufferParser),
  "CachingOptions": () => (/* reexport */ CachingOptions),
  "CachingParserWrapper": () => (/* reexport */ CachingParserWrapper),
  "HttpRequestError": () => (/* reexport */ HttpRequestError),
  "JSONParser": () => (/* reexport */ JSONParser),
  "LambdaParser": () => (/* reexport */ LambdaParser),
  "ODataParser": () => (/* reexport */ ODataParser),
  "PipelineMethods": () => (/* reexport */ PipelineMethods),
  "Queryable": () => (/* reexport */ Queryable),
  "TextParser": () => (/* reexport */ TextParser),
  "addProp": () => (/* reexport */ addProp),
  "body": () => (/* reexport */ body),
  "clearGlobalExtensions": () => (/* reexport */ clearGlobalExtensions),
  "cloneQueryableData": () => (/* reexport */ cloneQueryableData),
  "defaultPipelineBinder": () => (/* reexport */ defaultPipelineBinder),
  "disableExtensions": () => (/* reexport */ disableExtensions),
  "enableExtensions": () => (/* reexport */ enableExtensions),
  "extendFactory": () => (/* reexport */ extendFactory),
  "extendGlobal": () => (/* reexport */ extendGlobal),
  "extendObj": () => (/* reexport */ extendObj),
  "getDefaultPipeline": () => (/* reexport */ getDefaultPipeline),
  "headers": () => (/* reexport */ headers),
  "invokableFactory": () => (/* reexport */ invokableFactory),
  "pipe": () => (/* reexport */ pipe),
  "pipelineBinder": () => (/* reexport */ pipelineBinder),
  "requestPipelineMethod": () => (/* reexport */ requestPipelineMethod),
  "setResult": () => (/* reexport */ setResult)
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
function getGUID() {
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
function util_objectDefinedNotNull(obj) {
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
    if (!util_objectDefinedNotNull(source)) {
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
    if (util_objectDefinedNotNull(o)) {
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
const safe_global_safeGlobal = typeof __webpack_require__.g === "undefined" ? window : __webpack_require__.g;
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
    if (util_objectDefinedNotNull(source)) {
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
        if (!util_objectDefinedNotNull(o)) {
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
    constructor(_batchId = getGUID()) {
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
            if (args.length > 1 && util_objectDefinedNotNull(args[1])) {
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
        if (util_objectDefinedNotNull(batch)) {
            batch.track(this);
        }
        return this;
    }
    /**
   * Blocks a batch call from occuring, MUST be cleared by calling the returned function
  */
    addBatchDependency() {
        if (util_objectDefinedNotNull(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return () => null;
    }
    /**
   * Indicates if the current query has a batch associated
   *
   */
    get hasBatch() {
        return util_objectDefinedNotNull(this.data.batch);
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
tslib_es6_decorate([
    requestPipelineMethod(true)
], PipelineMethods, "logStart", null);
tslib_es6_decorate([
    requestPipelineMethod()
], PipelineMethods, "caching", null);
tslib_es6_decorate([
    requestPipelineMethod()
], PipelineMethods, "send", null);
tslib_es6_decorate([
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
                    isBatched: util_objectDefinedNotNull(o.batch),
                    method,
                    options: null,
                    parentUrl: "",
                    parser: new ODataParser(),
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
;// CONCATENATED MODULE: ./pnpjs-sources/index-odata.ts



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
/******/ 	return __webpack_require__(170);
/******/ })()
;
});