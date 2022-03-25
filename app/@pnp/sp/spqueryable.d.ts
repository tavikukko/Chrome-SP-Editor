import { IInvokable, Queryable } from "@pnp/queryable";
export declare type SPInit = string | ISPQueryable | [ISPQueryable, string];
export interface ISPConstructor<T extends ISPQueryable = ISPQueryable> {
    new (base: SPInit, path?: string): T;
}
export declare type ISPInvokableFactory<R extends ISPQueryable> = (base: SPInit, path?: string) => R & IInvokable;
export declare const spInvokableFactory: <R extends ISPQueryable<any>>(f: any) => ISPInvokableFactory<R>;
/**
 * SharePointQueryable Base Class
 *
 */
export declare class _SPQueryable<GetType = any> extends Queryable<GetType> {
    protected parentUrl: string;
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param base A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(base: SPInit, path?: string);
    /**
     * Gets the full url with query information
     */
    toRequestUrl(): string;
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects: string[]): this;
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands: string[]): this;
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    protected getParent<T extends ISPQueryable>(factory: ISPInvokableFactory<any>, path?: string, base?: string): T;
}
export interface ISPQueryable<GetType = any> extends _SPQueryable<GetType> {
}
export declare const SPQueryable: ISPInvokableFactory<ISPQueryable<any>>;
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
export declare class _SPCollection<GetType = any[]> extends _SPQueryable<GetType> {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter: string): this;
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy: string, ascending?: boolean): this;
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip: number): this;
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top: number): this;
}
export interface ISPCollection<GetType = any[]> extends _SPCollection<GetType> {
}
export declare const SPCollection: ISPInvokableFactory<ISPCollection<any[]>>;
/**
 * Represents an instance that can be selected
 *
 */
export declare class _SPInstance<GetType = any> extends _SPQueryable<GetType> {
}
export interface ISPInstance<GetType = any> extends _SPInstance<GetType> {
}
export declare const SPInstance: ISPInvokableFactory<ISPInstance<any>>;
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
export declare function deleteable(): (this: ISPQueryable) => Promise<void>;
export interface IDeleteable {
    /**
     * Delete this instance
     */
    delete(): Promise<void>;
}
export declare function deleteableWithETag(): (this: ISPQueryable, eTag?: string) => Promise<void>;
export interface IDeleteableWithETag {
    /**
     * Delete this instance
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    delete(eTag?: string): Promise<void>;
}
//# sourceMappingURL=spqueryable.d.ts.map