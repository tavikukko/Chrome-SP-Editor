/**
@license
 * @pnp/nodejs v1.2.3 - pnp - provides functionality enabling the @pnp libraries within nodejs
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https:github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */
(function (global, factory) {
            typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@pnp/common'), require('adal-node')) :
            typeof define === 'function' && define.amd ? define(['exports', '@pnp/common', 'adal-node'], factory) :
            (factory((global.pnp = global.pnp || {}, global.pnp.nodejs = {}),global.pnp.common,global.adalNode));
}(this, (function (exports,common,adalNode) { 'use strict';

            var global$1 = (typeof global !== "undefined" ? global :
                        typeof self !== "undefined" ? self :
                        typeof window !== "undefined" ? window : {});

            var nodeFetch = require("node-fetch").default;
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
            var SPFetchClient = /** @class */ (function () {
                function SPFetchClient(siteUrl, _clientId, _clientSecret, authEnv, _realm) {
                    if (authEnv === void 0) { authEnv = exports.SPOAuthEnv.SPO; }
                    if (_realm === void 0) { _realm = ""; }
                    this.siteUrl = siteUrl;
                    this._clientId = _clientId;
                    this._clientSecret = _clientSecret;
                    this.authEnv = authEnv;
                    this._realm = _realm;
                    this.token = null;
                    // here we set the globals for page context info to help when building absolute urls
                    global$1._spPageContextInfo = {
                        webAbsoluteUrl: siteUrl,
                    };
                }
                SPFetchClient.prototype.fetch = function (url, options) {
                    if (!common.isUrlAbsolute(url)) {
                        url = common.combine(this.siteUrl, url);
                    }
                    return this.getAddInOnlyAccessToken().then(function (token) {
                        options.headers.set("Authorization", "Bearer " + token.access_token);
                        return nodeFetch(url, options);
                    });
                };
                /**
                 * Gets an add-in only authentication token based on the supplied site url, client id and secret
                 */
                SPFetchClient.prototype.getAddInOnlyAccessToken = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        if (_this.token !== null && new Date() < _this.toDate(_this.token.expires_on)) {
                            resolve(_this.token);
                        }
                        else {
                            _this.getRealm().then(function (realm) {
                                var resource = _this.getFormattedPrincipal(SPFetchClient.SharePointServicePrincipal, u.parse(_this.siteUrl).hostname, realm);
                                var formattedClientId = _this.getFormattedPrincipal(_this._clientId, "", realm);
                                _this.getAuthUrl(realm).then(function (authUrl) {
                                    var body = [];
                                    body.push("grant_type=client_credentials");
                                    body.push("client_id=" + formattedClientId);
                                    body.push("client_secret=" + encodeURIComponent(_this._clientSecret));
                                    body.push("resource=" + resource);
                                    nodeFetch(authUrl, {
                                        body: body.join("&"),
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded",
                                        },
                                        method: "POST",
                                    }).then(function (r) { return r.json(); }).then(function (tok) {
                                        _this.token = tok;
                                        resolve(_this.token);
                                    });
                                });
                            }).catch(function (e) { return reject(e); });
                        }
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
                    var _this = this;
                    return new Promise(function (resolve) {
                        if (_this._realm.length > 0) {
                            resolve(_this._realm);
                        }
                        var url = common.combine(_this.siteUrl, "_vti_bin/client.svc");
                        nodeFetch(url, {
                            "headers": {
                                "Authorization": "Bearer ",
                            },
                            "method": "POST",
                        }).then(function (r) {
                            var data = r.headers.get("www-authenticate") || "";
                            var index = data.indexOf("Bearer realm=\"");
                            _this._realm = data.substring(index + 14, index + 50);
                            resolve(_this._realm);
                        });
                    });
                };
                SPFetchClient.prototype.getAuthUrl = function (realm) {
                    var url = "https://" + this.getAuthHostUrl(this.authEnv) + "/metadata/json/1?realm=" + realm;
                    return nodeFetch(url).then(function (r) { return r.json(); }).then(function (json) {
                        var eps = json.endpoints.filter(function (ep) { return ep.protocol === "OAuth2"; });
                        if (eps.length > 0) {
                            return eps[0].location;
                        }
                        throw Error("Auth URL Endpoint could not be determined from data.");
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
            }());

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

            exports.SPFetchClient = SPFetchClient;
            exports.AdalFetchClient = AdalFetchClient;

            Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nodejs.es5.umd.js.map
