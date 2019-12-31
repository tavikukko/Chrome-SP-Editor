import { IFetchOptions, IRequestClient, IHttpClientImpl } from "@pnp/common";
export declare class SPHttpClient implements IRequestClient {
    private _impl;
    private _digestCache;
    constructor(_impl?: IHttpClientImpl);
    fetch(url: string, options?: IFetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: IFetchOptions): Promise<Response>;
    get(url: string, options?: IFetchOptions): Promise<Response>;
    post(url: string, options?: IFetchOptions): Promise<Response>;
    patch(url: string, options?: IFetchOptions): Promise<Response>;
    delete(url: string, options?: IFetchOptions): Promise<Response>;
}
//# sourceMappingURL=sphttpclient.d.ts.map