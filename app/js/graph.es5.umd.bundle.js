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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
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
  "DefaultHeaders": () => (/* reexport */ DefaultHeaders),
  "DefaultInit": () => (/* reexport */ DefaultInit),
  "DirectoryObject": () => (/* reexport */ DirectoryObject),
  "DirectoryObjectTypes": () => (/* reexport */ DirectoryObjectTypes),
  "DirectoryObjects": () => (/* reexport */ DirectoryObjects),
  "Drive": () => (/* reexport */ Drive),
  "DriveItem": () => (/* reexport */ DriveItem),
  "DriveItems": () => (/* reexport */ DriveItems),
  "Drives": () => (/* reexport */ Drives),
  "Endpoint": () => (/* reexport */ endpoint_Endpoint),
  "Event": () => (/* reexport */ Event),
  "Events": () => (/* reexport */ Events),
  "GraphBrowser": () => (/* reexport */ GraphBrowser),
  "GraphFI": () => (/* reexport */ GraphFI),
  "GraphQueryable": () => (/* reexport */ GraphQueryable),
  "GraphQueryableCollection": () => (/* reexport */ graphqueryable_GraphQueryableCollection),
  "GraphQueryableInstance": () => (/* reexport */ GraphQueryableInstance),
  "GraphQueryableSearchableCollection": () => (/* reexport */ GraphQueryableSearchableCollection),
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
  "SPFx": () => (/* reexport */ SPFx),
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
  "Telemetry": () => (/* reexport */ Telemetry),
  "Thread": () => (/* reexport */ Thread),
  "Threads": () => (/* reexport */ Threads),
  "TrendingInsight": () => (/* reexport */ TrendingInsight),
  "TrendingInsights": () => (/* reexport */ TrendingInsights),
  "UsedInsight": () => (/* reexport */ UsedInsight),
  "UsedInsights": () => (/* reexport */ UsedInsights),
  "User": () => (/* reexport */ User),
  "Users": () => (/* reexport */ Users),
  "graphDelete": () => (/* reexport */ graphDelete),
  "graphGet": () => (/* reexport */ graphGet),
  "graphPatch": () => (/* reexport */ graphPatch),
  "graphPost": () => (/* reexport */ graphPost),
  "graphPut": () => (/* reexport */ graphPut),
  "graphfi": () => (/* reexport */ graphfi)
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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/add-prop.js
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
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/operations.js
function ensureInit(method, init = { headers: {} }) {
    return { method, ...init, headers: { ...init.headers } };
}
function get(init) {
    return this.start(ensureInit("GET", init));
}
function post(init) {
    return this.start(ensureInit("POST", init));
}
function put(init) {
    return this.start(ensureInit("PUT", init));
}
function patch(init) {
    return this.start(ensureInit("PATCH", init));
}
function del(init) {
    return this.start(ensureInit("DELETE", init));
}
function op(q, operation, init) {
    return Reflect.apply(operation, q, [init]);
}
//# sourceMappingURL=operations.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/node_modules/tslib/tslib.es6.js
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

function tslib_es6_spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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

function tslib_es6_classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function tslib_es6_classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ./node_modules/@pnp/core/util.js
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function util_dateAdd(date, interval, units) {
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
 * @param f The thing to test for functionness
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function util_isFunc(f) {
    return typeof f === "function";
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray(array);
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
    return typeof s === "undefined" || s === null || s.length < 1;
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
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
function util_getHashCode(s) {
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
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
//# sourceMappingURL=util.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/core/moments.js

/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
function broadcast() {
    return function (observers, ...args) {
        const obs = [...observers];
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
    };
}
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function asyncReduce() {
    return async function (observers, ...args) {
        // get our initial values
        let r = args;
        const obs = [...observers];
        // process each handler which updates our "state" in order
        // returning the new "state" as a tuple [...Parameters<T>]
        // this is conceptually the redux pattern, each function gets a copy of the
        // previous state, may optionally modify it, and return a new state
        for (let i = 0; i < obs.length; i++) {
            r = await Reflect.apply(obs[i], this, r);
        }
        return r;
    };
}
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
function request() {
    return async function (observers, ...args) {
        if (!isArray(observers) || observers.length < 1) {
            return undefined;
        }
        const handler = observers[0];
        const result = await Reflect.apply(handler, this, args);
        return result;
    };
}
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
function lifecycle() {
    return function (observers) {
        const obs = [...observers];
        // process each handler which updates our instance in order
        // very similar to asyncReduce but the state is the object itself
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, []);
        }
        return this;
    };
}
//# sourceMappingURL=moments.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/core/timeline.js


/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
class Timeline {
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments, observers = {}) {
        this.moments = moments;
        this.observers = observers;
        this._onProxy = null;
        this._emitProxy = null;
        this._inheritingObservers = true;
    }
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors) {
        for (let i = 0; i < behaviors.length; i++) {
            behaviors[i](this);
        }
        return this;
    }
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on() {
        if (this._onProxy === null) {
            this._onProxy = new Proxy(this, {
                get: (target, p) => Object.assign((handler) => {
                    target.cloneObserversOnChange();
                    addObserver(target.observers, p, handler, "add");
                    return target;
                }, {
                    toArray: () => {
                        return Reflect.has(target.observers, p) ? [...Reflect.get(target.observers, p)] : [];
                    },
                    replace: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "replace");
                        return target;
                    },
                    prepend: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "prepend");
                        return target;
                    },
                    clear: () => {
                        if (Reflect.has(target.observers, p)) {
                            target.cloneObserversOnChange();
                            // we trust ourselves that this will be an array
                            target.observers[p].length = 0;
                            return true;
                        }
                        return false;
                    },
                }),
            });
        }
        return this._onProxy;
    }
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message, level = 0) {
        this.emit.log(message, level);
    }
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    error(e) {
        if (objectDefinedNotNull(e)) {
            this.emit.error(e);
        }
    }
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    get emit() {
        if (this._emitProxy === null) {
            this._emitProxy = new Proxy(this, {
                get: (target, p) => (...args) => {
                    // handle the case where no observers registered for the target moment
                    const observers = Reflect.has(target.observers, p) ? Reflect.get(target.observers, p) : [];
                    if ((!isArray(observers) || observers.length < 1) && p === "error") {
                        // if we are emitting an error, and no error observers are defined, we throw
                        throw Error(`Unhandled Exception: ${args[0]}`);
                    }
                    try {
                        // default to broadcasting any events without specific impl (will apply to log and error)
                        const moment = Reflect.has(target.moments, p) ? Reflect.get(target.moments, p) : p === "init" || p === "dispose" ? lifecycle() : broadcast();
                        // pass control to the individual moment's implementation
                        return Reflect.apply(moment, target, [observers, ...args]);
                    }
                    catch (e) {
                        if (p !== "error") {
                            this.error(e);
                        }
                        else {
                            // if all else fails, re-throw as we are getting errors from error observers meaning something is sideways
                            throw e;
                        }
                    }
                },
            });
        }
        return this._emitProxy;
    }
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    async start(init) {
        try {
            // initialize our timeline
            this.emit.init();
            // execute the timeline
            // (this await is required to ensure dispose is called AFTER execute completes)
            // we do not catch here so that any promise rejects in execute bubble up to the caller
            return await this.execute(init);
        }
        finally {
            try {
                // provide an opportunity for cleanup of the timeline
                this.emit.dispose();
            }
            catch (e) {
                // shouldn't happen, but possible dispose throws - which may be missed as the usercode await will have resolved.
                const e2 = Object.assign(Error("Error in dispose."), {
                    innerException: e,
                });
                this.error(e2);
            }
        }
    }
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    cloneObserversOnChange() {
        if (this._inheritingObservers) {
            this._inheritingObservers = false;
            this.observers = cloneObserverCollection(this.observers);
        }
    }
}
/**
 * Adds an observer to a given target
 *
 * @param target The object to which events are registered
 * @param moment The name of the moment to which the observer is registered
 * @param addBehavior Determines how the observer is added to the collection
 *
 */
function addObserver(target, moment, observer, addBehavior) {
    if (!util_isFunc(observer)) {
        throw Error("Observers must be functions.");
    }
    if (!Reflect.has(target, moment)) {
        // if we don't have a registration for this moment, then we just add a new prop
        target[moment] = [observer];
    }
    else {
        // if we have an existing property then we follow the specified behavior
        switch (addBehavior) {
            case "add":
                target[moment].push(observer);
                break;
            case "prepend":
                target[moment].unshift(observer);
                break;
            case "replace":
                target[moment].length = 0;
                target[moment].push(observer);
                break;
        }
    }
    return target[moment];
}
function cloneObserverCollection(source) {
    return Reflect.ownKeys(source).reduce((clone, key) => {
        clone[key] = [...source[key]];
        return clone;
    }, {});
}
//# sourceMappingURL=timeline.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/core/extendable.js

let _enableExtensions = false;
const ObjExtensionsSym = Symbol.for("PnPExt");
const factoryExtensions = new Map();
/**
 * Decorator factory wrapping any tagged class in the extension proxy, enabling the use of object extensions
 *
 * @description MUST be applied last (i.e. be the first decorator in the list top to bottom applied to a class)
 *
 * @returns Decorator implementation
 */
function extendable() {
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                let r = Reflect.construct(clz, args, newTarget);
                // this block handles the factory function extensions by picking
                // them off the factory and applying them to the created object
                const proto = Reflect.getPrototypeOf(target);
                if (Reflect.has(proto, ObjExtensionsSym)) {
                    const extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
                    if (extensions) {
                        r = extendable_extend(r, extensions);
                    }
                }
                const proxied = new Proxy(r, {
                    apply: (target, _thisArg, argArray) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("apply", (...a) => Reflect.apply(...a), target, proxied, argArray);
                    },
                    get: (target, p, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("get", (...a) => Reflect.get(...a), target, p, receiver);
                    },
                    has: (target, p) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("has", (...a) => Reflect.has(...a), target, p);
                    },
                    set: (target, p, value, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("set", (...a) => Reflect.set(...a), target, p, value, receiver);
                    },
                });
                return proxied;
            },
        });
    };
}
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function extendable_extend(target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
}
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
function extendFactory(factory, extensions) {
    _enableExtensions = true;
    // factoryExtensions
    const proto = Reflect.getPrototypeOf(factory);
    if (proto) {
        if (!Reflect.has(proto, ObjExtensionsSym)) {
            Reflect.defineProperty(proto, ObjExtensionsSym, {
                value: getGUID(),
            });
        }
        const key = proto[ObjExtensionsSym];
        if (!factoryExtensions.has(key)) {
            factoryExtensions.set(key, []);
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        extendCol(factoryExtensions.get(key), extensions);
    }
}
function extendCol(a, e) {
    if (isArray(e)) {
        a.push(...e);
    }
    else {
        a.push(e);
    }
}
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
 * Executes the extended functionality if present, or the default action
 *
 * @param op Current operation type
 * @param or The default non-extended functionality
 * @param target The current "this" to which the current call applies
 * @param rest Any arguments required for the called method
 * @returns Whatever the underlying extension or method returns
 */
function extensionOrDefault(op, or, target, ...rest) {
    if (_enableExtensions) {
        const extensions = [];
        // we need to invoke extensions tied to this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push(...Reflect.get(target, ObjExtensionsSym));
        }
        let result = undefined;
        for (let i = 0; i < extensions.length; i++) {
            const extension = extensions[i];
            if (util_isFunc(extension)) {
                // this extension is a function which we call
                result = extension(op, target, ...rest);
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are adding/overriding a specific method/property
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
//# sourceMappingURL=extendable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/core/index.js





/**
 * Behavior exports
 */


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/invokable.js

/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
function invokable(invokeableAction) {
    if (typeof invokeableAction !== "function") {
        invokeableAction = function (init) {
            return op(this, get, init);
        };
    }
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                const invokableInstance = Object.assign(function (init) {
                    // the "this" for our invoked object will be set by extendable OR we use invokableInstance directly
                    const localThis = typeof this === "undefined" ? invokableInstance : this;
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    return Reflect.apply(invokeableAction, localThis, [init]);
                }, Reflect.construct(clz, args, newTarget));
                Reflect.setPrototypeOf(invokableInstance, newTarget.prototype);
                return invokableInstance;
            },
        });
    };
}
//# sourceMappingURL=invokable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/queryable.js



const DefaultMoments = {
    pre: asyncReduce(),
    auth: asyncReduce(),
    send: request(),
    parse: asyncReduce(),
    post: asyncReduce(),
    data: broadcast(),
};
let Queryable = class Queryable extends Timeline {
    constructor(init, path) {
        super(DefaultMoments);
        this.InternalResolveEvent = Symbol.for("Queryable_Resolve");
        this.InternalRejectEvent = Symbol.for("Queryable_Reject");
        let url = "";
        let observers = undefined;
        if (typeof init === "string") {
            url = combine(init, path);
        }
        else if (isArray(init)) {
            if (init.length !== 2) {
                throw Error("When using the tuple first param only two arguments are supported");
            }
            const q = init[0];
            const _url = init[1];
            url = combine(_url, path);
            observers = q.observers;
        }
        else {
            const { _url, observers: _observers } = init;
            url = combine(_url, path);
            observers = _observers;
        }
        if (typeof observers !== "undefined") {
            this.observers = observers;
            this._inheritingObservers = true;
        }
        this._url = url;
        this._query = new Map();
    }
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart) {
        this._url += pathPart;
        return this;
    }
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl() {
        let u = this.toUrl();
        if (this._query.size > 0) {
            u += "?" + Array.from(this._query).map((v) => `${v[0]}=${encodeURIComponent(v[1])}`).join("&");
        }
        return u;
    }
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query() {
        return this._query;
    }
    /**
     * Gets the current url
     *
     */
    toUrl() {
        return this._url;
    }
    execute(userInit) {
        setTimeout(async () => {
            const requestId = util_getGUID();
            let requestUrl;
            const log = (msg, level) => {
                // this allows us to easily and consistently format our messages
                this.log(`[${requestId}] ${msg}`, level);
            };
            try {
                log("Beginning request", 1);
                // eslint-disable-next-line prefer-const
                let [url, init, result] = await this.emit.pre(this.toRequestUrl(), userInit || {}, undefined);
                log(`Url: ${url}`, 1);
                if (typeof result !== "undefined") {
                    log("Result returned from pre, Emitting data");
                    this.emit.data(result);
                    log("Emitted data");
                    return;
                }
                log("Emitting auth");
                [requestUrl, init] = await this.emit.auth(new URL(url), init);
                log("Emitted auth");
                // we always resepect user supplied init over observer modified init
                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                log("Emitting send");
                let response = await this.emit.send(requestUrl, init);
                log("Emitted send");
                log("Emitting parse");
                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                log("Emitted parse");
                log("Emitting post");
                [requestUrl, result] = await this.emit.post(requestUrl, result);
                log("Emitted post");
                log("Emitting data");
                this.emit.data(result);
                log("Emitted data");
            }
            catch (e) {
                log(`Emitting error: "${e.message || e}"`, 3);
                // anything that throws we emit and continue
                this.error(e);
                log("Emitted error", 3);
            }
            finally {
                log("Finished request", 1);
            }
        }, 0);
        return new Promise((resolve, reject) => {
            // we overwrite any pre-existing internal events as a
            // given queryable can only process a single request at a time
            this.on[this.InternalResolveEvent].replace(resolve);
            this.on[this.InternalRejectEvent].replace(reject);
        });
    }
};
Queryable = tslib_es6_decorate([
    extendable(),
    invokable()
], Queryable);

//# sourceMappingURL=queryable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/queryable-factory.js
function queryableFactory(constructor) {
    return (init, path) => {
        // provides a point where we can potentially intercept any queryable being created
        return new constructor(init, path);
    };
}
//# sourceMappingURL=queryable-factory.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/request-builders.js

function body(o, previous) {
    return Object.assign({ body: jsS(o) }, previous);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/behaviors/parsers.js


function DefaultParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return parseODataJSON(json);
    });
}
function TextParse() {
    return parseBinderWithErrorCheck(r => r.text());
}
function BlobParse() {
    return parseBinderWithErrorCheck(r => r.blob());
}
function JSONParse() {
    return parseBinderWithErrorCheck(r => r.json());
}
function BufferParse() {
    return parseBinderWithErrorCheck(r => util_isFunc(r.arrayBuffer) ? r.arrayBuffer() : r.buffer());
}
function HeaderParse() {
    return parseBinderWithErrorCheck(async (r) => r.headers);
}
async function errorCheck(url, response, result) {
    if (!response.ok) {
        // within observers we just throw to indicate an unrecoverable error within the pipeline
        const y = await HttpRequestError.init(response);
        throw y;
    }
    return [url, response, result];
}
function parseODataJSON(json) {
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
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
function parseBinderWithErrorCheck(impl) {
    return (instance) => {
        // we clear anything else registered for parse
        // add error check
        // add the impl function we are supplied
        instance.on.parse.replace(errorCheck);
        instance.on.parse(async (url, response, result) => {
            if (typeof result === "undefined") {
                result = await impl(response);
            }
            return [url, response, result];
        });
        return instance;
    };
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static async init(r) {
        const t = await r.clone().text();
        return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r.clone());
    }
}
//# sourceMappingURL=parsers.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/behaviors/browser-fetch.js


function BrowserFetch(props) {
    const { replace } = {
        replace: true,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            this.log(`Fetch: ${init.method} ${url.toString()}`, 0);
            return fetch(url.toString(), init);
        });
        return instance;
    };
}
function BrowserFetchWithRetry(props) {
    const { interval, replace, retries } = {
        replace: true,
        interval: 200,
        retries: 3,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            let response;
            let wait = interval;
            let count = 1;
            const retry = async () => {
                // if we've tried too many times, throw
                if (count >= retries) {
                    throw new HttpRequestError(`Retry count exceeded (${retries}) for this request. ${response.status}: ${response.statusText};`, response);
                }
                if (typeof response === "undefined" || (response === null || response === void 0 ? void 0 : response.status) === 429 || (response === null || response === void 0 ? void 0 : response.status) === 503 || (response === null || response === void 0 ? void 0 : response.status) === 504) {
                    // this is our first try and response isn't defined yet
                    // we have been throttled OR http status code 503 or 504, we can retry this
                    if (typeof response !== "undefined") {
                        // this isn't our first try so we need to calculate delay
                        if (response.headers.has("Retry-After")) {
                            // if we have gotten a header, use that value as the delay value in seconds
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            wait = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                        }
                        else {
                            // Increment our counters.
                            wait *= 2;
                        }
                        this.log(`Attempt #${count} to retry request which failed with ${response.status}: ${response.statusText}`, 0);
                        count++;
                        await delay(wait);
                    }
                    try {
                        const u = url.toString();
                        this.log(`Fetch: ${init.method} ${u}`, 0);
                        response = await fetch(u, init);
                        // if we got a good response, return it, otherwise see if we can retry
                        return response.ok ? response : retry();
                    }
                    catch (err) {
                        return retry();
                    }
                }
                else {
                    return response;
                }
            };
            // this the the first call to retry that starts the cycle
            // response is undefined and the other values have their defaults
            return retry();
        });
        return instance;
    };
}
//# sourceMappingURL=browser-fetch.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/behaviors/caching.js

function Caching(props) {
    const storage = new PnPClientStorage();
    const { store, keyFactory, expireFunc } = {
        store: "local",
        keyFactory: (url) => getHashCode(url.toLowerCase()).toString(),
        expireFunc: () => dateAdd(new Date(), "minute", 5),
        ...props,
    };
    const s = store === "session" ? storage.session : storage.local;
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // only cache get requested data
            if (!/get/i.test(init.method)) {
                return [url, init, result];
            }
            const key = keyFactory(url.toString());
            const cached = s.get(key);
            // we need to ensure that result stays "undefined" unless we mean to set null as the result
            if (cached === null) {
                // if we don't have a cached result we need to get it after the request is sent and parsed
                this.on.post(async function (url, result) {
                    s.put(key, result, expireFunc(url.toString()));
                    return [url, result];
                });
            }
            else {
                result = cached;
            }
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=caching.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/behaviors/caching-pessimistic.js

/**
 * Pessimistic Caching Behavior
 * Always returns the cached value if one exists but asynchronously executes the call and updates the cache.
 * If a expireFunc is included then the cache update only happens if the cache has expired.
 *
 * @param store Use local or session storage
 * @param keyFactory: a function that returns the key for the cache value, if not provided a default hash of the url will be used
 * @param expireFunc: a function that returns a date of expiration for the cache value, if not provided the cache never expires but is always updated.
 */
function CachingPessimisticRefresh(type = "session", keyFactory, expireFunc) {
    let store;
    if (type === "session") {
        store = (typeof sessionStorage === "undefined") ? new MemoryStorage() : sessionStorage;
    }
    else {
        store = (typeof localStorage === "undefined") ? new MemoryStorage() : localStorage;
    }
    if (!isFunc(keyFactory)) {
        keyFactory = (url) => getHashCode(url.toLowerCase()).toString();
    }
    const putStorage = (key, o) => {
        try {
            if (isFunc(expireFunc)) {
                const storage = new PnPClientStorage();
                const s = type === "session" ? storage.session : storage.local;
                s.put(key, o, expireFunc());
            }
            else {
                const cache = JSON.stringify({ pnp: 1, expiration: undefined, value: o });
                store.setItem(key, cache);
            }
        }
        catch (err) {
            console.log(`CachingPessimistic(putStorage): ${err}.`);
        }
    };
    const getStorage = (key) => {
        let retVal = undefined;
        try {
            if (isFunc(expireFunc)) {
                const storage = new PnPClientStorage();
                const s = type === "session" ? storage.session : storage.local;
                retVal = s.get(key);
            }
            else {
                const cache = store.getItem(key);
                if (typeof cache === "string") {
                    retVal = JSON.parse(cache);
                }
            }
        }
        catch (err) {
            console.log(`CachingPessimistic(getStorage): ${err}.`);
        }
        return retVal;
    };
    let refreshCache = true;
    return (instance) => {
        instance.on.init(function () {
            const newExecute = extend(this, {
                async execute(userInit = { method: "GET", headers: {} }) {
                    setTimeout(async () => {
                        const requestId = getGUID();
                        const emitError = (e) => {
                            this.log(`[id:${requestId}] Emitting error: "${e.message || e}"`, 3);
                            this.emit.error(e);
                            this.log(`[id:${requestId}] Emitted error: "${e.message || e}"`, 3);
                        };
                        try {
                            let retVal = undefined;
                            const emitSend = async () => {
                                this.log(`[id:${requestId}] Emitting auth`, 0);
                                [requestUrl, init] = await this.emit.auth(requestUrl, init);
                                this.log(`[id:${requestId}] Emitted auth`, 0);
                                // we always resepect user supplied init over observer modified init
                                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                                this.log(`[id:${requestId}] Emitting send`, 0);
                                let response = await this.emit.send(requestUrl, init);
                                this.log(`[id:${requestId}] Emitted send`, 0);
                                this.log(`[id:${requestId}] Emitting parse`, 0);
                                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                                this.log(`[id:${requestId}] Emitted parse`, 0);
                                this.log(`[id:${requestId}] Emitting post`, 0);
                                [requestUrl, result] = await this.emit.post(requestUrl, result);
                                this.log(`[id:${requestId}] Emitted post`, 0);
                                return result;
                            };
                            const emitData = () => {
                                this.log(`[id:${requestId}] Emitting data`, 0);
                                this.emit.data(retVal);
                                this.log(`[id:${requestId}] Emitted data`, 0);
                            };
                            this.log(`[id:${requestId}] Beginning request`, 1);
                            let [requestUrl, init, result] = await this.emit.pre(this.toRequestUrl(), {}, undefined);
                            this.log(`[id:${requestId}] Url: ${requestUrl}`, 1);
                            if (typeof result !== "undefined") {
                                retVal = result;
                            }
                            // Waiting is false by default, result is undefined by default, unless cached value is returned
                            if (retVal !== undefined) {
                                if (refreshCache) {
                                    // Return value exists -> assume lazy cache update pipeline execution.
                                    setTimeout(async () => {
                                        try {
                                            await emitSend();
                                        }
                                        catch (e) {
                                            emitError(e);
                                        }
                                    }, 0);
                                }
                                this.log(`[id:${requestId}] Returning cached results and updating cache async`, 1);
                                emitData();
                            }
                            else {
                                retVal = await emitSend();
                                this.log(`[id:${requestId}] Returning results`, 1);
                                emitData();
                            }
                        }
                        catch (e) {
                            emitError(e);
                        }
                        finally {
                            this.log(`[id:${requestId}] Finished request`, 1);
                        }
                    }, 0);
                    return new Promise((resolve, reject) => {
                        this.on[this.InternalResolveEvent].replace(resolve);
                        this.on[this.InternalRejectEvent].replace(reject);
                    });
                },
            });
            return newExecute;
        });
        instance.on.pre(async function (url, init, result) {
            // Reset refreshCache
            refreshCache = true;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const key = keyFactory(url.toString());
            const cached = getStorage(key);
            if (cached !== undefined) {
                // Return value
                result = cached.value;
                if (cached.expiration !== undefined) {
                    if (new Date(cached.expiration) > new Date()) {
                        refreshCache = false;
                    }
                }
            }
            // in these instances make sure we update cache after retrieving result
            if (refreshCache) {
                // if we don't have a cached result we need to get it after the request is sent and parsed
                this.on.post(async function (url, result) {
                    putStorage(key, result);
                    return [url, result];
                });
            }
            return [url, init, result];
        });
        return instance;
    };
}
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
//# sourceMappingURL=caching-pessimistic.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/behaviors/inject-headers.js
function InjectHeaders(headers) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            init.headers = { ...init.headers, ...headers };
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=inject-headers.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/behaviors/resolvers.js
function ResolveOnData() {
    return (instance) => {
        instance.on.data(function (data) {
            this.emit[this.InternalResolveEvent](data);
        });
        return instance;
    };
}
function RejectOnError() {
    return (instance) => {
        instance.on.error(function (err) {
            this.emit[this.InternalRejectEvent](err);
        });
        return instance;
    };
}
//# sourceMappingURL=resolvers.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/queryable/index.js






/**
 * Behavior exports
 */








//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/graphqueryable.js


const graphInvokableFactory = (f) => {
    return queryableFactory(f);
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
     * @param base A string or Queryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        super(base, path);
        if (typeof base === "string") {
            this.parentUrl = base;
        }
        else if (isArray(base)) {
            this.parentUrl = base[0].toUrl();
        }
        else {
            this.parentUrl = base.toUrl();
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
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, base = this.parentUrl, path) {
        return new factory(base, path);
    }
    /**
     * Gets the current base url of this object (https://graph.microsoft.com/v1.0 or https://graph.microsoft.com/beta)
     */
    getUrlBase() {
        const url = this.toUrl();
        let index = url.indexOf("v1.0/");
        if (index > -1) {
            return url.substring(0, index + 5);
        }
        index = url.indexOf("beta/");
        if (index > -1) {
            return url.substring(0, index + 5);
        }
        return url;
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
        var _a;
        const o = "$orderby";
        const query = ((_a = this.query.get(o)) === null || _a === void 0 ? void 0 : _a.split(",")) || [];
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
        const q = GraphQueryableSearchableCollection(this).using(InjectHeaders({ "ConsistencyLevel": "eventual" }));
        q.query.set("$count", "true");
        return q;
    }
}
const graphqueryable_GraphQueryableCollection = graphInvokableFactory(_GraphQueryableCollection);
class _GraphQueryableSearchableCollection extends _GraphQueryableCollection {
    /**
     * 	To request second and subsequent pages of Graph data
     */
    search(query) {
        const q = GraphQueryableSearchableCollection(this).using(InjectHeaders({ "ConsistencyLevel": "eventual" }));
        q.query.set("$search", query);
        return q;
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
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/operations.js

const graphGet = (o, init) => {
    return op(o, get, init);
};
const graphPost = (o, init) => {
    return op(o, post, init);
};
const graphDelete = (o, init) => {
    return op(o, del, init);
};
const graphPatch = (o, init) => {
    return op(o, patch, init);
};
const graphPut = (o, init) => {
    return op(o, put, init);
};
//# sourceMappingURL=operations.js.map
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
        return graphPost(Thread(this, "reply"), body(post));
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
        return graphPost(Post(this, "forward"), body(info));
    }
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    reply(post) {
        return graphPost(Post(this, "reply"), body(post));
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
        return graphPost(Senders(this, "$ref"), body({ "@odata.id": id }));
    }
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    remove(id) {
        const remover = Senders(this, "$ref");
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
        return graphPost(DirectoryObject(this, "getMemberObjects"), body({ securityEnabledOnly }));
    }
    /**
   * Returns all the groups that the specified Directory Object is a member of. The check is transitive
   *
   * @param securityEnabledOnly
   */
    getMemberGroups(securityEnabledOnly = false) {
        return graphPost(DirectoryObject(this, "getMemberGroups"), body({ securityEnabledOnly }));
    }
    /**
   * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
   * This function is transitive.
   * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
   */
    checkMemberGroups(groupIds) {
        return graphPost(DirectoryObject(this, "checkMemberGroups"), body({ groupIds }));
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
        return graphPost(DirectoryObjects(this, "getByIds"), body({ ids, type }));
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
        return graphPost(Group(this, "addFavorite"));
    }
    /**
     * Remove the group from the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    removeFavorite() {
        return graphPost(Group(this, "removeFavorite"));
    }
    /**
     * Reset the unseenCount of all the posts that the current user has not seen since their last visit
     */
    resetUnseenCount() {
        return graphPost(Group(this, "resetUnseenCount"));
    }
    /**
     * Calling this method will enable the current user to receive email notifications for this group,
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    subscribeByMail() {
        return graphPost(Group(this, "subscribeByMail"));
    }
    /**
     * Calling this method will prevent the current user from receiving email notifications for this group
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    unsubscribeByMail() {
        return graphPost(Group(this, "unsubscribeByMail"));
    }
    /**
     * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group
     *
     * @param start Start date and time of the time range
     * @param end End date and time of the time range
     */
    getCalendarView(start, end) {
        const view = Group(this, "calendarView");
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
let _Groups = class _Groups extends _GraphQueryableSearchableCollection {
    /**
     * Create a new group as specified in the request body.
     *
     * @param name Name to display in the address book for the group
     * @param mailNickname Mail alias for the group
     * @param groupType Type of group being created
     * @param additionalProperties A plain object collection of additional properties you want to set on the new group
     */
    async add(name, mailNickname, groupType, additionalProperties = {}) {
        let postBody = {
            displayName: name,
            mailEnabled: groupType === GroupType.Office365,
            mailNickname: mailNickname,
            securityEnabled: groupType !== GroupType.Office365,
            ...additionalProperties,
        };
        // include a group type if required
        if (groupType !== GroupType.Security) {
            postBody = {
                ...postBody,
                groupTypes: groupType === GroupType.Office365 ? ["Unified"] : ["DynamicMembership"],
            };
        }
        const data = await graphPost(this, body(postBody));
        return {
            data,
            group: this.getById(data.id),
        };
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
    const query = graphqueryable_GraphQueryableCollection(this, "calendarView");
    query.query.set("startDateTime", start);
    query.query.set("endDateTime", end);
    return query;
}
/**
 * Get the emailAddress objects that represent all the meeting rooms in the user's tenant or in a specific room list.
 *
 * @param this IGraphQueryable instance
 * @param roomList The SMTP address associated with the room list.
 */
function findRooms(roomList) {
    const query = GraphQueryableCollection(this, roomList ? "findRooms(RoomList=@roomList)" : "findRooms");
    query.using(Endpoint("beta"));
    if (roomList) {
        query.query.set("@roomList", `'${encodeURIComponent(roomList)}'`);
    }
    return query;
}
/**
 * Get the instances (occurrences) of an event for a specified time range.
 * If the event is a seriesMaster type, this returns the occurrences and exceptions of the event in the specified time range.
 *
 * @param this IGraphQueryable instance
 * @param start start time
 * @param end end time
 */
function instances(start, end) {
    const query = graphqueryable_GraphQueryableCollection(this, "instances");
    // query.query.set("startDateTime", encodeURIComponent(start));
    // query.query.set("endDateTime", encodeURIComponent(end));
    query.query.set("startDateTime", start);
    query.query.set("endDateTime", end);
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
    constructor() {
        super(...arguments);
        this.instances = instances;
    }
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
    async add(properties) {
        const data = await graphPost(this, body(properties));
        return {
            data,
            event: this.getById(data.id),
        };
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
    /**
    * People that have direct reports to the user
    */
    get directReports() {
        return People(this, "directReports");
    }
    /**
    * The manager associated with this user
    */
    get manager() {
        return User(this, "manager");
    }
};
_User = __decorate([
    updateable(),
    deleteable()
], _User);

const User = graphInvokableFactory(_User);
let _Users = class _Users extends _GraphQueryableSearchableCollection {
};
_Users = __decorate([
    defaultPath("users"),
    getById(User)
], _Users);

const Users = graphInvokableFactory(_Users);
let _People = class _People extends _GraphQueryableSearchableCollection {
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
    async add(givenName, surName, emailAddresses, businessPhones, additionalProperties = {}) {
        const postBody = {
            businessPhones,
            emailAddresses,
            givenName,
            surName,
            ...additionalProperties,
        };
        const data = await graphPost(this, body(postBody));
        return {
            contact: this.getById(data.id),
            data,
        };
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
    async add(displayName, parentFolderId) {
        const postBody = {
            displayName: displayName,
            parentFolderId: parentFolderId,
        };
        const data = await graphPost(this, body(postBody));
        return {
            contactFolder: this.getById(data.id),
            data,
        };
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
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/fi.js

class GraphFI {
    /**
     * Creates a new instance of the GraphFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = GraphQueryable(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function graphfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new GraphFI(root);
}
//# sourceMappingURL=fi.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/directory-objects/index.js



Reflect.defineProperty(GraphFI.prototype, "directoryObjects", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(DirectoryObjects);
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/groups/index.js



Reflect.defineProperty(GraphFI.prototype, "groups", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(Groups);
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
    async create(invitedUserEmailAddress, inviteRedirectUrl, additionalProperties = {}) {
        const postBody = {
            inviteRedirectUrl,
            invitedUserEmailAddress,
            ...additionalProperties,
        };
        const data = await graphPost(this, body(postBody));
        return { data };
    }
};
_Invitations = __decorate([
    defaultPath("invitations")
], _Invitations);

const Invitations = graphInvokableFactory(_Invitations);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/invitations/index.js



Reflect.defineProperty(GraphFI.prototype, "invitations", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(Invitations);
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
        return graphDelete(Member(this, "$ref"));
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
        return graphPost(Members(this, "$ref"), body({ "@odata.id": id }));
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
let _Messages = class _Messages extends _GraphQueryableSearchableCollection {
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
    return graphPost(User(this, "sendMail"), body(message));
};
//# sourceMappingURL=users.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/messages/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/onedrive/types.js
var _DriveItems_1;






/**
 * Describes a Drive instance
 *
 */
let _Drive = class _Drive extends _GraphQueryableInstance {
    get root() {
        return Root(this);
    }
    get list() {
        return GraphQueryableInstance(this, "list");
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
    getById(id) {
        return Drive(this.getUrlBase(), `drives/${id}`);
    }
};
_Drives = __decorate([
    defaultPath("drives")
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
        const searcher = Root(this);
        searcher.query.set("search", `'${query}'`);
        return searcher();
    }
    get thumbnails() {
        return graphqueryable_GraphQueryableCollection(this, "thumbnails");
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
        return graphqueryable_GraphQueryableCollection(this, "thumbnails");
    }
    get versions() {
        return graphqueryable_GraphQueryableCollection(this, "versions");
    }
    move(parentReference, name) {
        return graphPatch(this, body({ name, ...parentReference }));
    }
    async getContent() {
        const info = await this();
        const query = GraphQueryable([this, info["@microsoft.graph.downloadUrl"]], null).using(BlobParse());
        query.on.pre(async (url, init, result) => {
            init.responseType = "arraybuffer";
            return [url, init, result];
        });
        return query();
    }
    setContent(content) {
        return graphPut(DriveItem(this, "content"), {
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
let _DriveItems = _DriveItems_1 = class _DriveItems extends _GraphQueryableCollection {
    async add(filename, content) {
        // because the graph is not consistent in how it addresses
        // resources through the path, we have to do some url manipulation
        const parent = this.getParent(_DriveItems_1);
        parent.concat(`:/${filename}:/content`);
        const data = await graphPut(parent, { body: content });
        return {
            data,
            driveItem: this.getById(data.id),
        };
    }
    /**
     * Adds a folder to this collection of drive items
     * @param name Name of the new folder
     * @returns result with folder data and chainable drive item object
     */
    async addFolder(name) {
        const postBody = {
            name,
            folder: {},
            "@microsoft.graph.conflictBehavior": "rename",
        };
        const data = await graphPost(this, body(postBody));
        return {
            data,
            driveItem: this.getById(data.id),
        };
    }
};
_DriveItems = _DriveItems_1 = __decorate([
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
        return graphqueryable_GraphQueryableCollection(this, "pages");
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
    async add(displayName) {
        const data = await graphPost(this, body({ displayName }));
        return {
            data,
            notebook: this.getById(data.id),
        };
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
    async add(displayName) {
        const data = await graphPost(this, body({ displayName }));
        return {
            data,
            section: this.getById(data.id),
        };
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
        return Photo(this, "$value").using(BlobParse())();
    }
    /**
     * Gets the image file bytes as a Buffer (node.js)
     */
    getBuffer() {
        return Photo(this, "$value").using(BufferParse())();
    }
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    setContent(content) {
        return graphPatch(Photo(this, "$value"), { body: content });
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
    async add(owner, title) {
        const data = await graphPost(this, body({ owner, title }));
        return {
            data,
            plan: this.getById(data.id),
        };
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
    async add(planId, title, assignments, bucketId) {
        let postBody = {
            planId,
            title,
            ...assignments,
        };
        if (bucketId) {
            postBody = {
                ...postBody,
                bucketId,
            };
        }
        const data = await graphPost(this, body(postBody));
        return {
            data,
            task: this.getById(data.id),
        };
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
    async add(name, planId, orderHint) {
        const postBody = {
            name: name,
            orderHint: orderHint ? orderHint : "",
            planId: planId,
        };
        const data = await graphPost(this, body(postBody));
        return {
            bucket: this.getById(data.id),
            data,
        };
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





Reflect.defineProperty(GraphFI.prototype, "planner", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(Planner);
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



GraphFI.prototype.query = async function (...requests) {
    return this.create(Search).executeQuery({ requests });
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
    async add(changeType, notificationUrl, resource, expirationDateTime, props = {}) {
        const postBody = {
            changeType,
            expirationDateTime,
            notificationUrl,
            resource,
            ...props,
        };
        const data = await graphPost(this, body(postBody));
        return {
            data,
            subscription: this.getById(data.id),
        };
    }
};
_Subscriptions = __decorate([
    defaultPath("subscriptions"),
    getById(Subscription)
], _Subscriptions);

const Subscriptions = graphInvokableFactory(_Subscriptions);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/subscriptions/index.js



Reflect.defineProperty(GraphFI.prototype, "subscriptions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(Subscriptions);
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/teams/types.js






/**
 * Represents a Microsoft Team
 */
let _Team = class _Team extends _GraphQueryableInstance {
    get primaryChannel() {
        return Channel(this, "primaryChannel");
    }
    get channels() {
        return Channels(this);
    }
    /**
     * Archives this Team
     *
     * @param shouldSetSpoSiteReadOnlyForMembers Should members have Read-only in associated Team Site
     */
    archive(shouldSetSpoSiteReadOnlyForMembers = false) {
        return graphPost(Team(this, "archive"), body({ shouldSetSpoSiteReadOnlyForMembers }));
    }
    /**
    * Unarchives this Team
    */
    unarchive() {
        return graphPost(Team(this, "unarchive"));
    }
    /**
     * Clones this Team
     * @param name The name of the new Group
     * @param description Optional description of the group
     * @param partsToClone Parts to clone ex: apps,tabs,settings,channels,members
     * @param visibility Set visibility to public or private
     */
    async cloneTeam(name, description = "", partsToClone = "apps,tabs,settings,channels,members", visibility = "private") {
        const postBody = {
            description: description ? description : "",
            displayName: name,
            mailNickname: name,
            partsToClone,
            visibility,
        };
        // TODO:: make sure this works
        const creator = Teams(this, "clone").using((instance) => {
            instance.on.parse(async (url, response, result) => {
                result = response.headers.has("location") ? response.headers : response;
                return [url, response, result];
            });
            return instance;
        });
        const data = await graphPost(creator, body(postBody));
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
    async create(team) {
        const creator = Teams(this, null).using(HeaderParse());
        const data = await graphPost(creator, body(team));
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
    async add(displayName, description = "") {
        const postBody = {
            description,
            displayName,
        };
        const data = await graphPost(this, body(postBody));
        return {
            channel: this.getById(data.id),
            data,
        };
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
    async add(name, appUrl, properties) {
        const postBody = {
            displayName: name,
            "teamsApp@odata.bind": appUrl,
            ...properties,
        };
        const data = await graphPost(this, body(postBody));
        return {
            data,
            tab: this.getById(data.id),
        };
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
_Group.prototype.createTeam = async function (props) {
    const data = await graphPut(Group(this, "team"), body(props));
    return {
        data,
        team: this.team,
    };
};
Reflect.defineProperty(GraphFI.prototype, "teams", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(Teams);
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/users/index.js



Reflect.defineProperty(GraphFI.prototype, "me", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(User, "me");
    },
});
Reflect.defineProperty(GraphFI.prototype, "users", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(Users);
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/behaviors/telemetry.js
function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            init.headers = { ...init.headers, SdkVersion: "PnPCoreJS/3.0.3" };
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/dot-notation
            this.log(`Request Tag: ${init.headers["SdkVersion"]}`, 0);
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=telemetry.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/behaviors/defaults.js



function DefaultInit(graphUrl = "https://graph.microsoft.com/v1.0") {
    return (instance) => {
        instance.using(Telemetry(), RejectOnError(), ResolveOnData());
        instance.on.pre(async (url, init, result) => {
            init.cache = "default";
            init.credentials = "same-origin";
            if (!isUrlAbsolute(url)) {
                url = combine(graphUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using(InjectHeaders({
            "Content-Type": "application/json",
        }));
        return instance;
    };
}
//# sourceMappingURL=defaults.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/behaviors/endpoint.js
function endpoint_Endpoint(endpoint) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            const all = ["beta", "v1.0"];
            let regex = new RegExp(endpoint, "i");
            const replaces = all.filter(s => !regex.test(s)).map(s => s.replace(".", "\\."));
            regex = new RegExp(`/?(${replaces.join("|")})/?`, "ig");
            url = url.replace(regex, `/${endpoint}/`);
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=endpoint.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/behaviors/graphbrowser.js



function GraphBrowser(props) {
    if ((props === null || props === void 0 ? void 0 : props.baseUrl) && !isUrlAbsolute(props.baseUrl)) {
        throw Error("GraphBrowser props.baseUrl must be absolute when supplied.");
    }
    return (instance) => {
        instance.using(DefaultHeaders(), DefaultInit(), BrowserFetchWithRetry(), DefaultParse());
        if (props === null || props === void 0 ? void 0 : props.baseUrl) {
            // we want to fix up the url first
            instance.on.pre.prepend(async (url, init, result) => {
                if (!isUrlAbsolute(url)) {
                    url = combine(props.baseUrl, url);
                }
                return [url, init, result];
            });
        }
        return instance;
    };
}
//# sourceMappingURL=graphbrowser.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/behaviors/spfx.js


function SPFx(context) {
    return (instance) => {
        instance.using(DefaultHeaders(), DefaultInit(), BrowserFetchWithRetry(), DefaultParse());
        instance.on.auth.replace(async function (url, init) {
            const provider = await context.aadTokenProviderFactory.getTokenProvider();
            const token = await provider.getToken(`${url.protocol}//${url.hostname}`);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            init.headers["Authorization"] = `Bearer ${token}`;
            return [url, init];
        });
        return instance;
    };
}
//# sourceMappingURL=spfx.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/index.js








//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/graph/presets/all.js





































//# sourceMappingURL=all.js.map
;// CONCATENATED MODULE: ./pnpjs-sources/index-graph.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});