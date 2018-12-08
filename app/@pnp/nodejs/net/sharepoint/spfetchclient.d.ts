import { BaseSPFetchClient } from "./basespfetchclient";
import { HttpClientImpl } from "@pnp/common";
export interface AuthToken {
    token_type: string;
    expires_in: string;
    not_before: string;
    expires_on: string;
    resource: string;
    access_token: string;
}
export declare enum SPOAuthEnv {
    SPO = 0,
    China = 1,
    Germany = 2,
    USDef = 3,
    USGov = 4
}
/**
 * Fetch client for use within nodejs, requires you register a client id and secret with app only permissions
 */
export declare class SPFetchClient extends BaseSPFetchClient {
    protected _clientId: string;
    protected _clientSecret: string;
    authEnv: SPOAuthEnv;
    protected _realm: string;
    protected static SharePointServicePrincipal: string;
    protected token: AuthToken | null;
    constructor(siteUrl: string, _clientId: string, _clientSecret: string, authEnv?: SPOAuthEnv, _realm?: string, _fetchClient?: HttpClientImpl);
    fetch(url: string, options: any): Promise<Response>;
    /**
     * Gets an add-in only authentication token based on the supplied site url, client id and secret
     */
    getAddInOnlyAccessToken(): Promise<AuthToken>;
    getAuthHostUrl(env: SPOAuthEnv): string;
    private getRealm;
    private getAuthUrl;
    private getFormattedPrincipal;
    private toDate;
}
//# sourceMappingURL=spfetchclient.d.ts.map