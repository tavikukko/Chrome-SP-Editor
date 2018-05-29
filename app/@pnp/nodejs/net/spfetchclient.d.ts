import { HttpClientImpl } from "@pnp/common";
export interface AuthToken {
    token_type: string;
    expires_in: string;
    not_before: string;
    expires_on: string;
    resource: string;
    access_token: string;
}
/**
 * Fetch client for use within nodejs, requires you register a client id and secret with app only permissions
 */
export declare class SPFetchClient implements HttpClientImpl {
    siteUrl: string;
    private _clientId;
    private _clientSecret;
    private _realm;
    private static SharePointServicePrincipal;
    private token;
    constructor(siteUrl: string, _clientId: string, _clientSecret: string, _realm?: string);
    fetch(url: string, options: any): Promise<Response>;
    /**
     * Gets an add-in only authentication token based on the supplied site url, client id and secret
     */
    getAddInOnlyAccessToken(): Promise<AuthToken>;
    private getRealm();
    private getAuthUrl(realm);
    private getFormattedPrincipal(principalName, hostName, realm);
    private toDate(epoch);
}
