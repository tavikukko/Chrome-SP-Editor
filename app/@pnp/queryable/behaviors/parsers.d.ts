import { Queryable } from "../queryable";
import { TimelinePipe } from "@pnp/core";
export declare function DefaultParse(): TimelinePipe;
export declare function TextParse(): TimelinePipe;
export declare function BlobParse(): TimelinePipe;
export declare function JSONParse(): TimelinePipe;
export declare function BufferParse(): TimelinePipe;
export declare function HeaderParse(): TimelinePipe;
export declare function errorCheck(url: URL, response: Response, result: any): Promise<[URL, Response, any]>;
export declare function parseODataJSON(json: any): any;
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
export declare function parseBinderWithErrorCheck(impl: (r: Response) => Promise<any>): TimelinePipe<Queryable>;
export declare class HttpRequestError extends Error {
    response: Response;
    status: number;
    statusText: string;
    isHttpRequestError: boolean;
    constructor(message: string, response: Response, status?: number, statusText?: string);
    static init(r: Response): Promise<HttpRequestError>;
}
//# sourceMappingURL=parsers.d.ts.map