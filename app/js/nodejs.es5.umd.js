/**
 * @license
 * v1.2.6
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https://github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */
(function (global, factory) {
            typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@pnp/common'), require('@pnp/logging'), require('adal-node')) :
            typeof define === 'function' && define.amd ? define(['exports', '@pnp/common', '@pnp/logging', 'adal-node'], factory) :
            (factory((global.pnp = global.pnp || {}, global.pnp.nodejs = {}),global.pnp.common,global.pnp.logging,global.adalNode));
}(this, (function (exports,common,logging,adalNode) { 'use strict';

            var global$1 = (typeof global !== "undefined" ? global :
                        typeof self !== "undefined" ? self :
                        typeof window !== "undefined" ? window : {});

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

            /**
             * Base SharePoint fetch client for use within nodejs, requires a site url and
             * the fetch client implementation to use for making requests.
             */
            var BaseSPFetchClient = /** @class */ (function () {
                /**
                 *
                 * @param siteUrl: string - Root site url to make requests against
                 * @param _fetchClient: HttpClientImpl - Overrides the default fetch client
                 */
                function BaseSPFetchClient(siteUrl, _fetchClient) {
                    this.siteUrl = siteUrl;
                    this._fetchClient = _fetchClient;
                    // Here we set the globals for page context info to help when building absolute urls
                    global$1._spPageContextInfo = {
                        webAbsoluteUrl: siteUrl,
                    };
                }
                BaseSPFetchClient.prototype.fetch = function (url, options) {
                    return __awaiter(this, void 0, void 0, function () {
                        var uri;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    uri = !common.isUrlAbsolute(url) ? common.combine(this.siteUrl, url) : url;
                                    return [4 /*yield*/, this._fetchClient.fetch(uri, options || {})];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                return BaseSPFetchClient;
            }());

            var nodeFetch = require("node-fetch").default;
            /**
             * Fetch client that encapsulates the node-fetch library and also adds retry logic
             * when encountering transient errors.
             */
            var NodeFetchClient = /** @class */ (function () {
                /**
                 *
                 * @param retryCount: number - Maximum number of transient failure retries before throwing the error
                 * @param retryInterval: number - Starting interval to delay the first retry attempt
                 * @param minRetryInterval: number - Minimum retry delay boundary as retry intervals are randomly recalculated
                 * @param maxRetryInterval: number - Maximum retry delay boundary as retry intervals are radnomaly recalculated
                 */
                function NodeFetchClient(retryCount, retryInterval, minRetryInterval, maxRetryInterval) {
                    if (retryCount === void 0) { retryCount = 3; }
                    if (retryInterval === void 0) { retryInterval = 3000; }
                    if (minRetryInterval === void 0) { minRetryInterval = 3000; }
                    if (maxRetryInterval === void 0) { maxRetryInterval = 90000; }
                    this.retryCount = retryCount;
                    this.retryInterval = retryInterval;
                    this.minRetryInterval = minRetryInterval;
                    this.maxRetryInterval = maxRetryInterval;
                }
                NodeFetchClient.prototype.fetch = function (url, options) {
                    return __awaiter(this, void 0, void 0, function () {
                        var wrapper;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    wrapper = function (retryData) { return __awaiter(_this, void 0, void 0, function () {
                                        var err_1, retry;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 7]);
                                                    return [4 /*yield*/, nodeFetch(url, options || {})];
                                                case 1: 
                                                // Try to make the request...
                                                return [2 /*return*/, _a.sent()];
                                                case 2:
                                                    err_1 = _a.sent();
                                                    retry = this.updateRetryData(retryData, err_1);
                                                    // If there is no error code, this wasn't a transient error
                                                    // so we throw immediately.
                                                    if (!err_1.code) {
                                                        throw err_1;
                                                    }
                                                    if (!(["ETIMEDOUT", "ESOCKETTIMEDOUT", "ECONNREFUSED", "ECONNRESET"].indexOf(err_1.code.toUpperCase()) > -1)) return [3 /*break*/, 6];
                                                    logging.Logger.write("Attempt #" + retry.retryCount + " - Retrying error code: " + err_1.code + "...", 0 /* Verbose */);
                                                    if (!this.shouldRetry(retry)) return [3 /*break*/, 5];
                                                    return [4 /*yield*/, this.delay(retry.retryInterval)];
                                                case 3:
                                                    _a.sent();
                                                    return [4 /*yield*/, wrapper(retry)];
                                                case 4: return [2 /*return*/, _a.sent()];
                                                case 5: // max amount of retries reached, so throw the error
                                                throw err_1;
                                                case 6: return [3 /*break*/, 7];
                                                case 7: return [2 /*return*/];
                                            }
                                        });
                                    }); };
                                    return [4 /*yield*/, wrapper(null)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                NodeFetchClient.prototype.delay = function (ms) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    setTimeout(function () {
                                        resolve();
                                    }, ms);
                                })];
                        });
                    });
                };
                NodeFetchClient.prototype.updateRetryData = function (retryData, err) {
                    var data = retryData || {
                        error: null,
                        retryCount: 0,
                        retryInterval: 0,
                    };
                    var newError = err || null;
                    // Keep track of errors from previous retries
                    // if they exist
                    if (newError) {
                        if (data.error) {
                            newError.innerError = data.error;
                        }
                        data.error = newError;
                    }
                    // Adjust retry interval and cap based on the min and max intervals specified
                    var incrementDelta = Math.pow(2, data.retryCount) - 1;
                    var boundedRandDelta = this.retryInterval * 0.8 +
                        Math.floor(Math.random() * (this.retryInterval * 1.2 - this.retryInterval * 0.8));
                    incrementDelta *= boundedRandDelta;
                    // Adjust retry count
                    data.retryCount++;
                    data.retryInterval = Math.min(this.minRetryInterval + incrementDelta, this.maxRetryInterval);
                    return data;
                };
                NodeFetchClient.prototype.shouldRetry = function (retryData) {
                    if (!retryData) {
                        throw new Error("ERROR: retryData cannot be null.");
                    }
                    var currentCount = (retryData && retryData.retryCount);
                    return (currentCount < this.retryCount);
                };
                return NodeFetchClient;
            }());

            var u = require("url");
            (function (SPOAuthEnv) {
                SPOAuthEnv[SPOAuthEnv["SPO"] = 0] = "SPO";
                SPOAuthEnv[SPOAuthEnv["China"] = 1] = "China";
                SPOAuthEnv[SPOAuthEnv["Germany"] = 2] = "Germany";
                SPOAuthEnv[SPOAuthEnv["USDef"] = 3] = "USDef";
                SPOAuthEnv[SPOAuthEnv["USGov"] = 4] = "USGov";
            })(exports.SPOAuthEnv || (exports.SPOAuthEnv = {}));
            /**
             * Fetch client for use within nodejs, requires you register a client id and secret with app only permissions
             */
            var SPFetchClient = /** @class */ (function (_super) {
                __extends(SPFetchClient, _super);
                function SPFetchClient(siteUrl, _clientId, _clientSecret, authEnv, _realm, _fetchClient) {
                    if (authEnv === void 0) { authEnv = exports.SPOAuthEnv.SPO; }
                    if (_realm === void 0) { _realm = ""; }
                    if (_fetchClient === void 0) { _fetchClient = new NodeFetchClient(); }
                    var _this = _super.call(this, siteUrl, _fetchClient) || this;
                    _this._clientId = _clientId;
                    _this._clientSecret = _clientSecret;
                    _this.authEnv = authEnv;
                    _this._realm = _realm;
                    _this.token = null;
                    return _this;
                }
                SPFetchClient.prototype.fetch = function (url, options) {
                    return __awaiter(this, void 0, void 0, function () {
                        var token;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getAddInOnlyAccessToken()];
                                case 1:
                                    token = _a.sent();
                                    options.headers.set("Authorization", "Bearer " + token.access_token);
                                    return [2 /*return*/, _super.prototype.fetch.call(this, url, options)];
                            }
                        });
                    });
                };
                /**
                 * Gets an add-in only authentication token based on the supplied site url, client id and secret
                 */
                SPFetchClient.prototype.getAddInOnlyAccessToken = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var realm, resource, formattedClientId, authUrl, body, r, tok;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.token !== null && new Date() < this.toDate(this.token.expires_on)) {
                                        return [2 /*return*/, Promise.resolve(this.token)];
                                    }
                                    return [4 /*yield*/, this.getRealm()];
                                case 1:
                                    realm = _a.sent();
                                    resource = this.getFormattedPrincipal(SPFetchClient.SharePointServicePrincipal, u.parse(this.siteUrl).hostname, realm);
                                    formattedClientId = this.getFormattedPrincipal(this._clientId, "", realm);
                                    return [4 /*yield*/, this.getAuthUrl(realm)];
                                case 2:
                                    authUrl = _a.sent();
                                    body = [];
                                    body.push("grant_type=client_credentials");
                                    body.push("client_id=" + formattedClientId);
                                    body.push("client_secret=" + encodeURIComponent(this._clientSecret));
                                    body.push("resource=" + resource);
                                    return [4 /*yield*/, _super.prototype.fetch.call(this, authUrl, {
                                            body: body.join("&"),
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded",
                                            },
                                            method: "POST",
                                        })];
                                case 3:
                                    r = _a.sent();
                                    return [4 /*yield*/, r.json()];
                                case 4:
                                    tok = _a.sent();
                                    this.token = tok;
                                    return [2 /*return*/, this.token];
                            }
                        });
                    });
                };
                SPFetchClient.prototype.getAuthHostUrl = function (env) {
                    switch (env) {
                        case exports.SPOAuthEnv.China:
                            return "accounts.accesscontrol.chinacloudapi.cn";
                        case exports.SPOAuthEnv.Germany:
                            return "login.microsoftonline.de";
                        default:
                            return "accounts.accesscontrol.windows.net";
                    }
                };
                SPFetchClient.prototype.getRealm = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var url, r, data, index;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this._realm.length > 0) {
                                        return [2 /*return*/, Promise.resolve(this._realm)];
                                    }
                                    url = common.combine(this.siteUrl, "_vti_bin/client.svc");
                                    return [4 /*yield*/, _super.prototype.fetch.call(this, url, {
                                            "headers": {
                                                "Authorization": "Bearer ",
                                            },
                                            "method": "POST",
                                        })];
                                case 1:
                                    r = _a.sent();
                                    data = r.headers.get("www-authenticate") || "";
                                    index = data.indexOf("Bearer realm=\"");
                                    this._realm = data.substring(index + 14, index + 50);
                                    return [2 /*return*/, this._realm];
                            }
                        });
                    });
                };
                SPFetchClient.prototype.getAuthUrl = function (realm) {
                    return __awaiter(this, void 0, void 0, function () {
                        var url, r, json, eps;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    url = "https://" + this.getAuthHostUrl(this.authEnv) + "/metadata/json/1?realm=" + realm;
                                    return [4 /*yield*/, _super.prototype.fetch.call(this, url)];
                                case 1:
                                    r = _a.sent();
                                    return [4 /*yield*/, r.json()];
                                case 2:
                                    json = _a.sent();
                                    eps = json.endpoints.filter(function (ep) { return ep.protocol === "OAuth2"; });
                                    if (eps.length > 0) {
                                        return [2 /*return*/, eps[0].location];
                                    }
                                    throw Error("Auth URL Endpoint could not be determined from data.");
                            }
                        });
                    });
                };
                SPFetchClient.prototype.getFormattedPrincipal = function (principalName, hostName, realm) {
                    var resource = principalName;
                    if (hostName !== null && hostName !== "") {
                        resource += "/" + hostName;
                    }
                    resource += "@" + realm;
                    return resource;
                };
                SPFetchClient.prototype.toDate = function (epoch) {
                    var tmp = parseInt(epoch, 10);
                    if (tmp < 10000000000) {
                        tmp *= 1000;
                    }
                    var d = new Date();
                    d.setTime(tmp);
                    return d;
                };
                SPFetchClient.SharePointServicePrincipal = "00000003-0000-0ff1-ce00-000000000000";
                return SPFetchClient;
            }(BaseSPFetchClient));

            var nodeFetch$1 = require("node-fetch").default;
            var AdalFetchClient = /** @class */ (function () {
                function AdalFetchClient(_tenant, _clientId, _secret, _resource, _authority) {
                    if (_resource === void 0) { _resource = "https://graph.microsoft.com"; }
                    if (_authority === void 0) { _authority = "https://login.windows.net"; }
                    this._tenant = _tenant;
                    this._clientId = _clientId;
                    this._secret = _secret;
                    this._resource = _resource;
                    this._authority = _authority;
                    this.authContext = new adalNode.AuthenticationContext(common.combine(this._authority, this._tenant));
                }
                AdalFetchClient.prototype.fetch = function (url, options) {
                    if (!common.objectDefinedNotNull(options)) {
                        options = {
                            headers: new Headers(),
                        };
                    }
                    else if (!common.objectDefinedNotNull(options.headers)) {
                        options = common.extend(options, {
                            headers: new Headers(),
                        });
                    }
                    if (!common.isUrlAbsolute(url)) {
                        url = common.combine(this._resource, url);
                    }
                    return this.acquireToken().then(function (token) {
                        options.headers.set("Authorization", token.tokenType + " " + token.accessToken);
                        return nodeFetch$1(url, options);
                    });
                };
                AdalFetchClient.prototype.acquireToken = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.authContext.acquireTokenWithClientCredentials(_this._resource, _this._clientId, _this._secret, function (err, token) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve(token);
                            }
                        });
                    });
                };
                return AdalFetchClient;
            }());

            var nodeFetch$2 = require("node-fetch").default;
            /**
             * Makes requests using the fetch API adding the supplied token to the Authorization header
             */
            var BearerTokenFetchClient = /** @class */ (function () {
                function BearerTokenFetchClient(_token) {
                    this._token = _token;
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
                    common.mergeHeaders(headers, options.headers);
                    headers.set("Authorization", "Bearer " + this._token);
                    options.headers = headers;
                    return nodeFetch$2(url, options);
                };
                return BearerTokenFetchClient;
            }());

            var NodeFetch = require("node-fetch");
            (function (g) {
                // patch these globally for nodejs
                if (!g.Headers) {
                    g.Headers = NodeFetch.Headers;
                }
                if (!g.Request) {
                    g.Request = NodeFetch.Request;
                }
                if (!g.Response) {
                    g.Response = NodeFetch.Response;
                }
            })(global$1);

            exports.AdalFetchClient = AdalFetchClient;
            exports.NodeFetchClient = NodeFetchClient;
            exports.BearerTokenFetchClient = BearerTokenFetchClient;
            exports.BaseSPFetchClient = BaseSPFetchClient;
            exports.SPFetchClient = SPFetchClient;

            Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nodejs.es5.umd.js.map
