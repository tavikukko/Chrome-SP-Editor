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
/******/ 	var __webpack_modules__ = ({

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => /* binding */ objectToMap,
/* harmony export */   "d": () => /* binding */ mergeMaps
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .isFunc */ .Wl)(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
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
//# sourceMappingURL=collections.js.map

/***/ }),

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c4": () => /* reexport safe */ _libconfig__WEBPACK_IMPORTED_MODULE_1__.c4,
/* harmony export */   "JH": () => /* reexport safe */ _net__WEBPACK_IMPORTED_MODULE_2__.JH,
/* harmony export */   "PnPClientStorage": () => /* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_4__.k,
/* harmony export */   "assign": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.f0,
/* harmony export */   "combine": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.$e,
/* harmony export */   "dateAdd": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.sO,
/* harmony export */   "getGUID": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.x$,
/* harmony export */   "hOP": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.gm,
/* harmony export */   "isArray": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.kJ,
/* harmony export */   "isFunc": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.Wl,
/* harmony export */   "jsS": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.wk,
/* harmony export */   "objectDefinedNotNull": () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_5__.Sv
/* harmony export */ });
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);
/* harmony import */ var _libconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(534);
/* harmony import */ var _net__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(762);
/* harmony import */ var _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(172);
/* harmony import */ var _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "PnPClientStorage")) __webpack_require__.d(__webpack_exports__, { "PnPClientStorage": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.PnPClientStorage; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "assign")) __webpack_require__.d(__webpack_exports__, { "assign": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.assign; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "combine")) __webpack_require__.d(__webpack_exports__, { "combine": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.combine; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "dateAdd")) __webpack_require__.d(__webpack_exports__, { "dateAdd": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.dateAdd; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "getGUID")) __webpack_require__.d(__webpack_exports__, { "getGUID": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.getGUID; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "hOP")) __webpack_require__.d(__webpack_exports__, { "hOP": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.hOP; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "isArray")) __webpack_require__.d(__webpack_exports__, { "isArray": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.isArray; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "isFunc")) __webpack_require__.d(__webpack_exports__, { "isFunc": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.isFunc; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "jsS")) __webpack_require__.d(__webpack_exports__, { "jsS": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.jsS; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__, "objectDefinedNotNull")) __webpack_require__.d(__webpack_exports__, { "objectDefinedNotNull": function() { return _spfxcontextinterface__WEBPACK_IMPORTED_MODULE_3__.objectDefinedNotNull; } });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(481);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(499);
/* harmony import */ var _safe_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(294);







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c4": () => /* binding */ RuntimeConfig
/* harmony export */ });
/* unused harmony exports setup, RuntimeConfigImpl */
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);

function setup(config) {
    RuntimeConfig.assign(config);
}
// lable mapping for known config values
var s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
var RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl(_v) {
        if (_v === void 0) { _v = new Map(); }
        this._v = _v;
        // setup defaults
        this._v.set(s[0], "session");
        this._v.set(s[1], 60);
        this._v.set(s[2], false);
        this._v.set(s[3], false);
        this._v.set(s[4], 750);
        this._v.set(s[5], null);
        this._v.set(s[6], false);
    }
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    RuntimeConfigImpl.prototype.assign = function (config) {
        this._v = (0,_collections__WEBPACK_IMPORTED_MODULE_0__/* .mergeMaps */ .d)(this._v, (0,_collections__WEBPACK_IMPORTED_MODULE_0__/* .objectToMap */ .R)(config));
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get(s[0]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get(s[1]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get(s[2]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get(s[3]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get(s[4]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get(s[5]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "ie11", {
        get: function () {
            return this.get(s[6]);
        },
        enumerable: false,
        configurable: true
    });
    return RuntimeConfigImpl;
}());

var _runtimeConfig = new RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;
//# sourceMappingURL=libconfig.js.map

/***/ }),

/***/ 762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JH": () => /* binding */ mergeOptions
/* harmony export */ });
/* unused harmony exports mergeHeaders, getADALResource, FetchClient, BearerTokenFetchClient, SPFxAdalClient */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(499);
/* harmony import */ var _safe_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);



function mergeHeaders(target, source) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__/* .objectDefinedNotNull */ .Sv)(source)) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__/* .objectDefinedNotNull */ .Sv)(source)) {
        var headers = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .f0)(target.headers || {}, source.headers);
        target = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .f0)(target, source);
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
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return _safe_global__WEBPACK_IMPORTED_MODULE_0__/* .safeGlobal.fetch */ .t.fetch(url, options);
    };
    return FetchClient;
}());

/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__extends */ .ZT)(BearerTokenFetchClient, _super);
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
        enumerable: false,
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
}(FetchClient));

/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
var SPFxAdalClient = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__extends */ .ZT)(SPFxAdalClient, _super);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
            var token;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__generator */ .Jh)(this, function (_a) {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
            var provider;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__generator */ .Jh)(this, function (_a) {
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
}(BearerTokenFetchClient));

//# sourceMappingURL=net.js.map

/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZT": () => /* binding */ __extends,
/* harmony export */   "mG": () => /* binding */ __awaiter,
/* harmony export */   "Jh": () => /* binding */ __generator
/* harmony export */ });
/* unused harmony exports __assign, __rest, __decorate, __param, __metadata, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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


/***/ }),

/***/ 294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => /* binding */ safeGlobal
/* harmony export */ });
// export either window or global
var safeGlobal = typeof __webpack_require__.g === "undefined" ? window : __webpack_require__.g;
//# sourceMappingURL=safe-global.js.map

/***/ }),

/***/ 172:
/***/ (() => {

//# sourceMappingURL=spfxcontextinterface.js.map

/***/ }),

/***/ 481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => /* binding */ PnPClientStorage
/* harmony export */ });
/* unused harmony export PnPClientStorageWrapper */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(499);
/* harmony import */ var _libconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(534);



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var PnPClientStorageWrapper = /** @class */ (function () {
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
        if (_libconfig__WEBPACK_IMPORTED_MODULE_0__/* .RuntimeConfig.enableCacheExpiration */ .c4.enableCacheExpiration) {
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
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_1__/* .objectDefinedNotNull */ .Sv)(o)) {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
            var o;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__generator */ .Jh)(this, function (_a) {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
            var i, key;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__generator */ .Jh)(this, function (_a) {
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
            var defaultTimeout = _libconfig__WEBPACK_IMPORTED_MODULE_0__/* .RuntimeConfig.defaultCachingTimeoutSeconds */ .c4.defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .dateAdd */ .sO)(new Date(), "second", defaultTimeout);
        }
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .jsS */ .wk)({ pnp: 1, expiration: expire, value: o });
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
            setTimeout((0,_util__WEBPACK_IMPORTED_MODULE_1__/* .getCtxCallback */ .y8)(_this, _this.cacheExpirationHandler), _libconfig__WEBPACK_IMPORTED_MODULE_0__/* .RuntimeConfig.cacheExpirationIntervalMilliseconds */ .c4.cacheExpirationIntervalMilliseconds);
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
        enumerable: false,
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
                this._local = new PnPClientStorageWrapper(typeof (localStorage) === "undefined" ? new MemoryStorage() : localStorage);
            }
            return this._local;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = new PnPClientStorageWrapper(typeof (sessionStorage) === "undefined" ? new MemoryStorage() : sessionStorage);
            }
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    return PnPClientStorage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y8": () => /* binding */ getCtxCallback,
/* harmony export */   "sO": () => /* binding */ dateAdd,
/* harmony export */   "$e": () => /* binding */ combine,
/* harmony export */   "x$": () => /* binding */ getGUID,
/* harmony export */   "Wl": () => /* binding */ isFunc,
/* harmony export */   "Sv": () => /* binding */ objectDefinedNotNull,
/* harmony export */   "kJ": () => /* binding */ isArray,
/* harmony export */   "f0": () => /* binding */ assign,
/* harmony export */   "wk": () => /* binding */ jsS,
/* harmony export */   "gm": () => /* binding */ hOP
/* harmony export */ });
/* unused harmony exports getRandomString, isUrlAbsolute, stringIsNullOrEmpty, sanitizeGuid, getHashCode */
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
function assign(target, source, noOverwrite, filter) {
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
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Batch": () => /* reexport */ Batch,
  "BlobParser": () => /* reexport */ BlobParser,
  "BufferParser": () => /* reexport */ BufferParser,
  "CachingOptions": () => /* reexport */ CachingOptions,
  "CachingParserWrapper": () => /* reexport */ CachingParserWrapper,
  "HttpRequestError": () => /* reexport */ HttpRequestError,
  "JSONParser": () => /* reexport */ JSONParser,
  "LambdaParser": () => /* reexport */ LambdaParser,
  "ODataParser": () => /* reexport */ ODataParser,
  "PipelineMethods": () => /* reexport */ PipelineMethods,
  "Queryable": () => /* reexport */ Queryable,
  "TextParser": () => /* reexport */ TextParser,
  "addProp": () => /* reexport */ addProp,
  "body": () => /* reexport */ body,
  "clearGlobalExtensions": () => /* reexport */ clearGlobalExtensions,
  "cloneQueryableData": () => /* reexport */ cloneQueryableData,
  "defaultPipelineBinder": () => /* reexport */ defaultPipelineBinder,
  "disableExtensions": () => /* reexport */ disableExtensions,
  "enableExtensions": () => /* reexport */ enableExtensions,
  "extendFactory": () => /* reexport */ extendFactory,
  "extendGlobal": () => /* reexport */ extendGlobal,
  "extendObj": () => /* reexport */ extendObj,
  "getDefaultPipeline": () => /* reexport */ getDefaultPipeline,
  "headers": () => /* reexport */ headers,
  "invokableFactory": () => /* reexport */ invokableFactory,
  "pipe": () => /* reexport */ pipe,
  "pipelineBinder": () => /* reexport */ pipelineBinder,
  "requestPipelineMethod": () => /* reexport */ requestPipelineMethod,
  "setResult": () => /* reexport */ setResult
});

// EXTERNAL MODULE: ./node_modules/@pnp/common/index.js
var common = __webpack_require__(621);
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/batch.js

var Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = (0,common.getGUID)(); }
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
        enumerable: false,
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
        enumerable: false,
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

//# sourceMappingURL=batch.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/caching.js

var CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        if (storeName === void 0) { storeName = common/* RuntimeConfig.defaultCachingStore */.c4.defaultCachingStore; }
        if (expiration === void 0) { expiration = (0,common.dateAdd)(new Date(), "second", common/* RuntimeConfig.defaultCachingTimeoutSeconds */.c4.defaultCachingTimeoutSeconds); }
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
        enumerable: false,
        configurable: true
    });
    CachingOptions.storage = new common.PnPClientStorage();
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

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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

;// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-extensions.js


var _enableExtensions = false;
var globalExtensions = [];
var factoryExtensions = new Map();
var ObjExtensionsSym = Symbol.for("43f7a601");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
var extendGlobal = function (e) {
    _enableExtensions = true;
    extendCol(globalExtensions, e);
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
    // factoryExtensions
    var proto = Reflect.getPrototypeOf(factory);
    if (!Reflect.has(proto, ObjExtensionsSym)) {
        Reflect.defineProperty(proto, ObjExtensionsSym, {
            value: (0,common.getGUID)(),
        });
    }
    var key = proto[ObjExtensionsSym];
    if (!factoryExtensions.has(key)) {
        factoryExtensions.set(key, []);
    }
    extendCol(factoryExtensions.get(key), extensions);
};
function extendCol(a, e) {
    if ((0,common.isArray)(e)) {
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
    globalExtensions.length = 0;
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
    var proto = Reflect.getPrototypeOf(factory);
    if (Reflect.has(proto, ObjExtensionsSym)) {
        var extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
        o = extendObj(o, extensions);
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
        extensions.push.apply(extensions, __spread(globalExtensions));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if ((0,common.isFunc)(extension)) {
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
//# sourceMappingURL=invokable-extensions.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-binder.js



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
        if (common/* RuntimeConfig.ie11 */.c4.ie11) {
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
//# sourceMappingURL=invokable-binder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/parsers.js


var ODataParser = /** @class */ (function () {
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
            HttpRequestError.init(r).then(reject);
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
        if ((0,common.hOP)(json, "d")) {
            if ((0,common.hOP)(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if ((0,common.hOP)(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var TextParser = /** @class */ (function (_super) {
    __extends(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(ODataParser));

var BlobParser = /** @class */ (function (_super) {
    __extends(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(ODataParser));

var JSONParser = /** @class */ (function (_super) {
    __extends(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(ODataParser));

var BufferParser = /** @class */ (function (_super) {
    __extends(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if ((0,common.isFunc)(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(ODataParser));

var LambdaParser = /** @class */ (function (_super) {
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
}(ODataParser));

var HttpRequestError = /** @class */ (function (_super) {
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

//# sourceMappingURL=parsers.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/queryable.js



function cloneQueryableData(source) {
    var body;
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    // Note however, even bodies that can be serialized will not be cloned.
    if (source.options && source.options.body) {
        body = source.options.body;
        source.options.body = "-";
    }
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
    if (body) {
        parsed.options.body = body;
        source.options.body = body;
    }
    return parsed;
}
var Queryable = /** @class */ (function () {
    function Queryable(dataSeed) {
        if (dataSeed === void 0) { dataSeed = {}; }
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new ODataParser(),
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
            this._data = Object.assign({}, this.data, cloneQueryableData(value));
        },
        enumerable: false,
        configurable: true
    });
    /**
    * Gets the current url
    *
    */
    Queryable.prototype.toUrl = function () {
        return this.data.url;
    };
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
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
        enumerable: false,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    Queryable.prototype.configure = function (options) {
        (0,common/* mergeOptions */.JH)(this.data.options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        (0,common/* mergeOptions */.JH)(this.data.options, o.data.options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!common/* RuntimeConfig.globalCacheDisable */.c4.globalCacheDisable) {
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
        this.data.url = (0,common.combine)(this.data.url, pathPart);
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
        if ((0,common.objectDefinedNotNull)(batch)) {
            batch.track(this);
        }
        return this;
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    Queryable.prototype.addBatchDependency = function () {
        if ((0,common.objectDefinedNotNull)(this.data.batch)) {
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
            return (0,common.objectDefinedNotNull)(this.data.batch);
        },
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    /**
     * Clones this instance's data to target
     *
     * @param target Instance to which data is written
     * @param settings [Optional] Settings controlling how clone is applied
     */
    Queryable.prototype.cloneTo = function (target, settings) {
        if (settings === void 0) { settings = {}; }
        // default values for settings
        settings = (0,common.assign)({
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
            this.query.forEach(function (v, k) { return target.query.set(k, v); });
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    };
    return Queryable;
}());

//# sourceMappingURL=queryable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/logging/logger.js
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance === undefined || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
//# sourceMappingURL=logger.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/logging/listeners.js
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

//# sourceMappingURL=listeners.js.map
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
        // this will block the batch's execute method from returning until the child requests have been resolved
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
            if (!alwaysRun && args.length > 0 && (0,common.hOP)(args[0], "hasResult") && args[0].hasResult) {
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
var PipelineMethods = /** @class */ (function () {
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
                var cacheOptions = new CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = (0,common.assign)(cacheOptions, context.cachingOptions);
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
                        if ((0,common.isFunc)(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if ((0,common.hOP)(context.parser, "hydrate")) {
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
                if ((0,common.isFunc)(context.batchDependency)) {
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
                var opts = (0,common.assign)(context.options || {}, { method: context.method });
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
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: (0,common.objectDefinedNotNull)(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: (0,common.getGUID)(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(getDefaultPipeline());
//# sourceMappingURL=pipeline-binder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/request-builders.js

function body(o, previous) {
    return Object.assign({ body: (0,common.jsS)(o) }, previous);
}
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	return __webpack_require__(420);
/******/ })()
;
});