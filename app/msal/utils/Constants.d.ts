/**
 * @hidden
 * Constants
 */
export declare class Constants {
    static get libraryName(): string;
    static get claims(): string;
    static get clientId(): string;
    static get adalIdToken(): string;
    static get cachePrefix(): string;
    static get scopes(): string;
    static get no_account(): string;
    static get upn(): string;
    static get domain_hint(): string;
    static get prompt_select_account(): string;
    static get prompt_none(): string;
    static get prompt(): string;
    static get response_mode_fragment(): string;
    static get resourceDelimiter(): string;
    static get cacheDelimiter(): string;
    private static _popUpWidth;
    static get popUpWidth(): number;
    static set popUpWidth(width: number);
    private static _popUpHeight;
    static get popUpHeight(): number;
    static set popUpHeight(height: number);
    static get login(): string;
    static get renewToken(): string;
    static get unknown(): string;
    static get ADFS(): string;
    static get homeAccountIdentifier(): string;
    static get common(): string;
    static get openidScope(): string;
    static get profileScope(): string;
    static get oidcScopes(): Array<string>;
    static get interactionTypeRedirect(): InteractionType;
    static get interactionTypePopup(): InteractionType;
    static get interactionTypeSilent(): InteractionType;
    static get inProgress(): string;
}
export declare const SESSION_STORAGE = "sessionStorage";
/**
 * Keys in the hashParams
 */
export declare enum ServerHashParamKeys {
    SCOPE = "scope",
    STATE = "state",
    ERROR = "error",
    ERROR_DESCRIPTION = "error_description",
    ACCESS_TOKEN = "access_token",
    ID_TOKEN = "id_token",
    EXPIRES_IN = "expires_in",
    SESSION_STATE = "session_state",
    CLIENT_INFO = "client_info"
}
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 *
 */
export declare const ResponseTypes: {
    id_token: string;
    token: string;
    id_token_token: string;
};
/**
 * @hidden
 * CacheKeys for MSAL
 */
export declare enum TemporaryCacheKeys {
    AUTHORITY = "authority",
    ACQUIRE_TOKEN_ACCOUNT = "acquireTokenAccount",
    SESSION_STATE = "session.state",
    STATE_LOGIN = "state.login",
    STATE_ACQ_TOKEN = "state.acquireToken",
    STATE_RENEW = "state.renew",
    NONCE_IDTOKEN = "nonce.idtoken",
    LOGIN_REQUEST = "login.request",
    RENEW_STATUS = "token.renew.status",
    URL_HASH = "urlHash",
    INTERACTION_STATUS = "interaction.status",
    REDIRECT_REQUEST = "redirect_request"
}
export declare enum PersistentCacheKeys {
    IDTOKEN = "idtoken",
    CLIENT_INFO = "client.info"
}
export declare enum ErrorCacheKeys {
    LOGIN_ERROR = "login.error",
    ERROR = "error",
    ERROR_DESC = "error.description"
}
export declare const DEFAULT_AUTHORITY: string;
export declare const AAD_INSTANCE_DISCOVERY_ENDPOINT: string;
export declare const WELL_KNOWN_SUFFIX: string;
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
export declare enum SSOTypes {
    ACCOUNT = "account",
    SID = "sid",
    LOGIN_HINT = "login_hint",
    ORGANIZATIONS = "organizations",
    CONSUMERS = "consumers",
    ID_TOKEN = "id_token",
    ACCOUNT_ID = "accountIdentifier",
    HOMEACCOUNT_ID = "homeAccountIdentifier"
}
/**
 * @hidden
 */
export declare const BlacklistedEQParams: SSOTypes[];
export declare type InteractionType = "redirectInteraction" | "popupInteraction" | "silentInteraction";
export declare const NetworkRequestType: {
    GET: string;
    POST: string;
};
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
export declare const PromptState: {
    LOGIN: string;
    SELECT_ACCOUNT: string;
    CONSENT: string;
    NONE: string;
};
/**
 * Frame name prefixes for the hidden iframe created in silent frames
 */
export declare const FramePrefix: {
    ID_TOKEN_FRAME: string;
    TOKEN_FRAME: string;
};
