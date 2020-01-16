(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.sp"] = factory();
	else
		root["pnp.sp"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@pnp/common/module/util.js
var util = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/@pnp/common/module/collections.js

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = Object(util["j" /* isFunc */])(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
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
// CONCATENATED MODULE: ./node_modules/@pnp/common/module/libconfig.js

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
var libconfig_RuntimeConfigImpl = /** @class */ (function () {
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
        this._v = mergeMaps(this._v, objectToMap(config));
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get(s[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get(s[1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get(s[2]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get(s[3]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get(s[4]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get(s[5]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "ie11", {
        get: function () {
            var v = this.get(s[6]);
            if (v) {
                console.warn("PnPjs is running in ie11 compat mode. Not all features may work as expected.");
            }
            return v;
        },
        enumerable: true,
        configurable: true
    });
    return RuntimeConfigImpl;
}());

var _runtimeConfig = new libconfig_RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;
//# sourceMappingURL=libconfig.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/common/module/net.js
var net = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@pnp/common/module/storage.js



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
        if (!Object(util["m" /* objectDefinedNotNull */])(o)) {
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
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var o;
            return Object(tslib_es6["__generator"])(this, function (_a) {
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
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var i, key;
            return Object(tslib_es6["__generator"])(this, function (_a) {
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
            expire = Object(util["c" /* dateAdd */])(new Date(), "second", defaultTimeout);
        }
        return Object(util["l" /* jsS */])({ pnp: 1, expiration: expire, value: o });
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
            setTimeout(Object(util["d" /* getCtxCallback */])(_this, _this.cacheExpirationHandler), RuntimeConfig.cacheExpirationIntervalMilliseconds);
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

//# sourceMappingURL=storage.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/common/module/index.js
/* concated harmony reexport objectToMap */__webpack_require__.d(__webpack_exports__, "objectToMap", function() { return objectToMap; });
/* concated harmony reexport mergeMaps */__webpack_require__.d(__webpack_exports__, "mergeMaps", function() { return mergeMaps; });
/* concated harmony reexport setup */__webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* concated harmony reexport RuntimeConfigImpl */__webpack_require__.d(__webpack_exports__, "RuntimeConfigImpl", function() { return libconfig_RuntimeConfigImpl; });
/* concated harmony reexport RuntimeConfig */__webpack_require__.d(__webpack_exports__, "RuntimeConfig", function() { return RuntimeConfig; });
/* concated harmony reexport mergeHeaders */__webpack_require__.d(__webpack_exports__, "mergeHeaders", function() { return net["e" /* mergeHeaders */]; });
/* concated harmony reexport mergeOptions */__webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return net["f" /* mergeOptions */]; });
/* concated harmony reexport getADALResource */__webpack_require__.d(__webpack_exports__, "getADALResource", function() { return net["d" /* getADALResource */]; });
/* concated harmony reexport FetchClient */__webpack_require__.d(__webpack_exports__, "FetchClient", function() { return net["b" /* FetchClient */]; });
/* concated harmony reexport BearerTokenFetchClient */__webpack_require__.d(__webpack_exports__, "BearerTokenFetchClient", function() { return net["a" /* BearerTokenFetchClient */]; });
/* concated harmony reexport SPFxAdalClient */__webpack_require__.d(__webpack_exports__, "SPFxAdalClient", function() { return net["c" /* SPFxAdalClient */]; });
/* concated harmony reexport PnPClientStorageWrapper */__webpack_require__.d(__webpack_exports__, "PnPClientStorageWrapper", function() { return storage_PnPClientStorageWrapper; });
/* concated harmony reexport PnPClientStorage */__webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return PnPClientStorage; });
/* concated harmony reexport getCtxCallback */__webpack_require__.d(__webpack_exports__, "getCtxCallback", function() { return util["d" /* getCtxCallback */]; });
/* concated harmony reexport dateAdd */__webpack_require__.d(__webpack_exports__, "dateAdd", function() { return util["c" /* dateAdd */]; });
/* concated harmony reexport combine */__webpack_require__.d(__webpack_exports__, "combine", function() { return util["b" /* combine */]; });
/* concated harmony reexport getRandomString */__webpack_require__.d(__webpack_exports__, "getRandomString", function() { return util["g" /* getRandomString */]; });
/* concated harmony reexport getGUID */__webpack_require__.d(__webpack_exports__, "getGUID", function() { return util["e" /* getGUID */]; });
/* concated harmony reexport isFunc */__webpack_require__.d(__webpack_exports__, "isFunc", function() { return util["j" /* isFunc */]; });
/* concated harmony reexport objectDefinedNotNull */__webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return util["m" /* objectDefinedNotNull */]; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "isArray", function() { return util["i" /* isArray */]; });
/* concated harmony reexport assign */__webpack_require__.d(__webpack_exports__, "assign", function() { return util["a" /* assign */]; });
/* concated harmony reexport isUrlAbsolute */__webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return util["k" /* isUrlAbsolute */]; });
/* concated harmony reexport stringIsNullOrEmpty */__webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return util["o" /* stringIsNullOrEmpty */]; });
/* concated harmony reexport sanitizeGuid */__webpack_require__.d(__webpack_exports__, "sanitizeGuid", function() { return util["n" /* sanitizeGuid */]; });
/* concated harmony reexport jsS */__webpack_require__.d(__webpack_exports__, "jsS", function() { return util["l" /* jsS */]; });
/* concated harmony reexport hOP */__webpack_require__.d(__webpack_exports__, "hOP", function() { return util["h" /* hOP */]; });
/* concated harmony reexport getHashCode */__webpack_require__.d(__webpack_exports__, "getHashCode", function() { return util["f" /* getHashCode */]; });





//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@pnp/common/module/index.js + 3 modules
var common_module = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/batch.js

var batch_Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = Object(common_module["getGUID"])(); }
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
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
            return this._reqs;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param url Request url
     * @param method Request method (GET, POST, etc)
     * @param options Any request options
     * @param parser The parser used to handle the eventual return from the query
     * @param id An identifier used to track a request within a batch
     */
    Batch.prototype.add = function (url, method, options, parser, id) {
        var info = {
            id: id,
            method: method.toUpperCase(),
            options: options,
            parser: parser,
            reject: null,
            resolve: null,
            url: url,
        };
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
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/caching.js

var caching_CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        if (storeName === void 0) { storeName = common_module["RuntimeConfig"].defaultCachingStore; }
        if (expiration === void 0) { expiration = Object(common_module["dateAdd"])(new Date(), "second", common_module["RuntimeConfig"].defaultCachingTimeoutSeconds); }
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
    CachingOptions.storage = new common_module["PnPClientStorage"]();
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
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/add-prop.js
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
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/invokable-extensions.js


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
    if (Object(common_module["isArray"])(e)) {
        // @ts-ignore
        a.push.apply(a, Object(tslib_es6["__spread"])(e));
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
            extensions.push.apply(extensions, Object(tslib_es6["__spread"])(Reflect.get(target, ObjExtensionsSym)));
        }
        // second we need to process any global extensions
        extensions.push.apply(extensions, Object(tslib_es6["__spread"])(globaExtensions));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if (Object(common_module["isFunc"])(extension)) {
                // this extension is a function which we call
                result = extension.apply(void 0, Object(tslib_es6["__spread"])([op, target], rest));
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op).apply(void 0, Object(tslib_es6["__spread"])([target], rest));
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or.apply(void 0, Object(tslib_es6["__spread"])([target], rest));
}
//# sourceMappingURL=invokable-extensions.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/invokable-binder.js



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
            }, new (constructor.bind.apply(constructor, Object(tslib_es6["__spread"])([void 0], as)))());
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        if (common_module["RuntimeConfig"].ie11) {
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
                        return Reflect.get(a[0], a[1]);
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
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/parsers.js


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
        if (Object(common_module["hOP"])(json, "d")) {
            if (Object(common_module["hOP"])(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (Object(common_module["hOP"])(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var parsers_TextParser = /** @class */ (function (_super) {
    Object(tslib_es6["__extends"])(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(parsers_ODataParser));

var parsers_BlobParser = /** @class */ (function (_super) {
    Object(tslib_es6["__extends"])(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(parsers_ODataParser));

var parsers_JSONParser = /** @class */ (function (_super) {
    Object(tslib_es6["__extends"])(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(parsers_ODataParser));

var parsers_BufferParser = /** @class */ (function (_super) {
    Object(tslib_es6["__extends"])(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (Object(common_module["isFunc"])(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(parsers_ODataParser));

var parsers_LambdaParser = /** @class */ (function (_super) {
    Object(tslib_es6["__extends"])(LambdaParser, _super);
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
    Object(tslib_es6["__extends"])(HttpRequestError, _super);
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
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var t;
            return Object(tslib_es6["__generator"])(this, function (_a) {
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
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/queryable.js



function cloneQueryableData(source) {
    var s = JSON.stringify(source, function (key, value) {
        switch (key) {
            case "query":
                return JSON.stringify(Object(tslib_es6["__spread"])(value));
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
        Object(common_module["mergeOptions"])(this.data.options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        Object(common_module["mergeOptions"])(this.data.options, o.data.options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!common_module["RuntimeConfig"].globalCacheDisable) {
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
        this.data.url = Object(common_module["combine"])(this.data.url, pathPart);
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
        if (this.batch !== null) {
            throw Error("This query is already part of a batch.");
        }
        if (Object(common_module["objectDefinedNotNull"])(batch)) {
            this.data.batch = batch;
        }
        return this;
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    Queryable.prototype.addBatchDependency = function () {
        if (Object(common_module["objectDefinedNotNull"])(this.data.batch)) {
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
            return Object(common_module["objectDefinedNotNull"])(this.data.batch);
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

//# sourceMappingURL=queryable.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/logging/module/index.js + 2 modules
var logging_module = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/pipeline.js




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    logging_module["Logger"].log({
        data: logging_module["Logger"].activeLogLevel === 0 /* Verbose */ ? context.result : {},
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
        logging_module["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    var promise = next(context).then(function (ctx) { return returnResult(ctx); }).catch(function (e) {
        logging_module["Logger"].error(e);
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
            if (!alwaysRun && args.length > 0 && Object(common_module["hOP"])(args[0], "hasResult") && args[0].hasResult) {
                logging_module["Logger"].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            logging_module["Logger"].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
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
            logging_module["Logger"].log({
                data: logging_module["Logger"].activeLogLevel === 1 /* Info */ ? {} : context,
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
                logging_module["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new caching_CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = Object(common_module["assign"])(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        // ensure we clear any held batch dependency we are resolving from the cache
                        logging_module["Logger"].log({
                            data: logging_module["Logger"].activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        if (Object(common_module["isFunc"])(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (Object(common_module["hOP"])(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                logging_module["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
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
                // we are in a batch, so add to batch, remove dependency, and resolve with the batch's promise
                var p = context.batch.add(context.url, context.method, context.options, context.parser, context.requestId);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (Object(common_module["isFunc"])(context.batchDependency)) {
                    context.batchDependency();
                }
                logging_module["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                logging_module["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = Object(common_module["assign"])(context.options || {}, { method: context.method });
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
                logging_module["Logger"].log({
                    data: logging_module["Logger"].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.method + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                logging_module["Logger"].log({
                    data: logging_module["Logger"].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.method + " request.",
                });
            }
            resolve(context);
        });
    };
    Object(tslib_es6["__decorate"])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    Object(tslib_es6["__decorate"])([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    Object(tslib_es6["__decorate"])([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    Object(tslib_es6["__decorate"])([
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
//# sourceMappingURL=pipeline.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/pipeline-binder.js




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
                    batch: o.batch || null,
                    batchDependency: null,
                    cachingOptions: null,
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: Object(common_module["objectDefinedNotNull"])(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new parsers_ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: Object(common_module["getGUID"])(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(getDefaultPipeline());
//# sourceMappingURL=pipeline-binder.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/request-builders.js

function body(o, previous) {
    return Object.assign({ body: Object(common_module["jsS"])(o) }, previous);
}
function headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/module/index.js
/* concated harmony reexport Batch */__webpack_require__.d(__webpack_exports__, "Batch", function() { return batch_Batch; });
/* concated harmony reexport CachingOptions */__webpack_require__.d(__webpack_exports__, "CachingOptions", function() { return caching_CachingOptions; });
/* concated harmony reexport CachingParserWrapper */__webpack_require__.d(__webpack_exports__, "CachingParserWrapper", function() { return CachingParserWrapper; });
/* concated harmony reexport addProp */__webpack_require__.d(__webpack_exports__, "addProp", function() { return addProp; });
/* concated harmony reexport invokableFactory */__webpack_require__.d(__webpack_exports__, "invokableFactory", function() { return invokableFactory; });
/* concated harmony reexport pipelineBinder */__webpack_require__.d(__webpack_exports__, "pipelineBinder", function() { return pipelineBinder; });
/* concated harmony reexport defaultPipelineBinder */__webpack_require__.d(__webpack_exports__, "defaultPipelineBinder", function() { return defaultPipelineBinder; });
/* concated harmony reexport ODataParser */__webpack_require__.d(__webpack_exports__, "ODataParser", function() { return parsers_ODataParser; });
/* concated harmony reexport TextParser */__webpack_require__.d(__webpack_exports__, "TextParser", function() { return parsers_TextParser; });
/* concated harmony reexport BlobParser */__webpack_require__.d(__webpack_exports__, "BlobParser", function() { return parsers_BlobParser; });
/* concated harmony reexport JSONParser */__webpack_require__.d(__webpack_exports__, "JSONParser", function() { return parsers_JSONParser; });
/* concated harmony reexport BufferParser */__webpack_require__.d(__webpack_exports__, "BufferParser", function() { return parsers_BufferParser; });
/* concated harmony reexport LambdaParser */__webpack_require__.d(__webpack_exports__, "LambdaParser", function() { return parsers_LambdaParser; });
/* concated harmony reexport HttpRequestError */__webpack_require__.d(__webpack_exports__, "HttpRequestError", function() { return parsers_HttpRequestError; });
/* concated harmony reexport setResult */__webpack_require__.d(__webpack_exports__, "setResult", function() { return setResult; });
/* concated harmony reexport pipe */__webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* concated harmony reexport requestPipelineMethod */__webpack_require__.d(__webpack_exports__, "requestPipelineMethod", function() { return requestPipelineMethod; });
/* concated harmony reexport PipelineMethods */__webpack_require__.d(__webpack_exports__, "PipelineMethods", function() { return pipeline_PipelineMethods; });
/* concated harmony reexport getDefaultPipeline */__webpack_require__.d(__webpack_exports__, "getDefaultPipeline", function() { return getDefaultPipeline; });
/* concated harmony reexport cloneQueryableData */__webpack_require__.d(__webpack_exports__, "cloneQueryableData", function() { return cloneQueryableData; });
/* concated harmony reexport Queryable */__webpack_require__.d(__webpack_exports__, "Queryable", function() { return queryable_Queryable; });
/* concated harmony reexport body */__webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* concated harmony reexport headers */__webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
/* concated harmony reexport extendGlobal */__webpack_require__.d(__webpack_exports__, "extendGlobal", function() { return extendGlobal; });
/* concated harmony reexport extendObj */__webpack_require__.d(__webpack_exports__, "extendObj", function() { return extendObj; });
/* concated harmony reexport extendFactory */__webpack_require__.d(__webpack_exports__, "extendFactory", function() { return extendFactory; });
/* concated harmony reexport clearGlobalExtensions */__webpack_require__.d(__webpack_exports__, "clearGlobalExtensions", function() { return clearGlobalExtensions; });
/* concated harmony reexport enableExtensions */__webpack_require__.d(__webpack_exports__, "enableExtensions", function() { return enableExtensions; });
/* concated harmony reexport disableExtensions */__webpack_require__.d(__webpack_exports__, "disableExtensions", function() { return disableExtensions; });










//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
var logging_1 = __webpack_require__(8);
var metadata_1 = __webpack_require__(9);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
exports.spInvokableFactory = function (f) {
    return odata_1.invokableFactory(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
var _SharePointQueryable = /** @class */ (function (_super) {
    tslib_1.__extends(_SharePointQueryable, _super);
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    function _SharePointQueryable(baseUrl, path) {
        var _this = this;
        var url = "";
        var parentUrl = "";
        var query = new Map();
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (common_1.isUrlAbsolute(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                parentUrl = baseUrl;
                url = common_1.combine(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                var index = baseUrl.lastIndexOf("/");
                parentUrl = baseUrl.slice(0, index);
                path = common_1.combine(baseUrl.slice(index), path);
                url = common_1.combine(parentUrl, path);
            }
            else {
                // .../items(19)
                var index = baseUrl.lastIndexOf("(");
                parentUrl = baseUrl.slice(0, index);
                url = common_1.combine(baseUrl, path);
            }
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = common_1.combine(parentUrl, path || "");
            var target = baseUrl.query.get("@target");
            if (target !== undefined) {
                query.set("@target", target);
            }
        }
        // init base with correct values for data seed
        _this = _super.call(this, {
            parentUrl: parentUrl,
            query: query,
            url: url,
        }) || this;
        // post init actions
        if (typeof baseUrl !== "string") {
            _this.configureFrom(baseUrl);
        }
        _this._forceCaching = false;
        return _this;
    }
    /**
     * Gets the full url with query information
     */
    _SharePointQueryable.prototype.toUrlAndQuery = function () {
        var aliasedParams = new Map(this.query);
        var url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, function (match, labelName, value) {
            logging_1.Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + value, 0 /* Verbose */);
            aliasedParams.set(labelName, "'" + value + "'");
            return labelName;
        });
        if (aliasedParams.size > 0) {
            var char = url.indexOf("?") > -1 ? "&" : "?";
            url += "" + char + Array.from(aliasedParams).map(function (v) { return v[0] + "=" + v[1]; }).join("&");
        }
        return url;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    _SharePointQueryable.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    };
    _SharePointQueryable.prototype.get = function (options) {
        return operations_1.spGet(this, options);
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    _SharePointQueryable.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    };
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    _SharePointQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        var clone = _super.prototype.cloneTo.call(this, factory(this, additionalPath), { includeBatch: includeBatch });
        // handle sp specific clone actions
        var t = "@target";
        if (this.query.has(t)) {
            clone.query.set(t, this.query.get(t));
        }
        return clone;
    };
    /**
     * The default action for this object (unless overridden spGet)
     *
     * @param options optional request options
     */
    _SharePointQueryable.prototype.defaultAction = function (options) {
        return operations_1.spGet(this, options);
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    _SharePointQueryable.prototype.getParent = function (factory, baseUrl, path, batch) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        var parent = factory(baseUrl, path).configureFrom(this);
        var t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        if (batch !== undefined) {
            parent = parent.inBatch(batch);
        }
        return parent;
    };
    return _SharePointQueryable;
}(odata_1.Queryable));
exports._SharePointQueryable = _SharePointQueryable;
exports.SharePointQueryable = exports.spInvokableFactory(_SharePointQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var _SharePointQueryableCollection = /** @class */ (function (_super) {
    tslib_1.__extends(_SharePointQueryableCollection, _super);
    function _SharePointQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    _SharePointQueryableCollection.prototype.filter = function (filter) {
        this.query.set("$filter", filter);
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    _SharePointQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var o = "$orderby";
        var query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(orderBy + " " + (ascending ? "asc" : "desc"));
        this.query.set(o, query.join(","));
        return this;
    };
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    _SharePointQueryableCollection.prototype.skip = function (skip) {
        this.query.set("$skip", skip.toString());
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    _SharePointQueryableCollection.prototype.top = function (top) {
        this.query.set("$top", top.toString());
        return this;
    };
    return _SharePointQueryableCollection;
}(_SharePointQueryable));
exports._SharePointQueryableCollection = _SharePointQueryableCollection;
exports.SharePointQueryableCollection = exports.spInvokableFactory(_SharePointQueryableCollection);
/**
 * Represents an instance that can be selected
 *
 */
var _SharePointQueryableInstance = /** @class */ (function (_super) {
    tslib_1.__extends(_SharePointQueryableInstance, _super);
    function _SharePointQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    _SharePointQueryableInstance.prototype._update = function (type, mapper) {
        var _this = this;
        return function (props) { return operations_1.spPost(telemetry_1.tag.configure(_this, type + ".Update"), {
            body: common_1.jsS(common_1.assign(metadata_1.metadata(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (d) { return mapper(d, props); }); };
    };
    return _SharePointQueryableInstance;
}(_SharePointQueryable));
exports._SharePointQueryableInstance = _SharePointQueryableInstance;
exports.SharePointQueryableInstance = exports.spInvokableFactory(_SharePointQueryableInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable(t) {
    return function () {
        return operations_1.spPostDelete(telemetry_1.tag.configure(this, t + ".delete"));
    };
}
exports.deleteable = deleteable;
function deleteableWithETag(t) {
    return function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return operations_1.spPostDeleteETag(telemetry_1.tag.configure(this, t + ".delete"), {}, eTag);
    };
}
exports.deleteableWithETag = deleteableWithETag;
//# sourceMappingURL=sharepointqueryable.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var sphttpclient_1 = __webpack_require__(23);
var common_1 = __webpack_require__(1);
var toabsoluteurl_1 = __webpack_require__(29);
var spClientBinder = odata_1.defaultPipelineBinder(function () { return new sphttpclient_1.SPHttpClient(); });
var send = function (method) {
    var operation = spClientBinder(method);
    return function (o, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, batchDependency, url;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = odata_1.cloneQueryableData(o.data);
                        batchDependency = common_1.objectDefinedNotNull(data.batch) ? data.batch.addDependency() : function () { return; };
                        return [4 /*yield*/, toabsoluteurl_1.toAbsoluteUrl(o.toUrlAndQuery())];
                    case 1:
                        url = _a.sent();
                        common_1.mergeOptions(data.options, options);
                        return [2 /*return*/, operation(Object.assign({}, data, {
                                batchDependency: batchDependency,
                                url: url,
                            }))];
                }
            });
        });
    };
};
exports.spGet = function (o, options) {
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
exports.spPost = send("POST");
exports.spDelete = send("DELETE");
exports.spPatch = send("PATCH");
exports.spPostDelete = function (o, options) {
    var opts = Object.assign(odata_1.headers({ "X-HTTP-Method": "DELETE" }), options);
    return exports.spPost(o, opts);
};
exports.spPostDeleteETag = function (o, options, eTag) {
    if (eTag === void 0) { eTag = "*"; }
    var opts = Object.assign(odata_1.headers({ "X-HTTP-Method": "DELETE", "IF-Match": eTag }), options);
    return exports.spPost(o, opts);
};
//# sourceMappingURL=operations.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
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
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    this.configure(odata_1.headers({ "X-PnPjs-Tracking": name }));
                    return [2 /*return*/, originalMethod.apply(this, args)];
                });
            });
        };
        return descriptor;
    };
}
exports.tag = tag;
tag.getClientTag = function (h, deleteFromCollection) {
    if (deleteFromCollection === void 0) { deleteFromCollection = true; }
    if (h.has("X-PnPjs-Tracking")) {
        var methodName = h.get("X-PnPjs-Tracking");
        if (deleteFromCollection) {
            h.delete("X-PnPjs-Tracking");
        }
        if (!common_1.stringIsNullOrEmpty(methodName)) {
            return methodName;
        }
    }
    return "";
};
tag.configure = function (o, name) {
    return o.configure(odata_1.headers({ "X-PnPjs-Tracking": name }));
};
tag.isTagged = function (o) {
    return o.data.options.headers && o.data.options.headers["X-PnPjs-Tracking"];
};
//# sourceMappingURL=telemetry.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Class Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
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
exports.defaultPath = defaultPath;
// TODO::?
// performance tracking method decorator
// redirect to graph api
//# sourceMappingURL=decorators.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var odata_2 = __webpack_require__(14);
var batch_1 = __webpack_require__(30);
var metadata_1 = __webpack_require__(9);
var sites_1 = __webpack_require__(31);
var operations_1 = __webpack_require__(4);
var escapeQueryStrValue_1 = __webpack_require__(16);
var telemetry_1 = __webpack_require__(5);
var _Webs = /** @class */ (function (_super) {
    tslib_1.__extends(_Webs, _super);
    function _Webs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    _Webs.prototype.add = function (title, url, description, template, language, inheritPermissions) {
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = "STS"; }
        if (language === void 0) { language = 1033; }
        if (inheritPermissions === void 0) { inheritPermissions = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body({
                            "parameters": common_1.assign(metadata_1.metadata("SP.WebCreationInformation"), {
                                Description: description,
                                Language: language,
                                Title: title,
                                Url: url,
                                UseSamePermissionsAsParentSite: inheritPermissions,
                                WebTemplate: template,
                            }),
                        });
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Webs, "add"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: exports.Web(odata_2.odataUrlFrom(data).replace(/_api\/web\/?/i, "")),
                            }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("ws.add")
    ], _Webs.prototype, "add", null);
    _Webs = tslib_1.__decorate([
        decorators_1.defaultPath("webs")
    ], _Webs);
    return _Webs;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Webs = _Webs;
exports.Webs = sharepointqueryable_1.spInvokableFactory(_Webs);
/**
 * Describes a web
 *
 */
var _Web = /** @class */ (function (_super) {
    tslib_1.__extends(_Web, _super);
    function _Web() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("w");
        return _this;
    }
    Object.defineProperty(_Web.prototype, "webs", {
        /**
         * Gets this web's subwebs
         *
         */
        get: function () {
            return exports.Webs(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets this web's parent web and data
     *
     */
    _Web.prototype.getParentWeb = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ParentWeb;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spGet(this.select("ParentWeb/Id").expand("ParentWeb"))];
                    case 1:
                        ParentWeb = (_a.sent()).ParentWeb;
                        return [2 /*return*/, ParentWeb ? sites_1.Site(this.parentUrl).openWebById(ParentWeb.Id) : null];
                }
            });
        });
    };
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    _Web.prototype.getSubwebsFilteredForCurrentUser = function (nWebTemplateFilter, nConfigurationFilter) {
        if (nWebTemplateFilter === void 0) { nWebTemplateFilter = -1; }
        if (nConfigurationFilter === void 0) { nConfigurationFilter = -1; }
        var o = this.clone(exports.Webs, "getSubwebsFilteredForCurrentUser(nWebTemplateFilter=" + nWebTemplateFilter + ",nConfigurationFilter=" + nConfigurationFilter + ")");
        return telemetry_1.tag.configure(o, "w.getSubwebsFilteredForCurrentUser");
    };
    Object.defineProperty(_Web.prototype, "allProperties", {
        /**
         * Allows access to the web's all properties collection
         */
        get: function () {
            return telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "allproperties"), "w.allprops");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Web.prototype, "webinfos", {
        /**
         * Gets a collection of WebInfos for this web's subwebs
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, "webinfos"), "w.webinfos");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    _Web.prototype.createBatch = function () {
        return new batch_1.SPBatch(this.parentUrl);
    };
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    _Web.prototype.update = function (properties) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata("SP.Web"), properties), odata_1.headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, operations_1.spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, web: this }];
                }
            });
        });
    };
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    _Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        var postBody = odata_1.body({
            backgroundImageUrl: backgroundImageUrl,
            colorPaletteUrl: colorPaletteUrl,
            fontSchemeUrl: fontSchemeUrl,
            shareGenerated: shareGenerated,
        });
        return operations_1.spPost(this.clone(exports.Web, "applytheme"), postBody);
    };
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    _Web.prototype.applyWebTemplate = function (template) {
        var q = this.clone(exports.Web, "applywebtemplate");
        q.concat("(webTemplate='" + escapeQueryStrValue_1.escapeQueryStrValue(template) + "')");
        return operations_1.spPost(q);
    };
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    _Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
        if (language === void 0) { language = 1033; }
        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
        var path = "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")";
        return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, path), "w.availableWebTemplates");
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Web.prototype.getChanges = function (query) {
        var postBody = odata_1.body({ "query": common_1.assign(metadata_1.metadata("SP.ChangeQuery"), query) });
        return operations_1.spPost(this.clone(exports.Web, "getchanges"), postBody);
    };
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    _Web.prototype.mapToIcon = function (filename, size, progId) {
        if (size === void 0) { size = 0; }
        if (progId === void 0) { progId = ""; }
        return operations_1.spGet(this.clone(exports.Web, "maptoicon(filename='" + escapeQueryStrValue_1.escapeQueryStrValue(filename) + "', progid='" + escapeQueryStrValue_1.escapeQueryStrValue(progId) + "', size=" + size + ")"));
    };
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    _Web.prototype.getStorageEntity = function (key) {
        return operations_1.spGet(this.clone(exports.Web, "getStorageEntity('" + escapeQueryStrValue_1.escapeQueryStrValue(key) + "')"));
    };
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    _Web.prototype.setStorageEntity = function (key, value, description, comments) {
        if (description === void 0) { description = ""; }
        if (comments === void 0) { comments = ""; }
        return operations_1.spPost(this.clone(exports.Web, "setStorageEntity"), odata_1.body({
            comments: comments,
            description: description,
            key: key,
            value: value,
        }));
    };
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    _Web.prototype.removeStorageEntity = function (key) {
        return operations_1.spPost(this.clone(exports.Web, "removeStorageEntity('" + escapeQueryStrValue_1.escapeQueryStrValue(key) + "')"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("w.getParentWeb")
    ], _Web.prototype, "getParentWeb", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.update")
    ], _Web.prototype, "update", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.applyTheme")
    ], _Web.prototype, "applyTheme", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.applyWebTemplate")
    ], _Web.prototype, "applyWebTemplate", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.getChanges")
    ], _Web.prototype, "getChanges", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.mapToIcon")
    ], _Web.prototype, "mapToIcon", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.getStorageEntity")
    ], _Web.prototype, "getStorageEntity", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.setStorageEntity")
    ], _Web.prototype, "setStorageEntity", null);
    tslib_1.__decorate([
        telemetry_1.tag("w.removeStorageEntity")
    ], _Web.prototype, "removeStorageEntity", null);
    _Web = tslib_1.__decorate([
        decorators_1.defaultPath("_api/web")
    ], _Web);
    return _Web;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Web = _Web;
exports.Web = sharepointqueryable_1.spInvokableFactory(_Web);
//# sourceMappingURL=types.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@pnp/logging/module/logger.js
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
//# sourceMappingURL=logger.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/logging/module/listeners.js
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
// CONCATENATED MODULE: ./node_modules/@pnp/logging/module/index.js
/* concated harmony reexport Logger */__webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* concated harmony reexport LogLevel */__webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* concated harmony reexport ConsoleListener */__webpack_require__.d(__webpack_exports__, "ConsoleListener", function() { return ConsoleListener; });
/* concated harmony reexport FunctionListener */__webpack_require__.d(__webpack_exports__, "FunctionListener", function() { return FunctionListener; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
exports.metadata = metadata;
//# sourceMappingURL=metadata.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
function extractWebUrl(candidateUrl) {
    if (common_1.stringIsNullOrEmpty(candidateUrl)) {
        return "";
    }
    var index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
exports.extractWebUrl = extractWebUrl;
//# sourceMappingURL=extractweburl.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
var sharepointqueryable_1 = __webpack_require__(3);
var odata_2 = __webpack_require__(14);
var metadata_1 = __webpack_require__(9);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var escapeQueryStrValue_1 = __webpack_require__(16);
var telemetry_1 = __webpack_require__(5);
var _Lists = /** @class */ (function (_super) {
    tslib_1.__extends(_Lists, _super);
    function _Lists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    _Lists.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.List(this).concat("('" + id + "')"), "ls.getById");
    };
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    _Lists.prototype.getByTitle = function (title) {
        return telemetry_1.tag.configure(exports.List(this, "getByTitle('" + escapeQueryStrValue_1.escapeQueryStrValue(title) + "')"), "ls.getByTitle");
    };
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    _Lists.prototype.add = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var addSettings, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addSettings = Object.assign({
                            "AllowContentTypes": enableContentTypes,
                            "BaseTemplate": template,
                            "ContentTypesEnabled": enableContentTypes,
                            "Description": desc,
                            "Title": title,
                        }, metadata_1.metadata("SP.List"), additionalSettings);
                        return [4 /*yield*/, operations_1.spPost(this, odata_1.body(addSettings))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, list: this.getByTitle(addSettings.Title) }];
                }
            });
        });
    };
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    _Lists.prototype.ensure = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var addOrUpdateSettings, list, data, e_1, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hasBatch) {
                            throw Error("The ensure list method is not supported for use in a batch.");
                        }
                        addOrUpdateSettings = common_1.assign(additionalSettings, { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes }, true);
                        list = this.getByTitle(addOrUpdateSettings.Title);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        // this will throw if the list doesn't exist
                        return [4 /*yield*/, list.select("Title")()];
                    case 2:
                        // this will throw if the list doesn't exist
                        _a.sent();
                        return [4 /*yield*/, list.update(addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, { created: false, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 5:
                        data = _a.sent();
                        return [2 /*return*/, { created: true, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    _Lists.prototype.ensureSiteAssetsLibrary = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var json;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Lists, "ensuresiteassetslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, exports.List(odata_2.odataUrlFrom(json))];
                }
            });
        });
    };
    /**
     * Gets a list that is the default location for wiki pages.
     */
    _Lists.prototype.ensureSitePagesLibrary = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var json;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Lists, "ensuresitepageslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, exports.List(odata_2.odataUrlFrom(json))];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("ls.add")
    ], _Lists.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("ls.ensure")
    ], _Lists.prototype, "ensure", null);
    tslib_1.__decorate([
        telemetry_1.tag("ls.ensureSiteAssetsLibrary")
    ], _Lists.prototype, "ensureSiteAssetsLibrary", null);
    tslib_1.__decorate([
        telemetry_1.tag("ls.ensureSitePagesLibrary")
    ], _Lists.prototype, "ensureSitePagesLibrary", null);
    _Lists = tslib_1.__decorate([
        decorators_1.defaultPath("lists")
    ], _Lists);
    return _Lists;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Lists = _Lists;
exports.Lists = sharepointqueryable_1.spInvokableFactory(_Lists);
var _List = /** @class */ (function (_super) {
    tslib_1.__extends(_List, _super);
    function _List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteableWithETag("l");
        return _this;
    }
    Object.defineProperty(_List.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this list
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable(this, "EffectiveBasePermissions"), "l.effectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "eventReceivers", {
        /**
         * Gets the event receivers attached to this list
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, "EventReceivers"), "l.eventReceivers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "relatedFields", {
        /**
         * Gets the related fields of this list
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable(this, "getRelatedFields"), "l.relatedFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "informationRightsManagementSettings", {
        /**
         * Gets the IRM settings for this list
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable(this, "InformationRightsManagementSettings"), "l.informationRightsManagementSettings");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    _List.prototype.update = function (properties, eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data, list;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata("SP.List"), properties), odata_1.headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        return [4 /*yield*/, operations_1.spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        list = this;
                        if (common_1.hOP(properties, "Title")) {
                            list = this.getParent(exports.List, this.parentUrl, "getByTitle('" + properties.Title + "')");
                        }
                        return [2 /*return*/, {
                                data: data,
                                list: list,
                            }];
                }
            });
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    _List.prototype.getChanges = function (query) {
        return operations_1.spPost(this.clone(exports.List, "getchanges"), odata_1.body({ query: common_1.assign(metadata_1.metadata("SP.ChangeQuery"), query) }));
    };
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    _List.prototype.getItemsByCAMLQuery = function (query) {
        var expands = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expands[_i - 1] = arguments[_i];
        }
        var q = this.clone(exports.List, "getitems");
        return operations_1.spPost(q.expand.apply(q, expands), odata_1.body({ query: common_1.assign(metadata_1.metadata("SP.CamlQuery"), query) }));
    };
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    _List.prototype.getListItemChangesSinceToken = function (query) {
        var o = this.clone(exports.List, "getlistitemchangessincetoken").usingParser({ parse: function (r) { return r.text(); } });
        return operations_1.spPost(o, odata_1.body({ "query": common_1.assign(metadata_1.metadata("SP.ChangeLogItemQuery"), query) }));
    };
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _List.prototype.recycle = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.List, "recycle"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, common_1.hOP(data, "Recycle") ? data.Recycle : data];
                }
            });
        });
    };
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    _List.prototype.renderListData = function (viewXml) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(exports.List, "renderlistdata(@viewXml)");
                        q.query.set("@viewXml", "'" + viewXml + "'");
                        return [4 /*yield*/, operations_1.spPost(q)];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(common_1.hOP(data, "RenderListData") ? data.RenderListData : data)];
                }
            });
        });
    };
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParameters The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param queryParams Allows setting of query parameters
     */
    _List.prototype.renderListDataAsStream = function (parameters, overrideParameters, queryParams) {
        if (overrideParameters === void 0) { overrideParameters = null; }
        if (queryParams === void 0) { queryParams = new Map(); }
        if (common_1.hOP(parameters, "RenderOptions") && common_1.isArray(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce(function (v, c) { return v + c; });
        }
        var postBody = odata_1.body({
            overrideParameters: common_1.assign(metadata_1.metadata("SP.RenderListDataOverrideParameters"), overrideParameters),
            parameters: common_1.assign(metadata_1.metadata("SP.RenderListDataParameters"), parameters),
        });
        var clone = this.clone(exports.List, "RenderListDataAsStream", true);
        if (queryParams && queryParams.size > 0) {
            queryParams.forEach(function (v, k) { return clone.query.set(k, v); });
        }
        return operations_1.spPost(clone, postBody);
    };
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    _List.prototype.renderListFormData = function (itemId, formId, mode) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.List, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode='" + mode + "')"))];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(common_1.hOP(data, "RenderListFormData") ? data.RenderListFormData : data)];
                }
            });
        });
    };
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    _List.prototype.reserveListItemId = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.List, "reservelistitemid"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, common_1.hOP(data, "ReserveListItemId") ? data.ReserveListItemId : data];
                }
            });
        });
    };
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    _List.prototype.getListItemEntityTypeFullName = function () {
        return this.clone(exports.List, null, false).select("ListItemEntityTypeFullName").get().then(function (o) { return o.ListItemEntityTypeFullName; });
    };
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param comment Optional check in comment.
     */
    _List.prototype.addValidateUpdateItemUsingPath = function (formValues, decodedUrl, bNewDocumentUpdate, checkInComment) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.List, "AddValidateUpdateItemUsingPath()"), odata_1.body({
                            bNewDocumentUpdate: bNewDocumentUpdate,
                            checkInComment: checkInComment,
                            formValues: formValues,
                            listItemCreateInfo: {
                                FolderPath: {
                                    DecodedUrl: decodedUrl,
                                    __metadata: { type: "SP.ResourcePath" },
                                },
                                __metadata: { type: "SP.ListItemCreationInformationUsingPath" },
                            },
                        }))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, common_1.hOP(res, "AddValidateUpdateItemUsingPath") ? res.AddValidateUpdateItemUsingPath : res];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("l.update")
    ], _List.prototype, "update", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.getChanges")
    ], _List.prototype, "getChanges", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.CAMLQuery")
    ], _List.prototype, "getItemsByCAMLQuery", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.ChangesSinceToken")
    ], _List.prototype, "getListItemChangesSinceToken", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.recycle")
    ], _List.prototype, "recycle", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.renderListData")
    ], _List.prototype, "renderListData", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.AsStream")
    ], _List.prototype, "renderListDataAsStream", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.renderListFormData")
    ], _List.prototype, "renderListFormData", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.reserveListItemId")
    ], _List.prototype, "reserveListItemId", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.getListItemEntityTypeFullName")
    ], _List.prototype, "getListItemEntityTypeFullName", null);
    tslib_1.__decorate([
        telemetry_1.tag("l.addValidateUpdateItemUsingPath")
    ], _List.prototype, "addValidateUpdateItemUsingPath", null);
    return _List;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._List = _List;
exports.List = sharepointqueryable_1.spInvokableFactory(_List);
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
})(RenderListDataOptions = exports.RenderListDataOptions || (exports.RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode = exports.ControlMode || (exports.ControlMode = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCtxCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return stringIsNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return sanitizeGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getHashCode; });
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var splibconfig_1 = __webpack_require__(22);
/**
 * Root of the SharePoint REST module
 */
var SPRest = /** @class */ (function () {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    function SPRest(_options, _baseUrl) {
        if (_options === void 0) { _options = {}; }
        if (_baseUrl === void 0) { _baseUrl = ""; }
        this._options = _options;
        this._baseUrl = _baseUrl;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    SPRest.prototype.configure = function (options, baseUrl) {
        if (baseUrl === void 0) { baseUrl = ""; }
        return new SPRest(options, baseUrl);
    };
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    SPRest.prototype.setup = function (config) {
        if (config.pageContext) {
            splibconfig_1.setup({
                spfxContext: config,
            });
        }
        else {
            splibconfig_1.setup(config);
        }
    };
    return SPRest;
}());
exports.SPRest = SPRest;
exports.sp = new SPRest();
//# sourceMappingURL=rest.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var logging_1 = __webpack_require__(8);
var odata_1 = __webpack_require__(2);
var extractweburl_1 = __webpack_require__(10);
function odataUrlFrom(candidate) {
    var parts = [];
    var s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (common_1.hOP(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (common_1.hOP(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (common_1.hOP(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (common_1.hOP(candidate, s[3]) && common_1.hOP(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            var editLink = common_1.isUrlAbsolute(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(extractweburl_1.extractWebUrl(candidate[s[3]]), "_api", editLink);
        }
        else if (common_1.hOP(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (common_1.hOP(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        logging_1.Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return common_1.combine.apply(void 0, tslib_1.__spread(parts));
}
exports.odataUrlFrom = odataUrlFrom;
var SPODataEntityParserImpl = /** @class */ (function (_super) {
    tslib_1.__extends(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return common_1.assign(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return common_1.assign(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(odata_1.ODataParser));
var SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    tslib_1.__extends(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return common_1.assign(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return common_1.assign(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(odata_1.ODataParser));
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
exports.spODataEntity = spODataEntity;
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}
exports.spODataEntityArray = spODataEntityArray;
//# sourceMappingURL=odata.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var types_1 = __webpack_require__(11);
var odata_1 = __webpack_require__(2);
var logging_1 = __webpack_require__(8);
var metadata_1 = __webpack_require__(9);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
/**
 * Describes a collection of Item objects
 *
 */
var _Items = /** @class */ (function (_super) {
    tslib_1.__extends(_Items, _super);
    function _Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    _Items.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.Item(this).concat("(" + id + ")"), "is.getById");
    };
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    _Items.prototype.getItemByStringId = function (stringId) {
        // creates an item with the parent list path and append out method call
        return telemetry_1.tag.configure(exports.Item(this.parentUrl, "getItemByStringId('" + stringId + "')"), "is.getItemByStringId");
    };
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    _Items.prototype.skip = function (skip, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (reverse) {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&PagedPrev=TRUE&p_ID=" + skip));
        }
        else {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
        }
        return this;
    };
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    _Items.prototype.getPaged = function () {
        return this.usingParser(new PagedItemCollectionParser(this))();
    };
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    _Items.prototype.getAll = function (requestSize, acceptHeader) {
        if (requestSize === void 0) { requestSize = 2000; }
        if (acceptHeader === void 0) { acceptHeader = "application/json;odata=nometadata"; }
        logging_1.Logger.write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", 2 /* Warning */);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        var items = exports.Items(this, "").top(requestSize).configure({
            headers: {
                "Accept": acceptHeader,
            },
        });
        // let's copy over the odata query params that can be applied
        // $top - allow setting the page size this way (override what we did above)
        // $select - allow picking the return fields (good behavior)
        // $filter - allow setting a filter, though this may fail due for large lists
        this.query.forEach(function (v, k) {
            if (/^\$select|filter|top|expand$/i.test(k)) {
                items.query.set(k, v);
            }
        });
        // give back the promise
        return new Promise(function (resolve, reject) {
            // this will eventually hold the items we return
            var itemsCollector = [];
            // action that will gather up our results recursively
            var gatherer = function (last) {
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
    };
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Items.prototype.add = function (properties, listItemEntityTypeFullName) {
        if (properties === void 0) { properties = {}; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, promise;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata(listItemEntityType), properties));
                        promise = operations_1.spPost(this.clone(exports.Items, ""), postBody).then(function (data) {
                            return {
                                data: data,
                                item: _this.getById(data.Id),
                            };
                        });
                        removeDependency();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Items.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.getParent(types_1.List).getListItemEntityTypeFullName();
    };
    tslib_1.__decorate([
        telemetry_1.tag("is.getPaged")
    ], _Items.prototype, "getPaged", null);
    tslib_1.__decorate([
        telemetry_1.tag("is.getAll")
    ], _Items.prototype, "getAll", null);
    tslib_1.__decorate([
        telemetry_1.tag("is.add")
    ], _Items.prototype, "add", null);
    _Items = tslib_1.__decorate([
        decorators_1.defaultPath("items")
    ], _Items);
    return _Items;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Items = _Items;
exports.Items = sharepointqueryable_1.spInvokableFactory(_Items);
/**
 * Descrines a single Item instance
 *
 */
var _Item = /** @class */ (function (_super) {
    tslib_1.__extends(_Item, _super);
    function _Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteableWithETag("i");
        return _this;
    }
    Object.defineProperty(_Item.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions for the item
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable(this, "EffectiveBasePermissions"), "i.effectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "effectiveBasePermissionsForUI", {
        /**
         * Gets the effective base permissions for the item in a UI context
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable(this, "EffectiveBasePermissionsForUI"), "i.effectiveBasePermissionsForUI");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsHTML", {
        /**
         * Gets the field values for this list item in their HTML representation
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableInstance(this, "FieldValuesAsHTML"), "i.fvHTML");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsText", {
        /**
         * Gets the field values for this list item in their text representation
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableInstance(this, "FieldValuesAsText"), "i.fvText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesForEdit", {
        /**
         * Gets the field values for this list item for use in editing controls
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableInstance(this, "FieldValuesForEdit"), "i.fvEdit");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "versions", {
        /**
         * Gets the collection of versions associated with this item
         */
        get: function () {
            return telemetry_1.tag.configure(exports.ItemVersions(this), "i.versions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "list", {
        get: function () {
            return this.getParent(types_1.List, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Item.prototype.update = function (properties, eTag, listItemEntityTypeFullName) {
        if (eTag === void 0) { eTag = "*"; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, poster, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata(listItemEntityType), properties), odata_1.headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        removeDependency();
                        poster = telemetry_1.tag.configure(this.clone(exports.Item).usingParser(new ItemUpdatedParser()), "i.update");
                        return [4 /*yield*/, operations_1.spPost(poster, postBody)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                item: this,
                            }];
                }
            });
        });
    };
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Item.prototype.recycle = function () {
        return operations_1.spPost(this.clone(exports.Item, "recycle"));
    };
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    _Item.prototype.getWopiFrameUrl = function (action) {
        if (action === void 0) { action = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = this.clone(exports.Item, "getWOPIFrameUrl(@action)");
                        i.query.set("@action", action);
                        return [4 /*yield*/, operations_1.spPost(i)];
                    case 1:
                        data = _a.sent();
                        // handle verbose mode
                        if (common_1.hOP(data, "GetWOPIFrameUrl")) {
                            return [2 /*return*/, data.GetWOPIFrameUrl];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    _Item.prototype.validateUpdateListItem = function (formValues, bNewDocumentUpdate) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return operations_1.spPost(this.clone(exports.Item, "validateupdatelistitem"), odata_1.body({ formValues: formValues, bNewDocumentUpdate: bNewDocumentUpdate }));
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Item.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.list.getListItemEntityTypeFullName();
    };
    tslib_1.__decorate([
        telemetry_1.tag("i.recycle")
    ], _Item.prototype, "recycle", null);
    tslib_1.__decorate([
        telemetry_1.tag("i.getWopiFrameUrl")
    ], _Item.prototype, "getWopiFrameUrl", null);
    tslib_1.__decorate([
        telemetry_1.tag("i.validateUpdateListItem")
    ], _Item.prototype, "validateUpdateListItem", null);
    return _Item;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Item = _Item;
exports.Item = sharepointqueryable_1.spInvokableFactory(_Item);
/**
 * Describes a collection of Version objects
 *
 */
var _ItemVersions = /** @class */ (function (_super) {
    tslib_1.__extends(_ItemVersions, _super);
    function _ItemVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _ItemVersions.prototype.getById = function (versionId) {
        return telemetry_1.tag.configure(exports.ItemVersion(this).concat("(" + versionId + ")"), "iv.getById");
    };
    _ItemVersions = tslib_1.__decorate([
        decorators_1.defaultPath("versions")
    ], _ItemVersions);
    return _ItemVersions;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._ItemVersions = _ItemVersions;
exports.ItemVersions = sharepointqueryable_1.spInvokableFactory(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
var _ItemVersion = /** @class */ (function (_super) {
    tslib_1.__extends(_ItemVersion, _super);
    function _ItemVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteableWithETag("iv");
        return _this;
    }
    return _ItemVersion;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._ItemVersion = _ItemVersion;
exports.ItemVersion = sharepointqueryable_1.spInvokableFactory(_ItemVersion);
/**
 * Provides paging functionality for list items
 */
var PagedItemCollection = /** @class */ (function () {
    function PagedItemCollection(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
        /**
         * If true there are more results available in the set, otherwise there are not
         */
        get: function () {
            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    PagedItemCollection.prototype.getNext = function () {
        if (this.hasNext) {
            var items = telemetry_1.tag.configure(exports.Items(this.nextUrl, null).configureFrom(this.parent), "ip.getNext");
            return items.getPaged();
        }
        return new Promise(function (r) { return r(null); });
    };
    return PagedItemCollection;
}());
exports.PagedItemCollection = PagedItemCollection;
var PagedItemCollectionParser = /** @class */ (function (_super) {
    tslib_1.__extends(PagedItemCollectionParser, _super);
    function PagedItemCollectionParser(_parent) {
        var _this = _super.call(this) || this;
        _this._parent = _parent;
        return _this;
    }
    PagedItemCollectionParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                r.json().then(function (json) {
                    var nextUrl = common_1.hOP(json, "d") && common_1.hOP(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new PagedItemCollection(_this._parent, nextUrl, _this.parseODataJSON(json)));
                });
            }
        });
    };
    return PagedItemCollectionParser;
}(odata_1.ODataParser));
var ItemUpdatedParser = /** @class */ (function (_super) {
    tslib_1.__extends(ItemUpdatedParser, _super);
    function ItemUpdatedParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemUpdatedParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                resolve({
                    "odata.etag": r.headers.get("etag"),
                });
            }
        });
    };
    return ItemUpdatedParser;
}(odata_1.ODataParser));
//# sourceMappingURL=types.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
var logging_1 = __webpack_require__(8);
function escapeQueryStrValue(value) {
    if (common_1.stringIsNullOrEmpty(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, function (match, labelName, v) {
            logging_1.Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + v, 0 /* Verbose */);
            return "!" + labelName + "::" + encodeURIComponent(v.replace(/\'/ig, "''"));
        });
    }
    else {
        return encodeURIComponent(value.replace(/\'/ig, "''"));
    }
}
exports.escapeQueryStrValue = escapeQueryStrValue;
//# sourceMappingURL=escapeQueryStrValue.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var odata_1 = __webpack_require__(2);
var common_1 = __webpack_require__(1);
var items_1 = __webpack_require__(24);
var odata_2 = __webpack_require__(14);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var escapeQueryStrValue_1 = __webpack_require__(16);
var extractweburl_1 = __webpack_require__(10);
var telemetry_1 = __webpack_require__(5);
/**
 * Describes a collection of File objects
 *
 */
var _Files = /** @class */ (function (_super) {
    tslib_1.__extends(_Files, _super);
    function _Files() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    _Files.prototype.getByName = function (name) {
        if (/\%#/.test(name)) {
            throw Error("For file names containing % or # please use web.getFileByServerRelativePath");
        }
        return telemetry_1.tag.configure(exports.File(this).concat("('" + escapeQueryStrValue_1.escapeQueryStrValue(name) + "')"), "fis.getByName");
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The file contents blob.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @returns The new File and the raw response.
     */
    _Files.prototype.add = function (url, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(exports.Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + escapeQueryStrValue_1.escapeQueryStrValue(url) + "')"), {
                            body: content,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: this.getByName(url),
                            }];
                }
            });
        });
    };
    /**
     * Adds a file using the pound percent safe methods
     *
     * @param url Excoded url of the file
     * @param content The file content
     * @param parameters Additional parameters to control method behavior
     */
    _Files.prototype.addUsingPath = function (url, content, parameters) {
        if (parameters === void 0) { parameters = { Overwrite: false }; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var path, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = ["AddUsingPath(decodedurl='" + escapeQueryStrValue_1.escapeQueryStrValue(url) + "'"];
                        if (parameters) {
                            if (parameters.Overwrite) {
                                path.push(",Overwrite=true");
                            }
                            if (parameters.AutoCheckoutOnInvalidData) {
                                path.push(",AutoCheckoutOnInvalidData=true");
                            }
                            if (!common_1.stringIsNullOrEmpty(parameters.XorHash)) {
                                path.push(",XorHash=" + escapeQueryStrValue_1.escapeQueryStrValue(parameters.XorHash));
                            }
                        }
                        path.push(")");
                        return [4 /*yield*/, operations_1.spPost(exports.Files(this, path.join("")), { body: content })];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, {
                                data: resp,
                                file: exports.File(odata_2.odataUrlFrom(resp)),
                            }];
                }
            });
        });
    };
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
    _Files.prototype.addChunked = function (url, content, progress, shouldOverWrite, chunkSize) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        if (chunkSize === void 0) { chunkSize = 10485760; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var file;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Files, "add(overwrite=" + shouldOverWrite + ",url='" + escapeQueryStrValue_1.escapeQueryStrValue(url) + "')", false))];
                    case 1:
                        _a.sent();
                        file = this.getByName(url);
                        return [4 /*yield*/, file.setContentChunked(content, progress, chunkSize)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    _Files.prototype.addTemplateFile = function (fileUrl, templateFileType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Files, "addTemplateFile(urloffile='" + escapeQueryStrValue_1.escapeQueryStrValue(fileUrl) + "',templatefiletype=" + templateFileType + ")", false))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: exports.File(odata_2.odataUrlFrom(response)),
                            }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("fis.add")
    ], _Files.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("fis.addUsingPath")
    ], _Files.prototype, "addUsingPath", null);
    tslib_1.__decorate([
        telemetry_1.tag("fis.addChunked")
    ], _Files.prototype, "addChunked", null);
    tslib_1.__decorate([
        telemetry_1.tag("fis.addTemplateFile")
    ], _Files.prototype, "addTemplateFile", null);
    _Files = tslib_1.__decorate([
        decorators_1.defaultPath("files")
    ], _Files);
    return _Files;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Files = _Files;
exports.Files = sharepointqueryable_1.spInvokableFactory(_Files);
/**
 * Describes a single File instance
 *
 */
var _File = /** @class */ (function (_super) {
    tslib_1.__extends(_File, _super);
    function _File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteableWithETag("fi");
        return _this;
    }
    Object.defineProperty(_File.prototype, "listItemAllFields", {
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableInstance(this, "listItemAllFields"), "fi.listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_File.prototype, "versions", {
        /**
         * Gets a collection of versions
         *
         */
        get: function () {
            return telemetry_1.tag.configure(exports.Versions(this), "fi.versions");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    _File.prototype.approve = function (comment) {
        if (comment === void 0) { comment = ""; }
        return operations_1.spPost(this.clone(exports.File, "approve(comment='" + escapeQueryStrValue_1.escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    _File.prototype.cancelUpload = function (uploadId) {
        return operations_1.spPost(this.clone(exports.File, "cancelUpload(uploadId=guid'" + uploadId + "')", false));
    };
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    _File.prototype.checkin = function (comment, checkinType) {
        if (comment === void 0) { comment = ""; }
        if (checkinType === void 0) { checkinType = CheckinType.Major; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return operations_1.spPost(this.clone(exports.File, "checkin(comment='" + escapeQueryStrValue_1.escapeQueryStrValue(comment) + "',checkintype=" + checkinType + ")"));
    };
    /**
     * Checks out the file from a document library.
     */
    _File.prototype.checkout = function () {
        return operations_1.spPost(this.clone(exports.File, "checkout"));
    };
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    _File.prototype.copyTo = function (url, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return operations_1.spPost(this.clone(exports.File, "copyTo(strnewurl='" + escapeQueryStrValue_1.escapeQueryStrValue(url) + "',boverwrite=" + shouldOverWrite + ")"));
    };
    /**
     * Copies the file by path to destination path.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    _File.prototype.copyByPath = function (destUrl, shouldOverWrite, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractweburl_1.extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, operations_1.spPost(exports.File(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFileByPath(overwrite=@a1)?@a1=" + shouldOverWrite), odata_1.body({
                                destPath: {
                                    DecodedUrl: common_1.isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: {
                                    DecodedUrl: "" + hostUrl + srcUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    _File.prototype.deny = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return operations_1.spPost(this.clone(exports.File, "deny(comment='" + escapeQueryStrValue_1.escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Moves the file to the specified destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to move to.
     * @param moveOperations The bitwise MoveOperations value for how to move the file.
     */
    _File.prototype.moveTo = function (url, moveOperations) {
        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
        return operations_1.spPost(this.clone(exports.File, "moveTo(newurl='" + escapeQueryStrValue_1.escapeQueryStrValue(url) + "',flags=" + moveOperations + ")"));
    };
    /**
     * Moves the file by path to the specified destination url.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to move to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    _File.prototype.moveByPath = function (destUrl, shouldOverWrite, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractweburl_1.extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, operations_1.spPost(exports.File(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFileByPath(overwrite=@a1)?@a1=" + shouldOverWrite), odata_1.body({
                                destPath: {
                                    DecodedUrl: common_1.isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: false,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: {
                                    DecodedUrl: "" + hostUrl + srcUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    _File.prototype.publish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return operations_1.spPost(this.clone(exports.File, "publish(comment='" + escapeQueryStrValue_1.escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    _File.prototype.recycle = function () {
        return operations_1.spPost(this.clone(exports.File, "recycle"));
    };
    /**
     * Reverts an existing checkout for the file.
     *
     */
    _File.prototype.undoCheckout = function () {
        return operations_1.spPost(this.clone(exports.File, "undoCheckout"));
    };
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    _File.prototype.unpublish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return operations_1.spPost(this.clone(exports.File, "unpublish(comment='" + escapeQueryStrValue_1.escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    _File.prototype.getText = function () {
        return this.clone(exports.File, "$value", false).usingParser(new odata_1.TextParser())(odata_1.headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    _File.prototype.getBlob = function () {
        return this.clone(exports.File, "$value", false).usingParser(new odata_1.BlobParser())(odata_1.headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getBuffer = function () {
        return this.clone(exports.File, "$value", false).usingParser(new odata_1.BufferParser())(odata_1.headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getJSON = function () {
        return this.clone(exports.File, "$value", false).usingParser(new odata_1.JSONParser())(odata_1.headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    _File.prototype.setContent = function (content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.File, "$value", false), {
                            body: content,
                            headers: {
                                "X-HTTP-Method": "PUT",
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, exports.File(this)];
                }
            });
        });
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    _File.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, d;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.listItemAllFields;
                        return [4 /*yield*/, q.select.apply(q, selects)()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, common_1.assign(items_1.Item(odata_2.odataUrlFrom(d)), d)];
                }
            });
        });
    };
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    _File.prototype.setContentChunked = function (file, progress, chunkSize) {
        if (chunkSize === void 0) { chunkSize = 10485760; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fileSize, totalBlocks, uploadId, currentPointer, i;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!common_1.isFunc(progress)) {
                            progress = function () { return null; };
                        }
                        fileSize = file.size;
                        totalBlocks = parseInt((fileSize / chunkSize).toString(), 10) + ((fileSize % chunkSize === 0) ? 1 : 0);
                        uploadId = common_1.getGUID();
                        // report that we are starting
                        progress({ uploadId: uploadId, blockNumber: 1, chunkSize: chunkSize, currentPointer: 0, fileSize: fileSize, stage: "starting", totalBlocks: totalBlocks });
                        return [4 /*yield*/, this.startUpload(uploadId, file.slice(0, chunkSize))];
                    case 1:
                        currentPointer = _a.sent();
                        i = 2;
                        _a.label = 2;
                    case 2:
                        if (!(i < totalBlocks)) return [3 /*break*/, 5];
                        progress({ uploadId: uploadId, blockNumber: i, chunkSize: chunkSize, currentPointer: currentPointer, fileSize: fileSize, stage: "continue", totalBlocks: totalBlocks });
                        return [4 /*yield*/, this.continueUpload(uploadId, currentPointer, file.slice(currentPointer, currentPointer + chunkSize))];
                    case 3:
                        currentPointer = _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        progress({ uploadId: uploadId, blockNumber: totalBlocks, chunkSize: chunkSize, currentPointer: currentPointer, fileSize: fileSize, stage: "finishing", totalBlocks: totalBlocks });
                        return [2 /*return*/, this.finishUpload(uploadId, currentPointer, file.slice(currentPointer))];
                }
            });
        });
    };
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
    _File.prototype.startUpload = function (uploadId, fragment) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var n;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.File, "startUpload(uploadId=guid'" + uploadId + "')", false), { body: fragment })];
                    case 1:
                        n = _a.sent();
                        if (typeof n === "object") {
                            // When OData=verbose the payload has the following shape:
                            // { StartUpload: "10485760" }
                            n = n.StartUpload;
                        }
                        return [2 /*return*/, parseFloat(n)];
                }
            });
        });
    };
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
    _File.prototype.continueUpload = function (uploadId, fileOffset, fragment) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var n;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.File, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
                    case 1:
                        n = _a.sent();
                        if (typeof n === "object") {
                            // When OData=verbose the payload has the following shape:
                            // { ContinueUpload: "20971520" }
                            n = n.ContinueUpload;
                        }
                        return [2 /*return*/, parseFloat(n)];
                }
            });
        });
    };
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
    _File.prototype.finishUpload = function (uploadId, fileOffset, fragment) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.File, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: exports.File(odata_2.odataUrlFrom(response)),
                            }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("fi.approve")
    ], _File.prototype, "approve", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.cancelUpload")
    ], _File.prototype, "cancelUpload", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.checkin")
    ], _File.prototype, "checkin", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.checkout")
    ], _File.prototype, "checkout", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.copyTo")
    ], _File.prototype, "copyTo", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.copyByPath")
    ], _File.prototype, "copyByPath", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.deny")
    ], _File.prototype, "deny", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.moveTo")
    ], _File.prototype, "moveTo", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.moveByPath")
    ], _File.prototype, "moveByPath", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.publish")
    ], _File.prototype, "publish", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.recycle")
    ], _File.prototype, "recycle", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.undoCheckout")
    ], _File.prototype, "undoCheckout", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.unpublish")
    ], _File.prototype, "unpublish", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.getText")
    ], _File.prototype, "getText", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.getBlob")
    ], _File.prototype, "getBlob", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.getBuffer")
    ], _File.prototype, "getBuffer", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.getJSON")
    ], _File.prototype, "getJSON", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.setContent")
    ], _File.prototype, "setContent", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.getItem")
    ], _File.prototype, "getItem", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.startUpload")
    ], _File.prototype, "startUpload", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.continueUpload")
    ], _File.prototype, "continueUpload", null);
    tslib_1.__decorate([
        telemetry_1.tag("fi.finishUpload")
    ], _File.prototype, "finishUpload", null);
    return _File;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._File = _File;
exports.File = sharepointqueryable_1.spInvokableFactory(_File);
/**
 * Describes a collection of Version objects
 *
 */
var _Versions = /** @class */ (function (_super) {
    tslib_1.__extends(_Versions, _super);
    function _Versions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _Versions.prototype.getById = function (versionId) {
        return telemetry_1.tag.configure(exports.Version(this).concat("(" + versionId + ")"), "vers.getById");
    };
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    _Versions.prototype.deleteAll = function () {
        return operations_1.spPost(exports.Versions(this, "deleteAll"));
    };
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.deleteById = function (versionId) {
        return operations_1.spPost(this.clone(exports.Versions, "deleteById(vid=" + versionId + ")"));
    };
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.recycleByID = function (versionId) {
        return operations_1.spPost(this.clone(exports.Versions, "recycleByID(vid=" + versionId + ")"));
    };
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.deleteByLabel = function (label) {
        return operations_1.spPost(this.clone(exports.Versions, "deleteByLabel(versionlabel='" + escapeQueryStrValue_1.escapeQueryStrValue(label) + "')"));
    };
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.recycleByLabel = function (label) {
        return operations_1.spPost(this.clone(exports.Versions, "recycleByLabel(versionlabel='" + escapeQueryStrValue_1.escapeQueryStrValue(label) + "')"));
    };
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    _Versions.prototype.restoreByLabel = function (label) {
        return operations_1.spPost(this.clone(exports.Versions, "restoreByLabel(versionlabel='" + escapeQueryStrValue_1.escapeQueryStrValue(label) + "')"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("vers.deleteAll")
    ], _Versions.prototype, "deleteAll", null);
    tslib_1.__decorate([
        telemetry_1.tag("vers.deleteById")
    ], _Versions.prototype, "deleteById", null);
    tslib_1.__decorate([
        telemetry_1.tag("vers.recycleByID")
    ], _Versions.prototype, "recycleByID", null);
    tslib_1.__decorate([
        telemetry_1.tag("vers.deleteByLabel")
    ], _Versions.prototype, "deleteByLabel", null);
    tslib_1.__decorate([
        telemetry_1.tag("vers.recycleByLabel")
    ], _Versions.prototype, "recycleByLabel", null);
    tslib_1.__decorate([
        telemetry_1.tag("vers.restoreByLabel")
    ], _Versions.prototype, "restoreByLabel", null);
    _Versions = tslib_1.__decorate([
        decorators_1.defaultPath("versions")
    ], _Versions);
    return _Versions;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Versions = _Versions;
exports.Versions = sharepointqueryable_1.spInvokableFactory(_Versions);
/**
 * Describes a single Version instance
 *
 */
var _Version = /** @class */ (function (_super) {
    tslib_1.__extends(_Version, _super);
    function _Version() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteableWithETag("ver");
        return _this;
    }
    return _Version;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Version = _Version;
exports.Version = sharepointqueryable_1.spInvokableFactory(_Version);
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
})(CheckinType = exports.CheckinType || (exports.CheckinType = {}));
/**
 * File move opertions
 * Overwrite = 1
 * AllowBrokenThickets = 8
 */
var MoveOperations;
(function (MoveOperations) {
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
})(MoveOperations = exports.MoveOperations || (exports.MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType = exports.TemplateFileType || (exports.TemplateFileType = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var types_1 = __webpack_require__(7);
var common_1 = __webpack_require__(1);
var sphttpclient_1 = __webpack_require__(23);
var odata_1 = __webpack_require__(2);
var odata_2 = __webpack_require__(14);
var operations_1 = __webpack_require__(4);
var batch_1 = __webpack_require__(30);
var escapeQueryStrValue_1 = __webpack_require__(16);
var telemetry_1 = __webpack_require__(5);
var metadata_1 = __webpack_require__(9);
var extractweburl_1 = __webpack_require__(10);
var _Site = /** @class */ (function (_super) {
    tslib_1.__extends(_Site, _super);
    function _Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Site.prototype, "rootWeb", {
        /**
        * Gets the root web of the site collection
        *
        */
        get: function () {
            return telemetry_1.tag.configure(types_1.Web(this, "rootweb"), "si.rootWeb");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    _Site.prototype.getRootWeb = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var web;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootWeb.select("Url")()];
                    case 1:
                        web = _a.sent();
                        return [2 /*return*/, telemetry_1.tag.configure(types_1.Web(web.Url), "si.getRootWeb")];
                }
            });
        });
    };
    /**
    * Gets the context information for this site collection
    */
    _Site.prototype.getContextInfo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, data, info;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = telemetry_1.tag.configure(exports.Site(this.parentUrl, "_api/contextinfo"), "si.getContextInfo");
                        return [4 /*yield*/, operations_1.spPost(q)];
                    case 1:
                        data = _a.sent();
                        if (common_1.hOP(data, "GetContextWebInformation")) {
                            info = data.GetContextWebInformation;
                            info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                            return [2 /*return*/, info];
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    _Site.prototype.createBatch = function () {
        return new batch_1.SPBatch(this.parentUrl);
    };
    /**
    * Deletes the current site
    *
    */
    _Site.prototype.delete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var site, q;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(exports.Site, "").select("Id")()];
                    case 1:
                        site = _a.sent();
                        q = telemetry_1.tag.configure(exports.Site(this.parentUrl, "_api/SPSiteManager/Delete"), "si.delete");
                        return [4 /*yield*/, operations_1.spPost(q, odata_1.body({ siteId: site.Id }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    _Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable("", "_api/sp.web.getdocumentlibraries(@v)"), "si.getDocumentLibraries");
                        q.query.set("@v", "'" + escapeQueryStrValue_1.escapeQueryStrValue(absoluteWebUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, common_1.hOP(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data];
                }
            });
        });
    };
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    _Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable("", "_api/sp.web.getweburlfrompageurl(@v)"), "si.getWebUrlFromPageUrl");
                        q.query.set("@v", "'" + escapeQueryStrValue_1.escapeQueryStrValue(absolutePageUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, common_1.hOP(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data];
                }
            });
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Site.prototype.getChanges = function (query) {
        var postBody = odata_1.body({ "query": common_1.assign(metadata_1.metadata("SP.ChangeQuery"), query) });
        return operations_1.spPost(this.clone(types_1.Web, "getchanges"), postBody);
    };
    /**
    * Opens a web by id (using POST)
    *
    * @param webId The GUID id of the web to open
    */
    _Site.prototype.openWebById = function (webId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Site, "openWebById('" + webId + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: types_1.Web(extractweburl_1.extractWebUrl(odata_2.odataUrlFrom(data))),
                            }];
                }
            });
        });
    };
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
     */
    _Site.prototype.createCommunicationSite = function (title, lcid, shareByEmailEnabled, url, description, classification, siteDesignId, hubSiteId, owner) {
        if (lcid === void 0) { lcid = 1033; }
        if (shareByEmailEnabled === void 0) { shareByEmailEnabled = false; }
        if (description === void 0) { description = ""; }
        if (classification === void 0) { classification = ""; }
        if (siteDesignId === void 0) { siteDesignId = "00000000-0000-0000-0000-000000000000"; }
        if (hubSiteId === void 0) { hubSiteId = "00000000-0000-0000-0000-000000000000"; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var props, postBody, d, client, methodUrl, r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            Classification: classification,
                            Description: description,
                            HubSiteId: hubSiteId,
                            Lcid: lcid,
                            Owner: owner,
                            ShareByEmailEnabled: shareByEmailEnabled,
                            SiteDesignId: siteDesignId,
                            Title: title,
                            Url: url,
                            WebTemplate: "SITEPAGEPUBLISHING#0",
                            WebTemplateExtensionId: "00000000-0000-0000-0000-000000000000",
                        };
                        postBody = odata_1.body({
                            "request": common_1.assign(metadata_1.metadata("Microsoft.SharePoint.Portal.SPSiteCreationRequest"), props),
                        }, odata_1.headers({
                            "Accept": "application/json;odata=verbose",
                            "Content-Type": "application/json;odata=verbose;charset=utf-8",
                        }));
                        return [4 /*yield*/, this.getRootWeb()];
                    case 1:
                        d = _a.sent();
                        client = new sphttpclient_1.SPHttpClient();
                        methodUrl = d.parentUrl + "/_api/SPSiteManager/Create";
                        return [4 /*yield*/, client.post(methodUrl, postBody)];
                    case 2:
                        r = _a.sent();
                        return [4 /*yield*/, r.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
    _Site.prototype.createModernTeamSite = function (displayName, alias, isPublic, lcid, description, classification, owners, hubSiteId, siteDesignId) {
        if (isPublic === void 0) { isPublic = true; }
        if (lcid === void 0) { lcid = 1033; }
        if (description === void 0) { description = ""; }
        if (classification === void 0) { classification = ""; }
        if (hubSiteId === void 0) { hubSiteId = "00000000-0000-0000-0000-000000000000"; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, d, client, methodUrl, r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            alias: alias,
                            displayName: displayName,
                            isPublic: isPublic,
                            optionalParams: {
                                Classification: classification,
                                CreationOptions: {
                                    "results": ["SPSiteLanguage:" + lcid, "HubSiteId:" + hubSiteId],
                                },
                                Description: description,
                                Owners: {
                                    "results": owners ? owners : [],
                                },
                            },
                        };
                        if (siteDesignId) {
                            postBody.optionalParams.CreationOptions.results.push("implicit_formula_292aa8a00786498a87a5ca52d9f4214a_" + siteDesignId);
                        }
                        return [4 /*yield*/, this.getRootWeb()];
                    case 1:
                        d = _a.sent();
                        client = new sphttpclient_1.SPHttpClient();
                        methodUrl = d.parentUrl + "/_api/GroupSiteManager/CreateGroupEx";
                        return [4 /*yield*/, client.post(methodUrl, {
                                body: common_1.jsS(postBody),
                                headers: {
                                    "Accept": "application/json;odata=verbose",
                                    "Content-Type": "application/json;odata=verbose;charset=utf-8",
                                },
                            })];
                    case 2:
                        r = _a.sent();
                        return [4 /*yield*/, r.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("si.getChanges")
    ], _Site.prototype, "getChanges", null);
    tslib_1.__decorate([
        telemetry_1.tag("si.openWebById")
    ], _Site.prototype, "openWebById", null);
    _Site = tslib_1.__decorate([
        decorators_1.defaultPath("_api/site")
    ], _Site);
    return _Site;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Site = _Site;
exports.Site = sharepointqueryable_1.spInvokableFactory(_Site);
//# sourceMappingURL=types.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var sharepointqueryable_1 = __webpack_require__(3);
var odata_1 = __webpack_require__(14);
var types_1 = __webpack_require__(15);
var odata_2 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var escapeQueryStrValue_1 = __webpack_require__(16);
var extractweburl_1 = __webpack_require__(10);
var telemetry_1 = __webpack_require__(5);
var _Folders = /** @class */ (function (_super) {
    tslib_1.__extends(_Folders, _super);
    function _Folders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    _Folders.prototype.getByName = function (name) {
        return telemetry_1.tag.configure(exports.Folder(this).concat("('" + escapeQueryStrValue_1.escapeQueryStrValue(name) + "')"), "fs.getByName");
    };
    /**
     * Adds a new folder at the specified URL
     *
     * @param url
     */
    _Folders.prototype.add = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Folders, "add('" + escapeQueryStrValue_1.escapeQueryStrValue(url) + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: this.getByName(url),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    _Folders.prototype.addUsingPath = function (serverRelativeUrl, overwrite) {
        if (overwrite === void 0) { overwrite = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Folders, "addUsingPath(DecodedUrl='" + escapeQueryStrValue_1.escapeQueryStrValue(serverRelativeUrl) + "',overwrite=" + overwrite + ")"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: exports.Folder(extractweburl_1.extractWebUrl(this.toUrl()), "_api/web/getFolderByServerRelativePath(decodedUrl='" + escapeQueryStrValue_1.escapeQueryStrValue(serverRelativeUrl) + "')"),
                            }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("fs.add")
    ], _Folders.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addUsingPath")
    ], _Folders.prototype, "addUsingPath", null);
    _Folders = tslib_1.__decorate([
        decorators_1.defaultPath("folders")
    ], _Folders);
    return _Folders;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Folders = _Folders;
exports.Folders = sharepointqueryable_1.spInvokableFactory(_Folders);
var _Folder = /** @class */ (function (_super) {
    tslib_1.__extends(_Folder, _super);
    function _Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteableWithETag("f");
        /**
         * Updates folder's properties
         * @param props Folder's properties to update
         */
        _this.update = _this._update("SP.Folder", function (data) { return ({ data: data, folder: _this }); });
        return _this;
    }
    Object.defineProperty(_Folder.prototype, "contentTypeOrder", {
        /**
         * Specifies the sequence in which content types are displayed.
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, "contentTypeOrder"), "f.contentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "folders", {
        /**
         * Gets this folder's sub folders
         *
         */
        get: function () {
            return exports.Folders(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "listItemAllFields", {
        /**
         * Gets this folder's list item field values
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableInstance(this, "listItemAllFields"), "f.listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "parentFolder", {
        /**
         * Gets the parent folder, if available
         *
         */
        get: function () {
            return telemetry_1.tag.configure(exports.Folder(this, "parentFolder"), "f.parentFolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "properties", {
        /**
         * Gets this folder's properties
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableInstance(this, "properties"), "f.properties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "serverRelativeUrl", {
        /**
         * Gets this folder's server relative url
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable(this, "serverRelativeUrl"), "f.serverRelativeUrl");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "uniqueContentTypeOrder", {
        /**
         * Gets a value that specifies the content type order.
         *
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, "uniqueContentTypeOrder"), "f.uniqueContentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Folder.prototype.recycle = function () {
        return operations_1.spPost(this.clone(exports.Folder, "recycle"));
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    _Folder.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, d;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.listItemAllFields;
                        return [4 /*yield*/, q.select.apply(q, selects)()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, common_1.assign(types_1.Item(odata_1.odataUrlFrom(d)), d)];
                }
            });
        });
    };
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.moveTo = function (destUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractweburl_1.extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, operations_1.spPost(exports.Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFolder()"), odata_2.body({
                                destUrl: common_1.isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                srcUrl: "" + hostUrl + srcUrl,
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Moves a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.moveByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractweburl_1.extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, operations_1.spPost(exports.Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFolderByPath()"), odata_2.body({
                                destPath: {
                                    DecodedUrl: common_1.isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: {
                                    DecodedUrl: "" + hostUrl + srcUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.copyTo = function (destUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractweburl_1.extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, operations_1.spPost(exports.Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFolder()"), odata_2.body({
                                destUrl: common_1.isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                srcUrl: "" + hostUrl + srcUrl,
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.copyByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractweburl_1.extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, operations_1.spPost(exports.Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFolderByPath()"), odata_2.body({
                                destPath: {
                                    DecodedUrl: common_1.isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: {
                                    DecodedUrl: "" + hostUrl + srcUrl,
                                    __metadata: {
                                        type: "SP.ResourcePath",
                                    },
                                },
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    _Folder.prototype.getShareable = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var d, shareable;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(sharepointqueryable_1.SharePointQueryableInstance, "listItemAllFields", false).select("odata.id")()];
                    case 1:
                        d = _a.sent();
                        shareable = types_1.Item(odata_1.odataUrlFrom(d));
                        // we need to handle batching
                        if (this.hasBatch) {
                            shareable = shareable.inBatch(this.batch);
                        }
                        return [2 /*return*/, shareable];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("f.recycle")
    ], _Folder.prototype, "recycle", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.getItem")
    ], _Folder.prototype, "getItem", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.moveTo")
    ], _Folder.prototype, "moveTo", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.moveByPath")
    ], _Folder.prototype, "moveByPath", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.copyTo")
    ], _Folder.prototype, "copyTo", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.copyByPath")
    ], _Folder.prototype, "copyByPath", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.getShareable")
    ], _Folder.prototype, "getShareable", null);
    return _Folder;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Folder = _Folder;
exports.Folder = sharepointqueryable_1.spInvokableFactory(_Folder);
//# sourceMappingURL=types.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
var sharepointqueryable_1 = __webpack_require__(3);
var types_1 = __webpack_require__(26);
var metadata_1 = __webpack_require__(9);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
/**
 * Describes a set of role assignments for the current scope
 *
 */
var _RoleAssignments = /** @class */ (function (_super) {
    tslib_1.__extends(_RoleAssignments, _super);
    function _RoleAssignments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    _RoleAssignments.prototype.getById = function (id) {
        return exports.RoleAssignment(this).concat("(" + id + ")");
    };
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    _RoleAssignments.prototype.add = function (principalId, roleDefId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.RoleAssignments, "addroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    _RoleAssignments.prototype.remove = function (principalId, roleDefId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.RoleAssignments, "removeroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    _RoleAssignments = tslib_1.__decorate([
        decorators_1.defaultPath("roleassignments")
    ], _RoleAssignments);
    return _RoleAssignments;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._RoleAssignments = _RoleAssignments;
exports.RoleAssignments = sharepointqueryable_1.spInvokableFactory(_RoleAssignments);
/**
 * Describes a role assignment
 *
 */
var _RoleAssignment = /** @class */ (function (_super) {
    tslib_1.__extends(_RoleAssignment, _super);
    function _RoleAssignment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("ra");
        return _this;
    }
    Object.defineProperty(_RoleAssignment.prototype, "groups", {
        /**
         * Gets the groups that directly belong to the access control list (ACL) for this securable object
         *
         */
        get: function () {
            return telemetry_1.tag.configure(types_1.SiteGroups(this, "groups"), "ra.groups");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_RoleAssignment.prototype, "bindings", {
        /**
         * Gets the role definition bindings for this role assignment
         *
         */
        get: function () {
            return sharepointqueryable_1.SharePointQueryableCollection(this, "roledefinitionbindings");
        },
        enumerable: true,
        configurable: true
    });
    return _RoleAssignment;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._RoleAssignment = _RoleAssignment;
exports.RoleAssignment = sharepointqueryable_1.spInvokableFactory(_RoleAssignment);
/**
 * Describes a collection of role definitions
 *
 */
var _RoleDefinitions = /** @class */ (function (_super) {
    tslib_1.__extends(_RoleDefinitions, _super);
    function _RoleDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    _RoleDefinitions.prototype.getById = function (id) {
        return exports.RoleDefinition(this, "getById(" + id + ")");
    };
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    _RoleDefinitions.prototype.getByName = function (name) {
        return exports.RoleDefinition(this, "getbyname('" + name + "')");
    };
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    _RoleDefinitions.prototype.getByType = function (roleTypeKind) {
        return exports.RoleDefinition(this, "getbytype(" + roleTypeKind + ")");
    };
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition
     *
     */
    _RoleDefinitions.prototype.add = function (name, description, order, basePermissions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body({
                            BasePermissions: common_1.assign(metadata_1.metadata("SP.BasePermissions"), basePermissions),
                            Description: description,
                            Name: name,
                            Order: order,
                            __metadata: { "type": "SP.RoleDefinition" },
                        });
                        return [4 /*yield*/, operations_1.spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                definition: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    _RoleDefinitions = tslib_1.__decorate([
        decorators_1.defaultPath("roledefinitions")
    ], _RoleDefinitions);
    return _RoleDefinitions;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._RoleDefinitions = _RoleDefinitions;
exports.RoleDefinitions = sharepointqueryable_1.spInvokableFactory(_RoleDefinitions);
/**
 * Describes a role definition
 *
 */
var _RoleDefinition = /** @class */ (function (_super) {
    tslib_1.__extends(_RoleDefinition, _super);
    function _RoleDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("rd");
        return _this;
        /* tslint:enable */
    }
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    /* tslint:disable no-string-literal */
    _RoleDefinition.prototype.update = function (properties) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var s, postBody, data, definition, parent_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = ["BasePermissions"];
                        if (common_1.hOP(properties, s[0]) !== undefined) {
                            properties[s[0]] = common_1.assign(metadata_1.metadata("SP." + s[0]), properties[s[0]]);
                        }
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata("SP.RoleDefinition"), properties), odata_1.headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, operations_1.spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        definition = this;
                        if (common_1.hOP(properties, "Name")) {
                            parent_1 = this.getParent(exports.RoleDefinitions, this.parentUrl, "");
                            definition = parent_1.getByName(properties["Name"]);
                        }
                        return [2 /*return*/, {
                                data: data,
                                definition: definition,
                            }];
                }
            });
        });
    };
    return _RoleDefinition;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._RoleDefinition = _RoleDefinition;
exports.RoleDefinition = sharepointqueryable_1.spInvokableFactory(_RoleDefinition);
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
})(PermissionKind = exports.PermissionKind || (exports.PermissionKind = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates the role of the sharing link
 */
var SharingRole;
(function (SharingRole) {
    SharingRole[SharingRole["None"] = 0] = "None";
    SharingRole[SharingRole["View"] = 1] = "View";
    SharingRole[SharingRole["Edit"] = 2] = "Edit";
    SharingRole[SharingRole["Owner"] = 3] = "Owner";
})(SharingRole = exports.SharingRole || (exports.SharingRole = {}));
var SPSharedObjectType;
(function (SPSharedObjectType) {
    SPSharedObjectType[SPSharedObjectType["Unknown"] = 0] = "Unknown";
    SPSharedObjectType[SPSharedObjectType["File"] = 1] = "File";
    SPSharedObjectType[SPSharedObjectType["Folder"] = 2] = "Folder";
    SPSharedObjectType[SPSharedObjectType["Item"] = 3] = "Item";
    SPSharedObjectType[SPSharedObjectType["List"] = 4] = "List";
    SPSharedObjectType[SPSharedObjectType["Web"] = 5] = "Web";
    SPSharedObjectType[SPSharedObjectType["Max"] = 6] = "Max";
})(SPSharedObjectType = exports.SPSharedObjectType || (exports.SPSharedObjectType = {}));
var SharingDomainRestrictionMode;
(function (SharingDomainRestrictionMode) {
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["None"] = 0] = "None";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["AllowList"] = 1] = "AllowList";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["BlockList"] = 2] = "BlockList";
})(SharingDomainRestrictionMode = exports.SharingDomainRestrictionMode || (exports.SharingDomainRestrictionMode = {}));
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
})(SharingOperationStatusCode = exports.SharingOperationStatusCode || (exports.SharingOperationStatusCode = {}));
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
})(SharingLinkKind = exports.SharingLinkKind || (exports.SharingLinkKind = {}));
var RoleType;
(function (RoleType) {
    RoleType[RoleType["None"] = 0] = "None";
    RoleType[RoleType["Guest"] = 1] = "Guest";
    RoleType[RoleType["Reader"] = 2] = "Reader";
    RoleType[RoleType["Contributor"] = 3] = "Contributor";
    RoleType[RoleType["WebDesigner"] = 4] = "WebDesigner";
    RoleType[RoleType["Administrator"] = 5] = "Administrator";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
function setup(config) {
    common_1.RuntimeConfig.assign(config);
}
exports.setup = setup;
var SPRuntimeConfigImpl = /** @class */ (function () {
    function SPRuntimeConfigImpl() {
    }
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var spPart = common_1.RuntimeConfig.get("sp");
            if (spPart !== undefined && spPart.headers !== undefined) {
                return spPart.headers;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "baseUrl", {
        get: function () {
            var spPart = common_1.RuntimeConfig.get("sp");
            if (spPart !== undefined && spPart.baseUrl !== undefined) {
                return spPart.baseUrl;
            }
            if (common_1.objectDefinedNotNull(common_1.RuntimeConfig.spfxContext)) {
                return common_1.RuntimeConfig.spfxContext.pageContext.web.absoluteUrl;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var spPart = common_1.RuntimeConfig.get("sp");
            if (spPart !== undefined && spPart.fetchClientFactory !== undefined) {
                return spPart.fetchClientFactory;
            }
            else {
                return function () { return new common_1.FetchClient(); };
            }
        },
        enumerable: true,
        configurable: true
    });
    return SPRuntimeConfigImpl;
}());
exports.SPRuntimeConfigImpl = SPRuntimeConfigImpl;
exports.SPRuntimeConfig = new SPRuntimeConfigImpl();
//# sourceMappingURL=splibconfig.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var splibconfig_1 = __webpack_require__(22);
var extractweburl_1 = __webpack_require__(10);
var telemetry_1 = __webpack_require__(5);
var odata_1 = __webpack_require__(2);
var SPHttpClient = /** @class */ (function () {
    function SPHttpClient(_impl) {
        if (_impl === void 0) { _impl = splibconfig_1.SPRuntimeConfig.fetchClientFactory(); }
        this._impl = _impl;
        this._digestCache = getDigestFactory(this);
    }
    SPHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opts, headers, methodName, clientTag, digest;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = common_1.assign(options, { cache: "no-cache", credentials: "same-origin" }, true);
                        headers = new Headers();
                        // first we add the global headers so they can be overwritten by any passed in locally to this call
                        common_1.mergeHeaders(headers, splibconfig_1.SPRuntimeConfig.headers);
                        // second we add the local options so we can overwrite the globals
                        common_1.mergeHeaders(headers, options.headers);
                        // lastly we apply any default headers we need that may not exist
                        if (!headers.has("Accept")) {
                            headers.append("Accept", "application/json");
                        }
                        if (!headers.has("Content-Type")) {
                            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                        }
                        if (!headers.has("X-ClientService-ClientTag")) {
                            methodName = telemetry_1.tag.getClientTag(headers);
                            clientTag = "PnPCoreJS:2.0.1:" + methodName;
                            if (clientTag.length > 32) {
                                clientTag = clientTag.substr(0, 32);
                            }
                            headers.append("X-ClientService-ClientTag", clientTag);
                        }
                        if (!headers.has("User-Agent")) {
                            // this marks the requests for understanding by the service
                            // does not work in browsers
                            headers.append("User-Agent", "NONISV|SharePointPnP|PnPjs/2.0.1");
                        }
                        opts = common_1.assign(opts, { headers: headers });
                        if (!(opts.method && opts.method.toUpperCase() !== "GET" && !headers.has("X-RequestDigest") && !headers.has("Authorization"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._digestCache(extractweburl_1.extractWebUrl(url))];
                    case 1:
                        digest = _a.sent();
                        headers.append("X-RequestDigest", digest);
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.fetchRaw(url, opts)];
                }
            });
        });
    };
    SPHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        common_1.mergeHeaders(rawHeaders, options.headers);
        options = common_1.assign(options, { headers: rawHeaders });
        var retry = function (ctx) {
            // handles setting the proper timeout for a retry
            var setRetry = function (response) {
                var delay;
                if (response.headers.has("Retry-After")) {
                    // if we have gotten a header, use that value as the delay value
                    delay = parseInt(response.headers.get("Retry-After"), 10);
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
                    ctx.reject(Error("Retry count exceeded (" + ctx.retryCount + ") for request. Response status: [" + response.status + "] " + response.statusText));
                }
                else {
                    // Set our retry timeout for {delay} milliseconds.
                    setTimeout(common_1.getCtxCallback(_this, retry, ctx), delay);
                }
            };
            // send the actual request
            _this._impl.fetch(url, options).then(function (response) {
                if (response.status === 429) {
                    // we have been throttled
                    setRetry(response);
                }
                else {
                    ctx.resolve(response);
                }
            }).catch(function (response) {
                if (response.status === 503) {
                    // http status code 503, we can retry this
                    setRetry(response);
                }
                else {
                    ctx.reject(response);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            retry.call(_this, {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            });
        });
    };
    SPHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = common_1.assign(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = common_1.assign(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = common_1.assign(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = common_1.assign(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return SPHttpClient;
}());
exports.SPHttpClient = SPHttpClient;
// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new Map();
function getDigestFactory(client) {
    var _this = this;
    return function (webUrl) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var cachedDigest, now, url, headers, resp, parsed, newCachedDigest;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cachedDigest = digests.get(webUrl);
                    if (cachedDigest !== undefined) {
                        now = new Date();
                        if (now < cachedDigest.expiration) {
                            return [2 /*return*/, cachedDigest.value];
                        }
                    }
                    url = common_1.combine(webUrl, "/_api/contextinfo");
                    headers = {
                        "Accept": "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose;charset=utf-8",
                    };
                    return [4 /*yield*/, client.fetchRaw(url, {
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: common_1.assign(headers, splibconfig_1.SPRuntimeConfig.headers, true),
                            method: "POST",
                        })];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, (new odata_1.ODataParser()).parse(resp).then(function (r) { return r.GetContextWebInformation; })];
                case 2:
                    parsed = _a.sent();
                    newCachedDigest = {
                        expiration: common_1.dateAdd(new Date(), "second", parsed.FormDigestTimeoutSeconds),
                        value: parsed.FormDigestValue,
                    };
                    digests.set(webUrl, newCachedDigest);
                    return [2 /*return*/, newCachedDigest.value];
            }
        });
    }); };
}
//# sourceMappingURL=sphttpclient.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(95);
var types_1 = __webpack_require__(15);
exports.Item = types_1.Item;
exports.Items = types_1.Items;
exports.ItemVersion = types_1.ItemVersion;
exports.ItemVersions = types_1.ItemVersions;
exports.PagedItemCollection = types_1.PagedItemCollection;
//# sourceMappingURL=index.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var metadata_1 = __webpack_require__(9);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _ContentTypes = /** @class */ (function (_super) {
    tslib_1.__extends(_ContentTypes, _super);
    function _ContentTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    _ContentTypes.prototype.addAvailableContentType = function (contentTypeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.ContentTypes, "addAvailableContentType"), odata_1.body({ "contentTypeId": contentTypeId }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                contentType: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    /**
     * Gets a ContentType by content type id
     * @param id The id of the content type to get, in the following format, for example: 0x010102
     */
    _ContentTypes.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.ContentType(this).concat("('" + id + "')"), "cts.getById");
    };
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
    _ContentTypes.prototype.add = function (id, name, description, group, additionalSettings) {
        if (description === void 0) { description = ""; }
        if (group === void 0) { group = "Custom Content Types"; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(Object.assign(metadata_1.metadata("SP.ContentType"), {
                            "Description": description,
                            "Group": group,
                            "Id": { "StringValue": id },
                            "Name": name,
                        }, additionalSettings));
                        return [4 /*yield*/, operations_1.spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { contentType: this.getById(data.id), data: data }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("cts.addAvailableContentType")
    ], _ContentTypes.prototype, "addAvailableContentType", null);
    tslib_1.__decorate([
        telemetry_1.tag("cts.add")
    ], _ContentTypes.prototype, "add", null);
    _ContentTypes = tslib_1.__decorate([
        decorators_1.defaultPath("contenttypes")
    ], _ContentTypes);
    return _ContentTypes;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._ContentTypes = _ContentTypes;
exports.ContentTypes = sharepointqueryable_1.spInvokableFactory(_ContentTypes);
var _ContentType = /** @class */ (function (_super) {
    tslib_1.__extends(_ContentType, _super);
    function _ContentType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("ct");
        return _this;
    }
    Object.defineProperty(_ContentType.prototype, "fieldLinks", {
        /**
         * Gets the column (also known as field) references in the content type.
         */
        get: function () {
            return telemetry_1.tag.configure(exports.FieldLinks(this), "ct.fieldLinks");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "fields", {
        /**
         * Gets a value that specifies the collection of fields for the content type.
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, "fields"), "ct.fields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "parent", {
        /**
         * Gets the parent content type of the content type.
         */
        get: function () {
            return telemetry_1.tag.configure(exports.ContentType(this, "parent"), "ct.parent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "workflowAssociations", {
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, "workflowAssociations"), "ct.workflowAssociations");
        },
        enumerable: true,
        configurable: true
    });
    return _ContentType;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._ContentType = _ContentType;
exports.ContentType = sharepointqueryable_1.spInvokableFactory(_ContentType);
var _FieldLinks = /** @class */ (function (_super) {
    tslib_1.__extends(_FieldLinks, _super);
    function _FieldLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    *  Gets a FieldLink by GUID id
    *
    * @param id The GUID id of the field link
    */
    _FieldLinks.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.FieldLink(this).concat("(guid'" + id + "')"), "fls.getById");
    };
    _FieldLinks = tslib_1.__decorate([
        decorators_1.defaultPath("fieldlinks")
    ], _FieldLinks);
    return _FieldLinks;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._FieldLinks = _FieldLinks;
exports.FieldLinks = sharepointqueryable_1.spInvokableFactory(_FieldLinks);
var _FieldLink = /** @class */ (function (_super) {
    tslib_1.__extends(_FieldLink, _super);
    function _FieldLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _FieldLink;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._FieldLink = _FieldLink;
exports.FieldLink = sharepointqueryable_1.spInvokableFactory(_FieldLink);
//# sourceMappingURL=types.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var types_1 = __webpack_require__(37);
var common_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(9);
var odata_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _SiteGroups = /** @class */ (function (_super) {
    tslib_1.__extends(_SiteGroups, _super);
    function _SiteGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    _SiteGroups.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.SiteGroup(this).concat("(" + id + ")"), "sgs.getById");
    };
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    _SiteGroups.prototype.add = function (properties) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata("SP.Group"), properties));
                        return [4 /*yield*/, operations_1.spPost(telemetry_1.tag.configure(this, "sgs.add"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                group: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    _SiteGroups.prototype.getByName = function (groupName) {
        return telemetry_1.tag.configure(exports.SiteGroup(this, "getByName('" + groupName + "')"), "sgs.getByName");
    };
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    _SiteGroups.prototype.removeById = function (id) {
        return operations_1.spPost(this.clone(exports.SiteGroups, "removeById('" + id + "')"));
    };
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    _SiteGroups.prototype.removeByLoginName = function (loginName) {
        return operations_1.spPost(this.clone(exports.SiteGroups, "removeByLoginName('" + loginName + "')"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("sgs.removeById")
    ], _SiteGroups.prototype, "removeById", null);
    tslib_1.__decorate([
        telemetry_1.tag("sgs.removeByLoginName")
    ], _SiteGroups.prototype, "removeByLoginName", null);
    _SiteGroups = tslib_1.__decorate([
        decorators_1.defaultPath("sitegroups")
    ], _SiteGroups);
    return _SiteGroups;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._SiteGroups = _SiteGroups;
exports.SiteGroups = sharepointqueryable_1.spInvokableFactory(_SiteGroups);
var _SiteGroup = /** @class */ (function (_super) {
    tslib_1.__extends(_SiteGroup, _super);
    function _SiteGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Updates the group with the given property values
         *
         * @param props The group properties object of property names and values to be set for the group
         */
        _this.update = _this._update("SP.Group", function (d, p) {
            var retGroup = _this;
            if (common_1.hOP(p, "Title")) {
                /* tslint:disable-next-line no-string-literal */
                retGroup = _this.getParent(exports.SiteGroup, _this.parentUrl, "getByName('" + p["Title"] + "')");
            }
            return {
                data: d,
                group: retGroup,
            };
        });
        return _this;
    }
    Object.defineProperty(_SiteGroup.prototype, "users", {
        /**
         * Gets the users for this group
         *
         */
        get: function () {
            return telemetry_1.tag.configure(types_1.SiteUsers(this, "users"), "sg.users");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    _SiteGroup.prototype.setUserAsOwner = function (userId) {
        return operations_1.spPost(this.clone(exports.SiteGroup, "SetUserAsOwner(" + userId + ")"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("sg.setUserAsOwner")
    ], _SiteGroup.prototype, "setUserAsOwner", null);
    return _SiteGroup;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._SiteGroup = _SiteGroup;
exports.SiteGroup = sharepointqueryable_1.spInvokableFactory(_SiteGroup);
//# sourceMappingURL=types.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var operations_1 = __webpack_require__(4);
var sharepointqueryable_1 = __webpack_require__(3);
var extractweburl_1 = __webpack_require__(10);
var telemetry_1 = __webpack_require__(5);
var escapeQueryStrValue_1 = __webpack_require__(16);
var _SiteScripts = /** @class */ (function (_super) {
    tslib_1.__extends(_SiteScripts, _super);
    function _SiteScripts(baseUrl, methodName) {
        if (methodName === void 0) { methodName = ""; }
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractweburl_1.extractWebUrl(url), "_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility." + methodName) || this;
        return _this;
    }
    _SiteScripts.prototype.execute = function (props) {
        return operations_1.spPost(this, odata_1.body(props));
    };
    /**
     * Gets a list of information on all existing site scripts.
     */
    _SiteScripts.prototype.getSiteScripts = function () {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScripts", true).execute({});
    };
    /**
     * Creates a new site script.
     *
     * @param title The display name of the site script.
     * @param content JSON value that describes the script. For more information, see JSON reference.
     */
    _SiteScripts.prototype.createSiteScript = function (title, description, content) {
        return this.clone(SiteScriptsCloneFactory, "CreateSiteScript(Title=@title,Description=@desc)?@title='" + escapeQueryStrValue_1.escapeQueryStrValue(title) + "'&@desc='" + escapeQueryStrValue_1.escapeQueryStrValue(description) + "'")
            .execute(content);
    };
    /**
     * Gets information about a specific site script. It also returns the JSON of the script.
     *
     * @param id The ID of the site script to get information about.
     */
    _SiteScripts.prototype.getSiteScriptMetadata = function (id) {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScriptMetadata").execute({ id: id });
    };
    /**
     * Deletes a site script.
     *
     * @param id The ID of the site script to delete.
     */
    _SiteScripts.prototype.deleteSiteScript = function (id) {
        return this.clone(SiteScriptsCloneFactory, "DeleteSiteScript").execute({ id: id });
    };
    /**
     * Updates a site script with new values. In the REST call, all parameters are optional except the site script Id.
     *
     * @param siteScriptUpdateInfo Object that contains the information to update a site script.
     *                             Make sure you stringify the content object or pass it in the second 'content' parameter
     * @param content (Optional) A new JSON script defining the script actions. For more information, see Site design JSON schema.
     */
    _SiteScripts.prototype.updateSiteScript = function (updateInfo, content) {
        if (content) {
            updateInfo.Content = JSON.stringify(content);
        }
        return this.clone(SiteScriptsCloneFactory, "UpdateSiteScript").execute({ updateInfo: updateInfo });
    };
    /**
     * Gets the site script syntax (JSON) for a specific list
     * @param listUrl The absolute url of the list to retrieve site script
     */
    _SiteScripts.prototype.getSiteScriptFromList = function (listUrl) {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScriptFromList").execute({ listUrl: listUrl });
    };
    /**
     * Gets the site script syntax (JSON) for a specific web
     * @param webUrl The absolute url of the web to retrieve site script
     * @param extractInfo configuration object to specify what to extract
     */
    _SiteScripts.prototype.getSiteScriptFromWeb = function (webUrl, info) {
        return this.clone(SiteScriptsCloneFactory, "getSiteScriptFromWeb").execute({ webUrl: webUrl, info: info });
    };
    tslib_1.__decorate([
        telemetry_1.tag("ss.getSiteScripts")
    ], _SiteScripts.prototype, "getSiteScripts", null);
    tslib_1.__decorate([
        telemetry_1.tag("ss.createSiteScript")
    ], _SiteScripts.prototype, "createSiteScript", null);
    tslib_1.__decorate([
        telemetry_1.tag("ss.getSiteScriptMetadata")
    ], _SiteScripts.prototype, "getSiteScriptMetadata", null);
    tslib_1.__decorate([
        telemetry_1.tag("ss.deleteSiteScript")
    ], _SiteScripts.prototype, "deleteSiteScript", null);
    tslib_1.__decorate([
        telemetry_1.tag("ss.updateSiteScript")
    ], _SiteScripts.prototype, "updateSiteScript", null);
    tslib_1.__decorate([
        telemetry_1.tag("ss.getSiteScriptFromList")
    ], _SiteScripts.prototype, "getSiteScriptFromList", null);
    tslib_1.__decorate([
        telemetry_1.tag("ss.getSiteScriptFromWeb")
    ], _SiteScripts.prototype, "getSiteScriptFromWeb", null);
    return _SiteScripts;
}(sharepointqueryable_1._SharePointQueryable));
exports._SiteScripts = _SiteScripts;
exports.SiteScripts = function (baseUrl, methodName) { return new _SiteScripts(baseUrl, methodName); };
var SiteScriptsCloneFactory = function (baseUrl, methodName) {
    if (methodName === void 0) { methodName = ""; }
    return exports.SiteScripts(baseUrl, methodName);
};
//# sourceMappingURL=types.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var metadata_1 = __webpack_require__(9);
var _UserCustomActions = /** @class */ (function (_super) {
    tslib_1.__extends(_UserCustomActions, _super);
    function _UserCustomActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    _UserCustomActions.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.UserCustomAction(this).concat("('" + id + "')"), "ucas.getById");
    };
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     */
    _UserCustomActions.prototype.add = function (properties) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this, odata_1.body(common_1.assign(metadata_1.metadata("SP.UserCustomAction"), properties)))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                action: this.getById(data.Id),
                                data: data,
                            }];
                }
            });
        });
    };
    /**
     * Deletes all user custom actions in the collection
     */
    _UserCustomActions.prototype.clear = function () {
        return operations_1.spPost(this.clone(exports.UserCustomActions, "clear"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("ucas.add")
    ], _UserCustomActions.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("ucas.clear")
    ], _UserCustomActions.prototype, "clear", null);
    _UserCustomActions = tslib_1.__decorate([
        decorators_1.defaultPath("usercustomactions")
    ], _UserCustomActions);
    return _UserCustomActions;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._UserCustomActions = _UserCustomActions;
exports.UserCustomActions = sharepointqueryable_1.spInvokableFactory(_UserCustomActions);
var _UserCustomAction = /** @class */ (function (_super) {
    tslib_1.__extends(_UserCustomAction, _super);
    function _UserCustomAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("uca");
        /**
        * Updates this user custom action with the supplied properties
        *
        * @param properties An information object of property names and values to update for this user custom action
        */
        _this.update = _this._update("SP.UserCustomAction", function (data) { return ({ data: data, action: _this }); });
        return _this;
    }
    return _UserCustomAction;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._UserCustomAction = _UserCustomAction;
exports.UserCustomAction = sharepointqueryable_1.spInvokableFactory(_UserCustomAction);
var UserCustomActionRegistrationType;
(function (UserCustomActionRegistrationType) {
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["None"] = 0] = "None";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["List"] = 1] = "List";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ContentType"] = 2] = "ContentType";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ProgId"] = 3] = "ProgId";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["FileType"] = 4] = "FileType";
})(UserCustomActionRegistrationType = exports.UserCustomActionRegistrationType || (exports.UserCustomActionRegistrationType = {}));
var UserCustomActionScope;
(function (UserCustomActionScope) {
    UserCustomActionScope[UserCustomActionScope["Unknown"] = 0] = "Unknown";
    UserCustomActionScope[UserCustomActionScope["Site"] = 2] = "Site";
    UserCustomActionScope[UserCustomActionScope["Web"] = 3] = "Web";
    UserCustomActionScope[UserCustomActionScope["List"] = 4] = "List";
})(UserCustomActionScope = exports.UserCustomActionScope || (exports.UserCustomActionScope = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
var splibconfig_1 = __webpack_require__(22);
/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl) {
    return new Promise(function (resolve) {
        if (common_1.isUrlAbsolute(candidateUrl)) {
            // if we are already absolute, then just return the url
            return resolve(candidateUrl);
        }
        if (splibconfig_1.SPRuntimeConfig.baseUrl !== null) {
            // base url specified either with baseUrl of spfxContext config property
            return resolve(common_1.combine(splibconfig_1.SPRuntimeConfig.baseUrl, candidateUrl));
        }
        if (global._spPageContextInfo !== undefined) {
            // operating in classic pages
            if (common_1.hOP(global._spPageContextInfo, "webAbsoluteUrl")) {
                return resolve(common_1.combine(global._spPageContextInfo.webAbsoluteUrl, candidateUrl));
            }
            else if (common_1.hOP(global._spPageContextInfo, "webServerRelativeUrl")) {
                return resolve(common_1.combine(global._spPageContextInfo.webServerRelativeUrl, candidateUrl));
            }
        }
        // does window.location exist and have a certain path part in it?
        if (global.location !== undefined) {
            var baseUrl_1 = global.location.toString().toLowerCase();
            ["/_layouts/", "/siteassets/"].forEach(function (s) {
                var index = baseUrl_1.indexOf(s);
                if (index > 0) {
                    return resolve(common_1.combine(baseUrl_1.substr(0, index), candidateUrl));
                }
            });
        }
        return resolve(candidateUrl);
    });
}
exports.toAbsoluteUrl = toAbsoluteUrl;
//# sourceMappingURL=toabsoluteurl.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var common_1 = __webpack_require__(1);
var logging_1 = __webpack_require__(8);
var sphttpclient_1 = __webpack_require__(23);
var splibconfig_1 = __webpack_require__(22);
var toabsoluteurl_1 = __webpack_require__(29);
/**
 * Manages a batch of OData operations
 */
var SPBatch = /** @class */ (function (_super) {
    tslib_1.__extends(SPBatch, _super);
    function SPBatch(baseUrl) {
        var _this = _super.call(this) || this;
        _this.baseUrl = baseUrl;
        return _this;
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    SPBatch.ParseResponse = function (body) {
        return new Promise(function (resolve, reject) {
            var responses = [];
            var header = "--batchresponse_";
            // Ex. "HTTP/1.1 500 Internal Server Error"
            var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
            var lines = body.split("\n");
            var state = "batch";
            var status;
            var statusText;
            for (var i = 0; i < lines.length; ++i) {
                var line = lines[i];
                switch (state) {
                    case "batch":
                        if (line.substr(0, header.length) === header) {
                            state = "batchHeaders";
                        }
                        else {
                            if (line.trim() !== "") {
                                throw Error("Invalid response, line " + i);
                            }
                        }
                        break;
                    case "batchHeaders":
                        if (line.trim() === "") {
                            state = "status";
                        }
                        break;
                    case "status":
                        var parts = statusRegExp.exec(line);
                        if (parts.length !== 3) {
                            throw Error("Invalid status, line " + i);
                        }
                        status = parseInt(parts[1], 10);
                        statusText = parts[2];
                        state = "statusHeaders";
                        break;
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
                reject(Error("Unexpected end of input"));
            }
            resolve(responses);
        });
    };
    SPBatch.prototype.executeImpl = function () {
        var _this = this;
        logging_1.Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
        // if we don't have any requests, don't bother sending anything
        // this could be due to caching further upstream, or just an empty batch
        if (this.requests.length < 1) {
            logging_1.Logger.write("Resolving empty batch.", 1 /* Info */);
            return Promise.resolve();
        }
        // creating the client here allows the url to be populated for nodejs client as well as potentially
        // any other hacks needed for other types of clients. Essentially allows the absoluteRequestUrl
        // below to be correct
        var client = new sphttpclient_1.SPHttpClient();
        // due to timing we need to get the absolute url here so we can use it for all the individual requests
        // and for sending the entire batch
        return toabsoluteurl_1.toAbsoluteUrl(this.baseUrl).then(function (absoluteRequestUrl) {
            // build all the requests, send them, pipe results in order to parsers
            var batchBody = [];
            var currentChangeSetId = "";
            for (var i = 0; i < _this.requests.length; i++) {
                var reqInfo = _this.requests[i];
                if (reqInfo.method === "GET") {
                    if (currentChangeSetId.length > 0) {
                        // end an existing change set
                        batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                        currentChangeSetId = "";
                    }
                    batchBody.push("--batch_" + _this.batchId + "\n");
                }
                else {
                    if (currentChangeSetId.length < 1) {
                        // start new change set
                        currentChangeSetId = common_1.getGUID();
                        batchBody.push("--batch_" + _this.batchId + "\n");
                        batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
                    }
                    batchBody.push("--changeset_" + currentChangeSetId + "\n");
                }
                // common batch part prefix
                batchBody.push("Content-Type: application/http\n");
                batchBody.push("Content-Transfer-Encoding: binary\n\n");
                // these are the per-request headers
                var headers = new Headers();
                // this is the url of the individual request within the batch
                var url = common_1.isUrlAbsolute(reqInfo.url) ? reqInfo.url : common_1.combine(absoluteRequestUrl, reqInfo.url);
                logging_1.Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Adding request " + reqInfo.method + " " + url + " to batch.", 0 /* Verbose */);
                if (reqInfo.method !== "GET") {
                    var method = reqInfo.method;
                    var castHeaders = reqInfo.options.headers;
                    if (common_1.hOP(reqInfo, "options") && common_1.hOP(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
                        method = castHeaders["X-HTTP-Method"];
                        delete castHeaders["X-HTTP-Method"];
                    }
                    batchBody.push(method + " " + url + " HTTP/1.1\n");
                    headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                else {
                    batchBody.push(reqInfo.method + " " + url + " HTTP/1.1\n");
                }
                // merge global config headers
                common_1.mergeHeaders(headers, splibconfig_1.SPRuntimeConfig.headers);
                // merge per-request headers
                if (reqInfo.options) {
                    common_1.mergeHeaders(headers, reqInfo.options.headers);
                }
                // lastly we apply any default headers we need that may not exist
                if (!headers.has("Accept")) {
                    headers.append("Accept", "application/json");
                }
                if (!headers.has("Content-Type")) {
                    headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                if (!headers.has("X-ClientService-ClientTag")) {
                    headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.0.1");
                }
                // write headers into batch body
                headers.forEach(function (value, name) {
                    batchBody.push(name + ": " + value + "\n");
                });
                batchBody.push("\n");
                if (reqInfo.options.body) {
                    batchBody.push(reqInfo.options.body + "\n\n");
                }
            }
            if (currentChangeSetId.length > 0) {
                // Close the changeset
                batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                currentChangeSetId = "";
            }
            batchBody.push("--batch_" + _this.batchId + "--\n");
            var batchOptions = {
                "body": batchBody.join(""),
                "headers": {
                    "Content-Type": "multipart/mixed; boundary=batch_" + _this.batchId,
                },
                "method": "POST",
            };
            logging_1.Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
            return client.fetch(common_1.combine(absoluteRequestUrl, "/_api/$batch"), batchOptions)
                .then(function (r) { return r.text(); })
                .then(SPBatch.ParseResponse)
                .then(function (responses) {
                if (responses.length !== _this.requests.length) {
                    throw Error("Could not properly parse responses to match requests in batch.");
                }
                logging_1.Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                return responses.reduce(function (chain, response, index) {
                    var request = _this.requests[index];
                    logging_1.Logger.write("[" + request.id + "] (" + (new Date()).getTime() + ") Resolving request in batch " + _this.batchId + ".", 1 /* Info */);
                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                }, Promise.resolve());
            });
        });
    };
    return SPBatch;
}(odata_1.Batch));
exports.SPBatch = SPBatch;
//# sourceMappingURL=batch.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(18);
var types_2 = __webpack_require__(18);
exports.Site = types_2.Site;
Reflect.defineProperty(rest_1.SPRest.prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.Site(this._baseUrl).configure(this._options);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(7);
var rest_1 = __webpack_require__(13);
var types_2 = __webpack_require__(7);
exports.Web = types_2.Web;
exports.Webs = types_2.Webs;
Reflect.defineProperty(rest_1.SPRest.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.Web(this._baseUrl).configure(this._options);
    },
});
rest_1.SPRest.prototype.createBatch = function () {
    return this.web.createBatch();
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _Features = /** @class */ (function (_super) {
    tslib_1.__extends(_Features, _super);
    function _Features() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds (activates) the specified feature
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    _Features.prototype.add = function (id, force) {
        if (force === void 0) { force = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Features, "add"), odata_1.body({
                            featdefScope: 0,
                            featureId: id,
                            force: force,
                        }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                feature: this.getById(id),
                            }];
                }
            });
        });
    };
    /**
     * Gets a feature from the collection with the specified guid
     *
     * @param id The Id of the feature (GUID)
     */
    _Features.prototype.getById = function (id) {
        var feature = exports.Feature(this);
        feature.concat("('" + id + "')");
        return telemetry_1.tag.configure(feature, "fes.getById");
    };
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    _Features.prototype.remove = function (id, force) {
        if (force === void 0) { force = false; }
        return operations_1.spPost(this.clone(exports.Features, "remove"), odata_1.body({
            featureId: id,
            force: force,
        }));
    };
    tslib_1.__decorate([
        telemetry_1.tag("fes.add")
    ], _Features.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("fes.remove")
    ], _Features.prototype, "remove", null);
    _Features = tslib_1.__decorate([
        decorators_1.defaultPath("features")
    ], _Features);
    return _Features;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Features = _Features;
exports.Features = sharepointqueryable_1.spInvokableFactory(_Features);
var _Feature = /** @class */ (function (_super) {
    tslib_1.__extends(_Feature, _super);
    function _Feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes (deactivates) the feature
     *
     * @param force If true the feature deactivation will be forced
     */
    _Feature.prototype.deactivate = function (force) {
        if (force === void 0) { force = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var removeDependency, feature, promise;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, exports.Feature(this).select("DefinitionId")()];
                    case 1:
                        feature = _a.sent();
                        promise = this.getParent(exports.Features, this.parentUrl, "", this.batch).remove(feature.DefinitionId, force);
                        removeDependency();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("fe.deactivate")
    ], _Feature.prototype, "deactivate", null);
    return _Feature;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Feature = _Feature;
exports.Feature = sharepointqueryable_1.spInvokableFactory(_Feature);
//# sourceMappingURL=types.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(9);
var odata_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _Fields = /** @class */ (function (_super) {
    tslib_1.__extends(_Fields, _super);
    function _Fields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a field from the collection by id
     *
     * @param id The Id of the list
     */
    _Fields.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.Field(this).concat("('" + id + "')"), "fs.getById");
    };
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    _Fields.prototype.getByTitle = function (title) {
        return telemetry_1.tag.configure(exports.Field(this, "getByTitle('" + title + "')"), "fs.getByTitle");
    };
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    _Fields.prototype.getByInternalNameOrTitle = function (name) {
        return telemetry_1.tag.configure(exports.Field(this, "getByInternalNameOrTitle('" + name + "')"), "fs.getByInternalNameOrTitle");
    };
    /**
     * Creates a field based on the specified schema
     *
     * @param xml A string or XmlSchemaFieldCreationInformation instance descrbing the field to create
     */
    _Fields.prototype.createFieldAsXml = function (xml) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof xml === "string") {
                            xml = { SchemaXml: xml };
                        }
                        postBody = odata_1.body({
                            "parameters": common_1.assign(metadata_1.metadata("SP.XmlSchemaFieldCreationInformation"), xml),
                        });
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Fields, "createfieldasxml"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param fieldType The new field's type (ex: SP.FieldText)
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.add = function (title, fieldType, properties) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(Object.assign(metadata_1.metadata(fieldType), {
                            "Title": title,
                        }, properties));
                        if (!telemetry_1.tag.isTagged(this)) {
                            telemetry_1.tag.configure(this, "fs.add");
                        }
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Fields, null), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new SP.FieldText to the collection
     *
     * @param title The field title
     * @param maxLength The maximum number of characters allowed in the value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addText = function (title, maxLength, properties) {
        if (maxLength === void 0) { maxLength = 255; }
        var props = {
            FieldTypeKind: 2,
            MaxLength: maxLength,
        };
        return this.add(title, "SP.FieldText", common_1.assign(props, properties));
    };
    /**
     * Adds a new SP.FieldCalculated to the collection
     *
     * @param title The field title.
     * @param formula The formula for the field.
     * @param dateFormat The date and time format that is displayed in the field.
     * @param outputType Specifies the output format for the field. Represents a FieldType value.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addCalculated = function (title, formula, dateFormat, outputType, properties) {
        if (outputType === void 0) { outputType = FieldTypes.Text; }
        var props = {
            DateFormat: dateFormat,
            FieldTypeKind: 17,
            Formula: formula,
            OutputType: outputType,
        };
        return this.add(title, "SP.FieldCalculated", common_1.assign(props, properties));
    };
    /**
     * Adds a new SP.FieldDateTime to the collection
     *
     * @param title The field title
     * @param displayFormat The format of the date and time that is displayed in the field.
     * @param calendarType Specifies the calendar type of the field.
     * @param friendlyDisplayFormat The type of friendly display format that is used in the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addDateTime = function (title, displayFormat, calendarType, friendlyDisplayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = DateTimeFieldFormatType.DateOnly; }
        if (calendarType === void 0) { calendarType = CalendarType.Gregorian; }
        if (friendlyDisplayFormat === void 0) { friendlyDisplayFormat = DateTimeFieldFriendlyFormatType.Unspecified; }
        var props = {
            DateTimeCalendarType: calendarType,
            DisplayFormat: displayFormat,
            FieldTypeKind: 4,
            FriendlyDisplayFormat: friendlyDisplayFormat,
        };
        return this.add(title, "SP.FieldDateTime", common_1.assign(props, properties));
    };
    /**
     * Adds a new SP.FieldNumber to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addNumber = function (title, minValue, maxValue, properties) {
        var props = { FieldTypeKind: 9 };
        if (minValue !== undefined) {
            props = common_1.assign({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = common_1.assign({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldNumber", common_1.assign(props, properties));
    };
    /**
     * Adds a new SP.FieldCurrency to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addCurrency = function (title, minValue, maxValue, currencyLocalId, properties) {
        if (currencyLocalId === void 0) { currencyLocalId = 1033; }
        var props = {
            CurrencyLocaleId: currencyLocalId,
            FieldTypeKind: 10,
        };
        if (minValue !== undefined) {
            props = common_1.assign({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = common_1.assign({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldCurrency", common_1.assign(props, properties));
    };
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
    _Fields.prototype.addMultilineText = function (title, numberOfLines, richText, restrictedMode, appendOnly, allowHyperlink, properties) {
        if (numberOfLines === void 0) { numberOfLines = 6; }
        if (richText === void 0) { richText = true; }
        if (restrictedMode === void 0) { restrictedMode = false; }
        if (appendOnly === void 0) { appendOnly = false; }
        if (allowHyperlink === void 0) { allowHyperlink = true; }
        var props = {
            AllowHyperlink: allowHyperlink,
            AppendOnly: appendOnly,
            FieldTypeKind: 3,
            NumberOfLines: numberOfLines,
            RestrictedMode: restrictedMode,
            RichText: richText,
        };
        return this.add(title, "SP.FieldMultiLineText", common_1.assign(props, properties));
    };
    /**
     * Adds a new SP.FieldUrl to the collection
     *
     * @param title The field title
     */
    _Fields.prototype.addUrl = function (title, displayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = UrlFieldFormatType.Hyperlink; }
        var props = {
            DisplayFormat: displayFormat,
            FieldTypeKind: 11,
        };
        return this.add(title, "SP.FieldUrl", common_1.assign(props, properties));
    };
    /** Adds a user field to the colleciton
    *
    * @param title The new field's title
    * @param selectionMode The selection mode of the field
    * @param selectionGroup Value that specifies the identifier of the SharePoint group whose members can be selected as values of the field
    * @param properties
    */
    _Fields.prototype.addUser = function (title, selectionMode, properties) {
        var props = {
            FieldTypeKind: 20,
            SelectionMode: selectionMode,
        };
        return this.add(title, "SP.FieldUser", common_1.assign(props, properties));
    };
    /**
     * Adds a SP.FieldLookup to the collection
     *
     * @param title The new field's title
     * @param lookupListId The guid id of the list where the source of the lookup is found
     * @param lookupFieldName The internal name of the field in the source list
     * @param properties Set of additional properties to set on the new field
     */
    _Fields.prototype.addLookup = function (title, lookupListId, lookupFieldName, properties) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var props, postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = common_1.assign({
                            FieldTypeKind: 7,
                            LookupFieldName: lookupFieldName,
                            LookupListId: lookupListId,
                            Title: title,
                        }, properties);
                        postBody = odata_1.body({
                            "parameters": common_1.assign(metadata_1.metadata("SP.FieldCreationInformation"), props),
                        });
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Fields, "addfield"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new SP.FieldChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param format The display format of the available options for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addChoice = function (title, choices, format, fillIn, properties) {
        if (format === void 0) { format = ChoiceFieldFormatType.Dropdown; }
        var props = {
            Choices: {
                results: choices,
            },
            EditFormat: format,
            FieldTypeKind: 6,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldChoice", common_1.assign(props, properties));
    };
    /**
     * Adds a new SP.FieldMultiChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addMultiChoice = function (title, choices, fillIn, properties) {
        var props = {
            Choices: {
                results: choices,
            },
            FieldTypeKind: 15,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldMultiChoice", common_1.assign(props, properties));
    };
    /**
     * Adds a new SP.FieldBoolean to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addBoolean = function (title, properties) {
        var props = {
            FieldTypeKind: 8,
        };
        return this.add(title, "SP.Field", common_1.assign(props, properties));
    };
    /**
    * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
    *
    * @param displayName The display name of the new field.
    * @param primaryLookupFieldId The guid of the primary Lookup Field.
    * @param showField Which field to show from the lookup list.
    */
    _Fields.prototype.addDependentLookupField = function (displayName, primaryLookupFieldId, showField) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var path, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "adddependentlookupfield(displayName='" + displayName + "', primarylookupfieldid='" + primaryLookupFieldId + "', showfield='" + showField + "')";
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Fields, path))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new SP.FieldLocation to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addLocation = function (title, properties) {
        var props = { FieldTypeKind: 33 };
        return this.add(title, "SP.FieldLocation", common_1.assign(props, properties));
    };
    tslib_1.__decorate([
        telemetry_1.tag("fs.createFieldAsXml")
    ], _Fields.prototype, "createFieldAsXml", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addText")
    ], _Fields.prototype, "addText", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addCalculated")
    ], _Fields.prototype, "addCalculated", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addDateTime")
    ], _Fields.prototype, "addDateTime", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addNumber")
    ], _Fields.prototype, "addNumber", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addCurrency")
    ], _Fields.prototype, "addCurrency", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addMultilineText")
    ], _Fields.prototype, "addMultilineText", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addUrl")
    ], _Fields.prototype, "addUrl", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addUser")
    ], _Fields.prototype, "addUser", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addLookup")
    ], _Fields.prototype, "addLookup", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addChoice")
    ], _Fields.prototype, "addChoice", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addMultiChoice")
    ], _Fields.prototype, "addMultiChoice", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addBoolean")
    ], _Fields.prototype, "addBoolean", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addDependentLookupField")
    ], _Fields.prototype, "addDependentLookupField", null);
    tslib_1.__decorate([
        telemetry_1.tag("fs.addLocation")
    ], _Fields.prototype, "addLocation", null);
    _Fields = tslib_1.__decorate([
        decorators_1.defaultPath("fields")
    ], _Fields);
    return _Fields;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Fields = _Fields;
exports.Fields = sharepointqueryable_1.spInvokableFactory(_Fields);
var _Field = /** @class */ (function (_super) {
    tslib_1.__extends(_Field, _super);
    function _Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updates this field instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param fieldType The type value, required to update child field type properties
     */
    _Field.prototype.update = function (properties, fieldType) {
        if (fieldType === void 0) { fieldType = "SP.Field"; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = odata_1.body(common_1.assign(metadata_1.metadata(fieldType), properties), odata_1.headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, operations_1.spPost(this, req)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this,
                            }];
                }
            });
        });
    };
    /**
     * Sets the value of the ShowInDisplayForm property for this field.
     */
    _Field.prototype.setShowInDisplayForm = function (show) {
        return operations_1.spPost(this.clone(exports.Field, "setshowindisplayform(" + show + ")"));
    };
    /**
     * Sets the value of the ShowInEditForm property for this field.
     */
    _Field.prototype.setShowInEditForm = function (show) {
        return operations_1.spPost(this.clone(exports.Field, "setshowineditform(" + show + ")"));
    };
    /**
     * Sets the value of the ShowInNewForm property for this field.
     */
    _Field.prototype.setShowInNewForm = function (show) {
        return operations_1.spPost(this.clone(exports.Field, "setshowinnewform(" + show + ")"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("f.update")
    ], _Field.prototype, "update", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.setShowInDisplayForm")
    ], _Field.prototype, "setShowInDisplayForm", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.setShowInEditForm")
    ], _Field.prototype, "setShowInEditForm", null);
    tslib_1.__decorate([
        telemetry_1.tag("f.setShowInNewForm")
    ], _Field.prototype, "setShowInNewForm", null);
    return _Field;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Field = _Field;
exports.Field = sharepointqueryable_1.spInvokableFactory(_Field);
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
})(FieldTypes = exports.FieldTypes || (exports.FieldTypes = {}));
var DateTimeFieldFormatType;
(function (DateTimeFieldFormatType) {
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
})(DateTimeFieldFormatType = exports.DateTimeFieldFormatType || (exports.DateTimeFieldFormatType = {}));
var DateTimeFieldFriendlyFormatType;
(function (DateTimeFieldFriendlyFormatType) {
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Unspecified"] = 0] = "Unspecified";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Disabled"] = 1] = "Disabled";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Relative"] = 2] = "Relative";
})(DateTimeFieldFriendlyFormatType = exports.DateTimeFieldFriendlyFormatType || (exports.DateTimeFieldFriendlyFormatType = {}));
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
})(AddFieldOptions = exports.AddFieldOptions || (exports.AddFieldOptions = {}));
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
})(CalendarType = exports.CalendarType || (exports.CalendarType = {}));
var UrlFieldFormatType;
(function (UrlFieldFormatType) {
    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
})(UrlFieldFormatType = exports.UrlFieldFormatType || (exports.UrlFieldFormatType = {}));
var FieldUserSelectionMode;
(function (FieldUserSelectionMode) {
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleAndGroups"] = 1] = "PeopleAndGroups";
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleOnly"] = 0] = "PeopleOnly";
})(FieldUserSelectionMode = exports.FieldUserSelectionMode || (exports.FieldUserSelectionMode = {}));
var ChoiceFieldFormatType;
(function (ChoiceFieldFormatType) {
    ChoiceFieldFormatType[ChoiceFieldFormatType["Dropdown"] = 0] = "Dropdown";
    ChoiceFieldFormatType[ChoiceFieldFormatType["RadioButtons"] = 1] = "RadioButtons";
})(ChoiceFieldFormatType = exports.ChoiceFieldFormatType || (exports.ChoiceFieldFormatType = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(9);
var odata_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
/**
 * Represents a collection of navigation nodes
 *
 */
var _NavigationNodes = /** @class */ (function (_super) {
    tslib_1.__extends(_NavigationNodes, _super);
    function _NavigationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    _NavigationNodes.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.NavigationNode(this).concat("(" + id + ")"), "nns.getById");
    };
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    _NavigationNodes.prototype.add = function (title, url, visible) {
        if (visible === void 0) { visible = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata("SP.NavigationNode"), {
                            IsVisible: visible,
                            Title: title,
                            Url: url,
                        }));
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.NavigationNodes, null), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                node: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    _NavigationNodes.prototype.moveAfter = function (nodeId, previousNodeId) {
        var postBody = odata_1.body({
            nodeId: nodeId,
            previousNodeId: previousNodeId,
        });
        return operations_1.spPost(this.clone(exports.NavigationNodes, "MoveAfter"), postBody);
    };
    tslib_1.__decorate([
        telemetry_1.tag("nns.add")
    ], _NavigationNodes.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("nns.moveAfter")
    ], _NavigationNodes.prototype, "moveAfter", null);
    return _NavigationNodes;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._NavigationNodes = _NavigationNodes;
exports.NavigationNodes = sharepointqueryable_1.spInvokableFactory(_NavigationNodes);
/**
 * Represents an instance of a navigation node
 *
 */
var _NavigationNode = /** @class */ (function (_super) {
    tslib_1.__extends(_NavigationNode, _super);
    function _NavigationNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("nn");
        return _this;
    }
    Object.defineProperty(_NavigationNode.prototype, "children", {
        /**
         * Represents the child nodes of this node
         */
        get: function () {
            return telemetry_1.tag.configure(exports.NavigationNodes(this, "children"), "nn.children");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this node
     *
     * @param properties Properties used to update this node
     */
    _NavigationNode.prototype.update = function (properties) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(common_1.assign(metadata_1.metadata("SP.NavigationNode"), properties), odata_1.headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, operations_1.spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                node: this,
                            }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("nn.update")
    ], _NavigationNode.prototype, "update", null);
    return _NavigationNode;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._NavigationNode = _NavigationNode;
exports.NavigationNode = sharepointqueryable_1.spInvokableFactory(_NavigationNode);
/**
 * Exposes the navigation components
 *
 */
var _Navigation = /** @class */ (function (_super) {
    tslib_1.__extends(_Navigation, _super);
    function _Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Navigation.prototype, "quicklaunch", {
        /**
         * Gets the quicklaunch navigation nodes for the current context
         *
         */
        get: function () {
            return telemetry_1.tag.configure(exports.NavigationNodes(this, "quicklaunch"), "n.quicklaunch");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Navigation.prototype, "topNavigationBar", {
        /**
         * Gets the top bar navigation nodes for the current context
         *
         */
        get: function () {
            return telemetry_1.tag.configure(exports.NavigationNodes(this, "topnavigationbar"), "n.topnavigationbar");
        },
        enumerable: true,
        configurable: true
    });
    _Navigation = tslib_1.__decorate([
        decorators_1.defaultPath("navigation")
    ], _Navigation);
    return _Navigation;
}(sharepointqueryable_1._SharePointQueryable));
exports._Navigation = _Navigation;
exports.Navigation = sharepointqueryable_1.spInvokableFactory(_Navigation);
/**
 * Represents the top level navigation service
 */
var _NavigationService = /** @class */ (function (_super) {
    tslib_1.__extends(_NavigationService, _super);
    function _NavigationService(path) {
        if (path === void 0) { path = null; }
        return _super.call(this, "_api/navigation", path) || this;
    }
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    _NavigationService.prototype.getMenuState = function (menuNodeKey, depth, mapProviderName, customProperties) {
        if (menuNodeKey === void 0) { menuNodeKey = null; }
        if (depth === void 0) { depth = 10; }
        if (mapProviderName === void 0) { mapProviderName = null; }
        if (customProperties === void 0) { customProperties = null; }
        return operations_1.spPost(exports.NavigationService("MenuState"), odata_1.body({
            customProperties: customProperties,
            depth: depth,
            mapProviderName: mapProviderName,
            menuNodeKey: menuNodeKey,
        }));
    };
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    _NavigationService.prototype.getMenuNodeKey = function (currentUrl, mapProviderName) {
        if (mapProviderName === void 0) { mapProviderName = null; }
        return operations_1.spPost(exports.NavigationService("MenuNodeKey"), odata_1.body({
            currentUrl: currentUrl,
            mapProviderName: mapProviderName,
        }));
    };
    tslib_1.__decorate([
        telemetry_1.tag("ns.getMenuState")
    ], _NavigationService.prototype, "getMenuState", null);
    tslib_1.__decorate([
        telemetry_1.tag("ns.getMenuNodeKey")
    ], _NavigationService.prototype, "getMenuNodeKey", null);
    return _NavigationService;
}(sharepointqueryable_1._SharePointQueryable));
exports._NavigationService = _NavigationService;
exports.NavigationService = function (path) { return new _NavigationService(path); };
//# sourceMappingURL=types.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(9);
var odata_1 = __webpack_require__(2);
var operations_1 = __webpack_require__(4);
var decorators_1 = __webpack_require__(6);
var telemetry_1 = __webpack_require__(5);
var funcs = new Map([
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
var props = new Map([]);
function toPropCase(str) {
    return str.replace(/^(.)/, function ($1) { return $1.toUpperCase(); });
}
/**
 * Creates a new instance of the SearchQueryBuilder
 *
 * @param queryText Initial query text
 * @param _query Any initial query configuration
 */
function SearchQueryBuilder(queryText, _query) {
    if (queryText === void 0) { queryText = ""; }
    if (_query === void 0) { _query = {}; }
    return new Proxy({
        query: Object.assign({
            Querytext: queryText,
        }, _query),
    }, {
        get: function (self, propertyKey, proxy) {
            var pk = propertyKey.toString();
            if (pk === "toSearchQuery") {
                return function () { return self.query; };
            }
            if (funcs.has(pk)) {
                return function () {
                    var value = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        value[_i] = arguments[_i];
                    }
                    var mappedPk = funcs.get(pk);
                    self.query[mappedPk.length > 0 ? mappedPk : toPropCase(pk)] = value.length > 1 ? value : value[0];
                    return proxy;
                };
            }
            var propKey = props.has(pk) ? props.get(pk) : toPropCase(pk);
            self.query[propKey] = true;
            return proxy;
        },
    });
}
exports.SearchQueryBuilder = SearchQueryBuilder;
var queryRegex = /_api\/search\/postquery$/i;
/**
 * Describes the search API
 *
 */
var _Search = /** @class */ (function (_super) {
    tslib_1.__extends(_Search, _super);
    function _Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns Promise
     */
    _Search.prototype.execute = function (queryInit) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, postBody, cacheKey, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.parseQuery(queryInit);
                        postBody = odata_1.body({
                            request: common_1.assign(metadata_1.metadata("Microsoft.Office.Server.Search.REST.SearchRequest"), Object.assign({}, query, {
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
                            cacheKey = "PnPjs.SearchWithCaching(" + common_1.getHashCode(postBody.body) + ")";
                            if (common_1.objectDefinedNotNull(this.data.cachingOptions)) {
                                // if our key ends in the postquery url we overwrite it
                                if (queryRegex.test(this.data.cachingOptions.key)) {
                                    this.data.cachingOptions.key = cacheKey;
                                }
                            }
                            else {
                                this.data.cachingOptions = new odata_1.CachingOptions(cacheKey);
                            }
                        }
                        return [4 /*yield*/, operations_1.spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new SearchResults(data, this.toUrl(), query)];
                }
            });
        });
    };
    /**
     * Fix array property
     *
     * @param prop property to fix for container struct
     */
    _Search.prototype.fixArrProp = function (prop) {
        if (typeof prop === "undefined") {
            return ({ results: [] });
        }
        return { results: common_1.isArray(prop) ? prop : [prop] };
    };
    /**
     * Translates one of the query initializers into a SearchQuery instance
     *
     * @param query
     */
    _Search.prototype.parseQuery = function (query) {
        var finalQuery;
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
    };
    tslib_1.__decorate([
        telemetry_1.tag("se.execute")
    ], _Search.prototype, "execute", null);
    _Search = tslib_1.__decorate([
        decorators_1.defaultPath("_api/search/postquery")
    ], _Search);
    return _Search;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Search = _Search;
exports.Search = function (baseUrl, options) {
    if (options === void 0) { options = {}; }
    return function (queryInit) {
        return (new _Search(baseUrl)).configure(options).execute(queryInit);
    };
};
var SearchResults = /** @class */ (function () {
    function SearchResults(rawResponse, _url, _query, _raw, _primary) {
        if (_raw === void 0) { _raw = null; }
        if (_primary === void 0) { _primary = null; }
        this._url = _url;
        this._query = _query;
        this._raw = _raw;
        this._primary = _primary;
        this._url = this._url.replace(queryRegex, "");
        this._raw = rawResponse.postquery ? rawResponse.postquery : rawResponse;
    }
    Object.defineProperty(SearchResults.prototype, "ElapsedTime", {
        get: function () {
            return this.RawSearchResults.ElapsedTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RowCount", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.RowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRows", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.TotalRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRowsIncludingDuplicates", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.TotalRowsIncludingDuplicates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RawSearchResults", {
        get: function () {
            return this._raw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "PrimarySearchResults", {
        get: function () {
            if (this._primary === null) {
                this._primary = this.formatSearchResults(this._raw.PrimaryQueryResult.RelevantResults.Table.Rows);
            }
            return this._primary;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a page of results
     *
     * @param pageNumber Index of the page to return. Used to determine StartRow
     * @param pageSize Optional, items per page (default = 10)
     */
    SearchResults.prototype.getPage = function (pageNumber, pageSize) {
        // if we got all the available rows we don't have another page
        if (this.TotalRows < this.RowCount) {
            return Promise.resolve(null);
        }
        // if pageSize is supplied, then we use that regardless of any previous values
        // otherwise get the previous RowLimit or default to 10
        var rows = pageSize !== undefined ? pageSize : common_1.hOP(this._query, "RowLimit") ? this._query.RowLimit : 10;
        var query = common_1.assign(this._query, {
            RowLimit: rows,
            StartRow: rows * (pageNumber - 1),
        });
        // we have reached the end
        if (query.StartRow > this.TotalRows) {
            return Promise.resolve(null);
        }
        return exports.Search(this._url)(query);
    };
    /**
     * Formats a search results array
     *
     * @param rawResults The array to process
     */
    SearchResults.prototype.formatSearchResults = function (rawResults) {
        var e_1, _a;
        var results = new Array();
        var tempResults = rawResults.results ? rawResults.results : rawResults;
        try {
            for (var tempResults_1 = tslib_1.__values(tempResults), tempResults_1_1 = tempResults_1.next(); !tempResults_1_1.done; tempResults_1_1 = tempResults_1.next()) {
                var tempResult = tempResults_1_1.value;
                var cells = tempResult.Cells.results ? tempResult.Cells.results : tempResult.Cells;
                results.push(cells.reduce(function (res, cell) {
                    Reflect.defineProperty(res, cell.Key, {
                        configurable: false,
                        enumerable: true,
                        value: cell.Value,
                        writable: false,
                    });
                    return res;
                }, {}));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tempResults_1_1 && !tempResults_1_1.done && (_a = tempResults_1.return)) _a.call(tempResults_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return results;
    };
    return SearchResults;
}());
exports.SearchResults = SearchResults;
//# sourceMappingURL=query.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var types_1 = __webpack_require__(26);
var common_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(9);
var odata_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _SiteUsers = /** @class */ (function (_super) {
    tslib_1.__extends(_SiteUsers, _super);
    function _SiteUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    _SiteUsers.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.SiteUser(this, "getById(" + id + ")"), "sus.getById");
    };
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    _SiteUsers.prototype.getByEmail = function (email) {
        return telemetry_1.tag.configure(exports.SiteUser(this, "getByEmail('" + email + "')"), "sus.getByEmail");
    };
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    _SiteUsers.prototype.getByLoginName = function (loginName) {
        return telemetry_1.tag.configure(exports.SiteUser(this).concat("('!@v::" + encodeURIComponent(loginName) + "')"), "sus.getByLoginName");
    };
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    _SiteUsers.prototype.removeById = function (id) {
        return operations_1.spPost(this.clone(exports.SiteUsers, "removeById(" + id + ")"));
    };
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    _SiteUsers.prototype.removeByLoginName = function (loginName) {
        var o = this.clone(exports.SiteUsers, "removeByLoginName(@v)");
        o.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return operations_1.spPost(o);
    };
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    _SiteUsers.prototype.add = function (loginName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.SiteUsers, null), odata_1.body(common_1.assign(metadata_1.metadata("SP.User"), { LoginName: loginName })))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getByLoginName(loginName)];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("sus.remId")
    ], _SiteUsers.prototype, "removeById", null);
    tslib_1.__decorate([
        telemetry_1.tag("sus.remLoginName")
    ], _SiteUsers.prototype, "removeByLoginName", null);
    tslib_1.__decorate([
        telemetry_1.tag("sus.add")
    ], _SiteUsers.prototype, "add", null);
    _SiteUsers = tslib_1.__decorate([
        decorators_1.defaultPath("siteusers")
    ], _SiteUsers);
    return _SiteUsers;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._SiteUsers = _SiteUsers;
exports.SiteUsers = sharepointqueryable_1.spInvokableFactory(_SiteUsers);
/**
 * Describes a single user
 *
 */
var _SiteUser = /** @class */ (function (_super) {
    tslib_1.__extends(_SiteUser, _super);
    function _SiteUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("su");
        /**
        * Updates this user instance with the supplied properties
        *
        * @param properties A plain object of property names and values to update for the user
        */
        _this.update = _this._update("SP.User", function (data) { return ({ data: data, user: _this }); });
        return _this;
    }
    Object.defineProperty(_SiteUser.prototype, "groups", {
        /**
         * Gets the groups for this user
         *
         */
        get: function () {
            return telemetry_1.tag.configure(types_1.SiteGroups(this, "groups"), "su.groups");
        },
        enumerable: true,
        configurable: true
    });
    return _SiteUser;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._SiteUser = _SiteUser;
exports.SiteUser = sharepointqueryable_1.spInvokableFactory(_SiteUser);
//# sourceMappingURL=types.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var types_1 = __webpack_require__(20);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var operations_1 = __webpack_require__(4);
/**
* Gets the effective permissions for the user supplied
*
* @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
*/
function getUserEffectivePermissions(loginName) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var q, r;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    q = this.clone(sharepointqueryable_1.SharePointQueryableInstance, "getUserEffectivePermissions(@user)");
                    q.query.set("@user", "'" + encodeURIComponent(loginName) + "'");
                    return [4 /*yield*/, q.get()];
                case 1:
                    r = _a.sent();
                    // handle verbose mode
                    return [2 /*return*/, common_1.hOP(r, "GetUserEffectivePermissions") ? r.GetUserEffectivePermissions : r];
            }
        });
    });
}
exports.getUserEffectivePermissions = getUserEffectivePermissions;
/**
 * Gets the effective permissions for the current user
 */
function getCurrentUserEffectivePermissions() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var w, user;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    w = sharepointqueryable_1.SharePointQueryableInstance("_api/web", "currentuser");
                    return [4 /*yield*/, w.configureFrom(this).select("LoginName")()];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, getUserEffectivePermissions.call(this, user.LoginName)];
            }
        });
    });
}
exports.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
/**
 * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
 *
 * @param copyRoleAssignments If true the permissions are copied from the current parent scope
 * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
 */
function breakRoleInheritance(copyRoleAssignments, clearSubscopes) {
    if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
    if (clearSubscopes === void 0) { clearSubscopes = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operations_1.spPost(this.clone(sharepointqueryable_1.SharePointQueryable, "breakroleinheritance(copyroleassignments=" + copyRoleAssignments + ", clearsubscopes=" + clearSubscopes + ")"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.breakRoleInheritance = breakRoleInheritance;
/**
 * Removes the local role assignments so that it re-inherit role assignments from the parent object.
 *
 */
function resetRoleInheritance() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operations_1.spPost(this.clone(sharepointqueryable_1.SharePointQueryable, "resetroleinheritance"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.resetRoleInheritance = resetRoleInheritance;
/**
 * Determines if a given user has the appropriate permissions
 *
 * @param loginName The user to check
 * @param permission The permission being checked
 */
function userHasPermissions(loginName, permission) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var perms;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserEffectivePermissions.call(this, loginName)];
                case 1:
                    perms = _a.sent();
                    return [2 /*return*/, this.hasPermissions(perms, permission)];
            }
        });
    });
}
exports.userHasPermissions = userHasPermissions;
/**
 * Determines if the current user has the requested permissions
 *
 * @param permission The permission we wish to check
 */
function currentUserHasPermissions(permission) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var perms;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getCurrentUserEffectivePermissions.call(this)];
                case 1:
                    perms = _a.sent();
                    return [2 /*return*/, this.hasPermissions(perms, permission)];
            }
        });
    });
}
exports.currentUserHasPermissions = currentUserHasPermissions;
/**
 * Taken from sp.js, checks the supplied permissions against the mask
 *
 * @param value The security principal's permissions on the given object
 * @param perm The permission checked against the value
 */
/* tslint:disable:no-bitwise */
function hasPermissions(value, perm) {
    if (!perm) {
        return true;
    }
    if (perm === types_1.PermissionKind.FullMask) {
        return (value.High & 32767) === 32767 && value.Low === 65535;
    }
    perm = perm - 1;
    var num = 1;
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
exports.hasPermissions = hasPermissions;
/* tslint:enable */
//# sourceMappingURL=funcs.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var common_1 = __webpack_require__(1);
var sharepointqueryable_1 = __webpack_require__(3);
var extractweburl_1 = __webpack_require__(10);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(21);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var types_3 = __webpack_require__(20);
/**
 * Shares an object based on the supplied options
 *
 * @param options The set of options to send to the ShareObject method
 * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
 */
function shareObject(o, options, bypass) {
    if (bypass === void 0) { bypass = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var roleValue, userStr, postBody;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (bypass) {
                        // if the bypass flag is set send the supplied parameters directly to the service
                        return [2 /*return*/, sendShareObjectRequest(o, options)];
                    }
                    // extend our options with some defaults
                    options = common_1.assign(options, {
                        group: null,
                        includeAnonymousLinkInEmail: false,
                        propagateAcl: false,
                        useSimplifiedRoles: true,
                    }, true);
                    return [4 /*yield*/, getRoleValue(options.role, options.group)];
                case 1:
                    roleValue = _a.sent();
                    // handle the multiple input types
                    if (!Array.isArray(options.loginNames)) {
                        options.loginNames = [options.loginNames];
                    }
                    userStr = common_1.jsS(options.loginNames.map(function (Key) { return ({ Key: Key }); }));
                    postBody = {
                        peoplePickerInput: userStr,
                        roleValue: roleValue,
                        url: options.url,
                    };
                    if (options.emailData !== undefined && options.emailData !== null) {
                        postBody = common_1.assign(postBody, {
                            emailBody: options.emailData.body,
                            emailSubject: options.emailData.subject !== undefined ? options.emailData.subject : "Shared with you.",
                            sendEmail: true,
                        });
                    }
                    return [2 /*return*/, sendShareObjectRequest(o, postBody)];
            }
        });
    });
}
exports.shareObject = shareObject;
/**
 * Gets a sharing link for the supplied
 *
 * @param kind The kind of link to share
 * @param expiration The optional expiration for this link
 */
function getShareLink(kind, expiration) {
    if (expiration === void 0) { expiration = null; }
    // date needs to be an ISO string or null
    var expString = expiration !== null ? expiration.toISOString() : null;
    // clone using the factory and send the request
    var o = telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "shareLink"), "sh.getShareLink");
    return operations_1.spPost(o, odata_1.body({
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
exports.getShareLink = getShareLink;
/**
 * Checks Permissions on the list of Users and returns back role the users have on the Item.
 *
 * @param recipients The array of Entities for which Permissions need to be checked.
 */
function checkPermissions(recipients) {
    var o = telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "checkPermissions"), "sh.checkPermissions");
    return operations_1.spPost(o, odata_1.body({ recipients: recipients }));
}
exports.checkPermissions = checkPermissions;
/**
 * Get Sharing Information.
 *
 * @param request The SharingInformationRequest Object.
 * @param expands Expand more fields.
 *
 */
function getSharingInformation(request, expands) {
    if (request === void 0) { request = null; }
    if (expands === void 0) { expands = []; }
    var o = telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "getSharingInformation"), "sh.getSharingInformation");
    return operations_1.spPost(o.expand.apply(o, tslib_1.__spread(expands)), odata_1.body({ request: request }));
}
exports.getSharingInformation = getSharingInformation;
/**
 * Gets the sharing settings of an item.
 *
 * @param useSimplifiedRoles Determines whether to use simplified roles.
 */
function getObjectSharingSettings(useSimplifiedRoles) {
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    var o = telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "getObjectSharingSettings"), "sh.getObjectSharingSettings");
    return operations_1.spPost(o, odata_1.body({ useSimplifiedRoles: useSimplifiedRoles }));
}
exports.getObjectSharingSettings = getObjectSharingSettings;
/**
 * Unshares this object
 */
function unshareObject() {
    return operations_1.spPost(telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "unshareObject"), "sh.unshareObject"));
}
exports.unshareObject = unshareObject;
/**
 * Deletes a link by type
 *
 * @param kind Deletes a sharing link by the kind of link
 */
function deleteLinkByKind(linkKind) {
    return operations_1.spPost(telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "deleteLinkByKind"), "sh.deleteLinkByKind"), odata_1.body({ linkKind: linkKind }));
}
exports.deleteLinkByKind = deleteLinkByKind;
/**
 * Removes the specified link to the item.
 *
 * @param kind The kind of link to be deleted.
 * @param shareId
 */
function unshareLink(linkKind, shareId) {
    if (shareId === void 0) { shareId = "00000000-0000-0000-0000-000000000000"; }
    return operations_1.spPost(telemetry_1.tag.configure(this.clone(sharepointqueryable_1.SharePointQueryableInstance, "unshareLink"), "sh.unshareLink"), odata_1.body({ linkKind: linkKind, shareId: shareId }));
}
exports.unshareLink = unshareLink;
/**
 * Shares this instance with the supplied users
 *
 * @param loginNames Resolved login names to share
 * @param role The role
 * @param requireSignin True to require the user is authenticated, otherwise false
 * @param propagateAcl True to apply this share to all children
 * @param emailData If supplied an email will be sent with the indicated properties
 */
function shareWith(o, loginNames, role, requireSignin, propagateAcl, emailData) {
    if (requireSignin === void 0) { requireSignin = false; }
    if (propagateAcl === void 0) { propagateAcl = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var userStr, roleFilter, w, def, postBody;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // handle the multiple input types
                    if (!Array.isArray(loginNames)) {
                        loginNames = [loginNames];
                    }
                    userStr = common_1.jsS(loginNames.map(function (login) { return { Key: login }; }));
                    roleFilter = role === types_2.SharingRole.Edit ? types_2.RoleType.Contributor : types_2.RoleType.Reader;
                    w = sharepointqueryable_1.SharePointQueryableCollection("_api/web", "roledefinitions");
                    return [4 /*yield*/, w.select("Id").filter("RoleTypeKind eq " + roleFilter).get()];
                case 1:
                    def = _a.sent();
                    if (!Array.isArray(def) || def.length < 1) {
                        throw Error("Could not locate a role defintion with RoleTypeKind " + roleFilter);
                    }
                    postBody = {
                        includeAnonymousLinkInEmail: requireSignin,
                        peoplePickerInput: userStr,
                        propagateAcl: propagateAcl,
                        roleValue: "role:" + def[0].Id,
                        useSimplifiedRoles: true,
                    };
                    if (emailData !== undefined) {
                        postBody = common_1.assign(postBody, {
                            emailBody: emailData.body,
                            emailSubject: emailData.subject !== undefined ? emailData.subject : "",
                            sendEmail: true,
                        });
                    }
                    return [2 /*return*/, operations_1.spPost(telemetry_1.tag.configure(o.clone(sharepointqueryable_1.SharePointQueryableInstance, "shareObject"), "sh.shareWith"), odata_1.body(postBody))];
            }
        });
    });
}
exports.shareWith = shareWith;
function sendShareObjectRequest(o, options) {
    var w = telemetry_1.tag.configure(types_1.Web(extractweburl_1.extractWebUrl(o.toUrl()), "/_api/SP.Web.ShareObject"), "sh.sendShareObjectRequest");
    return operations_1.spPost(w.expand("UsersWithAccessRequests", "GroupsSharedWith"), odata_1.body(options));
}
/**
 * Calculates the roleValue string used in the sharing query
 *
 * @param role The Sharing Role
 * @param group The Group type
 */
function getRoleValue(role, group) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, g1, g2, roleFilter, def;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(group !== undefined && group !== null)) return [3 /*break*/, 7];
                    _a = group;
                    switch (_a) {
                        case types_2.RoleType.Contributor: return [3 /*break*/, 1];
                        case types_2.RoleType.Reader: return [3 /*break*/, 3];
                        case types_2.RoleType.Guest: return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, types_1.Web("_api/web", "associatedmembergroup").select("Id")()];
                case 2:
                    g1 = _b.sent();
                    return [2 /*return*/, "group: " + g1.Id];
                case 3: return [4 /*yield*/, types_1.Web("_api/web", "associatedvisitorgroup").select("Id")()];
                case 4:
                    g2 = _b.sent();
                    return [2 /*return*/, "group: " + g2.Id];
                case 5: throw Error("Could not determine role value for supplied value. Contributor, Reader, and Guest are supported");
                case 6: return [3 /*break*/, 9];
                case 7:
                    roleFilter = role === types_2.SharingRole.Edit ? types_2.RoleType.Contributor : types_2.RoleType.Reader;
                    return [4 /*yield*/, types_3.RoleDefinitions("_api/web").select("Id").top(1).filter("RoleTypeKind eq " + roleFilter)()];
                case 8:
                    def = _b.sent();
                    if (def.length < 1) {
                        throw Error("Could not locate associated role definition for supplied role. Edit and View are supported");
                    }
                    return [2 /*return*/, "role: " + def[0].Id];
                case 9: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=funcs.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var extractweburl_1 = __webpack_require__(10);
var odata_1 = __webpack_require__(2);
var operations_1 = __webpack_require__(4);
var common_1 = __webpack_require__(1);
var telemetry_1 = __webpack_require__(5);
var _SiteDesigns = /** @class */ (function (_super) {
    tslib_1.__extends(_SiteDesigns, _super);
    function _SiteDesigns(baseUrl, methodName) {
        if (methodName === void 0) { methodName = ""; }
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractweburl_1.extractWebUrl(url), "_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility." + methodName) || this;
        return _this;
    }
    _SiteDesigns.prototype.execute = function (props) {
        return operations_1.spPost(this, odata_1.body(props, odata_1.headers({ "Content-Type": "application/json;charset=utf-8" })));
    };
    /**
     * Creates a new site design available to users when they create a new site from the SharePoint home page.
     *
     * @param creationInfo A sitedesign creation information object
     */
    _SiteDesigns.prototype.createSiteDesign = function (creationInfo) {
        return this.clone(SiteDesignsCloneFactory, "CreateSiteDesign").execute({ info: creationInfo });
    };
    /**
     * Applies a site design to an existing site collection.
     *
     * @param siteDesignId The ID of the site design to apply.
     * @param webUrl The URL of the site collection where you want to apply the site design.
     */
    _SiteDesigns.prototype.applySiteDesign = function (siteDesignId, webUrl) {
        return this.clone(SiteDesignsCloneFactory, "ApplySiteDesign").execute({ siteDesignId: siteDesignId, "webUrl": webUrl });
    };
    /**
     * Gets the list of available site designs
     */
    _SiteDesigns.prototype.getSiteDesigns = function () {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesigns").execute({});
    };
    /**
     * Gets information about a specific site design.
     * @param id The ID of the site design to get information about.
     */
    _SiteDesigns.prototype.getSiteDesignMetadata = function (id) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignMetadata").execute({ id: id });
    };
    /**
     * Updates a site design with new values. In the REST call, all parameters are optional except the site script Id.
     * If you had previously set the IsDefault parameter to TRUE and wish it to remain true, you must pass in this parameter again (otherwise it will be reset to FALSE).
     * @param updateInfo A sitedesign update information object
     */
    _SiteDesigns.prototype.updateSiteDesign = function (updateInfo) {
        return this.clone(SiteDesignsCloneFactory, "UpdateSiteDesign").execute({ updateInfo: updateInfo });
    };
    /**
     * Deletes a site design.
     * @param id The ID of the site design to delete.
     */
    _SiteDesigns.prototype.deleteSiteDesign = function (id) {
        return this.clone(SiteDesignsCloneFactory, "DeleteSiteDesign").execute({ id: id });
    };
    /**
     * Gets a list of principals that have access to a site design.
     * @param id The ID of the site design to get rights information from.
     */
    _SiteDesigns.prototype.getSiteDesignRights = function (id) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRights").execute({ id: id });
    };
    /**
     * Grants access to a site design for one or more principals.
     * @param id The ID of the site design to grant rights on.
     * @param principalNames An array of one or more principals to grant view rights.
     *                       Principals can be users or mail-enabled security groups in the form of "alias" or "alias@<domain name>.com"
     * @param grantedRights Always set to 1. This represents the View right.
     */
    _SiteDesigns.prototype.grantSiteDesignRights = function (id, principalNames, grantedRights) {
        if (grantedRights === void 0) { grantedRights = 1; }
        return this.clone(SiteDesignsCloneFactory, "GrantSiteDesignRights")
            .execute({
            "grantedRights": grantedRights.toString(),
            "id": id,
            "principalNames": principalNames,
        });
    };
    /**
     * Revokes access from a site design for one or more principals.
     * @param id The ID of the site design to revoke rights from.
     * @param principalNames An array of one or more principals to revoke view rights from.
     *                       If all principals have rights revoked on the site design, the site design becomes viewable to everyone.
     */
    _SiteDesigns.prototype.revokeSiteDesignRights = function (id, principalNames) {
        return this.clone(SiteDesignsCloneFactory, "RevokeSiteDesignRights")
            .execute({
            "id": id,
            "principalNames": principalNames,
        });
    };
    /**
     * Adds a site design task on the specified web url to be invoked asynchronously.
     * @param webUrl The absolute url of the web on where to create the task
     * @param siteDesignId The ID of the site design to create a task for
     */
    _SiteDesigns.prototype.addSiteDesignTask = function (webUrl, siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "AddSiteDesignTask")
            .execute({ "webUrl": webUrl, "siteDesignId": siteDesignId });
    };
    /**
     * Adds a site design task on the current web to be invoked asynchronously.
     * @param siteDesignId The ID of the site design to create a task for
     */
    _SiteDesigns.prototype.addSiteDesignTaskToCurrentWeb = function (siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "AddSiteDesignTaskToCurrentWeb")
            .execute({ "siteDesignId": siteDesignId });
    };
    /**
     * Retrieves the site design task, if the task has finished running null will be returned
     * @param id The ID of the site design task
     */
    _SiteDesigns.prototype.getSiteDesignTask = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var task;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SiteDesignsCloneFactory, "GetSiteDesignTask")
                            .execute({ "taskId": id })];
                    case 1:
                        task = _a.sent();
                        return [2 /*return*/, common_1.hOP(task, "ID") ? task : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of site design that have run on a specific web
     * @param webUrl The url of the web where the site design was applied
     * @param siteDesignId (Optional) the site design ID, if not provided will return all site design runs
     */
    _SiteDesigns.prototype.getSiteDesignRun = function (webUrl, siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRun")
            .execute({ "webUrl": webUrl, siteDesignId: siteDesignId });
    };
    /**
     * Retrieves the status of a site design that has been run or is still running
     * @param webUrl The url of the web where the site design was applied
     * @param runId the run ID
     */
    _SiteDesigns.prototype.getSiteDesignRunStatus = function (webUrl, runId) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRunStatus")
            .execute({ "webUrl": webUrl, runId: runId });
    };
    tslib_1.__decorate([
        telemetry_1.tag("sd.createSiteDesign")
    ], _SiteDesigns.prototype, "createSiteDesign", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.applySiteDesign")
    ], _SiteDesigns.prototype, "applySiteDesign", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.getSiteDesigns")
    ], _SiteDesigns.prototype, "getSiteDesigns", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.getSiteDesignMetadata")
    ], _SiteDesigns.prototype, "getSiteDesignMetadata", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.updateSiteDesign")
    ], _SiteDesigns.prototype, "updateSiteDesign", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.deleteSiteDesign")
    ], _SiteDesigns.prototype, "deleteSiteDesign", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.getSiteDesignRights")
    ], _SiteDesigns.prototype, "getSiteDesignRights", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.grantSiteDesignRights")
    ], _SiteDesigns.prototype, "grantSiteDesignRights", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.revokeSiteDesignRights")
    ], _SiteDesigns.prototype, "revokeSiteDesignRights", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.addSiteDesignTask")
    ], _SiteDesigns.prototype, "addSiteDesignTask", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.addSiteDesignTaskToCurrentWeb")
    ], _SiteDesigns.prototype, "addSiteDesignTaskToCurrentWeb", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.getSiteDesignTask")
    ], _SiteDesigns.prototype, "getSiteDesignTask", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.getSiteDesignRun")
    ], _SiteDesigns.prototype, "getSiteDesignRun", null);
    tslib_1.__decorate([
        telemetry_1.tag("sd.getSiteDesignRunStatus")
    ], _SiteDesigns.prototype, "getSiteDesignRunStatus", null);
    return _SiteDesigns;
}(sharepointqueryable_1._SharePointQueryable));
exports._SiteDesigns = _SiteDesigns;
exports.SiteDesigns = function (baseUrl, methodName) { return new _SiteDesigns(baseUrl, methodName); };
var SiteDesignsCloneFactory = function (baseUrl, methodName) {
    if (methodName === void 0) { methodName = ""; }
    return exports.SiteDesigns(baseUrl, methodName);
};
//# sourceMappingURL=types.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rest_1 = __webpack_require__(13);
__webpack_require__(44);
__webpack_require__(46);
__webpack_require__(48);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(61);
__webpack_require__(63);
__webpack_require__(24);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(69);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(74);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(78);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(31);
__webpack_require__(81);
__webpack_require__(83);
__webpack_require__(86);
__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(91);
__webpack_require__(32);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(58), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(67), exports);
tslib_1.__exportStar(__webpack_require__(69), exports);
tslib_1.__exportStar(__webpack_require__(71), exports);
tslib_1.__exportStar(__webpack_require__(72), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(76), exports);
tslib_1.__exportStar(__webpack_require__(77), exports);
tslib_1.__exportStar(__webpack_require__(78), exports);
tslib_1.__exportStar(__webpack_require__(79), exports);
tslib_1.__exportStar(__webpack_require__(80), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(81), exports);
tslib_1.__exportStar(__webpack_require__(83), exports);
tslib_1.__exportStar(__webpack_require__(86), exports);
tslib_1.__exportStar(__webpack_require__(88), exports);
tslib_1.__exportStar(__webpack_require__(89), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(134), exports);
exports.sp = new rest_1.SPRest();
//# sourceMappingURL=all.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mergeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getADALResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BearerTokenFetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SPFxAdalClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


function mergeHeaders(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "m"])(source)) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "m"])(source)) {
        var headers = Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(target.headers || {}, source.headers);
        target = Object(_util__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(target, source);
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
        return global.fetch(url, options);
    };
    return FetchClient;
}());

/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BearerTokenFetchClient, _super);
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
}(FetchClient));

/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
var SPFxAdalClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPFxAdalClient, _super);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var token;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var provider;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)))

/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(7);
__webpack_require__(94);
var sharepointqueryable_1 = __webpack_require__(3);
var types_2 = __webpack_require__(45);
exports.App = types_2.App;
exports.AppCatalog = types_2.AppCatalog;
rest_1.SPRest.prototype.getTenantAppCatalogWeb = function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sharepointqueryable_1.SharePointQueryable("/", "_api/SP_TenantSettings_Current")()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, types_1.Web(data.CorporateCatalogUrl)];
            }
        });
    });
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var operations_1 = __webpack_require__(4);
var odata_1 = __webpack_require__(14);
var extractweburl_1 = __webpack_require__(10);
var types_1 = __webpack_require__(17);
var telemetry_1 = __webpack_require__(5);
var webs_1 = __webpack_require__(32);
__webpack_require__(24);
var _AppCatalog = /** @class */ (function (_super) {
    tslib_1.__extends(_AppCatalog, _super);
    function _AppCatalog(baseUrl, path) {
        if (path === void 0) { path = "_api/web/tenantappcatalog/AvailableApps"; }
        return _super.call(this, extractweburl_1.extractWebUrl(typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl()), path) || this;
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    _AppCatalog.prototype.getAppById = function (id) {
        return telemetry_1.tag.configure(exports.App(this, "getById('" + id + "')"), "ac.getAppById");
    };
    /**
     * Synchronize a solution to the Microsoft Teams App Catalog
     * @param id - Specify the guid of the app
     * @param useSharePointItemId (optional) - By default this REST call requires the SP Item id of the app, not the app id.
     *                            PnPjs will try to fetch the item id by default, you can still use this parameter to pass your own item id in the first parameter
     */
    _AppCatalog.prototype.syncSolutionToTeams = function (id, useSharePointItemId) {
        if (useSharePointItemId === void 0) { useSharePointItemId = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var appId, webUrl, web, listId, listItems, poster;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appId = null;
                        webUrl = extractweburl_1.extractWebUrl(this.toUrl());
                        if (!useSharePointItemId) return [3 /*break*/, 1];
                        appId = id;
                        return [3 /*break*/, 4];
                    case 1:
                        web = webs_1.Web(webUrl);
                        return [4 /*yield*/, web.lists.select("Id").filter("EntityTypeName eq 'AppCatalog'")()];
                    case 2:
                        listId = (_a.sent())[0].Id;
                        return [4 /*yield*/, web.lists.getById(listId).items.filter("AppProductID eq '" + id + "'").top(1)()];
                    case 3:
                        listItems = _a.sent();
                        if (listItems && listItems.length > 0) {
                            appId = listItems[0].Id;
                        }
                        else {
                            throw Error("Did not find the app with id " + id + " in the appcatalog.");
                        }
                        _a.label = 4;
                    case 4:
                        poster = telemetry_1.tag.configure(exports.AppCatalog(webUrl, "_api/web/tenantappcatalog/SyncSolutionToTeams(id=" + appId + ")"), "ac.syncSolutionToTeams");
                        return [4 /*yield*/, operations_1.spPost(poster, {})];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<IAppAddResult>
     */
    _AppCatalog.prototype.add = function (filename, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var adder, r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adder = telemetry_1.tag.configure(exports.AppCatalog(extractweburl_1.extractWebUrl(this.toUrl()), "_api/web/tenantappcatalog/add(overwrite=" + shouldOverWrite + ",url='" + filename + "')"), "ac.add");
                        return [4 /*yield*/, operations_1.spPost(adder, {
                                body: content, headers: {
                                    "binaryStringRequestBody": "true",
                                },
                            })];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, {
                                data: r,
                                file: types_1.File(odata_1.odataUrlFrom(r)),
                            }];
                }
            });
        });
    };
    return _AppCatalog;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._AppCatalog = _AppCatalog;
exports.AppCatalog = sharepointqueryable_1.spInvokableFactory(_AppCatalog);
var _App = /** @class */ (function (_super) {
    tslib_1.__extends(_App, _super);
    function _App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method deploys an app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     *
     * @param skipFeatureDeployment Deploy the app to the entire tenant
     */
    _App.prototype.deploy = function (skipFeatureDeployment) {
        if (skipFeatureDeployment === void 0) { skipFeatureDeployment = false; }
        return this.do("Deploy(" + skipFeatureDeployment + ")");
    };
    /**
     * This method retracts a deployed app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    _App.prototype.retract = function () {
        return this.do("Retract");
    };
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    _App.prototype.install = function () {
        return this.do("Install");
    };
    /**
     * This method allows an app which is already installed to be uninstalled on a web
     * Note: when you use the REST API to uninstall a solution package from the site, it is not relocated to the recycle bin
     */
    _App.prototype.uninstall = function () {
        return this.do("Uninstall");
    };
    /**
     * This method allows an app which is already installed to be upgraded on a web
     */
    _App.prototype.upgrade = function () {
        return this.do("Upgrade");
    };
    /**
     * This method removes an app from the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    _App.prototype.remove = function () {
        return this.do("Remove");
    };
    _App.prototype.do = function (path) {
        return operations_1.spPost(this.clone(exports.App, path));
    };
    tslib_1.__decorate([
        telemetry_1.tag("app.deploy")
    ], _App.prototype, "deploy", null);
    tslib_1.__decorate([
        telemetry_1.tag("app.retract")
    ], _App.prototype, "retract", null);
    tslib_1.__decorate([
        telemetry_1.tag("app.install")
    ], _App.prototype, "install", null);
    tslib_1.__decorate([
        telemetry_1.tag("app.uninstall")
    ], _App.prototype, "uninstall", null);
    tslib_1.__decorate([
        telemetry_1.tag("app.upgrade")
    ], _App.prototype, "upgrade", null);
    tslib_1.__decorate([
        telemetry_1.tag("app.remove")
    ], _App.prototype, "remove", null);
    return _App;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._App = _App;
exports.App = sharepointqueryable_1.spInvokableFactory(_App);
//# sourceMappingURL=types.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(96);
var types_1 = __webpack_require__(47);
exports.Attachment = types_1.Attachment;
exports.Attachments = types_1.Attachments;
//# sourceMappingURL=index.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var sharepointqueryable_1 = __webpack_require__(3);
var odata_1 = __webpack_require__(2);
var telemetry_1 = __webpack_require__(5);
var _Attachments = /** @class */ (function (_super) {
    tslib_1.__extends(_Attachments, _super);
    function _Attachments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets a Attachment File by filename
    *
    * @param name The name of the file, including extension.
    */
    _Attachments.prototype.getByName = function (name) {
        var f = telemetry_1.tag.configure(exports.Attachment(this), "ats.getByName");
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    _Attachments.prototype.add = function (name, content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Attachments, "add(FileName='" + name + "')", false), { body: content })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: this.getByName(name),
                            }];
                }
            });
        });
    };
    /**
     * Adds multiple new attachment to the collection. Not supported for batching.
     *
     * @param files The collection of files to add
     */
    _Attachments.prototype.addMultiple = function (files) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.add(files[i].name, files[i].content)];
                    case 2:
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
     * Delete multiple attachments from the collection. Not supported for batching.
     *
     * @param files The collection of files to delete
     */
    _Attachments.prototype.deleteMultiple = function () {
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getByName(files[i]).delete()];
                    case 2:
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
     * Delete multiple attachments from the collection and send to recycle bin. Not supported for batching.
     *
     * @param files The collection of files to be deleted and sent to recycle bin
     */
    _Attachments.prototype.recycleMultiple = function () {
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getByName(files[i]).recycle()];
                    case 2:
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
    tslib_1.__decorate([
        telemetry_1.tag("ats.add")
    ], _Attachments.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("ats.addMultiple")
    ], _Attachments.prototype, "addMultiple", null);
    tslib_1.__decorate([
        telemetry_1.tag("ats.deleteMultiple")
    ], _Attachments.prototype, "deleteMultiple", null);
    tslib_1.__decorate([
        telemetry_1.tag("ats.recycleMultiple")
    ], _Attachments.prototype, "recycleMultiple", null);
    _Attachments = tslib_1.__decorate([
        decorators_1.defaultPath("AttachmentFiles")
    ], _Attachments);
    return _Attachments;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Attachments = _Attachments;
exports.Attachments = sharepointqueryable_1.spInvokableFactory(_Attachments);
var _Attachment = /** @class */ (function (_super) {
    tslib_1.__extends(_Attachment, _super);
    function _Attachment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteableWithETag("at");
        return _this;
    }
    /**
     * Gets the contents of the file as text
     *
     */
    _Attachment.prototype.getText = function () {
        return this.getParsed(new odata_1.TextParser());
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    _Attachment.prototype.getBlob = function () {
        return this.getParsed(new odata_1.BlobParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    _Attachment.prototype.getBuffer = function () {
        return this.getParsed(new odata_1.BufferParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    _Attachment.prototype.getJSON = function () {
        return this.getParsed(new odata_1.JSONParser());
    };
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    _Attachment.prototype.setContent = function (content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(exports.Attachment, "$value", false), odata_1.headers({ "X-HTTP-Method": "PUT" }, {
                            body: content,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, exports.Attachment(this)];
                }
            });
        });
    };
    /**
     * Delete this attachment file and send it to recycle bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    _Attachment.prototype.recycle = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return operations_1.spPost(this.clone(exports.Attachment, "recycleObject"), odata_1.headers({
            "IF-Match": eTag,
            "X-HTTP-Method": "DELETE",
        }));
    };
    _Attachment.prototype.getParsed = function (parser) {
        return this.clone(exports.Attachment, "$value", false).usingParser(parser)();
    };
    tslib_1.__decorate([
        telemetry_1.tag("at.getText")
    ], _Attachment.prototype, "getText", null);
    tslib_1.__decorate([
        telemetry_1.tag("at.getBlob")
    ], _Attachment.prototype, "getBlob", null);
    tslib_1.__decorate([
        telemetry_1.tag("at.getBuffer")
    ], _Attachment.prototype, "getBuffer", null);
    tslib_1.__decorate([
        telemetry_1.tag("at.getJSON")
    ], _Attachment.prototype, "getJSON", null);
    tslib_1.__decorate([
        telemetry_1.tag("at.setContent")
    ], _Attachment.prototype, "setContent", null);
    tslib_1.__decorate([
        telemetry_1.tag("at.recycle")
    ], _Attachment.prototype, "recycle", null);
    return _Attachment;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Attachment = _Attachment;
exports.Attachment = sharepointqueryable_1.spInvokableFactory(_Attachment);
//# sourceMappingURL=types.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(97);
var types_1 = __webpack_require__(49);
exports.ClientsidePageFromFile = types_1.ClientsidePageFromFile;
exports.CreateClientsidePage = types_1.CreateClientsidePage;
exports.CanvasColumn = types_1.CanvasColumn;
exports.CanvasSection = types_1.CanvasSection;
exports.ClientsideText = types_1.ClientsideText;
exports.ClientsideWebpart = types_1.ClientsideWebpart;
exports.ColumnControl = types_1.ColumnControl;
exports.PromotedState = types_1.PromotedState;
//# sourceMappingURL=index.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var common_1 = __webpack_require__(1);
var types_1 = __webpack_require__(15);
var sharepointqueryable_1 = __webpack_require__(3);
var metadata_1 = __webpack_require__(9);
var types_2 = __webpack_require__(11);
var odata_2 = __webpack_require__(14);
var types_3 = __webpack_require__(7);
var extractweburl_1 = __webpack_require__(10);
var types_4 = __webpack_require__(18);
var operations_1 = __webpack_require__(4);
var funcs_1 = __webpack_require__(98);
__webpack_require__(50);
__webpack_require__(51);
var telemetry_1 = __webpack_require__(5);
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
})(PromotedState = exports.PromotedState || (exports.PromotedState = {}));
function initFrom(o, url) {
    return ClientsidePage(extractweburl_1.extractWebUrl(o.toUrl()), url).configureFrom(o);
}
/**
 * Represents the data and methods associated with client side "modern" pages
 */
var _ClientsidePage = /** @class */ (function (_super) {
    tslib_1.__extends(_ClientsidePage, _super);
    /**
     * PLEASE DON'T USE THIS CONSTRUCTOR DIRECTLY, thank you 🐇
     */
    function _ClientsidePage(baseUrl, path, json, noInit, sections, commentsDisabled) {
        if (noInit === void 0) { noInit = false; }
        if (sections === void 0) { sections = []; }
        if (commentsDisabled === void 0) { commentsDisabled = false; }
        var _this = _super.call(this, baseUrl, path) || this;
        _this.json = json;
        _this.sections = sections;
        _this.commentsDisabled = commentsDisabled;
        _this._bannerImageDirty = false;
        // ensure we have a good url to build on for the pages api
        if (typeof baseUrl === "string") {
            _this.data.parentUrl = "";
            _this.data.url = common_1.combine(extractweburl_1.extractWebUrl(baseUrl), path);
        }
        else {
            _this.assign(initFrom(baseUrl, null), path);
        }
        // set a default page settings slice
        _this._pageSettings = { controlType: 0, pageSettingsSlice: { isDefaultDescription: true, isDefaultThumbnail: true } };
        // set a default layout part
        _this._layoutPart = _ClientsidePage.getDefaultLayoutPart();
        if (typeof json !== "undefined" && !noInit) {
            _this.fromJSON(json);
        }
        return _this;
    }
    _ClientsidePage.getDefaultLayoutPart = function () {
        return {
            dataVersion: "1.4",
            description: "Title Region Description",
            id: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            instanceId: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            properties: {
                authors: [],
                layoutType: "FullWidthImage",
                showPublishDate: false,
                showTopicHeader: false,
                textAlignment: "Left",
                title: "",
                topicHeader: "",
            },
            serverProcessedContent: { htmlStrings: {}, searchablePlainTexts: {}, imageSources: {}, links: {} },
            title: "Title area",
        };
    };
    Object.defineProperty(_ClientsidePage.prototype, "pageLayout", {
        get: function () {
            return this.json.PageLayoutType;
        },
        set: function (value) {
            this.json.PageLayoutType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "bannerImageUrl", {
        get: function () {
            return this.json.BannerImageUrl;
        },
        set: function (value) {
            this.json.BannerImageUrl = value;
            this._bannerImageDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "topicHeader", {
        get: function () {
            return common_1.objectDefinedNotNull(this.json.TopicHeader) ? this.json.TopicHeader : "";
        },
        set: function (value) {
            this.json.TopicHeader = value;
            this._layoutPart.properties.topicHeader = value;
            if (common_1.stringIsNullOrEmpty(value)) {
                this.showTopicHeader = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "title", {
        get: function () {
            return this._layoutPart.properties.title;
        },
        set: function (value) {
            this.json.Title = value;
            this._layoutPart.properties.title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "layoutType", {
        get: function () {
            return this._layoutPart.properties.layoutType;
        },
        set: function (value) {
            this._layoutPart.properties.layoutType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "headerTextAlignment", {
        get: function () {
            return this._layoutPart.properties.textAlignment;
        },
        set: function (value) {
            this._layoutPart.properties.textAlignment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "showTopicHeader", {
        get: function () {
            return this._layoutPart.properties.showTopicHeader;
        },
        set: function (value) {
            this._layoutPart.properties.showTopicHeader = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "showPublishDate", {
        get: function () {
            return this._layoutPart.properties.showPublishDate;
        },
        set: function (value) {
            this._layoutPart.properties.showPublishDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "hasVerticalSection", {
        get: function () {
            return this.sections.findIndex(function (s) { return s.layoutIndex === 2; }) > -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "verticalSection", {
        get: function () {
            if (this.hasVerticalSection) {
                return this.addVerticalSection();
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a section to this page
     */
    _ClientsidePage.prototype.addSection = function () {
        var section = new CanvasSection(this, funcs_1.getNextOrder(this.sections), 1);
        this.sections.push(section);
        return section;
    };
    /**
     * Add a section to this page
     */
    _ClientsidePage.prototype.addVerticalSection = function () {
        // we can only have one vertical section so we find it if it exists
        var sectionIndex = this.sections.findIndex(function (s) { return s.layoutIndex === 2; });
        if (sectionIndex > -1) {
            return this.sections[sectionIndex];
        }
        var section = new CanvasSection(this, funcs_1.getNextOrder(this.sections), 2);
        this.sections.push(section);
        return section;
    };
    /**
     * Loads this instance from the appropriate JSON data
     *
     * @param pageData JSON data to load (replaces any existing data)
     */
    _ClientsidePage.prototype.fromJSON = function (pageData) {
        this.json = pageData;
        var canvasControls = JSON.parse(pageData.CanvasContent1);
        var layouts = JSON.parse(pageData.LayoutWebpartsContent);
        if (layouts && layouts.length > 0) {
            this._layoutPart = layouts[0];
        }
        this.setControls(canvasControls);
        return this;
    };
    /**
     * Loads this page's content from the server
     */
    _ClientsidePage.prototype.load = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var item, pageData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItem("Id", "CommentsDisabled")];
                    case 1:
                        item = _a.sent();
                        return [4 /*yield*/, sharepointqueryable_1.SharePointQueryable(this, "_api/sitepages/pages(" + item.Id + ")")()];
                    case 2:
                        pageData = _a.sent();
                        this.commentsDisabled = item.CommentsDisabled;
                        return [2 /*return*/, this.fromJSON(pageData)];
                }
            });
        });
    };
    /**
     * Persists the content changes (sections, columns, and controls) [does not work with batching]
     *
     * @param publish If true the page is published, if false the changes are persisted to SharePoint but not published [Default: true]
     */
    _ClientsidePage.prototype.save = function (publish) {
        if (publish === void 0) { publish = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var origImgUrl, site, web, imgFile, siteId_1, webId_1, imgId_1, listId_1, webUrl_1, batch, f, saveBody, updater, r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
                        }
                        if (!this._bannerImageDirty) return [3 /*break*/, 2];
                        origImgUrl = this.json.BannerImageUrl;
                        if (common_1.isUrlAbsolute(origImgUrl)) {
                            // do our best to make this a server relative url by removing the x.sharepoint.com part
                            origImgUrl = origImgUrl.replace(/^https?:\/\/[a-z0-9\.]*?\.[a-z]{2,3}\//i, "/");
                        }
                        site = types_4.Site(extractweburl_1.extractWebUrl(this.toUrl()));
                        web = types_3.Web(extractweburl_1.extractWebUrl(this.toUrl()));
                        imgFile = web.getFileByServerRelativePath(origImgUrl);
                        siteId_1 = "";
                        webId_1 = "";
                        imgId_1 = "";
                        listId_1 = "";
                        webUrl_1 = "";
                        batch = web.createBatch();
                        site.select("Id", "Url").inBatch(batch)().then(function (r1) { return siteId_1 = r1.Id; });
                        web.select("Id", "Url").inBatch(batch)().then(function (r2) { webId_1 = r2.Id; webUrl_1 = r2.Url; });
                        imgFile.listItemAllFields.select("UniqueId", "ParentList/Id").expand("ParentList").inBatch(batch)()
                            .then(function (r3) { imgId_1 = r3.UniqueId; listId_1 = r3.ParentList.Id; });
                        // we know the .then calls above will run before execute resolves, ensuring the vars are set
                        return [4 /*yield*/, batch.execute()];
                    case 1:
                        // we know the .then calls above will run before execute resolves, ensuring the vars are set
                        _a.sent();
                        f = sharepointqueryable_1.SharePointQueryable(webUrl_1, "_layouts/15/getpreview.ashx");
                        f.query.set("guidSite", "" + siteId_1);
                        f.query.set("guidWeb", "" + webId_1);
                        f.query.set("guidFile", "" + imgId_1);
                        this.bannerImageUrl = f.toUrlAndQuery();
                        if (!common_1.objectDefinedNotNull(this._layoutPart.serverProcessedContent)) {
                            this._layoutPart.serverProcessedContent = {};
                        }
                        this._layoutPart.serverProcessedContent.imageSources = { imageSource: origImgUrl };
                        if (!common_1.objectDefinedNotNull(this._layoutPart.serverProcessedContent.customMetadata)) {
                            this._layoutPart.serverProcessedContent.customMetadata = {};
                        }
                        this._layoutPart.serverProcessedContent.customMetadata.imageSource = {
                            listId: listId_1,
                            siteId: siteId_1,
                            uniqueId: imgId_1,
                            webId: webId_1,
                        };
                        this._layoutPart.properties.webId = webId_1;
                        this._layoutPart.properties.siteId = siteId_1;
                        this._layoutPart.properties.listId = listId_1;
                        this._layoutPart.properties.uniqueId = imgId_1;
                        _a.label = 2;
                    case 2:
                        if (!!this.json.IsPageCheckedOutToCurrentUser) return [3 /*break*/, 4];
                        return [4 /*yield*/, operations_1.spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/checkoutpage"))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        saveBody = Object.assign(metadata_1.metadata("SP.Publishing.SitePage"), {
                            AuthorByline: this.json.AuthorByline || [],
                            BannerImageUrl: this.bannerImageUrl,
                            CanvasContent1: this.getCanvasContent1(),
                            LayoutWebpartsContent: this.getLayoutWebpartsContent(),
                            Title: this.title,
                            TopicHeader: this.topicHeader,
                        });
                        updater = initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/savepage");
                        return [4 /*yield*/, operations_1.spPost(updater, odata_1.headers({ "if-match": "*" }, odata_1.body(saveBody)))];
                    case 5:
                        _a.sent();
                        r = true;
                        if (!publish) return [3 /*break*/, 7];
                        return [4 /*yield*/, operations_1.spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/publish"))];
                    case 6:
                        r = _a.sent();
                        if (r) {
                            this.json.IsPageCheckedOutToCurrentUser = false;
                        }
                        _a.label = 7;
                    case 7:
                        this._bannerImageDirty = false;
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * Discards the checkout of this page
     */
    _ClientsidePage.prototype.discardPageCheckout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var d;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
                        }
                        return [4 /*yield*/, operations_1.spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/discardPage"), odata_1.body(metadata_1.metadata("SP.Publishing.SitePage")))];
                    case 1:
                        d = _a.sent();
                        this.fromJSON(d);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Promotes this page as a news item
     */
    _ClientsidePage.prototype.promoteToNews = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.promoteNewsImpl("promoteToNews")];
            });
        });
    };
    // API is currently broken on server side
    // public async demoteFromNews(): Promise<boolean> {
    //     return this.promoteNewsImpl("demoteFromNews");
    // }
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    _ClientsidePage.prototype.findControlById = function (id) {
        return this.findControl(function (c) { return c.id === id; });
    };
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    _ClientsidePage.prototype.findControl = function (predicate) {
        // check all sections
        for (var i = 0; i < this.sections.length; i++) {
            // check all columns
            for (var j = 0; j < this.sections[i].columns.length; j++) {
                // check all controls
                for (var k = 0; k < this.sections[i].columns[j].controls.length; k++) {
                    // check to see if the predicate likes this control
                    if (predicate(this.sections[i].columns[j].controls[k])) {
                        return this.sections[i].columns[j].controls[k];
                    }
                }
            }
        }
        // we found nothing so give nothing back
        return null;
    };
    /**
     * Creates a copy of this page
     *
     * @param web The web where we will create the copy
     * @param pageName The file name of the new page
     * @param title The title of the new page
     * @param publish If true the page will be published
     */
    _ClientsidePage.prototype.copy = function (web, pageName, title, publish) {
        if (publish === void 0) { publish = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var page;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.CreateClientsidePage(web, pageName, title, this.pageLayout)];
                    case 1:
                        page = _a.sent();
                        // we know the method is on the class - but it is protected so not part of the interface
                        page.setControls(this.getControls());
                        return [4 /*yield*/, page.save(publish)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, page];
                }
            });
        });
    };
    /**
     * Sets the modern page banner image
     *
     * @param url Url of the image to display
     * @param altText Alt text to describe the image
     * @param bannerProps Additional properties to control display of the banner
     */
    _ClientsidePage.prototype.setBannerImage = function (url, props) {
        this.bannerImageUrl = url;
        this._layoutPart.properties.imageSourceType = 2; // this seems to always be true, so default?
        if (common_1.objectDefinedNotNull(props)) {
            if (common_1.hOP(props, "translateX")) {
                this._layoutPart.properties.translateX = props.translateX;
            }
            if (common_1.hOP(props, "translateY")) {
                this._layoutPart.properties.translateY = props.translateY;
            }
            if (common_1.hOP(props, "imageSourceType")) {
                this._layoutPart.properties.imageSourceType = props.imageSourceType;
            }
            if (common_1.hOP(props, "altText")) {
                this._layoutPart.properties.altText = props.altText;
            }
        }
    };
    /**
     * Gets the list item associated with this clientside page
     *
     * @param selects Specific set of fields to include when getting the item
     */
    _ClientsidePage.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var initer, listData, item, itemData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        initer = initFrom(this, "/_api/lists/EnsureClientRenderedSitePagesLibrary").select("EnableModeration", "EnableMinorVersions", "Id");
                        return [4 /*yield*/, operations_1.spPost(initer)];
                    case 1:
                        listData = _a.sent();
                        item = (types_2.List(listData["odata.id"])).configureFrom(this).items.getById(this.json.Id);
                        return [4 /*yield*/, item.select.apply(item, selects)()];
                    case 2:
                        itemData = _a.sent();
                        return [2 /*return*/, common_1.assign((types_1.Item(odata_2.odataUrlFrom(itemData))).configureFrom(this), itemData)];
                }
            });
        });
    };
    /**
     * Extends this queryable from the provided parent
     *
     * @param parent Parent queryable from which we will derive a base url
     * @param path Additional path
     */
    _ClientsidePage.prototype.assign = function (parent, path) {
        this.data.parentUrl = parent.data.url;
        this.data.url = common_1.combine(this.data.parentUrl, path || "");
        this.configureFrom(parent);
    };
    _ClientsidePage.prototype.getCanvasContent1 = function () {
        return JSON.stringify(this.getControls());
    };
    _ClientsidePage.prototype.getLayoutWebpartsContent = function () {
        if (this._layoutPart) {
            return JSON.stringify([this._layoutPart]);
        }
        else {
            return JSON.stringify(null);
        }
    };
    _ClientsidePage.prototype.setControls = function (controls) {
        if (controls && controls.length) {
            for (var i = 0; i < controls.length; i++) {
                // if no control type is present this is a column which we give type 0 to let us process it
                var controlType = common_1.hOP(controls[i], "controlType") ? controls[i].controlType : 0;
                switch (controlType) {
                    case 0:
                        // empty canvas column or page settings
                        if (common_1.hOP(controls[i], "pageSettingsSlice")) {
                            this._pageSettings = controls[i];
                        }
                        else {
                            // we have an empty column
                            this.mergeColumnToTree(new CanvasColumn(controls[i]));
                        }
                        break;
                    case 3:
                        var part = new ClientsideWebpart(controls[i]);
                        this.mergePartToTree(part, part.data.position);
                        break;
                    case 4:
                        var textData = controls[i];
                        var text = new ClientsideText(textData.innerHTML, textData);
                        this.mergePartToTree(text, text.data.position);
                        break;
                }
            }
            funcs_1.reindex(this.sections);
        }
    };
    _ClientsidePage.prototype.getControls = function () {
        var _this = this;
        // reindex things
        funcs_1.reindex(this.sections);
        // rollup the control changes
        var canvasData = [];
        this.sections.forEach(function (section) {
            section.columns.forEach(function (column) {
                if (column.controls.length < 1) {
                    // empty column
                    canvasData.push({
                        displayMode: column.data.displayMode,
                        emphasis: _this.getEmphasisObj(section.emphasis),
                        position: column.data.position,
                    });
                }
                else {
                    column.controls.forEach(function (control) {
                        control.data.emphasis = _this.getEmphasisObj(section.emphasis);
                        canvasData.push(control.data);
                    });
                }
            });
        });
        canvasData.push(this._pageSettings);
        return canvasData;
    };
    _ClientsidePage.prototype.getEmphasisObj = function (value) {
        if (value < 1 || value > 3) {
            return {};
        }
        return { zoneEmphasis: value };
    };
    _ClientsidePage.prototype.promoteNewsImpl = function (method) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var lastPubData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null.");
                        }
                        if (!common_1.stringIsNullOrEmpty(this.json.VersionInfo.LastVersionCreatedBy)) return [3 /*break*/, 2];
                        lastPubData = new Date(this.json.VersionInfo.LastVersionCreated);
                        if (!(lastPubData.getFullYear() < 2000)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.save(true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, operations_1.spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/" + method), odata_1.body(metadata_1.metadata("SP.Publishing.SitePage")))];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    _ClientsidePage.prototype.mergePartToTree = function (control, positionData) {
        var column = null;
        var sectionFactor = 12;
        var sectionIndex = 0;
        var zoneIndex = 0;
        var layoutIndex = 1;
        // handle case where we don't have position data (shouldn't happen?)
        if (positionData) {
            if (common_1.hOP(positionData, "zoneIndex")) {
                zoneIndex = positionData.zoneIndex;
            }
            if (common_1.hOP(positionData, "sectionIndex")) {
                sectionIndex = positionData.sectionIndex;
            }
            if (common_1.hOP(positionData, "sectionFactor")) {
                sectionFactor = positionData.sectionFactor;
            }
            if (common_1.hOP(positionData, "layoutIndex")) {
                layoutIndex = positionData.layoutIndex;
            }
        }
        var section = this.getOrCreateSection(zoneIndex, layoutIndex, control.data.emphasis.zoneEmphasis || 0);
        var columns = section.columns.filter(function (c) { return c.order === sectionIndex; });
        if (columns.length < 1) {
            column = section.addColumn(sectionFactor, layoutIndex);
        }
        else {
            column = columns[0];
        }
        control.column = column;
        column.addControl(control);
    };
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    _ClientsidePage.prototype.mergeColumnToTree = function (column) {
        var order = common_1.hOP(column.data, "position") && common_1.hOP(column.data.position, "zoneIndex") ? column.data.position.zoneIndex : 0;
        var layoutIndex = common_1.hOP(column.data, "position") && common_1.hOP(column.data.position, "layoutIndex") ? column.data.position.layoutIndex : 1;
        var section = this.getOrCreateSection(order, layoutIndex, column.data.emphasis.zoneEmphasis || 0);
        column.section = section;
        section.columns.push(column);
    };
    /**
     * Handle the logic to get or create a section based on the supplied order and layoutIndex
     *
     * @param order Section order
     * @param layoutIndex Layout Index (1 === normal, 2 === vertical section)
     * @param emphasis The section emphasis
     */
    _ClientsidePage.prototype.getOrCreateSection = function (order, layoutIndex, emphasis) {
        var section = null;
        var sections = this.sections.filter(function (s) { return s.order === order && s.layoutIndex === layoutIndex; });
        if (sections.length < 1) {
            section = layoutIndex === 2 ? this.addVerticalSection() : this.addSection();
            section.order = order;
            section.emphasis = emphasis;
        }
        else {
            section = sections[0];
        }
        return section;
    };
    tslib_1.__decorate([
        telemetry_1.tag("csp.load")
    ], _ClientsidePage.prototype, "load", null);
    tslib_1.__decorate([
        telemetry_1.tag("csp.save")
    ], _ClientsidePage.prototype, "save", null);
    tslib_1.__decorate([
        telemetry_1.tag("csp.discardPageCheckout")
    ], _ClientsidePage.prototype, "discardPageCheckout", null);
    tslib_1.__decorate([
        telemetry_1.tag("csp.promoteToNews")
    ], _ClientsidePage.prototype, "promoteToNews", null);
    tslib_1.__decorate([
        telemetry_1.tag("csp.copy")
    ], _ClientsidePage.prototype, "copy", null);
    tslib_1.__decorate([
        telemetry_1.tag("csp.getItem")
    ], _ClientsidePage.prototype, "getItem", null);
    return _ClientsidePage;
}(sharepointqueryable_1._SharePointQueryable));
exports._ClientsidePage = _ClientsidePage;
/**
 * Invokable factory for IClientSidePage instances
 */
var ClientsidePage = function (baseUrl, path, json, noInit, sections, commentsDisabled) {
    if (noInit === void 0) { noInit = false; }
    if (sections === void 0) { sections = []; }
    if (commentsDisabled === void 0) { commentsDisabled = false; }
    return odata_1.invokableFactory(_ClientsidePage)(baseUrl, path, json, noInit, sections, commentsDisabled);
};
/**
 * Loads a client side page from the supplied IFile instance
 *
 * @param file Source IFile instance
 */
exports.ClientsidePageFromFile = function (file) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var item, page;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, file.getItem()];
            case 1:
                item = _a.sent();
                page = ClientsidePage(extractweburl_1.extractWebUrl(file.toUrl()), "", { Id: item.Id }, true);
                return [2 /*return*/, page.configureFrom(file).load()];
        }
    });
}); };
/**
 * Creates a new client side page
 *
 * @param web The web or list
 * @param pageName The name of the page (filename)
 * @param title The page's title
 * @param PageLayoutType Layout to use when creating the page
 */
exports.CreateClientsidePage = function (web, pageName, title, PageLayoutType) {
    if (PageLayoutType === void 0) { PageLayoutType = "Article"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var pageInitData, newPage;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // patched because previously we used the full page name with the .aspx at the end
                    // this allows folk's existing code to work after the re-write to the new API
                    pageName = pageName.replace(/\.aspx$/i, "");
                    return [4 /*yield*/, operations_1.spPost(initFrom(web, "_api/sitepages/pages"), odata_1.body(Object.assign(metadata_1.metadata("SP.Publishing.SitePage"), { PageLayoutType: PageLayoutType })))];
                case 1:
                    pageInitData = _a.sent();
                    newPage = ClientsidePage(web, "", pageInitData);
                    newPage.title = pageName;
                    return [4 /*yield*/, newPage.save(false)];
                case 2:
                    _a.sent();
                    newPage.title = title;
                    return [2 /*return*/, newPage];
            }
        });
    });
};
var CanvasSection = /** @class */ (function () {
    function CanvasSection(page, order, layoutIndex, columns, _emphasis) {
        if (columns === void 0) { columns = []; }
        if (_emphasis === void 0) { _emphasis = 0; }
        this.page = page;
        this.columns = columns;
        this._emphasis = _emphasis;
        this._memId = common_1.getGUID();
        this._order = order;
        this._layoutIndex = layoutIndex;
    }
    Object.defineProperty(CanvasSection.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (value) {
            this._order = value;
            for (var i = 0; i < this.columns.length; i++) {
                this.columns[i].data.position.zoneIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasSection.prototype, "layoutIndex", {
        get: function () {
            return this._layoutIndex;
        },
        set: function (value) {
            this._layoutIndex = value;
            for (var i = 0; i < this.columns.length; i++) {
                this.columns[i].data.position.layoutIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasSection.prototype, "defaultColumn", {
        /**
         * Default column (this.columns[0]) for this section
         */
        get: function () {
            if (this.columns.length < 1) {
                this.addColumn(12);
            }
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new column to this section
     */
    CanvasSection.prototype.addColumn = function (factor, layoutIndex) {
        if (layoutIndex === void 0) { layoutIndex = 1; }
        var column = new CanvasColumn();
        column.section = this;
        column.data.position.zoneIndex = this.order;
        column.data.position.layoutIndex = layoutIndex;
        column.data.position.sectionFactor = factor;
        column.order = funcs_1.getNextOrder(this.columns);
        this.columns.push(column);
        return column;
    };
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    CanvasSection.prototype.addControl = function (control) {
        this.defaultColumn.addControl(control);
        return this;
    };
    Object.defineProperty(CanvasSection.prototype, "emphasis", {
        get: function () {
            return this._emphasis;
        },
        set: function (value) {
            this._emphasis = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Removes this section and all contained columns and controls from the collection
     */
    CanvasSection.prototype.remove = function () {
        var _this = this;
        this.page.sections = this.page.sections.filter(function (section) { return section._memId !== _this._memId; });
        funcs_1.reindex(this.page.sections);
    };
    return CanvasSection;
}());
exports.CanvasSection = CanvasSection;
var CanvasColumn = /** @class */ (function () {
    function CanvasColumn(json, controls) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(CanvasColumn.Default)); }
        if (controls === void 0) { controls = []; }
        this.json = json;
        this.controls = controls;
        this._section = null;
        this._memId = common_1.getGUID();
    }
    Object.defineProperty(CanvasColumn.prototype, "data", {
        get: function () {
            return this.json;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasColumn.prototype, "section", {
        get: function () {
            return this._section;
        },
        set: function (section) {
            this._section = section;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasColumn.prototype, "order", {
        get: function () {
            return this.data.position.sectionIndex;
        },
        set: function (value) {
            this.data.position.sectionIndex = value;
            for (var i = 0; i < this.controls.length; i++) {
                this.controls[i].data.position.zoneIndex = this.data.position.zoneIndex;
                this.controls[i].data.position.layoutIndex = this.data.position.layoutIndex;
                this.controls[i].data.position.sectionIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasColumn.prototype, "factor", {
        get: function () {
            return this.data.position.sectionFactor;
        },
        set: function (value) {
            this.data.position.sectionFactor = value;
        },
        enumerable: true,
        configurable: true
    });
    CanvasColumn.prototype.addControl = function (control) {
        control.column = this;
        this.controls.push(control);
        return this;
    };
    CanvasColumn.prototype.getControl = function (index) {
        return this.controls[index];
    };
    CanvasColumn.prototype.remove = function () {
        var _this = this;
        this.section.columns = this.section.columns.filter(function (column) { return column._memId !== _this._memId; });
        funcs_1.reindex(this.section.columns);
    };
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
    return CanvasColumn;
}());
exports.CanvasColumn = CanvasColumn;
var ColumnControl = /** @class */ (function () {
    function ColumnControl(json) {
        this.json = json;
    }
    Object.defineProperty(ColumnControl.prototype, "id", {
        get: function () {
            return this.json.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnControl.prototype, "data", {
        get: function () {
            return this.json;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnControl.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (value) {
            this._column = value;
            this.onColumnChange(this._column);
        },
        enumerable: true,
        configurable: true
    });
    ColumnControl.prototype.remove = function () {
        var _this = this;
        this.column.controls = this.column.controls.filter(function (control) { return control.id !== _this.id; });
        funcs_1.reindex(this.column.controls);
    };
    ColumnControl.prototype.setData = function (data) {
        this.json = data;
    };
    return ColumnControl;
}());
exports.ColumnControl = ColumnControl;
var ClientsideText = /** @class */ (function (_super) {
    tslib_1.__extends(ClientsideText, _super);
    function ClientsideText(text, json) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(ClientsideText.Default)); }
        var _this = this;
        if (common_1.stringIsNullOrEmpty(json.id)) {
            json.id = common_1.getGUID();
            json.anchorComponentId = json.id;
        }
        _this = _super.call(this, json) || this;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(ClientsideText.prototype, "text", {
        get: function () {
            return this.data.innerHTML;
        },
        set: function (value) {
            if (!value.startsWith("<p>")) {
                value = "<p>" + value + "</p>";
            }
            this.data.innerHTML = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientsideText.prototype, "order", {
        get: function () {
            return this.data.position.controlIndex;
        },
        set: function (value) {
            this.data.position.controlIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    ClientsideText.prototype.onColumnChange = function (col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = funcs_1.getNextOrder(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.order;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    };
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
    return ClientsideText;
}(ColumnControl));
exports.ClientsideText = ClientsideText;
var ClientsideWebpart = /** @class */ (function (_super) {
    tslib_1.__extends(ClientsideWebpart, _super);
    function ClientsideWebpart(json) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(ClientsideWebpart.Default)); }
        return _super.call(this, json) || this;
    }
    ClientsideWebpart.fromComponentDef = function (definition) {
        var part = new ClientsideWebpart();
        part.import(definition);
        return part;
    };
    Object.defineProperty(ClientsideWebpart.prototype, "title", {
        get: function () {
            return this.data.webPartData.title;
        },
        set: function (value) {
            this.data.webPartData.title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "description", {
        get: function () {
            return this.data.webPartData.description;
        },
        set: function (value) {
            this.data.webPartData.description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "order", {
        get: function () {
            return this.data.position.controlIndex;
        },
        set: function (value) {
            this.data.position.controlIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "height", {
        get: function () {
            return this.data.reservedHeight;
        },
        set: function (value) {
            this.data.reservedHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "width", {
        get: function () {
            return this.data.reservedWidth;
        },
        set: function (value) {
            this.data.reservedWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "dataVersion", {
        get: function () {
            return this.data.webPartData.dataVersion;
        },
        set: function (value) {
            this.data.webPartData.dataVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    ClientsideWebpart.prototype.setProperties = function (properties) {
        this.data.webPartData.properties = common_1.assign(this.data.webPartData.properties, properties);
        return this;
    };
    ClientsideWebpart.prototype.getProperties = function () {
        return this.data.webPartData.properties;
    };
    ClientsideWebpart.prototype.onColumnChange = function (col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = funcs_1.getNextOrder(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.data.position.sectionIndex;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    };
    ClientsideWebpart.prototype.import = function (component) {
        var id = common_1.getGUID();
        var componendId = component.Id.replace(/^\{|\}$/g, "").toLowerCase();
        var manifest = JSON.parse(component.Manifest);
        var preconfiguredEntries = manifest.preconfiguredEntries[0];
        this.setData(Object.assign({}, this.data, {
            id: id,
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
    };
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
    return ClientsideWebpart;
}(ColumnControl));
exports.ClientsideWebpart = ClientsideWebpart;
//# sourceMappingURL=types.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(17);
var escapeQueryStrValue_1 = __webpack_require__(16);
types_1._Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
    return types_2.File(this, "getFileByServerRelativeUrl('" + escapeQueryStrValue_1.escapeQueryStrValue(fileRelativeUrl) + "')");
};
types_1._Web.prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return types_2.File(this, "getFileByServerRelativePath(decodedUrl='" + escapeQueryStrValue_1.escapeQueryStrValue(fileRelativeUrl) + "')");
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(52);
var operations_1 = __webpack_require__(4);
odata_1.addProp(types_1._Item, "comments", types_2.Comments);
types_1._Item.prototype.getLikedBy = function () {
    return operations_1.spPost(this.clone(types_1.Item, "likedBy"));
};
types_1._Item.prototype.like = function () {
    return operations_1.spPost(this.clone(types_1.Item, "like"));
};
types_1._Item.prototype.unlike = function () {
    return operations_1.spPost(this.clone(types_1.Item, "unlike"));
};
types_1._Item.prototype.getLikedByInformation = function () {
    return this.clone(types_1.Item, "likedByInformation").expand("likedby")();
};
//# sourceMappingURL=item.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var decorators_1 = __webpack_require__(6);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(14);
var metadata_1 = __webpack_require__(9);
var odata_2 = __webpack_require__(2);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _Comments = /** @class */ (function (_super) {
    tslib_1.__extends(_Comments, _super);
    function _Comments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    _Comments.prototype.add = function (info) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, d;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof info === "string") {
                            info = { text: info };
                        }
                        postBody = odata_2.body(common_1.assign(metadata_1.metadata("Microsoft.SharePoint.Comments.comment"), info));
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Comments, null), postBody)];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, common_1.assign(this.getById(d.id), d)];
                }
            });
        });
    };
    /**
     * Gets a comment by id
     *
     * @param id Id of the comment to load
     */
    _Comments.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.Comment(this).concat("(" + id + ")"), "coms.getById");
    };
    /**
     * Deletes all the comments in this collection
     */
    _Comments.prototype.clear = function () {
        return operations_1.spPost(telemetry_1.tag.configure(this.clone(exports.Comments, "DeleteAll"), "coms.clear"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("coms.add")
    ], _Comments.prototype, "add", null);
    _Comments = tslib_1.__decorate([
        decorators_1.defaultPath("comments")
    ], _Comments);
    return _Comments;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Comments = _Comments;
exports.Comments = sharepointqueryable_1.spInvokableFactory(_Comments);
var _Comment = /** @class */ (function (_super) {
    tslib_1.__extends(_Comment, _super);
    function _Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Comment.prototype, "replies", {
        /**
         * A comment's replies
         */
        get: function () {
            return telemetry_1.tag.configure(exports.Replies(this), "com.replies");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Likes the comment as the current user
     */
    _Comment.prototype.like = function () {
        return operations_1.spPost(this.clone(exports.Comment, "Like"));
    };
    /**
     * Unlikes the comment as the current user
     */
    _Comment.prototype.unlike = function () {
        return operations_1.spPost(this.clone(exports.Comment, "Unlike"));
    };
    /**
     * Deletes this comment
     */
    _Comment.prototype.delete = function () {
        return operations_1.spPost(this.clone(exports.Comment, "DeleteComment"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("com.like")
    ], _Comment.prototype, "like", null);
    tslib_1.__decorate([
        telemetry_1.tag("com.unlike")
    ], _Comment.prototype, "unlike", null);
    tslib_1.__decorate([
        telemetry_1.tag("com.delete")
    ], _Comment.prototype, "delete", null);
    return _Comment;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Comment = _Comment;
exports.Comment = sharepointqueryable_1.spInvokableFactory(_Comment);
var _Replies = /** @class */ (function (_super) {
    tslib_1.__extends(_Replies, _super);
    function _Replies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    _Replies.prototype.add = function (info) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, d;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof info === "string") {
                            info = { text: info };
                        }
                        postBody = odata_2.body(common_1.assign(metadata_1.metadata("Microsoft.SharePoint.Comments.comment"), info));
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Replies, null), postBody)];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, common_1.assign(exports.Comment(odata_1.odataUrlFrom(d)), d)];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("reps.add")
    ], _Replies.prototype, "add", null);
    _Replies = tslib_1.__decorate([
        decorators_1.defaultPath("replies")
    ], _Replies);
    return _Replies;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Replies = _Replies;
exports.Replies = sharepointqueryable_1.spInvokableFactory(_Replies);
//# sourceMappingURL=types.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(51);
var types_1 = __webpack_require__(52);
exports.Comment = types_1.Comment;
exports.Comments = types_1.Comments;
exports.Replies = types_1.Replies;
//# sourceMappingURL=index.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
var types_1 = __webpack_require__(25);
exports.ContentType = types_1.ContentType;
exports.ContentTypes = types_1.ContentTypes;
exports.FieldLink = types_1.FieldLink;
exports.FieldLinks = types_1.FieldLinks;
//# sourceMappingURL=index.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(102);
__webpack_require__(103);
var types_1 = __webpack_require__(33);
exports.Feature = types_1.Feature;
exports.Features = types_1.Features;
//# sourceMappingURL=index.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(57);
__webpack_require__(104);
__webpack_require__(57);
var types_1 = __webpack_require__(34);
exports.Fields = types_1.Fields;
exports.Field = types_1.Field;
exports.AddFieldOptions = types_1.AddFieldOptions;
exports.CalendarType = types_1.CalendarType;
exports.ChoiceFieldFormatType = types_1.ChoiceFieldFormatType;
exports.DateTimeFieldFormatType = types_1.DateTimeFieldFormatType;
exports.DateTimeFieldFriendlyFormatType = types_1.DateTimeFieldFriendlyFormatType;
exports.FieldTypes = types_1.FieldTypes;
exports.FieldUserSelectionMode = types_1.FieldUserSelectionMode;
exports.UrlFieldFormatType = types_1.UrlFieldFormatType;
//# sourceMappingURL=index.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(34);
odata_1.addProp(types_1._Web, "fields", types_2.Fields);
odata_1.addProp(types_1._Web, "availablefields", types_2.Fields, "availablefields");
//# sourceMappingURL=web.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(50);
var types_1 = __webpack_require__(17);
exports.File = types_1.File;
exports.Files = types_1.Files;
exports.CheckinType = types_1.CheckinType;
exports.MoveOperations = types_1.MoveOperations;
exports.TemplateFileType = types_1.TemplateFileType;
exports.Version = types_1.Version;
exports.Versions = types_1.Versions;
//# sourceMappingURL=index.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(107);
__webpack_require__(60);
__webpack_require__(108);
var types_1 = __webpack_require__(19);
exports.Folder = types_1.Folder;
exports.Folders = types_1.Folders;
//# sourceMappingURL=index.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(19);
odata_1.addProp(types_1._List, "rootFolder", types_2.Folder, "rootFolder");
//# sourceMappingURL=list.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(109);
var types_1 = __webpack_require__(62);
exports.Form = types_1.Form;
exports.Forms = types_1.Forms;
//# sourceMappingURL=index.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var telemetry_1 = __webpack_require__(5);
/**
 * Describes a collection of Form objects
 *
 */
var _Forms = /** @class */ (function (_super) {
    tslib_1.__extends(_Forms, _super);
    function _Forms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    _Forms.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.Form(this).concat("('" + id + "')"), "fos.getById");
    };
    _Forms = tslib_1.__decorate([
        decorators_1.defaultPath("forms")
    ], _Forms);
    return _Forms;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Forms = _Forms;
exports.Forms = sharepointqueryable_1.spInvokableFactory(_Forms);
/**
 * Describes a single of Form instance
 *
 */
var _Form = /** @class */ (function (_super) {
    tslib_1.__extends(_Form, _super);
    function _Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Form;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Form = _Form;
exports.Form = sharepointqueryable_1.spInvokableFactory(_Form);
//# sourceMappingURL=types.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(64);
__webpack_require__(110);
__webpack_require__(111);
var types_2 = __webpack_require__(64);
exports.HubSite = types_2.HubSite;
exports.HubSites = types_2.HubSites;
Reflect.defineProperty(rest_1.SPRest.prototype, "hubSites", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.HubSites(this._baseUrl).configure(this._options);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var types_1 = __webpack_require__(18);
var telemetry_1 = __webpack_require__(5);
var _HubSites = /** @class */ (function (_super) {
    tslib_1.__extends(_HubSites, _super);
    function _HubSites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    _HubSites.prototype.getById = function (id) {
        return telemetry_1.tag.configure(exports.HubSite(this, "GetById?hubSiteId='" + id + "'"), "hss.getById");
    };
    _HubSites = tslib_1.__decorate([
        decorators_1.defaultPath("_api/hubsites")
    ], _HubSites);
    return _HubSites;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._HubSites = _HubSites;
exports.HubSites = sharepointqueryable_1.spInvokableFactory(_HubSites);
var _HubSite = /** @class */ (function (_super) {
    tslib_1.__extends(_HubSite, _super);
    function _HubSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the ISite instance associated with this hubsite
     */
    _HubSite.prototype.getSite = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var d;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.select("SiteUrl")()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, types_1.Site(d.SiteUrl)];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("hs.getSite")
    ], _HubSite.prototype, "getSite", null);
    return _HubSite;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._HubSite = _HubSite;
exports.HubSite = sharepointqueryable_1.spInvokableFactory(_HubSite);
//# sourceMappingURL=types.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(112);
var types_1 = __webpack_require__(11);
exports.List = types_1.List;
exports.Lists = types_1.Lists;
exports.ControlMode = types_1.ControlMode;
exports.RenderListDataOptions = types_1.RenderListDataOptions;
//# sourceMappingURL=index.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(35);
__webpack_require__(113);
var types_2 = __webpack_require__(35);
exports.Navigation = types_2.Navigation;
exports.NavigationNode = types_2.NavigationNode;
exports.NavigationNodes = types_2.NavigationNodes;
exports.NavigationService = types_2.NavigationService;
Reflect.defineProperty(rest_1.SPRest.prototype, "navigation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.NavigationService().configure(this._options);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(68);
var types_2 = __webpack_require__(68);
exports.Profiles = types_2.Profiles;
exports.UrlZone = types_2.UrlZone;
Reflect.defineProperty(rest_1.SPRest.prototype, "profiles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.Profiles(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(9);
var odata_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var _Profiles = /** @class */ (function (_super) {
    tslib_1.__extends(_Profiles, _super);
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    function _Profiles(baseUrl, path) {
        if (path === void 0) { path = "_api/sp.userprofiles.peoplemanager"; }
        var _this = _super.call(this, baseUrl, path) || this;
        _this.clientPeoplePickerQuery = (new ClientPeoplePickerQuery(baseUrl)).configureFrom(_this);
        _this.profileLoader = (new ProfileLoader(baseUrl)).configureFrom(_this);
        return _this;
    }
    Object.defineProperty(_Profiles.prototype, "editProfileLink", {
        /**
         * The url of the edit profile page for the current user
         */
        get: function () {
            return this.clone(exports.Profiles, "EditProfileLink").get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Profiles.prototype, "isMyPeopleListPublic", {
        /**
         * A boolean value that indicates whether the current user's "People I'm Following" list is public
         */
        get: function () {
            return this.clone(exports.Profiles, "IsMyPeopleListPublic").get();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.amIFollowedBy = function (loginName) {
        var q = this.clone(exports.Profiles, "amifollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.amIFollowing = function (loginName) {
        var q = this.clone(exports.Profiles, "amifollowing(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    _Profiles.prototype.getFollowedTags = function (maxCount) {
        if (maxCount === void 0) { maxCount = 20; }
        return this.clone(exports.Profiles, "getfollowedtags(" + maxCount + ")").get();
    };
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.getFollowersFor = function (loginName) {
        var q = this.clone(exports.Profiles, "getfollowersfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(_Profiles.prototype, "myFollowers", {
        /**
         * Gets the people who are following the current user
         *
         */
        get: function () {
            return sharepointqueryable_1.SharePointQueryableCollection(this, "getmyfollowers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Profiles.prototype, "myProperties", {
        /**
         * Gets user properties for the current user
         *
         */
        get: function () {
            return new _Profiles(this, "getmyproperties");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    _Profiles.prototype.getPeopleFollowedBy = function (loginName) {
        var q = this.clone(exports.Profiles, "getpeoplefollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    _Profiles.prototype.getPropertiesFor = function (loginName) {
        var q = this.clone(exports.Profiles, "getpropertiesfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(_Profiles.prototype, "trendingTags", {
        /**
         * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
         *
         */
        get: function () {
            var q = this.clone(exports.Profiles, null);
            q.concat(".gettrendingtags");
            return q.get();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    _Profiles.prototype.getUserProfilePropertyFor = function (loginName, propertyName) {
        var q = this.clone(exports.Profiles, "getuserprofilepropertyfor(accountname=@v, propertyname='" + propertyName + "')");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.hideSuggestion = function (loginName) {
        var q = this.clone(exports.Profiles, "hidesuggestion(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return operations_1.spPost(q);
    };
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    _Profiles.prototype.isFollowing = function (follower, followee) {
        var q = this.clone(exports.Profiles, null);
        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
        q.query.set("@v", "'" + encodeURIComponent(follower) + "'");
        q.query.set("@y", "'" + encodeURIComponent(followee) + "'");
        return q.get();
    };
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    _Profiles.prototype.setMyProfilePic = function (profilePicSource) {
        var buffer = null;
        var reader = new FileReader();
        reader.onload = function (e) { return buffer = e.target.result; };
        reader.readAsArrayBuffer(profilePicSource);
        var request = new _Profiles(this, "setmyprofilepicture");
        return operations_1.spPost(request, odata_1.body(String.fromCharCode.apply(null, new Uint16Array(buffer))));
    };
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    _Profiles.prototype.setSingleValueProfileProperty = function (accountName, propertyName, propertyValue) {
        return operations_1.spPost(this.clone(exports.Profiles, "SetSingleValueProfileProperty"), odata_1.body({
            accountName: accountName,
            propertyName: propertyName,
            propertyValue: propertyValue,
        }));
    };
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    _Profiles.prototype.setMultiValuedProfileProperty = function (accountName, propertyName, propertyValues) {
        return operations_1.spPost(this.clone(exports.Profiles, "SetMultiValuedProfileProperty"), odata_1.body({
            accountName: accountName,
            propertyName: propertyName,
            propertyValues: propertyValues,
        }));
    };
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    _Profiles.prototype.createPersonalSiteEnqueueBulk = function () {
        var emails = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            emails[_i] = arguments[_i];
        }
        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
    };
    Object.defineProperty(_Profiles.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner
         *
         */
        get: function () {
            return this.profileLoader.ownerUserProfile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Profiles.prototype, "userProfile", {
        /**
         * Gets the user profile for the current user
         */
        get: function () {
            return this.profileLoader.userProfile;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    _Profiles.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return this.profileLoader.createPersonalSite(interactiveRequest);
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    _Profiles.prototype.shareAllSocialData = function (share) {
        return this.profileLoader.shareAllSocialData(share);
    };
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    _Profiles.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerResolveUser(queryParams);
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    _Profiles.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerSearchUser(queryParams);
    };
    return _Profiles;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Profiles = _Profiles;
exports.Profiles = sharepointqueryable_1.spInvokableFactory(_Profiles);
var ProfileLoader = /** @class */ (function (_super) {
    tslib_1.__extends(ProfileLoader, _super);
    function ProfileLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    ProfileLoader.prototype.createPersonalSiteEnqueueBulk = function (emails) {
        return operations_1.spPost(this.clone(ProfileLoaderFactory, "createpersonalsiteenqueuebulk", false), odata_1.body({ "emailIDs": emails }));
    };
    Object.defineProperty(ProfileLoader.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner.
         *
         */
        get: function () {
            var q = this.getParent(ProfileLoaderFactory, this.parentUrl, "_api/sp.userprofiles.profileloader.getowneruserprofile");
            if (this.hasBatch) {
                q = q.inBatch(this.batch);
            }
            return operations_1.spPost(q);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileLoader.prototype, "userProfile", {
        /**
         * Gets the user profile of the current user.
         *
         */
        get: function () {
            return operations_1.spPost(this.clone(ProfileLoaderFactory, "getuserprofile"));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    ProfileLoader.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return operations_1.spPost(this.clone(ProfileLoaderFactory, "getuserprofile/createpersonalsiteenque(" + interactiveRequest + ")"));
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    ProfileLoader.prototype.shareAllSocialData = function (share) {
        return operations_1.spPost(this.clone(ProfileLoaderFactory, "getuserprofile/shareallsocialdata(" + share + ")"));
    };
    ProfileLoader = tslib_1.__decorate([
        decorators_1.defaultPath("_api/sp.userprofiles.profileloader.getprofileloader")
    ], ProfileLoader);
    return ProfileLoader;
}(sharepointqueryable_1._SharePointQueryable));
var ProfileLoaderFactory = function (baseUrl, path) {
    return new ProfileLoader(baseUrl, path);
};
var ClientPeoplePickerQuery = /** @class */ (function (_super) {
    tslib_1.__extends(ClientPeoplePickerQuery, _super);
    function ClientPeoplePickerQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(ClientPeoplePickerFactory, null);
                        q.concat(".clientpeoplepickerresolveuser");
                        return [4 /*yield*/, operations_1.spPost(q, this.getBodyFrom(queryParams))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, JSON.parse(typeof res === "object" ? res.ClientPeoplePickerResolveUser : res)];
                }
            });
        });
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var q, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(ClientPeoplePickerFactory, null);
                        q.concat(".clientpeoplepickersearchuser");
                        return [4 /*yield*/, operations_1.spPost(q, this.getBodyFrom(queryParams))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, JSON.parse(typeof res === "object" ? res.ClientPeoplePickerSearchUser : res)];
                }
            });
        });
    };
    /**
     * Creates ClientPeoplePickerQueryParameters request body
     *
     * @param queryParams The query parameters to create request body
     */
    ClientPeoplePickerQuery.prototype.getBodyFrom = function (queryParams) {
        return odata_1.body({ "queryParams": common_1.assign(metadata_1.metadata("SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters"), queryParams) });
    };
    ClientPeoplePickerQuery = tslib_1.__decorate([
        decorators_1.defaultPath("_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface")
    ], ClientPeoplePickerQuery);
    return ClientPeoplePickerQuery;
}(sharepointqueryable_1._SharePointQueryable));
var ClientPeoplePickerFactory = function (baseUrl, path) {
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
})(UrlZone = exports.UrlZone || (exports.UrlZone = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(114);
var types_1 = __webpack_require__(70);
exports.RegionalSettings = types_1.RegionalSettings;
exports.TimeZone = types_1.TimeZone;
exports.TimeZones = types_1.TimeZones;
//# sourceMappingURL=index.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var odata_1 = __webpack_require__(14);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _RegionalSettings = /** @class */ (function (_super) {
    tslib_1.__extends(_RegionalSettings, _super);
    function _RegionalSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_RegionalSettings.prototype, "installedLanguages", {
        /**
         * Gets the collection of languages used in a server farm.
         */
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryableCollection(this, "installedlanguages"), "rs.installedLanguages");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_RegionalSettings.prototype, "timeZone", {
        /**
         * Gets time zone
         */
        get: function () {
            return telemetry_1.tag.configure(exports.TimeZone(this), "rs.tz");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_RegionalSettings.prototype, "timeZones", {
        /**
         * Gets time zones
         */
        get: function () {
            return telemetry_1.tag.configure(exports.TimeZones(this), "rs.tzs");
        },
        enumerable: true,
        configurable: true
    });
    _RegionalSettings = tslib_1.__decorate([
        decorators_1.defaultPath("regionalsettings")
    ], _RegionalSettings);
    return _RegionalSettings;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._RegionalSettings = _RegionalSettings;
exports.RegionalSettings = sharepointqueryable_1.spInvokableFactory(_RegionalSettings);
var _TimeZone = /** @class */ (function (_super) {
    tslib_1.__extends(_TimeZone, _super);
    function _TimeZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    _TimeZone.prototype.utcToLocalTime = function (utcTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dateIsoString, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof utcTime === "string") {
                            dateIsoString = utcTime;
                        }
                        else {
                            dateIsoString = utcTime.toISOString();
                        }
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.TimeZone, "utctolocaltime('" + dateIsoString + "')"))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, common_1.hOP(res, "UTCToLocalTime") ? res.UTCToLocalTime : res];
                }
            });
        });
    };
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    _TimeZone.prototype.localTimeToUTC = function (localTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dateIsoString, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof localTime === "string") {
                            dateIsoString = localTime;
                        }
                        else {
                            dateIsoString = common_1.dateAdd(localTime, "minute", localTime.getTimezoneOffset() * -1).toISOString();
                        }
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.TimeZone, "localtimetoutc('" + dateIsoString + "')"))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, common_1.hOP(res, "LocalTimeToUTC") ? res.LocalTimeToUTC : res];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("tz.utcToLocalTime")
    ], _TimeZone.prototype, "utcToLocalTime", null);
    tslib_1.__decorate([
        telemetry_1.tag("tz.localTimeToUTC")
    ], _TimeZone.prototype, "localTimeToUTC", null);
    _TimeZone = tslib_1.__decorate([
        decorators_1.defaultPath("timezone")
    ], _TimeZone);
    return _TimeZone;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._TimeZone = _TimeZone;
exports.TimeZone = sharepointqueryable_1.spInvokableFactory(_TimeZone);
var _TimeZones = /** @class */ (function (_super) {
    tslib_1.__extends(_TimeZones, _super);
    function _TimeZones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets an TimeZone by id (see: https://msdn.microsoft.com/en-us/library/office/jj247008.aspx)
     *
     * @param id The integer id of the timezone to retrieve
     */
    _TimeZones.prototype.getById = function (id) {
        // do the post and merge the result into a TimeZone instance so the data and methods are available
        return operations_1.spPost(this.clone(exports.TimeZones, "GetById(" + id + ")").usingParser(odata_1.spODataEntity(exports.TimeZone)));
    };
    tslib_1.__decorate([
        telemetry_1.tag("tzs.getById")
    ], _TimeZones.prototype, "getById", null);
    _TimeZones = tslib_1.__decorate([
        decorators_1.defaultPath("timezones")
    ], _TimeZones);
    return _TimeZones;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._TimeZones = _TimeZones;
exports.TimeZones = sharepointqueryable_1.spInvokableFactory(_TimeZones);
//# sourceMappingURL=types.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(115);
exports.RelatedItemManager = types_1.RelatedItemManager;
//# sourceMappingURL=index.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rest_1 = __webpack_require__(13);
var query_1 = __webpack_require__(36);
var query_2 = __webpack_require__(36);
var suggest_1 = __webpack_require__(73);
tslib_1.__exportStar(__webpack_require__(116), exports);
var query_3 = __webpack_require__(36);
exports.SearchQueryBuilder = query_3.SearchQueryBuilder;
exports.SearchResults = query_3.SearchResults;
exports.Search = query_3.Search;
var suggest_2 = __webpack_require__(73);
exports.Suggest = suggest_2.Suggest;
rest_1.SPRest.prototype.search = function (query) {
    return query_2.Search(this._baseUrl, this._options)(query);
};
rest_1.SPRest.prototype.searchWithCaching = function (query, options) {
    return (new query_1._Search(this._baseUrl, null)).configure(this._options).usingCaching(options).execute(query);
};
rest_1.SPRest.prototype.searchSuggest = function (query) {
    return suggest_1.Suggest(this._baseUrl, this._options)(typeof query === "string" ? { querytext: query } : query);
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var decorators_1 = __webpack_require__(6);
var telemetry_1 = __webpack_require__(5);
var _Suggest = /** @class */ (function (_super) {
    tslib_1.__extends(_Suggest, _super);
    function _Suggest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Suggest.prototype.execute = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, mapper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mapQueryToQueryString(query);
                        return [4 /*yield*/, this.get()];
                    case 1:
                        response = _a.sent();
                        mapper = common_1.hOP(response, "suggest") ? function (s_1) { return response.suggest[s_1].results; } : function (s_2) { return response[s_2]; };
                        return [2 /*return*/, {
                                PeopleNames: mapper("PeopleNames"),
                                PersonalResults: mapper("PersonalResults"),
                                Queries: mapper("Queries"),
                            }];
                }
            });
        });
    };
    _Suggest.prototype.mapQueryToQueryString = function (query) {
        var _this = this;
        var setProp = function (q) { return function (checkProp) { return function (sp) {
            if (common_1.hOP(q, checkProp)) {
                _this.query.set(sp, q[checkProp].toString());
            }
        }; }; };
        this.query.set("querytext", "'" + query.querytext + "'");
        var querySetter = setProp(query);
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
    };
    tslib_1.__decorate([
        telemetry_1.tag("su.execute")
    ], _Suggest.prototype, "execute", null);
    _Suggest = tslib_1.__decorate([
        decorators_1.defaultPath("_api/search/suggest")
    ], _Suggest);
    return _Suggest;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Suggest = _Suggest;
exports.Suggest = function (baseUrl, options) {
    if (options === void 0) { options = {}; }
    return function (query) {
        return (new _Suggest(baseUrl)).configure(options).execute(query);
    };
};
//# sourceMappingURL=suggest.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(75);
var types_1 = __webpack_require__(20);
exports.RoleAssignment = types_1.RoleAssignment;
exports.RoleAssignments = types_1.RoleAssignments;
exports.RoleDefinition = types_1.RoleDefinition;
exports.RoleDefinitions = types_1.RoleDefinitions;
exports.PermissionKind = types_1.PermissionKind;
//# sourceMappingURL=index.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(20);
var sharepointqueryable_1 = __webpack_require__(3);
var funcs_1 = __webpack_require__(38);
odata_1.addProp(types_1._Web, "roleDefinitions", types_2.RoleDefinitions);
odata_1.addProp(types_1._Web, "roleAssignments", types_2.RoleAssignments);
odata_1.addProp(types_1._Web, "firstUniqueAncestorSecurableObject", sharepointqueryable_1.SharePointQueryableInstance);
types_1._Web.prototype.getUserEffectivePermissions = funcs_1.getUserEffectivePermissions;
types_1._Web.prototype.getCurrentUserEffectivePermissions = funcs_1.getCurrentUserEffectivePermissions;
types_1._Web.prototype.breakRoleInheritance = funcs_1.breakRoleInheritance;
types_1._Web.prototype.resetRoleInheritance = funcs_1.resetRoleInheritance;
types_1._Web.prototype.userHasPermissions = funcs_1.userHasPermissions;
types_1._Web.prototype.currentUserHasPermissions = funcs_1.currentUserHasPermissions;
types_1._Web.prototype.hasPermissions = funcs_1.hasPermissions;
//# sourceMappingURL=web.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
var types_1 = __webpack_require__(21);
exports.SPSharedObjectType = types_1.SPSharedObjectType;
exports.SharingDomainRestrictionMode = types_1.SharingDomainRestrictionMode;
exports.SharingLinkKind = types_1.SharingLinkKind;
exports.SharingOperationStatusCode = types_1.SharingOperationStatusCode;
exports.SharingRole = types_1.SharingRole;
exports.RoleType = types_1.RoleType;
//# sourceMappingURL=index.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(123);
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(40);
var types_2 = __webpack_require__(40);
exports.SiteDesigns = types_2.SiteDesigns;
Reflect.defineProperty(rest_1.SPRest.prototype, "siteDesigns", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.SiteDesigns(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(124);
var types_1 = __webpack_require__(26);
exports.SiteGroup = types_1.SiteGroup;
exports.SiteGroups = types_1.SiteGroups;
//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(125);
__webpack_require__(126);
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(27);
var types_2 = __webpack_require__(27);
exports.SiteScripts = types_2.SiteScripts;
Reflect.defineProperty(rest_1.SPRest.prototype, "siteScripts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.SiteScripts(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(127);
var types_1 = __webpack_require__(37);
exports.SiteUser = types_1.SiteUser;
exports.SiteUsers = types_1.SiteUsers;
//# sourceMappingURL=index.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(82);
var rest_1 = __webpack_require__(13);
var types_2 = __webpack_require__(82);
exports.MySocial = types_2.MySocial;
exports.Social = types_2.Social;
exports.SocialActorType = types_2.SocialActorType;
exports.SocialActorTypes = types_2.SocialActorTypes;
exports.SocialFollowResult = types_2.SocialFollowResult;
exports.SocialStatusCode = types_2.SocialStatusCode;
Reflect.defineProperty(rest_1.SPRest.prototype, "social", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.Social(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var decorators_1 = __webpack_require__(6);
var common_1 = __webpack_require__(1);
var metadata_1 = __webpack_require__(9);
var odata_1 = __webpack_require__(2);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _Social = /** @class */ (function (_super) {
    tslib_1.__extends(_Social, _super);
    function _Social() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Social.prototype, "my", {
        get: function () {
            return exports.MySocial(this);
        },
        enumerable: true,
        configurable: true
    });
    _Social.prototype.getFollowedSitesUri = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SocialCloneFactory, "FollowedSitesUri").get()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.FollowedSitesUri || r];
                }
            });
        });
    };
    _Social.prototype.getFollowedDocumentsUri = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SocialCloneFactory, "FollowedDocumentsUri").get()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.FollowedDocumentsUri || r];
                }
            });
        });
    };
    _Social.prototype.follow = function (actorInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(SocialCloneFactory, "follow"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.isFollowed = function (actorInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(SocialCloneFactory, "isfollowed"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.stopFollowing = function (actorInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, operations_1.spPost(this.clone(SocialCloneFactory, "stopfollowing"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.createSocialActorInfoRequestBody = function (actorInfo) {
        return odata_1.body({
            "actor": Object.assign(metadata_1.metadata("SP.Social.SocialActorInfo"), {
                Id: null,
            }, actorInfo),
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("soc.getFollowedSitesUri")
    ], _Social.prototype, "getFollowedSitesUri", null);
    tslib_1.__decorate([
        telemetry_1.tag("soc.getFollowedDocumentsUri")
    ], _Social.prototype, "getFollowedDocumentsUri", null);
    tslib_1.__decorate([
        telemetry_1.tag("soc.follow")
    ], _Social.prototype, "follow", null);
    tslib_1.__decorate([
        telemetry_1.tag("soc.isFollowed")
    ], _Social.prototype, "isFollowed", null);
    tslib_1.__decorate([
        telemetry_1.tag("soc.stopFollowing")
    ], _Social.prototype, "stopFollowing", null);
    _Social = tslib_1.__decorate([
        decorators_1.defaultPath("_api/social.following")
    ], _Social);
    return _Social;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Social = _Social;
/**
 * Get a new Social instance for the particular Url
 */
exports.Social = function (baseUrl) { return new _Social(baseUrl); };
var SocialCloneFactory = function (baseUrl, paths) { return new _Social(baseUrl, paths); };
/**
 * Current user's Social instance
 */
var _MySocial = /** @class */ (function (_super) {
    tslib_1.__extends(_MySocial, _super);
    function _MySocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MySocial.prototype.followed = function (types) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followed(types=" + types + ")")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, common_1.hOP(r, "Followed") ? r.Followed.results : r];
                }
            });
        });
    };
    _MySocial.prototype.followedCount = function (types) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followedcount(types=" + types + ")")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.FollowedCount || r];
                }
            });
        });
    };
    _MySocial.prototype.followers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followers")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, common_1.hOP(r, "Followers") ? r.Followers.results : r];
                }
            });
        });
    };
    _MySocial.prototype.suggestions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "suggestions")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, common_1.hOP(r, "Suggestions") ? r.Suggestions.results : r];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("msoc.followed")
    ], _MySocial.prototype, "followed", null);
    tslib_1.__decorate([
        telemetry_1.tag("msoc.followedCount")
    ], _MySocial.prototype, "followedCount", null);
    tslib_1.__decorate([
        telemetry_1.tag("msoc.followers")
    ], _MySocial.prototype, "followers", null);
    tslib_1.__decorate([
        telemetry_1.tag("msoc.suggestions")
    ], _MySocial.prototype, "suggestions", null);
    _MySocial = tslib_1.__decorate([
        decorators_1.defaultPath("my")
    ], _MySocial);
    return _MySocial;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._MySocial = _MySocial;
/**
 * Invokable factory for IMySocial instances
 */
exports.MySocial = sharepointqueryable_1.spInvokableFactory(_MySocial);
var MySocialCloneFactory = function (baseUrl, path) { return exports.MySocial(baseUrl, path); };
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
})(SocialActorType = exports.SocialActorType || (exports.SocialActorType = {}));
/**
 * Social actor type
 *
 */
/* tslint:disable:no-bitwise */
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
})(SocialActorTypes = exports.SocialActorTypes || (exports.SocialActorTypes = {}));
/* tslint:enable */
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
})(SocialFollowResult = exports.SocialFollowResult || (exports.SocialFollowResult = {}));
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
})(SocialStatusCode = exports.SocialStatusCode || (exports.SocialStatusCode = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = __webpack_require__(13);
var types_1 = __webpack_require__(84);
var types_2 = __webpack_require__(84);
exports.Utilities = types_2.Utilities;
Reflect.defineProperty(rest_1.SPRest.prototype, "utility", {
    configurable: true,
    enumerable: true,
    get: function () {
        return types_1.Utilities(this._baseUrl, "");
    },
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
var odata_2 = __webpack_require__(14);
var metadata_1 = __webpack_require__(9);
var types_1 = __webpack_require__(17);
var extractweburl_1 = __webpack_require__(10);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var objectToSPKeyValueCollection_1 = __webpack_require__(85);
var _Utilities = /** @class */ (function (_super) {
    tslib_1.__extends(_Utilities, _super);
    function _Utilities(baseUrl, methodName) {
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractweburl_1.extractWebUrl(url), "_api/SP.Utilities.Utility." + methodName) || this;
        return _this;
    }
    _Utilities.prototype.excute = function (props) {
        return operations_1.spPost(this, odata_1.body(props));
    };
    _Utilities.prototype.sendEmail = function (props) {
        var params = {
            properties: common_1.assign(metadata_1.metadata("SP.Utilities.EmailProperties"), {
                Body: props.Body,
                From: props.From,
                Subject: props.Subject,
            }),
        };
        if (props.To && props.To.length > 0) {
            params.properties = common_1.assign(params.properties, {
                To: { results: props.To },
            });
        }
        if (props.CC && props.CC.length > 0) {
            params.properties = common_1.assign(params.properties, {
                CC: { results: props.CC },
            });
        }
        if (props.BCC && props.BCC.length > 0) {
            params.properties = common_1.assign(params.properties, {
                BCC: { results: props.BCC },
            });
        }
        if (props.AdditionalHeaders) {
            params.properties = common_1.assign(params.properties, {
                AdditionalHeaders: objectToSPKeyValueCollection_1.objectToSPKeyValueCollection(props.AdditionalHeaders),
            });
        }
        return telemetry_1.tag.configure(this.clone(UtilitiesCloneFactory, "SendEmail", true), "u.sendEmail").excute(params);
    };
    _Utilities.prototype.getCurrentUserEmailAddresses = function () {
        return telemetry_1.tag.configure(this.clone(UtilitiesCloneFactory, "GetCurrentUserEmailAddresses", true), "u.getCurrentUserEmailAddresses").excute({});
    };
    _Utilities.prototype.resolvePrincipal = function (input, scopes, sources, inputIsEmailOnly, addToUserInfoList, matchUserInfoList) {
        if (matchUserInfoList === void 0) { matchUserInfoList = false; }
        var params = {
            addToUserInfoList: addToUserInfoList,
            input: input,
            inputIsEmailOnly: inputIsEmailOnly,
            matchUserInfoList: matchUserInfoList,
            scopes: scopes,
            sources: sources,
        };
        var clone = this.clone(UtilitiesCloneFactory, "ResolvePrincipalInCurrentContext", true);
        return telemetry_1.tag.configure(clone, "u.ResolvePrincipalInCurrentContext").excute(params);
    };
    _Utilities.prototype.searchPrincipals = function (input, scopes, sources, groupName, maxCount) {
        var params = {
            groupName: groupName,
            input: input,
            maxCount: maxCount,
            scopes: scopes,
            sources: sources,
        };
        var clone = this.clone(UtilitiesCloneFactory, "SearchPrincipalsUsingContextWeb", true);
        return telemetry_1.tag.configure(clone, "u.SearchPrincipalsUsingContextWeb").excute(params);
    };
    _Utilities.prototype.createEmailBodyForInvitation = function (pageAddress) {
        var params = {
            pageAddress: pageAddress,
        };
        var clone = this.clone(UtilitiesCloneFactory, "CreateEmailBodyForInvitation", true);
        return telemetry_1.tag.configure(clone, "u.CreateEmailBodyForInvitation").excute(params);
    };
    _Utilities.prototype.expandGroupsToPrincipals = function (inputs, maxCount) {
        if (maxCount === void 0) { maxCount = 30; }
        var params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        var clone = this.clone(UtilitiesCloneFactory, "ExpandGroupsToPrincipals", true);
        return telemetry_1.tag.configure(clone, "u.ExpandGroupsToPrincipals").excute(params);
    };
    _Utilities.prototype.createWikiPage = function (info) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var clone, newPage;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clone = this.clone(UtilitiesCloneFactory, "CreateWikiPageInContextWeb", true);
                        return [4 /*yield*/, telemetry_1.tag.configure(clone, "u.CreateWikiPageInContextWeb").excute({ parameters: info })];
                    case 1:
                        newPage = _a.sent();
                        return [2 /*return*/, {
                                data: newPage,
                                file: types_1.File(odata_2.odataUrlFrom(newPage)),
                            }];
                }
            });
        });
    };
    return _Utilities;
}(sharepointqueryable_1._SharePointQueryable));
exports._Utilities = _Utilities;
exports.Utilities = sharepointqueryable_1.spInvokableFactory(_Utilities);
var UtilitiesCloneFactory = function (baseUrl, path) { return exports.Utilities(baseUrl, path); };
//# sourceMappingURL=types.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(9);
var common_1 = __webpack_require__(1);
/**
 * Creates an object representing a SharePoint Collection(SP.KeyValue)
 *
 * @param obj The plain object defining the properties
 */
function objectToSPKeyValueCollection(obj) {
    return common_1.assign(metadata_1.metadata("Collection(SP.KeyValue)"), {
        results: Object.keys(obj).map(function (key) { return common_1.assign(metadata_1.metadata("SP.KeyValue"), {
            Key: key,
            Value: Reflect.get(obj, key),
            ValueType: "Edm.String",
        }); }),
    });
}
exports.objectToSPKeyValueCollection = objectToSPKeyValueCollection;
//# sourceMappingURL=objectToSPKeyValueCollection.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(128);
var types_1 = __webpack_require__(87);
exports.Subscription = types_1.Subscription;
exports.Subscriptions = types_1.Subscriptions;
//# sourceMappingURL=index.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var odata_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _Subscriptions = /** @class */ (function (_super) {
    tslib_1.__extends(_Subscriptions, _super);
    function _Subscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns all the webhook subscriptions or the specified webhook subscription
    *
    * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
    */
    _Subscriptions.prototype.getById = function (subscriptionId) {
        return telemetry_1.tag.configure(exports.Subscription(this).concat("('" + subscriptionId + "')"), "subs.getById");
    };
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (optional)
     */
    _Subscriptions.prototype.add = function (notificationUrl, expirationDate, clientState) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            "expirationDateTime": expirationDate,
                            "notificationUrl": notificationUrl,
                            "resource": this.toUrl(),
                        };
                        if (clientState) {
                            postBody.clientState = clientState;
                        }
                        return [4 /*yield*/, operations_1.spPost(this, odata_1.body(postBody, odata_1.headers({ "Content-Type": "application/json" })))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, subscription: this.getById(data.id) }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("subs.add")
    ], _Subscriptions.prototype, "add", null);
    _Subscriptions = tslib_1.__decorate([
        decorators_1.defaultPath("subscriptions")
    ], _Subscriptions);
    return _Subscriptions;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Subscriptions = _Subscriptions;
exports.Subscriptions = sharepointqueryable_1.spInvokableFactory(_Subscriptions);
var _Subscription = /** @class */ (function (_super) {
    tslib_1.__extends(_Subscription, _super);
    function _Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months, optional)
     * @param notificationUrl The url to receive the notifications (optional)
     * @param clientState A client specific string (optional)
     */
    _Subscription.prototype.update = function (expirationDate, notificationUrl, clientState) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {};
                        if (expirationDate) {
                            postBody.expirationDateTime = expirationDate;
                        }
                        if (notificationUrl) {
                            postBody.notificationUrl = notificationUrl;
                        }
                        if (clientState) {
                            postBody.clientState = clientState;
                        }
                        return [4 /*yield*/, operations_1.spPatch(this, odata_1.body(postBody, odata_1.headers({ "Content-Type": "application/json" })))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, subscription: this }];
                }
            });
        });
    };
    /**
     * Removes this webhook subscription
     *
     */
    _Subscription.prototype.delete = function () {
        return operations_1.spDelete(this);
    };
    tslib_1.__decorate([
        telemetry_1.tag("sub.update")
    ], _Subscription.prototype, "update", null);
    tslib_1.__decorate([
        telemetry_1.tag("sub.delete")
    ], _Subscription.prototype, "delete", null);
    return _Subscription;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._Subscription = _Subscription;
exports.Subscription = sharepointqueryable_1.spInvokableFactory(_Subscription);
//# sourceMappingURL=types.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(129);
__webpack_require__(130);
__webpack_require__(131);
var types_1 = __webpack_require__(28);
exports.UserCustomAction = types_1.UserCustomAction;
exports.UserCustomActions = types_1.UserCustomActions;
exports.UserCustomActionRegistrationType = types_1.UserCustomActionRegistrationType;
exports.UserCustomActionScope = types_1.UserCustomActionScope;
//# sourceMappingURL=index.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(132);
var types_1 = __webpack_require__(90);
exports.View = types_1.View;
exports.ViewFields = types_1.ViewFields;
exports.Views = types_1.Views;
exports.ViewScope = types_1.ViewScope;
//# sourceMappingURL=index.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var sharepointqueryable_1 = __webpack_require__(3);
var metadata_1 = __webpack_require__(9);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _Views = /** @class */ (function (_super) {
    tslib_1.__extends(_Views, _super);
    function _Views() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    _Views.prototype.getById = function (id) {
        return exports.View(this).concat("('" + id + "')");
    };
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    _Views.prototype.getByTitle = function (title) {
        return exports.View(this, "getByTitle('" + title + "')");
    };
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    _Views.prototype.add = function (title, personalView, additionalSettings) {
        if (personalView === void 0) { personalView = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = odata_1.body(Object.assign(metadata_1.metadata("SP.View"), {
                            "PersonalView": personalView,
                            "Title": title,
                        }, additionalSettings));
                        return [4 /*yield*/, operations_1.spPost(this.clone(exports.Views, null), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                view: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    tslib_1.__decorate([
        telemetry_1.tag("vs.add")
    ], _Views.prototype, "add", null);
    _Views = tslib_1.__decorate([
        decorators_1.defaultPath("views")
    ], _Views);
    return _Views;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._Views = _Views;
exports.Views = sharepointqueryable_1.spInvokableFactory(_Views);
var _View = /** @class */ (function (_super) {
    tslib_1.__extends(_View, _super);
    function _View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = sharepointqueryable_1.deleteable("vw");
        /**
         * Updates this view intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the view
         */
        _this.update = _this._update("SP.View", function (data) { return ({ data: data, view: _this }); });
        return _this;
    }
    Object.defineProperty(_View.prototype, "fields", {
        get: function () {
            return exports.ViewFields(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the list view as HTML.
     *
     */
    _View.prototype.renderAsHtml = function () {
        return this.clone(exports.View, "renderashtml")();
    };
    /**
     * Sets the view schema
     *
     * @param viewXml The view XML to set
     */
    _View.prototype.setViewXml = function (viewXml) {
        return operations_1.spPost(this.clone(exports.View, "SetViewXml"), odata_1.body({ viewXml: viewXml }));
    };
    tslib_1.__decorate([
        telemetry_1.tag("v.renderAsHtml")
    ], _View.prototype, "renderAsHtml", null);
    tslib_1.__decorate([
        telemetry_1.tag("v.setViewXml")
    ], _View.prototype, "setViewXml", null);
    return _View;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._View = _View;
exports.View = sharepointqueryable_1.spInvokableFactory(_View);
var _ViewFields = /** @class */ (function (_super) {
    tslib_1.__extends(_ViewFields, _super);
    function _ViewFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    _ViewFields.prototype.getSchemaXml = function () {
        return this.clone(exports.ViewFields, "schemaxml")();
    };
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    _ViewFields.prototype.add = function (fieldTitleOrInternalName) {
        return operations_1.spPost(this.clone(exports.ViewFields, "addviewfield('" + fieldTitleOrInternalName + "')"));
    };
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param field The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    _ViewFields.prototype.move = function (field, index) {
        return operations_1.spPost(this.clone(exports.ViewFields, "moveviewfieldto"), odata_1.body({ field: field, index: index }));
    };
    /**
     * Removes all the fields from the collection.
     */
    _ViewFields.prototype.removeAll = function () {
        return operations_1.spPost(this.clone(exports.ViewFields, "removeallviewfields"));
    };
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    _ViewFields.prototype.remove = function (fieldInternalName) {
        return operations_1.spPost(this.clone(exports.ViewFields, "removeviewfield('" + fieldInternalName + "')"));
    };
    tslib_1.__decorate([
        telemetry_1.tag("vfs.getSchemaXml")
    ], _ViewFields.prototype, "getSchemaXml", null);
    tslib_1.__decorate([
        telemetry_1.tag("vfs.add")
    ], _ViewFields.prototype, "add", null);
    tslib_1.__decorate([
        telemetry_1.tag("vfs.move")
    ], _ViewFields.prototype, "move", null);
    tslib_1.__decorate([
        telemetry_1.tag("vfs.removeAll")
    ], _ViewFields.prototype, "removeAll", null);
    tslib_1.__decorate([
        telemetry_1.tag("vfs.remove")
    ], _ViewFields.prototype, "remove", null);
    _ViewFields = tslib_1.__decorate([
        decorators_1.defaultPath("viewfields")
    ], _ViewFields);
    return _ViewFields;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._ViewFields = _ViewFields;
exports.ViewFields = sharepointqueryable_1.spInvokableFactory(_ViewFields);
var ViewScope;
(function (ViewScope) {
    ViewScope[ViewScope["DefaultValue"] = 0] = "DefaultValue";
    ViewScope[ViewScope["Recursive"] = 1] = "Recursive";
    ViewScope[ViewScope["RecursiveAll"] = 2] = "RecursiveAll";
    ViewScope[ViewScope["FilesOnly"] = 3] = "FilesOnly";
})(ViewScope = exports.ViewScope || (exports.ViewScope = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(133);
var types_1 = __webpack_require__(92);
exports.WebPartsPersonalizationScope = types_1.WebPartsPersonalizationScope;
exports.WebPartDefinitions = types_1.WebPartDefinitions;
exports.WebPartDefinition = types_1.WebPartDefinition;
exports.LimitedWebPartManager = types_1.LimitedWebPartManager;
//# sourceMappingURL=index.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var odata_1 = __webpack_require__(2);
var operations_1 = __webpack_require__(4);
var telemetry_1 = __webpack_require__(5);
var _LimitedWebPartManager = /** @class */ (function (_super) {
    tslib_1.__extends(_LimitedWebPartManager, _super);
    function _LimitedWebPartManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_LimitedWebPartManager.prototype, "scope", {
        get: function () {
            return telemetry_1.tag.configure(sharepointqueryable_1.SharePointQueryable(this, "Scope"), "f.scope");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_LimitedWebPartManager.prototype, "webparts", {
        get: function () {
            return exports.WebPartDefinitions(this, "webparts");
        },
        enumerable: true,
        configurable: true
    });
    _LimitedWebPartManager.prototype.export = function (id) {
        return operations_1.spPost(this.clone(LimitedWebPartManagerCloneFactory, "ExportWebPart"), odata_1.body({ webPartId: id }));
    };
    _LimitedWebPartManager.prototype.import = function (xml) {
        return operations_1.spPost(this.clone(LimitedWebPartManagerCloneFactory, "ImportWebPart"), odata_1.body({ webPartXml: xml }));
    };
    return _LimitedWebPartManager;
}(sharepointqueryable_1._SharePointQueryable));
exports._LimitedWebPartManager = _LimitedWebPartManager;
exports.LimitedWebPartManager = function (baseUrl, path) { return new _LimitedWebPartManager(baseUrl, path); };
var LimitedWebPartManagerCloneFactory = function (baseUrl, path) { return exports.LimitedWebPartManager(baseUrl, path); };
var _WebPartDefinitions = /** @class */ (function (_super) {
    tslib_1.__extends(_WebPartDefinitions, _super);
    function _WebPartDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    _WebPartDefinitions.prototype.getById = function (id) {
        return exports.WebPartDefinition(this, "getbyid('" + id + "')");
    };
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    _WebPartDefinitions.prototype.getByControlId = function (id) {
        return exports.WebPartDefinition(this, "getByControlId('" + id + "')");
    };
    return _WebPartDefinitions;
}(sharepointqueryable_1._SharePointQueryableCollection));
exports._WebPartDefinitions = _WebPartDefinitions;
exports.WebPartDefinitions = sharepointqueryable_1.spInvokableFactory(_WebPartDefinitions);
var _WebPartDefinition = /** @class */ (function (_super) {
    tslib_1.__extends(_WebPartDefinition, _super);
    function _WebPartDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_WebPartDefinition.prototype, "webpart", {
        /**
        * Gets the webpart information associated with this definition
        */
        get: function () {
            return sharepointqueryable_1.SharePointQueryableInstance(this, "webpart");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    _WebPartDefinition.prototype.saveChanges = function () {
        return operations_1.spPost(this.clone(exports.WebPartDefinition, "SaveWebPartChanges"));
    };
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    _WebPartDefinition.prototype.moveTo = function (zoneId, zoneIndex) {
        return operations_1.spPost(this.clone(exports.WebPartDefinition, "MoveWebPartTo(zoneID='" + zoneId + "', zoneIndex=" + zoneIndex + ")"));
    };
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    _WebPartDefinition.prototype.close = function () {
        return operations_1.spPost(this.clone(exports.WebPartDefinition, "CloseWebPart"));
    };
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    _WebPartDefinition.prototype.open = function () {
        return operations_1.spPost(this.clone(exports.WebPartDefinition, "OpenWebPart"));
    };
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    _WebPartDefinition.prototype.delete = function () {
        return operations_1.spPost(this.clone(exports.WebPartDefinition, "DeleteWebPart"));
    };
    return _WebPartDefinition;
}(sharepointqueryable_1._SharePointQueryableInstance));
exports._WebPartDefinition = _WebPartDefinition;
exports.WebPartDefinition = sharepointqueryable_1.spInvokableFactory(_WebPartDefinition);
var WebPartsPersonalizationScope;
(function (WebPartsPersonalizationScope) {
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
})(WebPartsPersonalizationScope = exports.WebPartsPersonalizationScope || (exports.WebPartsPersonalizationScope = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(45);
types_1._Web.prototype.getAppCatalog = function (url) {
    return types_2.AppCatalog(url || this);
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(15);
odata_1.addProp(types_1._List, "items", types_2.Items);
//# sourceMappingURL=list.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(47);
odata_1.addProp(types_1._Item, "attachmentFiles", types_2.Attachments);
//# sourceMappingURL=item.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(49);
var sharepointqueryable_1 = __webpack_require__(3);
types_1._Web.prototype.getClientsideWebParts = function () {
    return this.clone(sharepointqueryable_1.SharePointQueryableCollection, "GetClientSideWebParts")();
};
types_1._Web.prototype.addClientsidePage = function (pageName, title, layout) {
    if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
    return types_2.CreateClientsidePage(this, pageName, title, layout);
};
types_1._Web.prototype.loadClientsidePage = function (path) {
    return types_2.ClientsidePageFromFile(this.getFileByServerRelativePath(path));
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
function getNextOrder(collection) {
    return collection.length < 1 ? 1 : (Math.max.apply(null, collection.map(function (i) { return i.order; })) + 1);
}
exports.getNextOrder = getNextOrder;
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
function reindex(collection) {
    for (var i = 0; i < collection.length; i++) {
        collection[i].order = i + 1;
        if (common_1.hOP(collection[i], "columns")) {
            reindex(collection[i].columns);
        }
        else if (common_1.hOP(collection[i], "controls")) {
            reindex(collection[i].controls);
        }
    }
}
exports.reindex = reindex;
//# sourceMappingURL=funcs.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(25);
odata_1.addProp(types_1._Web, "contentTypes", types_2.ContentTypes);
//# sourceMappingURL=web.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(25);
odata_1.addProp(types_1._Item, "contentType", types_2.ContentType, "ContentType");
//# sourceMappingURL=item.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(25);
odata_1.addProp(types_1._List, "contentTypes", types_2.ContentTypes);
//# sourceMappingURL=list.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(18);
var types_2 = __webpack_require__(33);
odata_1.addProp(types_1._Site, "features", types_2.Features);
//# sourceMappingURL=site.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(33);
odata_1.addProp(types_1._Web, "features", types_2.Features);
//# sourceMappingURL=web.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(34);
odata_1.addProp(types_1._List, "fields", types_2.Fields);
//# sourceMappingURL=list.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(19);
var types_2 = __webpack_require__(17);
odata_1.addProp(types_1._Folder, "files", types_2.Files);
//# sourceMappingURL=folder.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(17);
odata_1.addProp(types_1._Item, "file", types_2.File, "file");
//# sourceMappingURL=item.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(19);
odata_1.addProp(types_1._Item, "folder", types_2.Folder, "folder");
//# sourceMappingURL=item.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(19);
var escapeQueryStrValue_1 = __webpack_require__(16);
odata_1.addProp(types_1._Web, "folders", types_2.Folders);
odata_1.addProp(types_1._Web, "rootFolder", types_2.Folder, "rootFolder");
types_1._Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
    return types_2.Folder(this, "getFolderByServerRelativeUrl('" + escapeQueryStrValue_1.escapeQueryStrValue(folderRelativeUrl) + "')");
};
types_1._Web.prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return types_2.Folder(this, "getFolderByServerRelativePath(decodedUrl='" + escapeQueryStrValue_1.escapeQueryStrValue(folderRelativeUrl) + "')");
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(62);
odata_1.addProp(types_1._List, "forms", types_2.Forms, "forms");
//# sourceMappingURL=list.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var types_1 = __webpack_require__(18);
var operations_1 = __webpack_require__(4);
types_1._Site.prototype.joinHubSite = function (siteId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operations_1.spPost(this.clone(types_1.Site, "joinHubSite('" + siteId + "')"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
types_1._Site.prototype.registerHubSite = function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operations_1.spPost(this.clone(types_1.Site, "registerHubSite"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
types_1._Site.prototype.unRegisterHubSite = function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operations_1.spPost(this.clone(types_1.Site, "unRegisterHubSite"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=site.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var types_1 = __webpack_require__(7);
var operations_1 = __webpack_require__(4);
types_1._Web.prototype.hubSiteData = function (forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(types_1.Web, "hubSiteData(" + forceRefresh + ")")()];
                case 1:
                    data = _a.sent();
                    if (typeof data === "string") {
                        return [2 /*return*/, JSON.parse(data)];
                    }
                    return [2 /*return*/, data];
            }
        });
    });
};
types_1._Web.prototype.syncHubSiteTheme = function () {
    return operations_1.spPost(this.clone(types_1.Web, "syncHubSiteTheme"));
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(11);
var odata_2 = __webpack_require__(14);
var sharepointqueryable_1 = __webpack_require__(3);
var escapeQueryStrValue_1 = __webpack_require__(16);
odata_1.addProp(types_1._Web, "lists", types_2.Lists);
odata_1.addProp(types_1._Web, "siteUserInfoList", types_2.List, "siteuserinfolist");
odata_1.addProp(types_1._Web, "defaultDocumentLibrary", types_2.List, "DefaultDocumentLibrary");
odata_1.addProp(types_1._Web, "customListTemplates", sharepointqueryable_1.SharePointQueryableCollection, "getcustomlisttemplates");
types_1._Web.prototype.getList = function (listRelativeUrl) {
    return types_2.List(this, "getList('" + escapeQueryStrValue_1.escapeQueryStrValue(listRelativeUrl) + "')");
};
types_1._Web.prototype.getCatalog = function (type) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(types_1.Web, "getcatalog(" + type + ")").select("Id").get()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, types_2.List(odata_2.odataUrlFrom(data))];
            }
        });
    });
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(35);
odata_1.addProp(types_1._Web, "navigation", types_2.Navigation);
//# sourceMappingURL=web.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(70);
odata_1.addProp(types_1._Web, "regionalSettings", types_2.RegionalSettings);
//# sourceMappingURL=web.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
var extractweburl_1 = __webpack_require__(10);
var decorators_1 = __webpack_require__(6);
var operations_1 = __webpack_require__(4);
var odata_1 = __webpack_require__(2);
var telemetry_1 = __webpack_require__(5);
var _RelatedItemManager = /** @class */ (function (_super) {
    tslib_1.__extends(_RelatedItemManager, _super);
    function _RelatedItemManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _RelatedItemManager.prototype.getRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(exports.RelatedItemManager, null);
        query.concat(".GetRelatedItems");
        return operations_1.spPost(query, odata_1.body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    };
    _RelatedItemManager.prototype.getPageOneRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(exports.RelatedItemManager, null);
        query.concat(".GetPageOneRelatedItems");
        return operations_1.spPost(query, odata_1.body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    };
    _RelatedItemManager.prototype.addSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemID, targetWebUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(exports.RelatedItemManager, null);
        query.concat(".AddSingleLink");
        return operations_1.spPost(query, odata_1.body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemID,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.addSingleLinkToUrl = function (sourceListName, sourceItemId, targetItemUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(exports.RelatedItemManager, null);
        query.concat(".AddSingleLinkToUrl");
        return operations_1.spPost(query, odata_1.body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            TargetItemUrl: targetItemUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.addSingleLinkFromUrl = function (sourceItemUrl, targetListName, targetItemId, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(exports.RelatedItemManager, null);
        query.concat(".AddSingleLinkFromUrl");
        return operations_1.spPost(query, odata_1.body({
            SourceItemUrl: sourceItemUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.deleteSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemId, targetWebUrl, tryDeleteReverseLink) {
        if (tryDeleteReverseLink === void 0) { tryDeleteReverseLink = false; }
        var query = this.clone(exports.RelatedItemManager, null);
        query.concat(".DeleteSingleLink");
        return operations_1.spPost(query, odata_1.body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryDeleteReverseLink: tryDeleteReverseLink,
        }));
    };
    tslib_1.__decorate([
        telemetry_1.tag("rim.getRelatedItems")
    ], _RelatedItemManager.prototype, "getRelatedItems", null);
    tslib_1.__decorate([
        telemetry_1.tag("rim.getPageOneRelatedItems")
    ], _RelatedItemManager.prototype, "getPageOneRelatedItems", null);
    tslib_1.__decorate([
        telemetry_1.tag("rim.addSingleLink")
    ], _RelatedItemManager.prototype, "addSingleLink", null);
    tslib_1.__decorate([
        telemetry_1.tag("rim.ToUrl")
    ], _RelatedItemManager.prototype, "addSingleLinkToUrl", null);
    tslib_1.__decorate([
        telemetry_1.tag("rim.FromUrl")
    ], _RelatedItemManager.prototype, "addSingleLinkFromUrl", null);
    tslib_1.__decorate([
        telemetry_1.tag("rim.deleteSingleLink")
    ], _RelatedItemManager.prototype, "deleteSingleLink", null);
    _RelatedItemManager = tslib_1.__decorate([
        decorators_1.defaultPath("_api/SP.RelatedItemManager")
    ], _RelatedItemManager);
    return _RelatedItemManager;
}(sharepointqueryable_1._SharePointQueryable));
exports._RelatedItemManager = _RelatedItemManager;
exports.RelatedItemManager = function (url) { return new _RelatedItemManager(extractweburl_1.extractWebUrl(typeof url === "string" ? url : url.toUrl())); };
//# sourceMappingURL=types.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * defines the SortDirection enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
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
})(ReorderingRuleMatchType = exports.ReorderingRuleMatchType || (exports.ReorderingRuleMatchType = {}));
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
})(QueryPropertyValueType = exports.QueryPropertyValueType || (exports.QueryPropertyValueType = {}));
var SearchBuiltInSourceId = /** @class */ (function () {
    function SearchBuiltInSourceId() {
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
    return SearchBuiltInSourceId;
}());
exports.SearchBuiltInSourceId = SearchBuiltInSourceId;
//# sourceMappingURL=types.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(20);
var sharepointqueryable_1 = __webpack_require__(3);
var funcs_1 = __webpack_require__(38);
odata_1.addProp(types_1._Item, "roleAssignments", types_2.RoleAssignments);
odata_1.addProp(types_1._Item, "firstUniqueAncestorSecurableObject", sharepointqueryable_1.SharePointQueryableInstance);
types_1._Item.prototype.getUserEffectivePermissions = funcs_1.getUserEffectivePermissions;
types_1._Item.prototype.getCurrentUserEffectivePermissions = funcs_1.getCurrentUserEffectivePermissions;
types_1._Item.prototype.breakRoleInheritance = funcs_1.breakRoleInheritance;
types_1._Item.prototype.resetRoleInheritance = funcs_1.resetRoleInheritance;
types_1._Item.prototype.userHasPermissions = funcs_1.userHasPermissions;
types_1._Item.prototype.currentUserHasPermissions = funcs_1.currentUserHasPermissions;
types_1._Item.prototype.hasPermissions = funcs_1.hasPermissions;
//# sourceMappingURL=item.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(20);
var sharepointqueryable_1 = __webpack_require__(3);
var funcs_1 = __webpack_require__(38);
odata_1.addProp(types_1._List, "roleAssignments", types_2.RoleAssignments);
odata_1.addProp(types_1._List, "firstUniqueAncestorSecurableObject", sharepointqueryable_1.SharePointQueryableInstance);
types_1._List.prototype.getUserEffectivePermissions = funcs_1.getUserEffectivePermissions;
types_1._List.prototype.getCurrentUserEffectivePermissions = funcs_1.getCurrentUserEffectivePermissions;
types_1._List.prototype.breakRoleInheritance = funcs_1.breakRoleInheritance;
types_1._List.prototype.resetRoleInheritance = funcs_1.resetRoleInheritance;
types_1._List.prototype.userHasPermissions = funcs_1.userHasPermissions;
types_1._List.prototype.currentUserHasPermissions = funcs_1.currentUserHasPermissions;
types_1._List.prototype.hasPermissions = funcs_1.hasPermissions;
//# sourceMappingURL=list.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(17);
var types_2 = __webpack_require__(21);
var funcs_1 = __webpack_require__(39);
types_1._File.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
    if (role === void 0) { role = types_2.SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    return funcs_1.shareWith(this, loginNames, role, requireSignin, false, emailData);
};
types_1._File.prototype.getShareLink = funcs_1.getShareLink;
types_1._File.prototype.checkSharingPermissions = funcs_1.checkPermissions;
types_1._File.prototype.getSharingInformation = funcs_1.getSharingInformation;
types_1._File.prototype.getObjectSharingSettings = funcs_1.getObjectSharingSettings;
types_1._File.prototype.unshare = funcs_1.unshareObject;
types_1._File.prototype.deleteSharingLinkByKind = funcs_1.deleteLinkByKind;
types_1._File.prototype.unshareLink = funcs_1.unshareLink;
//# sourceMappingURL=file.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var types_1 = __webpack_require__(19);
var types_2 = __webpack_require__(21);
types_1._Folder.prototype.shareWith = function (loginNames, role, requireSignin, shareEverything, emailData) {
    if (role === void 0) { role = types_2.SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    if (shareEverything === void 0) { shareEverything = false; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.shareWith(loginNames, role, requireSignin, shareEverything, emailData)];
            }
        });
    });
};
types_1._Folder.prototype.getShareLink = function (kind, expiration) {
    if (expiration === void 0) { expiration = null; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.getShareLink(kind, expiration)];
            }
        });
    });
};
types_1._Folder.prototype.checkSharingPermissions = function (recipients) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.checkSharingPermissions(recipients)];
            }
        });
    });
};
types_1._Folder.prototype.getSharingInformation = function (request, expands) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.getSharingInformation(request, expands)];
            }
        });
    });
};
types_1._Folder.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.getObjectSharingSettings(useSimplifiedRoles)];
            }
        });
    });
};
types_1._Folder.prototype.unshare = function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.unshare()];
            }
        });
    });
};
types_1._Folder.prototype.deleteSharingLinkByKind = function (kind) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.deleteSharingLinkByKind(kind)];
            }
        });
    });
};
types_1._Folder.prototype.unshareLink = function (kind, shareId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.unshareLink(kind, shareId)];
            }
        });
    });
};
//# sourceMappingURL=folder.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(21);
var funcs_1 = __webpack_require__(39);
types_1._Item.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
    if (role === void 0) { role = types_2.SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    return funcs_1.shareWith(this, loginNames, role, requireSignin, false, emailData);
};
types_1._Item.prototype.getShareLink = funcs_1.getShareLink;
types_1._Item.prototype.checkSharingPermissions = funcs_1.checkPermissions;
types_1._Item.prototype.getSharingInformation = funcs_1.getSharingInformation;
types_1._Item.prototype.getObjectSharingSettings = funcs_1.getObjectSharingSettings;
types_1._Item.prototype.unshare = funcs_1.unshareObject;
types_1._Item.prototype.deleteSharingLinkByKind = funcs_1.deleteLinkByKind;
types_1._Item.prototype.unshareLink = funcs_1.unshareLink;
//# sourceMappingURL=item.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(21);
var sharepointqueryable_1 = __webpack_require__(3);
var extractweburl_1 = __webpack_require__(10);
var funcs_1 = __webpack_require__(39);
var common_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(2);
var operations_1 = __webpack_require__(4);
/**
 * Shares this web with the supplied users
 * @param loginNames The resolved login names to share
 * @param role The role to share this web
 * @param emailData Optional email data
 */
types_1._Web.prototype.shareWith = function (loginNames, role, emailData) {
    if (role === void 0) { role = types_2.SharingRole.View; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependency, web, url;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    web = new sharepointqueryable_1._SharePointQueryableInstance(extractweburl_1.extractWebUrl(this.toUrl()), "/_api/web/url");
                    return [4 /*yield*/, web.get()];
                case 1:
                    url = _a.sent();
                    dependency();
                    return [2 /*return*/, this.shareObject(common_1.combine(url, "/_layouts/15/aclinv.aspx?forSharing=1&mbypass=1"), loginNames, role, emailData)];
            }
        });
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
types_1._Web.prototype.shareObject = function (url, loginNames, role, emailData, group, propagateAcl, includeAnonymousLinkInEmail, useSimplifiedRoles) {
    if (propagateAcl === void 0) { propagateAcl = false; }
    if (includeAnonymousLinkInEmail === void 0) { includeAnonymousLinkInEmail = false; }
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    return funcs_1.shareObject(this, {
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
types_1._Web.prototype.shareObjectRaw = function (options) {
    return funcs_1.shareObject(this, options, true);
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
types_1._Web.prototype.unshareObject = function (url) {
    return operations_1.spPost(types_1.Web(this, "unshareObject"), odata_1.body({ url: url }));
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(40);
types_1._Web.prototype.getSiteDesignRuns = function (siteDesignId) {
    return types_2.SiteDesigns(this, "").getSiteDesignRun(undefined, siteDesignId);
};
types_1._Web.prototype.addSiteDesignTask = function (siteDesignId) {
    return types_2.SiteDesigns(this, "").addSiteDesignTaskToCurrentWeb(siteDesignId);
};
types_1._Web.prototype.getSiteDesignRunStatus = function (runId) {
    return types_2.SiteDesigns(this, "").getSiteDesignRunStatus(undefined, runId);
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(26);
var operations_1 = __webpack_require__(4);
var escapeQueryStrValue_1 = __webpack_require__(16);
__webpack_require__(75);
odata_1.addProp(types_1._Web, "siteGroups", types_2.SiteGroups);
odata_1.addProp(types_1._Web, "associatedOwnerGroup", types_2.SiteGroups, "associatedownergroup");
odata_1.addProp(types_1._Web, "associatedMemberGroup", types_2.SiteGroups, "associatedmembergroup");
odata_1.addProp(types_1._Web, "associatedVisitorGroup", types_2.SiteGroups, "associatedvisitorgroup");
types_1._Web.prototype.createDefaultAssociatedGroups = function (groupNameSeed, siteOwner, copyRoleAssignments, clearSubscopes, siteOwner2) {
    if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
    if (clearSubscopes === void 0) { clearSubscopes = true; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var q;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.breakRoleInheritance(copyRoleAssignments, clearSubscopes)];
                case 1:
                    _a.sent();
                    q = this.clone(types_1.Web, "createDefaultAssociatedGroups(userLogin=@u,userLogin2=@v,groupNameSeed=@s)");
                    q.query.set("@u", "'" + escapeQueryStrValue_1.escapeQueryStrValue(siteOwner || "") + "'");
                    q.query.set("@v", "'" + escapeQueryStrValue_1.escapeQueryStrValue(siteOwner2 || "") + "'");
                    q.query.set("@s", "'" + escapeQueryStrValue_1.escapeQueryStrValue(groupNameSeed || "") + "'");
                    return [2 /*return*/, operations_1.spPost(q)];
            }
        });
    });
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(27);
types_1._Web.prototype.getSiteScript = function (extractInfo) {
    return types_2.SiteScripts(this.toUrl(), "").getSiteScriptFromWeb(undefined, extractInfo);
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(27);
__webpack_require__(60);
var types_3 = __webpack_require__(7);
var extractweburl_1 = __webpack_require__(10);
types_1._List.prototype.getSiteScript = function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var rootFolder, web, absoluteListUrl;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(types_1.List).rootFolder.get()];
                case 1:
                    rootFolder = _a.sent();
                    return [4 /*yield*/, types_3.Web(extractweburl_1.extractWebUrl(this.toUrl())).select("Url").get()];
                case 2:
                    web = _a.sent();
                    absoluteListUrl = common_1.combine(web.Url, "Lists", rootFolder.Name);
                    return [2 /*return*/, types_2.SiteScripts(this, "").getSiteScriptFromList(absoluteListUrl)];
            }
        });
    });
};
//# sourceMappingURL=list.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(37);
var odata_2 = __webpack_require__(14);
var operations_1 = __webpack_require__(4);
odata_1.addProp(types_1._Web, "siteUsers", types_2.SiteUsers);
odata_1.addProp(types_1._Web, "currentUser", types_2.SiteUser, "currentuser");
types_1._Web.prototype.ensureUser = function (logonName) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operations_1.spPost(this.clone(types_1.Web, "ensureuser"), odata_1.body({ logonName: logonName }))];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, {
                            data: data,
                            user: types_2.SiteUser(odata_2.odataUrlFrom(data)),
                        }];
            }
        });
    });
};
types_1._Web.prototype.getUserById = function (id) {
    return types_2.SiteUser(this, "getUserById(" + id + ")");
};
//# sourceMappingURL=web.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(87);
odata_1.addProp(types_1._List, "subscriptions", types_2.Subscriptions);
//# sourceMappingURL=list.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(28);
odata_1.addProp(types_1._List, "userCustomActions", types_2.UserCustomActions);
//# sourceMappingURL=list.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(7);
var types_2 = __webpack_require__(28);
odata_1.addProp(types_1._Web, "userCustomActions", types_2.UserCustomActions);
//# sourceMappingURL=web.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(18);
var types_2 = __webpack_require__(28);
odata_1.addProp(types_1._Site, "userCustomActions", types_2.UserCustomActions);
//# sourceMappingURL=site.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var odata_1 = __webpack_require__(2);
var types_1 = __webpack_require__(11);
var types_2 = __webpack_require__(90);
odata_1.addProp(types_1._List, "views", types_2.Views);
odata_1.addProp(types_1._List, "defaultView", types_2.View, "DefaultView");
types_1._List.prototype.getView = function (viewId) {
    return types_2.View(this, "getView('" + viewId + "')");
};
//# sourceMappingURL=list.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(17);
var types_2 = __webpack_require__(92);
types_1._File.prototype.getLimitedWebPartManager = function (scope) {
    if (scope === void 0) { scope = types_2.WebPartsPersonalizationScope.Shared; }
    return types_2.LimitedWebPartManager(this, "getLimitedWebPartManager(scope=" + scope + ")");
};
//# sourceMappingURL=file.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(3);
exports.SharePointQueryableInstance = sharepointqueryable_1.SharePointQueryableInstance;
exports.SharePointQueryableCollection = sharepointqueryable_1.SharePointQueryableCollection;
exports.SharePointQueryable = sharepointqueryable_1.SharePointQueryable;
exports.spInvokableFactory = sharepointqueryable_1.spInvokableFactory;
var batch_1 = __webpack_require__(30);
exports.SPBatch = batch_1.SPBatch;
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(4), exports);
var sphttpclient_1 = __webpack_require__(23);
exports.SPHttpClient = sphttpclient_1.SPHttpClient;
var rest_1 = __webpack_require__(13);
exports.SPRest = rest_1.SPRest;
exports.sp = rest_1.sp;
tslib_1.__exportStar(__webpack_require__(135), exports);
var toabsoluteurl_1 = __webpack_require__(29);
exports.toAbsoluteUrl = toabsoluteurl_1.toAbsoluteUrl;
var extractweburl_1 = __webpack_require__(10);
exports.extractWebUrl = extractweburl_1.extractWebUrl;
var objectToSPKeyValueCollection_1 = __webpack_require__(85);
exports.objectToSPKeyValueCollection = objectToSPKeyValueCollection_1.objectToSPKeyValueCollection;
var file_names_1 = __webpack_require__(136);
exports.stripInvalidFileFolderChars = file_names_1.stripInvalidFileFolderChars;
exports.containsInvalidFileFolderChars = file_names_1.containsInvalidFileFolderChars;
//# sourceMappingURL=index.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies the type of a principal.
 */
/* tslint:disable:no-bitwise */
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
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
/* tslint:enable:no-bitwise */
/**
 * Specifies the source of a principal.
 */
/* tslint:disable:no-bitwise */
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
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource = exports.PrincipalSource || (exports.PrincipalSource = {}));
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
})(PageType = exports.PageType || (exports.PageType = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
var InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise) {
    if (onPremise === void 0) { onPremise = false; }
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
exports.containsInvalidFileFolderChars = containsInvalidFileFolderChars;
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer, onPremise) {
    if (replacer === void 0) { replacer = ""; }
    if (onPremise === void 0) { onPremise = false; }
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}
exports.stripInvalidFileFolderChars = stripInvalidFileFolderChars;
//# sourceMappingURL=file-names.js.map

/***/ })
/******/ ]);
});