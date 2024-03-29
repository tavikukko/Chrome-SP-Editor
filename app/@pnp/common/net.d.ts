import { ISPFXContext } from "./spfxcontextinterface.js";
export interface IConfigOptions {
    headers?: string[][] | {
        [key: string]: string;
    } | Headers;
    mode?: "navigate" | "same-origin" | "no-cors" | "cors";
    credentials?: "omit" | "same-origin" | "include";
    cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
}
export interface IFetchOptions extends IConfigOptions {
    method?: string;
    body?: any;
}
export interface IHttpClientImpl {
    fetch(url: string, options: IFetchOptions): Promise<Response>;
}
export interface IRequestClient {
    fetch(url: string, options?: IFetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: IFetchOptions): Promise<Response>;
    get(url: string, options?: IFetchOptions): Promise<Response>;
    post(url: string, options?: IFetchOptions): Promise<Response>;
    patch(url: string, options?: IFetchOptions): Promise<Response>;
    delete(url: string, options?: IFetchOptions): Promise<Response>;
}
export declare function mergeHeaders(target: Headers, source: HeadersInit): void;
export declare function mergeOptions(target: IConfigOptions, source: IConfigOptions): void;
/**
 * Parses out the root of the request url to use as the resource when getting the token
 *
  * @param url The url to parse
 */
export declare function getADALResource(url: string): string;
/**
 * Makes requests using the global/window fetch API
 */
export declare class FetchClient implements IHttpClientImpl {
    fetch(url: string, options: IFetchOptions): Promise<Response>;
}
/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
export declare class BearerTokenFetchClient extends FetchClient {
    token: string | null;
    constructor(token: string | null);
    fetch(url: string, options?: IFetchOptions): Promise<Response>;
}
export interface ILambdaTokenFactoryParams {
    /**
     * Url to which the request for which we are requesting a token will be sent
     */
    url: string;
    /**
     * Any options supplied for the request
     */
    options: IFetchOptions;
}
export declare class LambdaFetchClient extends BearerTokenFetchClient {
    private tokenFactory;
    constructor(tokenFactory: (parms: ILambdaTokenFactoryParams) => Promise<string>);
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    fetch(url: string, options: IFetchOptions): Promise<Response>;
}
/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
export declare class SPFxAdalClient extends LambdaFetchClient {
    private context;
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    constructor(context: ISPFXContext);
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    getToken(resource: string): Promise<string>;
}
//# sourceMappingURL=net.d.ts.map