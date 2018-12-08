import { HttpClientImpl } from "@pnp/common";
/**
 * Base SharePoint fetch client for use within nodejs, requires a site url and
 * the fetch client implementation to use for making requests.
 */
export declare class BaseSPFetchClient implements HttpClientImpl {
    siteUrl: string;
    protected _fetchClient: HttpClientImpl;
    /**
     *
     * @param siteUrl: string - Root site url to make requests against
     * @param _fetchClient: HttpClientImpl - Overrides the default fetch client
     */
    constructor(siteUrl: string, _fetchClient: HttpClientImpl);
    fetch(url: string, options?: any): Promise<Response>;
}
//# sourceMappingURL=basespfetchclient.d.ts.map