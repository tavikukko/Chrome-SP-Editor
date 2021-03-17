import { IRequestClient, IFetchOptions, IHttpClientImpl, Runtime } from "@pnp/common";
export declare class GraphHttpClient implements IRequestClient {
    protected _runtime: Runtime;
    private _impl;
    constructor(runtime?: Runtime);
    constructor(runtime?: Runtime, impl?: IHttpClientImpl);
    fetch(url: string, options?: IFetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: IFetchOptions): Promise<Response>;
    get(url: string, options?: IFetchOptions): Promise<Response>;
    post(url: string, options?: IFetchOptions): Promise<Response>;
    patch(url: string, options?: IFetchOptions): Promise<Response>;
    delete(url: string, options?: IFetchOptions): Promise<Response>;
}
//# sourceMappingURL=graphhttpclient.d.ts.map