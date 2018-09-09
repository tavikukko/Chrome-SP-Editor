import { BearerTokenFetchClient, FetchOptions } from "./netutil";
import { ISPFXContext } from "./spfxContextInterface";
/**
 * Azure AD Client for use in the browser
 */
export declare class AdalClient extends BearerTokenFetchClient {
    clientId: string;
    tenant: string;
    redirectUri: string;
    /**
     * Our auth context
     */
    private static _authContext;
    /**
     * Callback used by the adal auth system
     */
    private _displayCallback;
    /**
     * Promise used to ensure the user is logged in
     */
    private _loginPromise;
    /**
     * Creates a new instance of AdalClient
     * @param clientId Azure App Id
     * @param tenant Office 365 tenant (Ex: {tenant}.onmicrosoft.com)
     * @param redirectUri The redirect url used to authenticate the
     */
    constructor(clientId: string, tenant: string, redirectUri: string);
    /**
     * Creates a new AdalClient using the values of the supplied SPFx context
     *
     * @param spfxContext Current SPFx context
     * @param clientId Optional client id to use instead of the built-in SPFx id
     * @description Using this method and the default clientId requires that the features described in
     * this article https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient are activated in the tenant. If not you can
     * creat your own app, grant permissions and use that clientId here along with the SPFx context
     */
    static fromSPFxContext(spfxContext: ISPFXContext | any, cliendId?: string): AdalClient;
    /**
     * Conducts the fetch opertation against the AAD secured resource
     *
     * @param url Absolute URL for the request
     * @param options Any fetch options passed to the underlying fetch implementation
     */
    fetch(url: string, options: FetchOptions): Promise<Response>;
    /**
     * Gets a token based on the current user
     *
     * @param resource The resource for which we are requesting a token
     */
    getToken(resource: string): Promise<string>;
    /**
     * Ensures we have created and setup the adal AuthenticationContext instance
     */
    private ensureAuthContext;
    /**
     * Ensures the current user is logged in
     */
    private login;
    /**
     * Parses out the root of the request url to use as the resource when getting the token
     *
     * After: https://gist.github.com/jlong/2428561
     * @param url The url to parse
     */
    private getResource;
}
