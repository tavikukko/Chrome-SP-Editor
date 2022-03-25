import { Timeline, TimelinePipe } from "@pnp/core";
import { IInvokable } from "./invokable.js";
export declare type QueryablePreObserver = (this: IQueryableInternal, url: string, init: RequestInit, result: any) => Promise<[string, RequestInit, any]>;
export declare type QueryableAuthObserver = (this: IQueryableInternal, url: URL, init: RequestInit) => Promise<[URL, RequestInit]>;
export declare type QueryableSendObserver = (this: IQueryableInternal, url: URL, init: RequestInit) => Promise<Response>;
export declare type QueryableParseObserver = (this: IQueryableInternal, url: URL, response: Response, result: any | undefined) => Promise<[URL, Response, any]>;
export declare type QueryablePostObserver = (this: IQueryableInternal, url: URL, result: any | undefined) => Promise<[URL, any]>;
export declare type QueryableDataObserver<T = any> = (this: IQueryableInternal, result: T) => void;
declare const DefaultMoments: {
    readonly pre: (observers: QueryablePreObserver[], url: string, init: RequestInit, result: any) => Promise<[url: string, init: RequestInit, result: any]>;
    readonly auth: (observers: QueryableAuthObserver[], url: URL, init: RequestInit) => Promise<[url: URL, init: RequestInit]>;
    readonly send: (observers: QueryableSendObserver[], url: URL, init: RequestInit) => Promise<Promise<Response>>;
    readonly parse: (observers: QueryableParseObserver[], url: URL, response: Response, result: any) => Promise<[url: URL, response: Response, result: any]>;
    readonly post: (observers: QueryablePostObserver[], url: URL, result: any) => Promise<[url: URL, result: any]>;
    readonly data: (observers: QueryableDataObserver<any>[], ...args: any[]) => void;
};
export declare type QueryableInit = Queryable<any> | string | [Queryable<any>, string];
export declare class Queryable<R> extends Timeline<typeof DefaultMoments> implements IQueryableInternal<R> {
    private _query;
    protected _url: string;
    protected InternalResolveEvent: symbol;
    protected InternalRejectEvent: symbol;
    constructor(init: QueryableInit, path?: string);
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart: string): this;
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl(): string;
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query(): Map<string, string>;
    /**
     * Gets the current url
     *
     */
    toUrl(): string;
    protected execute(userInit: RequestInit): Promise<void>;
}
/**
 * This interface adds the invokable method to Queryable allowing obj() to be called correctly
 * The code is contained in invokable decorator
 */
export interface Queryable<R = any> extends IInvokable<R> {
}
export interface IQueryableInternal<R = any> extends Timeline<any>, IInvokable {
    readonly query: Map<string, string>;
    <T = R>(this: IQueryableInternal, init?: RequestInit): Promise<T>;
    using(...behaviors: TimelinePipe[]): this;
    toRequestUrl(): string;
    toUrl(): string;
}
export {};
//# sourceMappingURL=queryable.d.ts.map