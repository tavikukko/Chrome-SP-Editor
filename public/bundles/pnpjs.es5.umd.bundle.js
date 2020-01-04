(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp"] = factory();
	else
		root["pnp"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __extends; });
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __decorate; });
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __generator; });
/* unused harmony export __exportStar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __values; });
/* unused harmony export __read */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __spread; });
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
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

// EXTERNAL MODULE: ./node_modules/@pnp/common/util.js
var util = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@pnp/common/collections.js

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
// CONCATENATED MODULE: ./node_modules/@pnp/common/libconfig.js

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
// EXTERNAL MODULE: ./node_modules/@pnp/common/net.js
var net = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var o;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var i, key;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
// CONCATENATED MODULE: ./node_modules/@pnp/common/index.js
/* concated harmony reexport objectToMap */__webpack_require__.d(__webpack_exports__, "y", function() { return objectToMap; });
/* concated harmony reexport mergeMaps */__webpack_require__.d(__webpack_exports__, "v", function() { return mergeMaps; });
/* unused concated harmony import setup */
/* concated harmony reexport RuntimeConfigImpl */__webpack_require__.d(__webpack_exports__, "f", function() { return libconfig_RuntimeConfigImpl; });
/* concated harmony reexport RuntimeConfig */__webpack_require__.d(__webpack_exports__, "e", function() { return RuntimeConfig; });
/* concated harmony reexport mergeHeaders */__webpack_require__.d(__webpack_exports__, "u", function() { return net["e" /* mergeHeaders */]; });
/* concated harmony reexport mergeOptions */__webpack_require__.d(__webpack_exports__, "w", function() { return net["f" /* mergeOptions */]; });
/* concated harmony reexport getADALResource */__webpack_require__.d(__webpack_exports__, "k", function() { return net["d" /* getADALResource */]; });
/* concated harmony reexport FetchClient */__webpack_require__.d(__webpack_exports__, "b", function() { return net["b" /* FetchClient */]; });
/* concated harmony reexport BearerTokenFetchClient */__webpack_require__.d(__webpack_exports__, "a", function() { return net["a" /* BearerTokenFetchClient */]; });
/* concated harmony reexport SPFxAdalClient */__webpack_require__.d(__webpack_exports__, "g", function() { return net["c" /* SPFxAdalClient */]; });
/* concated harmony reexport PnPClientStorageWrapper */__webpack_require__.d(__webpack_exports__, "d", function() { return storage_PnPClientStorageWrapper; });
/* concated harmony reexport PnPClientStorage */__webpack_require__.d(__webpack_exports__, "c", function() { return PnPClientStorage; });
/* concated harmony reexport getCtxCallback */__webpack_require__.d(__webpack_exports__, "l", function() { return util["d" /* getCtxCallback */]; });
/* concated harmony reexport dateAdd */__webpack_require__.d(__webpack_exports__, "j", function() { return util["c" /* dateAdd */]; });
/* concated harmony reexport combine */__webpack_require__.d(__webpack_exports__, "i", function() { return util["b" /* combine */]; });
/* concated harmony reexport getRandomString */__webpack_require__.d(__webpack_exports__, "o", function() { return util["g" /* getRandomString */]; });
/* concated harmony reexport getGUID */__webpack_require__.d(__webpack_exports__, "m", function() { return util["e" /* getGUID */]; });
/* concated harmony reexport isFunc */__webpack_require__.d(__webpack_exports__, "r", function() { return util["j" /* isFunc */]; });
/* concated harmony reexport objectDefinedNotNull */__webpack_require__.d(__webpack_exports__, "x", function() { return util["m" /* objectDefinedNotNull */]; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "q", function() { return util["i" /* isArray */]; });
/* concated harmony reexport assign */__webpack_require__.d(__webpack_exports__, "h", function() { return util["a" /* assign */]; });
/* concated harmony reexport isUrlAbsolute */__webpack_require__.d(__webpack_exports__, "s", function() { return util["k" /* isUrlAbsolute */]; });
/* concated harmony reexport stringIsNullOrEmpty */__webpack_require__.d(__webpack_exports__, "A", function() { return util["o" /* stringIsNullOrEmpty */]; });
/* concated harmony reexport sanitizeGuid */__webpack_require__.d(__webpack_exports__, "z", function() { return util["n" /* sanitizeGuid */]; });
/* concated harmony reexport jsS */__webpack_require__.d(__webpack_exports__, "t", function() { return util["l" /* jsS */]; });
/* concated harmony reexport hOP */__webpack_require__.d(__webpack_exports__, "p", function() { return util["h" /* hOP */]; });
/* concated harmony reexport getHashCode */__webpack_require__.d(__webpack_exports__, "n", function() { return util["f" /* getHashCode */]; });





//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setup; });
/* unused harmony export SPRuntimeConfigImpl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPRuntimeConfig; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function setup(config) {
    _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "e"].assign(config);
}
var SPRuntimeConfigImpl = /** @class */ (function () {
    function SPRuntimeConfigImpl() {
    }
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "e"].get("sp");
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
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "e"].get("sp");
            if (spPart !== undefined && spPart.baseUrl !== undefined) {
                return spPart.baseUrl;
            }
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "x"])(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "e"].spfxContext)) {
                return _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "e"].spfxContext.pageContext.web.absoluteUrl;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* RuntimeConfig */ "e"].get("sp");
            if (spPart !== undefined && spPart.fetchClientFactory !== undefined) {
                return spPart.fetchClientFactory;
            }
            else {
                return function () { return new _pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* FetchClient */ "b"](); };
            }
        },
        enumerable: true,
        configurable: true
    });
    return SPRuntimeConfigImpl;
}());

var SPRuntimeConfig = new SPRuntimeConfigImpl();
//# sourceMappingURL=splibconfig.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toAbsoluteUrl; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _splibconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl) {
    return new Promise(function (resolve) {
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "s"])(candidateUrl)) {
            // if we are already absolute, then just return the url
            return resolve(candidateUrl);
        }
        if (_splibconfig__WEBPACK_IMPORTED_MODULE_1__[/* SPRuntimeConfig */ "a"].baseUrl !== null) {
            // base url specified either with baseUrl of spfxContext config property
            return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(_splibconfig__WEBPACK_IMPORTED_MODULE_1__[/* SPRuntimeConfig */ "a"].baseUrl, candidateUrl));
        }
        if (global._spPageContextInfo !== undefined) {
            // operating in classic pages
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(global._spPageContextInfo, "webAbsoluteUrl")) {
                return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(global._spPageContextInfo.webAbsoluteUrl, candidateUrl));
            }
            else if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(global._spPageContextInfo, "webServerRelativeUrl")) {
                return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(global._spPageContextInfo.webServerRelativeUrl, candidateUrl));
            }
        }
        // does window.location exist and have a certain path part in it?
        if (global.location !== undefined) {
            var baseUrl_1 = global.location.toString().toLowerCase();
            ["/_layouts/", "/siteassets/"].forEach(function (s) {
                var index = baseUrl_1.indexOf(s);
                if (index > 0) {
                    return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(baseUrl_1.substr(0, index), candidateUrl));
                }
            });
        }
        return resolve(candidateUrl);
    });
}
//# sourceMappingURL=toabsoluteurl.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mergeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getADALResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BearerTokenFetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SPFxAdalClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(BearerTokenFetchClient, _super);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(SPFxAdalClient, _super);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var token;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "d"])(this, function (_a) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function () {
            var provider;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "d"])(this, function (_a) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*! adal-angular v1.0.17 2018-02-27 */
var AuthenticationContext=function(){"use strict";return AuthenticationContext=function(a){if(this.REQUEST_TYPE={LOGIN:"LOGIN",RENEW_TOKEN:"RENEW_TOKEN",UNKNOWN:"UNKNOWN"},this.RESPONSE_TYPE={ID_TOKEN_TOKEN:"id_token token",TOKEN:"token"},this.CONSTANTS={ACCESS_TOKEN:"access_token",EXPIRES_IN:"expires_in",ID_TOKEN:"id_token",ERROR_DESCRIPTION:"error_description",SESSION_STATE:"session_state",ERROR:"error",STORAGE:{TOKEN_KEYS:"adal.token.keys",ACCESS_TOKEN_KEY:"adal.access.token.key",EXPIRATION_KEY:"adal.expiration.key",STATE_LOGIN:"adal.state.login",STATE_RENEW:"adal.state.renew",NONCE_IDTOKEN:"adal.nonce.idtoken",SESSION_STATE:"adal.session.state",USERNAME:"adal.username",IDTOKEN:"adal.idtoken",ERROR:"adal.error",ERROR_DESCRIPTION:"adal.error.description",LOGIN_REQUEST:"adal.login.request",LOGIN_ERROR:"adal.login.error",RENEW_STATUS:"adal.token.renew.status",ANGULAR_LOGIN_REQUEST:"adal.angular.login.request"},RESOURCE_DELIMETER:"|",CACHE_DELIMETER:"||",LOADFRAME_TIMEOUT:6e3,TOKEN_RENEW_STATUS_CANCELED:"Canceled",TOKEN_RENEW_STATUS_COMPLETED:"Completed",TOKEN_RENEW_STATUS_IN_PROGRESS:"In Progress",LOGGING_LEVEL:{ERROR:0,WARN:1,INFO:2,VERBOSE:3},LEVEL_STRING_MAP:{0:"ERROR:",1:"WARNING:",2:"INFO:",3:"VERBOSE:"},POPUP_WIDTH:483,POPUP_HEIGHT:600},AuthenticationContext.prototype._singletonInstance)return AuthenticationContext.prototype._singletonInstance;if(AuthenticationContext.prototype._singletonInstance=this,this.instance="https://login.microsoftonline.com/",this.config={},this.callback=null,this.popUp=!1,this.isAngular=!1,this._user=null,this._activeRenewals={},this._loginInProgress=!1,this._acquireTokenInProgress=!1,this._renewStates=[],this._callBackMappedToRenewStates={},this._callBacksMappedToRenewStates={},this._openedWindows=[],this._requestType=this.REQUEST_TYPE.LOGIN,window._adalInstance=this,a.displayCall&&"function"!=typeof a.displayCall)throw new Error("displayCall is not a function");if(!a.clientId)throw new Error("clientId is required");this.config=this._cloneConfig(a),void 0===this.config.navigateToLoginRequestUrl&&(this.config.navigateToLoginRequestUrl=!0),this.config.popUp&&(this.popUp=!0),this.config.callback&&"function"==typeof this.config.callback&&(this.callback=this.config.callback),this.config.instance&&(this.instance=this.config.instance),this.config.loginResource||(this.config.loginResource=this.config.clientId),this.config.redirectUri||(this.config.redirectUri=window.location.href.split("?")[0].split("#")[0]),this.config.postLogoutRedirectUri||(this.config.postLogoutRedirectUri=window.location.href.split("?")[0].split("#")[0]),this.config.anonymousEndpoints||(this.config.anonymousEndpoints=[]),this.config.isAngular&&(this.isAngular=this.config.isAngular),this.config.loadFrameTimeout&&(this.CONSTANTS.LOADFRAME_TIMEOUT=this.config.loadFrameTimeout)},"undefined"!=typeof window&&(window.Logging={piiLoggingEnabled:!1,level:0,log:function(a){}}),AuthenticationContext.prototype.login=function(){if(this._loginInProgress)return void this.info("Login in progress");this._loginInProgress=!0;var a=this._guid();this.config.state=a,this._idTokenNonce=this._guid();var b=this._getItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST);b&&""!==b?this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST,""):b=window.location.href,this.verbose("Expected state: "+a+" startPage:"+b),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,b),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,a,!0),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"");var c=this._getNavigateUrl("id_token",null)+"&nonce="+encodeURIComponent(this._idTokenNonce);this.config.displayCall?this.config.displayCall(c):this.popUp?(this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,""),this._renewStates.push(a),this.registerCallback(a,this.config.clientId,this.callback),this._loginPopup(c)):this.promptUser(c)},AuthenticationContext.prototype._openPopup=function(a,b,c,d){try{var e=window.screenLeft?window.screenLeft:window.screenX,f=window.screenTop?window.screenTop:window.screenY,g=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=g/2-c/2+e,j=h/2-d/2+f,k=window.open(a,b,"width="+c+", height="+d+", top="+j+", left="+i);return k.focus&&k.focus(),k}catch(a){return this.warn("Error opening popup, "+a.message),this._loginInProgress=!1,this._acquireTokenInProgress=!1,null}},AuthenticationContext.prototype._handlePopupError=function(a,b,c,d,e){this.warn(d),this._saveItem(this.CONSTANTS.STORAGE.ERROR,c),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,d),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,e),b&&this._activeRenewals[b]&&(this._activeRenewals[b]=null),this._loginInProgress=!1,this._acquireTokenInProgress=!1,a&&a(d,null,c)},AuthenticationContext.prototype._loginPopup=function(a,b,c){var d=this._openPopup(a,"login",this.CONSTANTS.POPUP_WIDTH,this.CONSTANTS.POPUP_HEIGHT),e=c||this.callback;if(null==d){var f="Popup Window is null. This can happen if you are using IE";return void this._handlePopupError(e,b,"Error opening popup",f,f)}if(this._openedWindows.push(d),-1!=this.config.redirectUri.indexOf("#"))var g=this.config.redirectUri.split("#")[0];else var g=this.config.redirectUri;var h=this,i=window.setInterval(function(){if(!d||d.closed||void 0===d.closed){var a="Popup Window closed",c="Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";return h.isAngular&&h._broadcast("adal:popUpClosed",c+h.CONSTANTS.RESOURCE_DELIMETER+a),h._handlePopupError(e,b,a,c,c),void window.clearInterval(i)}try{var f=d.location;if(-1!=encodeURI(f.href).indexOf(encodeURI(g)))return h.isAngular?h._broadcast("adal:popUpHashChanged",f.hash):h.handleWindowCallback(f.hash),window.clearInterval(i),h._loginInProgress=!1,h._acquireTokenInProgress=!1,h.info("Closing popup window"),h._openedWindows=[],void d.close()}catch(a){}},1)},AuthenticationContext.prototype._broadcast=function(a,b){!function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype,window.CustomEvent=a}();var c=new CustomEvent(a,{detail:b});window.dispatchEvent(c)},AuthenticationContext.prototype.loginInProgress=function(){return this._loginInProgress},AuthenticationContext.prototype._hasResource=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);return b&&!this._isEmpty(b)&&b.indexOf(a+this.CONSTANTS.RESOURCE_DELIMETER)>-1},AuthenticationContext.prototype.getCachedToken=function(a){if(!this._hasResource(a))return null;var b=this._getItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a),c=this._getItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a),d=this.config.expireOffsetSeconds||300;return c&&c>this._now()+d?b:(this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a,""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a,0),null)},AuthenticationContext.prototype.getCachedUser=function(){if(this._user)return this._user;var a=this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);return this._user=this._createUser(a),this._user},AuthenticationContext.prototype.registerCallback=function(a,b,c){this._activeRenewals[b]=a,this._callBacksMappedToRenewStates[a]||(this._callBacksMappedToRenewStates[a]=[]);var d=this;this._callBacksMappedToRenewStates[a].push(c),this._callBackMappedToRenewStates[a]||(this._callBackMappedToRenewStates[a]=function(c,e,f,g){d._activeRenewals[b]=null;for(var h=0;h<d._callBacksMappedToRenewStates[a].length;++h)try{d._callBacksMappedToRenewStates[a][h](c,e,f,g)}catch(f){d.warn(f)}d._callBacksMappedToRenewStates[a]=null,d._callBackMappedToRenewStates[a]=null})},AuthenticationContext.prototype._renewToken=function(a,b,c){this.info("renewToken is called for resource:"+a);var d=this._addAdalFrame("adalRenewFrame"+a),e=this._guid()+"|"+a;this.config.state=e,this._renewStates.push(e),this.verbose("Renew token Expected state: "+e),c=c||"token";var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl(c,a),"prompt");c===this.RESPONSE_TYPE.ID_TOKEN_TOKEN&&(this._idTokenNonce=this._guid(),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),f+="&nonce="+encodeURIComponent(this._idTokenNonce)),f+="&prompt=none",f=this._addHintParameters(f),this.registerCallback(e,a,b),this.verbosePii("Navigate to:"+f),d.src="about:blank",this._loadFrameTimeout(f,"adalRenewFrame"+a,a)},AuthenticationContext.prototype._renewIdToken=function(a,b){this.info("renewIdToken is called");var c=this._addAdalFrame("adalIdTokenFrame"),d=this._guid()+"|"+this.config.clientId;this._idTokenNonce=this._guid(),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),this.config.state=d,this._renewStates.push(d),this.verbose("Renew Idtoken Expected state: "+d);var e=null===b||void 0===b?null:this.config.clientId,b=b||"id_token",f=this._urlRemoveQueryStringParameter(this._getNavigateUrl(b,e),"prompt");f+="&prompt=none",f=this._addHintParameters(f),f+="&nonce="+encodeURIComponent(this._idTokenNonce),this.registerCallback(d,this.config.clientId,a),this.verbosePii("Navigate to:"+f),c.src="about:blank",this._loadFrameTimeout(f,"adalIdTokenFrame",this.config.clientId)},AuthenticationContext.prototype._urlContainsQueryStringParameter=function(a,b){return new RegExp("[\\?&]"+a+"=").test(b)},AuthenticationContext.prototype._urlRemoveQueryStringParameter=function(a,b){var c=new RegExp("(\\&"+b+"=)[^&]+");return a=a.replace(c,""),c=new RegExp("("+b+"=)[^&]+&"),a=a.replace(c,""),c=new RegExp("("+b+"=)[^&]+"),a=a.replace(c,"")},AuthenticationContext.prototype._loadFrameTimeout=function(a,b,c){this.verbose("Set loading state to pending for: "+c),this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS+c,this.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS),this._loadFrame(a,b);var d=this;setTimeout(function(){if(d._getItem(d.CONSTANTS.STORAGE.RENEW_STATUS+c)===d.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS){d.verbose("Loading frame has timed out after: "+d.CONSTANTS.LOADFRAME_TIMEOUT/1e3+" seconds for resource "+c);var a=d._activeRenewals[c];a&&d._callBackMappedToRenewStates[a]&&d._callBackMappedToRenewStates[a]("Token renewal operation failed due to timeout",null,"Token Renewal Failed"),d._saveItem(d.CONSTANTS.STORAGE.RENEW_STATUS+c,d.CONSTANTS.TOKEN_RENEW_STATUS_CANCELED)}},d.CONSTANTS.LOADFRAME_TIMEOUT)},AuthenticationContext.prototype._loadFrame=function(a,b){var c=this;c.info("LoadFrame: "+b);var d=b;setTimeout(function(){var b=c._addAdalFrame(d);""!==b.src&&"about:blank"!==b.src||(b.src=a,c._loadFrame(a,d))},500)},AuthenticationContext.prototype.acquireToken=function(a,b){if(this._isEmpty(a))return this.warn("resource is required"),void b("resource is required",null,"resource is required");var c=this.getCachedToken(a);return c?(this.info("Token is already in cache for resource:"+a),void b(null,c,null)):this._user||this.config.extraQueryParameter&&-1!==this.config.extraQueryParameter.indexOf("login_hint")?void(this._activeRenewals[a]?this.registerCallback(this._activeRenewals[a],a,b):(this._requestType=this.REQUEST_TYPE.RENEW_TOKEN,a===this.config.clientId?this._user?(this.verbose("renewing idtoken"),this._renewIdToken(b)):(this.verbose("renewing idtoken and access_token"),this._renewIdToken(b,this.RESPONSE_TYPE.ID_TOKEN_TOKEN)):this._user?(this.verbose("renewing access_token"),this._renewToken(a,b)):(this.verbose("renewing idtoken and access_token"),this._renewToken(a,b,this.RESPONSE_TYPE.ID_TOKEN_TOKEN)))):(this.warn("User login is required"),void b("User login is required",null,"login required"))},AuthenticationContext.prototype.acquireTokenPopup=function(a,b,c,d){if(this._isEmpty(a))return this.warn("resource is required"),void d("resource is required",null,"resource is required");if(!this._user)return this.warn("User login is required"),void d("User login is required",null,"login required");if(this._acquireTokenInProgress)return this.warn("Acquire token interactive is already in progress"),void d("Acquire token interactive is already in progress",null,"Acquire token interactive is already in progress");var e=this._guid()+"|"+a;this.config.state=e,this._renewStates.push(e),this._requestType=this.REQUEST_TYPE.RENEW_TOKEN,this.verbose("Renew token Expected state: "+e);var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",a),"prompt");if(f+="&prompt=select_account",b&&(f+=b),c&&-1===f.indexOf("&claims"))f+="&claims="+encodeURIComponent(c);else if(c&&-1!==f.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");f=this._addHintParameters(f),this._acquireTokenInProgress=!0,this.info("acquireToken interactive is called for the resource "+a),this.registerCallback(e,a,d),this._loginPopup(f,a,d)},AuthenticationContext.prototype.acquireTokenRedirect=function(a,b,c){if(this._isEmpty(a))return this.warn("resource is required"),void d("resource is required",null,"resource is required");var d=this.callback;if(!this._user)return this.warn("User login is required"),void d("User login is required",null,"login required");if(this._acquireTokenInProgress)return this.warn("Acquire token interactive is already in progress"),void d("Acquire token interactive is already in progress",null,"Acquire token interactive is already in progress");var e=this._guid()+"|"+a;this.config.state=e,this.verbose("Renew token Expected state: "+e);var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",a),"prompt");if(f+="&prompt=select_account",b&&(f+=b),c&&-1===f.indexOf("&claims"))f+="&claims="+encodeURIComponent(c);else if(c&&-1!==f.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");f=this._addHintParameters(f),this._acquireTokenInProgress=!0,this.info("acquireToken interactive is called for the resource "+a),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,window.location.href),this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,e,!0),this.promptUser(f)},AuthenticationContext.prototype.promptUser=function(a){a?(this.infoPii("Navigate to:"+a),window.location.replace(a)):this.info("Navigate url is empty")},AuthenticationContext.prototype.clearCache=function(){this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,""),this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST,""),this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,""),this._renewStates=[],this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,""),this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,""),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,"");var a=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);if(!this._isEmpty(a)){a=a.split(this.CONSTANTS.RESOURCE_DELIMETER);for(var b=0;b<a.length&&""!==a[b];b++)this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a[b],""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a[b],0)}this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,"")},AuthenticationContext.prototype.clearCacheForResource=function(a){this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,""),this._hasResource(a)&&(this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a,""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a,0))},AuthenticationContext.prototype.logOut=function(){this.clearCache(),this._user=null;var a;if(this.config.logOutUri)a=this.config.logOutUri;else{var b="common",c="";this.config.tenant&&(b=this.config.tenant),this.config.postLogoutRedirectUri&&(c="post_logout_redirect_uri="+encodeURIComponent(this.config.postLogoutRedirectUri)),a=this.instance+b+"/oauth2/logout?"+c}this.infoPii("Logout navigate to: "+a),this.promptUser(a)},AuthenticationContext.prototype._isEmpty=function(a){return void 0===a||!a||0===a.length},AuthenticationContext.prototype.getUser=function(a){if("function"!=typeof a)throw new Error("callback is not a function");if(this._user)return void a(null,this._user);var b=this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);this._isEmpty(b)?(this.warn("User information is not available"),a("User information is not available",null)):(this.info("User exists in cache: "),this._user=this._createUser(b),a(null,this._user))},AuthenticationContext.prototype._addHintParameters=function(a){if(this._user&&this._user.profile)if(this._user.profile.sid&&-1!==a.indexOf("&prompt=none"))this._urlContainsQueryStringParameter("sid",a)||(a+="&sid="+encodeURIComponent(this._user.profile.sid));else if(this._user.profile.upn&&(this._urlContainsQueryStringParameter("login_hint",a)||(a+="&login_hint="+encodeURIComponent(this._user.profile.upn)),!this._urlContainsQueryStringParameter("domain_hint",a)&&this._user.profile.upn.indexOf("@")>-1)){var b=this._user.profile.upn.split("@");a+="&domain_hint="+encodeURIComponent(b[b.length-1])}return a},AuthenticationContext.prototype._createUser=function(a){var b=null,c=this._extractIdToken(a);return c&&c.hasOwnProperty("aud")&&(c.aud.toLowerCase()===this.config.clientId.toLowerCase()?(b={userName:"",profile:c},c.hasOwnProperty("upn")?b.userName=c.upn:c.hasOwnProperty("email")&&(b.userName=c.email)):this.warn("IdToken has invalid aud field")),b},AuthenticationContext.prototype._getHash=function(a){return a.indexOf("#/")>-1?a=a.substring(a.indexOf("#/")+2):a.indexOf("#")>-1&&(a=a.substring(1)),a},AuthenticationContext.prototype.isCallback=function(a){a=this._getHash(a);var b=this._deserialize(a);return b.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)||b.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)||b.hasOwnProperty(this.CONSTANTS.ID_TOKEN)},AuthenticationContext.prototype.getLoginError=function(){return this._getItem(this.CONSTANTS.STORAGE.LOGIN_ERROR)},AuthenticationContext.prototype.getRequestInfo=function(a){a=this._getHash(a);var b=this._deserialize(a),c={valid:!1,parameters:{},stateMatch:!1,stateResponse:"",requestType:this.REQUEST_TYPE.UNKNOWN};if(b&&(c.parameters=b,b.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)||b.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)||b.hasOwnProperty(this.CONSTANTS.ID_TOKEN))){c.valid=!0;var d="";if(!b.hasOwnProperty("state"))return this.warn("No state returned"),c;if(this.verbose("State: "+b.state),d=b.state,c.stateResponse=d,this._matchState(c))return c;if(!c.stateMatch&&window.parent){c.requestType=this._requestType;for(var e=this._renewStates,f=0;f<e.length;f++)if(e[f]===c.stateResponse){c.stateMatch=!0;break}}}return c},AuthenticationContext.prototype._matchNonce=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN);if(b){b=b.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<b.length;c++)if(b[c]===a.profile.nonce)return!0}return!1},AuthenticationContext.prototype._matchState=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.STATE_LOGIN);if(b){b=b.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<b.length;c++)if(b[c]===a.stateResponse)return a.requestType=this.REQUEST_TYPE.LOGIN,a.stateMatch=!0,!0}var d=this._getItem(this.CONSTANTS.STORAGE.STATE_RENEW);if(d){d=d.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<d.length;c++)if(d[c]===a.stateResponse)return a.requestType=this.REQUEST_TYPE.RENEW_TOKEN,a.stateMatch=!0,!0}return!1},AuthenticationContext.prototype._getResourceFromState=function(a){if(a){var b=a.indexOf("|");if(b>-1&&b+1<a.length)return a.substring(b+1)}return""},AuthenticationContext.prototype.saveTokenFromHash=function(a){this.info("State status:"+a.stateMatch+"; Request type:"+a.requestType),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"");var b=this._getResourceFromState(a.stateResponse);if(a.parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION))this.infoPii("Error :"+a.parameters.error+"; Error description:"+a.parameters[this.CONSTANTS.ERROR_DESCRIPTION]),this._saveItem(this.CONSTANTS.STORAGE.ERROR,a.parameters.error),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,a.parameters[this.CONSTANTS.ERROR_DESCRIPTION]),a.requestType===this.REQUEST_TYPE.LOGIN&&(this._loginInProgress=!1,this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,a.parameters.error_description));else if(a.stateMatch){this.info("State is right"),a.parameters.hasOwnProperty(this.CONSTANTS.SESSION_STATE)&&this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE,a.parameters[this.CONSTANTS.SESSION_STATE]);var c;a.parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)&&(this.info("Fragment has access token"),this._hasResource(b)||(c=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS)||"",this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,c+b+this.CONSTANTS.RESOURCE_DELIMETER)),this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+b,a.parameters[this.CONSTANTS.ACCESS_TOKEN]),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+b,this._expiresIn(a.parameters[this.CONSTANTS.EXPIRES_IN]))),a.parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)&&(this.info("Fragment has id token"),this._loginInProgress=!1,this._user=this._createUser(a.parameters[this.CONSTANTS.ID_TOKEN]),this._user&&this._user.profile?this._matchNonce(this._user)?(this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN,a.parameters[this.CONSTANTS.ID_TOKEN]),b=this.config.loginResource?this.config.loginResource:this.config.clientId,this._hasResource(b)||(c=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS)||"",this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,c+b+this.CONSTANTS.RESOURCE_DELIMETER)),this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+b,a.parameters[this.CONSTANTS.ID_TOKEN]),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+b,this._user.profile.exp)):(this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,"Nonce received: "+this._user.profile.nonce+" is not same as requested: "+this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN)),this._user=null):(a.parameters.error="invalid id_token",a.parameters.error_description="Invalid id_token. id_token: "+a.parameters[this.CONSTANTS.ID_TOKEN],this._saveItem(this.CONSTANTS.STORAGE.ERROR,"invalid id_token"),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"Invalid id_token. id_token: "+a.parameters[this.CONSTANTS.ID_TOKEN])))}else a.parameters.error="Invalid_state",a.parameters.error_description="Invalid_state. state: "+a.stateResponse,this._saveItem(this.CONSTANTS.STORAGE.ERROR,"Invalid_state"),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"Invalid_state. state: "+a.stateResponse);this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS+b,this.CONSTANTS.TOKEN_RENEW_STATUS_COMPLETED)},AuthenticationContext.prototype.getResourceForEndpoint=function(a){if(this.config&&this.config.anonymousEndpoints)for(var b=0;b<this.config.anonymousEndpoints.length;b++)if(a.indexOf(this.config.anonymousEndpoints[b])>-1)return null;if(this.config&&this.config.endpoints)for(var c in this.config.endpoints)if(a.indexOf(c)>-1)return this.config.endpoints[c];return a.indexOf("http://")>-1||a.indexOf("https://")>-1?this._getHostFromUri(a)===this._getHostFromUri(this.config.redirectUri)?this.config.loginResource:null:this.config.loginResource},AuthenticationContext.prototype._getHostFromUri=function(a){var b=String(a).replace(/^(https?:)\/\//,"");return b=b.split("/")[0]},AuthenticationContext.prototype.handleWindowCallback=function(a){if(null==a&&(a=window.location.hash),this.isCallback(a)){var b=null,c=!1;this._openedWindows.length>0&&this._openedWindows[this._openedWindows.length-1].opener&&this._openedWindows[this._openedWindows.length-1].opener._adalInstance?(b=this._openedWindows[this._openedWindows.length-1].opener._adalInstance,c=!0):window.parent&&window.parent._adalInstance&&(b=window.parent._adalInstance);var d,e,f=b.getRequestInfo(a),g=null;e=c||window.parent!==window?b._callBackMappedToRenewStates[f.stateResponse]:b.callback,b.info("Returned from redirect url"),b.saveTokenFromHash(f),f.requestType===this.REQUEST_TYPE.RENEW_TOKEN&&window.parent?(window.parent!==window?b.verbose("Window is in iframe, acquiring token silently"):b.verbose("acquiring token interactive in progress"),d=f.parameters[b.CONSTANTS.ACCESS_TOKEN]||f.parameters[b.CONSTANTS.ID_TOKEN],g=b.CONSTANTS.ACCESS_TOKEN):f.requestType===this.REQUEST_TYPE.LOGIN&&(d=f.parameters[b.CONSTANTS.ID_TOKEN],g=b.CONSTANTS.ID_TOKEN);var h=f.parameters[b.CONSTANTS.ERROR_DESCRIPTION],i=f.parameters[b.CONSTANTS.ERROR];try{e&&e(h,d,i,g)}catch(a){b.error("Error occurred in user defined callback function: "+a)}window.parent!==window||c||(b.config.navigateToLoginRequestUrl?window.location.href=b._getItem(b.CONSTANTS.STORAGE.LOGIN_REQUEST):window.location.hash="")}},AuthenticationContext.prototype._getNavigateUrl=function(a,b){var c="common";this.config.tenant&&(c=this.config.tenant);var d=this.instance+c+"/oauth2/authorize"+this._serialize(a,this.config,b)+this._addLibMetadata();return this.info("Navigate url:"+d),d},AuthenticationContext.prototype._extractIdToken=function(a){var b=this._decodeJwt(a);if(!b)return null;try{var c=b.JWSPayload,d=this._base64DecodeStringUrlSafe(c);return d?JSON.parse(d):(this.info("The returned id_token could not be base64 url safe decoded."),null)}catch(a){this.error("The returned id_token could not be decoded",a)}return null},AuthenticationContext.prototype._base64DecodeStringUrlSafe=function(a){return a=a.replace(/-/g,"+").replace(/_/g,"/"),window.atob?decodeURIComponent(escape(window.atob(a))):decodeURIComponent(escape(this._decode(a)))},AuthenticationContext.prototype._decode=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=String(a).replace(/=+$/,"");var c=a.length;if(c%4==1)throw new Error("The token to be decoded is not correctly encoded.");for(var d,e,f,g,h,i,j,k,l="",m=0;m<c;m+=4){if(d=b.indexOf(a.charAt(m)),e=b.indexOf(a.charAt(m+1)),f=b.indexOf(a.charAt(m+2)),g=b.indexOf(a.charAt(m+3)),m+2===c-1){h=d<<18|e<<12|f<<6,i=h>>16&255,j=h>>8&255,l+=String.fromCharCode(i,j);break}if(m+1===c-1){h=d<<18|e<<12,i=h>>16&255,l+=String.fromCharCode(i);break}h=d<<18|e<<12|f<<6|g,i=h>>16&255,j=h>>8&255,k=255&h,l+=String.fromCharCode(i,j,k)}return l},AuthenticationContext.prototype._decodeJwt=function(a){if(this._isEmpty(a))return null;var b=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/,c=b.exec(a);return!c||c.length<4?(this.warn("The returned id_token is not parseable."),null):{header:c[1],JWSPayload:c[2],JWSSig:c[3]}},AuthenticationContext.prototype._convertUrlSafeToRegularBase64EncodedString=function(a){return a.replace("-","+").replace("_","/")},AuthenticationContext.prototype._serialize=function(a,b,c){var d=[];if(null!==b){d.push("?response_type="+a),d.push("client_id="+encodeURIComponent(b.clientId)),c&&d.push("resource="+encodeURIComponent(c)),d.push("redirect_uri="+encodeURIComponent(b.redirectUri)),d.push("state="+encodeURIComponent(b.state)),b.hasOwnProperty("slice")&&d.push("slice="+encodeURIComponent(b.slice)),b.hasOwnProperty("extraQueryParameter")&&d.push(b.extraQueryParameter);var e=b.correlationId?b.correlationId:this._guid();d.push("client-request-id="+encodeURIComponent(e))}return d.join("&")},AuthenticationContext.prototype._deserialize=function(a){var b,c=/\+/g,d=/([^&=]+)=([^&]*)/g,e=function(a){return decodeURIComponent(a.replace(c," "))},f={};for(b=d.exec(a);b;)f[e(b[1])]=e(b[2]),b=d.exec(a);return f},AuthenticationContext.prototype._decimalToHex=function(a){for(var b=a.toString(16);b.length<2;)b="0"+b;return b},AuthenticationContext.prototype._guid=function(){var a=window.crypto||window.msCrypto;if(a&&a.getRandomValues){var b=new Uint8Array(16);return a.getRandomValues(b),b[6]|=64,b[6]&=79,b[8]|=128,b[8]&=191,this._decimalToHex(b[0])+this._decimalToHex(b[1])+this._decimalToHex(b[2])+this._decimalToHex(b[3])+"-"+this._decimalToHex(b[4])+this._decimalToHex(b[5])+"-"+this._decimalToHex(b[6])+this._decimalToHex(b[7])+"-"+this._decimalToHex(b[8])+this._decimalToHex(b[9])+"-"+this._decimalToHex(b[10])+this._decimalToHex(b[11])+this._decimalToHex(b[12])+this._decimalToHex(b[13])+this._decimalToHex(b[14])+this._decimalToHex(b[15])}for(var c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",d="0123456789abcdef",e=0,f="",g=0;g<36;g++)"-"!==c[g]&&"4"!==c[g]&&(e=16*Math.random()|0),"x"===c[g]?f+=d[e]:"y"===c[g]?(e&=3,e|=8,f+=d[e]):f+=c[g];return f},AuthenticationContext.prototype._expiresIn=function(a){return a||(a=3599),this._now()+parseInt(a,10)},AuthenticationContext.prototype._now=function(){return Math.round((new Date).getTime()/1e3)},AuthenticationContext.prototype._addAdalFrame=function(a){if(void 0!==a){this.info("Add adal frame to document:"+a);var b=document.getElementById(a);if(!b){if(document.createElement&&document.documentElement&&(window.opera||-1===window.navigator.userAgent.indexOf("MSIE 5.0"))){var c=document.createElement("iframe");c.setAttribute("id",a),c.setAttribute("aria-hidden","true"),c.style.visibility="hidden",c.style.position="absolute",c.style.width=c.style.height=c.borderWidth="0px",b=document.getElementsByTagName("body")[0].appendChild(c)}else document.body&&document.body.insertAdjacentHTML&&document.body.insertAdjacentHTML("beforeEnd",'<iframe name="'+a+'" id="'+a+'" style="display:none"></iframe>');window.frames&&window.frames[a]&&(b=window.frames[a])}return b}},AuthenticationContext.prototype._saveItem=function(a,b,c){if(this.config&&this.config.cacheLocation&&"localStorage"===this.config.cacheLocation){if(!this._supportsLocalStorage())return this.info("Local storage is not supported"),!1;if(c){var d=this._getItem(a)||"";localStorage.setItem(a,d+b+this.CONSTANTS.CACHE_DELIMETER)}else localStorage.setItem(a,b);return!0}return this._supportsSessionStorage()?(sessionStorage.setItem(a,b),!0):(this.info("Session storage is not supported"),!1)},AuthenticationContext.prototype._getItem=function(a){return this.config&&this.config.cacheLocation&&"localStorage"===this.config.cacheLocation?this._supportsLocalStorage()?localStorage.getItem(a):(this.info("Local storage is not supported"),null):this._supportsSessionStorage()?sessionStorage.getItem(a):(this.info("Session storage is not supported"),null)},AuthenticationContext.prototype._supportsLocalStorage=function(){try{return!!window.localStorage&&(window.localStorage.setItem("storageTest","A"),"A"==window.localStorage.getItem("storageTest")&&(window.localStorage.removeItem("storageTest"),!window.localStorage.getItem("storageTest")))}catch(a){return!1}},AuthenticationContext.prototype._supportsSessionStorage=function(){try{return!!window.sessionStorage&&(window.sessionStorage.setItem("storageTest","A"),"A"==window.sessionStorage.getItem("storageTest")&&(window.sessionStorage.removeItem("storageTest"),!window.sessionStorage.getItem("storageTest")))}catch(a){return!1}},AuthenticationContext.prototype._cloneConfig=function(a){if(null===a||"object"!=typeof a)return a;var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},AuthenticationContext.prototype._addLibMetadata=function(){return"&x-client-SKU=Js&x-client-Ver="+this._libVersion()},AuthenticationContext.prototype.log=function(a,b,c,d){if(a<=Logging.level){if(!Logging.piiLoggingEnabled&&d)return;var e=(new Date).toUTCString(),f="";f=this.config.correlationId?e+":"+this.config.correlationId+"-"+this._libVersion()+"-"+this.CONSTANTS.LEVEL_STRING_MAP[a]+" "+b:e+":"+this._libVersion()+"-"+this.CONSTANTS.LEVEL_STRING_MAP[a]+" "+b,c&&(f+="\nstack:\n"+c.stack),Logging.log(f)}},AuthenticationContext.prototype.error=function(a,b){this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR,a,b)},AuthenticationContext.prototype.warn=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.WARN,a,null)},AuthenticationContext.prototype.info=function(a){
this.log(this.CONSTANTS.LOGGING_LEVEL.INFO,a,null)},AuthenticationContext.prototype.verbose=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE,a,null)},AuthenticationContext.prototype.errorPii=function(a,b){this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR,a,b,!0)},AuthenticationContext.prototype.warnPii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.WARN,a,null,!0)},AuthenticationContext.prototype.infoPii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.INFO,a,null,!0)},AuthenticationContext.prototype.verbosePii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE,a,null,!0)},AuthenticationContext.prototype._libVersion=function(){return"1.0.17"}, true&&module.exports&&(module.exports=AuthenticationContext,module.exports.inject=function(a){return new AuthenticationContext(a)}),AuthenticationContext}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var all_namespaceObject = {};
__webpack_require__.r(all_namespaceObject);
__webpack_require__.d(all_namespaceObject, "App", function() { return App; });
__webpack_require__.d(all_namespaceObject, "AppCatalog", function() { return AppCatalog; });
__webpack_require__.d(all_namespaceObject, "Attachment", function() { return Attachment; });
__webpack_require__.d(all_namespaceObject, "Attachments", function() { return Attachments; });
__webpack_require__.d(all_namespaceObject, "ClientsidePageFromFile", function() { return ClientsidePageFromFile; });
__webpack_require__.d(all_namespaceObject, "CreateClientsidePage", function() { return CreateClientsidePage; });
__webpack_require__.d(all_namespaceObject, "CanvasColumn", function() { return types_CanvasColumn; });
__webpack_require__.d(all_namespaceObject, "CanvasSection", function() { return types_CanvasSection; });
__webpack_require__.d(all_namespaceObject, "ClientsideText", function() { return types_ClientsideText; });
__webpack_require__.d(all_namespaceObject, "ClientsideWebpart", function() { return types_ClientsideWebpart; });
__webpack_require__.d(all_namespaceObject, "ColumnControl", function() { return types_ColumnControl; });
__webpack_require__.d(all_namespaceObject, "PromotedState", function() { return PromotedState; });
__webpack_require__.d(all_namespaceObject, "Comment", function() { return Comment; });
__webpack_require__.d(all_namespaceObject, "Comments", function() { return Comments; });
__webpack_require__.d(all_namespaceObject, "Replies", function() { return Replies; });
__webpack_require__.d(all_namespaceObject, "ContentType", function() { return ContentType; });
__webpack_require__.d(all_namespaceObject, "ContentTypes", function() { return ContentTypes; });
__webpack_require__.d(all_namespaceObject, "FieldLink", function() { return FieldLink; });
__webpack_require__.d(all_namespaceObject, "FieldLinks", function() { return FieldLinks; });
__webpack_require__.d(all_namespaceObject, "Feature", function() { return Feature; });
__webpack_require__.d(all_namespaceObject, "Features", function() { return Features; });
__webpack_require__.d(all_namespaceObject, "Fields", function() { return Fields; });
__webpack_require__.d(all_namespaceObject, "Field", function() { return Field; });
__webpack_require__.d(all_namespaceObject, "AddFieldOptions", function() { return AddFieldOptions; });
__webpack_require__.d(all_namespaceObject, "CalendarType", function() { return CalendarType; });
__webpack_require__.d(all_namespaceObject, "ChoiceFieldFormatType", function() { return ChoiceFieldFormatType; });
__webpack_require__.d(all_namespaceObject, "DateTimeFieldFormatType", function() { return DateTimeFieldFormatType; });
__webpack_require__.d(all_namespaceObject, "DateTimeFieldFriendlyFormatType", function() { return DateTimeFieldFriendlyFormatType; });
__webpack_require__.d(all_namespaceObject, "FieldTypes", function() { return FieldTypes; });
__webpack_require__.d(all_namespaceObject, "FieldUserSelectionMode", function() { return FieldUserSelectionMode; });
__webpack_require__.d(all_namespaceObject, "UrlFieldFormatType", function() { return UrlFieldFormatType; });
__webpack_require__.d(all_namespaceObject, "File", function() { return File; });
__webpack_require__.d(all_namespaceObject, "Files", function() { return Files; });
__webpack_require__.d(all_namespaceObject, "CheckinType", function() { return CheckinType; });
__webpack_require__.d(all_namespaceObject, "MoveOperations", function() { return MoveOperations; });
__webpack_require__.d(all_namespaceObject, "TemplateFileType", function() { return TemplateFileType; });
__webpack_require__.d(all_namespaceObject, "Version", function() { return Version; });
__webpack_require__.d(all_namespaceObject, "Versions", function() { return Versions; });
__webpack_require__.d(all_namespaceObject, "Folder", function() { return Folder; });
__webpack_require__.d(all_namespaceObject, "Folders", function() { return Folders; });
__webpack_require__.d(all_namespaceObject, "Form", function() { return Form; });
__webpack_require__.d(all_namespaceObject, "Forms", function() { return Forms; });
__webpack_require__.d(all_namespaceObject, "HubSite", function() { return HubSite; });
__webpack_require__.d(all_namespaceObject, "HubSites", function() { return HubSites; });
__webpack_require__.d(all_namespaceObject, "Item", function() { return Item; });
__webpack_require__.d(all_namespaceObject, "Items", function() { return Items; });
__webpack_require__.d(all_namespaceObject, "ItemVersion", function() { return ItemVersion; });
__webpack_require__.d(all_namespaceObject, "ItemVersions", function() { return ItemVersions; });
__webpack_require__.d(all_namespaceObject, "PagedItemCollection", function() { return types_PagedItemCollection; });
__webpack_require__.d(all_namespaceObject, "List", function() { return List; });
__webpack_require__.d(all_namespaceObject, "Lists", function() { return Lists; });
__webpack_require__.d(all_namespaceObject, "ControlMode", function() { return ControlMode; });
__webpack_require__.d(all_namespaceObject, "IRenderListDataOptions", function() { return IRenderListDataOptions; });
__webpack_require__.d(all_namespaceObject, "Navigation", function() { return Navigation; });
__webpack_require__.d(all_namespaceObject, "NavigationNode", function() { return NavigationNode; });
__webpack_require__.d(all_namespaceObject, "NavigationNodes", function() { return NavigationNodes; });
__webpack_require__.d(all_namespaceObject, "NavigationService", function() { return NavigationService; });
__webpack_require__.d(all_namespaceObject, "Profiles", function() { return Profiles; });
__webpack_require__.d(all_namespaceObject, "UrlZone", function() { return UrlZone; });
__webpack_require__.d(all_namespaceObject, "RegionalSettings", function() { return RegionalSettings; });
__webpack_require__.d(all_namespaceObject, "TimeZone", function() { return TimeZone; });
__webpack_require__.d(all_namespaceObject, "TimeZones", function() { return TimeZones; });
__webpack_require__.d(all_namespaceObject, "RelatedItemManager", function() { return RelatedItemManager; });
__webpack_require__.d(all_namespaceObject, "SearchQueryBuilder", function() { return SearchQueryBuilder; });
__webpack_require__.d(all_namespaceObject, "SearchResults", function() { return query_SearchResults; });
__webpack_require__.d(all_namespaceObject, "Search", function() { return Search; });
__webpack_require__.d(all_namespaceObject, "Suggest", function() { return Suggest; });
__webpack_require__.d(all_namespaceObject, "RoleAssignment", function() { return RoleAssignment; });
__webpack_require__.d(all_namespaceObject, "RoleAssignments", function() { return RoleAssignments; });
__webpack_require__.d(all_namespaceObject, "RoleDefinition", function() { return RoleDefinition; });
__webpack_require__.d(all_namespaceObject, "RoleDefinitions", function() { return RoleDefinitions; });
__webpack_require__.d(all_namespaceObject, "PermissionKind", function() { return PermissionKind; });
__webpack_require__.d(all_namespaceObject, "SPSharedObjectType", function() { return SPSharedObjectType; });
__webpack_require__.d(all_namespaceObject, "SharingDomainRestrictionMode", function() { return SharingDomainRestrictionMode; });
__webpack_require__.d(all_namespaceObject, "SharingLinkKind", function() { return SharingLinkKind; });
__webpack_require__.d(all_namespaceObject, "SharingOperationStatusCode", function() { return SharingOperationStatusCode; });
__webpack_require__.d(all_namespaceObject, "SharingRole", function() { return SharingRole; });
__webpack_require__.d(all_namespaceObject, "RoleType", function() { return RoleType; });
__webpack_require__.d(all_namespaceObject, "SiteDesigns", function() { return SiteDesigns; });
__webpack_require__.d(all_namespaceObject, "SiteGroup", function() { return SiteGroup; });
__webpack_require__.d(all_namespaceObject, "SiteGroups", function() { return SiteGroups; });
__webpack_require__.d(all_namespaceObject, "SiteScripts", function() { return SiteScripts; });
__webpack_require__.d(all_namespaceObject, "SiteUser", function() { return SiteUser; });
__webpack_require__.d(all_namespaceObject, "SiteUsers", function() { return SiteUsers; });
__webpack_require__.d(all_namespaceObject, "Site", function() { return Site; });
__webpack_require__.d(all_namespaceObject, "MySocial", function() { return MySocial; });
__webpack_require__.d(all_namespaceObject, "Social", function() { return Social; });
__webpack_require__.d(all_namespaceObject, "SocialActorType", function() { return SocialActorType; });
__webpack_require__.d(all_namespaceObject, "SocialActorTypes", function() { return SocialActorTypes; });
__webpack_require__.d(all_namespaceObject, "SocialFollowResult", function() { return SocialFollowResult; });
__webpack_require__.d(all_namespaceObject, "SocialStatusCode", function() { return SocialStatusCode; });
__webpack_require__.d(all_namespaceObject, "Utilities", function() { return Utilities; });
__webpack_require__.d(all_namespaceObject, "Subscription", function() { return Subscription; });
__webpack_require__.d(all_namespaceObject, "Subscriptions", function() { return Subscriptions; });
__webpack_require__.d(all_namespaceObject, "UserCustomAction", function() { return UserCustomAction; });
__webpack_require__.d(all_namespaceObject, "UserCustomActions", function() { return UserCustomActions; });
__webpack_require__.d(all_namespaceObject, "UserCustomActionRegistrationType", function() { return UserCustomActionRegistrationType; });
__webpack_require__.d(all_namespaceObject, "UserCustomActionScope", function() { return UserCustomActionScope; });
__webpack_require__.d(all_namespaceObject, "View", function() { return View; });
__webpack_require__.d(all_namespaceObject, "ViewFields", function() { return ViewFields; });
__webpack_require__.d(all_namespaceObject, "Views", function() { return Views; });
__webpack_require__.d(all_namespaceObject, "ViewScope", function() { return ViewScope; });
__webpack_require__.d(all_namespaceObject, "WebPartsPersonalizationScope", function() { return WebPartsPersonalizationScope; });
__webpack_require__.d(all_namespaceObject, "WebPartDefinitions", function() { return WebPartDefinitions; });
__webpack_require__.d(all_namespaceObject, "WebPartDefinition", function() { return WebPartDefinition; });
__webpack_require__.d(all_namespaceObject, "LimitedWebPartManager", function() { return LimitedWebPartManager; });
__webpack_require__.d(all_namespaceObject, "Web", function() { return Web; });
__webpack_require__.d(all_namespaceObject, "Webs", function() { return Webs; });
__webpack_require__.d(all_namespaceObject, "sp", function() { return all_sp; });
__webpack_require__.d(all_namespaceObject, "SortDirection", function() { return SortDirection; });
__webpack_require__.d(all_namespaceObject, "ReorderingRuleMatchType", function() { return ReorderingRuleMatchType; });
__webpack_require__.d(all_namespaceObject, "QueryPropertyValueType", function() { return QueryPropertyValueType; });
__webpack_require__.d(all_namespaceObject, "SearchBuiltInSourceId", function() { return SearchBuiltInSourceId; });
__webpack_require__.d(all_namespaceObject, "SharePointQueryableInstance", function() { return SharePointQueryableInstance; });
__webpack_require__.d(all_namespaceObject, "SharePointQueryableCollection", function() { return SharePointQueryableCollection; });
__webpack_require__.d(all_namespaceObject, "SharePointQueryable", function() { return SharePointQueryable; });
__webpack_require__.d(all_namespaceObject, "spInvokableFactory", function() { return spInvokableFactory; });
__webpack_require__.d(all_namespaceObject, "SPBatch", function() { return batch_SPBatch; });
__webpack_require__.d(all_namespaceObject, "SPHttpClient", function() { return sphttpclient_SPHttpClient; });
__webpack_require__.d(all_namespaceObject, "SPRest", function() { return rest_SPRest; });
__webpack_require__.d(all_namespaceObject, "toAbsoluteUrl", function() { return toabsoluteurl["a" /* toAbsoluteUrl */]; });
__webpack_require__.d(all_namespaceObject, "extractWebUrl", function() { return extractWebUrl; });
__webpack_require__.d(all_namespaceObject, "objectToSPKeyValueCollection", function() { return objectToSPKeyValueCollection; });
__webpack_require__.d(all_namespaceObject, "stripInvalidFileFolderChars", function() { return stripInvalidFileFolderChars; });
__webpack_require__.d(all_namespaceObject, "containsInvalidFileFolderChars", function() { return containsInvalidFileFolderChars; });
__webpack_require__.d(all_namespaceObject, "defaultPath", function() { return defaultPath; });
__webpack_require__.d(all_namespaceObject, "spGet", function() { return spGet; });
__webpack_require__.d(all_namespaceObject, "spPost", function() { return spPost; });
__webpack_require__.d(all_namespaceObject, "spDelete", function() { return spDelete; });
__webpack_require__.d(all_namespaceObject, "spPatch", function() { return spPatch; });
__webpack_require__.d(all_namespaceObject, "spPostDelete", function() { return spPostDelete; });
__webpack_require__.d(all_namespaceObject, "spPostDeleteETag", function() { return spPostDeleteETag; });
__webpack_require__.d(all_namespaceObject, "PrincipalType", function() { return PrincipalType; });
__webpack_require__.d(all_namespaceObject, "PrincipalSource", function() { return PrincipalSource; });
__webpack_require__.d(all_namespaceObject, "PageType", function() { return PageType; });
var presets_all_namespaceObject = {};
__webpack_require__.r(presets_all_namespaceObject);
__webpack_require__.d(presets_all_namespaceObject, "graph", function() { return graph; });
__webpack_require__.d(presets_all_namespaceObject, "GraphRest", function() { return rest_GraphRest; });
__webpack_require__.d(presets_all_namespaceObject, "Attachment", function() { return graph_attachments_types_Attachment; });
__webpack_require__.d(presets_all_namespaceObject, "Attachments", function() { return graph_attachments_types_Attachments; });
__webpack_require__.d(presets_all_namespaceObject, "Calendar", function() { return Calendar; });
__webpack_require__.d(presets_all_namespaceObject, "Calendars", function() { return Calendars; });
__webpack_require__.d(presets_all_namespaceObject, "Event", function() { return Event; });
__webpack_require__.d(presets_all_namespaceObject, "Events", function() { return Events; });
__webpack_require__.d(presets_all_namespaceObject, "Contact", function() { return Contact; });
__webpack_require__.d(presets_all_namespaceObject, "ContactFolder", function() { return ContactFolder; });
__webpack_require__.d(presets_all_namespaceObject, "ContactFolders", function() { return ContactFolders; });
__webpack_require__.d(presets_all_namespaceObject, "Contacts", function() { return Contacts; });
__webpack_require__.d(presets_all_namespaceObject, "Conversation", function() { return Conversation; });
__webpack_require__.d(presets_all_namespaceObject, "Conversations", function() { return Conversations; });
__webpack_require__.d(presets_all_namespaceObject, "Post", function() { return Post; });
__webpack_require__.d(presets_all_namespaceObject, "Posts", function() { return Posts; });
__webpack_require__.d(presets_all_namespaceObject, "Senders", function() { return Senders; });
__webpack_require__.d(presets_all_namespaceObject, "Thread", function() { return Thread; });
__webpack_require__.d(presets_all_namespaceObject, "Threads", function() { return Threads; });
__webpack_require__.d(presets_all_namespaceObject, "DirectoryObjectTypes", function() { return DirectoryObjectTypes; });
__webpack_require__.d(presets_all_namespaceObject, "DirectoryObject", function() { return DirectoryObject; });
__webpack_require__.d(presets_all_namespaceObject, "DirectoryObjects", function() { return DirectoryObjects; });
__webpack_require__.d(presets_all_namespaceObject, "Group", function() { return Group; });
__webpack_require__.d(presets_all_namespaceObject, "GroupType", function() { return GroupType; });
__webpack_require__.d(presets_all_namespaceObject, "Groups", function() { return Groups; });
__webpack_require__.d(presets_all_namespaceObject, "Member", function() { return Member; });
__webpack_require__.d(presets_all_namespaceObject, "Members", function() { return Members; });
__webpack_require__.d(presets_all_namespaceObject, "MailFolder", function() { return MailFolder; });
__webpack_require__.d(presets_all_namespaceObject, "MailFolders", function() { return MailFolders; });
__webpack_require__.d(presets_all_namespaceObject, "MailboxSettings", function() { return MailboxSettings; });
__webpack_require__.d(presets_all_namespaceObject, "Message", function() { return Message; });
__webpack_require__.d(presets_all_namespaceObject, "Messages", function() { return Messages; });
__webpack_require__.d(presets_all_namespaceObject, "Drive", function() { return Drive; });
__webpack_require__.d(presets_all_namespaceObject, "DriveItem", function() { return DriveItem; });
__webpack_require__.d(presets_all_namespaceObject, "DriveItems", function() { return DriveItems; });
__webpack_require__.d(presets_all_namespaceObject, "Drives", function() { return Drives; });
__webpack_require__.d(presets_all_namespaceObject, "Root", function() { return Root; });
__webpack_require__.d(presets_all_namespaceObject, "Notebook", function() { return Notebook; });
__webpack_require__.d(presets_all_namespaceObject, "Notebooks", function() { return Notebooks; });
__webpack_require__.d(presets_all_namespaceObject, "OneNote", function() { return OneNote; });
__webpack_require__.d(presets_all_namespaceObject, "Section", function() { return Section; });
__webpack_require__.d(presets_all_namespaceObject, "Sections", function() { return Sections; });
__webpack_require__.d(presets_all_namespaceObject, "Photo", function() { return Photo; });
__webpack_require__.d(presets_all_namespaceObject, "Bucket", function() { return Bucket; });
__webpack_require__.d(presets_all_namespaceObject, "Buckets", function() { return Buckets; });
__webpack_require__.d(presets_all_namespaceObject, "Plan", function() { return Plan; });
__webpack_require__.d(presets_all_namespaceObject, "Planner", function() { return Planner; });
__webpack_require__.d(presets_all_namespaceObject, "Plans", function() { return Plans; });
__webpack_require__.d(presets_all_namespaceObject, "Task", function() { return Task; });
__webpack_require__.d(presets_all_namespaceObject, "Tasks", function() { return Tasks; });
__webpack_require__.d(presets_all_namespaceObject, "Subscription", function() { return graph_subscriptions_types_Subscription; });
__webpack_require__.d(presets_all_namespaceObject, "Subscriptions", function() { return graph_subscriptions_types_Subscriptions; });
__webpack_require__.d(presets_all_namespaceObject, "Channel", function() { return Channel; });
__webpack_require__.d(presets_all_namespaceObject, "Channels", function() { return Channels; });
__webpack_require__.d(presets_all_namespaceObject, "Tab", function() { return Tab; });
__webpack_require__.d(presets_all_namespaceObject, "Tabs", function() { return Tabs; });
__webpack_require__.d(presets_all_namespaceObject, "Team", function() { return Team; });
__webpack_require__.d(presets_all_namespaceObject, "Teams", function() { return Teams; });
__webpack_require__.d(presets_all_namespaceObject, "User", function() { return User; });
__webpack_require__.d(presets_all_namespaceObject, "Users", function() { return Users; });

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
     * Clears the subscribers collection, returning the collection before modifiction
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

//# sourceMappingURL=listeners.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/logging/index.js


//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/common/index.js + 3 modules
var common = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@pnp/config-store/configuration.js

/**
 * Class used to manage the current application settings
 *
 */
var configuration_Settings = /** @class */ (function () {
    /**
     * Creates a new instance of the settings class
     *
     * @constructor
     */
    function Settings(_settings) {
        if (_settings === void 0) { _settings = new Map(); }
        this._settings = _settings;
    }
    /**
     * Adds a new single setting, or overwrites a previous setting with the same key
     *
     * @param {string} key The key used to store this setting
     * @param {string} value The setting value to store
     */
    Settings.prototype.add = function (key, value) {
        this._settings.set(key, value);
    };
    /**
     * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
     *
     * @param {string} key The key used to store this setting
     * @param {any} value The setting value to store
     */
    Settings.prototype.addJSON = function (key, value) {
        this._settings.set(key, Object(common["t" /* jsS */])(value));
    };
    /**
     * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
     *
     * @param {ITypedHash<any>} hash The set of values to add
     */
    Settings.prototype.apply = function (hash) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this._settings = Object(common["v" /* mergeMaps */])(_this._settings, Object(common["y" /* objectToMap */])(hash));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Loads configuration settings into the collection from the supplied provider and returns a Promise
     *
     * @param {IConfigurationProvider} provider The provider from which we will load the settings
     */
    Settings.prototype.load = function (provider) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            provider.getConfiguration().then(function (value) {
                _this._settings = Object(common["v" /* mergeMaps */])(_this._settings, Object(common["y" /* objectToMap */])(value));
                resolve();
            }).catch(reject);
        });
    };
    /**
     * Gets a value from the configuration
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {string} string value from the configuration
     */
    Settings.prototype.get = function (key) {
        return this._settings.get(key) || null;
    };
    /**
     * Gets a JSON value, rehydrating the stored string to the original object
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {any} object from the configuration
     */
    Settings.prototype.getJSON = function (key) {
        var o = this.get(key);
        if (o === undefined || o === null) {
            return o;
        }
        return JSON.parse(o);
    };
    return Settings;
}());

//# sourceMappingURL=configuration.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/cachingConfigurationProvider.js

/**
 * A caching provider which can wrap other non-caching providers
 *
 */
var cachingConfigurationProvider_CachingConfigurationProvider = /** @class */ (function () {
    /**
     * Creates a new caching configuration provider
     * @constructor
     * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
     * @param {string} cacheKey Key that will be used to store cached items to the cache
     * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
     */
    function CachingConfigurationProvider(wrappedProvider, cacheKey, cacheStore) {
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
    CachingConfigurationProvider.prototype.getWrappedProvider = function () {
        return this.wrappedProvider;
    };
    /**
     * Loads the configuration values either from the cache or from the wrapped provider
     *
     * @return {Promise<ITypedHash<string>>} Promise of loaded configuration values
     */
    CachingConfigurationProvider.prototype.getConfiguration = function () {
        var _this = this;
        // Cache not available, pass control to the wrapped provider
        if ((!this.store) || (!this.store.enabled)) {
            return this.wrappedProvider.getConfiguration();
        }
        return this.store.getOrPut(this.cacheKey, function () {
            return _this.wrappedProvider.getConfiguration().then(function (providedConfig) {
                _this.store.put(_this.cacheKey, providedConfig);
                return providedConfig;
            });
        });
    };
    CachingConfigurationProvider.prototype.selectPnPCache = function () {
        var pnpCache = new common["c" /* PnPClientStorage */]();
        if ((pnpCache.local) && (pnpCache.local.enabled)) {
            return pnpCache.local;
        }
        if ((pnpCache.session) && (pnpCache.session.enabled)) {
            return pnpCache.session;
        }
        throw Error("Cannot create a caching configuration provider since cache is not available.");
    };
    return CachingConfigurationProvider;
}());
/* harmony default export */ var cachingConfigurationProvider = (cachingConfigurationProvider_CachingConfigurationProvider);
//# sourceMappingURL=cachingConfigurationProvider.js.map
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@pnp/odata/batch.js

var batch_Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = Object(common["m" /* getGUID */])(); }
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
// CONCATENATED MODULE: ./node_modules/@pnp/odata/caching.js

var caching_CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        if (storeName === void 0) { storeName = common["e" /* RuntimeConfig */].defaultCachingStore; }
        if (expiration === void 0) { expiration = Object(common["j" /* dateAdd */])(new Date(), "second", common["e" /* RuntimeConfig */].defaultCachingTimeoutSeconds); }
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
    CachingOptions.storage = new common["c" /* PnPClientStorage */]();
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
//# sourceMappingURL=add-prop.js.map
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
    if (Object(common["q" /* isArray */])(e)) {
        // @ts-ignore
        a.push.apply(a, Object(tslib_es6["e" /* __spread */])(e));
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
            extensions.push.apply(extensions, Object(tslib_es6["e" /* __spread */])(Reflect.get(target, ObjExtensionsSym)));
        }
        // second we need to process any global extensions
        extensions.push.apply(extensions, Object(tslib_es6["e" /* __spread */])(globaExtensions));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if (Object(common["r" /* isFunc */])(extension)) {
                // this extension is a function which we call
                result = extension.apply(void 0, Object(tslib_es6["e" /* __spread */])([op, target], rest));
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op).apply(void 0, Object(tslib_es6["e" /* __spread */])([target], rest));
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or.apply(void 0, Object(tslib_es6["e" /* __spread */])([target], rest));
}
//# sourceMappingURL=invokable-extensions.js.map
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
            }, new (constructor.bind.apply(constructor, Object(tslib_es6["e" /* __spread */])([void 0], as)))());
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        if (common["e" /* RuntimeConfig */].ie11) {
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
        if (Object(common["p" /* hOP */])(json, "d")) {
            if (Object(common["p" /* hOP */])(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (Object(common["p" /* hOP */])(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var parsers_TextParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(parsers_ODataParser));

var parsers_BlobParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(parsers_ODataParser));

var parsers_JSONParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(parsers_ODataParser));

var parsers_BufferParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (Object(common["r" /* isFunc */])(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(parsers_ODataParser));

var parsers_LambdaParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(LambdaParser, _super);
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
    Object(tslib_es6["c" /* __extends */])(HttpRequestError, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var t;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
// CONCATENATED MODULE: ./node_modules/@pnp/odata/queryable.js



function cloneQueryableData(source) {
    var s = JSON.stringify(source, function (key, value) {
        switch (key) {
            case "query":
                return JSON.stringify(Object(tslib_es6["e" /* __spread */])(value));
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
        Object(common["w" /* mergeOptions */])(this.data.options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        Object(common["w" /* mergeOptions */])(this.data.options, o.data.options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!common["e" /* RuntimeConfig */].globalCacheDisable) {
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
        this.data.url = Object(common["i" /* combine */])(this.data.url, pathPart);
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
        if (Object(common["x" /* objectDefinedNotNull */])(batch)) {
            this.data.batch = batch;
        }
        return this;
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    Queryable.prototype.addBatchDependency = function () {
        if (Object(common["x" /* objectDefinedNotNull */])(this.data.batch)) {
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
            return Object(common["x" /* objectDefinedNotNull */])(this.data.batch);
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
            if (!alwaysRun && args.length > 0 && Object(common["p" /* hOP */])(args[0], "hasResult") && args[0].hasResult) {
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
                    cacheOptions = Object(common["h" /* assign */])(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        // ensure we clear any held batch dependency we are resolving from the cache
                        Logger.log({
                            data: Logger.activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        if (Object(common["r" /* isFunc */])(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (Object(common["p" /* hOP */])(context.parser, "hydrate")) {
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
                // we are in a batch, so add to batch, remove dependency, and resolve with the batch's promise
                var p = context.batch.add(context.url, context.method, context.options, context.parser, context.requestId);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (Object(common["r" /* isFunc */])(context.batchDependency)) {
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
                var opts = Object(common["h" /* assign */])(context.options || {}, { method: context.method });
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
    Object(tslib_es6["b" /* __decorate */])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    Object(tslib_es6["b" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    Object(tslib_es6["b" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    Object(tslib_es6["b" /* __decorate */])([
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
                    batch: o.batch || null,
                    batchDependency: null,
                    cachingOptions: null,
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: Object(common["x" /* objectDefinedNotNull */])(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new parsers_ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: Object(common["m" /* getGUID */])(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(getDefaultPipeline());
//# sourceMappingURL=pipeline-binder.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/request-builders.js

function body(o, previous) {
    return Object.assign({ body: Object(common["t" /* jsS */])(o) }, previous);
}
function request_builders_headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/odata/index.js










//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/metadata.js
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
//# sourceMappingURL=metadata.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/sp/splibconfig.js
var splibconfig = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/extractweburl.js

function extractWebUrl(candidateUrl) {
    if (Object(common["A" /* stringIsNullOrEmpty */])(candidateUrl)) {
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
//# sourceMappingURL=extractweburl.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/telemetry.js



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
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
                return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                    this.configure(request_builders_headers({ "X-PnPjs-Tracking": name }));
                    return [2 /*return*/, originalMethod.apply(this, args)];
                });
            });
        };
        return descriptor;
    };
}
tag.getClientTag = function (h, deleteFromCollection) {
    if (deleteFromCollection === void 0) { deleteFromCollection = true; }
    if (h.has("X-PnPjs-Tracking")) {
        var methodName = h.get("X-PnPjs-Tracking");
        if (deleteFromCollection) {
            h.delete("X-PnPjs-Tracking");
        }
        if (!Object(common["A" /* stringIsNullOrEmpty */])(methodName)) {
            return methodName;
        }
    }
    return "";
};
tag.configure = function (o, name) {
    return o.configure(request_builders_headers({ "X-PnPjs-Tracking": name }));
};
tag.isTagged = function (o) {
    return o.data.options.headers && o.data.options.headers["X-PnPjs-Tracking"];
};
//# sourceMappingURL=telemetry.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sphttpclient.js






var sphttpclient_SPHttpClient = /** @class */ (function () {
    function SPHttpClient(_impl) {
        if (_impl === void 0) { _impl = splibconfig["a" /* SPRuntimeConfig */].fetchClientFactory(); }
        this._impl = _impl;
        this._digestCache = getDigestFactory(this);
    }
    SPHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var opts, headers, methodName, clientTag, digest;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = Object(common["h" /* assign */])(options, { cache: "no-cache", credentials: "same-origin" }, true);
                        headers = new Headers();
                        // first we add the global headers so they can be overwritten by any passed in locally to this call
                        Object(common["u" /* mergeHeaders */])(headers, splibconfig["a" /* SPRuntimeConfig */].headers);
                        // second we add the local options so we can overwrite the globals
                        Object(common["u" /* mergeHeaders */])(headers, options.headers);
                        // lastly we apply any default headers we need that may not exist
                        if (!headers.has("Accept")) {
                            headers.append("Accept", "application/json");
                        }
                        if (!headers.has("Content-Type")) {
                            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                        }
                        if (!headers.has("X-ClientService-ClientTag")) {
                            methodName = tag.getClientTag(headers);
                            clientTag = "PnPCoreJS:2.0.0:" + methodName;
                            if (clientTag.length > 32) {
                                clientTag = clientTag.substr(0, 32);
                            }
                            headers.append("X-ClientService-ClientTag", clientTag);
                        }
                        if (!headers.has("User-Agent")) {
                            // this marks the requests for understanding by the service
                            // does not work in browsers
                            headers.append("User-Agent", "NONISV|SharePointPnP|PnPjs/2.0.0");
                        }
                        opts = Object(common["h" /* assign */])(opts, { headers: headers });
                        if (!(opts.method && opts.method.toUpperCase() !== "GET" && !headers.has("X-RequestDigest") && !headers.has("Authorization"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._digestCache(extractWebUrl(url))];
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
        Object(common["u" /* mergeHeaders */])(rawHeaders, options.headers);
        options = Object(common["h" /* assign */])(options, { headers: rawHeaders });
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
                    setTimeout(Object(common["l" /* getCtxCallback */])(_this, retry, ctx), delay);
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
        var opts = Object(common["h" /* assign */])(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["h" /* assign */])(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["h" /* assign */])(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["h" /* assign */])(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return SPHttpClient;
}());

// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new Map();
function getDigestFactory(client) {
    var _this = this;
    return function (webUrl) { return Object(tslib_es6["a" /* __awaiter */])(_this, void 0, void 0, function () {
        var cachedDigest, now, url, headers, resp, parsed, newCachedDigest;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cachedDigest = digests.get(webUrl);
                    if (cachedDigest !== undefined) {
                        now = new Date();
                        if (now < cachedDigest.expiration) {
                            return [2 /*return*/, cachedDigest.value];
                        }
                    }
                    url = Object(common["i" /* combine */])(webUrl, "/_api/contextinfo");
                    headers = {
                        "Accept": "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose;charset=utf-8",
                    };
                    return [4 /*yield*/, client.fetchRaw(url, {
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: Object(common["h" /* assign */])(headers, splibconfig["a" /* SPRuntimeConfig */].headers, true),
                            method: "POST",
                        })];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, (new parsers_ODataParser()).parse(resp).then(function (r) { return r.GetContextWebInformation; })];
                case 2:
                    parsed = _a.sent();
                    newCachedDigest = {
                        expiration: Object(common["j" /* dateAdd */])(new Date(), "second", parsed.FormDigestTimeoutSeconds),
                        value: parsed.FormDigestValue,
                    };
                    digests.set(webUrl, newCachedDigest);
                    return [2 /*return*/, newCachedDigest.value];
            }
        });
    }); };
}
//# sourceMappingURL=sphttpclient.js.map
// EXTERNAL MODULE: ./node_modules/@pnp/sp/utils/toabsoluteurl.js
var toabsoluteurl = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@pnp/sp/operations.js





var spClientBinder = defaultPipelineBinder(function () { return new sphttpclient_SPHttpClient(); });
var send = function (method) {
    var operation = spClientBinder(method);
    return function (o, options) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data, batchDependency, url;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cloneQueryableData(o.data);
                        batchDependency = Object(common["x" /* objectDefinedNotNull */])(data.batch) ? data.batch.addDependency() : function () { return; };
                        return [4 /*yield*/, Object(toabsoluteurl["a" /* toAbsoluteUrl */])(o.toUrlAndQuery())];
                    case 1:
                        url = _a.sent();
                        Object(common["w" /* mergeOptions */])(data.options, options);
                        return [2 /*return*/, operation(Object.assign({}, data, {
                                batchDependency: batchDependency,
                                url: url,
                            }))];
                }
            });
        });
    };
};
var spGet = function (o, options) {
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
var spPost = send("POST");
var spDelete = send("DELETE");
var spPatch = send("PATCH");
var spPostDelete = function (o, options) {
    var opts = Object.assign(request_builders_headers({ "X-HTTP-Method": "DELETE" }), options);
    return spPost(o, opts);
};
var spPostDeleteETag = function (o, options, eTag) {
    if (eTag === void 0) { eTag = "*"; }
    var opts = Object.assign(request_builders_headers({ "X-HTTP-Method": "DELETE", "IF-Match": eTag }), options);
    return spPost(o, opts);
};
//# sourceMappingURL=operations.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharepointqueryable.js







var spInvokableFactory = function (f) {
    return invokableFactory(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
var sharepointqueryable_SharePointQueryable = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SharePointQueryable, _super);
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
            if (Object(common["s" /* isUrlAbsolute */])(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                parentUrl = baseUrl;
                url = Object(common["i" /* combine */])(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                var index = baseUrl.lastIndexOf("/");
                parentUrl = baseUrl.slice(0, index);
                path = Object(common["i" /* combine */])(baseUrl.slice(index), path);
                url = Object(common["i" /* combine */])(parentUrl, path);
            }
            else {
                // .../items(19)
                var index = baseUrl.lastIndexOf("(");
                parentUrl = baseUrl.slice(0, index);
                url = Object(common["i" /* combine */])(baseUrl, path);
            }
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = Object(common["i" /* combine */])(parentUrl, path || "");
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
            Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + value, 0 /* Verbose */);
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
        return spGet(this, options);
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
        return spGet(this, options);
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
}(queryable_Queryable));

var SharePointQueryable = spInvokableFactory(sharepointqueryable_SharePointQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var sharepointqueryable_SharePointQueryableCollection = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SharePointQueryableCollection, _super);
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
}(sharepointqueryable_SharePointQueryable));

var SharePointQueryableCollection = spInvokableFactory(sharepointqueryable_SharePointQueryableCollection);
/**
 * Represents an instance that can be selected
 *
 */
var sharepointqueryable_SharePointQueryableInstance = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SharePointQueryableInstance, _super);
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
        return function (props) { return spPost(tag.configure(_this, type + ".Update"), {
            body: Object(common["t" /* jsS */])(Object(common["h" /* assign */])(metadata(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (d) { return mapper(d, props); }); };
    };
    return _SharePointQueryableInstance;
}(sharepointqueryable_SharePointQueryable));

var SharePointQueryableInstance = spInvokableFactory(sharepointqueryable_SharePointQueryableInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable(t) {
    return function () {
        return spPostDelete(tag.configure(this, t + ".delete"));
    };
}
function deleteableWithETag(t) {
    return function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return spPostDeleteETag(tag.configure(this, t + ".delete"), {}, eTag);
    };
}
//# sourceMappingURL=sharepointqueryable.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/decorators.js
/**
 * Class Decorators
 */

/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_1, _super);
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
// TODO::?
// performance tracking method decorator
// redirect to graph api
//# sourceMappingURL=decorators.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/odata.js





function odataUrlFrom(candidate) {
    var parts = [];
    var s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata"];
    if (Object(common["p" /* hOP */])(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the editLink
        if (Object(common["p" /* hOP */])(candidate, s[1])) {
            parts.push(candidate[s[1]]);
        }
        else if (Object(common["p" /* hOP */])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (Object(common["p" /* hOP */])(candidate, s[3]) && Object(common["p" /* hOP */])(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            var editLink = Object(common["s" /* isUrlAbsolute */])(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(extractWebUrl(candidate[s[3]]), "_api", editLink);
        }
        else if (Object(common["p" /* hOP */])(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (Object(common["p" /* hOP */])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return common["i" /* combine */].apply(void 0, Object(tslib_es6["e" /* __spread */])(parts));
}
var odata_SPODataEntityParserImpl = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return Object(common["h" /* assign */])(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return Object(common["h" /* assign */])(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(parsers_ODataParser));
var odata_SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return Object(common["h" /* assign */])(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return Object(common["h" /* assign */])(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(parsers_ODataParser));
function spODataEntity(factory) {
    return new odata_SPODataEntityParserImpl(factory);
}
function spODataEntityArray(factory) {
    return new odata_SPODataEntityArrayParserImpl(factory);
}
//# sourceMappingURL=odata.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/batch.js







/**
 * Manages a batch of OData operations
 */
var batch_SPBatch = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SPBatch, _super);
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
        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
        // if we don't have any requests, don't bother sending anything
        // this could be due to caching further upstream, or just an empty batch
        if (this.requests.length < 1) {
            Logger.write("Resolving empty batch.", 1 /* Info */);
            return Promise.resolve();
        }
        // creating the client here allows the url to be populated for nodejs client as well as potentially
        // any other hacks needed for other types of clients. Essentially allows the absoluteRequestUrl
        // below to be correct
        var client = new sphttpclient_SPHttpClient();
        // due to timing we need to get the absolute url here so we can use it for all the individual requests
        // and for sending the entire batch
        return Object(toabsoluteurl["a" /* toAbsoluteUrl */])(this.baseUrl).then(function (absoluteRequestUrl) {
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
                        currentChangeSetId = Object(common["m" /* getGUID */])();
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
                var url = Object(common["s" /* isUrlAbsolute */])(reqInfo.url) ? reqInfo.url : Object(common["i" /* combine */])(absoluteRequestUrl, reqInfo.url);
                Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Adding request " + reqInfo.method + " " + url + " to batch.", 0 /* Verbose */);
                if (reqInfo.method !== "GET") {
                    var method = reqInfo.method;
                    var castHeaders = reqInfo.options.headers;
                    if (Object(common["p" /* hOP */])(reqInfo, "options") && Object(common["p" /* hOP */])(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
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
                Object(common["u" /* mergeHeaders */])(headers, splibconfig["a" /* SPRuntimeConfig */].headers);
                // merge per-request headers
                if (reqInfo.options) {
                    Object(common["u" /* mergeHeaders */])(headers, reqInfo.options.headers);
                }
                // lastly we apply any default headers we need that may not exist
                if (!headers.has("Accept")) {
                    headers.append("Accept", "application/json");
                }
                if (!headers.has("Content-Type")) {
                    headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                if (!headers.has("X-ClientService-ClientTag")) {
                    headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.0.0");
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
            Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
            return client.fetch(Object(common["i" /* combine */])(absoluteRequestUrl, "/_api/$batch"), batchOptions)
                .then(function (r) { return r.text(); })
                .then(SPBatch.ParseResponse)
                .then(function (responses) {
                if (responses.length !== _this.requests.length) {
                    throw Error("Could not properly parse responses to match requests in batch.");
                }
                Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                return responses.reduce(function (chain, response, index) {
                    var request = _this.requests[index];
                    Logger.write("[" + request.id + "] (" + (new Date()).getTime() + ") Resolving request in batch " + _this.batchId + ".", 1 /* Info */);
                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                }, Promise.resolve());
            });
        });
    };
    return SPBatch;
}(batch_Batch));

//# sourceMappingURL=batch.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/rest.js

/**
 * Root of the SharePoint REST module
 */
var rest_SPRest = /** @class */ (function () {
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
            Object(splibconfig["b" /* setup */])({
                spfxContext: config,
            });
        }
        else {
            Object(splibconfig["b" /* setup */])(config);
        }
    };
    return SPRest;
}());

var rest_sp = new rest_SPRest();
//# sourceMappingURL=rest.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/escapeQueryStrValue.js


function escapeQueryStrValue(value) {
    if (Object(common["A" /* stringIsNullOrEmpty */])(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, function (match, labelName, v) {
            Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + v, 0 /* Verbose */);
            return "!" + labelName + "::" + encodeURIComponent(v.replace(/\'/ig, "''"));
        });
    }
    else {
        return encodeURIComponent(value.replace(/\'/ig, "''"));
    }
}
//# sourceMappingURL=escapeQueryStrValue.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/types.js













var types_Site = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Site, _super);
    function _Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Site.prototype, "rootWeb", {
        /**
        * Gets the root web of the site collection
        *
        */
        get: function () {
            return tag.configure(Web(this, "rootweb"), "si.rootWeb");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    _Site.prototype.getRootWeb = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var web;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootWeb.select("Url")()];
                    case 1:
                        web = _a.sent();
                        return [2 /*return*/, tag.configure(Web(web.Url), "si.getRootWeb")];
                }
            });
        });
    };
    /**
    * Gets the context information for this site collection
    */
    _Site.prototype.getContextInfo = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data, info;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(Site(this.parentUrl, "_api/contextinfo"), "si.getContextInfo");
                        return [4 /*yield*/, spPost(q)];
                    case 1:
                        data = _a.sent();
                        if (Object(common["p" /* hOP */])(data, "GetContextWebInformation")) {
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
        return new batch_SPBatch(this.parentUrl);
    };
    /**
    * Deletes the current site
    *
    */
    _Site.prototype.delete = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var site, q;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(Site, "").select("Id")()];
                    case 1:
                        site = _a.sent();
                        q = tag.configure(Site(this.parentUrl, "_api/SPSiteManager/Delete"), "si.delete");
                        return [4 /*yield*/, spPost(q, body({ siteId: site.Id }))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(SharePointQueryable("", "_api/sp.web.getdocumentlibraries(@v)"), "si.getDocumentLibraries");
                        q.query.set("@v", "'" + escapeQueryStrValue(absoluteWebUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(SharePointQueryable("", "_api/sp.web.getweburlfrompageurl(@v)"), "si.getWebUrlFromPageUrl");
                        q.query.set("@v", "'" + escapeQueryStrValue(absolutePageUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data];
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
        var postBody = body({ "query": Object(common["h" /* assign */])(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
    };
    /**
    * Opens a web by id (using POST)
    *
    * @param webId The GUID id of the web to open
    */
    _Site.prototype.openWebById = function (webId) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Site, "openWebById('" + webId + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Web(odataUrlFrom(data)),
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var props, postBody, d, client, methodUrl, r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
                        postBody = body({
                            "request": Object(common["h" /* assign */])(metadata("Microsoft.SharePoint.Portal.SPSiteCreationRequest"), props),
                        }, request_builders_headers({
                            "Accept": "application/json;odata=verbose",
                            "Content-Type": "application/json;odata=verbose;charset=utf-8",
                        }));
                        return [4 /*yield*/, this.getRootWeb()];
                    case 1:
                        d = _a.sent();
                        client = new sphttpclient_SPHttpClient();
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, d, client, methodUrl, r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
                        client = new sphttpclient_SPHttpClient();
                        methodUrl = d.parentUrl + "/_api/GroupSiteManager/CreateGroupEx";
                        return [4 /*yield*/, client.post(methodUrl, {
                                body: Object(common["t" /* jsS */])(postBody),
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("si.getChanges")
    ], _Site.prototype, "getChanges", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("si.openWebById")
    ], _Site.prototype, "openWebById", null);
    _Site = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/site")
    ], _Site);
    return _Site;
}(sharepointqueryable_SharePointQueryableInstance));

var Site = spInvokableFactory(types_Site);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/index.js



Reflect.defineProperty(rest_SPRest.prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Site(this._baseUrl).configure(this._options);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/webs/types.js












var types_Webs = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Webs, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body({
                            "parameters": Object(common["h" /* assign */])(metadata("SP.WebCreationInformation"), {
                                Description: description,
                                Language: language,
                                Title: title,
                                Url: url,
                                UseSamePermissionsAsParentSite: inheritPermissions,
                                WebTemplate: template,
                            }),
                        });
                        return [4 /*yield*/, spPost(this.clone(Webs, "add"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Web(odataUrlFrom(data).replace(/_api\/web\/?/i, "")),
                            }];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("ws.add")
    ], _Webs.prototype, "add", null);
    _Webs = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("webs")
    ], _Webs);
    return _Webs;
}(sharepointqueryable_SharePointQueryableCollection));

var Webs = spInvokableFactory(types_Webs);
/**
 * Describes a web
 *
 */
var types_Web = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Web, _super);
    function _Web() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("w");
        return _this;
    }
    Object.defineProperty(_Web.prototype, "webs", {
        /**
         * Gets this web's subwebs
         *
         */
        get: function () {
            return Webs(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets this web's parent web and data
     *
     */
    _Web.prototype.getParentWeb = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var ParentWeb;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spGet(this.select("ParentWeb/Id").expand("ParentWeb"))];
                    case 1:
                        ParentWeb = (_a.sent()).ParentWeb;
                        return [2 /*return*/, ParentWeb ? Site(this.parentUrl).openWebById(ParentWeb.Id) : null];
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
        var o = this.clone(Webs, "getSubwebsFilteredForCurrentUser(nWebTemplateFilter=" + nWebTemplateFilter + ",nConfigurationFilter=" + nConfigurationFilter + ")");
        return tag.configure(o, "w.getSubwebsFilteredForCurrentUser");
    };
    Object.defineProperty(_Web.prototype, "allProperties", {
        /**
         * Allows access to the web's all properties collection
         */
        get: function () {
            return tag.configure(this.clone(SharePointQueryableInstance, "allproperties"), "w.allprops");
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
            return tag.configure(SharePointQueryableCollection(this, "webinfos"), "w.webinfos");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    _Web.prototype.createBatch = function () {
        return new batch_SPBatch(this.parentUrl);
    };
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    _Web.prototype.update = function (properties) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object(common["h" /* assign */])(metadata("SP.Web"), properties), request_builders_headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, postBody)];
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
        var postBody = body({
            backgroundImageUrl: backgroundImageUrl,
            colorPaletteUrl: colorPaletteUrl,
            fontSchemeUrl: fontSchemeUrl,
            shareGenerated: shareGenerated,
        });
        return spPost(this.clone(Web, "applytheme"), postBody);
    };
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    _Web.prototype.applyWebTemplate = function (template) {
        var q = this.clone(Web, "applywebtemplate");
        q.concat("(webTemplate='" + escapeQueryStrValue(template) + "')");
        return spPost(q);
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
        return tag.configure(SharePointQueryableCollection(this, path), "w.availableWebTemplates");
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Web.prototype.getChanges = function (query) {
        var postBody = body({ "query": Object(common["h" /* assign */])(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
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
        return spGet(this.clone(Web, "maptoicon(filename='" + escapeQueryStrValue(filename) + "', progid='" + escapeQueryStrValue(progId) + "', size=" + size + ")"));
    };
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    _Web.prototype.getStorageEntity = function (key) {
        return spGet(this.clone(Web, "getStorageEntity('" + escapeQueryStrValue(key) + "')"));
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
        return spPost(this.clone(Web, "setStorageEntity"), body({
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
        return spPost(this.clone(Web, "removeStorageEntity('" + escapeQueryStrValue(key) + "')"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.getParentWeb")
    ], _Web.prototype, "getParentWeb", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.update")
    ], _Web.prototype, "update", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.applyTheme")
    ], _Web.prototype, "applyTheme", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.applyWebTemplate")
    ], _Web.prototype, "applyWebTemplate", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.getChanges")
    ], _Web.prototype, "getChanges", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.mapToIcon")
    ], _Web.prototype, "mapToIcon", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.getStorageEntity")
    ], _Web.prototype, "getStorageEntity", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.setStorageEntity")
    ], _Web.prototype, "setStorageEntity", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("w.removeStorageEntity")
    ], _Web.prototype, "removeStorageEntity", null);
    _Web = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/web")
    ], _Web);
    return _Web;
}(sharepointqueryable_SharePointQueryableInstance));

var Web = spInvokableFactory(types_Web);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/types.js










var types_Lists = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Lists, _super);
    function _Lists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    _Lists.prototype.getById = function (id) {
        return tag.configure(List(this).concat("('" + id + "')"), "ls.getById");
    };
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    _Lists.prototype.getByTitle = function (title) {
        return tag.configure(List(this, "getByTitle('" + escapeQueryStrValue(title) + "')"), "ls.getByTitle");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var addSettings, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addSettings = Object.assign({
                            "AllowContentTypes": enableContentTypes,
                            "BaseTemplate": template,
                            "ContentTypesEnabled": enableContentTypes,
                            "Description": desc,
                            "Title": title,
                        }, metadata("SP.List"), additionalSettings);
                        return [4 /*yield*/, spPost(this, body(addSettings))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var addOrUpdateSettings, list, data, e_1, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hasBatch) {
                            throw Error("The ensure list method is not supported for use in a batch.");
                        }
                        addOrUpdateSettings = Object(common["h" /* assign */])(additionalSettings, { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes }, true);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var json;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Lists, "ensuresiteassetslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(odataUrlFrom(json))];
                }
            });
        });
    };
    /**
     * Gets a list that is the default location for wiki pages.
     */
    _Lists.prototype.ensureSitePagesLibrary = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var json;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Lists, "ensuresitepageslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(odataUrlFrom(json))];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.add")
    ], _Lists.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.ensure")
    ], _Lists.prototype, "ensure", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.ensureSiteAssetsLibrary")
    ], _Lists.prototype, "ensureSiteAssetsLibrary", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ls.ensureSitePagesLibrary")
    ], _Lists.prototype, "ensureSitePagesLibrary", null);
    _Lists = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("lists")
    ], _Lists);
    return _Lists;
}(sharepointqueryable_SharePointQueryableCollection));

var Lists = spInvokableFactory(types_Lists);
var types_List = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_List, _super);
    function _List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("l");
        return _this;
    }
    Object.defineProperty(_List.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "l.effectiveBasePermissions");
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
            return tag.configure(SharePointQueryableCollection(this, "EventReceivers"), "l.eventReceivers");
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
            return tag.configure(SharePointQueryable(this, "getRelatedFields"), "l.relatedFields");
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
            return tag.configure(SharePointQueryable(this, "InformationRightsManagementSettings"), "l.informationRightsManagementSettings");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data, list;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object(common["h" /* assign */])(metadata("SP.List"), properties), request_builders_headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        list = this;
                        if (Object(common["p" /* hOP */])(properties, "Title")) {
                            list = this.getParent(List, this.parentUrl, "getByTitle('" + properties.Title + "')");
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
        return spPost(this.clone(List, "getchanges"), body({ query: Object(common["h" /* assign */])(metadata("SP.ChangeQuery"), query) }));
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
        var q = this.clone(List, "getitems");
        return spPost(q.expand.apply(q, expands), body({ query: Object(common["h" /* assign */])(metadata("SP.CamlQuery"), query) }));
    };
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    _List.prototype.getListItemChangesSinceToken = function (query) {
        var o = this.clone(List, "getlistitemchangessincetoken").usingParser({ parse: function (r) { return r.text(); } });
        return spPost(o, body({ "query": Object(common["h" /* assign */])(metadata("SP.ChangeLogItemQuery"), query) }));
    };
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _List.prototype.recycle = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "recycle"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(data, "Recycle") ? data.Recycle : data];
                }
            });
        });
    };
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    _List.prototype.renderListData = function (viewXml) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(List, "renderlistdata(@viewXml)");
                        q.query.set("@viewXml", "'" + viewXml + "'");
                        return [4 /*yield*/, spPost(q)];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(Object(common["p" /* hOP */])(data, "RenderListData") ? data.RenderListData : data)];
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
        var postBody = body({
            overrideParameters: Object(common["h" /* assign */])(metadata("SP.RenderListDataOverrideParameters"), overrideParameters),
            parameters: Object(common["h" /* assign */])(metadata("SP.RenderListDataParameters"), parameters),
        });
        var clone = this.clone(List, "RenderListDataAsStream", true);
        if (queryParams && queryParams.size > 0) {
            queryParams.forEach(function (v, k) { return clone.query.set(k, v); });
        }
        return spPost(clone, postBody);
    };
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    _List.prototype.renderListFormData = function (itemId, formId, mode) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode='" + mode + "')"))];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(Object(common["p" /* hOP */])(data, "RenderListFormData") ? data.RenderListFormData : data)];
                }
            });
        });
    };
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    _List.prototype.reserveListItemId = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "reservelistitemid"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(data, "ReserveListItemId") ? data.ReserveListItemId : data];
                }
            });
        });
    };
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    _List.prototype.getListItemEntityTypeFullName = function () {
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").get().then(function (o) { return o.ListItemEntityTypeFullName; });
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var res;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "AddValidateUpdateItemUsingPath()"), body({
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
                        return [2 /*return*/, Object(common["p" /* hOP */])(res, "AddValidateUpdateItemUsingPath") ? res.AddValidateUpdateItemUsingPath : res];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.update")
    ], _List.prototype, "update", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.getChanges")
    ], _List.prototype, "getChanges", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.CAMLQuery")
    ], _List.prototype, "getItemsByCAMLQuery", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.ChangesSinceToken")
    ], _List.prototype, "getListItemChangesSinceToken", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.recycle")
    ], _List.prototype, "recycle", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.renderListData")
    ], _List.prototype, "renderListData", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.AsStream")
    ], _List.prototype, "renderListDataAsStream", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.renderListFormData")
    ], _List.prototype, "renderListFormData", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.reserveListItemId")
    ], _List.prototype, "reserveListItemId", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.getListItemEntityTypeFullName")
    ], _List.prototype, "getListItemEntityTypeFullName", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("l.addValidateUpdateItemUsingPath")
    ], _List.prototype, "addValidateUpdateItemUsingPath", null);
    return _List;
}(sharepointqueryable_SharePointQueryableInstance));

var List = spInvokableFactory(types_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var IRenderListDataOptions;
(function (IRenderListDataOptions) {
    IRenderListDataOptions[IRenderListDataOptions["None"] = 0] = "None";
    IRenderListDataOptions[IRenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    IRenderListDataOptions[IRenderListDataOptions["ListData"] = 2] = "ListData";
    IRenderListDataOptions[IRenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    IRenderListDataOptions[IRenderListDataOptions["MenuView"] = 8] = "MenuView";
    IRenderListDataOptions[IRenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    IRenderListDataOptions[IRenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    IRenderListDataOptions[IRenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    IRenderListDataOptions[IRenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    IRenderListDataOptions[IRenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    IRenderListDataOptions[IRenderListDataOptions["Visualization"] = 512] = "Visualization";
    IRenderListDataOptions[IRenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    IRenderListDataOptions[IRenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    IRenderListDataOptions[IRenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    IRenderListDataOptions[IRenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    IRenderListDataOptions[IRenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    IRenderListDataOptions[IRenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(IRenderListDataOptions || (IRenderListDataOptions = {}));
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/web.js







addProp(types_Web, "lists", Lists);
addProp(types_Web, "siteUserInfoList", List, "siteuserinfolist");
addProp(types_Web, "defaultDocumentLibrary", List, "DefaultDocumentLibrary");
addProp(types_Web, "customListTemplates", SharePointQueryableCollection, "getcustomlisttemplates");
types_Web.prototype.getList = function (listRelativeUrl) {
    return List(this, "getList('" + escapeQueryStrValue(listRelativeUrl) + "')");
};
types_Web.prototype.getCatalog = function (type) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var data;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(Web, "getcatalog(" + type + ")").select("Id").get()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, List(odataUrlFrom(data))];
            }
        });
    });
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/types.js










/**
 * Describes a collection of Item objects
 *
 */
var types_Items = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Items, _super);
    function _Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    _Items.prototype.getById = function (id) {
        return tag.configure(Item(this).concat("(" + id + ")"), "is.getById");
    };
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    _Items.prototype.getItemByStringId = function (stringId) {
        // creates an item with the parent list path and append out method call
        return tag.configure(Item(this.parentUrl, "getItemByStringId('" + stringId + "')"), "is.getItemByStringId");
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
        return this.usingParser(new types_PagedItemCollectionParser(this))();
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
        Logger.write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", 2 /* Warning */);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        var items = Items(this, "").top(requestSize).configure({
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, promise;
            var _this = this;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = body(Object(common["h" /* assign */])(metadata(listItemEntityType), properties));
                        promise = spPost(this.clone(Items, ""), postBody).then(function (data) {
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
            this.getParent(List).getListItemEntityTypeFullName();
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("is.getPaged")
    ], _Items.prototype, "getPaged", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("is.getAll")
    ], _Items.prototype, "getAll", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("is.add")
    ], _Items.prototype, "add", null);
    _Items = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("items")
    ], _Items);
    return _Items;
}(sharepointqueryable_SharePointQueryableCollection));

var Items = spInvokableFactory(types_Items);
/**
 * Descrines a single Item instance
 *
 */
var types_Item = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Item, _super);
    function _Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("i");
        return _this;
    }
    Object.defineProperty(_Item.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions for the item
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "i.effectiveBasePermissions");
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
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissionsForUI"), "i.effectiveBasePermissionsForUI");
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
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsHTML"), "i.fvHTML");
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
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsText"), "i.fvText");
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
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesForEdit"), "i.fvEdit");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "versions", {
        /**
         * Gets the collection of versions associated with this item
         */
        get: function () {
            return tag.configure(ItemVersions(this), "i.versions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "list", {
        get: function () {
            return this.getParent(List, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, poster, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = body(Object(common["h" /* assign */])(metadata(listItemEntityType), properties), request_builders_headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        removeDependency();
                        poster = tag.configure(this.clone(Item).usingParser(new types_ItemUpdatedParser()), "i.update");
                        return [4 /*yield*/, spPost(poster, postBody)];
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
        return spPost(this.clone(Item, "recycle"));
    };
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    _Item.prototype.getWopiFrameUrl = function (action) {
        if (action === void 0) { action = 0; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var i, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = this.clone(Item, "getWOPIFrameUrl(@action)");
                        i.query.set("@action", action);
                        return [4 /*yield*/, spPost(i)];
                    case 1:
                        data = _a.sent();
                        // handle verbose mode
                        if (Object(common["p" /* hOP */])(data, "GetWOPIFrameUrl")) {
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
        return spPost(this.clone(Item, "validateupdatelistitem"), body({ formValues: formValues, bNewDocumentUpdate: bNewDocumentUpdate }));
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("i.recycle")
    ], _Item.prototype, "recycle", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("i.getWopiFrameUrl")
    ], _Item.prototype, "getWopiFrameUrl", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("i.validateUpdateListItem")
    ], _Item.prototype, "validateUpdateListItem", null);
    return _Item;
}(sharepointqueryable_SharePointQueryableInstance));

var Item = spInvokableFactory(types_Item);
/**
 * Describes a collection of Version objects
 *
 */
var types_ItemVersions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ItemVersions, _super);
    function _ItemVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _ItemVersions.prototype.getById = function (versionId) {
        return tag.configure(ItemVersion(this).concat("(" + versionId + ")"), "iv.getById");
    };
    _ItemVersions = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("versions")
    ], _ItemVersions);
    return _ItemVersions;
}(sharepointqueryable_SharePointQueryableCollection));

var ItemVersions = spInvokableFactory(types_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
var types_ItemVersion = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ItemVersion, _super);
    function _ItemVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("iv");
        return _this;
    }
    return _ItemVersion;
}(sharepointqueryable_SharePointQueryableInstance));

var ItemVersion = spInvokableFactory(types_ItemVersion);
/**
 * Provides paging functionality for list items
 */
var types_PagedItemCollection = /** @class */ (function () {
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
            var items = tag.configure(Items(this.nextUrl, null).configureFrom(this.parent), "ip.getNext");
            return items.getPaged();
        }
        return new Promise(function (r) { return r(null); });
    };
    return PagedItemCollection;
}());

var types_PagedItemCollectionParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(PagedItemCollectionParser, _super);
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
                    var nextUrl = Object(common["p" /* hOP */])(json, "d") && Object(common["p" /* hOP */])(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new types_PagedItemCollection(_this._parent, nextUrl, _this.parseODataJSON(json)));
                });
            }
        });
    };
    return PagedItemCollectionParser;
}(parsers_ODataParser));
var types_ItemUpdatedParser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ItemUpdatedParser, _super);
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
}(parsers_ODataParser));
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/list.js



addProp(types_List, "items", Items);
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/spListConfigurationProvider.js



/**
 * A configuration provider which loads configuration values from a SharePoint list
 *
 */
var spListConfigurationProvider_SPListConfigurationProvider = /** @class */ (function () {
    /**
     * Creates a new SharePoint list based configuration provider
     * @constructor
     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default: "config")
     * @param {string} keyFieldName The name of the field in the list to use as the setting key (optional, default: "Title")
     * @param {string} valueFieldName The name of the field in the list to use as the setting value (optional, default: "Value")
     */
    function SPListConfigurationProvider(web, listTitle, keyFieldName, valueFieldName) {
        if (listTitle === void 0) { listTitle = "config"; }
        if (keyFieldName === void 0) { keyFieldName = "Title"; }
        if (valueFieldName === void 0) { valueFieldName = "Value"; }
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
    SPListConfigurationProvider.prototype.getConfiguration = function () {
        var _this = this;
        return this.web.lists.getByTitle(this.listTitle).items.select(this.keyFieldName, this.valueFieldName)()
            .then(function (data) { return data.reduce(function (c, item) {
            c[item[_this.keyFieldName]] = item[_this.valueFieldName];
            return c;
        }, {}); });
    };
    /**
     * Wraps the current provider in a cache enabled provider
     *
     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
     */
    SPListConfigurationProvider.prototype.asCaching = function (cacheKey) {
        if (cacheKey === void 0) { cacheKey = "pnp_configcache_splist_" + this.web.toUrl() + "+" + this.listTitle; }
        return new cachingConfigurationProvider(this, cacheKey);
    };
    return SPListConfigurationProvider;
}());
/* harmony default export */ var spListConfigurationProvider = (spListConfigurationProvider_SPListConfigurationProvider);
//# sourceMappingURL=spListConfigurationProvider.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/providers/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/config-store/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp-addinhelpers/sprequestexecutorclient.js

/**
 * Makes requests using the SP.RequestExecutor library.
 */
var sprequestexecutorclient_SPRequestExecutorClient = /** @class */ (function () {
    function SPRequestExecutorClient() {
        /**
         * Converts a SharePoint REST API response to a fetch API response.
         */
        this.convertToResponse = function (spResponse) {
            var responseHeaders = new Headers();
            if (spResponse.headers !== undefined) {
                for (var h in spResponse.headers) {
                    if (spResponse.headers[h]) {
                        responseHeaders.append(h, spResponse.headers[h]);
                    }
                }
            }
            // Cannot have an empty string body when creating a Response with status 204
            var body = spResponse.statusCode === 204 ? null : spResponse.body;
            return new Response(body, {
                headers: responseHeaders,
                status: spResponse.statusCode,
                statusText: spResponse.statusText,
            });
        };
    }
    /**
     * Fetches a URL using the SP.RequestExecutor library.
     */
    SPRequestExecutorClient.prototype.fetch = function (url, options) {
        var _this = this;
        if (SP === undefined || SP.RequestExecutor === undefined) {
            throw Error("SP.RequestExecutor is undefined. Load the SP.RequestExecutor.js library (/_layouts/15/SP.RequestExecutor.js) before loading the PnP JS Core library.");
        }
        var addinWebUrl = url.substring(0, url.indexOf("/_api")), executor = new SP.RequestExecutor(addinWebUrl);
        var headers = {}, iterator, temp;
        if (options.headers && options.headers instanceof Headers) {
            iterator = options.headers.entries();
            temp = iterator.next();
            while (!temp.done) {
                headers[temp.value[0]] = temp.value[1];
                temp = iterator.next();
            }
        }
        else {
            headers = options.headers;
        }
        return new Promise(function (resolve, reject) {
            var requestOptions = {
                error: function (error) {
                    reject(_this.convertToResponse(error));
                },
                headers: headers,
                method: options.method,
                success: function (response) {
                    resolve(_this.convertToResponse(response));
                },
                url: url,
            };
            if (options.body) {
                requestOptions = Object(common["h" /* assign */])(requestOptions, { body: options.body });
            }
            else {
                requestOptions = Object(common["h" /* assign */])(requestOptions, { binaryStringRequestBody: true });
            }
            executor.executeAsync(requestOptions);
        });
    };
    return SPRequestExecutorClient;
}());

//# sourceMappingURL=sprequestexecutorclient.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/types.js
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
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
})(PrincipalType || (PrincipalType = {}));
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/objectToSPKeyValueCollection.js


/**
 * Creates an object representing a SharePoint Collection(SP.KeyValue)
 *
 * @param obj The plain object defining the properties
 */
function objectToSPKeyValueCollection(obj) {
    return Object(common["h" /* assign */])(metadata("Collection(SP.KeyValue)"), {
        results: Object.keys(obj).map(function (key) { return Object(common["h" /* assign */])(metadata("SP.KeyValue"), {
            Key: key,
            Value: Reflect.get(obj, key),
            ValueType: "Edm.String",
        }); }),
    });
}
//# sourceMappingURL=objectToSPKeyValueCollection.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/file-names.js
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
//# sourceMappingURL=file-names.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/index.js











//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/webs/index.js



Reflect.defineProperty(rest_SPRest.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Web(this._baseUrl).configure(this._options);
    },
});
rest_SPRest.prototype.createBatch = function () {
    return this.web.createBatch();
};
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp-addinhelpers/sprestaddin.js





var sprestaddin_SPRestAddIn = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SPRestAddIn, _super);
    function SPRestAddIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Begins a cross-domain, host site scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    SPRestAddIn.prototype.crossDomainSite = function (addInWebUrl, hostWebUrl) {
        return this._cdImpl(Site, addInWebUrl, hostWebUrl, "site");
    };
    /**
     * Begins a cross-domain, host web scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    SPRestAddIn.prototype.crossDomainWeb = function (addInWebUrl, hostWebUrl) {
        return this._cdImpl(Web, addInWebUrl, hostWebUrl, "web");
    };
    /**
     * Implements the creation of cross domain REST urls
     *
     * @param factory The constructor of the object to create Site | Web
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     * @param urlPart String part to append to the url "site" | "web"
     */
    SPRestAddIn.prototype._cdImpl = function (factory, addInWebUrl, hostWebUrl, urlPart) {
        if (!Object(common["s" /* isUrlAbsolute */])(addInWebUrl)) {
            throw Error("The addInWebUrl parameter must be an absolute url.");
        }
        if (!Object(common["s" /* isUrlAbsolute */])(hostWebUrl)) {
            throw Error("The hostWebUrl parameter must be an absolute url.");
        }
        var url = Object(common["i" /* combine */])(addInWebUrl, "_api/SP.AppContextSite(@target)");
        var instance = factory(url, urlPart);
        instance.query.set("@target", "'" + encodeURIComponent(hostWebUrl) + "'");
        return instance.configure(this._options);
    };
    return SPRestAddIn;
}(rest_SPRest));

var sprestaddin_sp = new sprestaddin_SPRestAddIn();
//# sourceMappingURL=sprestaddin.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp-addinhelpers/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/pnpjs/pnplibconfig.js

function setup(config) {
    common["e" /* RuntimeConfig */].assign(config);
}
//# sourceMappingURL=pnplibconfig.js.map
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

//# sourceMappingURL=types.js.map
// EXTERNAL MODULE: ./node_modules/adal-angular/dist/adal.min.js
var adal_min = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@pnp/adaljsclient/adalclient.js


// @ts-ignore

/**
 * Azure AD Client for use in the browser
 */
var adalclient_AdalClient = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(AdalClient, _super);
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
        return new common["g" /* SPFxAdalClient */](spfxContext);
    };
    /**
     * Conducts the fetch opertation against the AAD secured resource
     *
     * @param url Absolute URL for the request
     * @param options Any fetch options passed to the underlying fetch implementation
     */
    AdalClient.prototype.fetch = function (url, options) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var token;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Object(common["s" /* isUrlAbsolute */])(url)) {
                            throw Error("You must supply absolute urls to AdalClient.fetch.");
                        }
                        return [4 /*yield*/, this.getToken(Object(common["k" /* getADALResource */])(url))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var token;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
}(common["a" /* BearerTokenFetchClient */]));

//# sourceMappingURL=adalclient.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/adaljsclient/index.js

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphlibconfig.js


function graphlibconfig_setup(config) {
    common["e" /* RuntimeConfig */].assign(config);
}
var graphlibconfig_GraphRuntimeConfigImpl = /** @class */ (function () {
    function GraphRuntimeConfigImpl() {
    }
    Object.defineProperty(GraphRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var graphPart = common["e" /* RuntimeConfig */].get("graph");
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
            var graphPart = common["e" /* RuntimeConfig */].get("graph");
            // use a configured factory firt
            if (graphPart !== undefined && graphPart !== null && graphPart.fetchClientFactory !== undefined) {
                return graphPart.fetchClientFactory;
            }
            // then try and use spfx context if available
            if (common["e" /* RuntimeConfig */].spfxContext !== undefined) {
                return function () { return adalclient_AdalClient.fromSPFxContext(common["e" /* RuntimeConfig */].spfxContext); };
            }
            throw Error("There is no Graph Client available, either set one using configuraiton or provide a valid SPFx Context using setup.");
        },
        enumerable: true,
        configurable: true
    });
    return GraphRuntimeConfigImpl;
}());

var GraphRuntimeConfig = new graphlibconfig_GraphRuntimeConfigImpl();
//# sourceMappingURL=graphlibconfig.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphhttpclient.js


var graphhttpclient_GraphHttpClient = /** @class */ (function () {
    function GraphHttpClient() {
        this._impl = GraphRuntimeConfig.fetchClientFactory();
    }
    GraphHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        Object(common["u" /* mergeHeaders */])(headers, GraphRuntimeConfig.headers);
        // second we add the local options so we can overwrite the globals
        Object(common["u" /* mergeHeaders */])(headers, options.headers);
        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json");
        }
        if (!headers.has("SdkVersion")) {
            // this marks the requests for understanding by the service
            headers.append("SdkVersion", "PnPCoreJS/2.0.0");
        }
        var opts = Object(common["h" /* assign */])(options, { headers: headers });
        return this.fetchRaw(url, opts);
    };
    GraphHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        Object(common["u" /* mergeHeaders */])(rawHeaders, options.headers);
        options = Object(common["h" /* assign */])(options, { headers: rawHeaders });
        var retry = function (ctx) {
            _this._impl.fetch(url, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
                // Check if request was throttled - http status code 429
                // Check if request failed due to server unavailable - http status code 503
                if (response.status !== 429 && response.status !== 503) {
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
                setTimeout(Object(common["l" /* getCtxCallback */])(_this, retry, ctx), delay);
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
        var opts = Object(common["h" /* assign */])(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["h" /* assign */])(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["h" /* assign */])(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(common["h" /* assign */])(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return GraphHttpClient;
}());

//# sourceMappingURL=graphhttpclient.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/operations.js




var graphClientBinder = defaultPipelineBinder(function () { return new graphhttpclient_GraphHttpClient(); });
var operations_send = function (operation) {
    return function (o, options) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data, batchDependency, url;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                data = cloneQueryableData(o.data);
                batchDependency = Object(common["x" /* objectDefinedNotNull */])(data.batch) ? data.batch.addDependency() : function () { return; };
                url = o.toUrlAndQuery();
                Object(common["w" /* mergeOptions */])(data.options, options);
                return [2 /*return*/, operation(Object.assign({}, data, {
                        batchDependency: batchDependency,
                        url: url,
                    }))];
            });
        });
    };
};
var graphGet = function (o, options) { return operations_send(graphClientBinder("GET"))(o, options); };
var graphPost = function (o, options) { return operations_send(graphClientBinder("POST"))(o, options); };
var graphDelete = function (o, options) { return operations_send(graphClientBinder("DELETE"))(o, options); };
var graphPatch = function (o, options) { return operations_send(graphClientBinder("PATCH"))(o, options); };
var graphPut = function (o, options) { return operations_send(graphClientBinder("PUT"))(o, options); };
//# sourceMappingURL=operations.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphqueryable.js





var graphInvokableFactory = function (f) {
    return invokableFactory(f);
};
/**
 * Queryable Base Class
 *
 */
var graphqueryable_GraphQueryable = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_GraphQueryable, _super);
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
            url = Object(common["i" /* combine */])(parentUrl, path);
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = Object(common["i" /* combine */])(parentUrl, path);
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
    /**
     * Gets the full url with query information
     *
     */
    _GraphQueryable.prototype.toUrlAndQuery = function () {
        var url = this.toUrl();
        if (!Object(common["s" /* isUrlAbsolute */])(url)) {
            url = Object(common["i" /* combine */])("https://graph.microsoft.com", url);
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
    Object(tslib_es6["c" /* __extends */])(_GraphQueryableCollection, _super);
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
    Object(tslib_es6["c" /* __extends */])(_GraphQueryableSearchableCollection, _super);
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
    Object(tslib_es6["c" /* __extends */])(_GraphQueryableInstance, _super);
    function _GraphQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _GraphQueryableInstance;
}(graphqueryable_GraphQueryable));

var GraphQueryableInstance = graphInvokableFactory(graphqueryable_GraphQueryableInstance);
//# sourceMappingURL=graphqueryable.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/batch.js






var batch_GraphBatch = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(GraphBatch, _super);
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
        if (!Object(common["s" /* isUrlAbsolute */])(url)) {
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
                headers = Object(common["h" /* assign */])(headers, GraphRuntimeConfig.headers);
            }
            if (reqInfo.options !== undefined) {
                // merge per request headers
                if (reqInfo.options.headers !== undefined && reqInfo.options.headers !== null) {
                    headers = Object(common["h" /* assign */])(headers, reqInfo.options.headers);
                }
                // add a request body
                if (reqInfo.options.body !== undefined && reqInfo.options.body !== null) {
                    requestFragment = Object(common["h" /* assign */])(requestFragment, {
                        body: reqInfo.options.body,
                    });
                }
            }
            requestFragment = Object(common["h" /* assign */])(requestFragment, {
                headers: headers,
            });
            return requestFragment;
        });
    };
    GraphBatch.parseResponse = function (requests, graphResponse) {
        return new Promise(function (resolve) {
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
        // this is the root of our promise chain
        var promise = Promise.resolve();
        var _loop_1 = function () {
            var requestsChunk = requests.splice(0, this_1.maxRequests);
            var batchRequest = {
                requests: GraphBatch.formatRequests(requestsChunk),
            };
            var batchOptions = {
                body: Object(common["t" /* jsS */])(batchRequest),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
            };
            Logger.write("[" + this_1.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
            client.fetch(this_1.batchUrl, batchOptions)
                .then(function (r) { return r.json(); })
                .then(function (j) { return GraphBatch.parseResponse(requestsChunk, j); })
                .then(function (parsedResponse) {
                Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                parsedResponse.responses.reduce(function (chain, response, index) {
                    var request = requestsChunk[index];
                    Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched request " + request.method + " " + request.url + ".", 0 /* Verbose */);
                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                }, promise);
            });
        };
        var this_1 = this;
        while (requests.length > 0) {
            _loop_1();
        }
        return promise;
    };
    return GraphBatch;
}(batch_Batch));

//# sourceMappingURL=batch.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/rest.js




var rest_GraphRest = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(GraphRest, _super);
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
//# sourceMappingURL=rest.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/index.js





//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/types.js










/**
 * Describes a collection of File objects
 *
 */
var types_Files = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Files, _super);
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
        return tag.configure(File(this).concat("('" + escapeQueryStrValue(name) + "')"), "fis.getByName");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var response;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + escapeQueryStrValue(url) + "')"), {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var path, resp;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = ["AddUsingPath(decodedurl='" + escapeQueryStrValue(url) + "'"];
                        if (parameters) {
                            if (parameters.Overwrite) {
                                path.push(",Overwrite=true");
                            }
                            if (parameters.AutoCheckoutOnInvalidData) {
                                path.push(",AutoCheckoutOnInvalidData=true");
                            }
                            if (!Object(common["A" /* stringIsNullOrEmpty */])(parameters.XorHash)) {
                                path.push(",XorHash=" + escapeQueryStrValue(parameters.XorHash));
                            }
                        }
                        path.push(")");
                        return [4 /*yield*/, spPost(Files(this, path.join("")), { body: content })];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, {
                                data: resp,
                                file: File(odataUrlFrom(resp)),
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var file;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Files, "add(overwrite=" + shouldOverWrite + ",url='" + escapeQueryStrValue(url) + "')", false))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var response;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Files, "addTemplateFile(urloffile='" + escapeQueryStrValue(fileUrl) + "',templatefiletype=" + templateFileType + ")", false))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: File(odataUrlFrom(response)),
                            }];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("fis.add")
    ], _Files.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fis.addUsingPath")
    ], _Files.prototype, "addUsingPath", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fis.addChunked")
    ], _Files.prototype, "addChunked", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fis.addTemplateFile")
    ], _Files.prototype, "addTemplateFile", null);
    _Files = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("files")
    ], _Files);
    return _Files;
}(sharepointqueryable_SharePointQueryableCollection));

var Files = spInvokableFactory(types_Files);
/**
 * Describes a single File instance
 *
 */
var types_File = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_File, _super);
    function _File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("fi");
        return _this;
    }
    Object.defineProperty(_File.prototype, "listItemAllFields", {
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "listItemAllFields"), "fi.listItemAllFields");
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
            return tag.configure(Versions(this), "fi.versions");
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
        return spPost(this.clone(File, "approve(comment='" + escapeQueryStrValue(comment) + "')"));
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
        return spPost(this.clone(File, "cancelUpload(uploadId=guid'" + uploadId + "')", false));
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
        return spPost(this.clone(File, "checkin(comment='" + escapeQueryStrValue(comment) + "',checkintype=" + checkinType + ")"));
    };
    /**
     * Checks out the file from a document library.
     */
    _File.prototype.checkout = function () {
        return spPost(this.clone(File, "checkout"));
    };
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    _File.prototype.copyTo = function (url, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return spPost(this.clone(File, "copyTo(strnewurl='" + escapeQueryStrValue(url) + "',boverwrite=" + shouldOverWrite + ")"));
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
        return spPost(this.clone(File, "deny(comment='" + escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Moves the file to the specified destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to move to.
     * @param moveOperations The bitwise MoveOperations value for how to move the file.
     */
    _File.prototype.moveTo = function (url, moveOperations) {
        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
        return spPost(this.clone(File, "moveTo(newurl='" + escapeQueryStrValue(url) + "',flags=" + moveOperations + ")"));
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
        return spPost(this.clone(File, "publish(comment='" + escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    _File.prototype.recycle = function () {
        return spPost(this.clone(File, "recycle"));
    };
    /**
     * Reverts an existing checkout for the file.
     *
     */
    _File.prototype.undoCheckout = function () {
        return spPost(this.clone(File, "undoCheckout"));
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
        return spPost(this.clone(File, "unpublish(comment='" + escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    _File.prototype.getText = function () {
        return this.clone(File, "$value", false).usingParser(new parsers_TextParser())(request_builders_headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    _File.prototype.getBlob = function () {
        return this.clone(File, "$value", false).usingParser(new parsers_BlobParser())(request_builders_headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getBuffer = function () {
        return this.clone(File, "$value", false).usingParser(new parsers_BufferParser())(request_builders_headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getJSON = function () {
        return this.clone(File, "$value", false).usingParser(new parsers_JSONParser())(request_builders_headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    _File.prototype.setContent = function (content) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "$value", false), {
                            body: content,
                            headers: {
                                "X-HTTP-Method": "PUT",
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, File(this)];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, d;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.listItemAllFields;
                        return [4 /*yield*/, q.select.apply(q, selects)()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, Object(common["h" /* assign */])(Item(odataUrlFrom(d)), d)];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var fileSize, totalBlocks, uploadId, currentPointer, i;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Object(common["r" /* isFunc */])(progress)) {
                            progress = function () { return null; };
                        }
                        fileSize = file.size;
                        totalBlocks = parseInt((fileSize / chunkSize).toString(), 10) + ((fileSize % chunkSize === 0) ? 1 : 0);
                        uploadId = Object(common["m" /* getGUID */])();
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var n;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "startUpload(uploadId=guid'" + uploadId + "')", false), { body: fragment })];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var n;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var response;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: File(odataUrlFrom(response)),
                            }];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.approve")
    ], _File.prototype, "approve", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.cancelUpload")
    ], _File.prototype, "cancelUpload", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.checkin")
    ], _File.prototype, "checkin", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.checkout")
    ], _File.prototype, "checkout", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.copyTo")
    ], _File.prototype, "copyTo", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.deny")
    ], _File.prototype, "deny", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.moveTo")
    ], _File.prototype, "moveTo", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.publish")
    ], _File.prototype, "publish", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.recycle")
    ], _File.prototype, "recycle", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.undoCheckout")
    ], _File.prototype, "undoCheckout", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.unpublish")
    ], _File.prototype, "unpublish", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.getText")
    ], _File.prototype, "getText", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.getBlob")
    ], _File.prototype, "getBlob", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.getBuffer")
    ], _File.prototype, "getBuffer", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.getJSON")
    ], _File.prototype, "getJSON", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.setContent")
    ], _File.prototype, "setContent", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.getItem")
    ], _File.prototype, "getItem", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.startUpload")
    ], _File.prototype, "startUpload", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.continueUpload")
    ], _File.prototype, "continueUpload", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fi.finishUpload")
    ], _File.prototype, "finishUpload", null);
    return _File;
}(sharepointqueryable_SharePointQueryableInstance));

var File = spInvokableFactory(types_File);
/**
 * Describes a collection of Version objects
 *
 */
var types_Versions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Versions, _super);
    function _Versions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _Versions.prototype.getById = function (versionId) {
        return tag.configure(Version(this).concat("(" + versionId + ")"), "vers.getById");
    };
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    _Versions.prototype.deleteAll = function () {
        return spPost(Versions(this, "deleteAll"));
    };
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.deleteById = function (versionId) {
        return spPost(this.clone(Versions, "deleteById(vid=" + versionId + ")"));
    };
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.recycleByID = function (versionId) {
        return spPost(this.clone(Versions, "recycleByID(vid=" + versionId + ")"));
    };
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.deleteByLabel = function (label) {
        return spPost(this.clone(Versions, "deleteByLabel(versionlabel='" + escapeQueryStrValue(label) + "')"));
    };
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.recycleByLabel = function (label) {
        return spPost(this.clone(Versions, "recycleByLabel(versionlabel='" + escapeQueryStrValue(label) + "')"));
    };
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    _Versions.prototype.restoreByLabel = function (label) {
        return spPost(this.clone(Versions, "restoreByLabel(versionlabel='" + escapeQueryStrValue(label) + "')"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("vers.deleteAll")
    ], _Versions.prototype, "deleteAll", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vers.deleteById")
    ], _Versions.prototype, "deleteById", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vers.recycleByID")
    ], _Versions.prototype, "recycleByID", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vers.deleteByLabel")
    ], _Versions.prototype, "deleteByLabel", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vers.recycleByLabel")
    ], _Versions.prototype, "recycleByLabel", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vers.restoreByLabel")
    ], _Versions.prototype, "restoreByLabel", null);
    _Versions = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("versions")
    ], _Versions);
    return _Versions;
}(sharepointqueryable_SharePointQueryableCollection));

var Versions = spInvokableFactory(types_Versions);
/**
 * Describes a single Version instance
 *
 */
var types_Version = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Version, _super);
    function _Version() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("ver");
        return _this;
    }
    return _Version;
}(sharepointqueryable_SharePointQueryableInstance));

var Version = spInvokableFactory(types_Version);
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/types.js









var types_AppCatalog = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_AppCatalog, _super);
    function _AppCatalog(baseUrl, path) {
        if (path === void 0) { path = "_api/web/tenantappcatalog/AvailableApps"; }
        return _super.call(this, extractWebUrl(typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl()), path) || this;
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    _AppCatalog.prototype.getAppById = function (id) {
        return tag.configure(App(this, "getById('" + id + "')"), "ac.getAppById");
    };
    /**
     * Synchronize a solution to the Microsoft Teams App Catalog
     * @param id - Specify the guid of the app
     * @param useSharePointItemId (optional) - By default this REST call requires the SP Item id of the app, not the app id.
     *                            PnPjs will try to fetch the item id by default, you can still use this parameter to pass your own item id in the first parameter
     */
    _AppCatalog.prototype.syncSolutionToTeams = function (id, useSharePointItemId) {
        if (useSharePointItemId === void 0) { useSharePointItemId = false; }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var appId, webUrl, web, listId, listItems, poster;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appId = null;
                        webUrl = extractWebUrl(this.toUrl());
                        if (!useSharePointItemId) return [3 /*break*/, 1];
                        appId = id;
                        return [3 /*break*/, 4];
                    case 1:
                        web = Web(webUrl);
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
                        poster = tag.configure(AppCatalog(webUrl, "_api/web/tenantappcatalog/SyncSolutionToTeams(id=" + appId + ")"), "ac.syncSolutionToTeams");
                        return [4 /*yield*/, spPost(poster, {})];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var adder, r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adder = tag.configure(AppCatalog(extractWebUrl(this.toUrl()), "_api/web/tenantappcatalog/add(overwrite=" + shouldOverWrite + ",url='" + filename + "')"), "ac.add");
                        return [4 /*yield*/, spPost(adder, {
                                body: content, headers: {
                                    "binaryStringRequestBody": "true",
                                },
                            })];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, {
                                data: r,
                                file: File(odataUrlFrom(r)),
                            }];
                }
            });
        });
    };
    return _AppCatalog;
}(sharepointqueryable_SharePointQueryableCollection));

var AppCatalog = spInvokableFactory(types_AppCatalog);
var types_App = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_App, _super);
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
        return spPost(this.clone(App, path));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("app.deploy")
    ], _App.prototype, "deploy", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("app.retract")
    ], _App.prototype, "retract", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("app.install")
    ], _App.prototype, "install", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("app.uninstall")
    ], _App.prototype, "uninstall", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("app.upgrade")
    ], _App.prototype, "upgrade", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("app.remove")
    ], _App.prototype, "remove", null);
    return _App;
}(sharepointqueryable_SharePointQueryableInstance));

var App = spInvokableFactory(types_App);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/web.js


types_Web.prototype.getAppCatalog = function (url) {
    return AppCatalog(url || this);
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/index.js






rest_SPRest.prototype.getTenantAppCatalogWeb = function () {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var data;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, SharePointQueryable("/", "_api/SP_TenantSettings_Current")()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, Web(data.CorporateCatalogUrl)];
            }
        });
    });
};
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/types.js






var types_Attachments = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Attachments, _super);
    function _Attachments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets a Attachment File by filename
    *
    * @param name The name of the file, including extension.
    */
    _Attachments.prototype.getByName = function (name) {
        var f = tag.configure(Attachment(this), "ats.getByName");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var response;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Attachments, "add(FileName='" + name + "')", false), { body: content })];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var i;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var i;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var i;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("ats.add")
    ], _Attachments.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ats.addMultiple")
    ], _Attachments.prototype, "addMultiple", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ats.deleteMultiple")
    ], _Attachments.prototype, "deleteMultiple", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ats.recycleMultiple")
    ], _Attachments.prototype, "recycleMultiple", null);
    _Attachments = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("AttachmentFiles")
    ], _Attachments);
    return _Attachments;
}(sharepointqueryable_SharePointQueryableCollection));

var Attachments = spInvokableFactory(types_Attachments);
var types_Attachment = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Attachment, _super);
    function _Attachment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("at");
        return _this;
    }
    /**
     * Gets the contents of the file as text
     *
     */
    _Attachment.prototype.getText = function () {
        return this.getParsed(new parsers_TextParser());
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    _Attachment.prototype.getBlob = function () {
        return this.getParsed(new parsers_BlobParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    _Attachment.prototype.getBuffer = function () {
        return this.getParsed(new parsers_BufferParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    _Attachment.prototype.getJSON = function () {
        return this.getParsed(new parsers_JSONParser());
    };
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    _Attachment.prototype.setContent = function (content) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Attachment, "$value", false), request_builders_headers({ "X-HTTP-Method": "PUT" }, {
                            body: content,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Attachment(this)];
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
        return spPost(this.clone(Attachment, "recycleObject"), request_builders_headers({
            "IF-Match": eTag,
            "X-HTTP-Method": "DELETE",
        }));
    };
    _Attachment.prototype.getParsed = function (parser) {
        return this.clone(Attachment, "$value", false).usingParser(parser)();
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("at.getText")
    ], _Attachment.prototype, "getText", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("at.getBlob")
    ], _Attachment.prototype, "getBlob", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("at.getBuffer")
    ], _Attachment.prototype, "getBuffer", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("at.getJSON")
    ], _Attachment.prototype, "getJSON", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("at.setContent")
    ], _Attachment.prototype, "setContent", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("at.recycle")
    ], _Attachment.prototype, "recycle", null);
    return _Attachment;
}(sharepointqueryable_SharePointQueryableInstance));

var Attachment = spInvokableFactory(types_Attachment);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/item.js



addProp(types_Item, "attachmentFiles", Attachments);
//# sourceMappingURL=item.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/funcs.js

/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
function getNextOrder(collection) {
    return collection.length < 1 ? 1 : (Math.max.apply(null, collection.map(function (i) { return i.order; })) + 1);
}
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
function reindex(collection) {
    for (var i = 0; i < collection.length; i++) {
        collection[i].order = i + 1;
        if (Object(common["p" /* hOP */])(collection[i], "columns")) {
            reindex(collection[i].columns);
        }
        else if (Object(common["p" /* hOP */])(collection[i], "controls")) {
            reindex(collection[i].controls);
        }
    }
}
//# sourceMappingURL=funcs.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/web.js



types_Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
    return File(this, "getFileByServerRelativeUrl('" + escapeQueryStrValue(fileRelativeUrl) + "')");
};
types_Web.prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return File(this, "getFileByServerRelativePath(decodedUrl='" + escapeQueryStrValue(fileRelativeUrl) + "')");
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/types.js









var types_Comments = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Comments, _super);
    function _Comments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    _Comments.prototype.add = function (info) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, d;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof info === "string") {
                            info = { text: info };
                        }
                        postBody = body(Object(common["h" /* assign */])(metadata("Microsoft.SharePoint.Comments.comment"), info));
                        return [4 /*yield*/, spPost(this.clone(Comments, null), postBody)];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, Object(common["h" /* assign */])(this.getById(d.id), d)];
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
        return tag.configure(Comment(this).concat("(" + id + ")"), "coms.getById");
    };
    /**
     * Deletes all the comments in this collection
     */
    _Comments.prototype.clear = function () {
        return spPost(tag.configure(this.clone(Comments, "DeleteAll"), "coms.clear"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("coms.add")
    ], _Comments.prototype, "add", null);
    _Comments = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("comments")
    ], _Comments);
    return _Comments;
}(sharepointqueryable_SharePointQueryableCollection));

var Comments = spInvokableFactory(types_Comments);
var types_Comment = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Comment, _super);
    function _Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Comment.prototype, "replies", {
        /**
         * A comment's replies
         */
        get: function () {
            return tag.configure(Replies(this), "com.replies");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Likes the comment as the current user
     */
    _Comment.prototype.like = function () {
        return spPost(this.clone(Comment, "Like"));
    };
    /**
     * Unlikes the comment as the current user
     */
    _Comment.prototype.unlike = function () {
        return spPost(this.clone(Comment, "Unlike"));
    };
    /**
     * Deletes this comment
     */
    _Comment.prototype.delete = function () {
        return spPost(this.clone(Comment, "DeleteComment"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("com.like")
    ], _Comment.prototype, "like", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("com.unlike")
    ], _Comment.prototype, "unlike", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("com.delete")
    ], _Comment.prototype, "delete", null);
    return _Comment;
}(sharepointqueryable_SharePointQueryableInstance));

var Comment = spInvokableFactory(types_Comment);
var types_Replies = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Replies, _super);
    function _Replies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    _Replies.prototype.add = function (info) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, d;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof info === "string") {
                            info = { text: info };
                        }
                        postBody = body(Object(common["h" /* assign */])(metadata("Microsoft.SharePoint.Comments.comment"), info));
                        return [4 /*yield*/, spPost(this.clone(Replies, null), postBody)];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, Object(common["h" /* assign */])(Comment(odataUrlFrom(d)), d)];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("reps.add")
    ], _Replies.prototype, "add", null);
    _Replies = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("replies")
    ], _Replies);
    return _Replies;
}(sharepointqueryable_SharePointQueryableCollection));

var Replies = spInvokableFactory(types_Replies);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/item.js




addProp(types_Item, "comments", Comments);
types_Item.prototype.getLikedBy = function () {
    return spPost(this.clone(Item, "likedBy"));
};
types_Item.prototype.like = function () {
    return spPost(this.clone(Item, "like"));
};
types_Item.prototype.unlike = function () {
    return spPost(this.clone(Item, "unlike"));
};
types_Item.prototype.getLikedByInformation = function () {
    return this.clone(Item, "likedByInformation").expand("likedby")();
};
//# sourceMappingURL=item.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/types.js
















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
var types_ClientsidePage = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ClientsidePage, _super);
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
            _this.data.url = Object(common["i" /* combine */])(extractWebUrl(baseUrl), path);
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
            return Object(common["x" /* objectDefinedNotNull */])(this.json.TopicHeader) ? this.json.TopicHeader : "";
        },
        set: function (value) {
            this.json.TopicHeader = value;
            this._layoutPart.properties.topicHeader = value;
            if (Object(common["A" /* stringIsNullOrEmpty */])(value)) {
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
        var section = new types_CanvasSection(this, getNextOrder(this.sections), 1);
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
        var section = new types_CanvasSection(this, getNextOrder(this.sections), 2);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var item, pageData;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItem("Id", "CommentsDisabled")];
                    case 1:
                        item = _a.sent();
                        return [4 /*yield*/, SharePointQueryable(this, "_api/sitepages/pages(" + item.Id + ")")()];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var origImgUrl, site, web, imgFile, siteId_1, webId_1, imgId_1, listId_1, webUrl_1, batch, f, saveBody, updater, r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
                        }
                        if (!this._bannerImageDirty) return [3 /*break*/, 2];
                        origImgUrl = this.json.BannerImageUrl;
                        if (Object(common["s" /* isUrlAbsolute */])(origImgUrl)) {
                            // do our best to make this a server relative url by removing the x.sharepoint.com part
                            origImgUrl = origImgUrl.replace(/^https?:\/\/[a-z0-9\.]*?\.[a-z]{2,3}\//i, "/");
                        }
                        site = Site(extractWebUrl(this.toUrl()));
                        web = Web(extractWebUrl(this.toUrl()));
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
                        f = SharePointQueryable(webUrl_1, "_layouts/15/getpreview.ashx");
                        f.query.set("guidSite", "" + siteId_1);
                        f.query.set("guidWeb", "" + webId_1);
                        f.query.set("guidFile", "" + imgId_1);
                        this.bannerImageUrl = f.toUrlAndQuery();
                        if (!Object(common["x" /* objectDefinedNotNull */])(this._layoutPart.serverProcessedContent)) {
                            this._layoutPart.serverProcessedContent = {};
                        }
                        this._layoutPart.serverProcessedContent.imageSources = { imageSource: origImgUrl };
                        if (!Object(common["x" /* objectDefinedNotNull */])(this._layoutPart.serverProcessedContent.customMetadata)) {
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
                        return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/checkoutpage"))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        saveBody = Object.assign(metadata("SP.Publishing.SitePage"), {
                            AuthorByline: this.json.AuthorByline || [],
                            BannerImageUrl: this.bannerImageUrl,
                            CanvasContent1: this.getCanvasContent1(),
                            LayoutWebpartsContent: this.getLayoutWebpartsContent(),
                            Title: this.title,
                            TopicHeader: this.topicHeader,
                        });
                        updater = initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/savepage");
                        return [4 /*yield*/, spPost(updater, request_builders_headers({ "if-match": "*" }, body(saveBody)))];
                    case 5:
                        _a.sent();
                        r = true;
                        if (!publish) return [3 /*break*/, 7];
                        return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/publish"))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var d;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
                        }
                        return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/discardPage"), body(metadata("SP.Publishing.SitePage")))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var page;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CreateClientsidePage(web, pageName, title, this.pageLayout)];
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
        if (Object(common["x" /* objectDefinedNotNull */])(props)) {
            if (Object(common["p" /* hOP */])(props, "translateX")) {
                this._layoutPart.properties.translateX = props.translateX;
            }
            if (Object(common["p" /* hOP */])(props, "translateY")) {
                this._layoutPart.properties.translateY = props.translateY;
            }
            if (Object(common["p" /* hOP */])(props, "imageSourceType")) {
                this._layoutPart.properties.imageSourceType = props.imageSourceType;
            }
            if (Object(common["p" /* hOP */])(props, "altText")) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var initer, listData, item, itemData;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        initer = initFrom(this, "/_api/lists/EnsureClientRenderedSitePagesLibrary").select("EnableModeration", "EnableMinorVersions", "Id");
                        return [4 /*yield*/, spPost(initer)];
                    case 1:
                        listData = _a.sent();
                        item = (List(listData["odata.id"])).configureFrom(this).items.getById(this.json.Id);
                        return [4 /*yield*/, item.select.apply(item, selects)()];
                    case 2:
                        itemData = _a.sent();
                        return [2 /*return*/, Object(common["h" /* assign */])((Item(odataUrlFrom(itemData))).configureFrom(this), itemData)];
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
        this.data.url = Object(common["i" /* combine */])(this.data.parentUrl, path || "");
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
                var controlType = Object(common["p" /* hOP */])(controls[i], "controlType") ? controls[i].controlType : 0;
                switch (controlType) {
                    case 0:
                        // empty canvas column or page settings
                        if (Object(common["p" /* hOP */])(controls[i], "pageSettingsSlice")) {
                            this._pageSettings = controls[i];
                        }
                        else {
                            // we have an empty column
                            this.mergeColumnToTree(new types_CanvasColumn(controls[i]));
                        }
                        break;
                    case 3:
                        var part = new types_ClientsideWebpart(controls[i]);
                        this.mergePartToTree(part, part.data.position);
                        break;
                    case 4:
                        var textData = controls[i];
                        var text = new types_ClientsideText(textData.innerHTML, textData);
                        this.mergePartToTree(text, text.data.position);
                        break;
                }
            }
            reindex(this.sections);
        }
    };
    _ClientsidePage.prototype.getControls = function () {
        var _this = this;
        // reindex things
        reindex(this.sections);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var lastPubData;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null.");
                        }
                        if (!Object(common["A" /* stringIsNullOrEmpty */])(this.json.VersionInfo.LastVersionCreatedBy)) return [3 /*break*/, 2];
                        lastPubData = new Date(this.json.VersionInfo.LastVersionCreated);
                        if (!(lastPubData.getFullYear() < 2000)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.save(true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/" + method), body(metadata("SP.Publishing.SitePage")))];
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
            if (Object(common["p" /* hOP */])(positionData, "zoneIndex")) {
                zoneIndex = positionData.zoneIndex;
            }
            if (Object(common["p" /* hOP */])(positionData, "sectionIndex")) {
                sectionIndex = positionData.sectionIndex;
            }
            if (Object(common["p" /* hOP */])(positionData, "sectionFactor")) {
                sectionFactor = positionData.sectionFactor;
            }
            if (Object(common["p" /* hOP */])(positionData, "layoutIndex")) {
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
        var order = Object(common["p" /* hOP */])(column.data, "position") && Object(common["p" /* hOP */])(column.data.position, "zoneIndex") ? column.data.position.zoneIndex : 0;
        var layoutIndex = Object(common["p" /* hOP */])(column.data, "position") && Object(common["p" /* hOP */])(column.data.position, "layoutIndex") ? column.data.position.layoutIndex : 1;
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("csp.load")
    ], _ClientsidePage.prototype, "load", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("csp.save")
    ], _ClientsidePage.prototype, "save", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("csp.discardPageCheckout")
    ], _ClientsidePage.prototype, "discardPageCheckout", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("csp.promoteToNews")
    ], _ClientsidePage.prototype, "promoteToNews", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("csp.copy")
    ], _ClientsidePage.prototype, "copy", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("csp.getItem")
    ], _ClientsidePage.prototype, "getItem", null);
    return _ClientsidePage;
}(sharepointqueryable_SharePointQueryable));

/**
 * Invokable factory for IClientSidePage instances
 */
var ClientsidePage = function (baseUrl, path, json, noInit, sections, commentsDisabled) {
    if (noInit === void 0) { noInit = false; }
    if (sections === void 0) { sections = []; }
    if (commentsDisabled === void 0) { commentsDisabled = false; }
    return invokableFactory(types_ClientsidePage)(baseUrl, path, json, noInit, sections, commentsDisabled);
};
/**
 * Loads a client side page from the supplied IFile instance
 *
 * @param file Source IFile instance
 */
var ClientsidePageFromFile = function (file) { return Object(tslib_es6["a" /* __awaiter */])(void 0, void 0, void 0, function () {
    var item, page;
    return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, file.getItem()];
            case 1:
                item = _a.sent();
                page = ClientsidePage(extractWebUrl(file.toUrl()), "", { Id: item.Id }, true);
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
var CreateClientsidePage = function (web, pageName, title, PageLayoutType) {
    if (PageLayoutType === void 0) { PageLayoutType = "Article"; }
    return Object(tslib_es6["a" /* __awaiter */])(void 0, void 0, void 0, function () {
        var pageInitData, newPage;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // patched because previously we used the full page name with the .aspx at the end
                    // this allows folk's existing code to work after the re-write to the new API
                    pageName = pageName.replace(/\.aspx$/i, "");
                    return [4 /*yield*/, spPost(initFrom(web, "_api/sitepages/pages"), body(Object.assign(metadata("SP.Publishing.SitePage"), { PageLayoutType: PageLayoutType })))];
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
var types_CanvasSection = /** @class */ (function () {
    function CanvasSection(page, order, layoutIndex, columns, _emphasis) {
        if (columns === void 0) { columns = []; }
        if (_emphasis === void 0) { _emphasis = 0; }
        this.page = page;
        this.columns = columns;
        this._emphasis = _emphasis;
        this._memId = Object(common["m" /* getGUID */])();
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
        var column = new types_CanvasColumn();
        column.section = this;
        column.data.position.zoneIndex = this.order;
        column.data.position.layoutIndex = layoutIndex;
        column.data.position.sectionFactor = factor;
        column.order = getNextOrder(this.columns);
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
        reindex(this.page.sections);
    };
    return CanvasSection;
}());

var types_CanvasColumn = /** @class */ (function () {
    function CanvasColumn(json, controls) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(CanvasColumn.Default)); }
        if (controls === void 0) { controls = []; }
        this.json = json;
        this.controls = controls;
        this._section = null;
        this._memId = Object(common["m" /* getGUID */])();
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
        reindex(this.section.columns);
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

var types_ColumnControl = /** @class */ (function () {
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
        reindex(this.column.controls);
    };
    ColumnControl.prototype.setData = function (data) {
        this.json = data;
    };
    return ColumnControl;
}());

var types_ClientsideText = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ClientsideText, _super);
    function ClientsideText(text, json) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(ClientsideText.Default)); }
        var _this = this;
        if (Object(common["A" /* stringIsNullOrEmpty */])(json.id)) {
            json.id = Object(common["m" /* getGUID */])();
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
        this.data.position.controlIndex = getNextOrder(col.controls);
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
}(types_ColumnControl));

var types_ClientsideWebpart = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ClientsideWebpart, _super);
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
        this.data.webPartData.properties = Object(common["h" /* assign */])(this.data.webPartData.properties, properties);
        return this;
    };
    ClientsideWebpart.prototype.getProperties = function () {
        return this.data.webPartData.properties;
    };
    ClientsideWebpart.prototype.onColumnChange = function (col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = getNextOrder(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.data.position.sectionIndex;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    };
    ClientsideWebpart.prototype.import = function (component) {
        var id = Object(common["m" /* getGUID */])();
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
}(types_ColumnControl));

//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/web.js



types_Web.prototype.getClientsideWebParts = function () {
    return this.clone(SharePointQueryableCollection, "GetClientSideWebParts")();
};
types_Web.prototype.addClientsidePage = function (pageName, title, layout) {
    if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
    return CreateClientsidePage(this, pageName, title, layout);
};
types_Web.prototype.loadClientsidePage = function (path) {
    return ClientsidePageFromFile(this.getFileByServerRelativePath(path));
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/types.js







var types_ContentTypes = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ContentTypes, _super);
    function _ContentTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    _ContentTypes.prototype.addAvailableContentType = function (contentTypeId) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(ContentTypes, "addAvailableContentType"), body({ "contentTypeId": contentTypeId }))];
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
        return tag.configure(ContentType(this).concat("('" + id + "')"), "cts.getById");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object.assign(metadata("SP.ContentType"), {
                            "Description": description,
                            "Group": group,
                            "Id": { "StringValue": id },
                            "Name": name,
                        }, additionalSettings));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { contentType: this.getById(data.id), data: data }];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("cts.addAvailableContentType")
    ], _ContentTypes.prototype, "addAvailableContentType", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("cts.add")
    ], _ContentTypes.prototype, "add", null);
    _ContentTypes = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("contenttypes")
    ], _ContentTypes);
    return _ContentTypes;
}(sharepointqueryable_SharePointQueryableCollection));

var ContentTypes = spInvokableFactory(types_ContentTypes);
var types_ContentType = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ContentType, _super);
    function _ContentType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("ct");
        return _this;
    }
    Object.defineProperty(_ContentType.prototype, "fieldLinks", {
        /**
         * Gets the column (also known as field) references in the content type.
         */
        get: function () {
            return tag.configure(FieldLinks(this), "ct.fieldLinks");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "fields", {
        /**
         * Gets a value that specifies the collection of fields for the content type.
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "fields"), "ct.fields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "parent", {
        /**
         * Gets the parent content type of the content type.
         */
        get: function () {
            return tag.configure(ContentType(this, "parent"), "ct.parent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "workflowAssociations", {
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "workflowAssociations"), "ct.workflowAssociations");
        },
        enumerable: true,
        configurable: true
    });
    return _ContentType;
}(sharepointqueryable_SharePointQueryableInstance));

var ContentType = spInvokableFactory(types_ContentType);
var types_FieldLinks = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_FieldLinks, _super);
    function _FieldLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    *  Gets a FieldLink by GUID id
    *
    * @param id The GUID id of the field link
    */
    _FieldLinks.prototype.getById = function (id) {
        return tag.configure(FieldLink(this).concat("(guid'" + id + "')"), "fls.getById");
    };
    _FieldLinks = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("fieldlinks")
    ], _FieldLinks);
    return _FieldLinks;
}(sharepointqueryable_SharePointQueryableCollection));

var FieldLinks = spInvokableFactory(types_FieldLinks);
var types_FieldLink = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_FieldLink, _super);
    function _FieldLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _FieldLink;
}(sharepointqueryable_SharePointQueryableInstance));

var FieldLink = spInvokableFactory(types_FieldLink);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/web.js



addProp(types_Web, "contentTypes", ContentTypes);
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/item.js



addProp(types_Item, "contentType", ContentType, "ContentType");
//# sourceMappingURL=item.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/list.js



addProp(types_List, "contentTypes", ContentTypes);
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/index.js




//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/types.js






var types_Features = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Features, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Features, "add"), body({
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
        var feature = Feature(this);
        feature.concat("('" + id + "')");
        return tag.configure(feature, "fes.getById");
    };
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    _Features.prototype.remove = function (id, force) {
        if (force === void 0) { force = false; }
        return spPost(this.clone(Features, "remove"), body({
            featureId: id,
            force: force,
        }));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("fes.add")
    ], _Features.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fes.remove")
    ], _Features.prototype, "remove", null);
    _Features = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("features")
    ], _Features);
    return _Features;
}(sharepointqueryable_SharePointQueryableCollection));

var Features = spInvokableFactory(types_Features);
var types_Feature = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Feature, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var removeDependency, feature, promise;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, Feature(this).select("DefinitionId")()];
                    case 1:
                        feature = _a.sent();
                        promise = this.getParent(Features, this.parentUrl, "", this.batch).remove(feature.DefinitionId, force);
                        removeDependency();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("fe.deactivate")
    ], _Feature.prototype, "deactivate", null);
    return _Feature;
}(sharepointqueryable_SharePointQueryableInstance));

var Feature = spInvokableFactory(types_Feature);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/site.js



addProp(types_Site, "features", Features);
//# sourceMappingURL=site.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/web.js



addProp(types_Web, "features", Features);
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/index.js



//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/types.js








var types_Fields = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Fields, _super);
    function _Fields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a field from the collection by id
     *
     * @param id The Id of the list
     */
    _Fields.prototype.getById = function (id) {
        return tag.configure(Field(this).concat("('" + id + "')"), "fs.getById");
    };
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    _Fields.prototype.getByTitle = function (title) {
        return tag.configure(Field(this, "getByTitle('" + title + "')"), "fs.getByTitle");
    };
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    _Fields.prototype.getByInternalNameOrTitle = function (name) {
        return tag.configure(Field(this, "getByInternalNameOrTitle('" + name + "')"), "fs.getByInternalNameOrTitle");
    };
    /**
     * Creates a field based on the specified schema
     *
     * @param xml A string or XmlSchemaFieldCreationInformation instance descrbing the field to create
     */
    _Fields.prototype.createFieldAsXml = function (xml) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof xml === "string") {
                            xml = { SchemaXml: xml };
                        }
                        postBody = body({
                            "parameters": Object(common["h" /* assign */])(metadata("SP.XmlSchemaFieldCreationInformation"), xml),
                        });
                        return [4 /*yield*/, spPost(this.clone(Fields, "createfieldasxml"), postBody)];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object.assign(metadata(fieldType), {
                            "Title": title,
                        }, properties));
                        if (!tag.isTagged(this)) {
                            tag.configure(this, "fs.add");
                        }
                        return [4 /*yield*/, spPost(this.clone(Fields, null), postBody)];
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
        return this.add(title, "SP.FieldText", Object(common["h" /* assign */])(props, properties));
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
        return this.add(title, "SP.FieldCalculated", Object(common["h" /* assign */])(props, properties));
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
        return this.add(title, "SP.FieldDateTime", Object(common["h" /* assign */])(props, properties));
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
            props = Object(common["h" /* assign */])({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = Object(common["h" /* assign */])({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldNumber", Object(common["h" /* assign */])(props, properties));
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
            props = Object(common["h" /* assign */])({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = Object(common["h" /* assign */])({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldCurrency", Object(common["h" /* assign */])(props, properties));
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
        return this.add(title, "SP.FieldMultiLineText", Object(common["h" /* assign */])(props, properties));
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
        return this.add(title, "SP.FieldUrl", Object(common["h" /* assign */])(props, properties));
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
        return this.add(title, "SP.FieldUser", Object(common["h" /* assign */])(props, properties));
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var props, postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = Object(common["h" /* assign */])({
                            FieldTypeKind: 7,
                            LookupFieldName: lookupFieldName,
                            LookupListId: lookupListId,
                            Title: title,
                        }, properties);
                        postBody = body({
                            "parameters": Object(common["h" /* assign */])(metadata("SP.FieldCreationInformation"), props),
                        });
                        return [4 /*yield*/, spPost(this.clone(Fields, "addfield"), postBody)];
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
        return this.add(title, "SP.FieldChoice", Object(common["h" /* assign */])(props, properties));
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
        return this.add(title, "SP.FieldMultiChoice", Object(common["h" /* assign */])(props, properties));
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
        return this.add(title, "SP.Field", Object(common["h" /* assign */])(props, properties));
    };
    /**
    * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
    *
    * @param displayName The display name of the new field.
    * @param primaryLookupFieldId The guid of the primary Lookup Field.
    * @param showField Which field to show from the lookup list.
    */
    _Fields.prototype.addDependentLookupField = function (displayName, primaryLookupFieldId, showField) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var path, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "adddependentlookupfield(displayName='" + displayName + "', primarylookupfieldid='" + primaryLookupFieldId + "', showfield='" + showField + "')";
                        return [4 /*yield*/, spPost(this.clone(Fields, path))];
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
        return this.add(title, "SP.FieldLocation", Object(common["h" /* assign */])(props, properties));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.createFieldAsXml")
    ], _Fields.prototype, "createFieldAsXml", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addText")
    ], _Fields.prototype, "addText", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addCalculated")
    ], _Fields.prototype, "addCalculated", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addDateTime")
    ], _Fields.prototype, "addDateTime", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addNumber")
    ], _Fields.prototype, "addNumber", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addCurrency")
    ], _Fields.prototype, "addCurrency", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addMultilineText")
    ], _Fields.prototype, "addMultilineText", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addUrl")
    ], _Fields.prototype, "addUrl", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addUser")
    ], _Fields.prototype, "addUser", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addLookup")
    ], _Fields.prototype, "addLookup", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addChoice")
    ], _Fields.prototype, "addChoice", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addMultiChoice")
    ], _Fields.prototype, "addMultiChoice", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addBoolean")
    ], _Fields.prototype, "addBoolean", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addDependentLookupField")
    ], _Fields.prototype, "addDependentLookupField", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addLocation")
    ], _Fields.prototype, "addLocation", null);
    _Fields = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("fields")
    ], _Fields);
    return _Fields;
}(sharepointqueryable_SharePointQueryableCollection));

var Fields = spInvokableFactory(types_Fields);
var types_Field = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Field, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var req, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = body(Object(common["h" /* assign */])(metadata(fieldType), properties), request_builders_headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, req)];
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
        return spPost(this.clone(Field, "setshowindisplayform(" + show + ")"));
    };
    /**
     * Sets the value of the ShowInEditForm property for this field.
     */
    _Field.prototype.setShowInEditForm = function (show) {
        return spPost(this.clone(Field, "setshowineditform(" + show + ")"));
    };
    /**
     * Sets the value of the ShowInNewForm property for this field.
     */
    _Field.prototype.setShowInNewForm = function (show) {
        return spPost(this.clone(Field, "setshowinnewform(" + show + ")"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.update")
    ], _Field.prototype, "update", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.setShowInDisplayForm")
    ], _Field.prototype, "setShowInDisplayForm", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.setShowInEditForm")
    ], _Field.prototype, "setShowInEditForm", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.setShowInNewForm")
    ], _Field.prototype, "setShowInNewForm", null);
    return _Field;
}(sharepointqueryable_SharePointQueryableInstance));

var Field = spInvokableFactory(types_Field);
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/web.js



addProp(types_Web, "fields", Fields);
addProp(types_Web, "availablefields", Fields, "availablefields");
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/list.js



addProp(types_List, "fields", Fields);
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/index.js




//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/types.js











var types_Folders = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Folders, _super);
    function _Folders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    _Folders.prototype.getByName = function (name) {
        return tag.configure(Folder(this).concat("('" + escapeQueryStrValue(name) + "')"), "fs.getByName");
    };
    /**
     * Adds a new folder at the specified URL
     *
     * @param url
     */
    _Folders.prototype.add = function (url) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Folders, "add('" + escapeQueryStrValue(url) + "')"))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Folders, "addUsingPath(DecodedUrl='" + escapeQueryStrValue(serverRelativeUrl) + "',overwrite=" + overwrite + ")"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: Folder(extractWebUrl(this.toUrl()), "_api/web/getFolderByServerRelativePath(decodedUrl='" + escapeQueryStrValue(serverRelativeUrl) + "')"),
                            }];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.add")
    ], _Folders.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("fs.addUsingPath")
    ], _Folders.prototype, "addUsingPath", null);
    _Folders = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("folders")
    ], _Folders);
    return _Folders;
}(sharepointqueryable_SharePointQueryableCollection));

var Folders = spInvokableFactory(types_Folders);
var types_Folder = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Folder, _super);
    function _Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("f");
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
            return tag.configure(SharePointQueryableCollection(this, "contentTypeOrder"), "f.contentTypeOrder");
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
            return Folders(this);
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
            return tag.configure(SharePointQueryableInstance(this, "listItemAllFields"), "f.listItemAllFields");
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
            return tag.configure(Folder(this, "parentFolder"), "f.parentFolder");
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
            return tag.configure(SharePointQueryableInstance(this, "properties"), "f.properties");
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
            return tag.configure(SharePointQueryable(this, "serverRelativeUrl"), "f.serverRelativeUrl");
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
            return tag.configure(SharePointQueryableCollection(this, "uniqueContentTypeOrder"), "f.uniqueContentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Folder.prototype.recycle = function () {
        return spPost(this.clone(Folder, "recycle"));
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    _Folder.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, d;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.listItemAllFields;
                        return [4 /*yield*/, q.select.apply(q, selects)()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, Object(common["h" /* assign */])(Item(odataUrlFrom(d)), d)];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib_es6["d" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, spPost(Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFolder()"), body({
                                destUrl: Object(common["s" /* isUrlAbsolute */])(destUrl) ? destUrl : "" + hostUrl + destUrl,
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
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.copyTo = function (destUrl) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib_es6["d" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, spPost(Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFolder()"), body({
                                destUrl: Object(common["s" /* isUrlAbsolute */])(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                srcUrl: "" + hostUrl + srcUrl,
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    _Folder.prototype.getShareable = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var d, shareable;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SharePointQueryableInstance, "listItemAllFields", false).select("odata.id")()];
                    case 1:
                        d = _a.sent();
                        shareable = Item(odataUrlFrom(d));
                        // we need to handle batching
                        if (this.hasBatch) {
                            shareable = shareable.inBatch(this.batch);
                        }
                        return [2 /*return*/, shareable];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.recycle")
    ], _Folder.prototype, "recycle", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.getItem")
    ], _Folder.prototype, "getItem", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.moveTo")
    ], _Folder.prototype, "moveTo", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.copyTo")
    ], _Folder.prototype, "copyTo", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("f.getShareable")
    ], _Folder.prototype, "getShareable", null);
    return _Folder;
}(sharepointqueryable_SharePointQueryableInstance));

var Folder = spInvokableFactory(types_Folder);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/folder.js



addProp(types_Folder, "files", Files);
//# sourceMappingURL=folder.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/item.js



addProp(types_Item, "file", File, "file");
//# sourceMappingURL=item.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/index.js




//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/item.js



addProp(types_Item, "folder", Folder, "folder");
//# sourceMappingURL=item.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/list.js



addProp(types_List, "rootFolder", Folder, "rootFolder");
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/web.js




addProp(types_Web, "folders", Folders);
addProp(types_Web, "rootFolder", Folder, "rootFolder");
types_Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
    return Folder(this, "getFolderByServerRelativeUrl('" + escapeQueryStrValue(folderRelativeUrl) + "')");
};
types_Web.prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return Folder(this, "getFolderByServerRelativePath(decodedUrl='" + escapeQueryStrValue(folderRelativeUrl) + "')");
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/index.js




//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/types.js




/**
 * Describes a collection of Form objects
 *
 */
var types_Forms = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Forms, _super);
    function _Forms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    _Forms.prototype.getById = function (id) {
        return tag.configure(Form(this).concat("('" + id + "')"), "fos.getById");
    };
    _Forms = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("forms")
    ], _Forms);
    return _Forms;
}(sharepointqueryable_SharePointQueryableCollection));

var Forms = spInvokableFactory(types_Forms);
/**
 * Describes a single of Form instance
 *
 */
var types_Form = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Form, _super);
    function _Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Form;
}(sharepointqueryable_SharePointQueryableInstance));

var Form = spInvokableFactory(types_Form);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/list.js



addProp(types_List, "forms", Forms, "forms");
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/types.js





var types_HubSites = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_HubSites, _super);
    function _HubSites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    _HubSites.prototype.getById = function (id) {
        return tag.configure(HubSite(this, "GetById?hubSiteId='" + id + "'"), "hss.getById");
    };
    _HubSites = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/hubsites")
    ], _HubSites);
    return _HubSites;
}(sharepointqueryable_SharePointQueryableCollection));

var HubSites = spInvokableFactory(types_HubSites);
var types_HubSite = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_HubSite, _super);
    function _HubSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the ISite instance associated with this hubsite
     */
    _HubSite.prototype.getSite = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var d;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.select("SiteUrl")()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, Site(d.SiteUrl)];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("hs.getSite")
    ], _HubSite.prototype, "getSite", null);
    return _HubSite;
}(sharepointqueryable_SharePointQueryableInstance));

var HubSite = spInvokableFactory(types_HubSite);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/site.js



types_Site.prototype.joinHubSite = function (siteId) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Site, "joinHubSite('" + siteId + "')"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
types_Site.prototype.registerHubSite = function () {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Site, "registerHubSite"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
types_Site.prototype.unRegisterHubSite = function () {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Site, "unRegisterHubSite"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=site.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/web.js



types_Web.prototype.hubSiteData = function (forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var data;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(Web, "hubSiteData(" + forceRefresh + ")")()];
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
types_Web.prototype.syncHubSiteTheme = function () {
    return spPost(this.clone(Web, "syncHubSiteTheme"));
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/index.js





Reflect.defineProperty(rest_SPRest.prototype, "hubSites", {
    configurable: true,
    enumerable: true,
    get: function () {
        return HubSites(this._baseUrl).configure(this._options);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/types.js








/**
 * Represents a collection of navigation nodes
 *
 */
var types_NavigationNodes = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_NavigationNodes, _super);
    function _NavigationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    _NavigationNodes.prototype.getById = function (id) {
        return tag.configure(NavigationNode(this).concat("(" + id + ")"), "nns.getById");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object(common["h" /* assign */])(metadata("SP.NavigationNode"), {
                            IsVisible: visible,
                            Title: title,
                            Url: url,
                        }));
                        return [4 /*yield*/, spPost(this.clone(NavigationNodes, null), postBody)];
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
        var postBody = body({
            nodeId: nodeId,
            previousNodeId: previousNodeId,
        });
        return spPost(this.clone(NavigationNodes, "MoveAfter"), postBody);
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("nns.add")
    ], _NavigationNodes.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("nns.moveAfter")
    ], _NavigationNodes.prototype, "moveAfter", null);
    return _NavigationNodes;
}(sharepointqueryable_SharePointQueryableCollection));

var NavigationNodes = spInvokableFactory(types_NavigationNodes);
/**
 * Represents an instance of a navigation node
 *
 */
var types_NavigationNode = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_NavigationNode, _super);
    function _NavigationNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("nn");
        return _this;
    }
    Object.defineProperty(_NavigationNode.prototype, "children", {
        /**
         * Represents the child nodes of this node
         */
        get: function () {
            return tag.configure(NavigationNodes(this, "children"), "nn.children");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object(common["h" /* assign */])(metadata("SP.NavigationNode"), properties), request_builders_headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, postBody)];
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("nn.update")
    ], _NavigationNode.prototype, "update", null);
    return _NavigationNode;
}(sharepointqueryable_SharePointQueryableInstance));

var NavigationNode = spInvokableFactory(types_NavigationNode);
/**
 * Exposes the navigation components
 *
 */
var types_Navigation = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Navigation, _super);
    function _Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Navigation.prototype, "quicklaunch", {
        /**
         * Gets the quicklaunch navigation nodes for the current context
         *
         */
        get: function () {
            return tag.configure(NavigationNodes(this, "quicklaunch"), "n.quicklaunch");
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
            return tag.configure(NavigationNodes(this, "topnavigationbar"), "n.topnavigationbar");
        },
        enumerable: true,
        configurable: true
    });
    _Navigation = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("navigation")
    ], _Navigation);
    return _Navigation;
}(sharepointqueryable_SharePointQueryable));

var Navigation = spInvokableFactory(types_Navigation);
/**
 * Represents the top level navigation service
 */
var types_NavigationService = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_NavigationService, _super);
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
        return spPost(NavigationService("MenuState"), body({
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
        return spPost(NavigationService("MenuNodeKey"), body({
            currentUrl: currentUrl,
            mapProviderName: mapProviderName,
        }));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("ns.getMenuState")
    ], _NavigationService.prototype, "getMenuState", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ns.getMenuNodeKey")
    ], _NavigationService.prototype, "getMenuNodeKey", null);
    return _NavigationService;
}(sharepointqueryable_SharePointQueryable));

var NavigationService = function (path) { return new types_NavigationService(path); };
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/web.js



addProp(types_Web, "navigation", Navigation);
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/index.js




Reflect.defineProperty(rest_SPRest.prototype, "navigation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return NavigationService().configure(this._options);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/profiles/types.js







var types_Profiles = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Profiles, _super);
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    function _Profiles(baseUrl, path) {
        if (path === void 0) { path = "_api/sp.userprofiles.peoplemanager"; }
        var _this = _super.call(this, baseUrl, path) || this;
        _this.clientPeoplePickerQuery = (new types_ClientPeoplePickerQuery(baseUrl)).configureFrom(_this);
        _this.profileLoader = (new types_ProfileLoader(baseUrl)).configureFrom(_this);
        return _this;
    }
    Object.defineProperty(_Profiles.prototype, "editProfileLink", {
        /**
         * The url of the edit profile page for the current user
         */
        get: function () {
            return this.clone(Profiles, "EditProfileLink").get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Profiles.prototype, "isMyPeopleListPublic", {
        /**
         * A boolean value that indicates whether the current user's "People I'm Following" list is public
         */
        get: function () {
            return this.clone(Profiles, "IsMyPeopleListPublic").get();
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
        var q = this.clone(Profiles, "amifollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.amIFollowing = function (loginName) {
        var q = this.clone(Profiles, "amifollowing(@v)");
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
        return this.clone(Profiles, "getfollowedtags(" + maxCount + ")").get();
    };
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.getFollowersFor = function (loginName) {
        var q = this.clone(Profiles, "getfollowersfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(_Profiles.prototype, "myFollowers", {
        /**
         * Gets the people who are following the current user
         *
         */
        get: function () {
            return SharePointQueryableCollection(this, "getmyfollowers");
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
        var q = this.clone(Profiles, "getpeoplefollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    _Profiles.prototype.getPropertiesFor = function (loginName) {
        var q = this.clone(Profiles, "getpropertiesfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(_Profiles.prototype, "trendingTags", {
        /**
         * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
         *
         */
        get: function () {
            var q = this.clone(Profiles, null);
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
        var q = this.clone(Profiles, "getuserprofilepropertyfor(accountname=@v, propertyname='" + propertyName + "')");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.hideSuggestion = function (loginName) {
        var q = this.clone(Profiles, "hidesuggestion(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return spPost(q);
    };
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    _Profiles.prototype.isFollowing = function (follower, followee) {
        var q = this.clone(Profiles, null);
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
        return spPost(request, body(String.fromCharCode.apply(null, new Uint16Array(buffer))));
    };
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    _Profiles.prototype.setSingleValueProfileProperty = function (accountName, propertyName, propertyValue) {
        return spPost(this.clone(Profiles, "SetSingleValueProfileProperty"), body({
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
        return spPost(this.clone(Profiles, "SetMultiValuedProfileProperty"), body({
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
}(sharepointqueryable_SharePointQueryableInstance));

var Profiles = spInvokableFactory(types_Profiles);
var types_ProfileLoader = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ProfileLoader, _super);
    function ProfileLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    ProfileLoader.prototype.createPersonalSiteEnqueueBulk = function (emails) {
        return spPost(this.clone(ProfileLoaderFactory, "createpersonalsiteenqueuebulk", false), body({ "emailIDs": emails }));
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
            return spPost(q);
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
            return spPost(this.clone(ProfileLoaderFactory, "getuserprofile"));
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
        return spPost(this.clone(ProfileLoaderFactory, "getuserprofile/createpersonalsiteenque(" + interactiveRequest + ")"));
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    ProfileLoader.prototype.shareAllSocialData = function (share) {
        return spPost(this.clone(ProfileLoaderFactory, "getuserprofile/shareallsocialdata(" + share + ")"));
    };
    ProfileLoader = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/sp.userprofiles.profileloader.getprofileloader")
    ], ProfileLoader);
    return ProfileLoader;
}(sharepointqueryable_SharePointQueryable));
var ProfileLoaderFactory = function (baseUrl, path) {
    return new types_ProfileLoader(baseUrl, path);
};
var types_ClientPeoplePickerQuery = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ClientPeoplePickerQuery, _super);
    function ClientPeoplePickerQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, res;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(ClientPeoplePickerFactory, null);
                        q.concat(".clientpeoplepickerresolveuser");
                        return [4 /*yield*/, spPost(q, this.getBodyFrom(queryParams))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var q, res;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(ClientPeoplePickerFactory, null);
                        q.concat(".clientpeoplepickersearchuser");
                        return [4 /*yield*/, spPost(q, this.getBodyFrom(queryParams))];
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
        return body({ "queryParams": Object(common["h" /* assign */])(metadata("SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters"), queryParams) });
    };
    ClientPeoplePickerQuery = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface")
    ], ClientPeoplePickerQuery);
    return ClientPeoplePickerQuery;
}(sharepointqueryable_SharePointQueryable));
var ClientPeoplePickerFactory = function (baseUrl, path) {
    return new types_ClientPeoplePickerQuery(baseUrl, path);
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/profiles/index.js



Reflect.defineProperty(rest_SPRest.prototype, "profiles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Profiles(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/types.js







var types_RegionalSettings = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_RegionalSettings, _super);
    function _RegionalSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_RegionalSettings.prototype, "installedLanguages", {
        /**
         * Gets the collection of languages used in a server farm.
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "installedlanguages"), "rs.installedLanguages");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_RegionalSettings.prototype, "timeZone", {
        /**
         * Gets time zone
         */
        get: function () {
            return tag.configure(TimeZone(this), "rs.tz");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_RegionalSettings.prototype, "timeZones", {
        /**
         * Gets time zones
         */
        get: function () {
            return tag.configure(TimeZones(this), "rs.tzs");
        },
        enumerable: true,
        configurable: true
    });
    _RegionalSettings = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("regionalsettings")
    ], _RegionalSettings);
    return _RegionalSettings;
}(sharepointqueryable_SharePointQueryableInstance));

var RegionalSettings = spInvokableFactory(types_RegionalSettings);
var types_TimeZone = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_TimeZone, _super);
    function _TimeZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    _TimeZone.prototype.utcToLocalTime = function (utcTime) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var dateIsoString, res;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof utcTime === "string") {
                            dateIsoString = utcTime;
                        }
                        else {
                            dateIsoString = utcTime.toISOString();
                        }
                        return [4 /*yield*/, spPost(this.clone(TimeZone, "utctolocaltime('" + dateIsoString + "')"))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(res, "UTCToLocalTime") ? res.UTCToLocalTime : res];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var dateIsoString, res;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof localTime === "string") {
                            dateIsoString = localTime;
                        }
                        else {
                            dateIsoString = Object(common["j" /* dateAdd */])(localTime, "minute", localTime.getTimezoneOffset() * -1).toISOString();
                        }
                        return [4 /*yield*/, spPost(this.clone(TimeZone, "localtimetoutc('" + dateIsoString + "')"))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(res, "LocalTimeToUTC") ? res.LocalTimeToUTC : res];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("tz.utcToLocalTime")
    ], _TimeZone.prototype, "utcToLocalTime", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("tz.localTimeToUTC")
    ], _TimeZone.prototype, "localTimeToUTC", null);
    _TimeZone = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("timezone")
    ], _TimeZone);
    return _TimeZone;
}(sharepointqueryable_SharePointQueryableInstance));

var TimeZone = spInvokableFactory(types_TimeZone);
var types_TimeZones = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_TimeZones, _super);
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
        return spPost(this.clone(TimeZones, "GetById(" + id + ")").usingParser(spODataEntity(TimeZone)));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("tzs.getById")
    ], _TimeZones.prototype, "getById", null);
    _TimeZones = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("timezones")
    ], _TimeZones);
    return _TimeZones;
}(sharepointqueryable_SharePointQueryableCollection));

var TimeZones = spInvokableFactory(types_TimeZones);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/web.js



addProp(types_Web, "regionalSettings", RegionalSettings);
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/related-items/types.js







var types_RelatedItemManager = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_RelatedItemManager, _super);
    function _RelatedItemManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _RelatedItemManager.prototype.getRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManager, null);
        query.concat(".GetRelatedItems");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    };
    _RelatedItemManager.prototype.getPageOneRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManager, null);
        query.concat(".GetPageOneRelatedItems");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    };
    _RelatedItemManager.prototype.addSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemID, targetWebUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
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
    };
    _RelatedItemManager.prototype.addSingleLinkToUrl = function (sourceListName, sourceItemId, targetItemUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLinkToUrl");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            TargetItemUrl: targetItemUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.addSingleLinkFromUrl = function (sourceItemUrl, targetListName, targetItemId, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLinkFromUrl");
        return spPost(query, body({
            SourceItemUrl: sourceItemUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.deleteSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemId, targetWebUrl, tryDeleteReverseLink) {
        if (tryDeleteReverseLink === void 0) { tryDeleteReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
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
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("rim.getRelatedItems")
    ], _RelatedItemManager.prototype, "getRelatedItems", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("rim.getPageOneRelatedItems")
    ], _RelatedItemManager.prototype, "getPageOneRelatedItems", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("rim.addSingleLink")
    ], _RelatedItemManager.prototype, "addSingleLink", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("rim.ToUrl")
    ], _RelatedItemManager.prototype, "addSingleLinkToUrl", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("rim.FromUrl")
    ], _RelatedItemManager.prototype, "addSingleLinkFromUrl", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("rim.deleteSingleLink")
    ], _RelatedItemManager.prototype, "deleteSingleLink", null);
    _RelatedItemManager = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/SP.RelatedItemManager")
    ], _RelatedItemManager);
    return _RelatedItemManager;
}(sharepointqueryable_SharePointQueryable));

var RelatedItemManager = function (url) { return new types_RelatedItemManager(extractWebUrl(typeof url === "string" ? url : url.toUrl())); };
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/related-items/index.js

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/query.js








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
var query_props = new Map([]);
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
            var propKey = query_props.has(pk) ? query_props.get(pk) : toPropCase(pk);
            self.query[propKey] = true;
            return proxy;
        },
    });
}
/**
 * Describes the search API
 *
 */
var query_Search = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Search, _super);
    function _Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns Promise
     */
    _Search.prototype.execute = function (queryInit) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var query, postBody, cacheKey, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.parseQuery(queryInit);
                        postBody = body({
                            request: Object(common["h" /* assign */])(metadata("Microsoft.Office.Server.Search.REST.SearchRequest"), Object.assign({}, query, {
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
                            cacheKey = "PnPjs.SearchWithCaching(" + Object(common["n" /* getHashCode */])(postBody.body) + ")";
                            if (Object(common["x" /* objectDefinedNotNull */])(this.data.cachingOptions)) {
                                // if our key ends in the postquery url we overwrite it
                                if (/\/_api\/search\/postquery$/i.test(this.data.cachingOptions.key)) {
                                    this.data.cachingOptions.key = cacheKey;
                                }
                            }
                            else {
                                this.data.cachingOptions = new caching_CachingOptions(cacheKey);
                            }
                        }
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new query_SearchResults(data, this.toUrl(), query)];
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
        return { results: Object(common["q" /* isArray */])(prop) ? prop : [prop] };
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("se.execute")
    ], _Search.prototype, "execute", null);
    _Search = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/search/postquery")
    ], _Search);
    return _Search;
}(sharepointqueryable_SharePointQueryableInstance));

var Search = function (baseUrl, options) {
    if (options === void 0) { options = {}; }
    return function (queryInit) {
        return (new query_Search(baseUrl, "")).configure(options).execute(queryInit);
    };
};
var query_SearchResults = /** @class */ (function () {
    function SearchResults(rawResponse, _url, _query, _raw, _primary) {
        if (_raw === void 0) { _raw = null; }
        if (_primary === void 0) { _primary = null; }
        this._url = _url;
        this._query = _query;
        this._raw = _raw;
        this._primary = _primary;
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
        var rows = pageSize !== undefined ? pageSize : Object(common["p" /* hOP */])(this._query, "RowLimit") ? this._query.RowLimit : 10;
        var query = Object(common["h" /* assign */])(this._query, {
            RowLimit: rows,
            StartRow: rows * (pageNumber - 1),
        });
        // we have reached the end
        if (query.StartRow > this.TotalRows) {
            return Promise.resolve(null);
        }
        return Search(this._url)(query);
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
            for (var tempResults_1 = Object(tslib_es6["f" /* __values */])(tempResults), tempResults_1_1 = tempResults_1.next(); !tempResults_1_1.done; tempResults_1_1 = tempResults_1.next()) {
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

//# sourceMappingURL=query.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/suggest.js





var suggest_Suggest = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Suggest, _super);
    function _Suggest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Suggest.prototype.execute = function (query) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var response, mapper;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mapQueryToQueryString(query);
                        return [4 /*yield*/, this.get()];
                    case 1:
                        response = _a.sent();
                        mapper = Object(common["p" /* hOP */])(response, "suggest") ? function (s_1) { return response.suggest[s_1].results; } : function (s_2) { return response[s_2]; };
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
            if (Object(common["p" /* hOP */])(q, checkProp)) {
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("su.execute")
    ], _Suggest.prototype, "execute", null);
    _Suggest = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/search/suggest")
    ], _Suggest);
    return _Suggest;
}(sharepointqueryable_SharePointQueryableInstance));

var Suggest = function (baseUrl, options) {
    if (options === void 0) { options = {}; }
    return function (query) {
        return (new suggest_Suggest(baseUrl, "")).configure(options).execute(query);
    };
};
//# sourceMappingURL=suggest.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/types.js
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

//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/index.js







rest_SPRest.prototype.search = function (query) {
    return Search(this._baseUrl, this._options)(query);
};
rest_SPRest.prototype.searchWithCaching = function (query, options) {
    return (new query_Search(this._baseUrl, null)).configure(this._options).usingCaching(options).execute(query);
};
rest_SPRest.prototype.searchSuggest = function (query) {
    return Suggest(this._baseUrl, this._options)(typeof query === "string" ? { querytext: query } : query);
};
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/types.js









var types_SiteUsers = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SiteUsers, _super);
    function _SiteUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    _SiteUsers.prototype.getById = function (id) {
        return tag.configure(SiteUser(this, "getById(" + id + ")"), "sus.getById");
    };
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    _SiteUsers.prototype.getByEmail = function (email) {
        return tag.configure(SiteUser(this, "getByEmail('" + email + "')"), "sus.getByEmail");
    };
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    _SiteUsers.prototype.getByLoginName = function (loginName) {
        return tag.configure(SiteUser(this).concat("('!@v::" + encodeURIComponent(loginName) + "')"), "sus.getByLoginName");
    };
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    _SiteUsers.prototype.removeById = function (id) {
        return spPost(this.clone(SiteUsers, "removeById(" + id + ")"));
    };
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    _SiteUsers.prototype.removeByLoginName = function (loginName) {
        var o = this.clone(SiteUsers, "removeByLoginName(@v)");
        o.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return spPost(o);
    };
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    _SiteUsers.prototype.add = function (loginName) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(SiteUsers, null), body(Object(common["h" /* assign */])(metadata("SP.User"), { LoginName: loginName })))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getByLoginName(loginName)];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("sus.remId")
    ], _SiteUsers.prototype, "removeById", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sus.remLoginName")
    ], _SiteUsers.prototype, "removeByLoginName", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sus.add")
    ], _SiteUsers.prototype, "add", null);
    _SiteUsers = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("siteusers")
    ], _SiteUsers);
    return _SiteUsers;
}(sharepointqueryable_SharePointQueryableCollection));

var SiteUsers = spInvokableFactory(types_SiteUsers);
/**
 * Describes a single user
 *
 */
var types_SiteUser = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SiteUser, _super);
    function _SiteUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("su");
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
            return tag.configure(SiteGroups(this, "groups"), "su.groups");
        },
        enumerable: true,
        configurable: true
    });
    return _SiteUser;
}(sharepointqueryable_SharePointQueryableInstance));

var SiteUser = spInvokableFactory(types_SiteUser);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/types.js









var types_SiteGroups = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SiteGroups, _super);
    function _SiteGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    _SiteGroups.prototype.getById = function (id) {
        return tag.configure(SiteGroup(this).concat("(" + id + ")"), "sgs.getById");
    };
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    _SiteGroups.prototype.add = function (properties) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object(common["h" /* assign */])(metadata("SP.Group"), properties));
                        return [4 /*yield*/, spPost(tag.configure(this, "sgs.add"), postBody)];
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
        return tag.configure(SiteGroup(this, "getByName('" + groupName + "')"), "sgs.getByName");
    };
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    _SiteGroups.prototype.removeById = function (id) {
        return spPost(this.clone(SiteGroups, "removeById('" + id + "')"));
    };
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    _SiteGroups.prototype.removeByLoginName = function (loginName) {
        return spPost(this.clone(SiteGroups, "removeByLoginName('" + loginName + "')"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("sgs.removeById")
    ], _SiteGroups.prototype, "removeById", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sgs.removeByLoginName")
    ], _SiteGroups.prototype, "removeByLoginName", null);
    _SiteGroups = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("sitegroups")
    ], _SiteGroups);
    return _SiteGroups;
}(sharepointqueryable_SharePointQueryableCollection));

var SiteGroups = spInvokableFactory(types_SiteGroups);
var types_SiteGroup = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SiteGroup, _super);
    function _SiteGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Updates the group with the given property values
         *
         * @param props The group properties object of property names and values to be set for the group
         */
        _this.update = _this._update("SP.Group", function (d, p) {
            var retGroup = _this;
            if (Object(common["p" /* hOP */])(p, "Title")) {
                /* tslint:disable-next-line no-string-literal */
                retGroup = _this.getParent(SiteGroup, _this.parentUrl, "getByName('" + p["Title"] + "')");
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
            return tag.configure(SiteUsers(this, "users"), "sg.users");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    _SiteGroup.prototype.setUserAsOwner = function (userId) {
        return spPost(this.clone(SiteGroup, "SetUserAsOwner(" + userId + ")"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("sg.setUserAsOwner")
    ], _SiteGroup.prototype, "setUserAsOwner", null);
    return _SiteGroup;
}(sharepointqueryable_SharePointQueryableInstance));

var SiteGroup = spInvokableFactory(types_SiteGroup);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/types.js









/**
 * Describes a set of role assignments for the current scope
 *
 */
var types_RoleAssignments = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_RoleAssignments, _super);
    function _RoleAssignments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    _RoleAssignments.prototype.getById = function (id) {
        return RoleAssignment(this).concat("(" + id + ")");
    };
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    _RoleAssignments.prototype.add = function (principalId, roleDefId) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(RoleAssignments, "addroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")"))];
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(RoleAssignments, "removeroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    _RoleAssignments = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("roleassignments")
    ], _RoleAssignments);
    return _RoleAssignments;
}(sharepointqueryable_SharePointQueryableCollection));

var RoleAssignments = spInvokableFactory(types_RoleAssignments);
/**
 * Describes a role assignment
 *
 */
var types_RoleAssignment = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_RoleAssignment, _super);
    function _RoleAssignment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("ra");
        return _this;
    }
    Object.defineProperty(_RoleAssignment.prototype, "groups", {
        /**
         * Gets the groups that directly belong to the access control list (ACL) for this securable object
         *
         */
        get: function () {
            return tag.configure(SiteGroups(this, "groups"), "ra.groups");
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
            return SharePointQueryableCollection(this, "roledefinitionbindings");
        },
        enumerable: true,
        configurable: true
    });
    return _RoleAssignment;
}(sharepointqueryable_SharePointQueryableInstance));

var RoleAssignment = spInvokableFactory(types_RoleAssignment);
/**
 * Describes a collection of role definitions
 *
 */
var types_RoleDefinitions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_RoleDefinitions, _super);
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
        return RoleDefinition(this, "getById(" + id + ")");
    };
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    _RoleDefinitions.prototype.getByName = function (name) {
        return RoleDefinition(this, "getbyname('" + name + "')");
    };
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    _RoleDefinitions.prototype.getByType = function (roleTypeKind) {
        return RoleDefinition(this, "getbytype(" + roleTypeKind + ")");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body({
                            BasePermissions: Object(common["h" /* assign */])(metadata("SP.BasePermissions"), basePermissions),
                            Description: description,
                            Name: name,
                            Order: order,
                            __metadata: { "type": "SP.RoleDefinition" },
                        });
                        return [4 /*yield*/, spPost(this, postBody)];
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
    _RoleDefinitions = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("roledefinitions")
    ], _RoleDefinitions);
    return _RoleDefinitions;
}(sharepointqueryable_SharePointQueryableCollection));

var RoleDefinitions = spInvokableFactory(types_RoleDefinitions);
/**
 * Describes a role definition
 *
 */
var types_RoleDefinition = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_RoleDefinition, _super);
    function _RoleDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("rd");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var s, postBody, data, definition, parent_1;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = ["BasePermissions"];
                        if (Object(common["p" /* hOP */])(properties, s[0]) !== undefined) {
                            properties[s[0]] = Object(common["h" /* assign */])(metadata("SP." + s[0]), properties[s[0]]);
                        }
                        postBody = body(Object(common["h" /* assign */])(metadata("SP.RoleDefinition"), properties), request_builders_headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        definition = this;
                        if (Object(common["p" /* hOP */])(properties, "Name")) {
                            parent_1 = this.getParent(RoleDefinitions, this.parentUrl, "");
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
}(sharepointqueryable_SharePointQueryableInstance));

var RoleDefinition = spInvokableFactory(types_RoleDefinition);
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/funcs.js





/**
* Gets the effective permissions for the user supplied
*
* @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
*/
function getUserEffectivePermissions(loginName) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var q, r;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    q = this.clone(SharePointQueryableInstance, "getUserEffectivePermissions(@user)");
                    q.query.set("@user", "'" + encodeURIComponent(loginName) + "'");
                    return [4 /*yield*/, q.get()];
                case 1:
                    r = _a.sent();
                    // handle verbose mode
                    return [2 /*return*/, Object(common["p" /* hOP */])(r, "GetUserEffectivePermissions") ? r.GetUserEffectivePermissions : r];
            }
        });
    });
}
/**
 * Gets the effective permissions for the current user
 */
function getCurrentUserEffectivePermissions() {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var w, user;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    w = SharePointQueryableInstance("_api/web", "currentuser");
                    return [4 /*yield*/, w.configureFrom(this).select("LoginName")()];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, getUserEffectivePermissions.call(this, user.LoginName)];
            }
        });
    });
}
/**
 * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
 *
 * @param copyRoleAssignments If true the permissions are copied from the current parent scope
 * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
 */
function breakRoleInheritance(copyRoleAssignments, clearSubscopes) {
    if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
    if (clearSubscopes === void 0) { clearSubscopes = false; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(SharePointQueryable, "breakroleinheritance(copyroleassignments=" + copyRoleAssignments + ", clearsubscopes=" + clearSubscopes + ")"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Removes the local role assignments so that it re-inherit role assignments from the parent object.
 *
 */
function resetRoleInheritance() {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(SharePointQueryable, "resetroleinheritance"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Determines if a given user has the appropriate permissions
 *
 * @param loginName The user to check
 * @param permission The permission being checked
 */
function userHasPermissions(loginName, permission) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var perms;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserEffectivePermissions.call(this, loginName)];
                case 1:
                    perms = _a.sent();
                    return [2 /*return*/, this.hasPermissions(perms, permission)];
            }
        });
    });
}
/**
 * Determines if the current user has the requested permissions
 *
 * @param permission The permission we wish to check
 */
function currentUserHasPermissions(permission) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var perms;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getCurrentUserEffectivePermissions.call(this)];
                case 1:
                    perms = _a.sent();
                    return [2 /*return*/, this.hasPermissions(perms, permission)];
            }
        });
    });
}
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
    if (perm === PermissionKind.FullMask) {
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
/* tslint:enable */
//# sourceMappingURL=funcs.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/item.js





addProp(types_Item, "roleAssignments", RoleAssignments);
addProp(types_Item, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
types_Item.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
types_Item.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
types_Item.prototype.breakRoleInheritance = breakRoleInheritance;
types_Item.prototype.resetRoleInheritance = resetRoleInheritance;
types_Item.prototype.userHasPermissions = userHasPermissions;
types_Item.prototype.currentUserHasPermissions = currentUserHasPermissions;
types_Item.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=item.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/list.js





addProp(types_List, "roleAssignments", RoleAssignments);
addProp(types_List, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
types_List.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
types_List.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
types_List.prototype.breakRoleInheritance = breakRoleInheritance;
types_List.prototype.resetRoleInheritance = resetRoleInheritance;
types_List.prototype.userHasPermissions = userHasPermissions;
types_List.prototype.currentUserHasPermissions = currentUserHasPermissions;
types_List.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/web.js





addProp(types_Web, "roleDefinitions", RoleDefinitions);
addProp(types_Web, "roleAssignments", RoleAssignments);
addProp(types_Web, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
types_Web.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
types_Web.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
types_Web.prototype.breakRoleInheritance = breakRoleInheritance;
types_Web.prototype.resetRoleInheritance = resetRoleInheritance;
types_Web.prototype.userHasPermissions = userHasPermissions;
types_Web.prototype.currentUserHasPermissions = currentUserHasPermissions;
types_Web.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/index.js




//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/types.js
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/funcs.js










/**
 * Shares an object based on the supplied options
 *
 * @param options The set of options to send to the ShareObject method
 * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
 */
function shareObject(o, options, bypass) {
    if (bypass === void 0) { bypass = false; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var roleValue, userStr, postBody;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (bypass) {
                        // if the bypass flag is set send the supplied parameters directly to the service
                        return [2 /*return*/, sendShareObjectRequest(o, options)];
                    }
                    // extend our options with some defaults
                    options = Object(common["h" /* assign */])(options, {
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
                    userStr = Object(common["t" /* jsS */])(options.loginNames.map(function (Key) { return ({ Key: Key }); }));
                    postBody = {
                        peoplePickerInput: userStr,
                        roleValue: roleValue,
                        url: options.url,
                    };
                    if (options.emailData !== undefined && options.emailData !== null) {
                        postBody = Object(common["h" /* assign */])(postBody, {
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
    var o = tag.configure(this.clone(SharePointQueryableInstance, "shareLink"), "sh.getShareLink");
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
    var o = tag.configure(this.clone(SharePointQueryableInstance, "checkPermissions"), "sh.checkPermissions");
    return spPost(o, body({ recipients: recipients }));
}
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
    var o = tag.configure(this.clone(SharePointQueryableInstance, "getSharingInformation"), "sh.getSharingInformation");
    return spPost(o.expand.apply(o, Object(tslib_es6["e" /* __spread */])(expands)), body({ request: request }));
}
/**
 * Gets the sharing settings of an item.
 *
 * @param useSimplifiedRoles Determines whether to use simplified roles.
 */
function getObjectSharingSettings(useSimplifiedRoles) {
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    var o = tag.configure(this.clone(SharePointQueryableInstance, "getObjectSharingSettings"), "sh.getObjectSharingSettings");
    return spPost(o, body({ useSimplifiedRoles: useSimplifiedRoles }));
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
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "deleteLinkByKind"), "sh.deleteLinkByKind"), body({ linkKind: linkKind }));
}
/**
 * Removes the specified link to the item.
 *
 * @param kind The kind of link to be deleted.
 * @param shareId
 */
function unshareLink(linkKind, shareId) {
    if (shareId === void 0) { shareId = "00000000-0000-0000-0000-000000000000"; }
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "unshareLink"), "sh.unshareLink"), body({ linkKind: linkKind, shareId: shareId }));
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
function shareWith(o, loginNames, role, requireSignin, propagateAcl, emailData) {
    if (requireSignin === void 0) { requireSignin = false; }
    if (propagateAcl === void 0) { propagateAcl = false; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var userStr, roleFilter, w, def, postBody;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // handle the multiple input types
                    if (!Array.isArray(loginNames)) {
                        loginNames = [loginNames];
                    }
                    userStr = Object(common["t" /* jsS */])(loginNames.map(function (login) { return { Key: login }; }));
                    roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
                    w = SharePointQueryableCollection("_api/web", "roledefinitions");
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
                        postBody = Object(common["h" /* assign */])(postBody, {
                            emailBody: emailData.body,
                            emailSubject: emailData.subject !== undefined ? emailData.subject : "",
                            sendEmail: true,
                        });
                    }
                    return [2 /*return*/, spPost(tag.configure(o.clone(SharePointQueryableInstance, "shareObject"), "sh.shareWith"), body(postBody))];
            }
        });
    });
}
function sendShareObjectRequest(o, options) {
    var w = tag.configure(Web(extractWebUrl(o.toUrl()), "/_api/SP.Web.ShareObject"), "sh.sendShareObjectRequest");
    return spPost(w.expand("UsersWithAccessRequests", "GroupsSharedWith"), body(options));
}
/**
 * Calculates the roleValue string used in the sharing query
 *
 * @param role The Sharing Role
 * @param group The Group type
 */
function getRoleValue(role, group) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var _a, g1, g2, roleFilter, def;
        return Object(tslib_es6["d" /* __generator */])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(group !== undefined && group !== null)) return [3 /*break*/, 7];
                    _a = group;
                    switch (_a) {
                        case RoleType.Contributor: return [3 /*break*/, 1];
                        case RoleType.Reader: return [3 /*break*/, 3];
                        case RoleType.Guest: return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, Web("_api/web", "associatedmembergroup").select("Id")()];
                case 2:
                    g1 = _b.sent();
                    return [2 /*return*/, "group: " + g1.Id];
                case 3: return [4 /*yield*/, Web("_api/web", "associatedvisitorgroup").select("Id")()];
                case 4:
                    g2 = _b.sent();
                    return [2 /*return*/, "group: " + g2.Id];
                case 5: throw Error("Could not determine role value for supplied value. Contributor, Reader, and Guest are supported");
                case 6: return [3 /*break*/, 9];
                case 7:
                    roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
                    return [4 /*yield*/, RoleDefinitions("_api/web").select("Id").top(1).filter("RoleTypeKind eq " + roleFilter)()];
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/file.js



types_File.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    return shareWith(this, loginNames, role, requireSignin, false, emailData);
};
types_File.prototype.getShareLink = getShareLink;
types_File.prototype.checkSharingPermissions = checkPermissions;
types_File.prototype.getSharingInformation = getSharingInformation;
types_File.prototype.getObjectSharingSettings = getObjectSharingSettings;
types_File.prototype.unshare = unshareObject;
types_File.prototype.deleteSharingLinkByKind = deleteLinkByKind;
types_File.prototype.unshareLink = unshareLink;
//# sourceMappingURL=file.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/folder.js



types_Folder.prototype.shareWith = function (loginNames, role, requireSignin, shareEverything, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    if (shareEverything === void 0) { shareEverything = false; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
types_Folder.prototype.getShareLink = function (kind, expiration) {
    if (expiration === void 0) { expiration = null; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
types_Folder.prototype.checkSharingPermissions = function (recipients) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
types_Folder.prototype.getSharingInformation = function (request, expands) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
types_Folder.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
types_Folder.prototype.unshare = function () {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
types_Folder.prototype.deleteSharingLinkByKind = function (kind) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
types_Folder.prototype.unshareLink = function (kind, shareId) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, shareable;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/item.js



types_Item.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    return shareWith(this, loginNames, role, requireSignin, false, emailData);
};
types_Item.prototype.getShareLink = getShareLink;
types_Item.prototype.checkSharingPermissions = checkPermissions;
types_Item.prototype.getSharingInformation = getSharingInformation;
types_Item.prototype.getObjectSharingSettings = getObjectSharingSettings;
types_Item.prototype.unshare = unshareObject;
types_Item.prototype.deleteSharingLinkByKind = deleteLinkByKind;
types_Item.prototype.unshareLink = unshareLink;
//# sourceMappingURL=item.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/web.js









/**
 * Shares this web with the supplied users
 * @param loginNames The resolved login names to share
 * @param role The role to share this web
 * @param emailData Optional email data
 */
types_Web.prototype.shareWith = function (loginNames, role, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var dependency, web, url;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    web = new sharepointqueryable_SharePointQueryableInstance(extractWebUrl(this.toUrl()), "/_api/web/url");
                    return [4 /*yield*/, web.get()];
                case 1:
                    url = _a.sent();
                    dependency();
                    return [2 /*return*/, this.shareObject(Object(common["i" /* combine */])(url, "/_layouts/15/aclinv.aspx?forSharing=1&mbypass=1"), loginNames, role, emailData)];
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
types_Web.prototype.shareObject = function (url, loginNames, role, emailData, group, propagateAcl, includeAnonymousLinkInEmail, useSimplifiedRoles) {
    if (propagateAcl === void 0) { propagateAcl = false; }
    if (includeAnonymousLinkInEmail === void 0) { includeAnonymousLinkInEmail = false; }
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
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
types_Web.prototype.shareObjectRaw = function (options) {
    return shareObject(this, options, true);
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
types_Web.prototype.unshareObject = function (url) {
    return spPost(Web(this, "unshareObject"), body({ url: url }));
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/index.js





//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/types.js







var types_SiteDesigns = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SiteDesigns, _super);
    function _SiteDesigns(baseUrl, methodName) {
        if (methodName === void 0) { methodName = ""; }
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractWebUrl(url), "_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility." + methodName) || this;
        return _this;
    }
    _SiteDesigns.prototype.execute = function (props) {
        return spPost(this, body(props, request_builders_headers({ "Content-Type": "application/json;charset=utf-8" })));
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var task;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SiteDesignsCloneFactory, "GetSiteDesignTask")
                            .execute({ "taskId": id })];
                    case 1:
                        task = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(task, "ID") ? task : null];
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.createSiteDesign")
    ], _SiteDesigns.prototype, "createSiteDesign", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.applySiteDesign")
    ], _SiteDesigns.prototype, "applySiteDesign", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.getSiteDesigns")
    ], _SiteDesigns.prototype, "getSiteDesigns", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.getSiteDesignMetadata")
    ], _SiteDesigns.prototype, "getSiteDesignMetadata", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.updateSiteDesign")
    ], _SiteDesigns.prototype, "updateSiteDesign", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.deleteSiteDesign")
    ], _SiteDesigns.prototype, "deleteSiteDesign", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.getSiteDesignRights")
    ], _SiteDesigns.prototype, "getSiteDesignRights", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.grantSiteDesignRights")
    ], _SiteDesigns.prototype, "grantSiteDesignRights", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.revokeSiteDesignRights")
    ], _SiteDesigns.prototype, "revokeSiteDesignRights", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.addSiteDesignTask")
    ], _SiteDesigns.prototype, "addSiteDesignTask", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.addSiteDesignTaskToCurrentWeb")
    ], _SiteDesigns.prototype, "addSiteDesignTaskToCurrentWeb", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.getSiteDesignTask")
    ], _SiteDesigns.prototype, "getSiteDesignTask", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.getSiteDesignRun")
    ], _SiteDesigns.prototype, "getSiteDesignRun", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sd.getSiteDesignRunStatus")
    ], _SiteDesigns.prototype, "getSiteDesignRunStatus", null);
    return _SiteDesigns;
}(sharepointqueryable_SharePointQueryable));

var SiteDesigns = function (baseUrl, methodName) { return new types_SiteDesigns(baseUrl, methodName); };
var SiteDesignsCloneFactory = function (baseUrl, methodName) {
    if (methodName === void 0) { methodName = ""; }
    return SiteDesigns(baseUrl, methodName);
};
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/web.js


types_Web.prototype.getSiteDesignRuns = function (siteDesignId) {
    return SiteDesigns(this, "").getSiteDesignRun(undefined, siteDesignId);
};
types_Web.prototype.addSiteDesignTask = function (siteDesignId) {
    return SiteDesigns(this, "").addSiteDesignTaskToCurrentWeb(siteDesignId);
};
types_Web.prototype.getSiteDesignRunStatus = function (runId) {
    return SiteDesigns(this, "").getSiteDesignRunStatus(undefined, runId);
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/index.js




Reflect.defineProperty(rest_SPRest.prototype, "siteDesigns", {
    configurable: true,
    enumerable: true,
    get: function () {
        return SiteDesigns(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/web.js







addProp(types_Web, "siteGroups", SiteGroups);
addProp(types_Web, "associatedOwnerGroup", SiteGroups, "associatedownergroup");
addProp(types_Web, "associatedMemberGroup", SiteGroups, "associatedmembergroup");
addProp(types_Web, "associatedVisitorGroup", SiteGroups, "associatedvisitorgroup");
types_Web.prototype.createDefaultAssociatedGroups = function (groupNameSeed, siteOwner, copyRoleAssignments, clearSubscopes, siteOwner2) {
    if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
    if (clearSubscopes === void 0) { clearSubscopes = true; }
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var q;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.breakRoleInheritance(copyRoleAssignments, clearSubscopes)];
                case 1:
                    _a.sent();
                    q = this.clone(Web, "createDefaultAssociatedGroups(userLogin=@u,userLogin2=@v,groupNameSeed=@s)");
                    q.query.set("@u", "'" + escapeQueryStrValue(siteOwner || "") + "'");
                    q.query.set("@v", "'" + escapeQueryStrValue(siteOwner2 || "") + "'");
                    q.query.set("@s", "'" + escapeQueryStrValue(groupNameSeed || "") + "'");
                    return [2 /*return*/, spPost(q)];
            }
        });
    });
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/types.js







var types_SiteScripts = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_SiteScripts, _super);
    function _SiteScripts(baseUrl, methodName) {
        if (methodName === void 0) { methodName = ""; }
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractWebUrl(url), "_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility." + methodName) || this;
        return _this;
    }
    _SiteScripts.prototype.execute = function (props) {
        return spPost(this, body(props));
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
        return this.clone(SiteScriptsCloneFactory, "CreateSiteScript(Title=@title,Description=@desc)?@title='" + escapeQueryStrValue(title) + "'&@desc='" + escapeQueryStrValue(description) + "'")
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("ss.getSiteScripts")
    ], _SiteScripts.prototype, "getSiteScripts", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ss.createSiteScript")
    ], _SiteScripts.prototype, "createSiteScript", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ss.getSiteScriptMetadata")
    ], _SiteScripts.prototype, "getSiteScriptMetadata", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ss.deleteSiteScript")
    ], _SiteScripts.prototype, "deleteSiteScript", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ss.updateSiteScript")
    ], _SiteScripts.prototype, "updateSiteScript", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ss.getSiteScriptFromList")
    ], _SiteScripts.prototype, "getSiteScriptFromList", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ss.getSiteScriptFromWeb")
    ], _SiteScripts.prototype, "getSiteScriptFromWeb", null);
    return _SiteScripts;
}(sharepointqueryable_SharePointQueryable));

var SiteScripts = function (baseUrl, methodName) { return new types_SiteScripts(baseUrl, methodName); };
var SiteScriptsCloneFactory = function (baseUrl, methodName) {
    if (methodName === void 0) { methodName = ""; }
    return SiteScripts(baseUrl, methodName);
};
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/web.js


types_Web.prototype.getSiteScript = function (extractInfo) {
    return SiteScripts(this.toUrl(), "").getSiteScriptFromWeb(undefined, extractInfo);
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/list.js







types_List.prototype.getSiteScript = function () {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var rootFolder, web, absoluteListUrl;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(List).rootFolder.get()];
                case 1:
                    rootFolder = _a.sent();
                    return [4 /*yield*/, Web(extractWebUrl(this.toUrl())).select("Url").get()];
                case 2:
                    web = _a.sent();
                    absoluteListUrl = Object(common["i" /* combine */])(web.Url, "Lists", rootFolder.Name);
                    return [2 /*return*/, SiteScripts(this, "").getSiteScriptFromList(absoluteListUrl)];
            }
        });
    });
};
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/index.js





Reflect.defineProperty(rest_SPRest.prototype, "siteScripts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return SiteScripts(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/web.js






addProp(types_Web, "siteUsers", SiteUsers);
addProp(types_Web, "currentUser", SiteUser, "currentuser");
types_Web.prototype.ensureUser = function (logonName) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var data;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Web, "ensureuser"), body({ logonName: logonName }))];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, {
                            data: data,
                            user: SiteUser(odataUrlFrom(data)),
                        }];
            }
        });
    });
};
types_Web.prototype.getUserById = function (id) {
    return SiteUser(this, "getUserById(" + id + ")");
};
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/social/types.js








var types_Social = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Social, _super);
    function _Social() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Social.prototype, "my", {
        get: function () {
            return MySocial(this);
        },
        enumerable: true,
        configurable: true
    });
    _Social.prototype.getFollowedSitesUri = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(SocialCloneFactory, "follow"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.isFollowed = function (actorInfo) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(SocialCloneFactory, "isfollowed"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.stopFollowing = function (actorInfo) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(SocialCloneFactory, "stopfollowing"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.createSocialActorInfoRequestBody = function (actorInfo) {
        return body({
            "actor": Object.assign(metadata("SP.Social.SocialActorInfo"), {
                Id: null,
            }, actorInfo),
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("soc.getFollowedSitesUri")
    ], _Social.prototype, "getFollowedSitesUri", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("soc.getFollowedDocumentsUri")
    ], _Social.prototype, "getFollowedDocumentsUri", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("soc.follow")
    ], _Social.prototype, "follow", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("soc.isFollowed")
    ], _Social.prototype, "isFollowed", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("soc.stopFollowing")
    ], _Social.prototype, "stopFollowing", null);
    _Social = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("_api/social.following")
    ], _Social);
    return _Social;
}(sharepointqueryable_SharePointQueryableInstance));

/**
 * Get a new Social instance for the particular Url
 */
var Social = function (baseUrl) { return new types_Social(baseUrl); };
var SocialCloneFactory = function (baseUrl, paths) { return new types_Social(baseUrl, paths); };
/**
 * Current user's Social instance
 */
var types_MySocial = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_MySocial, _super);
    function _MySocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MySocial.prototype.followed = function (types) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followed(types=" + types + ")")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(r, "Followed") ? r.Followed.results : r];
                }
            });
        });
    };
    _MySocial.prototype.followedCount = function (types) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followers")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(r, "Followers") ? r.Followers.results : r];
                }
            });
        });
    };
    _MySocial.prototype.suggestions = function () {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var r;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "suggestions")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, Object(common["p" /* hOP */])(r, "Suggestions") ? r.Suggestions.results : r];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("msoc.followed")
    ], _MySocial.prototype, "followed", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("msoc.followedCount")
    ], _MySocial.prototype, "followedCount", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("msoc.followers")
    ], _MySocial.prototype, "followers", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("msoc.suggestions")
    ], _MySocial.prototype, "suggestions", null);
    _MySocial = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("my")
    ], _MySocial);
    return _MySocial;
}(sharepointqueryable_SharePointQueryableInstance));

/**
 * Invokable factory for IMySocial instances
 */
var MySocial = spInvokableFactory(types_MySocial);
var MySocialCloneFactory = function (baseUrl, path) { return MySocial(baseUrl, path); };
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
})(SocialActorTypes || (SocialActorTypes = {}));
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/social/index.js



Reflect.defineProperty(rest_SPRest.prototype, "social", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Social(this._baseUrl);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sputilities/types.js











var types_Utilities = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Utilities, _super);
    function _Utilities(baseUrl, methodName) {
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractWebUrl(url), "_api/SP.Utilities.Utility." + methodName) || this;
        return _this;
    }
    _Utilities.prototype.excute = function (props) {
        return spPost(this, body(props));
    };
    _Utilities.prototype.sendEmail = function (props) {
        var params = {
            properties: Object(common["h" /* assign */])(metadata("SP.Utilities.EmailProperties"), {
                Body: props.Body,
                From: props.From,
                Subject: props.Subject,
            }),
        };
        if (props.To && props.To.length > 0) {
            params.properties = Object(common["h" /* assign */])(params.properties, {
                To: { results: props.To },
            });
        }
        if (props.CC && props.CC.length > 0) {
            params.properties = Object(common["h" /* assign */])(params.properties, {
                CC: { results: props.CC },
            });
        }
        if (props.BCC && props.BCC.length > 0) {
            params.properties = Object(common["h" /* assign */])(params.properties, {
                BCC: { results: props.BCC },
            });
        }
        if (props.AdditionalHeaders) {
            params.properties = Object(common["h" /* assign */])(params.properties, {
                AdditionalHeaders: objectToSPKeyValueCollection(props.AdditionalHeaders),
            });
        }
        return tag.configure(this.clone(UtilitiesCloneFactory, "SendEmail", true), "u.sendEmail").excute(params);
    };
    _Utilities.prototype.getCurrentUserEmailAddresses = function () {
        return tag.configure(this.clone(UtilitiesCloneFactory, "GetCurrentUserEmailAddresses", true), "u.getCurrentUserEmailAddresses").excute({});
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
        return tag.configure(clone, "u.ResolvePrincipalInCurrentContext").excute(params);
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
        return tag.configure(clone, "u.SearchPrincipalsUsingContextWeb").excute(params);
    };
    _Utilities.prototype.createEmailBodyForInvitation = function (pageAddress) {
        var params = {
            pageAddress: pageAddress,
        };
        var clone = this.clone(UtilitiesCloneFactory, "CreateEmailBodyForInvitation", true);
        return tag.configure(clone, "u.CreateEmailBodyForInvitation").excute(params);
    };
    _Utilities.prototype.expandGroupsToPrincipals = function (inputs, maxCount) {
        if (maxCount === void 0) { maxCount = 30; }
        var params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        var clone = this.clone(UtilitiesCloneFactory, "ExpandGroupsToPrincipals", true);
        return tag.configure(clone, "u.ExpandGroupsToPrincipals").excute(params);
    };
    _Utilities.prototype.createWikiPage = function (info) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var clone, newPage;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clone = this.clone(UtilitiesCloneFactory, "CreateWikiPageInContextWeb", true);
                        return [4 /*yield*/, tag.configure(clone, "u.CreateWikiPageInContextWeb").excute({ parameters: info })];
                    case 1:
                        newPage = _a.sent();
                        return [2 /*return*/, {
                                data: newPage,
                                file: File(odataUrlFrom(newPage)),
                            }];
                }
            });
        });
    };
    return _Utilities;
}(sharepointqueryable_SharePointQueryable));

var Utilities = spInvokableFactory(types_Utilities);
var UtilitiesCloneFactory = function (baseUrl, path) { return Utilities(baseUrl, path); };
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/sputilities/index.js



Reflect.defineProperty(rest_SPRest.prototype, "utility", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Utilities(this._baseUrl, "");
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/types.js






var types_Subscriptions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Subscriptions, _super);
    function _Subscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns all the webhook subscriptions or the specified webhook subscription
    *
    * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
    */
    _Subscriptions.prototype.getById = function (subscriptionId) {
        return tag.configure(Subscription(this).concat("('" + subscriptionId + "')"), "subs.getById");
    };
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (optional)
     */
    _Subscriptions.prototype.add = function (notificationUrl, expirationDate, clientState) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
                        return [4 /*yield*/, spPost(this, body(postBody, request_builders_headers({ "Content-Type": "application/json" })))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, subscription: this.getById(data.id) }];
                }
            });
        });
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("subs.add")
    ], _Subscriptions.prototype, "add", null);
    _Subscriptions = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("subscriptions")
    ], _Subscriptions);
    return _Subscriptions;
}(sharepointqueryable_SharePointQueryableCollection));

var Subscriptions = spInvokableFactory(types_Subscriptions);
var types_Subscription = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Subscription, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
                        return [4 /*yield*/, spPatch(this, body(postBody, request_builders_headers({ "Content-Type": "application/json" })))];
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
        return spDelete(this);
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("sub.update")
    ], _Subscription.prototype, "update", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("sub.delete")
    ], _Subscription.prototype, "delete", null);
    return _Subscription;
}(sharepointqueryable_SharePointQueryableInstance));

var Subscription = spInvokableFactory(types_Subscription);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/list.js



addProp(types_List, "subscriptions", Subscriptions);
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/types.js








var types_UserCustomActions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_UserCustomActions, _super);
    function _UserCustomActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    _UserCustomActions.prototype.getById = function (id) {
        return tag.configure(UserCustomAction(this).concat("('" + id + "')"), "ucas.getById");
    };
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     */
    _UserCustomActions.prototype.add = function (properties) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this, body(Object(common["h" /* assign */])(metadata("SP.UserCustomAction"), properties)))];
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
        return spPost(this.clone(UserCustomActions, "clear"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("ucas.add")
    ], _UserCustomActions.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("ucas.clear")
    ], _UserCustomActions.prototype, "clear", null);
    _UserCustomActions = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("usercustomactions")
    ], _UserCustomActions);
    return _UserCustomActions;
}(sharepointqueryable_SharePointQueryableCollection));

var UserCustomActions = spInvokableFactory(types_UserCustomActions);
var types_UserCustomAction = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_UserCustomAction, _super);
    function _UserCustomAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("uca");
        /**
        * Updates this user custom action with the supplied properties
        *
        * @param properties An information object of property names and values to update for this user custom action
        */
        _this.update = _this._update("SP.UserCustomAction", function (data) { return ({ data: data, action: _this }); });
        return _this;
    }
    return _UserCustomAction;
}(sharepointqueryable_SharePointQueryableInstance));

var UserCustomAction = spInvokableFactory(types_UserCustomAction);
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
// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/list.js



addProp(types_List, "userCustomActions", UserCustomActions);
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/web.js



addProp(types_Web, "userCustomActions", UserCustomActions);
//# sourceMappingURL=web.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/site.js



addProp(types_Site, "userCustomActions", UserCustomActions);
//# sourceMappingURL=site.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/index.js




//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/types.js







var types_Views = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Views, _super);
    function _Views() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    _Views.prototype.getById = function (id) {
        return View(this).concat("('" + id + "')");
    };
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    _Views.prototype.getByTitle = function (title) {
        return View(this, "getByTitle('" + title + "')");
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object.assign(metadata("SP.View"), {
                            "PersonalView": personalView,
                            "Title": title,
                        }, additionalSettings));
                        return [4 /*yield*/, spPost(this.clone(Views, null), postBody)];
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
    Object(tslib_es6["b" /* __decorate */])([
        tag("vs.add")
    ], _Views.prototype, "add", null);
    _Views = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("views")
    ], _Views);
    return _Views;
}(sharepointqueryable_SharePointQueryableCollection));

var Views = spInvokableFactory(types_Views);
var types_View = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_View, _super);
    function _View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("vw");
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
            return ViewFields(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the list view as HTML.
     *
     */
    _View.prototype.renderAsHtml = function () {
        return this.clone(View, "renderashtml")();
    };
    /**
     * Sets the view schema
     *
     * @param viewXml The view XML to set
     */
    _View.prototype.setViewXml = function (viewXml) {
        return spPost(this.clone(View, "SetViewXml"), body({ viewXml: viewXml }));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("v.renderAsHtml")
    ], _View.prototype, "renderAsHtml", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("v.setViewXml")
    ], _View.prototype, "setViewXml", null);
    return _View;
}(sharepointqueryable_SharePointQueryableInstance));

var View = spInvokableFactory(types_View);
var types_ViewFields = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ViewFields, _super);
    function _ViewFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    _ViewFields.prototype.getSchemaXml = function () {
        return this.clone(ViewFields, "schemaxml")();
    };
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    _ViewFields.prototype.add = function (fieldTitleOrInternalName) {
        return spPost(this.clone(ViewFields, "addviewfield('" + fieldTitleOrInternalName + "')"));
    };
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param field The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    _ViewFields.prototype.move = function (field, index) {
        return spPost(this.clone(ViewFields, "moveviewfieldto"), body({ field: field, index: index }));
    };
    /**
     * Removes all the fields from the collection.
     */
    _ViewFields.prototype.removeAll = function () {
        return spPost(this.clone(ViewFields, "removeallviewfields"));
    };
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    _ViewFields.prototype.remove = function (fieldInternalName) {
        return spPost(this.clone(ViewFields, "removeviewfield('" + fieldInternalName + "')"));
    };
    Object(tslib_es6["b" /* __decorate */])([
        tag("vfs.getSchemaXml")
    ], _ViewFields.prototype, "getSchemaXml", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vfs.add")
    ], _ViewFields.prototype, "add", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vfs.move")
    ], _ViewFields.prototype, "move", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vfs.removeAll")
    ], _ViewFields.prototype, "removeAll", null);
    Object(tslib_es6["b" /* __decorate */])([
        tag("vfs.remove")
    ], _ViewFields.prototype, "remove", null);
    _ViewFields = Object(tslib_es6["b" /* __decorate */])([
        defaultPath("viewfields")
    ], _ViewFields);
    return _ViewFields;
}(sharepointqueryable_SharePointQueryableCollection));

var ViewFields = spInvokableFactory(types_ViewFields);
var ViewScope;
(function (ViewScope) {
    ViewScope[ViewScope["DefaultValue"] = 0] = "DefaultValue";
    ViewScope[ViewScope["Recursive"] = 1] = "Recursive";
    ViewScope[ViewScope["RecursiveAll"] = 2] = "RecursiveAll";
    ViewScope[ViewScope["FilesOnly"] = 3] = "FilesOnly";
})(ViewScope || (ViewScope = {}));
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/list.js



addProp(types_List, "views", Views);
addProp(types_List, "defaultView", View, "DefaultView");
types_List.prototype.getView = function (viewId) {
    return View(this, "getView('" + viewId + "')");
};
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/types.js





var types_LimitedWebPartManager = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_LimitedWebPartManager, _super);
    function _LimitedWebPartManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_LimitedWebPartManager.prototype, "scope", {
        get: function () {
            return tag.configure(SharePointQueryable(this, "Scope"), "f.scope");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_LimitedWebPartManager.prototype, "webparts", {
        get: function () {
            return WebPartDefinitions(this, "webparts");
        },
        enumerable: true,
        configurable: true
    });
    _LimitedWebPartManager.prototype.export = function (id) {
        return spPost(this.clone(LimitedWebPartManagerCloneFactory, "ExportWebPart"), body({ webPartId: id }));
    };
    _LimitedWebPartManager.prototype.import = function (xml) {
        return spPost(this.clone(LimitedWebPartManagerCloneFactory, "ImportWebPart"), body({ webPartXml: xml }));
    };
    return _LimitedWebPartManager;
}(sharepointqueryable_SharePointQueryable));

var LimitedWebPartManager = function (baseUrl, path) { return new types_LimitedWebPartManager(baseUrl, path); };
var LimitedWebPartManagerCloneFactory = function (baseUrl, path) { return LimitedWebPartManager(baseUrl, path); };
var types_WebPartDefinitions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_WebPartDefinitions, _super);
    function _WebPartDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    _WebPartDefinitions.prototype.getById = function (id) {
        return WebPartDefinition(this, "getbyid('" + id + "')");
    };
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    _WebPartDefinitions.prototype.getByControlId = function (id) {
        return WebPartDefinition(this, "getByControlId('" + id + "')");
    };
    return _WebPartDefinitions;
}(sharepointqueryable_SharePointQueryableCollection));

var WebPartDefinitions = spInvokableFactory(types_WebPartDefinitions);
var types_WebPartDefinition = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_WebPartDefinition, _super);
    function _WebPartDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_WebPartDefinition.prototype, "webpart", {
        /**
        * Gets the webpart information associated with this definition
        */
        get: function () {
            return SharePointQueryableInstance(this, "webpart");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    _WebPartDefinition.prototype.saveChanges = function () {
        return spPost(this.clone(WebPartDefinition, "SaveWebPartChanges"));
    };
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    _WebPartDefinition.prototype.moveTo = function (zoneId, zoneIndex) {
        return spPost(this.clone(WebPartDefinition, "MoveWebPartTo(zoneID='" + zoneId + "', zoneIndex=" + zoneIndex + ")"));
    };
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    _WebPartDefinition.prototype.close = function () {
        return spPost(this.clone(WebPartDefinition, "CloseWebPart"));
    };
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    _WebPartDefinition.prototype.open = function () {
        return spPost(this.clone(WebPartDefinition, "OpenWebPart"));
    };
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    _WebPartDefinition.prototype.delete = function () {
        return spPost(this.clone(WebPartDefinition, "DeleteWebPart"));
    };
    return _WebPartDefinition;
}(sharepointqueryable_SharePointQueryableInstance));

var WebPartDefinition = spInvokableFactory(types_WebPartDefinition);
var WebPartsPersonalizationScope;
(function (WebPartsPersonalizationScope) {
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
})(WebPartsPersonalizationScope || (WebPartsPersonalizationScope = {}));
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/file.js


types_File.prototype.getLimitedWebPartManager = function (scope) {
    if (scope === void 0) { scope = WebPartsPersonalizationScope.Shared; }
    return LimitedWebPartManager(this, "getLimitedWebPartManager(scope=" + scope + ")");
};
//# sourceMappingURL=file.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/sp/presets/all.js


































































var all_sp = new rest_SPRest();
//# sourceMappingURL=all.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/decorators.js



/**
 * Decorator used to specify the default path for Queryable objects
 *
 * @param path
 */
function decorators_defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_1, _super);
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
function decorators_deleteable() {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_2, _super);
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
 * Adds the update method to the tagged class
 */
function updateable() {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_3, _super);
            function class_3() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_3.prototype.update = function (props) {
                return graphPatch(this, body(props));
            };
            return class_3;
        }(target));
    };
}
/**
 * Adds the add method to the tagged class
 */
function addable() {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_4, _super);
            function class_4() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_4.prototype.add = function (props) {
                return graphPost(this, body(props));
            };
            return class_4;
        }(target));
    };
}
/**
 * Adds the getById method to a collection
 */
function getById(factory) {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_5, _super);
            function class_5() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_5.prototype.getById = function (id) {
                return factory(this, id);
            };
            return class_5;
        }(target));
    };
}
//# sourceMappingURL=decorators.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/types.js





/**
 * Conversation
 */
var types_Conversation = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Conversation, _super);
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
    _Conversation = Object(tslib_es6["b" /* __decorate */])([
        updateable(),
        decorators_deleteable()
    ], _Conversation);
    return _Conversation;
}(graphqueryable_GraphQueryableInstance));

var Conversation = graphInvokableFactory(types_Conversation);
/**
 * Conversations
 */
var types_Conversations = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Conversations, _super);
    function _Conversations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Conversations = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("conversations"),
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
    Object(tslib_es6["c" /* __extends */])(_Thread, _super);
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
    _Thread = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable()
    ], _Thread);
    return _Thread;
}(graphqueryable_GraphQueryableInstance));

var Thread = graphInvokableFactory(types_Thread);
/**
 * Threads
 */
var types_Threads = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Threads, _super);
    function _Threads() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Threads = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("threads"),
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
    Object(tslib_es6["c" /* __extends */])(_Post, _super);
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
    _Post = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable()
    ], _Post);
    return _Post;
}(graphqueryable_GraphQueryableInstance));

var Post = graphInvokableFactory(types_Post);
/**
 * Posts
 */
var types_Posts = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Posts, _super);
    function _Posts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Posts = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("posts"),
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
    Object(tslib_es6["c" /* __extends */])(_Senders, _super);
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
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/utils/type.js
function type_type(n, a) {
    return Object.assign({ "@odata.type": n }, a);
}
//# sourceMappingURL=type.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/types.js






/**
 * Attachment
 */
var attachments_types_Attachment = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Attachment, _super);
    function _Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Attachment;
}(graphqueryable_GraphQueryableInstance));

var graph_attachments_types_Attachment = graphInvokableFactory(attachments_types_Attachment);
/**
 * Attachments
 */
var attachments_types_Attachments = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Attachments, _super);
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
    _Attachments = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("attachments"),
        getById(graph_attachments_types_Attachment)
    ], _Attachments);
    return _Attachments;
}(graphqueryable_GraphQueryableCollection));

var graph_attachments_types_Attachments = graphInvokableFactory(attachments_types_Attachments);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/conversations.js



addProp(types_Post, "attachments", graph_attachments_types_Attachments);
//# sourceMappingURL=conversations.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/attachments/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/types.js





/**
 * Represents a Directory Object entity
 */
var types_DirectoryObject = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_DirectoryObject, _super);
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
    _DirectoryObject = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable()
    ], _DirectoryObject);
    return _DirectoryObject;
}(graphqueryable_GraphQueryableInstance));

var DirectoryObject = graphInvokableFactory(types_DirectoryObject);
/**
 * Describes a collection of Directory Objects
 *
 */
var types_DirectoryObjects = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_DirectoryObjects, _super);
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
    _DirectoryObjects = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("directoryObjects"),
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
//# sourceMappingURL=types.js.map
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
    Object(tslib_es6["c" /* __extends */])(_Group, _super);
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
    _Group = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable(),
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
    Object(tslib_es6["c" /* __extends */])(_Groups, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["h" /* assign */])({
                            displayName: name,
                            mailEnabled: groupType === GroupType.Office365,
                            mailNickname: mailNickname,
                            securityEnabled: groupType !== GroupType.Office365,
                        }, additionalProperties);
                        // include a group type if required
                        if (groupType !== GroupType.Security) {
                            postBody = Object(common["h" /* assign */])(postBody, {
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
    _Groups = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("groups"),
        getById(Group)
    ], _Groups);
    return _Groups;
}(graphqueryable_GraphQueryableCollection));

var Groups = graphInvokableFactory(types_Groups);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/types.js





/**
 * Calendars
 */
var types_Calendars = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Calendars, _super);
    function _Calendars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Calendars = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("calendars")
    ], _Calendars);
    return _Calendars;
}(graphqueryable_GraphQueryableCollection));

var Calendars = graphInvokableFactory(types_Calendars);
/**
 * Calendar
 */
var types_Calendar = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Calendar, _super);
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
    Object(tslib_es6["c" /* __extends */])(_Event, _super);
    function _Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Event = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable(),
        updateable()
    ], _Event);
    return _Event;
}(graphqueryable_GraphQueryableInstance));

var Event = graphInvokableFactory(types_Event);
/**
 * Events
 */
var types_Events = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Events, _super);
    function _Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    _Events.prototype.add = function (properties) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    _Events = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("events"),
        getById(Event)
    ], _Events);
    return _Events;
}(graphqueryable_GraphQueryableCollection));

var Events = graphInvokableFactory(types_Events);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/groups.js



addProp(types_Group, "calendar", Calendar, "calendar");
addProp(types_Group, "events", Events);
//# sourceMappingURL=groups.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/calendars/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/types.js




var types_User = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_User, _super);
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
    _User = Object(tslib_es6["b" /* __decorate */])([
        updateable(),
        decorators_deleteable()
    ], _User);
    return _User;
}(types_DirectoryObject));

var User = graphInvokableFactory(types_User);
/**
 * Describes a collection of Users objects
 *
 */
var types_Users = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Users, _super);
    function _Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Users = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("users"),
        getById(User)
    ], _Users);
    return _Users;
}(graphqueryable_GraphQueryableCollection));

var Users = graphInvokableFactory(types_Users);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/types.js






/**
 * Contact
 */
var types_Contact = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Contact, _super);
    function _Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Contact = Object(tslib_es6["b" /* __decorate */])([
        updateable(),
        decorators_deleteable()
    ], _Contact);
    return _Contact;
}(graphqueryable_GraphQueryableInstance));

var Contact = graphInvokableFactory(types_Contact);
/**
 * Contacts
 */
var types_Contacts = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Contacts, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["h" /* assign */])({ businessPhones: businessPhones, emailAddresses: emailAddresses, givenName: givenName, surName: surName }, additionalProperties);
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
    _Contacts = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("contacts"),
        getById(Contact)
    ], _Contacts);
    return _Contacts;
}(graphqueryable_GraphQueryableCollection));

var Contacts = graphInvokableFactory(types_Contacts);
/**
 * Contact Folder
 */
var types_ContactFolder = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ContactFolder, _super);
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
    _ContactFolder = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable(),
        updateable()
    ], _ContactFolder);
    return _ContactFolder;
}(graphqueryable_GraphQueryableInstance));

var ContactFolder = graphInvokableFactory(types_ContactFolder);
/**
 * Contact Folders
 */
var types_ContactFolders = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_ContactFolders, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    _ContactFolders = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("contactFolders"),
        getById(ContactFolder)
    ], _ContactFolders);
    return _ContactFolders;
}(graphqueryable_GraphQueryableCollection));

var ContactFolders = graphInvokableFactory(types_ContactFolders);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/users.js



addProp(types_User, "contacts", Contacts);
addProp(types_User, "contactFolders", ContactFolders);
//# sourceMappingURL=users.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/contacts/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/groups.js



addProp(types_Group, "conversations", Conversations);
addProp(types_Group, "acceptedSenders", Senders, "acceptedsenders");
addProp(types_Group, "rejectedSenders", Senders, "rejectedsenders");
//# sourceMappingURL=groups.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/conversations/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "directoryObjects", {
    configurable: true,
    enumerable: true,
    get: function () {
        return DirectoryObjects(this);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "groups", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Groups(this);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/types.js





/**
 * Member
 */
var types_Member = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Member, _super);
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
    Object(tslib_es6["c" /* __extends */])(_Members, _super);
    function _Members() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: https://graph.microsoft.com/v1.0/directoryObjects/${id})
     */
    _Members.prototype.add = function (id) {
        return graphPost(this.clone(Members, "$ref"), body({ "@odata.id": id }));
    };
    _Members = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("members"),
        getById(Member)
    ], _Members);
    return _Members;
}(graphqueryable_GraphQueryableCollection));

var Members = graphInvokableFactory(types_Members);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/groups.js



addProp(types_Group, "owners", Members, "owners");
addProp(types_Group, "members", Members);
//# sourceMappingURL=groups.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/members/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/types.js



/**
 * Message
 */
var types_Message = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Message, _super);
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
    Object(tslib_es6["c" /* __extends */])(_Messages, _super);
    function _Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Messages = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("messages"),
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
    Object(tslib_es6["c" /* __extends */])(_MailFolder, _super);
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
    Object(tslib_es6["c" /* __extends */])(_MailFolders, _super);
    function _MailFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MailFolders = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("mailFolders"),
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
    Object(tslib_es6["c" /* __extends */])(_MailboxSettings, _super);
    function _MailboxSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MailboxSettings = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("mailboxSettings"),
        updateable()
    ], _MailboxSettings);
    return _MailboxSettings;
}(graphqueryable_GraphQueryableInstance));

var MailboxSettings = graphInvokableFactory(types_MailboxSettings);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/users.js




addProp(types_User, "messages", Messages);
addProp(types_User, "mailboxSettings", MailboxSettings);
addProp(types_User, "mailFolders", MailFolders);
types_User.prototype.sendMail = function (message) {
    return graphPost(this.clone(User, "sendMail"), body(message));
};
//# sourceMappingURL=users.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/types.js






/**
 * Describes a Drive instance
 *
 */
var types_Drive = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Drive, _super);
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
        return DriveItem(this, Object(common["i" /* combine */])("items", id));
    };
    _Drive = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("drive")
    ], _Drive);
    return _Drive;
}(graphqueryable_GraphQueryableInstance));

var Drive = graphInvokableFactory(types_Drive);
/**
 * Describes a collection of Drive objects
 *
 */
var types_Drives = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Drives, _super);
    function _Drives() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Drives = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("drives"),
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
    Object(tslib_es6["c" /* __extends */])(_Root, _super);
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
    _Root = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("root")
    ], _Root);
    return _Root;
}(graphqueryable_GraphQueryableInstance));

var Root = graphInvokableFactory(types_Root);
/**
 * Describes a Drive Item instance
 *
 */
var types_DriveItem = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_DriveItem, _super);
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
        return graphPatch(this, body(Object(common["h" /* assign */])(parentReference, { name: name })));
    };
    _DriveItem.prototype.getContent = function () {
        return graphGet(this.clone(DriveItem, "content"));
    };
    _DriveItem.prototype.setContent = function (content) {
        return graphPut(this.clone(DriveItem, "content"), {
            body: content,
        });
    };
    _DriveItem = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable(),
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
    Object(tslib_es6["c" /* __extends */])(_DriveItems, _super);
    function _DriveItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _DriveItems = Object(tslib_es6["b" /* __decorate */])([
        getById(DriveItem)
    ], _DriveItems);
    return _DriveItems;
}(graphqueryable_GraphQueryableCollection));

var DriveItems = graphInvokableFactory(types_DriveItems);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/users.js



addProp(types_User, "drive", Drive);
addProp(types_User, "drives", Drives);
//# sourceMappingURL=users.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/types.js





/**
 * Represents a onenote entity
 */
var types_OneNote = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_OneNote, _super);
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
    _OneNote = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("onenote")
    ], _OneNote);
    return _OneNote;
}(graphqueryable_GraphQueryableInstance));

var OneNote = graphInvokableFactory(types_OneNote);
/**
 * Describes a notebook instance
 *
 */
var types_Notebook = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Notebook, _super);
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
    Object(tslib_es6["c" /* __extends */])(_Notebooks, _super);
    function _Notebooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new notebook as specified in the request body.
     *
     * @param displayName Notebook display name
     */
    _Notebooks.prototype.add = function (displayName) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    _Notebooks = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("notebooks"),
        getById(Notebook)
    ], _Notebooks);
    return _Notebooks;
}(graphqueryable_GraphQueryableCollection));

var Notebooks = graphInvokableFactory(types_Notebooks);
/**
 * Describes a sections instance
 */
var types_Section = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Section, _super);
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
    Object(tslib_es6["c" /* __extends */])(_Sections, _super);
    function _Sections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new section
     *
     * @param displayName New section display name
     */
    _Sections.prototype.add = function (displayName) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    _Sections = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("sections"),
        getById(Section)
    ], _Sections);
    return _Sections;
}(graphqueryable_GraphQueryableCollection));

var Sections = graphInvokableFactory(types_Sections);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/users.js



addProp(types_User, "onenote", OneNote);
//# sourceMappingURL=users.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/onenote/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/types.js





var types_Photo = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Photo, _super);
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
    _Photo = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("photo")
    ], _Photo);
    return _Photo;
}(graphqueryable_GraphQueryableInstance));

var Photo = graphInvokableFactory(types_Photo);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/groups.js



addProp(types_Group, "photo", Photo);
//# sourceMappingURL=groups.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/photos/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/types.js







/**
 * Planner
 */
var types_Planner = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Planner, _super);
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
    _Planner = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("planner")
    ], _Planner);
    return _Planner;
}(graphqueryable_GraphQueryableInstance));

var Planner = graphInvokableFactory(types_Planner);
/**
 * Plan
 */
var types_Plan = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Plan, _super);
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
    _Plan = Object(tslib_es6["b" /* __decorate */])([
        updateable(),
        decorators_deleteable()
    ], _Plan);
    return _Plan;
}(graphqueryable_GraphQueryableInstance));

var Plan = graphInvokableFactory(types_Plan);
var types_Plans = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Plans, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    _Plans = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("plans"),
        getById(Plan)
    ], _Plans);
    return _Plans;
}(graphqueryable_GraphQueryableCollection));

var Plans = graphInvokableFactory(types_Plans);
/**
 * Task
 */
var types_Task = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Task, _super);
    function _Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Task = Object(tslib_es6["b" /* __decorate */])([
        updateable(),
        decorators_deleteable()
    ], _Task);
    return _Task;
}(graphqueryable_GraphQueryableInstance));

var Task = graphInvokableFactory(types_Task);
/**
 * Tasks
 */
var types_Tasks = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Tasks, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["h" /* assign */])({
                            planId: planId,
                            title: title,
                        }, assignments);
                        if (bucketId) {
                            postBody = Object(common["h" /* assign */])(postBody, {
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
    _Tasks = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("tasks"),
        getById(Task)
    ], _Tasks);
    return _Tasks;
}(graphqueryable_GraphQueryableCollection));

var Tasks = graphInvokableFactory(types_Tasks);
/**
 * Bucket
 */
var types_Bucket = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Bucket, _super);
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
    _Bucket = Object(tslib_es6["b" /* __decorate */])([
        updateable(),
        decorators_deleteable()
    ], _Bucket);
    return _Bucket;
}(graphqueryable_GraphQueryableInstance));

var Bucket = graphInvokableFactory(types_Bucket);
/**
 * Buckets
 */
var types_Buckets = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Buckets, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    _Buckets = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("buckets"),
        getById(Bucket)
    ], _Buckets);
    return _Buckets;
}(graphqueryable_GraphQueryableCollection));

var Buckets = graphInvokableFactory(types_Buckets);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/groups.js



addProp(types_Group, "plans", Plans, "planner/plans");
//# sourceMappingURL=groups.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/users.js



addProp(types_User, "tasks", Tasks, "planner/tasks");
//# sourceMappingURL=users.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/planner/index.js





Reflect.defineProperty(rest_GraphRest.prototype, "planner", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Planner(this);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/types.js






/**
 * Subscription
 */
var subscriptions_types_Subscription = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Subscription, _super);
    function _Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Subscription = Object(tslib_es6["b" /* __decorate */])([
        decorators_deleteable(),
        updateable()
    ], _Subscription);
    return _Subscription;
}(graphqueryable_GraphQueryableInstance));

var graph_subscriptions_types_Subscription = graphInvokableFactory(subscriptions_types_Subscription);
/**
 * Subscriptions
 */
var subscriptions_types_Subscriptions = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Subscriptions, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["h" /* assign */])({
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
    _Subscriptions = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("subscriptions"),
        getById(graph_subscriptions_types_Subscription)
    ], _Subscriptions);
    return _Subscriptions;
}(graphqueryable_GraphQueryableCollection));

var graph_subscriptions_types_Subscriptions = graphInvokableFactory(subscriptions_types_Subscriptions);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/index.js



Reflect.defineProperty(rest_GraphRest.prototype, "subscriptions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return graph_subscriptions_types_Subscriptions(this);
    },
});
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/types.js







/**
 * Represents a Microsoft Team
 */
var types_Team = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Team, _super);
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
    _Team = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("team"),
        updateable()
    ], _Team);
    return _Team;
}(graphqueryable_GraphQueryableInstance));

var Team = graphInvokableFactory(types_Team);
/**
 * Teams
 */
var types_Teams = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Teams, _super);
    function _Teams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Teams = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("teams"),
        getById(Team)
    ], _Teams);
    return _Teams;
}(graphqueryable_GraphQueryableCollection));

var Teams = graphInvokableFactory(types_Teams);
/**
 * Channel
 */
var types_Channel = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Channel, _super);
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
    Object(tslib_es6["c" /* __extends */])(_Channels, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
    _Channels = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("channels"),
        getById(Channel)
    ], _Channels);
    return _Channels;
}(graphqueryable_GraphQueryableCollection));

var Channels = graphInvokableFactory(types_Channels);
/**
 * Tab
 */
var types_Tab = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Tab, _super);
    function _Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Tab = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("tab"),
        updateable(),
        decorators_deleteable()
    ], _Tab);
    return _Tab;
}(graphqueryable_GraphQueryableInstance));

var Tab = graphInvokableFactory(types_Tab);
/**
 * Tabs
 */
var types_Tabs = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(_Tabs, _super);
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
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(common["h" /* assign */])({
                            name: name,
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
    _Tabs = Object(tslib_es6["b" /* __decorate */])([
        decorators_defaultPath("tabs"),
        getById(Tab)
    ], _Tabs);
    return _Tabs;
}(graphqueryable_GraphQueryableCollection));

var Tabs = graphInvokableFactory(types_Tabs);
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/users.js



addProp(types_User, "joinedTeams", Teams, "joinedTeams");
//# sourceMappingURL=users.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/index.js








addProp(types_Group, "team", Team);
types_Group.prototype.createTeam = function (props) {
    return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function () {
        var data;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
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
//# sourceMappingURL=index.js.map
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
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/graph/presets/all.js































//# sourceMappingURL=all.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/pnpjs/sp-ns.js


//# sourceMappingURL=sp-ns.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/pnpjs/graph-ns.js


//# sourceMappingURL=graph-ns.js.map
// CONCATENATED MODULE: ./node_modules/@pnp/pnpjs/index.js






// trigger attachment of all functionality to mimic the previous pnpjs impl


/**
 * Re-export everything from the dependencies to match the previous pattern
 */






/**
 * Utility methods
 */
var util = {
    assign: common["h" /* assign */],
    combine: common["i" /* combine */],
    dateAdd: common["j" /* dateAdd */],
    getCtxCallback: common["l" /* getCtxCallback */],
    getGUID: common["m" /* getGUID */],
    getRandomString: common["o" /* getRandomString */],
    isArray: common["q" /* isArray */],
    isFunc: common["r" /* isFunc */],
    isUrlAbsolute: common["s" /* isUrlAbsolute */],
    objectDefinedNotNull: common["x" /* objectDefinedNotNull */],
    sanitizeGuid: common["z" /* sanitizeGuid */],
    stringIsNullOrEmpty: common["A" /* stringIsNullOrEmpty */],
};
/**
 * Provides access to the SharePoint REST interface
 */
var pnpjs_sp = sprestaddin_sp;
/**
 * Provides access to the SharePoint REST interface
 */
var pnpjs_graph = graph;
/**
 * Provides access to local and session storage
 */
var storage = new common["c" /* PnPClientStorage */]();
/**
 * Global configuration instance to which providers can be added
 */
var pnpjs_config = new configuration_Settings();
/**
 * Global logging instance to which subscribers can be registered and messages written
 */
var log = Logger;
/**
 * Allows for the configuration of the library
 */
var pnpjs_setup = setup;
// creating this class instead of directly assigning to default fixes a previous issue
var Def = {
    /**
     * Global configuration instance to which providers can be added
     */
    config: pnpjs_config,
    /**
     * Provides access to the Graph REST interface
     */
    graph: pnpjs_graph,
    /**
     * Global logging instance to which subscribers can be registered and messages written
     */
    log: log,
    /**
     * Provides access global setup method
     */
    setup: pnpjs_setup,
    /**
     * Provides access to the SharePoint REST interface
     */
    sp: pnpjs_sp,
    /**
     * Provides access to local and session storage
     */
    storage: storage,
    /**
     * Utility methods
     */
    util: util,
};
/**
 * Enables use of the import pnp from syntax
 */
/* harmony default export */ var pnpjs = (Def);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./pnpjs-sources/index-pnpjs.ts
/* concated harmony reexport util */__webpack_require__.d(__webpack_exports__, "util", function() { return util; });
/* concated harmony reexport sp */__webpack_require__.d(__webpack_exports__, "sp", function() { return pnpjs_sp; });
/* concated harmony reexport graph */__webpack_require__.d(__webpack_exports__, "graph", function() { return pnpjs_graph; });
/* concated harmony reexport storage */__webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* concated harmony reexport config */__webpack_require__.d(__webpack_exports__, "config", function() { return pnpjs_config; });
/* concated harmony reexport log */__webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* concated harmony reexport setup */__webpack_require__.d(__webpack_exports__, "setup", function() { return pnpjs_setup; });
/* concated harmony reexport extendGlobal */__webpack_require__.d(__webpack_exports__, "extendGlobal", function() { return extendGlobal; });
/* concated harmony reexport extendObj */__webpack_require__.d(__webpack_exports__, "extendObj", function() { return extendObj; });
/* concated harmony reexport extendFactory */__webpack_require__.d(__webpack_exports__, "extendFactory", function() { return extendFactory; });
/* concated harmony reexport clearGlobalExtensions */__webpack_require__.d(__webpack_exports__, "clearGlobalExtensions", function() { return clearGlobalExtensions; });
/* concated harmony reexport enableExtensions */__webpack_require__.d(__webpack_exports__, "enableExtensions", function() { return enableExtensions; });
/* concated harmony reexport disableExtensions */__webpack_require__.d(__webpack_exports__, "disableExtensions", function() { return disableExtensions; });
/* concated harmony reexport SPNS */__webpack_require__.d(__webpack_exports__, "SPNS", function() { return all_namespaceObject; });
/* concated harmony reexport GraphNS */__webpack_require__.d(__webpack_exports__, "GraphNS", function() { return presets_all_namespaceObject; });
/* concated harmony reexport objectToMap */__webpack_require__.d(__webpack_exports__, "objectToMap", function() { return common["y" /* objectToMap */]; });
/* concated harmony reexport mergeMaps */__webpack_require__.d(__webpack_exports__, "mergeMaps", function() { return common["v" /* mergeMaps */]; });
/* concated harmony reexport RuntimeConfigImpl */__webpack_require__.d(__webpack_exports__, "RuntimeConfigImpl", function() { return common["f" /* RuntimeConfigImpl */]; });
/* concated harmony reexport RuntimeConfig */__webpack_require__.d(__webpack_exports__, "RuntimeConfig", function() { return common["e" /* RuntimeConfig */]; });
/* concated harmony reexport mergeHeaders */__webpack_require__.d(__webpack_exports__, "mergeHeaders", function() { return common["u" /* mergeHeaders */]; });
/* concated harmony reexport mergeOptions */__webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return common["w" /* mergeOptions */]; });
/* concated harmony reexport getADALResource */__webpack_require__.d(__webpack_exports__, "getADALResource", function() { return common["k" /* getADALResource */]; });
/* concated harmony reexport FetchClient */__webpack_require__.d(__webpack_exports__, "FetchClient", function() { return common["b" /* FetchClient */]; });
/* concated harmony reexport BearerTokenFetchClient */__webpack_require__.d(__webpack_exports__, "BearerTokenFetchClient", function() { return common["a" /* BearerTokenFetchClient */]; });
/* concated harmony reexport SPFxAdalClient */__webpack_require__.d(__webpack_exports__, "SPFxAdalClient", function() { return common["g" /* SPFxAdalClient */]; });
/* concated harmony reexport PnPClientStorageWrapper */__webpack_require__.d(__webpack_exports__, "PnPClientStorageWrapper", function() { return common["d" /* PnPClientStorageWrapper */]; });
/* concated harmony reexport PnPClientStorage */__webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return common["c" /* PnPClientStorage */]; });
/* concated harmony reexport getCtxCallback */__webpack_require__.d(__webpack_exports__, "getCtxCallback", function() { return common["l" /* getCtxCallback */]; });
/* concated harmony reexport dateAdd */__webpack_require__.d(__webpack_exports__, "dateAdd", function() { return common["j" /* dateAdd */]; });
/* concated harmony reexport combine */__webpack_require__.d(__webpack_exports__, "combine", function() { return common["i" /* combine */]; });
/* concated harmony reexport getRandomString */__webpack_require__.d(__webpack_exports__, "getRandomString", function() { return common["o" /* getRandomString */]; });
/* concated harmony reexport getGUID */__webpack_require__.d(__webpack_exports__, "getGUID", function() { return common["m" /* getGUID */]; });
/* concated harmony reexport isFunc */__webpack_require__.d(__webpack_exports__, "isFunc", function() { return common["r" /* isFunc */]; });
/* concated harmony reexport objectDefinedNotNull */__webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return common["x" /* objectDefinedNotNull */]; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "isArray", function() { return common["q" /* isArray */]; });
/* concated harmony reexport assign */__webpack_require__.d(__webpack_exports__, "assign", function() { return common["h" /* assign */]; });
/* concated harmony reexport isUrlAbsolute */__webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return common["s" /* isUrlAbsolute */]; });
/* concated harmony reexport stringIsNullOrEmpty */__webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return common["A" /* stringIsNullOrEmpty */]; });
/* concated harmony reexport sanitizeGuid */__webpack_require__.d(__webpack_exports__, "sanitizeGuid", function() { return common["z" /* sanitizeGuid */]; });
/* concated harmony reexport jsS */__webpack_require__.d(__webpack_exports__, "jsS", function() { return common["t" /* jsS */]; });
/* concated harmony reexport hOP */__webpack_require__.d(__webpack_exports__, "hOP", function() { return common["p" /* hOP */]; });
/* concated harmony reexport getHashCode */__webpack_require__.d(__webpack_exports__, "getHashCode", function() { return common["n" /* getHashCode */]; });
/* concated harmony reexport Logger */__webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* concated harmony reexport LogLevel */__webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* concated harmony reexport ConsoleListener */__webpack_require__.d(__webpack_exports__, "ConsoleListener", function() { return ConsoleListener; });
/* concated harmony reexport FunctionListener */__webpack_require__.d(__webpack_exports__, "FunctionListener", function() { return FunctionListener; });
/* concated harmony reexport Settings */__webpack_require__.d(__webpack_exports__, "Settings", function() { return configuration_Settings; });
/* concated harmony reexport CachingConfigurationProvider */__webpack_require__.d(__webpack_exports__, "CachingConfigurationProvider", function() { return cachingConfigurationProvider; });
/* concated harmony reexport SPListConfigurationProvider */__webpack_require__.d(__webpack_exports__, "SPListConfigurationProvider", function() { return spListConfigurationProvider; });
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
/* concated harmony reexport headers */__webpack_require__.d(__webpack_exports__, "headers", function() { return request_builders_headers; });
/* concated harmony reexport AdalClient */__webpack_require__.d(__webpack_exports__, "AdalClient", function() { return adalclient_AdalClient; });
/* concated harmony reexport Logger */__webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* concated harmony reexport LogLevel */__webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* concated harmony reexport ConsoleListener */__webpack_require__.d(__webpack_exports__, "ConsoleListener", function() { return ConsoleListener; });
/* concated harmony reexport FunctionListener */__webpack_require__.d(__webpack_exports__, "FunctionListener", function() { return FunctionListener; });
/* concated harmony reexport objectToMap */__webpack_require__.d(__webpack_exports__, "objectToMap", function() { return common["y" /* objectToMap */]; });
/* concated harmony reexport mergeMaps */__webpack_require__.d(__webpack_exports__, "mergeMaps", function() { return common["v" /* mergeMaps */]; });
/* concated harmony reexport setup */__webpack_require__.d(__webpack_exports__, "setup", function() { return /* unused reexport */undefined; });
/* concated harmony reexport RuntimeConfigImpl */__webpack_require__.d(__webpack_exports__, "RuntimeConfigImpl", function() { return common["f" /* RuntimeConfigImpl */]; });
/* concated harmony reexport RuntimeConfig */__webpack_require__.d(__webpack_exports__, "RuntimeConfig", function() { return common["e" /* RuntimeConfig */]; });
/* concated harmony reexport mergeHeaders */__webpack_require__.d(__webpack_exports__, "mergeHeaders", function() { return common["u" /* mergeHeaders */]; });
/* concated harmony reexport mergeOptions */__webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return common["w" /* mergeOptions */]; });
/* concated harmony reexport getADALResource */__webpack_require__.d(__webpack_exports__, "getADALResource", function() { return common["k" /* getADALResource */]; });
/* concated harmony reexport FetchClient */__webpack_require__.d(__webpack_exports__, "FetchClient", function() { return common["b" /* FetchClient */]; });
/* concated harmony reexport BearerTokenFetchClient */__webpack_require__.d(__webpack_exports__, "BearerTokenFetchClient", function() { return common["a" /* BearerTokenFetchClient */]; });
/* concated harmony reexport SPFxAdalClient */__webpack_require__.d(__webpack_exports__, "SPFxAdalClient", function() { return common["g" /* SPFxAdalClient */]; });
/* concated harmony reexport PnPClientStorageWrapper */__webpack_require__.d(__webpack_exports__, "PnPClientStorageWrapper", function() { return common["d" /* PnPClientStorageWrapper */]; });
/* concated harmony reexport PnPClientStorage */__webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return common["c" /* PnPClientStorage */]; });
/* concated harmony reexport getCtxCallback */__webpack_require__.d(__webpack_exports__, "getCtxCallback", function() { return common["l" /* getCtxCallback */]; });
/* concated harmony reexport dateAdd */__webpack_require__.d(__webpack_exports__, "dateAdd", function() { return common["j" /* dateAdd */]; });
/* concated harmony reexport combine */__webpack_require__.d(__webpack_exports__, "combine", function() { return common["i" /* combine */]; });
/* concated harmony reexport getRandomString */__webpack_require__.d(__webpack_exports__, "getRandomString", function() { return common["o" /* getRandomString */]; });
/* concated harmony reexport getGUID */__webpack_require__.d(__webpack_exports__, "getGUID", function() { return common["m" /* getGUID */]; });
/* concated harmony reexport isFunc */__webpack_require__.d(__webpack_exports__, "isFunc", function() { return common["r" /* isFunc */]; });
/* concated harmony reexport objectDefinedNotNull */__webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return common["x" /* objectDefinedNotNull */]; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "isArray", function() { return common["q" /* isArray */]; });
/* concated harmony reexport assign */__webpack_require__.d(__webpack_exports__, "assign", function() { return common["h" /* assign */]; });
/* concated harmony reexport isUrlAbsolute */__webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return common["s" /* isUrlAbsolute */]; });
/* concated harmony reexport stringIsNullOrEmpty */__webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return common["A" /* stringIsNullOrEmpty */]; });
/* concated harmony reexport sanitizeGuid */__webpack_require__.d(__webpack_exports__, "sanitizeGuid", function() { return common["z" /* sanitizeGuid */]; });
/* concated harmony reexport jsS */__webpack_require__.d(__webpack_exports__, "jsS", function() { return common["t" /* jsS */]; });
/* concated harmony reexport hOP */__webpack_require__.d(__webpack_exports__, "hOP", function() { return common["p" /* hOP */]; });
/* concated harmony reexport getHashCode */__webpack_require__.d(__webpack_exports__, "getHashCode", function() { return common["n" /* getHashCode */]; });
/* concated harmony reexport App */__webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* concated harmony reexport AppCatalog */__webpack_require__.d(__webpack_exports__, "AppCatalog", function() { return AppCatalog; });
/* concated harmony reexport Attachment */__webpack_require__.d(__webpack_exports__, "Attachment", function() { return Attachment; });
/* concated harmony reexport Attachments */__webpack_require__.d(__webpack_exports__, "Attachments", function() { return Attachments; });
/* concated harmony reexport ClientsidePageFromFile */__webpack_require__.d(__webpack_exports__, "ClientsidePageFromFile", function() { return ClientsidePageFromFile; });
/* concated harmony reexport CreateClientsidePage */__webpack_require__.d(__webpack_exports__, "CreateClientsidePage", function() { return CreateClientsidePage; });
/* concated harmony reexport CanvasColumn */__webpack_require__.d(__webpack_exports__, "CanvasColumn", function() { return types_CanvasColumn; });
/* concated harmony reexport CanvasSection */__webpack_require__.d(__webpack_exports__, "CanvasSection", function() { return types_CanvasSection; });
/* concated harmony reexport ClientsideText */__webpack_require__.d(__webpack_exports__, "ClientsideText", function() { return types_ClientsideText; });
/* concated harmony reexport ClientsideWebpart */__webpack_require__.d(__webpack_exports__, "ClientsideWebpart", function() { return types_ClientsideWebpart; });
/* concated harmony reexport ColumnControl */__webpack_require__.d(__webpack_exports__, "ColumnControl", function() { return types_ColumnControl; });
/* concated harmony reexport PromotedState */__webpack_require__.d(__webpack_exports__, "PromotedState", function() { return PromotedState; });
/* concated harmony reexport Comment */__webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* concated harmony reexport Comments */__webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* concated harmony reexport Replies */__webpack_require__.d(__webpack_exports__, "Replies", function() { return Replies; });
/* concated harmony reexport ContentType */__webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* concated harmony reexport ContentTypes */__webpack_require__.d(__webpack_exports__, "ContentTypes", function() { return ContentTypes; });
/* concated harmony reexport FieldLink */__webpack_require__.d(__webpack_exports__, "FieldLink", function() { return FieldLink; });
/* concated harmony reexport FieldLinks */__webpack_require__.d(__webpack_exports__, "FieldLinks", function() { return FieldLinks; });
/* concated harmony reexport Feature */__webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* concated harmony reexport Features */__webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* concated harmony reexport Fields */__webpack_require__.d(__webpack_exports__, "Fields", function() { return Fields; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* concated harmony reexport AddFieldOptions */__webpack_require__.d(__webpack_exports__, "AddFieldOptions", function() { return AddFieldOptions; });
/* concated harmony reexport CalendarType */__webpack_require__.d(__webpack_exports__, "CalendarType", function() { return CalendarType; });
/* concated harmony reexport ChoiceFieldFormatType */__webpack_require__.d(__webpack_exports__, "ChoiceFieldFormatType", function() { return ChoiceFieldFormatType; });
/* concated harmony reexport DateTimeFieldFormatType */__webpack_require__.d(__webpack_exports__, "DateTimeFieldFormatType", function() { return DateTimeFieldFormatType; });
/* concated harmony reexport DateTimeFieldFriendlyFormatType */__webpack_require__.d(__webpack_exports__, "DateTimeFieldFriendlyFormatType", function() { return DateTimeFieldFriendlyFormatType; });
/* concated harmony reexport FieldTypes */__webpack_require__.d(__webpack_exports__, "FieldTypes", function() { return FieldTypes; });
/* concated harmony reexport FieldUserSelectionMode */__webpack_require__.d(__webpack_exports__, "FieldUserSelectionMode", function() { return FieldUserSelectionMode; });
/* concated harmony reexport UrlFieldFormatType */__webpack_require__.d(__webpack_exports__, "UrlFieldFormatType", function() { return UrlFieldFormatType; });
/* concated harmony reexport File */__webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* concated harmony reexport Files */__webpack_require__.d(__webpack_exports__, "Files", function() { return Files; });
/* concated harmony reexport CheckinType */__webpack_require__.d(__webpack_exports__, "CheckinType", function() { return CheckinType; });
/* concated harmony reexport MoveOperations */__webpack_require__.d(__webpack_exports__, "MoveOperations", function() { return MoveOperations; });
/* concated harmony reexport TemplateFileType */__webpack_require__.d(__webpack_exports__, "TemplateFileType", function() { return TemplateFileType; });
/* concated harmony reexport Version */__webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
/* concated harmony reexport Versions */__webpack_require__.d(__webpack_exports__, "Versions", function() { return Versions; });
/* concated harmony reexport Folder */__webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* concated harmony reexport Folders */__webpack_require__.d(__webpack_exports__, "Folders", function() { return Folders; });
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* concated harmony reexport Forms */__webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* concated harmony reexport HubSite */__webpack_require__.d(__webpack_exports__, "HubSite", function() { return HubSite; });
/* concated harmony reexport HubSites */__webpack_require__.d(__webpack_exports__, "HubSites", function() { return HubSites; });
/* concated harmony reexport Item */__webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* concated harmony reexport Items */__webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* concated harmony reexport ItemVersion */__webpack_require__.d(__webpack_exports__, "ItemVersion", function() { return ItemVersion; });
/* concated harmony reexport ItemVersions */__webpack_require__.d(__webpack_exports__, "ItemVersions", function() { return ItemVersions; });
/* concated harmony reexport PagedItemCollection */__webpack_require__.d(__webpack_exports__, "PagedItemCollection", function() { return types_PagedItemCollection; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* concated harmony reexport Lists */__webpack_require__.d(__webpack_exports__, "Lists", function() { return Lists; });
/* concated harmony reexport ControlMode */__webpack_require__.d(__webpack_exports__, "ControlMode", function() { return ControlMode; });
/* concated harmony reexport IRenderListDataOptions */__webpack_require__.d(__webpack_exports__, "IRenderListDataOptions", function() { return IRenderListDataOptions; });
/* concated harmony reexport Navigation */__webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* concated harmony reexport NavigationNode */__webpack_require__.d(__webpack_exports__, "NavigationNode", function() { return NavigationNode; });
/* concated harmony reexport NavigationNodes */__webpack_require__.d(__webpack_exports__, "NavigationNodes", function() { return NavigationNodes; });
/* concated harmony reexport NavigationService */__webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* concated harmony reexport Profiles */__webpack_require__.d(__webpack_exports__, "Profiles", function() { return Profiles; });
/* concated harmony reexport UrlZone */__webpack_require__.d(__webpack_exports__, "UrlZone", function() { return UrlZone; });
/* concated harmony reexport RegionalSettings */__webpack_require__.d(__webpack_exports__, "RegionalSettings", function() { return RegionalSettings; });
/* concated harmony reexport TimeZone */__webpack_require__.d(__webpack_exports__, "TimeZone", function() { return TimeZone; });
/* concated harmony reexport TimeZones */__webpack_require__.d(__webpack_exports__, "TimeZones", function() { return TimeZones; });
/* concated harmony reexport RelatedItemManager */__webpack_require__.d(__webpack_exports__, "RelatedItemManager", function() { return RelatedItemManager; });
/* concated harmony reexport SearchQueryBuilder */__webpack_require__.d(__webpack_exports__, "SearchQueryBuilder", function() { return SearchQueryBuilder; });
/* concated harmony reexport SearchResults */__webpack_require__.d(__webpack_exports__, "SearchResults", function() { return query_SearchResults; });
/* concated harmony reexport Search */__webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* concated harmony reexport Suggest */__webpack_require__.d(__webpack_exports__, "Suggest", function() { return Suggest; });
/* concated harmony reexport SortDirection */__webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* concated harmony reexport ReorderingRuleMatchType */__webpack_require__.d(__webpack_exports__, "ReorderingRuleMatchType", function() { return ReorderingRuleMatchType; });
/* concated harmony reexport QueryPropertyValueType */__webpack_require__.d(__webpack_exports__, "QueryPropertyValueType", function() { return QueryPropertyValueType; });
/* concated harmony reexport SearchBuiltInSourceId */__webpack_require__.d(__webpack_exports__, "SearchBuiltInSourceId", function() { return SearchBuiltInSourceId; });
/* concated harmony reexport RoleAssignment */__webpack_require__.d(__webpack_exports__, "RoleAssignment", function() { return RoleAssignment; });
/* concated harmony reexport RoleAssignments */__webpack_require__.d(__webpack_exports__, "RoleAssignments", function() { return RoleAssignments; });
/* concated harmony reexport RoleDefinition */__webpack_require__.d(__webpack_exports__, "RoleDefinition", function() { return RoleDefinition; });
/* concated harmony reexport RoleDefinitions */__webpack_require__.d(__webpack_exports__, "RoleDefinitions", function() { return RoleDefinitions; });
/* concated harmony reexport PermissionKind */__webpack_require__.d(__webpack_exports__, "PermissionKind", function() { return PermissionKind; });
/* concated harmony reexport SPSharedObjectType */__webpack_require__.d(__webpack_exports__, "SPSharedObjectType", function() { return SPSharedObjectType; });
/* concated harmony reexport SharingDomainRestrictionMode */__webpack_require__.d(__webpack_exports__, "SharingDomainRestrictionMode", function() { return SharingDomainRestrictionMode; });
/* concated harmony reexport SharingLinkKind */__webpack_require__.d(__webpack_exports__, "SharingLinkKind", function() { return SharingLinkKind; });
/* concated harmony reexport SharingOperationStatusCode */__webpack_require__.d(__webpack_exports__, "SharingOperationStatusCode", function() { return SharingOperationStatusCode; });
/* concated harmony reexport SharingRole */__webpack_require__.d(__webpack_exports__, "SharingRole", function() { return SharingRole; });
/* concated harmony reexport RoleType */__webpack_require__.d(__webpack_exports__, "RoleType", function() { return RoleType; });
/* concated harmony reexport SiteDesigns */__webpack_require__.d(__webpack_exports__, "SiteDesigns", function() { return SiteDesigns; });
/* concated harmony reexport SiteGroup */__webpack_require__.d(__webpack_exports__, "SiteGroup", function() { return SiteGroup; });
/* concated harmony reexport SiteGroups */__webpack_require__.d(__webpack_exports__, "SiteGroups", function() { return SiteGroups; });
/* concated harmony reexport SiteScripts */__webpack_require__.d(__webpack_exports__, "SiteScripts", function() { return SiteScripts; });
/* concated harmony reexport SiteUser */__webpack_require__.d(__webpack_exports__, "SiteUser", function() { return SiteUser; });
/* concated harmony reexport SiteUsers */__webpack_require__.d(__webpack_exports__, "SiteUsers", function() { return SiteUsers; });
/* concated harmony reexport Site */__webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* concated harmony reexport MySocial */__webpack_require__.d(__webpack_exports__, "MySocial", function() { return MySocial; });
/* concated harmony reexport Social */__webpack_require__.d(__webpack_exports__, "Social", function() { return Social; });
/* concated harmony reexport SocialActorType */__webpack_require__.d(__webpack_exports__, "SocialActorType", function() { return SocialActorType; });
/* concated harmony reexport SocialActorTypes */__webpack_require__.d(__webpack_exports__, "SocialActorTypes", function() { return SocialActorTypes; });
/* concated harmony reexport SocialFollowResult */__webpack_require__.d(__webpack_exports__, "SocialFollowResult", function() { return SocialFollowResult; });
/* concated harmony reexport SocialStatusCode */__webpack_require__.d(__webpack_exports__, "SocialStatusCode", function() { return SocialStatusCode; });
/* concated harmony reexport Utilities */__webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
/* concated harmony reexport Subscription */__webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* concated harmony reexport Subscriptions */__webpack_require__.d(__webpack_exports__, "Subscriptions", function() { return Subscriptions; });
/* concated harmony reexport UserCustomAction */__webpack_require__.d(__webpack_exports__, "UserCustomAction", function() { return UserCustomAction; });
/* concated harmony reexport UserCustomActions */__webpack_require__.d(__webpack_exports__, "UserCustomActions", function() { return UserCustomActions; });
/* concated harmony reexport UserCustomActionRegistrationType */__webpack_require__.d(__webpack_exports__, "UserCustomActionRegistrationType", function() { return UserCustomActionRegistrationType; });
/* concated harmony reexport UserCustomActionScope */__webpack_require__.d(__webpack_exports__, "UserCustomActionScope", function() { return UserCustomActionScope; });
/* concated harmony reexport View */__webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* concated harmony reexport ViewFields */__webpack_require__.d(__webpack_exports__, "ViewFields", function() { return ViewFields; });
/* concated harmony reexport Views */__webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* concated harmony reexport ViewScope */__webpack_require__.d(__webpack_exports__, "ViewScope", function() { return ViewScope; });
/* concated harmony reexport WebPartsPersonalizationScope */__webpack_require__.d(__webpack_exports__, "WebPartsPersonalizationScope", function() { return WebPartsPersonalizationScope; });
/* concated harmony reexport WebPartDefinitions */__webpack_require__.d(__webpack_exports__, "WebPartDefinitions", function() { return WebPartDefinitions; });
/* concated harmony reexport WebPartDefinition */__webpack_require__.d(__webpack_exports__, "WebPartDefinition", function() { return WebPartDefinition; });
/* concated harmony reexport LimitedWebPartManager */__webpack_require__.d(__webpack_exports__, "LimitedWebPartManager", function() { return LimitedWebPartManager; });
/* concated harmony reexport Web */__webpack_require__.d(__webpack_exports__, "Web", function() { return Web; });
/* concated harmony reexport Webs */__webpack_require__.d(__webpack_exports__, "Webs", function() { return Webs; });
/* concated harmony reexport escapeQueryStrValue */__webpack_require__.d(__webpack_exports__, "escapeQueryStrValue", function() { return escapeQueryStrValue; });
/* concated harmony reexport extractWebUrl */__webpack_require__.d(__webpack_exports__, "extractWebUrl", function() { return extractWebUrl; });
/* concated harmony reexport containsInvalidFileFolderChars */__webpack_require__.d(__webpack_exports__, "containsInvalidFileFolderChars", function() { return containsInvalidFileFolderChars; });
/* concated harmony reexport stripInvalidFileFolderChars */__webpack_require__.d(__webpack_exports__, "stripInvalidFileFolderChars", function() { return stripInvalidFileFolderChars; });
/* concated harmony reexport metadata */__webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* concated harmony reexport objectToSPKeyValueCollection */__webpack_require__.d(__webpack_exports__, "objectToSPKeyValueCollection", function() { return objectToSPKeyValueCollection; });
/* concated harmony reexport toAbsoluteUrl */__webpack_require__.d(__webpack_exports__, "toAbsoluteUrl", function() { return toabsoluteurl["a" /* toAbsoluteUrl */]; });












































/***/ })
/******/ ]);
});