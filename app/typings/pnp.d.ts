declare module "collections/collections" {
    /**
     * Interface defining an object with a known property type
     */
    export interface TypedHash<T> {
        [key: string]: T;
    }
    /**
     * Generic dictionary
     */
    export class Dictionary<T> {
        private keys;
        private values;
        /**
         * Creates a new instance of the Dictionary<T> class
         *
         * @constructor
         */
        constructor(keys?: string[], values?: T[]);
        /**
         * Gets a value from the collection using the specified key
         *
         * @param key The key whose value we want to return, returns null if the key does not exist
         */
        get(key: string): T;
        /**
         * Adds the supplied key and value to the dictionary
         *
         * @param key The key to add
         * @param o The value to add
         */
        add(key: string, o: T): void;
        /**
         * Merges the supplied typed hash into this dictionary instance. Existing values are updated and new ones are created as appropriate.
         */
        merge(source: TypedHash<T> | Dictionary<T>): void;
        /**
         * Removes a value from the dictionary
         *
         * @param key The key of the key/value pair to remove. Returns null if the key was not found.
         */
        remove(key: string): T;
        /**
         * Returns all the keys currently in the dictionary as an array
         */
        getKeys(): string[];
        /**
         * Returns all the values currently in the dictionary as an array
         */
        getValues(): T[];
        /**
         * Clears the current dictionary
         */
        clear(): void;
        /**
         * Gets a count of the items currently in the dictionary
         */
        count(): number;
    }
}
declare module "utils/logging" {
    /**
     * A set of logging levels
     *
     */
    export enum LogLevel {
        Verbose = 0,
        Info = 1,
        Warning = 2,
        Error = 3,
        Off = 99,
    }
    /**
     * Interface that defines a log entry
     *
     */
    export interface LogEntry {
        /**
         * The main message to be logged
         */
        message: string;
        /**
         * The level of information this message represents
         */
        level: LogLevel;
        /**
         * Any associated data that a given logging listener may choose to log or ignore
         */
        data?: any;
    }
    /**
     * Interface that defines a log listner
     *
     */
    export interface LogListener {
        /**
         * Any associated data that a given logging listener may choose to log or ignore
         *
         * @param entry The information to be logged
         */
        log(entry: LogEntry): void;
    }
    /**
     * Class used to subscribe ILogListener and log messages throughout an application
     *
     */
    export class Logger {
        private static _instance;
        static activeLogLevel: LogLevel;
        private static readonly instance;
        /**
         * Adds ILogListener instances to the set of subscribed listeners
         *
         * @param listeners One or more listeners to subscribe to this log
         */
        static subscribe(...listeners: LogListener[]): void;
        /**
         * Clears the subscribers collection, returning the collection before modifiction
         */
        static clearSubscribers(): LogListener[];
        /**
         * Gets the current subscriber count
         */
        static readonly count: number;
        /**
         * Writes the supplied string to the subscribed listeners
         *
         * @param message The message to write
         * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
         */
        static write(message: string, level?: LogLevel): void;
        /**
         * Writes the supplied string to the subscribed listeners
         *
         * @param json The json object to stringify and write
         * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
         */
        static writeJSON(json: any, level?: LogLevel): void;
        /**
         * Logs the supplied entry to the subscribed listeners
         *
         * @param entry The message to log
         */
        static log(entry: LogEntry): void;
        /**
         * Logs performance tracking data for the the execution duration of the supplied function using console.profile
         *
         * @param name The name of this profile boundary
         * @param f The function to execute and track within this performance boundary
         */
        static measure<T>(name: string, f: () => T): T;
    }
    /**
     * Implementation of ILogListener which logs to the browser console
     *
     */
    export class ConsoleListener implements LogListener {
        /**
         * Any associated data that a given logging listener may choose to log or ignore
         *
         * @param entry The information to be logged
         */
        log(entry: LogEntry): void;
        /**
         * Formats the message
         *
         * @param entry The information to format into a string
         */
        private format(entry);
    }
    /**
     * Implementation of ILogListener which logs to the supplied function
     *
     */
    export class FunctionListener implements LogListener {
        private method;
        /**
         * Creates a new instance of the FunctionListener class
         *
         * @constructor
         * @param  method The method to which any logging data will be passed
         */
        constructor(method: (entry: LogEntry) => void);
        /**
         * Any associated data that a given logging listener may choose to log or ignore
         *
         * @param entry The information to be logged
         */
        log(entry: LogEntry): void;
    }
}
declare module "utils/storage" {
    /**
     * A wrapper class to provide a consistent interface to browser based storage
     *
     */
    export class PnPClientStorageWrapper implements PnPClientStore {
        private store;
        defaultTimeoutMinutes: number;
        /**
         * True if the wrapped storage is available; otherwise, false
         */
        enabled: boolean;
        /**
         * Creates a new instance of the PnPClientStorageWrapper class
         *
         * @constructor
         */
        constructor(store: Storage, defaultTimeoutMinutes?: number);
        /**
         * Get a value from storage, or null if that value does not exist
         *
         * @param key The key whose value we want to retrieve
         */
        get<T>(key: string): T;
        /**
         * Adds a value to the underlying storage
         *
         * @param key The key to use when storing the provided value
         * @param o The value to store
         * @param expire Optional, if provided the expiration of the item, otherwise the default is used
         */
        put(key: string, o: any, expire?: Date): void;
        /**
         * Deletes a value from the underlying storage
         *
         * @param key The key of the pair we want to remove from storage
         */
        delete(key: string): void;
        /**
         * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
         *
         * @param key The key to use when storing the provided value
         * @param getter A function which will upon execution provide the desired value
         * @param expire Optional, if provided the expiration of the item, otherwise the default is used
         */
        getOrPut<T>(key: string, getter: () => Promise<T>, expire?: Date): Promise<T>;
        /**
         * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
         */
        deleteExpired(): Promise<void>;
        /**
         * Used to determine if the wrapped storage is available currently
         */
        private test();
        /**
         * Creates the persistable to store
         */
        private createPersistable(o, expire?);
        /**
         * Deletes expired items added by this library in this.store and sets a timeout to call itself
         */
        private cacheExpirationHandler();
    }
    /**
     * Interface which defines the operations provided by a client storage object
     */
    export interface PnPClientStore {
        /**
         * True if the wrapped storage is available; otherwise, false
         */
        enabled: boolean;
        /**
         * Get a value from storage, or null if that value does not exist
         *
         * @param key The key whose value we want to retrieve
         */
        get(key: string): any;
        /**
         * Adds a value to the underlying storage
         *
         * @param key The key to use when storing the provided value
         * @param o The value to store
         * @param expire Optional, if provided the expiration of the item, otherwise the default is used
         */
        put(key: string, o: any, expire?: Date): void;
        /**
         * Deletes a value from the underlying storage
         *
         * @param key The key of the pair we want to remove from storage
         */
        delete(key: string): void;
        /**
         * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
         *
         * @param key The key to use when storing the provided value
         * @param getter A function which will upon execution provide the desired value
         * @param expire Optional, if provided the expiration of the item, otherwise the default is used
         */
        getOrPut(key: string, getter: Function, expire?: Date): any;
        /**
         * Removes any expired items placed in the store by the pnp library, leaves other items untouched
         */
        deleteExpired(): Promise<void>;
    }
    /**
     * A class that will establish wrappers for both local and session storage
     */
    export class PnPClientStorage {
        private _local;
        private _session;
        /**
         * Creates a new instance of the PnPClientStorage class
         *
         * @constructor
         */
        constructor(_local?: PnPClientStore, _session?: PnPClientStore);
        /**
         * Provides access to the local storage of the browser
         */
        readonly local: PnPClientStore;
        /**
         * Provides access to the session storage of the browser
         */
        readonly session: PnPClientStore;
    }
}
declare module "sharepoint/caching" {
    import { ODataParser } from "sharepoint/odata";
    import { PnPClientStore, PnPClientStorage } from "utils/storage";
    export interface ICachingOptions {
        expiration?: Date;
        storeName?: "session" | "local";
        key: string;
    }
    export class CachingOptions implements ICachingOptions {
        key: string;
        protected static storage: PnPClientStorage;
        expiration: Date;
        storeName: "session" | "local";
        constructor(key: string);
        readonly store: PnPClientStore;
    }
    export class CachingParserWrapper<T> implements ODataParser<T> {
        private _parser;
        private _cacheOptions;
        constructor(_parser: ODataParser<T>, _cacheOptions: CachingOptions);
        parse(response: Response): Promise<T>;
    }
}
declare module "utils/exceptions" {
    /**
     * Represents an exception with an HttpClient request
     *
     */
    export class ProcessHttpClientResponseException extends Error {
        readonly status: number;
        readonly statusText: string;
        readonly data: any;
        constructor(status: number, statusText: string, data: any);
    }
    export class NoCacheAvailableException extends Error {
        constructor(msg?: string);
    }
    export class APIUrlException extends Error {
        constructor(msg?: string);
    }
    export class AuthUrlException extends Error {
        constructor(data: any, msg?: string);
    }
    export class NodeFetchClientUnsupportedException extends Error {
        constructor(msg?: string);
    }
    export class SPRequestExecutorUndefinedException extends Error {
        constructor();
    }
    export class MaxCommentLengthException extends Error {
        constructor(msg?: string);
    }
    export class NotSupportedInBatchException extends Error {
        constructor(operation?: string);
    }
    export class ODataIdException extends Error {
        constructor(data: any, msg?: string);
    }
    export class BatchParseException extends Error {
        constructor(msg: string);
    }
    export class AlreadyInBatchException extends Error {
        constructor(msg?: string);
    }
    export class FunctionExpectedException extends Error {
        constructor(msg?: string);
    }
    export class UrlException extends Error {
        constructor(msg: string);
    }
}
declare module "sharepoint/pipeline" {
    import { ODataParser, ODataBatch } from "sharepoint/odata";
    import { ICachingOptions } from "sharepoint/caching";
    import { FetchOptions } from "net/httpclient";
    /**
     * Defines the context for a given request to be processed in the pipeline
     */
    export interface RequestContext<T> {
        batch: ODataBatch;
        batchDependency: () => void;
        cachingOptions: ICachingOptions;
        hasResult?: boolean;
        isBatched: boolean;
        isCached: boolean;
        options: FetchOptions;
        parser: ODataParser<T>;
        pipeline?: Array<(c: RequestContext<T>) => Promise<RequestContext<T>>>;
        requestAbsoluteUrl: string;
        requestId: string;
        result?: T;
        verb: string;
    }
    /**
     * Sets the result on the context
     */
    export function setResult<T>(context: RequestContext<T>, value: any): Promise<RequestContext<T>>;
    /**
     * Executes the current request context's pipeline
     *
     * @param context Current context
     */
    export function pipe<T>(context: RequestContext<T>): Promise<T>;
    /**
     * decorator factory applied to methods in the pipeline to control behavior
     */
    export function requestPipelineMethod(alwaysRun?: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
    /**
     * Contains the methods used within the request pipeline
     */
    export class PipelineMethods {
        /**
         * Logs the start of the request
         */
        static logStart<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
        /**
         * Handles caching of the request
         */
        static caching<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
        /**
         * Sends the request
         */
        static send<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
        /**
         * Logs the end of the request
         */
        static logEnd<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
        static readonly default: (<T>(context: RequestContext<T>) => Promise<RequestContext<T>>)[];
    }
}
declare module "sharepoint/queryable" {
    import { Dictionary } from "collections/collections";
    import { FetchOptions, ConfigOptions } from "net/httpclient";
    import { ODataParser, ODataBatch } from "sharepoint/odata";
    import { ICachingOptions } from "sharepoint/caching";
    export interface QueryableConstructor<T> {
        new (baseUrl: string | Queryable, path?: string): T;
    }
    /**
     * Queryable Base Class
     *
     */
    export class Queryable {
        /**
         * Additional options to be set before sending actual http request
         */
        protected _options: ConfigOptions;
        /**
         * Tracks the query parts of the url
         */
        protected _query: Dictionary<string>;
        /**
         * Tracks the batch of which this query may be part
         */
        private _batch;
        /**
         * Tracks the url as it is built
         */
        private _url;
        /**
         * Stores the parent url used to create this instance, for recursing back up the tree if needed
         */
        private _parentUrl;
        /**
         * Explicitly tracks if we are using caching for this request
         */
        private _useCaching;
        /**
         * Any options that were supplied when caching was enabled
         */
        private _cachingOptions;
        /**
         * Directly concatonates the supplied string to the current url, not normalizing "/" chars
         *
         * @param pathPart The string to concatonate to the url
         */
        concat(pathPart: string): this;
        /**
         * Appends the given string and normalizes "/" chars
         *
         * @param pathPart The string to append
         */
        protected append(pathPart: string): void;
        /**
         * Blocks a batch call from occuring, MUST be cleared by calling the returned function
         */
        protected addBatchDependency(): () => void;
        /**
         * Indicates if the current query has a batch associated
         *
         */
        protected readonly hasBatch: boolean;
        /**
         * The batch currently associated with this query or null
         *
         */
        protected readonly batch: ODataBatch;
        /**
         * Gets the parent url used when creating this instance
         *
         */
        protected readonly parentUrl: string;
        /**
         * Provides access to the query builder for this url
         *
         */
        readonly query: Dictionary<string>;
        /**
         * Creates a new instance of the Queryable class
         *
         * @constructor
         * @param baseUrl A string or Queryable that should form the base part of the url
         *
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Sets custom options for current object and all derived objects accessible via chaining
         *
         * @param options custom options
         */
        configure(options: ConfigOptions): this;
        /**
         * Creates a new instance of the supplied factory and extends this into that new instance
         *
         * @param factory constructor for the new queryable
         */
        as<T>(factory: QueryableConstructor<T>): T;
        /**
         * Adds this query to the supplied batch
         *
         * @example
         * ```
         *
         * let b = pnp.sp.createBatch();
         * pnp.sp.web.inBatch(b).get().then(...);
         * b.execute().then(...)
         * ```
         */
        inBatch(batch: ODataBatch): this;
        /**
         * Enables caching for this request
         *
         * @param options Defines the options used when caching this request
         */
        usingCaching(options?: ICachingOptions): this;
        /**
         * Gets the currentl url, made absolute based on the availability of the _spPageContextInfo object
         *
         */
        toUrl(): string;
        /**
         * Gets the full url with query information
         *
         */
        toUrlAndQuery(): string;
        /**
         * Gets a parent for this instance as specified
         *
         * @param factory The contructor for the class to create
         */
        protected getParent<T extends Queryable>(factory: QueryableConstructor<T>, baseUrl?: string | Queryable, path?: string, batch?: ODataBatch): T;
        /**
         * Clones this queryable into a new queryable instance of T
         * @param factory Constructor used to create the new instance
         * @param additionalPath Any additional path to include in the clone
         * @param includeBatch If true this instance's batch will be added to the cloned instance
         */
        protected clone<T extends Queryable>(factory: QueryableConstructor<T>, additionalPath?: string, includeBatch?: boolean): T;
        /**
         * Executes the currently built request
         *
         * @param parser Allows you to specify a parser to handle the result
         * @param getOptions The options used for this request
         */
        get(parser?: ODataParser<any>, getOptions?: FetchOptions): Promise<any>;
        getAs<T>(parser?: ODataParser<T>, getOptions?: FetchOptions): Promise<T>;
        protected postCore(postOptions?: FetchOptions, parser?: ODataParser<any>): Promise<any>;
        protected postAsCore<T>(postOptions?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
        protected patchCore(patchOptions?: FetchOptions, parser?: ODataParser<any>): Promise<any>;
        protected deleteCore(deleteOptions?: FetchOptions, parser?: ODataParser<any>): Promise<any>;
        /**
         * Converts the current instance to a request context
         *
         * @param verb The request verb
         * @param options The set of supplied request options
         * @param parser The supplied ODataParser instance
         * @param pipeline Optional request processing pipeline
         */
        private toRequestContext<T>(verb, options, parser, pipeline?);
    }
    /**
     * Represents a REST collection which can be filtered, paged, and selected
     *
     */
    export class QueryableCollection extends Queryable {
        /**
         * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
         *
         * @param filter The string representing the filter query
         */
        filter(filter: string): this;
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
         * Orders based on the supplied fields ascending
         *
         * @param orderby The name of the field to sort on
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
    /**
     * Represents an instance that can be selected
     *
     */
    export class QueryableInstance extends Queryable {
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
    }
}
declare module "sharepoint/odata" {
    import { QueryableConstructor } from "sharepoint/queryable";
    export function extractOdataId(candidate: any): string;
    export interface ODataParser<T> {
        parse(r: Response): Promise<T>;
    }
    export abstract class ODataParserBase<T> implements ODataParser<T> {
        parse(r: Response): Promise<T>;
        protected handleError(r: Response, reject: (reason?: any) => void): boolean;
        protected parseODataJSON<U>(json: any): U;
    }
    export class ODataDefaultParser extends ODataParserBase<any> {
    }
    export class ODataRawParserImpl implements ODataParser<any> {
        parse(r: Response): Promise<any>;
    }
    export function getEntityUrl(entity: any): string;
    export let ODataRaw: ODataRawParserImpl;
    export function ODataValue<T>(): ODataParser<T>;
    export function ODataEntity<T>(factory: QueryableConstructor<T>): ODataParser<T>;
    export function ODataEntityArray<T>(factory: QueryableConstructor<T>): ODataParser<T[]>;
    /**
     * Manages a batch of OData operations
     */
    export class ODataBatch {
        private baseUrl;
        private _batchId;
        private _dependencies;
        private _requests;
        constructor(baseUrl: string, _batchId?: string);
        readonly batchId: string;
        /**
         * Adds a request to a batch (not designed for public use)
         *
         * @param url The full url of the request
         * @param method The http method GET, POST, etc
         * @param options Any options to include in the request
         * @param parser The parser that will hadle the results of the request
         */
        add<T>(url: string, method: string, options: any, parser: ODataParser<T>): Promise<T>;
        /**
         * Adds a dependency insuring that some set of actions will occur before a batch is processed.
         * MUST be cleared using the returned resolve delegate to allow batches to run
         */
        addDependency(): () => void;
        /**
         * Execute the current batch and resolve the associated promises
         *
         * @returns A promise which will be resolved once all of the batch's child promises have resolved
         */
        execute(): Promise<any>;
        private executeImpl();
        /**
         * Parses the response from a batch request into an array of Response instances
         *
         * @param body Text body of the response from the batch request
         */
        private _parseResponse(body);
    }
    export class TextFileParser implements ODataParser<string> {
        parse(r: Response): Promise<string>;
    }
    export class BlobFileParser implements ODataParser<Blob> {
        parse(r: Response): Promise<Blob>;
    }
    export class JSONFileParser implements ODataParser<any> {
        parse(r: Response): Promise<any>;
    }
    export class BufferFileParser implements ODataParser<ArrayBuffer> {
        parse(r: any): Promise<ArrayBuffer>;
    }
}
declare module "net/digestcache" {
    import { Dictionary } from "collections/collections";
    import { HttpClient } from "net/httpclient";
    export class CachedDigest {
        expiration: Date;
        value: string;
    }
    export class DigestCache {
        private _httpClient;
        private _digests;
        constructor(_httpClient: HttpClient, _digests?: Dictionary<CachedDigest>);
        getDigest(webUrl: string): Promise<string>;
        clear(): void;
    }
}
declare module "net/httpclient" {
    export interface ConfigOptions {
        headers?: string[][] | {
            [key: string]: string;
        };
        mode?: "navigate" | "same-origin" | "no-cors" | "cors";
        credentials?: "omit" | "same-origin" | "include";
        cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
    }
    export interface FetchOptions extends ConfigOptions {
        method?: string;
        body?: any;
    }
    export class HttpClient {
        private _digestCache;
        private _impl;
        constructor();
        fetch(url: string, options?: FetchOptions): Promise<Response>;
        fetchRaw(url: string, options?: FetchOptions): Promise<Response>;
        get(url: string, options?: FetchOptions): Promise<Response>;
        post(url: string, options?: FetchOptions): Promise<Response>;
        patch(url: string, options?: FetchOptions): Promise<Response>;
        delete(url: string, options?: FetchOptions): Promise<Response>;
    }
    export function mergeOptions(target: ConfigOptions, source: ConfigOptions): void;
    export function mergeHeaders(target: Headers, source: any): void;
    export interface HttpClientImpl {
        fetch(url: string, options: FetchOptions): Promise<Response>;
    }
}
declare module "net/fetchclient" {
    import { HttpClientImpl } from "net/httpclient";
    /**
     * Makes requests using the fetch API
     */
    export class FetchClient implements HttpClientImpl {
        fetch(url: string, options: any): Promise<Response>;
    }
}
declare module "configuration/pnplibconfig" {
    import { TypedHash } from "collections/collections";
    import { HttpClientImpl } from "net/httpclient";
    export interface LibraryConfiguration {
        /**
         * Any headers to apply to all requests
         */
        headers?: TypedHash<string>;
        /**
         * Allows caching to be global disabled, default: false
         */
        globalCacheDisable?: boolean;
        /**
         * Defines the default store used by the usingCaching method, default: session
         */
        defaultCachingStore?: "session" | "local";
        /**
         * Defines the default timeout in seconds used by the usingCaching method, default 30
         */
        defaultCachingTimeoutSeconds?: number;
        /**
         * If true a timeout expired items will be removed from the cache in intervals determined by cacheTimeoutInterval
         */
        enableCacheExpiration?: boolean;
        /**
         * Determines the interval in milliseconds at which the cache is checked to see if items have expired (min: 100)
         */
        cacheExpirationIntervalMilliseconds?: number;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => HttpClientImpl;
        /**
         * The base url used for all requests
         */
        baseUrl?: string;
        /**
         * Used to supply the current context from an SPFx webpart to the library
         */
        spfxContext?: any;
    }
    export class RuntimeConfigImpl {
        private _headers;
        private _defaultCachingStore;
        private _defaultCachingTimeoutSeconds;
        private _globalCacheDisable;
        private _fetchClientFactory;
        private _baseUrl;
        private _spfxContext;
        private _enableCacheExpiration;
        private _cacheExpirationIntervalMilliseconds;
        constructor();
        set(config: LibraryConfiguration): void;
        readonly headers: TypedHash<string>;
        readonly defaultCachingStore: "session" | "local";
        readonly defaultCachingTimeoutSeconds: number;
        readonly globalCacheDisable: boolean;
        readonly fetchClientFactory: () => HttpClientImpl;
        readonly baseUrl: string;
        readonly enableCacheExpiration: boolean;
        readonly cacheExpirationIntervalMilliseconds: number;
    }
    export let RuntimeConfig: RuntimeConfigImpl;
    export function setRuntimeConfig(config: LibraryConfiguration): void;
}
declare module "utils/util" {
    import { TypedHash } from "collections/collections";
    export function extractWebUrl(candidateUrl: string): string;
    export class Util {
        /**
         * Gets a callback function which will maintain context across async calls.
         * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
         *
         * @param context The object that will be the 'this' value in the callback
         * @param method The method to which we will apply the context and parameters
         * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
         */
        static getCtxCallback(context: any, method: Function, ...params: any[]): Function;
        /**
         * Tests if a url param exists
         *
         * @param name The name of the url paramter to check
         */
        static urlParamExists(name: string): boolean;
        /**
         * Gets a url param value by name
         *
         * @param name The name of the paramter for which we want the value
         */
        static getUrlParamByName(name: string): string;
        /**
         * Gets a url param by name and attempts to parse a bool value
         *
         * @param name The name of the paramter for which we want the boolean value
         */
        static getUrlParamBoolByName(name: string): boolean;
        /**
         * Inserts the string s into the string target as the index specified by index
         *
         * @param target The string into which we will insert s
         * @param index The location in target to insert s (zero based)
         * @param s The string to insert into target at position index
         */
        static stringInsert(target: string, index: number, s: string): string;
        /**
         * Adds a value to a date
         *
         * @param date The date to which we will add units, done in local time
         * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
         * @param units The amount to add to date of the given interval
         *
         * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
         */
        static dateAdd(date: Date, interval: string, units: number): Date;
        /**
         * Loads a stylesheet into the current page
         *
         * @param path The url to the stylesheet
         * @param avoidCache If true a value will be appended as a query string to avoid browser caching issues
         */
        static loadStylesheet(path: string, avoidCache: boolean): void;
        /**
         * Combines an arbitrary set of paths ensuring that the slashes are normalized
         *
         * @param paths 0 to n path parts to combine
         */
        static combinePaths(...paths: string[]): string;
        /**
         * Gets a random string of chars length
         *
         * @param chars The length of the random string to generate
         */
        static getRandomString(chars: number): string;
        /**
         * Gets a random GUID value
         *
         * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
         */
        static getGUID(): string;
        /**
         * Determines if a given value is a function
         *
         * @param candidateFunction The thing to test for being a function
         */
        static isFunction(candidateFunction: any): boolean;
        /**
         * @returns whether the provided parameter is a JavaScript Array or not.
        */
        static isArray(array: any): boolean;
        /**
         * Determines if a string is null or empty or undefined
         *
         * @param s The string to test
         */
        static stringIsNullOrEmpty(s: string): boolean;
        /**
         * Provides functionality to extend the given object by doing a shallow copy
         *
         * @param target The object to which properties will be copied
         * @param source The source object from which properties will be copied
         * @param noOverwrite If true existing properties on the target are not overwritten from the source
         *
         */
        static extend(target: any, source: TypedHash<any>, noOverwrite?: boolean): any;
        /**
         * Determines if a given url is absolute
         *
         * @param url The url to check to see if it is absolute
         */
        static isUrlAbsolute(url: string): boolean;
        /**
         * Ensures that a given url is absolute for the current web based on context
         *
         * @param candidateUrl The url to make absolute
         *
         */
        static toAbsoluteUrl(candidateUrl: string): Promise<string>;
    }
}
declare module "configuration/configuration" {
    import { TypedHash } from "collections/collections";
    /**
     * Interface for configuration providers
     *
     */
    export interface IConfigurationProvider {
        /**
         * Gets the configuration from the provider
         */
        getConfiguration(): Promise<TypedHash<string>>;
    }
    /**
     * Class used to manage the current application settings
     *
     */
    export class Settings {
        /**
         * The settings currently stored in this instance
         */
        private _settings;
        /**
         * Creates a new instance of the settings class
         *
         * @constructor
         */
        constructor();
        /**
         * Adds a new single setting, or overwrites a previous setting with the same key
         *
         * @param {string} key The key used to store this setting
         * @param {string} value The setting value to store
         */
        add(key: string, value: string): void;
        /**
         * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
         *
         * @param {string} key The key used to store this setting
         * @param {any} value The setting value to store
         */
        addJSON(key: string, value: any): void;
        /**
         * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
         *
         * @param {TypedHash<any>} hash The set of values to add
         */
        apply(hash: TypedHash<any>): Promise<void>;
        /**
         * Loads configuration settings into the collection from the supplied provider and returns a Promise
         *
         * @param {IConfigurationProvider} provider The provider from which we will load the settings
         */
        load(provider: IConfigurationProvider): Promise<void>;
        /**
         * Gets a value from the configuration
         *
         * @param {string} key The key whose value we want to return. Returns null if the key does not exist
         * @return {string} string value from the configuration
         */
        get(key: string): string;
        /**
         * Gets a JSON value, rehydrating the stored string to the original object
         *
         * @param {string} key The key whose value we want to return. Returns null if the key does not exist
         * @return {any} object from the configuration
         */
        getJSON(key: string): any;
    }
}
declare module "sharepoint/search" {
    import { Queryable, QueryableInstance } from "sharepoint/queryable";
    import { Dictionary } from "collections/collections";
    /**
     * Allows for the fluent construction of search queries
     */
    export class SearchQueryBuilder {
        private _query;
        static create(queryText?: string, queryTemplate?: SearchQuery): SearchQueryBuilder;
        constructor(queryText?: string, _query?: {});
        text(queryText: string): this;
        template(template: string): this;
        sourceId(id: string): this;
        readonly enableInterleaving: this;
        readonly enableStemming: this;
        readonly trimDuplicates: this;
        trimDuplicatesIncludeId(n: number): this;
        readonly enableNicknames: this;
        readonly enableFql: this;
        readonly enablePhonetic: this;
        readonly bypassResultTypes: this;
        readonly processBestBets: this;
        readonly enableQueryRules: this;
        readonly enableSorting: this;
        readonly generateBlockRankLog: this;
        rankingModelId(id: string): this;
        startRow(n: number): this;
        rowLimit(n: number): this;
        rowsPerPage(n: number): this;
        selectProperties(...properties: string[]): this;
        culture(culture: number): this;
        timeZoneId(id: number): this;
        refinementFilters(...filters: string[]): this;
        refiners(refiners: string): this;
        hiddenConstraints(constraints: string): this;
        sortList(...sorts: Sort[]): this;
        timeout(milliseconds: number): this;
        hithighlightedProperties(...properties: string[]): this;
        clientType(clientType: string): this;
        personalizationData(data: string): this;
        resultsURL(url: string): this;
        queryTag(...tags: string[]): this;
        properties(...properties: SearchProperty[]): this;
        readonly processPersonalFavorites: this;
        queryTemplatePropertiesUrl(url: string): this;
        reorderingRules(...rules: ReorderingRule[]): this;
        hitHighlightedMultivaluePropertyLimit(limit: number): this;
        readonly enableOrderingHitHighlightedProperty: this;
        collapseSpecification(spec: string): this;
        uiLanguage(lang: number): this;
        desiredSnippetLength(len: number): this;
        maxSnippetLength(len: number): this;
        summaryLength(len: number): this;
        toSearchQuery(): SearchQuery;
        private extendQuery(part);
    }
    /**
     * Describes the search API
     *
     */
    export class Search extends QueryableInstance {
        /**
         * Creates a new instance of the Search class
         *
         * @param baseUrl The url for the search context
         * @param query The SearchQuery object to execute
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * .......
         * @returns Promise
         */
        execute(query: SearchQuery): Promise<SearchResults>;
        /**
         * Fixes up properties that expect to consist of a "results" collection when needed
         *
         * @param prop property to fixup for container struct
         */
        private fixupProp(prop);
    }
    /**
     * Describes the SearchResults class, which returns the formatted and raw version of the query response
     */
    export class SearchResults {
        private _url;
        private _query;
        private _raw;
        private _primary;
        /**
         * Creates a new instance of the SearchResult class
         *
         */
        constructor(rawResponse: any, _url: string, _query: SearchQuery, _raw?: SearchResponse, _primary?: SearchResult[]);
        readonly ElapsedTime: number;
        readonly RowCount: number;
        readonly TotalRows: number;
        readonly TotalRowsIncludingDuplicates: number;
        readonly RawSearchResults: SearchResponse;
        readonly PrimarySearchResults: SearchResult[];
        /**
         * Gets a page of results
         *
         * @param pageNumber Index of the page to return. Used to determine StartRow
         * @param pageSize Optional, items per page (default = 10)
         */
        getPage(pageNumber: number, pageSize?: number): Promise<SearchResults>;
        /**
         * Formats a search results array
         *
         * @param rawResults The array to process
         */
        protected formatSearchResults(rawResults: any): SearchResult[];
    }
    /**
     * Describes the SearchQuery interface
     */
    export interface SearchQuery {
        /**
         * A string that contains the text for the search query.
         */
        Querytext?: string;
        /**
         * A string that contains the text that replaces the query text, as part of a query transform.
         */
        QueryTemplate?: string;
        /**
         * A Boolean value that specifies whether the result tables that are returned for
         * the result block are mixed with the result tables that are returned for the original query.
         */
        EnableInterleaving?: boolean;
        /**
         * A Boolean value that specifies whether stemming is enabled.
         */
        EnableStemming?: boolean;
        /**
         * A Boolean value that specifies whether duplicate items are removed from the results.
         */
        TrimDuplicates?: boolean;
        /**
         * A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also.
         */
        EnableNicknames?: boolean;
        /**
         * A Boolean value that specifies whether the query uses the FAST Query Language (FQL).
         */
        EnableFQL?: boolean;
        /**
         * A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches.
         */
        EnablePhonetic?: boolean;
        /**
         * A Boolean value that specifies whether to perform result type processing for the query.
         */
        BypassResultTypes?: boolean;
        /**
         * A Boolean value that specifies whether to return best bet results for the query.
         * This parameter is used only when EnableQueryRules is set to true, otherwise it is ignored.
         */
        ProcessBestBets?: boolean;
        /**
         * A Boolean value that specifies whether to enable query rules for the query.
         */
        EnableQueryRules?: boolean;
        /**
         * A Boolean value that specifies whether to sort search results.
         */
        EnableSorting?: boolean;
        /**
         * Specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table.
         * A block rank log contains the textual information on the block score and the documents that were de-duplicated.
         */
        GenerateBlockRankLog?: boolean;
        /**
         * The result source ID to use for executing the search query.
         */
        SourceId?: string;
        /**
         * The ID of the ranking model to use for the query.
         */
        RankingModelId?: string;
        /**
         * The first row that is included in the search results that are returned.
         * You use this parameter when you want to implement paging for search results.
         */
        StartRow?: number;
        /**
         * The maximum number of rows overall that are returned in the search results.
         * Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall.
         */
        RowLimit?: number;
        /**
         * The maximum number of rows to return per page.
         * Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page,
         * and is used primarily when you want to implement paging for search results.
         */
        RowsPerPage?: number;
        /**
         * The managed properties to return in the search results.
         */
        SelectProperties?: string[];
        /**
         * The locale ID (LCID) for the query.
         */
        Culture?: number;
        /**
         * The set of refinement filters used when issuing a refinement query (FQL)
         */
        RefinementFilters?: string[];
        /**
         * The set of refiners to return in a search result.
         */
        Refiners?: string;
        /**
         * The additional query terms to append to the query.
         */
        HiddenConstraints?: string;
        /**
         * The list of properties by which the search results are ordered.
         */
        SortList?: Sort[];
        /**
         * The amount of time in milliseconds before the query request times out.
         */
        Timeout?: number;
        /**
         * The properties to highlight in the search result summary when the property value matches the search terms entered by the user.
         */
        HitHighlightedProperties?: string[];
        /**
         * The type of the client that issued the query.
         */
        ClientType?: string;
        /**
         * The GUID for the user who submitted the search query.
         */
        PersonalizationData?: string;
        /**
         * The URL for the search results page.
         */
        ResultsUrl?: string;
        /**
         * Custom tags that identify the query. You can specify multiple query tags
         */
        QueryTag?: string[];
        /**
         * Properties to be used to configure the search query
         */
        Properties?: SearchProperty[];
        /**
         *  A Boolean value that specifies whether to return personal favorites with the search results.
         */
        ProcessPersonalFavorites?: boolean;
        /**
         * The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries.
         */
        QueryTemplatePropertiesUrl?: string;
        /**
         * Special rules for reordering search results.
         * These rules can specify that documents matching certain conditions are ranked higher or lower in the results.
         * This property applies only when search results are sorted based on rank.
         */
        ReorderingRules?: ReorderingRule[];
        /**
         * The number of properties to show hit highlighting for in the search results.
         */
        HitHighlightedMultivaluePropertyLimit?: number;
        /**
         * A Boolean value that specifies whether the hit highlighted properties can be ordered.
         */
        EnableOrderingHitHighlightedProperty?: boolean;
        /**
         * The managed properties that are used to determine how to collapse individual search results.
         * Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications.
         * In a collapse specification, results are collapsed if their properties match all individual properties in the collapse specification.
         */
        CollapseSpecification?: string;
        /**
         * The locale identifier (LCID) of the user interface
         */
        UIlanguage?: number;
        /**
         * The preferred number of characters to display in the hit-highlighted summary generated for a search result.
         */
        DesiredSnippetLength?: number;
        /**
         * The maximum number of characters to display in the hit-highlighted summary generated for a search result.
         */
        MaxSnippetLength?: number;
        /**
         * The number of characters to display in the result summary for a search result.
         */
        SummaryLength?: number;
    }
    /**
     * Provides hints at the properties which may be available on the result object
     */
    export interface SearchResult {
        Rank?: number;
        DocId?: number;
        WorkId?: number;
        Title?: string;
        Author?: string;
        Size?: number;
        Path?: string;
        Description?: string;
        Write?: Date;
        LastModifiedTime?: Date;
        CollapsingStatus?: number;
        HitHighlightedSummary?: string;
        HitHighlightedProperties?: string;
        contentclass?: string;
        PictureThumbnailURL?: string;
        ServerRedirectedURL?: string;
        ServerRedirectedEmbedURL?: string;
        ServerRedirectedPreviewURL?: string;
        FileExtension?: string;
        ContentTypeId?: string;
        ParentLink?: string;
        ViewsLifeTime?: number;
        ViewsRecent?: number;
        SectionNames?: string;
        SectionIndexes?: string;
        SiteLogo?: string;
        SiteDescription?: string;
        importance?: number;
        SiteName?: string;
        IsDocument?: boolean;
        FileType?: string;
        IsContainer?: boolean;
        WebTemplate?: string;
        SPWebUrl?: string;
        UniqueId?: string;
        ProgId?: string;
        OriginalPath?: string;
        RenderTemplateId?: string;
        PartitionId?: string;
        UrlZone?: number;
        Culture?: string;
    }
    export interface SearchResponse {
        ElapsedTime: number;
        Properties?: {
            Key: string;
            Value: any;
            ValueType: string;
        }[];
        PrimaryQueryResult?: ResultTableCollection;
        SecondaryQueryResults?: ResultTableCollection;
        SpellingSuggestion?: string;
        TriggeredRules?: any[];
    }
    export interface ResultTableCollection {
        QueryErrors?: Dictionary<any>;
        QueryId?: string;
        QueryRuleId?: string;
        CustomResults?: ResultTable;
        RefinementResults?: ResultTable;
        RelevantResults?: ResultTable;
        SpecialTermResults?: ResultTable;
    }
    export interface ResultTable {
        GroupTemplateId?: string;
        ItemTemplateId?: string;
        Properties?: {
            Key: string;
            Value: any;
            ValueType: string;
        }[];
        Table: {
            Rows: {
                Cells: {
                    Key: string;
                    Value: any;
                    ValueType: string;
                }[];
            }[];
        };
        ResultTitle?: string;
        ResultTitleUrl?: string;
        RowCount?: number;
        TableType?: string;
        TotalRows?: number;
        TotalRowsIncludingDuplicates?: number;
    }
    /**
     * Defines how search results are sorted.
     */
    export interface Sort {
        /**
         * The name for a property by which the search results are ordered.
         */
        Property: string;
        /**
         * The direction in which search results are ordered.
         */
        Direction: SortDirection;
    }
    /**
     * Defines one search property
     */
    export interface SearchProperty {
        Name: string;
        Value: SearchPropertyValue;
    }
    /**
     * Defines one search property value. Set only one of StrlVal/BoolVal/IntVal/StrArray.
     */
    export interface SearchPropertyValue {
        StrVal?: string;
        BoolVal?: boolean;
        Intval?: number;
        StrArray?: string[];
        QueryPropertyValueTypeIndex: QueryPropertyValueType;
    }
    /**
     * defines the SortDirection enum
     */
    export enum SortDirection {
        Ascending = 0,
        Descending = 1,
        FQLFormula = 2,
    }
    /**
     * Defines how ReorderingRule interface, used for reordering results
     */
    export interface ReorderingRule {
        /**
         * The value to match on
         */
        MatchValue: string;
        /**
         * The rank boosting
         */
        Boost: number;
        /**
        * The rank boosting
        */
        MatchType: ReorderingRuleMatchType;
    }
    /**
     * defines the ReorderingRuleMatchType  enum
     */
    export enum ReorderingRuleMatchType {
        ResultContainsKeyword = 0,
        TitleContainsKeyword = 1,
        TitleMatchesKeyword = 2,
        UrlStartsWith = 3,
        UrlExactlyMatches = 4,
        ContentTypeIs = 5,
        FileExtensionMatches = 6,
        ResultHasTag = 7,
        ManualCondition = 8,
    }
    /**
     * Specifies the type value for the property
     */
    export enum QueryPropertyValueType {
        None = 0,
        StringType = 1,
        Int32TYpe = 2,
        BooleanType = 3,
        StringArrayType = 4,
        UnSupportedType = 5,
    }
    export class SearchBuiltInSourceId {
        static readonly Documents: string;
        static readonly ItemsMatchingContentType: string;
        static readonly ItemsMatchingTag: string;
        static readonly ItemsRelatedToCurrentUser: string;
        static readonly ItemsWithSameKeywordAsThisItem: string;
        static readonly LocalPeopleResults: string;
        static readonly LocalReportsAndDataResults: string;
        static readonly LocalSharePointResults: string;
        static readonly LocalVideoResults: string;
        static readonly Pages: string;
        static readonly Pictures: string;
        static readonly Popular: string;
        static readonly RecentlyChangedItems: string;
        static readonly RecommendedItems: string;
        static readonly Wiki: string;
    }
}
declare module "sharepoint/searchsuggest" {
    import { Queryable, QueryableInstance } from "sharepoint/queryable";
    /**
     * Defines a query execute against the search/suggest endpoint (see https://msdn.microsoft.com/en-us/library/office/dn194079.aspx)
     */
    export interface SearchSuggestQuery {
        /**
         * A string that contains the text for the search query.
         */
        querytext: string;
        /**
         * The number of query suggestions to retrieve. Must be greater than zero (0). The default value is 5.
         */
        count?: number;
        /**
         * The number of personal results to retrieve. Must be greater than zero (0). The default value is 5.
         */
        personalCount?: number;
        /**
         * A Boolean value that specifies whether to retrieve pre-query or post-query suggestions. true to return pre-query suggestions; otherwise, false. The default value is false.
         */
        preQuery?: boolean;
        /**
         * A Boolean value that specifies whether to hit-highlight or format in bold the query suggestions. true to format in bold the terms in the returned query suggestions
         * that match terms in the specified query; otherwise, false. The default value is true.
         */
        hitHighlighting?: boolean;
        /**
         * A Boolean value that specifies whether to capitalize the first letter in each term in the returned query suggestions. true to capitalize the first letter in each term;
         * otherwise, false. The default value is false.
         */
        capitalize?: boolean;
        /**
         * The locale ID (LCID) for the query (see https://msdn.microsoft.com/en-us/library/cc233982.aspx).
         */
        culture?: string;
        /**
         * A Boolean value that specifies whether stemming is enabled. true to enable stemming; otherwise, false. The default value is true.
         */
        stemming?: boolean;
        /**
         * A Boolean value that specifies whether to include people names in the returned query suggestions. true to include people names in the returned query suggestions;
         * otherwise, false. The default value is true.
         */
        includePeople?: boolean;
        /**
         * A Boolean value that specifies whether to turn on query rules for this query. true to turn on query rules; otherwise, false. The default value is true.
         */
        queryRules?: boolean;
        /**
         * A Boolean value that specifies whether to return query suggestions for prefix matches. true to return query suggestions based on prefix matches, otherwise, false when
         * query suggestions should match the full query word.
         */
        prefixMatch?: boolean;
    }
    export class SearchSuggest extends QueryableInstance {
        constructor(baseUrl: string | Queryable, path?: string);
        execute(query: SearchSuggestQuery): Promise<SearchSuggestResult>;
        private mapQueryToQueryString(query);
    }
    export class SearchSuggestResult {
        PeopleNames: string[];
        PersonalResults: PersonalResultSuggestion[];
        Queries: any[];
        constructor(json: any);
    }
    export interface PersonalResultSuggestion {
        HighlightedTitle?: string;
        IsBestBet?: boolean;
        Title?: string;
        TypeId?: string;
        Url?: string;
    }
}
declare module "sharepoint/siteusers" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    import { SiteGroups } from "sharepoint/sitegroups";
    import { TypedHash } from "collections/collections";
    /**
     * Properties that provide both a getter, and a setter.
     *
     */
    export interface UserUpdateResult {
        user: SiteUser;
        data: any;
    }
    /**
     * Describes a collection of all site collection users
     *
     */
    export class SiteUsers extends QueryableCollection {
        /**
         * Creates a new instance of the SiteUsers class
         *
         * @param baseUrl The url or Queryable which forms the parent of this user collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a user from the collection by email
         *
         * @param email The email address of the user to retrieve
         */
        getByEmail(email: string): SiteUser;
        /**
         * Gets a user from the collection by id
         *
         * @param id The id of the user to retrieve
         */
        getById(id: number): SiteUser;
        /**
         * Gets a user from the collection by login name
         *
         * @param loginName The login name of the user to retrieve
         */
        getByLoginName(loginName: string): SiteUser;
        /**
         * Removes a user from the collection by id
         *
         * @param id The id of the user to remove
         */
        removeById(id: number | Queryable): Promise<any>;
        /**
         * Removes a user from the collection by login name
         *
         * @param loginName The login name of the user to remove
         */
        removeByLoginName(loginName: string): Promise<any>;
        /**
         * Adds a user to a group
         *
         * @param loginName The login name of the user to add to the group
         *
         */
        add(loginName: string): Promise<SiteUser>;
    }
    /**
     * Describes a single user
     *
     */
    export class SiteUser extends QueryableInstance {
        /**
         * Gets the groups for this user
         *
         */
        readonly groups: SiteGroups;
        /**
        * Updates this user instance with the supplied properties
        *
        * @param properties A plain object of property names and values to update for the user
        */
        update(properties: TypedHash<any>): Promise<UserUpdateResult>;
        /**
         * Delete this user
         *
         */
        delete(): Promise<void>;
    }
    /**
     * Represents the current user
     */
    export class CurrentUser extends QueryableInstance {
        constructor(baseUrl: string | Queryable, path?: string);
    }
    export interface SiteUserProps {
        Email: string;
        Id: number;
        IsHiddenInUI: boolean;
        IsShareByEmailGuestUser: boolean;
        IsSiteAdmin: boolean;
        LoginName: string;
        PrincipalType: number;
        Title: string;
    }
}
declare module "sharepoint/sitegroups" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    import { SiteUsers } from "sharepoint/siteusers";
    import { TypedHash } from "collections/collections";
    /**
     * Principal Type enum
     *
     */
    export enum PrincipalType {
        None = 0,
        User = 1,
        DistributionList = 2,
        SecurityGroup = 4,
        SharePointGroup = 8,
        All = 15,
    }
    /**
     * Results from updating a group
     *
     */
    export interface GroupUpdateResult {
        group: SiteGroup;
        data: any;
    }
    /**
     * Results from adding a group
     *
     */
    export interface GroupAddResult {
        group: SiteGroup;
        data: any;
    }
    /**
     * Describes a collection of site groups
     *
     */
    export class SiteGroups extends QueryableCollection {
        /**
         * Creates a new instance of the SiteGroups class
         *
         * @param baseUrl The url or Queryable which forms the parent of this group collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Adds a new group to the site collection
         *
         * @param props The group properties object of property names and values to be set for the group
         */
        add(properties: TypedHash<any>): Promise<GroupAddResult>;
        /**
         * Gets a group from the collection by name
         *
         * @param groupName The name of the group to retrieve
         */
        getByName(groupName: string): SiteGroup;
        /**
         * Gets a group from the collection by id
         *
         * @param id The id of the group to retrieve
         */
        getById(id: number): SiteGroup;
        /**
         * Removes the group with the specified member id from the collection
         *
         * @param id The id of the group to remove
         */
        removeById(id: number): Promise<void>;
        /**
         * Removes the cross-site group with the specified name from the collection
         *
         * @param loginName The name of the group to remove
         */
        removeByLoginName(loginName: string): Promise<any>;
    }
    /**
     * Describes a single group
     *
     */
    export class SiteGroup extends QueryableInstance {
        /**
         * Gets the users for this group
         *
         */
        readonly users: SiteUsers;
        /**
        * Updates this group instance with the supplied properties
        *
        * @param properties A GroupWriteableProperties object of property names and values to update for the group
        */
        update(properties: TypedHash<any>): Promise<GroupUpdateResult>;
    }
    export interface SiteGroupAddResult {
        group: SiteGroup;
        data: any;
    }
}
declare module "sharepoint/types" {
    import { TypedHash } from "collections/collections";
    /**
     * Represents the unique sequential location of a change within the change log.
     */
    export interface ChangeToken {
        /**
         * Gets or sets a string value that contains the serialized representation of the change token generated by the protocol server.
         */
        StringValue: string;
    }
    /**
     * Defines a query that is performed against the change log.
     */
    export interface ChangeQuery {
        /**
         * Gets or sets a value that specifies whether add changes are included in the query.
         */
        Add?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to alerts are included in the query.
         */
        Alert?: boolean;
        /**
         * Gets or sets a value that specifies the end date and end time for changes that are returned through the query.
         */
        ChangeTokenEnd?: ChangeToken;
        /**
         * Gets or sets a value that specifies the start date and start time for changes that are returned through the query.
         */
        ChangeTokenStart?: ChangeToken;
        /**
         * Gets or sets a value that specifies whether changes to content types are included in the query.
         */
        ContentType?: boolean;
        /**
         * Gets or sets a value that specifies whether deleted objects are included in the query.
         */
        DeleteObject?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to fields are included in the query.
         */
        Field?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to files are included in the query.
         */
        File?: boolean;
        /**
         * Gets or sets value that specifies whether changes to folders are included in the query.
         */
        Folder?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to groups are included in the query.
         */
        Group?: boolean;
        /**
         * Gets or sets a value that specifies whether adding users to groups is included in the query.
         */
        GroupMembershipAdd?: boolean;
        /**
         * Gets or sets a value that specifies whether deleting users from the groups is included in the query.
         */
        GroupMembershipDelete?: boolean;
        /**
         * Gets or sets a value that specifies whether general changes to list items are included in the query.
         */
        Item?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to lists are included in the query.
         */
        List?: boolean;
        /**
         * Gets or sets a value that specifies whether move changes are included in the query.
         */
        Move?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to the navigation structure of a site collection are included in the query.
         */
        Navigation?: boolean;
        /**
         * Gets or sets a value that specifies whether renaming changes are included in the query.
         */
        Rename?: boolean;
        /**
         * Gets or sets a value that specifies whether restoring items from the recycle bin or from backups is included in the query.
         */
        Restore?: boolean;
        /**
         * Gets or sets a value that specifies whether adding role assignments is included in the query.
         */
        RoleAssignmentAdd?: boolean;
        /**
         * Gets or sets a value that specifies whether adding role assignments is included in the query.
         */
        RoleAssignmentDelete?: boolean;
        /**
         * Gets or sets a value that specifies whether adding role assignments is included in the query.
         */
        RoleDefinitionAdd?: boolean;
        /**
         * Gets or sets a value that specifies whether adding role assignments is included in the query.
         */
        RoleDefinitionDelete?: boolean;
        /**
         * Gets or sets a value that specifies whether adding role assignments is included in the query.
         */
        RoleDefinitionUpdate?: boolean;
        /**
         * Gets or sets a value that specifies whether modifications to security policies are included in the query.
         */
        SecurityPolicy?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to site collections are included in the query.
         */
        Site?: boolean;
        /**
         * Gets or sets a value that specifies whether updates made using the item SystemUpdate method are included in the query.
         */
        SystemUpdate?: boolean;
        /**
         * Gets or sets a value that specifies whether update changes are included in the query.
         */
        Update?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to users are included in the query.
         */
        User?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to views are included in the query.
         */
        View?: boolean;
        /**
         * Gets or sets a value that specifies whether changes to Web sites are included in the query.
         */
        Web?: boolean;
    }
    /**
     * Specifies a Collaborative Application Markup Language (CAML) query on a list or joined lists.
     */
    export interface CamlQuery {
        /**
         * Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format.
         */
        DatesInUtc?: boolean;
        /**
         * Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned.
         */
        FolderServerRelativeUrl?: string;
        /**
         * Gets or sets a value that specifies the information required to get the next page of data for the list view.
         */
        ListItemCollectionPosition?: ListItemCollectionPosition;
        /**
         * Gets or sets value that specifies the XML schema that defines the list view.
         */
        ViewXml?: string;
    }
    /**
     * Specifies the information required to get the next page of data for a list view.
     */
    export interface ListItemCollectionPosition {
        /**
         * Gets or sets a value that specifies information, as name-value pairs, required to get the next page of data for a list view.
         */
        PagingInfo: string;
    }
    /**
     * Represents the input parameter of the GetListItemChangesSinceToken method.
     */
    export interface ChangeLogitemQuery {
        /**
         * The change token for the request.
         */
        ChangeToken?: string;
        /**
         * The XML element that defines custom filtering for the query.
         */
        Contains?: string;
        /**
         * The records from the list to return and their return order.
         */
        Query?: string;
        /**
         * The options for modifying the query.
         */
        QueryOptions?: string;
        /**
         * RowLimit
         */
        RowLimit?: string;
        /**
         * The names of the fields to include in the query result.
         */
        ViewFields?: string;
        /**
         * The GUID of the view.
         */
        ViewName?: string;
    }
    /**
     * Determines the display mode of the given control or view
     */
    export enum ControlMode {
        Display = 1,
        Edit = 2,
        New = 3,
    }
    /**
     * Represents properties of a list item field and its value.
     */
    export interface ListItemFormUpdateValue {
        /**
         * The error message result after validating the value for the field.
         */
        ErrorMessage?: string;
        /**
         * The internal name of the field.
         */
        FieldName?: string;
        /**
         * The value of the field, in string format.
         */
        FieldValue?: string;
        /**
         * Indicates whether there was an error result after validating the value for the field.
         */
        HasException?: boolean;
    }
    /**
     * Specifies the type of the field.
     */
    export enum FieldTypes {
        Invalid = 0,
        Integer = 1,
        Text = 2,
        Note = 3,
        DateTime = 4,
        Counter = 5,
        Choice = 6,
        Lookup = 7,
        Boolean = 8,
        Number = 9,
        Currency = 10,
        URL = 11,
        Computed = 12,
        Threading = 13,
        Guid = 14,
        MultiChoice = 15,
        GridChoice = 16,
        Calculated = 17,
        File = 18,
        Attachments = 19,
        User = 20,
        Recurrence = 21,
        CrossProjectLink = 22,
        ModStat = 23,
        Error = 24,
        ContentTypeId = 25,
        PageSeparator = 26,
        ThreadIndex = 27,
        WorkflowStatus = 28,
        AllDayEvent = 29,
        WorkflowEventType = 30,
    }
    export enum DateTimeFieldFormatType {
        DateOnly = 0,
        DateTime = 1,
    }
    /**
     * Specifies the control settings while adding a field.
     */
    export enum AddFieldOptions {
        /**
         *  Specify that a new field added to the list must also be added to the default content type in the site collection
         */
        DefaultValue = 0,
        /**
         * Specify that a new field added to the list must also be added to the default content type in the site collection.
         */
        AddToDefaultContentType = 1,
        /**
         * Specify that a new field must not be added to any other content type
         */
        AddToNoContentType = 2,
        /**
         *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
         */
        AddToAllContentTypes = 4,
        /**
         * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
         */
        AddFieldInternalNameHint = 8,
        /**
         * Specify that a new field that is added to the specified list must also be added to the default list view
         */
        AddFieldToDefaultView = 16,
        /**
         * Specify to confirm that no other field has the same display name
         */
        AddFieldCheckDisplayName = 32,
    }
    export interface XmlSchemaFieldCreationInformation {
        Options?: AddFieldOptions;
        SchemaXml: string;
    }
    export enum CalendarType {
        Gregorian = 1,
        Japan = 3,
        Taiwan = 4,
        Korea = 5,
        Hijri = 6,
        Thai = 7,
        Hebrew = 8,
        GregorianMEFrench = 9,
        GregorianArabic = 10,
        GregorianXLITEnglish = 11,
        GregorianXLITFrench = 12,
        KoreaJapanLunar = 14,
        ChineseLunar = 15,
        SakaEra = 16,
        UmAlQura = 23,
    }
    export enum UrlFieldFormatType {
        Hyperlink = 0,
        Image = 1,
    }
    export interface BasePermissions {
        Low: number;
        High: number;
    }
    export enum PermissionKind {
        /**
         * Has no permissions on the Site. Not available through the user interface.
         */
        EmptyMask = 0,
        /**
         * View items in lists, documents in document libraries, and Web discussion comments.
         */
        ViewListItems = 1,
        /**
         * Add items to lists, documents to document libraries, and Web discussion comments.
         */
        AddListItems = 2,
        /**
         * Edit items in lists, edit documents in document libraries, edit Web discussion comments
         * in documents, and customize Web Part Pages in document libraries.
         */
        EditListItems = 3,
        /**
         * Delete items from a list, documents from a document library, and Web discussion
         * comments in documents.
         */
        DeleteListItems = 4,
        /**
         * Approve a minor version of a list item or document.
         */
        ApproveItems = 5,
        /**
         * View the source of documents with server-side file handlers.
         */
        OpenItems = 6,
        /**
         * View past versions of a list item or document.
         */
        ViewVersions = 7,
        /**
         * Delete past versions of a list item or document.
         */
        DeleteVersions = 8,
        /**
         * Discard or check in a document which is checked out to another user.
         */
        CancelCheckout = 9,
        /**
         * Create, change, and delete personal views of lists.
         */
        ManagePersonalViews = 10,
        /**
         * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
         */
        ManageLists = 12,
        /**
         * View forms, views, and application pages, and enumerate lists.
         */
        ViewFormPages = 13,
        /**
         * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
         * The list permissions in the site do not change.
         */
        AnonymousSearchAccessList = 14,
        /**
         * Allow users to open a Site, list, or folder to access items inside that container.
         */
        Open = 17,
        /**
         * View pages in a Site.
         */
        ViewPages = 18,
        /**
         * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
         * a Windows SharePoint Services compatible editor.
         */
        AddAndCustomizePages = 19,
        /**
         * Apply a theme or borders to the entire Site.
         */
        ApplyThemeAndBorder = 20,
        /**
         * Apply a style sheet (.css file) to the Site.
         */
        ApplyStyleSheets = 21,
        /**
         * View reports on Site usage.
         */
        ViewUsageData = 22,
        /**
         * Create a Site using Self-Service Site Creation.
         */
        CreateSSCSite = 23,
        /**
         * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
         */
        ManageSubwebs = 24,
        /**
         * Create a group of users that can be used anywhere within the site collection.
         */
        CreateGroups = 25,
        /**
         * Create and change permission levels on the Site and assign permissions to users
         * and groups.
         */
        ManagePermissions = 26,
        /**
         * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
         * and WebDAV interfaces.
         */
        BrowseDirectories = 27,
        /**
         * View information about users of the Site.
         */
        BrowseUserInfo = 28,
        /**
         * Add or remove personal Web Parts on a Web Part Page.
         */
        AddDelPrivateWebParts = 29,
        /**
         * Update Web Parts to display personalized information.
         */
        UpdatePersonalWebParts = 30,
        /**
         * Grant the ability to perform all administration tasks for the Site as well as
         * manage content, activate, deactivate, or edit properties of Site scoped Features
         * through the object model or through the user interface (UI). When granted on the
         * root Site of a Site Collection, activate, deactivate, or edit properties of
         * site collection scoped Features through the object model. To browse to the Site
         * Collection Features page and activate or deactivate Site Collection scoped Features
         * through the UI, you must be a Site Collection administrator.
         */
        ManageWeb = 31,
        /**
         * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
         * SharePoint search if the list or document library has AnonymousSearchAccessList set.
         */
        AnonymousSearchAccessWebLists = 32,
        /**
         * Use features that launch client applications. Otherwise, users must work on documents
         * locally and upload changes.
         */
        UseClientIntegration = 37,
        /**
         * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
         */
        UseRemoteAPIs = 38,
        /**
         * Manage alerts for all users of the Site.
         */
        ManageAlerts = 39,
        /**
         * Create e-mail alerts.
         */
        CreateAlerts = 40,
        /**
         * Allows a user to change his or her user information, such as adding a picture.
         */
        EditMyUserInfo = 41,
        /**
         * Enumerate permissions on Site, list, folder, document, or list item.
         */
        EnumeratePermissions = 63,
        /**
         * Has all permissions on the Site. Not available through the user interface.
         */
        FullMask = 65,
    }
    export interface FollowedContent {
        FollowedDocumentsUrl: string;
        FollowedSitesUrl: string;
    }
    export interface UserProfile {
        /**
         * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
         */
        FollowedContent?: FollowedContent;
        /**
         * The account name of the user. (SharePoint Online only)
         */
        AccountName?: string;
        /**
         * The display name of the user. (SharePoint Online only)
         */
        DisplayName?: string;
        /**
         * The FirstRun flag of the user. (SharePoint Online only)
         */
        O15FirstRunExperience?: number;
        /**
         * The personal site of the user.
         */
        PersonalSite?: string;
        /**
         * The capabilities of the user's personal site. Represents a bitwise PersonalSiteCapabilities value:
         * None = 0; Profile Value = 1; Social Value = 2; Storage Value = 4; MyTasksDashboard Value = 8; Education Value = 16; Guest Value = 32.
         */
        PersonalSiteCapabilities?: number;
        /**
         * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
         */
        PersonalSiteFirstCreationError?: string;
        /**
         * The date and time when the user's personal site was first created. (SharePoint Online only)
         */
        PersonalSiteFirstCreationTime?: Date;
        /**
         * The status for the state of the personal site instantiation
         */
        PersonalSiteInstantiationState?: number;
        /**
         * The date and time when the user's personal site was last created. (SharePoint Online only)
         */
        PersonalSiteLastCreationTime?: Date;
        /**
         * The number of attempts made to create the user's personal site. (SharePoint Online only)
         */
        PersonalSiteNumberOfRetries?: number;
        /**
         * Indicates whether the user's picture is imported from Exchange.
         */
        PictureImportEnabled?: boolean;
        /**
         * The public URL of the personal site of the current user. (SharePoint Online only)
         */
        PublicUrl?: string;
        /**
         * The URL used to create the user's personal site.
         */
        UrlToCreatePersonalSite?: string;
    }
    export interface HashTag {
        /**
         * The hash tag's internal name.
         */
        Name?: string;
        /**
         * The number of times that the hash tag is used.
         */
        UseCount?: number;
    }
    export interface HashTagCollection {
        Items: HashTag[];
    }
    export interface UserIdInfo {
        NameId?: string;
        NameIdIssuer?: string;
    }
    export enum PrincipalType {
        None = 0,
        User = 1,
        DistributionList = 2,
        SecurityGroup = 4,
        SharePointGroup = 8,
        All = 15,
    }
    export enum PrincipalSource {
        None = 0,
        UserInfoList = 1,
        Windows = 2,
        MembershipProvider = 4,
        RoleProvider = 8,
        All = 15,
    }
    export enum RoleType {
        None = 0,
        Guest = 1,
        Reader = 2,
        Contributor = 3,
        WebDesigner = 4,
        Administrator = 5,
    }
    export interface PrincipalInfo {
        Department: string;
        DisplayName: string;
        Email: string;
        JobTitle: string;
        LoginName: string;
        Mobile: string;
        PrincipalId: number;
        PrincipalType: PrincipalType;
        SIPAddress: string;
    }
    export interface DocumentLibraryInformation {
        AbsoluteUrl?: string;
        Modified?: Date;
        ModifiedFriendlyDisplay?: string;
        ServerRelativeUrl?: string;
        Title?: string;
    }
    export interface ContextInfo {
        FormDigestTimeoutSeconds?: number;
        FormDigestValue?: number;
        LibraryVersion?: string;
        SiteFullUrl?: string;
        SupportedSchemaVersions?: string[];
        WebFullUrl?: string;
    }
    export interface RenderListData {
        Row: any[];
        FirstRow: number;
        FolderPermissions: string;
        LastRow: number;
        FilterLink: string;
        ForceNoHierarchy: string;
        HierarchyHasIndention: string;
    }
    export enum PageType {
        Invalid = -1,
        DefaultView = 0,
        NormalView = 1,
        DialogView = 2,
        View = 3,
        DisplayForm = 4,
        DisplayFormDialog = 5,
        EditForm = 6,
        EditFormDialog = 7,
        NewForm = 8,
        NewFormDialog = 9,
        SolutionForm = 10,
        PAGE_MAXITEMS = 11,
    }
    export interface ListFormData {
        ContentType?: string;
        Title?: string;
        Author?: string;
        Editor?: string;
        Created?: Date;
        Modified: Date;
        Attachments?: any;
        ListSchema?: any;
        FormControlMode?: number;
        FieldControlModes?: {
            Title?: number;
            Author?: number;
            Editor?: number;
            Created?: number;
            Modified?: number;
            Attachments?: number;
        };
        WebAttributes?: {
            WebUrl?: string;
            EffectivePresenceEnabled?: boolean;
            AllowScriptableWebParts?: boolean;
            PermissionCustomizePages?: boolean;
            LCID?: number;
            CurrentUserId?: number;
        };
        ItemAttributes?: {
            Id?: number;
            FsObjType?: number;
            ExternalListItem?: boolean;
            Url?: string;
            EffectiveBasePermissionsLow?: number;
            EffectiveBasePermissionsHigh?: number;
        };
        ListAttributes?: {
            Id?: string;
            BaseType?: number;
            Direction?: string;
            ListTemplateType?: number;
            DefaultItemOpen?: number;
            EnableVersioning?: boolean;
        };
        CSRCustomLayout?: boolean;
        PostBackRequired?: boolean;
        PreviousPostBackHandled?: boolean;
        UploadMode?: boolean;
        SubmitButtonID?: string;
        ItemContentTypeName?: string;
        ItemContentTypeId?: string;
        JSLinks?: string;
    }
    export enum SharingLinkKind {
        /**
         * Uninitialized link
         */
        Uninitialized = 0,
        /**
         * Direct link to the object being shared
         */
        Direct = 1,
        /**
         * Organization-shareable link to the object being shared with view permissions
         */
        OrganizationView = 2,
        /**
         * Organization-shareable link to the object being shared with edit permissions
         */
        OrganizationEdit = 3,
        /**
         * View only anonymous link
         */
        AnonymousView = 4,
        /**
         * Read/Write anonymous link
         */
        AnonymousEdit = 5,
        /**
         * Flexible sharing Link where properties can change without affecting link URL
         */
        Flexible = 6,
    }
    export interface ShareObjectOptions {
        url?: string;
        loginNames?: string | string[];
        role: SharingRole;
        emailData?: SharingEmailData;
        group?: RoleType;
        propagateAcl?: boolean;
        includeAnonymousLinkInEmail?: boolean;
        useSimplifiedRoles?: boolean;
    }
    /**
     * Indicates the role of the sharing link
     */
    export enum SharingRole {
        None = 0,
        View = 1,
        Edit = 2,
        Owner = 3,
    }
    /**
     * Represents email data.
     */
    export interface SharingEmailData {
        /**
         * The e-mail subject.
         */
        subject?: string;
        /**
         * The e-mail body.
         */
        body: string;
    }
    export interface ShareLinkSettings {
        /**
         * The optional unique identifier of an existing sharing link to be retrieved and updated if necessary.
         */
        shareId?: string;
        /**
         * The kind of the sharing link to be created.
         */
        linkKind: SharingLinkKind;
        /**
         * A date/time string for which the format conforms to the ISO 8601:2004(E) complete representation for calendar date and time of day and
         * which represents the time and date of expiry for the anonymous link. Both the minutes and hour value must be specified for the
         * difference between the local and UTC time. Midnight is represented as 00:00:00.
         */
        expiration?: string;
        /**
         * The role to be used for the sharing link. This is required for Flexible links, and ignored for legacy link kinds.
         */
        role?: SharingRole;
        /**
         * Indicates if the sharing link, should support anonymous access. This is required for Flexible links, and ignored for legacy link kinds.
         */
        allowAnonymousAccess?: boolean;
    }
    export interface ShareLinkRequest {
        /**
         * A string of JSON representing users in people picker format. Only needed if an e-mail notification should be sent.
         */
        peoplePickerInput?: string;
        /**
         * Whether to create the link or not if it doesn't exist yet.
         */
        createLink: boolean;
        /**
         * The e-mail data. Only needed if an e-mail notification should be sent.
         */
        emailData?: SharingEmailData;
        /**
         * The settings for the sharing link to be created/updated
         */
        settings: ShareLinkSettings;
    }
    /**
     * Represents a response for sharing a link
     */
    export interface ShareLinkResponse {
        /**
         * A SharingLinkInfo that represents the sharing link. Will be populated if sharing operation is returning a sharing link.
         */
        sharingLinkInfo: SharingLinkInfo;
    }
    export interface SharingLinkInfo {
        AllowsAnonymousAccess: boolean;
        Created: string;
        CreatedBy: PrincipalInfo;
        Expiration: string;
        IsActive: boolean;
        IsEditLink: boolean;
        IsFormsLink: boolean;
        IsUnhealthy: boolean;
        LastModified: string;
        LastModifiedBy: PrincipalInfo;
        LinkKind: SharingLinkKind;
        ShareId: string;
        Url: string;
    }
    export enum SharingOperationStatusCode {
        /**
         * The share operation completed without errors.
         */
        CompletedSuccessfully = 0,
        /**
         * The share operation completed and generated requests for access.
         */
        AccessRequestsQueued = 1,
        /**
         * The share operation failed as there were no resolved users.
         */
        NoResolvedUsers = -1,
        /**
         * The share operation failed due to insufficient permissions.
         */
        AccessDenied = -2,
        /**
         * The share operation failed when attempting a cross site share, which is not supported.
         */
        CrossSiteRequestNotSupported = -3,
        /**
         * The sharing operation failed due to an unknown error.
         */
        UnknowError = -4,
        /**
         * The text you typed is too long. Please shorten it.
         */
        EmailBodyTooLong = -5,
        /**
         * The maximum number of unique scopes in the list has been exceeded.
         */
        ListUniqueScopesExceeded = -6,
        /**
         * The share operation failed because a sharing capability is disabled in the site.
         */
        CapabilityDisabled = -7,
        /**
         * The specified object for the share operation is not supported.
         */
        ObjectNotSupported = -8,
        /**
         * A SharePoint group cannot contain another SharePoint group.
         */
        NestedGroupsNotSupported = -9,
    }
    export interface SharingResult {
        /**
         * The relative URL of a page which can be navigated to, to show permissions.
         */
        PermissionsPageRelativeUrl?: string;
        /**
         * A collection of users which have new pending access requests as a result of sharing.
         */
        UsersWithAccessRequests?: any[];
        /**
         * An enumeration which summarizes the result of the sharing operation.
         */
        StatusCode?: SharingOperationStatusCode;
        /**
         * An error message about the failure if sharing was unsuccessful.
         */
        ErrorMessage?: string;
        /**
         * A list of UserSharingResults from attempting to share a securable with unique permissions.
         */
        UniquelyPermissionedUsers?: UserSharingResult[];
        /**
         * Groups which were granted permissions.
         */
        GroupsSharedWith?: any[];
        /**
         * The SharePoint group users were added to, if any were added to a group.
         */
        GroupUsersAddedTo?: any;
        /**
         * A list of users being added to a SharePoint permissions goup
         */
        UsersAddedToGroup?: UserSharingResult[];
        /**
         * A list of SPInvitationCreationResult for external users being invited to have access.
         */
        InvitedUsers?: SPInvitationCreationResult[];
        /**
         * The name of the securable being shared.
         */
        Name?: string;
        /**
         * The url of the securable being shared.
         */
        Url?: string;
        /**
         * IconUrl
         */
        IconUrl?: string;
    }
    export interface UserSharingResult {
        IsUserKnown?: boolean;
        Status?: boolean;
        Message?: string;
        User?: string;
        DisplayName?: string;
        Email?: string;
        CurrentRole?: SharingRole;
        AllowedRoles?: SharingRole[];
        InvitationLink?: string;
    }
    export interface SPInvitationCreationResult {
        Succeeded?: boolean;
        Email?: string;
        InvitationLink?: string;
    }
    export interface SharingRecipient {
        email?: string;
        alias?: string;
    }
    export interface SharingEntityPermission {
        /**
         * The Input Entity provided to the Call.
         */
        inputEntity: string;
        /**
         * The Resolved Entity after resolving using PeoplePicker API.
         */
        resolvedEntity: string;
        /**
         * Does the Entity have Access to the Securable Object
         */
        hasAccess: boolean;
        /**
         * Role of the Entity on ListItem
         */
        role: SharingRole;
    }
    export interface SharingInformationRequest {
        /**
         * Max Principal's to return.
         */
        maxPrincipalsToReturn: number;
        /**
         * Supported Features (For future use by Office Client).
         */
        clientSupportedFeatures: string;
    }
    export interface ObjectSharingSettings {
        /**
         * The URL pointing to the containing SPWeb object
         */
        WebUrl: string;
        /**
         * The unique ID of the parent list (if applicable)
         */
        ListId?: string;
        /**
         * The list item ID (if applicable)
         */
        ItemId?: string;
        /**
         * The object title
         */
        ItemName: string;
        /**
         * The server relative object URL
         */
        ItemUrl: string;
        /**
         * Contains information about the sharing state of a shareable object
         */
        ObjectSharingInformation: any;
        /**
         * Boolean indicating whether the sharing context operates under the access request mode
         */
        AccessRequestMode: boolean;
        /**
         * Boolean indicating whether the sharing context operates under the permissions only mode
         * (i.e. adding to a group or hiding the groups dropdown in the SharePoint UI)
         */
        PermissionsOnlyMode: boolean;
        /**
         * URL of the site from which the shared object inherits permissions
         */
        InheritingWebLink: string;
        /**
         * Boolean flag denoting if guest users are enabled for the site collection
         */
        ShareByEmailEnabled: boolean;
        /**
         * Boolean indicating whether the current user is a guest user
         */
        IsGuestUser: boolean;
        /**
         * Boolean indicating whether the site has the standard "Editor" role
         */
        HasEditRole: boolean;
        /**
         * Boolean indicating whether the site has the standard "Reader" role
         */
        HasReadRole: boolean;
        /**
         * Boolean indicating whether the object to share is a picture library
         */
        IsPictureLibrary: boolean;
        /**
         * Boolean indicating whether the folder object can be shared
         */
        CanShareFolder: boolean;
        /**
         * Boolean indicating whether email invitations can be sent
         */
        CanSendEmail: boolean;
        /**
         * Default share link type
         */
        DefaultShareLinkType: SharingLinkKind;
        /**
         * Boolean indicating whether the object to share supports ACL propagation
         */
        SupportsAclPropagation: boolean;
        /**
         * Boolean indicating whether the current user can only share within the tenancy
         */
        CanCurrentUserShareInternally: boolean;
        /**
         * Boolean indicating whether the current user can share outside the tenancy, by inviting external users
         */
        CanCurrentUserShareExternally: boolean;
        /**
         * Boolean indicating whether the current user can retrieve an anonymous View link, if one has already been created
         * If one has not been created, the user cannot create one
         */
        CanCurrentUserRetrieveReadonlyLink: boolean;
        /**
         * Boolean indicating whether the current user can create or disable an anonymous Edit link
         */
        CanCurrentUserManageReadonlyLink: boolean;
        /**
         * Boolean indicating whether the current user can retrieve an anonymous Edit link, if one has already been created
         * If one has not been created, the user cannot create one
         */
        CanCurrentUserRetrieveReadWriteLink: boolean;
        /**
         * Boolean indicating whether the current user can create or disable an anonymous Edit link
         */
        CanCurrentUserManageReadWriteLink: boolean;
        /**
         * Boolean indicating whether the current user can retrieve an organization View link, if one has already been created
         * If one has not been created, the user cannot create one
         */
        CanCurrentUserRetrieveOrganizationReadonlyLink: boolean;
        /**
         * Boolean indicating whether the current user can create or disable an organization Edit link
         */
        CanCurrentUserManageOrganizationReadonlyLink: boolean;
        /**
         * Boolean indicating whether the current user can retrieve an organization Edit link, if one has already been created
         * If one has not been created, the user cannot create one
         */
        CanCurrentUserRetrieveOrganizationReadWriteLink: boolean;
        /**
         * Boolean indicating whether the current user can create or disable an organization Edit link
         */
        CanCurrentUserManageOrganizationReadWriteLink: boolean;
        /**
         * Boolean indicating whether the current user can make use of Share-By-Link
         */
        CanSendLink: boolean;
        /**
         * Boolean indicating whether the client logic should warn the user
         * that they are about to share with external email addresses.
         */
        ShowExternalSharingWarning: boolean;
        /**
         * A list of SharingPermissionInformation objects that can be used to share
         */
        SharingPermissions: any[];
        /**
         * A dictionary object that lists the display name and the id of
         * the SharePoint simplified roles (edit, view)
         */
        SimplifiedRoles: {
            [key: string]: string;
        };
        /**
         * A dictionary object that lists the display name and the id of the SharePoint groups
         */
        GroupsList: {
            [key: string]: string;
        };
        /**
         * A dictionary object that lists the display name and the id of the SharePoint regular roles
         */
        Roles: {
            [key: string]: string;
        };
        /**
         * An object containing the SharePoint UI specific sharing settings.
         */
        SharePointSettings: any;
        /**
         * Boolean indicating whether the current user is a site collection administrator
         */
        IsUserSiteAdmin: boolean;
        /**
         * A value that indicates number of days an anonymous link can be valid before it expires
         */
        RequiredAnonymousLinkExpirationInDays: number;
    }
    export interface SharingInformation {
        /**
         * External Sharing.
         */
        canAddExternalPrincipal?: boolean;
        /**
         * Internal Sharing.
         */
        canAddInternalPrincipal?: boolean;
        /**
         * Can Send Email.
         */
        canSendEmail?: boolean;
        /**
         * Can Use Simplified Roles present in Roles Enum.
         */
        canUseSimplifiedRoles?: boolean;
        /**
         * Has Unique Permissions.
         */
        hasUniquePermissions?: boolean;
        /**
         * Current Users Role on the Item.
         */
        currentRole?: SharingRole;
        /**
         * Does the User+Item require Approval from Admin for Sharing.
         */
        requiresAccessApproval?: boolean;
        /**
         * (Owners only)Whether there are pending access requests for the securable object.
         */
        hasPendingAccessRequests?: boolean;
        /**
         * (Owners only)The link to the access requests page for the securable object, or an empty string if the link is not available.
         */
        pendingAccessRequestsLink?: string;
        /**
         * sharedObjectType
         */
        sharedObjectType?: SPSharedObjectType;
        /**
         * Url for the Securable Object (Encoded).
         */
        directUrl?: string;
        /**
         * Parent Web Url for the Securable Object (Encoded).
         */
        webUrl?: string;
        /**
         * Default SharingLinkKind.
         */
        defaultLinkKind?: SharingLinkKind;
        /**
         * Tenant's SharingDomainRestrictionMode.
         */
        domainRestrictionMode?: SharingDomainRestrictionMode;
        /**
         * Tenant's RestrictedDomains.
         */
        RestrictedDomains?: string;
        /**
         * Tenant's Anonymous Link Expiration Restriction in Days.
         */
        anonymousLinkExpirationRestrictionDays?: number;
        /**
         * The PermissionCollection that are on the Securable Object (Princpals & Links)
         */
        permissionsInformation?: any;
        /**
         * PickerSettings used by the PeoplePicker Control.
         */
        pickerSettings?: any;
    }
    export enum SPSharedObjectType {
        Unknown = 0,
        File = 1,
        Folder = 2,
        Item = 3,
        List = 4,
        Web = 5,
        Max = 6,
    }
    export enum SharingDomainRestrictionMode {
        None = 0,
        AllowList = 1,
        BlockList = 2,
    }
    export interface EmailProperties {
        To: string[];
        CC?: string[];
        BCC?: string[];
        Subject: string;
        Body: string;
        AdditionalHeaders?: TypedHash<string>;
        From?: string;
    }
    export interface WikiPageCreationInformation {
        /**
         * The server-relative-url of the wiki page to be created.
         */
        ServerRelativeUrl: string;
        /**
         * The wiki content to be set in the wiki page.
         */
        WikiHtmlContent: string;
    }
}
declare module "sharepoint/roles" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    import { SiteGroups } from "sharepoint/sitegroups";
    import { BasePermissions } from "sharepoint/types";
    import { TypedHash } from "collections/collections";
    /**
     * Describes a set of role assignments for the current scope
     *
     */
    export class RoleAssignments extends QueryableCollection {
        /**
         * Creates a new instance of the RoleAssignments class
         *
         * @param baseUrl The url or Queryable which forms the parent of this role assignments collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection
         *
         * @param principalId The id of the user or group to assign permissions to
         * @param roleDefId The id of the role definition that defines the permissions to assign
         *
         */
        add(principalId: number, roleDefId: number): Promise<void>;
        /**
         * Removes the role assignment with the specified principal and role definition from the collection
         *
         * @param principalId The id of the user or group in the role assignment
         * @param roleDefId The id of the role definition in the role assignment
         *
         */
        remove(principalId: number, roleDefId: number): Promise<void>;
        /**
         * Gets the role assignment associated with the specified principal id from the collection.
         *
         * @param id The id of the role assignment
         */
        getById(id: number): RoleAssignment;
    }
    /**
     * Describes a role assignment
     *
     */
    export class RoleAssignment extends QueryableInstance {
        /**
         * Gets the groups that directly belong to the access control list (ACL) for this securable object
         *
         */
        readonly groups: SiteGroups;
        /**
         * Gets the role definition bindings for this role assignment
         *
         */
        readonly bindings: RoleDefinitionBindings;
        /**
         * Deletes this role assignment
         *
         */
        delete(): Promise<void>;
    }
    /**
     * Describes a collection of role definitions
     *
     */
    export class RoleDefinitions extends QueryableCollection {
        /**
         * Creates a new instance of the RoleDefinitions class
         *
         * @param baseUrl The url or Queryable which forms the parent of this role definitions collection
         *
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets the role definition with the specified id from the collection
         *
         * @param id The id of the role definition
         *
         */
        getById(id: number): RoleDefinition;
        /**
         * Gets the role definition with the specified name
         *
         * @param name The name of the role definition
         *
         */
        getByName(name: string): RoleDefinition;
        /**
         * Gets the role definition with the specified role type
         *
         * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
         *
         */
        getByType(roleTypeKind: number): RoleDefinition;
        /**
         * Creates a role definition
         *
         * @param name The new role definition's name
         * @param description The new role definition's description
         * @param order The order in which the role definition appears
         * @param basePermissions The permissions mask for this role definition
         *
         */
        add(name: string, description: string, order: number, basePermissions: BasePermissions): Promise<RoleDefinitionAddResult>;
    }
    /**
     * Describes a role definition
     *
     */
    export class RoleDefinition extends QueryableInstance {
        /**
         * Updates this role definition with the supplied properties
         *
         * @param properties A plain object hash of values to update for the role definition
         */
        update(properties: TypedHash<any>): Promise<RoleDefinitionUpdateResult>;
        /**
         * Deletes this role definition
         *
         */
        delete(): Promise<void>;
    }
    /**
     * Result from updating a role definition
     *
     */
    export interface RoleDefinitionUpdateResult {
        definition: RoleDefinition;
        data: any;
    }
    /**
     * Result from adding a role definition
     *
     */
    export interface RoleDefinitionAddResult {
        definition: RoleDefinition;
        data: any;
    }
    /**
     * Describes the role definitons bound to a role assignment object
     *
     */
    export class RoleDefinitionBindings extends QueryableCollection {
        /**
         * Creates a new instance of the RoleDefinitionBindings class
         *
         * @param baseUrl The url or Queryable which forms the parent of this role definition bindings collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
    }
}
declare module "sharepoint/queryablesecurable" {
    import { RoleAssignments } from "sharepoint/roles";
    import { BasePermissions, PermissionKind } from "sharepoint/types";
    import { QueryableInstance } from "sharepoint/queryable";
    export class QueryableSecurable extends QueryableInstance {
        /**
         * Gets the set of role assignments for this item
         *
         */
        readonly roleAssignments: RoleAssignments;
        /**
         * Gets the closest securable up the security hierarchy whose permissions are applied to this list item
         *
         */
        readonly firstUniqueAncestorSecurableObject: QueryableInstance;
        /**
         * Gets the effective permissions for the user supplied
         *
         * @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
         */
        getUserEffectivePermissions(loginName: string): Promise<BasePermissions>;
        /**
         * Gets the effective permissions for the current user
         */
        getCurrentUserEffectivePermissions(): Promise<BasePermissions>;
        /**
         * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
         *
         * @param copyRoleAssignments If true the permissions are copied from the current parent scope
         * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
         */
        breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Promise<any>;
        /**
         * Removes the local role assignments so that it re-inherit role assignments from the parent object.
         *
         */
        resetRoleInheritance(): Promise<any>;
        /**
         * Determines if a given user has the appropriate permissions
         *
         * @param loginName The user to check
         * @param permission The permission being checked
         */
        userHasPermissions(loginName: string, permission: PermissionKind): Promise<boolean>;
        /**
         * Determines if the current user has the requested permissions
         *
         * @param permission The permission we wish to check
         */
        currentUserHasPermissions(permission: PermissionKind): Promise<boolean>;
        /**
         * Taken from sp.js, checks the supplied permissions against the mask
         *
         * @param value The security principal's permissions on the given object
         * @param perm The permission checked against the value
         */
        hasPermissions(value: BasePermissions, perm: PermissionKind): boolean;
    }
}
declare module "sharepoint/queryableshareable" {
    import { Queryable, QueryableInstance } from "sharepoint/queryable";
    import { QueryableSecurable } from "sharepoint/queryablesecurable";
    import { RoleType, SharingLinkKind, ShareLinkResponse, SharingRole, SharingEmailData, SharingResult, SharingRecipient, SharingEntityPermission, SharingInformationRequest, ObjectSharingSettings, SharingInformation, ShareObjectOptions } from "sharepoint/types";
    /**
     * Internal helper class used to augment classes to include sharing functionality
     */
    export class QueryableShareable extends Queryable {
        /**
         * Gets a sharing link for the supplied
         *
         * @param kind The kind of link to share
         * @param expiration The optional expiration for this link
         */
        getShareLink(kind: SharingLinkKind, expiration?: Date): Promise<ShareLinkResponse>;
        /**
         * Shares this instance with the supplied users
         *
         * @param loginNames Resolved login names to share
         * @param role The role
         * @param requireSignin True to require the user is authenticated, otherwise false
         * @param propagateAcl True to apply this share to all children
         * @param emailData If supplied an email will be sent with the indicated properties
         */
        shareWith(loginNames: string | string[], role: SharingRole, requireSignin?: boolean, propagateAcl?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
        /**
         * Shares an object based on the supplied options
         *
         * @param options The set of options to send to the ShareObject method
         * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
         */
        shareObject(options: ShareObjectOptions, bypass?: boolean): Promise<SharingResult>;
        /**
         * Calls the web's UnshareObject method
         *
         * @param url The url of the object to unshare
         */
        unshareObjectWeb(url: string): Promise<SharingResult>;
        /**
         * Checks Permissions on the list of Users and returns back role the users have on the Item.
         *
         * @param recipients The array of Entities for which Permissions need to be checked.
         */
        checkPermissions(recipients: SharingRecipient[]): Promise<SharingEntityPermission[]>;
        /**
         * Get Sharing Information.
         *
         * @param request The SharingInformationRequest Object.
         */
        getSharingInformation(request?: SharingInformationRequest): Promise<SharingInformation>;
        /**
         * Gets the sharing settings of an item.
         *
         * @param useSimplifiedRoles Determines whether to use simplified roles.
         */
        getObjectSharingSettings(useSimplifiedRoles?: boolean): Promise<ObjectSharingSettings>;
        /**
         * Unshares this object
         */
        unshareObject(): Promise<SharingResult>;
        /**
         * Deletes a link by type
         *
         * @param kind Deletes a sharing link by the kind of link
         */
        deleteLinkByKind(kind: SharingLinkKind): Promise<void>;
        /**
         * Removes the specified link to the item.
         *
         * @param kind The kind of link to be deleted.
         * @param shareId
         */
        unshareLink(kind: SharingLinkKind, shareId?: string): Promise<void>;
        /**
         * Calculates the roleValue string used in the sharing query
         *
         * @param role The Sharing Role
         * @param group The Group type
         */
        protected getRoleValue(role: SharingRole, group: RoleType): Promise<string>;
        private getShareObjectWeb(candidate);
        private sendShareObjectRequest(options);
    }
    export class QueryableShareableWeb extends QueryableSecurable {
        /**
         * Shares this web with the supplied users
         * @param loginNames The resolved login names to share
         * @param role The role to share this web
         * @param emailData Optional email data
         */
        shareWith(loginNames: string | string[], role?: SharingRole, emailData?: SharingEmailData): Promise<SharingResult>;
        /**
         * Provides direct access to the static web.ShareObject method
         *
         * @param url The url to share
         * @param loginNames Resolved loginnames string[] of a single login name string
         * @param roleValue Role value
         * @param emailData Optional email data
         * @param groupId Optional group id
         * @param propagateAcl
         * @param includeAnonymousLinkInEmail
         * @param useSimplifiedRoles
         */
        shareObject(url: string, loginNames: string | string[], role: SharingRole, emailData?: SharingEmailData, group?: RoleType, propagateAcl?: boolean, includeAnonymousLinkInEmail?: boolean, useSimplifiedRoles?: boolean): Promise<SharingResult>;
        /**
         * Supplies a method to pass any set of arguments to ShareObject
         *
         * @param options The set of options to send to ShareObject
         */
        shareObjectRaw(options: any): Promise<SharingResult>;
        /**
         * Unshares the object
         *
         * @param url The url of the object to stop sharing
         */
        unshareObject(url: string): Promise<SharingResult>;
    }
    export class QueryableShareableItem extends QueryableSecurable {
        /**
         * Gets a link suitable for sharing for this item
         *
         * @param kind The type of link to share
         * @param expiration The optional expiration date
         */
        getShareLink(kind?: SharingLinkKind, expiration?: Date): Promise<ShareLinkResponse>;
        /**
         * Shares this item with one or more users
         *
         * @param loginNames string or string[] of resolved login names to which this item will be shared
         * @param role The role (View | Edit) applied to the share
         * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
         */
        shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
        /**
         * Checks Permissions on the list of Users and returns back role the users have on the Item.
         *
         * @param recipients The array of Entities for which Permissions need to be checked.
         */
        checkSharingPermissions(recipients: SharingRecipient[]): Promise<SharingEntityPermission[]>;
        /**
         * Get Sharing Information.
         *
         * @param request The SharingInformationRequest Object.
         */
        getSharingInformation(request?: SharingInformationRequest): Promise<SharingInformation>;
        /**
         * Gets the sharing settings of an item.
         *
         * @param useSimplifiedRoles Determines whether to use simplified roles.
         */
        getObjectSharingSettings(useSimplifiedRoles?: boolean): Promise<ObjectSharingSettings>;
        /**
         * Unshare this item
         */
        unshare(): Promise<SharingResult>;
        /**
         * Deletes a sharing link by kind
         *
         * @param kind Deletes a sharing link by the kind of link
         */
        deleteSharingLinkByKind(kind: SharingLinkKind): Promise<void>;
        /**
         * Removes the specified link to the item.
         *
         * @param kind The kind of link to be deleted.
         * @param shareId
         */
        unshareLink(kind: SharingLinkKind, shareId?: string): Promise<void>;
    }
    export class FileFolderShared extends QueryableInstance {
        /**
         * Gets a link suitable for sharing
         *
         * @param kind The kind of link to get
         * @param expiration Optional, an expiration for this link
         */
        getShareLink(kind?: SharingLinkKind, expiration?: Date): Promise<ShareLinkResponse>;
        /**
             * Checks Permissions on the list of Users and returns back role the users have on the Item.
             *
             * @param recipients The array of Entities for which Permissions need to be checked.
             */
        checkSharingPermissions(recipients: SharingRecipient[]): Promise<SharingEntityPermission[]>;
        /**
         * Get Sharing Information.
         *
         * @param request The SharingInformationRequest Object.
         */
        getSharingInformation(request?: SharingInformationRequest): Promise<SharingInformation>;
        /**
         * Gets the sharing settings of an item.
         *
         * @param useSimplifiedRoles Determines whether to use simplified roles.
         */
        getObjectSharingSettings(useSimplifiedRoles?: boolean): Promise<ObjectSharingSettings>;
        /**
         * Unshare this item
         */
        unshare(): Promise<SharingResult>;
        /**
         * Deletes a sharing link by the kind of link
         *
         * @param kind The kind of link to be deleted.
         */
        deleteSharingLinkByKind(kind: SharingLinkKind): Promise<void>;
        /**
         * Removes the specified link to the item.
         *
         * @param kind The kind of link to be deleted.
         * @param shareId The share id to delete
         */
        unshareLink(kind: SharingLinkKind, shareId?: string): Promise<void>;
        /**
         * For files and folders we need to use the associated item end point
         */
        protected getShareable(): Promise<QueryableShareable>;
    }
    export class QueryableShareableFile extends FileFolderShared {
        /**
         * Shares this item with one or more users
         *
         * @param loginNames string or string[] of resolved login names to which this item will be shared
         * @param role The role (View | Edit) applied to the share
         * @param shareEverything Share everything in this folder, even items with unique permissions.
         * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
         * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
         */
        shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
    }
    export class QueryableShareableFolder extends FileFolderShared {
        /**
         * Shares this item with one or more users
         *
         * @param loginNames string or string[] of resolved login names to which this item will be shared
         * @param role The role (View | Edit) applied to the share
         * @param shareEverything Share everything in this folder, even items with unique permissions.
         * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
         * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
         */
        shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, shareEverything?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
    }
}
declare module "sharepoint/webparts" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    export class LimitedWebPartManager extends Queryable {
        /**
         * Gets the set of web part definitions contained by this web part manager
         *
         */
        readonly webparts: WebPartDefinitions;
        /**
         * Exports a webpart definition
         *
         * @param id the GUID id of the definition to export
         */
        export(id: string): Promise<string>;
        /**
         * Imports a webpart
         *
         * @param xml webpart definition which must be valid XML in the .dwp or .webpart format
         */
        import(xml: string): Promise<any>;
    }
    export class WebPartDefinitions extends QueryableCollection {
        /**
         * Gets a web part definition from the collection by id
         *
         * @param id The storage ID of the SPWebPartDefinition to retrieve
         */
        getById(id: string): WebPartDefinition;
        /**
         * Gets a web part definition from the collection by storage id
         *
         * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
         */
        getByControlId(id: string): WebPartDefinition;
    }
    export class WebPartDefinition extends QueryableInstance {
        /**
         * Gets the webpart information associated with this definition
         */
        readonly webpart: WebPart;
        /**
         * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
         */
        saveChanges(): Promise<any>;
        /**
         * Moves the Web Part to a different location on a Web Part Page
         *
         * @param zoneId The ID of the Web Part Zone to which to move the Web Part
         * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
         */
        moveTo(zoneId: string, zoneIndex: number): Promise<void>;
        /**
         * Closes the Web Part. If the Web Part is already closed, this method does nothing
         */
        close(): Promise<void>;
        /**
         * Opens the Web Part. If the Web Part is already closed, this method does nothing
         */
        open(): Promise<void>;
        /**
         * Removes a webpart from a page, all settings will be lost
         */
        delete(): Promise<void>;
    }
    export class WebPart extends QueryableInstance {
        /**
         * Creates a new instance of the WebPart class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         * @param path Optional, if supplied will be appended to the supplied baseUrl
         */
        constructor(baseUrl: string | Queryable, path?: string);
    }
}
declare module "sharepoint/files" {
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    import { LimitedWebPartManager } from "sharepoint/webparts";
    import { Item } from "sharepoint/items";
    import { QueryableShareableFile } from "sharepoint/queryableshareable";
    export interface ChunkedFileUploadProgressData {
        stage: "starting" | "continue" | "finishing";
        blockNumber: number;
        totalBlocks: number;
        chunkSize: number;
        currentPointer: number;
        fileSize: number;
    }
    /**
     * Describes a collection of File objects
     *
     */
    export class Files extends QueryableCollection {
        /**
         * Creates a new instance of the Files class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a File by filename
         *
         * @param name The name of the file, including extension.
         */
        getByName(name: string): File;
        /**
         * Uploads a file. Not supported for batching
         *
         * @param url The folder-relative url of the file.
         * @param content The file contents blob.
         * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
         * @returns The new File and the raw response.
         */
        add(url: string, content: string | ArrayBuffer | Blob, shouldOverWrite?: boolean): Promise<FileAddResult>;
        /**
         * Uploads a file. Not supported for batching
         *
         * @param url The folder-relative url of the file.
         * @param content The Blob file content to add
         * @param progress A callback function which can be used to track the progress of the upload
         * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
         * @param chunkSize The size of each file slice, in bytes (default: 10485760)
         * @returns The new File and the raw response.
         */
        addChunked(url: string, content: Blob, progress?: (data: ChunkedFileUploadProgressData) => void, shouldOverWrite?: boolean, chunkSize?: number): Promise<FileAddResult>;
        /**
         * Adds a ghosted file to an existing list or document library. Not supported for batching.
         *
         * @param fileUrl The server-relative url where you want to save the file.
         * @param templateFileType The type of use to create the file.
         * @returns The template file that was added and the raw response.
         */
        addTemplateFile(fileUrl: string, templateFileType: TemplateFileType): Promise<FileAddResult>;
    }
    /**
     * Describes a single File instance
     *
     */
    export class File extends QueryableShareableFile {
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         *
         */
        readonly listItemAllFields: QueryableCollection;
        /**
         * Gets a collection of versions
         *
         */
        readonly versions: Versions;
        /**
         * Approves the file submitted for content approval with the specified comment.
         * Only documents in lists that are enabled for content approval can be approved.
         *
         * @param comment The comment for the approval.
         */
        approve(comment?: string): Promise<void>;
        /**
         * Stops the chunk upload session without saving the uploaded data. Does not support batching.
         * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
         * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         *
         * @param uploadId The unique identifier of the upload session.
         */
        cancelUpload(uploadId: string): Promise<void>;
        /**
         * Checks the file in to a document library based on the check-in type.
         *
         * @param comment A comment for the check-in. Its length must be <= 1023.
         * @param checkinType The check-in type for the file.
         */
        checkin(comment?: string, checkinType?: CheckinType): Promise<void>;
        /**
         * Checks out the file from a document library.
         */
        checkout(): Promise<void>;
        /**
         * Copies the file to the destination url.
         *
         * @param url The absolute url or server relative url of the destination file path to copy to.
         * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
         */
        copyTo(url: string, shouldOverWrite?: boolean): Promise<void>;
        /**
         * Delete this file.
         *
         * @param eTag Value used in the IF-Match header, by default "*"
         */
        delete(eTag?: string): Promise<void>;
        /**
         * Denies approval for a file that was submitted for content approval.
         * Only documents in lists that are enabled for content approval can be denied.
         *
         * @param comment The comment for the denial.
         */
        deny(comment?: string): Promise<void>;
        /**
         * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
         * An exception is thrown if the file is not an ASPX page.
         *
         * @param scope The WebPartsPersonalizationScope view on the Web Parts page.
         */
        getLimitedWebPartManager(scope?: WebPartsPersonalizationScope): LimitedWebPartManager;
        /**
         * Moves the file to the specified destination url.
         *
         * @param url The absolute url or server relative url of the destination file path to move to.
         * @param moveOperations The bitwise MoveOperations value for how to move the file.
         */
        moveTo(url: string, moveOperations?: MoveOperations): Promise<void>;
        /**
         * Submits the file for content approval with the specified comment.
         *
         * @param comment The comment for the published file. Its length must be <= 1023.
         */
        publish(comment?: string): Promise<void>;
        /**
         * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         *
         * @returns The GUID of the recycled file.
         */
        recycle(): Promise<string>;
        /**
         * Reverts an existing checkout for the file.
         *
         */
        undoCheckout(): Promise<void>;
        /**
         * Removes the file from content approval or unpublish a major version.
         *
         * @param comment The comment for the unpublish operation. Its length must be <= 1023.
         */
        unpublish(comment?: string): Promise<void>;
        /**
         * Gets the contents of the file as text. Not supported in batching.
         *
         */
        getText(): Promise<string>;
        /**
         * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
         *
         */
        getBlob(): Promise<Blob>;
        /**
         * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
         */
        getBuffer(): Promise<ArrayBuffer>;
        /**
         * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
         */
        getJSON(): Promise<any>;
        /**
         * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
         *
         * @param content The file content
         *
         */
        setContent(content: string | ArrayBuffer | Blob): Promise<File>;
        /**
         * Gets the associated list item for this folder, loading the default properties
         */
        getItem<T>(...selects: string[]): Promise<Item & T>;
        /**
         * Sets the contents of a file using a chunked upload approach. Not supported in batching.
         *
         * @param file The file to upload
         * @param progress A callback function which can be used to track the progress of the upload
         * @param chunkSize The size of each file slice, in bytes (default: 10485760)
         */
        setContentChunked(file: Blob, progress?: (data: ChunkedFileUploadProgressData) => void, chunkSize?: number): Promise<File>;
        /**
         * Starts a new chunk upload session and uploads the first fragment.
         * The current file content is not changed when this method completes.
         * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
         * The upload session ends either when you use the CancelUpload method or when you successfully
         * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
         * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
         * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
         * This method is currently available only on Office 365.
         *
         * @param uploadId The unique identifier of the upload session.
         * @param fragment The file contents.
         * @returns The size of the total uploaded data in bytes.
         */
        private startUpload(uploadId, fragment);
        /**
         * Continues the chunk upload session with an additional fragment.
         * The current file content is not changed.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         *
         * @param uploadId The unique identifier of the upload session.
         * @param fileOffset The size of the offset into the file where the fragment starts.
         * @param fragment The file contents.
         * @returns The size of the total uploaded data in bytes.
         */
        private continueUpload(uploadId, fileOffset, fragment);
        /**
         * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         *
         * @param uploadId The unique identifier of the upload session.
         * @param fileOffset The size of the offset into the file where the fragment starts.
         * @param fragment The file contents.
         * @returns The newly uploaded file.
         */
        private finishUpload(uploadId, fileOffset, fragment);
    }
    /**
     * Describes a collection of Version objects
     *
     */
    export class Versions extends QueryableCollection {
        /**
         * Creates a new instance of the File class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a version by id
         *
         * @param versionId The id of the version to retrieve
         */
        getById(versionId: number): Version;
        /**
         * Deletes all the file version objects in the collection.
         *
         */
        deleteAll(): Promise<void>;
        /**
         * Deletes the specified version of the file.
         *
         * @param versionId The ID of the file version to delete.
         */
        deleteById(versionId: number): Promise<void>;
        /**
         * Deletes the file version object with the specified version label.
         *
         * @param label The version label of the file version to delete, for example: 1.2
         */
        deleteByLabel(label: string): Promise<void>;
        /**
         * Creates a new file version from the file specified by the version label.
         *
         * @param label The version label of the file version to restore, for example: 1.2
         */
        restoreByLabel(label: string): Promise<void>;
    }
    /**
     * Describes a single Version instance
     *
     */
    export class Version extends QueryableInstance {
        /**
        * Delete a specific version of a file.
        *
        * @param eTag Value used in the IF-Match header, by default "*"
        */
        delete(eTag?: string): Promise<void>;
    }
    export enum CheckinType {
        Minor = 0,
        Major = 1,
        Overwrite = 2,
    }
    export interface FileAddResult {
        file: File;
        data: any;
    }
    export enum WebPartsPersonalizationScope {
        User = 0,
        Shared = 1,
    }
    export enum MoveOperations {
        Overwrite = 1,
        AllowBrokenThickets = 8,
    }
    export enum TemplateFileType {
        StandardPage = 0,
        WikiPage = 1,
        FormPage = 2,
    }
}
declare module "sharepoint/folders" {
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    import { QueryableShareableFolder } from "sharepoint/queryableshareable";
    import { Files } from "sharepoint/files";
    import { TypedHash } from "collections/collections";
    import { Item } from "sharepoint/items";
    /**
     * Describes a collection of Folder objects
     *
     */
    export class Folders extends QueryableCollection {
        /**
         * Creates a new instance of the Folders class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a folder by folder name
         *
         */
        getByName(name: string): Folder;
        /**
         * Adds a new folder to the current folder (relative) or any folder (absolute)
         *
         * @param url The relative or absolute url where the new folder will be created. Urls starting with a forward slash are absolute.
         * @returns The new Folder and the raw response.
         */
        add(url: string): Promise<FolderAddResult>;
    }
    /**
     * Describes a single Folder instance
     *
     */
    export class Folder extends QueryableShareableFolder {
        /**
         * Specifies the sequence in which content types are displayed.
         *
         */
        readonly contentTypeOrder: QueryableCollection;
        /**
         * Gets this folder's files
         *
         */
        readonly files: Files;
        /**
         * Gets this folder's sub folders
         *
         */
        readonly folders: Folders;
        /**
         * Gets this folder's list item field values
         *
         */
        readonly listItemAllFields: QueryableCollection;
        /**
         * Gets the parent folder, if available
         *
         */
        readonly parentFolder: Folder;
        /**
         * Gets this folder's properties
         *
         */
        readonly properties: QueryableInstance;
        /**
         * Gets this folder's server relative url
         *
         */
        readonly serverRelativeUrl: Queryable;
        /**
         * Gets a value that specifies the content type order.
         *
         */
        readonly uniqueContentTypeOrder: QueryableCollection;
        update(properties: TypedHash<string | number | boolean>): Promise<FolderUpdateResult>;
        /**
        * Delete this folder
        *
        * @param eTag Value used in the IF-Match header, by default "*"
        */
        delete(eTag?: string): Promise<void>;
        /**
         * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): Promise<string>;
        /**
         * Gets the associated list item for this folder, loading the default properties
         */
        getItem<T>(...selects: string[]): Promise<Item & T>;
    }
    export interface FolderAddResult {
        folder: Folder;
        data: any;
    }
    export interface FolderUpdateResult {
        folder: Folder;
        data: any;
    }
}
declare module "sharepoint/contenttypes" {
    import { TypedHash } from "collections/collections";
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    /**
     * Describes a collection of content types
     *
     */
    export class ContentTypes extends QueryableCollection {
        /**
         * Creates a new instance of the ContentTypes class
         *
         * @param baseUrl The url or Queryable which forms the parent of this content types collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a ContentType by content type id
         */
        getById(id: string): ContentType;
        /**
         * Adds an existing contenttype to a content type collection
         *
         * @param contentTypeId in the following format, for example: 0x010102
         */
        addAvailableContentType(contentTypeId: string): Promise<ContentTypeAddResult>;
        /**
         * Adds a new content type to the collection
         *
         * @param id The desired content type id for the new content type (also determines the parent content type)
         * @param name The name of the content type
         * @param description The description of the content type
         * @param group The group in which to add the content type
         * @param additionalSettings Any additional settings to provide when creating the content type
         *
         */
        add(id: string, name: string, description?: string, group?: string, additionalSettings?: TypedHash<string | number | boolean>): Promise<ContentTypeAddResult>;
    }
    /**
     * Describes a single ContentType instance
     *
     */
    export class ContentType extends QueryableInstance {
        /**
         * Gets the column (also known as field) references in the content type.
        */
        readonly fieldLinks: FieldLinks;
        /**
         * Gets a value that specifies the collection of fields for the content type.
         */
        readonly fields: QueryableCollection;
        /**
         * Gets the parent content type of the content type.
         */
        readonly parent: ContentType;
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        readonly workflowAssociations: QueryableCollection;
        /**
         * Delete this content type
         */
        delete(): Promise<void>;
    }
    export interface ContentTypeAddResult {
        contentType: ContentType;
        data: any;
    }
    /**
     * Represents a collection of field link instances
     */
    export class FieldLinks extends QueryableCollection {
        /**
         * Creates a new instance of the ContentType class
         *
         * @param baseUrl The url or Queryable which forms the parent of this content type instance
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a FieldLink by GUID id
         *
         * @param id The GUID id of the field link
         */
        getById(id: string): FieldLink;
    }
    /**
     * Represents a field link instance
     */
    export class FieldLink extends QueryableInstance {
    }
}
declare module "sharepoint/attachmentfiles" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    export interface AttachmentFileInfo {
        name: string;
        content: string | Blob | ArrayBuffer;
    }
    /**
     * Describes a collection of Item objects
     *
     */
    export class AttachmentFiles extends QueryableCollection {
        /**
         * Creates a new instance of the AttachmentFiles class
         *
         * @param baseUrl The url or Queryable which forms the parent of this attachments collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a Attachment File by filename
         *
         * @param name The name of the file, including extension.
         */
        getByName(name: string): AttachmentFile;
        /**
         * Adds a new attachment to the collection. Not supported for batching.
         *
         * @param name The name of the file, including extension.
         * @param content The Base64 file content.
         */
        add(name: string, content: string | Blob | ArrayBuffer): Promise<AttachmentFileAddResult>;
        /**
         * Adds mjultiple new attachment to the collection. Not supported for batching.
         *
         * @files name The collection of files to add
         */
        addMultiple(files: AttachmentFileInfo[]): Promise<void>;
    }
    /**
     * Describes a single attachment file instance
     *
     */
    export class AttachmentFile extends QueryableInstance {
        /**
         * Gets the contents of the file as text
         *
         */
        getText(): Promise<string>;
        /**
         * Gets the contents of the file as a blob, does not work in Node.js
         *
         */
        getBlob(): Promise<Blob>;
        /**
         * Gets the contents of a file as an ArrayBuffer, works in Node.js
         */
        getBuffer(): Promise<ArrayBuffer>;
        /**
         * Gets the contents of a file as an ArrayBuffer, works in Node.js
         */
        getJSON(): Promise<any>;
        /**
         * Sets the content of a file. Not supported for batching
         *
         * @param content The value to set for the file contents
         */
        setContent(content: string | ArrayBuffer | Blob): Promise<AttachmentFile>;
        /**
         * Delete this attachment file
         *
         * @param eTag Value used in the IF-Match header, by default "*"
         */
        delete(eTag?: string): Promise<void>;
    }
    export interface AttachmentFileAddResult {
        file: AttachmentFile;
        data: any;
    }
}
declare module "sharepoint/items" {
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    import { QueryableShareableItem } from "sharepoint/queryableshareable";
    import { Folder } from "sharepoint/folders";
    import { File } from "sharepoint/files";
    import { ContentType } from "sharepoint/contenttypes";
    import { TypedHash } from "collections/collections";
    import { ListItemFormUpdateValue } from "sharepoint/types";
    import { AttachmentFiles } from "sharepoint/attachmentfiles";
    /**
     * Describes a collection of Item objects
     *
     */
    export class Items extends QueryableCollection {
        /**
         * Creates a new instance of the Items class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets an Item by id
         *
         * @param id The integer id of the item to retrieve
         */
        getById(id: number): Item;
        /**
         * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
         *
         * @param skip The starting id where the page should start, use with top to specify pages
         */
        skip(skip: number): this;
        /**
         * Gets a collection designed to aid in paging through data
         *
         */
        getPaged(): Promise<PagedItemCollection<any>>;
        /**
         * Adds a new item to the collection
         *
         * @param properties The new items's properties
         */
        add(properties?: TypedHash<any>, listItemEntityTypeFullName?: string): Promise<ItemAddResult>;
        /**
         * Ensures we have the proper list item entity type name, either from the value provided or from the list
         *
         * @param candidatelistItemEntityTypeFullName The potential type name
         */
        private ensureListItemEntityTypeName(candidatelistItemEntityTypeFullName);
    }
    /**
     * Descrines a single Item instance
     *
     */
    export class Item extends QueryableShareableItem {
        /**
         * Gets the set of attachments for this item
         *
         */
        readonly attachmentFiles: AttachmentFiles;
        /**
         * Gets the content type for this item
         *
         */
        readonly contentType: ContentType;
        /**
         * Gets the effective base permissions for the item
         *
         */
        readonly effectiveBasePermissions: Queryable;
        /**
         * Gets the effective base permissions for the item in a UI context
         *
         */
        readonly effectiveBasePermissionsForUI: Queryable;
        /**
         * Gets the field values for this list item in their HTML representation
         *
         */
        readonly fieldValuesAsHTML: QueryableInstance;
        /**
         * Gets the field values for this list item in their text representation
         *
         */
        readonly fieldValuesAsText: QueryableInstance;
        /**
         * Gets the field values for this list item for use in editing controls
         *
         */
        readonly fieldValuesForEdit: QueryableInstance;
        /**
         * Gets the folder associated with this list item (if this item represents a folder)
         *
         */
        readonly folder: Folder;
        /**
         * Gets the folder associated with this list item (if this item represents a folder)
         *
         */
        readonly file: File;
        /**
         * Updates this list intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the list
         * @param eTag Value used in the IF-Match header, by default "*"
         */
        update(properties: TypedHash<any>, eTag?: string): Promise<ItemUpdateResult>;
        /**
         * Delete this item
         *
         * @param eTag Value used in the IF-Match header, by default "*"
         */
        delete(eTag?: string): Promise<void>;
        /**
         * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): Promise<string>;
        /**
         * Gets a string representation of the full URL to the WOPI frame.
         * If there is no associated WOPI application, or no associated action, an empty string is returned.
         *
         * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
         */
        getWopiFrameUrl(action?: number): Promise<string>;
        /**
         * Validates and sets the values of the specified collection of fields for the list item.
         *
         * @param formValues The fields to change and their new values.
         * @param newDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
         */
        validateUpdateListItem(formValues: ListItemFormUpdateValue[], newDocumentUpdate?: boolean): Promise<ListItemFormUpdateValue[]>;
    }
    export interface ItemAddResult {
        item: Item;
        data: any;
    }
    export interface ItemUpdateResult {
        item: Item;
        data: ItemUpdateResultData;
    }
    export interface ItemUpdateResultData {
        "odata.etag": string;
    }
    /**
     * Provides paging functionality for list items
     */
    export class PagedItemCollection<T> {
        private nextUrl;
        results: T;
        constructor(nextUrl: string, results: T);
        /**
         * If true there are more results available in the set, otherwise there are not
         */
        readonly hasNext: boolean;
        /**
         * Gets the next set of results, or resolves to null if no results are available
         */
        getNext(): Promise<PagedItemCollection<any>>;
    }
}
declare module "sharepoint/views" {
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    import { TypedHash } from "collections/collections";
    /**
     * Describes the views available in the current context
     *
     */
    export class Views extends QueryableCollection {
        /**
         * Creates a new instance of the Views class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a view by guid id
         *
         * @param id The GUID id of the view
         */
        getById(id: string): View;
        /**
         * Gets a view by title (case-sensitive)
         *
         * @param title The case-sensitive title of the view
         */
        getByTitle(title: string): View;
        /**
         * Adds a new view to the collection
         *
         * @param title The new views's title
         * @param personalView True if this is a personal view, otherwise false, default = false
         * @param additionalSettings Will be passed as part of the view creation body
         */
        add(title: string, personalView?: boolean, additionalSettings?: TypedHash<any>): Promise<ViewAddResult>;
    }
    /**
     * Describes a single View instance
     *
     */
    export class View extends QueryableInstance {
        readonly fields: ViewFields;
        /**
         * Updates this view intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the view
         */
        update(properties: TypedHash<any>): Promise<ViewUpdateResult>;
        /**
         * Delete this view
         *
         */
        delete(): Promise<void>;
        /**
         * Returns the list view as HTML.
         *
         */
        renderAsHtml(): Promise<string>;
    }
    export class ViewFields extends QueryableCollection {
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a value that specifies the XML schema that represents the collection.
         */
        getSchemaXml(): Promise<string>;
        /**
         * Adds the field with the specified field internal name or display name to the collection.
         *
         * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
         */
        add(fieldTitleOrInternalName: string): Promise<void>;
        /**
         * Moves the field with the specified field internal name to the specified position in the collection.
         *
         * @param fieldInternalName The case-sensitive internal name of the field to move.
         * @param index The zero-based index of the new position for the field.
         */
        move(fieldInternalName: string, index: number): Promise<void>;
        /**
         * Removes all the fields from the collection.
         */
        removeAll(): Promise<void>;
        /**
         * Removes the field with the specified field internal name from the collection.
         *
         * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
         */
        remove(fieldInternalName: string): Promise<void>;
    }
    export interface ViewAddResult {
        view: View;
        data: any;
    }
    export interface ViewUpdateResult {
        view: View;
        data: any;
    }
}
declare module "sharepoint/fields" {
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    import { TypedHash } from "collections/collections";
    import { XmlSchemaFieldCreationInformation, DateTimeFieldFormatType, FieldTypes, CalendarType, UrlFieldFormatType } from "sharepoint/types";
    /**
     * Describes a collection of Field objects
     *
     */
    export class Fields extends QueryableCollection {
        /**
         * Creates a new instance of the Fields class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a field from the collection by title
         *
         * @param title The case-sensitive title of the field
         */
        getByTitle(title: string): Field;
        /**
         * Gets a field from the collection by using internal name or title
         *
         * @param name The case-sensitive internal name or title of the field
         */
        getByInternalNameOrTitle(name: string): Field;
        /**
         * Gets a list from the collection by guid id
         *
         * @param title The Id of the list
         */
        getById(id: string): Field;
        /**
         * Creates a field based on the specified schema
         */
        createFieldAsXml(xml: string | XmlSchemaFieldCreationInformation): Promise<FieldAddResult>;
        /**
         * Adds a new list to the collection
         *
         * @param title The new field's title
         * @param fieldType The new field's type (ex: SP.FieldText)
         * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
         */
        add(title: string, fieldType: string, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
        /**
         * Adds a new SP.FieldText to the collection
         *
         * @param title The field title
         * @param maxLength The maximum number of characters allowed in the value of the field.
         * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
         */
        addText(title: string, maxLength?: number, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
        /**
         * Adds a new SP.FieldCalculated to the collection
         *
         * @param title The field title.
         * @param formula The formula for the field.
         * @param dateFormat The date and time format that is displayed in the field.
         * @param outputType Specifies the output format for the field. Represents a FieldType value.
         * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
         */
        addCalculated(title: string, formula: string, dateFormat: DateTimeFieldFormatType, outputType?: FieldTypes, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
        /**
         * Adds a new SP.FieldDateTime to the collection
         *
         * @param title The field title
         * @param displayFormat The format of the date and time that is displayed in the field.
         * @param calendarType Specifies the calendar type of the field.
         * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
         */
        addDateTime(title: string, displayFormat?: DateTimeFieldFormatType, calendarType?: CalendarType, friendlyDisplayFormat?: number, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
        /**
         * Adds a new SP.FieldNumber to the collection
         *
         * @param title The field title
         * @param minValue The field's minimum value
         * @param maxValue The field's maximum value
         * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
         */
        addNumber(title: string, minValue?: number, maxValue?: number, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
        /**
         * Adds a new SP.FieldCurrency to the collection
         *
         * @param title The field title
         * @param minValue The field's minimum value
         * @param maxValue The field's maximum value
         * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
         * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
         */
        addCurrency(title: string, minValue?: number, maxValue?: number, currencyLocalId?: number, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
        /**
         * Adds a new SP.FieldMultiLineText to the collection
         *
         * @param title The field title
         * @param numberOfLines Specifies the number of lines of text to display for the field.
         * @param richText Specifies whether the field supports rich formatting.
         * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
         * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
         * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
         * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
         *
         */
        addMultilineText(title: string, numberOfLines?: number, richText?: boolean, restrictedMode?: boolean, appendOnly?: boolean, allowHyperlink?: boolean, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
        /**
         * Adds a new SP.FieldUrl to the collection
         *
         * @param title The field title
         */
        addUrl(title: string, displayFormat?: UrlFieldFormatType, properties?: TypedHash<string | number | boolean>): Promise<FieldAddResult>;
    }
    /**
     * Describes a single of Field instance
     *
     */
    export class Field extends QueryableInstance {
        /**
         * Updates this field intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the list
         * @param fieldType The type value, required to update child field type properties
         */
        update(properties: TypedHash<string | number | boolean>, fieldType?: string): Promise<FieldUpdateResult>;
        /**
         * Delete this fields
         *
         */
        delete(): Promise<void>;
        /**
         * Sets the value of the ShowInDisplayForm property for this field.
         */
        setShowInDisplayForm(show: boolean): Promise<void>;
        /**
         * Sets the value of the ShowInEditForm property for this field.
         */
        setShowInEditForm(show: boolean): Promise<void>;
        /**
         * Sets the value of the ShowInNewForm property for this field.
         */
        setShowInNewForm(show: boolean): Promise<void>;
    }
    /**
     * This interface defines the result of adding a field
     */
    export interface FieldAddResult {
        data: any;
        field: Field;
    }
    export interface FieldUpdateResult {
        data: any;
        field: Field;
    }
}
declare module "sharepoint/forms" {
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    /**
     * Describes a collection of Field objects
     *
     */
    export class Forms extends QueryableCollection {
        /**
         * Creates a new instance of the Fields class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a form by id
         *
         * @param id The guid id of the item to retrieve
         */
        getById(id: string): Form;
    }
    /**
     * Describes a single of Form instance
     *
     */
    export class Form extends QueryableInstance {
    }
}
declare module "sharepoint/subscriptions" {
    import { Queryable, QueryableCollection, QueryableInstance } from "sharepoint/queryable";
    /**
     * Describes a collection of webhook subscriptions
     *
     */
    export class Subscriptions extends QueryableCollection {
        /**
         * Creates a new instance of the Subscriptions class
         *
         * @param baseUrl - The url or Queryable which forms the parent of this webhook subscriptions collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Returns all the webhook subscriptions or the specified webhook subscription
         *
         * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
         */
        getById(subscriptionId: string): Subscription;
        /**
         * Creates a new webhook subscription
         *
         * @param notificationUrl The url to receive the notifications
         * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
         * @param clientState A client specific string (defaults to pnp-js-core-subscription when omitted)
         */
        add(notificationUrl: string, expirationDate: string, clientState?: string): Promise<SubscriptionAddResult>;
    }
    /**
     * Describes a single webhook subscription instance
     *
     */
    export class Subscription extends QueryableInstance {
        /**
         * Renews this webhook subscription
         *
         * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
         */
        update(expirationDate: string): Promise<SubscriptionUpdateResult>;
        /**
         * Removes this webhook subscription
         *
         */
        delete(): Promise<void>;
    }
    export interface SubscriptionAddResult {
        subscription: Subscription;
        data: any;
    }
    export interface SubscriptionUpdateResult {
        subscription: Subscription;
        data: any;
    }
}
declare module "sharepoint/usercustomactions" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    import { TypedHash } from "collections/collections";
    /**
     * Describes a collection of user custom actions
     *
     */
    export class UserCustomActions extends QueryableCollection {
        /**
         * Creates a new instance of the UserCustomActions class
         *
         * @param baseUrl The url or Queryable which forms the parent of this user custom actions collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Returns the user custom action with the specified id
         *
         * @param id The GUID id of the user custom action to retrieve
         */
        getById(id: string): UserCustomAction;
        /**
         * Creates a user custom action
         *
         * @param properties The information object of property names and values which define the new user custom action
         *
         */
        add(properties: TypedHash<string | boolean | number>): Promise<UserCustomActionAddResult>;
        /**
         * Deletes all user custom actions in the collection
         *
         */
        clear(): Promise<void>;
    }
    /**
     * Describes a single user custom action
     *
     */
    export class UserCustomAction extends QueryableInstance {
        /**
        * Updates this user custom action with the supplied properties
        *
        * @param properties An information object of property names and values to update for this user custom action
        */
        update(properties: TypedHash<string | boolean | number>): Promise<UserCustomActionUpdateResult>;
        /**
        * Removes this user custom action
        *
        */
        delete(): Promise<void>;
    }
    /**
     * Result from adding a user custom action
     *
     */
    export interface UserCustomActionAddResult {
        data: any;
        action: UserCustomAction;
    }
    /**
     * Result from udating a user custom action
     *
     */
    export interface UserCustomActionUpdateResult {
        data: any;
        action: UserCustomAction;
    }
}
declare module "sharepoint/lists" {
    import { Items } from "sharepoint/items";
    import { Views, View } from "sharepoint/views";
    import { ContentTypes } from "sharepoint/contenttypes";
    import { Fields } from "sharepoint/fields";
    import { Forms } from "sharepoint/forms";
    import { Subscriptions } from "sharepoint/subscriptions";
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    import { QueryableSecurable } from "sharepoint/queryablesecurable";
    import { TypedHash } from "collections/collections";
    import { ControlMode, RenderListData, ChangeQuery, CamlQuery, ChangeLogitemQuery, ListFormData } from "sharepoint/types";
    import { UserCustomActions } from "sharepoint/usercustomactions";
    import { Folder } from "sharepoint/folders";
    /**
     * Describes a collection of List objects
     *
     */
    export class Lists extends QueryableCollection {
        /**
         * Creates a new instance of the Lists class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a list from the collection by title
         *
         * @param title The title of the list
         */
        getByTitle(title: string): List;
        /**
         * Gets a list from the collection by guid id
         *
         * @param id The Id of the list (GUID)
         */
        getById(id: string): List;
        /**
         * Adds a new list to the collection
         *
         * @param title The new list's title
         * @param description The new list's description
         * @param template The list template value
         * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
         * @param additionalSettings Will be passed as part of the list creation body
         */
        add(title: string, description?: string, template?: number, enableContentTypes?: boolean, additionalSettings?: TypedHash<string | number | boolean>): Promise<ListAddResult>;
        /**
         * Ensures that the specified list exists in the collection (note: this method not supported for batching)
         *
         * @param title The new list's title
         * @param description The new list's description
         * @param template The list template value
         * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
         * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
         */
        ensure(title: string, description?: string, template?: number, enableContentTypes?: boolean, additionalSettings?: TypedHash<string | number | boolean>): Promise<ListEnsureResult>;
        /**
         * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
         */
        ensureSiteAssetsLibrary(): Promise<List>;
        /**
         * Gets a list that is the default location for wiki pages.
         */
        ensureSitePagesLibrary(): Promise<List>;
    }
    /**
     * Describes a single List instance
     *
     */
    export class List extends QueryableSecurable {
        /**
         * Gets the content types in this list
         *
         */
        readonly contentTypes: ContentTypes;
        /**
         * Gets the items in this list
         *
         */
        readonly items: Items;
        /**
         * Gets the views in this list
         *
         */
        readonly views: Views;
        /**
         * Gets the fields in this list
         *
         */
        readonly fields: Fields;
        /**
         * Gets the forms in this list
         *
         */
        readonly forms: Forms;
        /**
         * Gets the default view of this list
         *
         */
        readonly defaultView: QueryableInstance;
        /**
         * Get all custom actions on a site collection
         *
         */
        readonly userCustomActions: UserCustomActions;
        /**
         * Gets the effective base permissions of this list
         *
         */
        readonly effectiveBasePermissions: Queryable;
        /**
         * Gets the event receivers attached to this list
         *
         */
        readonly eventReceivers: QueryableCollection;
        /**
         * Gets the related fields of this list
         *
         */
        readonly relatedFields: Queryable;
        /**
         * Gets the IRM settings for this list
         *
         */
        readonly informationRightsManagementSettings: Queryable;
        /**
         * Gets the webhook subscriptions of this list
         *
         */
        readonly subscriptions: Subscriptions;
        /**
         * The root folder of the list
         */
        readonly rootFolder: Folder;
        /**
         * Gets a view by view guid id
         *
         */
        getView(viewId: string): View;
        /**
         * Updates this list intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the list
         * @param eTag Value used in the IF-Match header, by default "*"
         */
        update(properties: TypedHash<string | number | boolean>, eTag?: string): Promise<ListUpdateResult>;
        /**
         * Delete this list
         *
         * @param eTag Value used in the IF-Match header, by default "*"
         */
        delete(eTag?: string): Promise<void>;
        /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
         */
        getChanges(query: ChangeQuery): Promise<any>;
        /**
         * Returns a collection of items from the list based on the specified query.
         *
         * @param CamlQuery The Query schema of Collaborative Application Markup
         * Language (CAML) is used in various ways within the context of Microsoft SharePoint Foundation
         * to define queries against list data.
         * see:
         *
         * https://msdn.microsoft.com/en-us/library/office/ms467521.aspx
         *
         * @param expands A URI with a $expand System Query Option indicates that Entries associated with
         * the Entry or Collection of Entries identified by the Resource Path
         * section of the URI must be represented inline (i.e. eagerly loaded).
         * see:
         *
         * https://msdn.microsoft.com/en-us/library/office/fp142385.aspx
         *
         * http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#ExpandSystemQueryOption
         */
        getItemsByCAMLQuery(query: CamlQuery, ...expands: string[]): Promise<any>;
        /**
         * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
         */
        getListItemChangesSinceToken(query: ChangeLogitemQuery): Promise<string>;
        /**
         * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): Promise<string>;
        /**
         * Renders list data based on the view xml provided
         */
        renderListData(viewXml: string): Promise<RenderListData>;
        /**
         * Gets the field values and field schema attributes for a list item.
         */
        renderListFormData(itemId: number, formId: string, mode: ControlMode): Promise<ListFormData>;
        /**
         * Reserves a list item ID for idempotent list item creation.
         */
        reserveListItemId(): Promise<number>;
        /**
         * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
         *
         */
        getListItemEntityTypeFullName(): Promise<string>;
    }
    export interface ListAddResult {
        list: List;
        data: any;
    }
    export interface ListUpdateResult {
        list: List;
        data: any;
    }
    export interface ListEnsureResult {
        list: List;
        created: boolean;
        data: any;
    }
}
declare module "sharepoint/navigation" {
    import { TypedHash } from "collections/collections";
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    /**
     * Result from adding a navigation node
     *
     */
    export interface NavigationNodeAddResult {
        data: any;
        node: NavigationNode;
    }
    /**
     * Result from udpdating a navigation node
     *
     */
    export interface NavigationNodeUpdateResult {
        data: any;
        node: NavigationNode;
    }
    /**
     * Represents a collection of navigation nodes
     *
     */
    export class NavigationNodes extends QueryableCollection {
        /**
         * Gets a navigation node by id
         *
         * @param id The id of the node
         */
        getById(id: number): NavigationNode;
        /**
         * Adds a new node to the collection
         *
         * @param title Display name of the node
         * @param url The url of the node
         * @param visible If true the node is visible, otherwise it is hidden (default: true)
         */
        add(title: string, url: string, visible?: boolean): Promise<NavigationNodeAddResult>;
        /**
         * Moves a node to be after another node in the navigation
         *
         * @param nodeId Id of the node to move
         * @param previousNodeId Id of the node after which we move the node specified by nodeId
         */
        moveAfter(nodeId: number, previousNodeId: number): Promise<void>;
    }
    /**
     * Represents an instance of a navigation node
     *
     */
    export class NavigationNode extends QueryableInstance {
        /**
         * Represents the child nodes of this node
         */
        readonly children: NavigationNodes;
        /**
         * Updates this node based on the supplied properties
         *
         * @param properties The hash of key/value pairs to update
         */
        update(properties: TypedHash<boolean | string | number>): Promise<NavigationNodeUpdateResult>;
        /**
         * Deletes this node and any child nodes
         */
        delete(): Promise<void>;
    }
    /**
     * Exposes the navigation components
     *
     */
    export class Navigation extends Queryable {
        /**
         * Creates a new instance of the Navigation class
         *
         * @param baseUrl The url or Queryable which forms the parent of these navigation components
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets the quicklaunch navigation nodes for the current context
         *
         */
        readonly quicklaunch: NavigationNodes;
        /**
         * Gets the top bar navigation nodes for the current context
         *
         */
        readonly topNavigationBar: NavigationNodes;
    }
}
declare module "sharepoint/features" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    /**
     * Describes a collection of List objects
     *
     */
    export class Features extends QueryableCollection {
        /**
         * Creates a new instance of the Lists class
         *
         * @param baseUrl The url or Queryable which forms the parent of this fields collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets a list from the collection by guid id
         *
         * @param id The Id of the feature (GUID)
         */
        getById(id: string): Feature;
        /**
         * Adds a new list to the collection
         *
         * @param id The Id of the feature (GUID)
         * @param force If true the feature activation will be forced
         */
        add(id: string, force?: boolean): Promise<FeatureAddResult>;
        /**
         * Removes (deactivates) a feature from the collection
         *
         * @param id The Id of the feature (GUID)
         * @param force If true the feature deactivation will be forced
         */
        remove(id: string, force?: boolean): Promise<any>;
    }
    export class Feature extends QueryableInstance {
        /**
         * Removes (deactivates) a feature from the collection
         *
         * @param force If true the feature deactivation will be forced
         */
        deactivate(force?: boolean): Promise<any>;
    }
    export interface FeatureAddResult {
        data: any;
        feature: Feature;
    }
}
declare module "sharepoint/relateditems" {
    import { Queryable } from "sharepoint/queryable";
    export interface RelatedItem {
        ListId: string;
        ItemId: number;
        Url: string;
        Title: string;
        WebId: string;
        IconUrl: string;
    }
    export interface RelatedItemManger {
        getRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
        getPageOneRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
        addSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemID: number, targetWebUrl: string, tryAddReverseLink?: boolean): Promise<void>;
        /**
         * Adds a related item link from an item specified by list name and item id, to an item specified by url
         *
         * @param sourceListName The source list name or list id
         * @param sourceItemId The source item id
         * @param targetItemUrl The target item url
         * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
         */
        addSingleLinkToUrl(sourceListName: string, sourceItemId: number, targetItemUrl: string, tryAddReverseLink?: boolean): Promise<void>;
        /**
         * Adds a related item link from an item specified by url, to an item specified by list name and item id
         *
         * @param sourceItemUrl The source item url
         * @param targetListName The target list name or list id
         * @param targetItemId The target item id
         * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
         */
        addSingleLinkFromUrl(sourceItemUrl: string, targetListName: string, targetItemId: number, tryAddReverseLink?: boolean): Promise<void>;
        deleteSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemId: number, targetWebUrl: string, tryDeleteReverseLink?: boolean): Promise<void>;
    }
    export class RelatedItemManagerImpl extends Queryable implements RelatedItemManger {
        static FromUrl(url: string): RelatedItemManagerImpl;
        constructor(baseUrl: string | Queryable, path?: string);
        getRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
        getPageOneRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
        addSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemID: number, targetWebUrl: string, tryAddReverseLink?: boolean): Promise<void>;
        /**
         * Adds a related item link from an item specified by list name and item id, to an item specified by url
         *
         * @param sourceListName The source list name or list id
         * @param sourceItemId The source item id
         * @param targetItemUrl The target item url
         * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
         */
        addSingleLinkToUrl(sourceListName: string, sourceItemId: number, targetItemUrl: string, tryAddReverseLink?: boolean): Promise<void>;
        /**
         * Adds a related item link from an item specified by url, to an item specified by list name and item id
         *
         * @param sourceItemUrl The source item url
         * @param targetListName The target list name or list id
         * @param targetItemId The target item id
         * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
         */
        addSingleLinkFromUrl(sourceItemUrl: string, targetListName: string, targetItemId: number, tryAddReverseLink?: boolean): Promise<void>;
        deleteSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemId: number, targetWebUrl: string, tryDeleteReverseLink?: boolean): Promise<void>;
    }
}
declare module "sharepoint/webs" {
    import { Queryable, QueryableCollection } from "sharepoint/queryable";
    import { Lists } from "sharepoint/lists";
    import { Fields } from "sharepoint/fields";
    import { Navigation } from "sharepoint/navigation";
    import { SiteGroups, SiteGroup } from "sharepoint/sitegroups";
    import { ContentTypes } from "sharepoint/contenttypes";
    import { Folders, Folder } from "sharepoint/folders";
    import { RoleDefinitions } from "sharepoint/roles";
    import { File } from "sharepoint/files";
    import { TypedHash } from "collections/collections";
    import { ChangeQuery } from "sharepoint/types";
    import { List } from "sharepoint/lists";
    import { SiteUsers, SiteUser, CurrentUser, SiteUserProps } from "sharepoint/siteusers";
    import { UserCustomActions } from "sharepoint/usercustomactions";
    import { ODataBatch } from "sharepoint/odata";
    import { Features } from "sharepoint/features";
    import { QueryableShareableWeb } from "sharepoint/queryableshareable";
    import { RelatedItemManger } from "sharepoint/relateditems";
    /**
     * Describes a collection of webs
     *
     */
    export class Webs extends QueryableCollection {
        /**
         * Creates a new instance of the Webs class
         *
         * @param baseUrl The url or Queryable which forms the parent of this web collection
         */
        constructor(baseUrl: string | Queryable, webPath?: string);
        /**
         * Adds a new web to the collection
         *
         * @param title The new web's title
         * @param url The new web's relative url
         * @param description The new web's description
         * @param template The new web's template internal name (default = STS)
         * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
         * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
         */
        add(title: string, url: string, description?: string, template?: string, language?: number, inheritPermissions?: boolean): Promise<WebAddResult>;
    }
    /**
     * Describes a collection of web infos
     *
     */
    export class WebInfos extends QueryableCollection {
        /**
         * Creates a new instance of the WebInfos class
         *
         * @param baseUrl The url or Queryable which forms the parent of this web infos collection
         */
        constructor(baseUrl: string | Queryable, webPath?: string);
    }
    /**
     * Describes a web
     *
     */
    export class Web extends QueryableShareableWeb {
        /**
         * Creates a new web instance from the given url by indexing the location of the /_api/
         * segment. If this is not found the method creates a new web with the entire string as
         * supplied.
         *
         * @param url
         */
        static fromUrl(url: string, path?: string): Web;
        /**
         * Creates a new instance of the Web class
         *
         * @param baseUrl The url or Queryable which forms the parent of this web
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets this web's subwebs
         *
         */
        readonly webs: Webs;
        /**
         * Gets a collection of WebInfos for this web's subwebs
         *
         */
        readonly webinfos: WebInfos;
        /**
         * Gets the content types available in this web
         *
         */
        readonly contentTypes: ContentTypes;
        /**
         * Gets the lists in this web
         *
         */
        readonly lists: Lists;
        /**
         * Gets the fields in this web
         *
         */
        readonly fields: Fields;
        /**
         * Gets the active features for this web
         *
         */
        readonly features: Features;
        /**
         * Gets the available fields in this web
         *
         */
        readonly availablefields: Fields;
        /**
         * Gets the navigation options in this web
         *
         */
        readonly navigation: Navigation;
        /**
         * Gets the site users
         *
         */
        readonly siteUsers: SiteUsers;
        /**
         * Gets the site groups
         *
         */
        readonly siteGroups: SiteGroups;
        /**
         * Gets the current user
         */
        readonly currentUser: CurrentUser;
        /**
         * Gets the top-level folders in this web
         *
         */
        readonly folders: Folders;
        /**
         * Gets all user custom actions for this web
         *
         */
        readonly userCustomActions: UserCustomActions;
        /**
         * Gets the collection of RoleDefinition resources
         *
         */
        readonly roleDefinitions: RoleDefinitions;
        /**
         * Provides an interface to manage related items
         *
         */
        readonly relatedItems: RelatedItemManger;
        /**
         * Creates a new batch for requests within the context of this web
         *
         */
        createBatch(): ODataBatch;
        /**
         * Gets the root folder of this web
         *
         */
        readonly rootFolder: Folder;
        /**
         * Gets the associated owner group for this web
         *
         */
        readonly associatedOwnerGroup: SiteGroup;
        /**
         * Gets the associated member group for this web
         *
         */
        readonly associatedMemberGroup: SiteGroup;
        /**
         * Gets the associated visitor group for this web
         *
         */
        readonly associatedVisitorGroup: SiteGroup;
        /**
         * Gets a folder by server relative url
         *
         * @param folderRelativeUrl The server relative path to the folder (including /sites/ if applicable)
         */
        getFolderByServerRelativeUrl(folderRelativeUrl: string): Folder;
        /**
         * Gets a file by server relative url
         *
         * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
         */
        getFileByServerRelativeUrl(fileRelativeUrl: string): File;
        /**
         * Gets a list by server relative url (list's root folder)
         *
         * @param listRelativeUrl The server relative path to the list's root folder (including /sites/ if applicable)
         */
        getList(listRelativeUrl: string): List;
        /**
         * Updates this web instance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the web
         */
        update(properties: TypedHash<string | number | boolean>): Promise<WebUpdateResult>;
        /**
         * Deletes this web
         *
         */
        delete(): Promise<void>;
        /**
         * Applies the theme specified by the contents of each of the files specified in the arguments to the site
         *
         * @param colorPaletteUrl The server-relative URL of the color palette file
         * @param fontSchemeUrl The server-relative URL of the font scheme
         * @param backgroundImageUrl The server-relative URL of the background image
         * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
         */
        applyTheme(colorPaletteUrl: string, fontSchemeUrl: string, backgroundImageUrl: string, shareGenerated: boolean): Promise<void>;
        /**
         * Applies the specified site definition or site template to the Web site that has no template applied to it
         *
         * @param template Name of the site definition or the name of the site template
         */
        applyWebTemplate(template: string): Promise<void>;
        /**
         * Checks whether the specified login name belongs to a valid user in the web. If the user doesn't exist, adds the user to the web.
         *
         * @param loginName The login name of the user (ex: i:0#.f|membership|user@domain.onmicrosoft.com)
         */
        ensureUser(loginName: string): Promise<WebEnsureUserResult>;
        /**
         * Returns a collection of site templates available for the site
         *
         * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
         * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
         */
        availableWebTemplates(language?: number, includeCrossLanugage?: boolean): QueryableCollection;
        /**
         * Returns the list gallery on the site
         *
         * @param type The gallery type - WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114,
         * MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125
         */
        getCatalog(type: number): Promise<List>;
        /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
         *
         * @param query The change query
         */
        getChanges(query: ChangeQuery): Promise<any>;
        /**
         * Gets the custom list templates for the site
         *
         */
        readonly customListTemplate: QueryableCollection;
        /**
         * Returns the user corresponding to the specified member identifier for the current site
         *
         * @param id The id of the user
         */
        getUserById(id: number): SiteUser;
        /**
         * Returns the name of the image file for the icon that is used to represent the specified file
         *
         * @param filename The file name. If this parameter is empty, the server returns an empty string
         * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
         * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
         */
        mapToIcon(filename: string, size?: number, progId?: string): Promise<string>;
    }
    /**
     * Result from adding a web
     *
     */
    export interface WebAddResult {
        data: any;
        web: Web;
    }
    /**
     * Result from updating a web
     *
     */
    export interface WebUpdateResult {
        data: any;
        web: Web;
    }
    /**
     * Result from retrieving a catalog
     *
     */
    export interface GetCatalogResult {
        data: any;
        list: List;
    }
    /**
     * Result from ensuring a user
     *
     */
    export interface WebEnsureUserResult {
        data: SiteUserProps;
        user: SiteUser;
    }
}
declare module "sharepoint/site" {
    import { Queryable, QueryableInstance } from "sharepoint/queryable";
    import { Web } from "sharepoint/webs";
    import { UserCustomActions } from "sharepoint/usercustomactions";
    import { ContextInfo, DocumentLibraryInformation } from "sharepoint/types";
    import { ODataBatch } from "sharepoint/odata";
    import { Features } from "sharepoint/features";
    /**
     * Describes a site collection
     *
     */
    export class Site extends QueryableInstance {
        /**
         * Creates a new instance of the Site class
         *
         * @param baseUrl The url or Queryable which forms the parent of this site collection
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * Gets the root web of the site collection
         *
         */
        readonly rootWeb: Web;
        /**
         * Gets the active features for this site collection
         *
         */
        readonly features: Features;
        /**
         * Gets all custom actions for this site collection
         *
         */
        readonly userCustomActions: UserCustomActions;
        /**
         * Gets the context information for this site collection
         */
        getContextInfo(): Promise<ContextInfo>;
        /**
         * Gets the document libraries on a site. Static method. (SharePoint Online only)
         *
         * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
         */
        getDocumentLibraries(absoluteWebUrl: string): Promise<DocumentLibraryInformation[]>;
        /**
         * Gets the site url from a page url
         *
         * @param absolutePageUrl The absolute url of the page
         */
        getWebUrlFromPageUrl(absolutePageUrl: string): Promise<string>;
        /**
         * Creates a new batch for requests within the context of this site collection
         *
         */
        createBatch(): ODataBatch;
        /**
         * Opens a web by id (using POST)
         *
         * @param webId The GUID id of the web to open
         */
        openWebById(webId: string): Promise<OpenWebByIdResult>;
    }
    /**
     * The result of opening a web by id: contains the data returned as well as a chainable web instance
     */
    export interface OpenWebByIdResult {
        data: any;
        web: Web;
    }
}
declare module "utils/files" {
    /**
     * Reads a blob as text
     *
     * @param blob The data to read
     */
    export function readBlobAsText(blob: Blob): Promise<string>;
    /**
     * Reads a blob into an array buffer
     *
     * @param blob The data to read
     */
    export function readBlobAsArrayBuffer(blob: Blob): Promise<ArrayBuffer>;
}
declare module "sharepoint/userprofiles" {
    import { Queryable, QueryableInstance, QueryableCollection } from "sharepoint/queryable";
    import { HashTagCollection, UserProfile } from "sharepoint/types";
    export class UserProfileQuery extends QueryableInstance {
        private profileLoader;
        /**
         * Creates a new instance of the UserProfileQuery class
         *
         * @param baseUrl The url or Queryable which forms the parent of this user profile query
         */
        constructor(baseUrl: string | Queryable, path?: string);
        /**
         * The url of the edit profile page for the current user
         */
        readonly editProfileLink: Promise<string>;
        /**
         * A boolean value that indicates whether the current user's "People I'm Following" list is public
         */
        readonly isMyPeopleListPublic: Promise<boolean>;
        /**
         * A boolean value that indicates whether the current user is being followed by the specified user
         *
         * @param loginName The account name of the user
         */
        amIFollowedBy(loginName: string): Promise<boolean>;
        /**
         * A boolean value that indicates whether the current user is following the specified user
         *
         * @param loginName The account name of the user
         */
        amIFollowing(loginName: string): Promise<boolean>;
        /**
         * Gets tags that the current user is following
         *
         * @param maxCount The maximum number of tags to retrieve (default is 20)
         */
        getFollowedTags(maxCount?: number): Promise<string[]>;
        /**
         * Gets the people who are following the specified user
         *
         * @param loginName The account name of the user
         */
        getFollowersFor(loginName: string): Promise<any[]>;
        /**
         * Gets the people who are following the current user
         *
         */
        readonly myFollowers: QueryableCollection;
        /**
         * Gets user properties for the current user
         *
         */
        readonly myProperties: QueryableInstance;
        /**
         * Gets the people who the specified user is following
         *
         * @param loginName The account name of the user.
         */
        getPeopleFollowedBy(loginName: string): Promise<any[]>;
        /**
         * Gets user properties for the specified user.
         *
         * @param loginName The account name of the user.
         */
        getPropertiesFor(loginName: string): Promise<any[]>;
        /**
         * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
         *
         */
        readonly trendingTags: Promise<HashTagCollection>;
        /**
         * Gets the specified user profile property for the specified user
         *
         * @param loginName The account name of the user
         * @param propertyName The case-sensitive name of the property to get
         */
        getUserProfilePropertyFor(loginName: string, propertyName: string): Promise<string>;
        /**
         * Removes the specified user from the user's list of suggested people to follow
         *
         * @param loginName The account name of the user
         */
        hideSuggestion(loginName: string): Promise<void>;
        /**
         * A boolean values that indicates whether the first user is following the second user
         *
         * @param follower The account name of the user who might be following the followee
         * @param followee The account name of the user who might be followed by the follower
         */
        isFollowing(follower: string, followee: string): Promise<boolean>;
        /**
         * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
         *
         * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
         */
        setMyProfilePic(profilePicSource: Blob): Promise<void>;
        /**
         * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
         *
         * @param emails The email addresses of the users to provision sites for
         */
        createPersonalSiteEnqueueBulk(...emails: string[]): Promise<void>;
        /**
         * Gets the user profile of the site owner
         *
         */
        readonly ownerUserProfile: Promise<UserProfile>;
        /**
         * Gets the user profile for the current user
         */
        readonly userProfile: Promise<any>;
        /**
         * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
         *
         * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
         */
        createPersonalSite(interactiveRequest?: boolean): Promise<void>;
        /**
         * Sets the privacy settings for this profile
         *
         * @param share true to make all social data public; false to make all social data private
         */
        shareAllSocialData(share: boolean): Promise<void>;
    }
}
declare module "sharepoint/utilities" {
    import { Queryable } from "sharepoint/queryable";
    import { EmailProperties } from "sharepoint/types";
    import { ODataBatch } from "sharepoint/odata";
    import { ICachingOptions } from "sharepoint/caching";
    import { File } from "sharepoint/files";
    import { PrincipalInfo, PrincipalType, PrincipalSource, WikiPageCreationInformation } from "sharepoint/types";
    /**
     * Public interface for the utility methods to limit Queryable method exposure
     */
    export interface UtilityMethods {
        usingCaching(options?: ICachingOptions): this;
        inBatch(batch: ODataBatch): this;
        sendEmail(props: EmailProperties): Promise<void>;
        getCurrentUserEmailAddresses(): Promise<string>;
        resolvePrincipal(email: string, scopes: PrincipalType, sources: PrincipalSource, inputIsEmailOnly: boolean, addToUserInfoList: boolean, matchUserInfoList?: boolean): Promise<PrincipalInfo>;
        searchPrincipals(input: string, scopes: PrincipalType, sources: PrincipalSource, groupName: string, maxCount: number): Promise<PrincipalInfo[]>;
        createEmailBodyForInvitation(pageAddress: string): Promise<string>;
        expandGroupsToPrincipals(inputs: string[], maxCount?: number): Promise<PrincipalInfo[]>;
        createWikiPage(info: WikiPageCreationInformation): Promise<CreateWikiPageResult>;
    }
    /**
     * Allows for calling of the static SP.Utilities.Utility methods by supplying the method name
     */
    export class UtilityMethod extends Queryable implements UtilityMethods {
        private static getBaseUrl(candidate);
        /**
         * Creates a new instance of the Utility method class
         *
         * @param baseUrl The parent url provider
         * @param methodName The static method name to call on the utility class
         */
        constructor(baseUrl: string | Queryable, methodName: string);
        excute<T>(props: any): Promise<T>;
        /**
         * Clones this queryable into a new queryable instance of T
         * @param factory Constructor used to create the new instance
         * @param additionalPath Any additional path to include in the clone
         * @param includeBatch If true this instance's batch will be added to the cloned instance
         */
        protected create(methodName: string, includeBatch: boolean): UtilityMethod;
        /**
         * Sends an email based on the supplied properties
         *
         * @param props The properties of the email to send
         */
        sendEmail(props: EmailProperties): Promise<void>;
        getCurrentUserEmailAddresses(): Promise<string>;
        resolvePrincipal(input: string, scopes: PrincipalType, sources: PrincipalSource, inputIsEmailOnly: boolean, addToUserInfoList: boolean, matchUserInfoList?: boolean): Promise<PrincipalInfo>;
        searchPrincipals(input: string, scopes: PrincipalType, sources: PrincipalSource, groupName: string, maxCount: number): Promise<PrincipalInfo[]>;
        createEmailBodyForInvitation(pageAddress: string): Promise<string>;
        expandGroupsToPrincipals(inputs: string[], maxCount?: number): Promise<PrincipalInfo[]>;
        createWikiPage(info: WikiPageCreationInformation): Promise<CreateWikiPageResult>;
    }
    export interface CreateWikiPageResult {
        data: any;
        file: File;
    }
}
declare module "sharepoint/rest" {
    import { SearchQuery, SearchResults, SearchQueryBuilder } from "sharepoint/search";
    import { SearchSuggestQuery, SearchSuggestResult } from "sharepoint/searchsuggest";
    import { Site } from "sharepoint/site";
    import { Web } from "sharepoint/webs";
    import { UserProfileQuery } from "sharepoint/userprofiles";
    import { ODataBatch } from "sharepoint/odata";
    import { UtilityMethods } from "sharepoint/utilities";
    import { ConfigOptions } from "pnp";
    /**
     * Root of the SharePoint REST module
     */
    export class SPRest {
        /**
         * Additional options to be set before sending actual http requests
         */
        private _options;
        /**
         * A string that should form the base part of the url
         */
        private _baseUrl;
        /**
         * Creates a new instance of the SPRest class
         *
         * @param options Additional options
         * @param baseUrl A string that should form the base part of the url
         */
        constructor(options?: ConfigOptions, baseUrl?: string);
        /**
         * Configures instance with additional options and baseUrl.
         * Provided configuration used by other objects in a chain
         *
         * @param options Additional options
         * @param baseUrl A string that should form the base part of the url
         */
        configure(options: ConfigOptions, baseUrl?: string): SPRest;
        /**
         * Executes a search against this web context
         *
         * @param query The SearchQuery definition
         */
        searchSuggest(query: string | SearchSuggestQuery): Promise<SearchSuggestResult>;
        /**
         * Executes a search against this web context
         *
         * @param query The SearchQuery definition
         */
        search(query: string | SearchQuery | SearchQueryBuilder): Promise<SearchResults>;
        /**
         * Begins a site collection scoped REST request
         *
         */
        readonly site: Site;
        /**
         * Begins a web scoped REST request
         *
         */
        readonly web: Web;
        /**
         * Access to user profile methods
         *
         */
        readonly profiles: UserProfileQuery;
        /**
         * Creates a new batch object for use with the Queryable.addToBatch method
         *
         */
        createBatch(): ODataBatch;
        /**
         * Static utilities methods from SP.Utilities.Utility
         */
        readonly utility: UtilityMethods;
        /**
         * Begins a cross-domain, host site scoped REST request, for use in add-in webs
         *
         * @param addInWebUrl The absolute url of the add-in web
         * @param hostWebUrl The absolute url of the host web
         */
        crossDomainSite(addInWebUrl: string, hostWebUrl: string): Site;
        /**
         * Begins a cross-domain, host web scoped REST request, for use in add-in webs
         *
         * @param addInWebUrl The absolute url of the add-in web
         * @param hostWebUrl The absolute url of the host web
         */
        crossDomainWeb(addInWebUrl: string, hostWebUrl: string): Web;
        /**
         * Implements the creation of cross domain REST urls
         *
         * @param factory The constructor of the object to create Site | Web
         * @param addInWebUrl The absolute url of the add-in web
         * @param hostWebUrl The absolute url of the host web
         * @param urlPart String part to append to the url "site" | "web"
         */
        private _cdImpl<T>(factory, addInWebUrl, hostWebUrl, urlPart);
    }
}
declare module "sharepoint/index" {
    export * from "sharepoint/caching";
    export { AttachmentFileAddResult, AttachmentFileInfo } from "sharepoint/attachmentfiles";
    export { FieldAddResult, FieldUpdateResult } from "sharepoint/fields";
    export { CheckinType, FileAddResult, WebPartsPersonalizationScope, MoveOperations, TemplateFileType, ChunkedFileUploadProgressData, File, Files } from "sharepoint/files";
    export { FeatureAddResult } from "sharepoint/features";
    export { FolderAddResult, Folder, Folders } from "sharepoint/folders";
    export { Item, Items, ItemAddResult, ItemUpdateResult, ItemUpdateResultData, PagedItemCollection } from "sharepoint/items";
    export { NavigationNodeAddResult, NavigationNodeUpdateResult, NavigationNodes, NavigationNode } from "sharepoint/navigation";
    export { List, Lists, ListAddResult, ListUpdateResult, ListEnsureResult } from "sharepoint/lists";
    export { extractOdataId, ODataParser, ODataParserBase, ODataDefaultParser, ODataRaw, ODataValue, ODataEntity, ODataEntityArray, TextFileParser, BlobFileParser, BufferFileParser, JSONFileParser } from "sharepoint/odata";
    export { Queryable, QueryableInstance, QueryableCollection, QueryableConstructor } from "sharepoint/queryable";
    export { RelatedItem, RelatedItemManger } from "sharepoint/relateditems";
    export { RoleDefinitionUpdateResult, RoleDefinitionAddResult, RoleDefinitionBindings } from "sharepoint/roles";
    export { Search, SearchProperty, SearchPropertyValue, SearchQuery, SearchQueryBuilder, SearchResult, SearchResults, Sort, SortDirection, ReorderingRule, ReorderingRuleMatchType, QueryPropertyValueType, SearchBuiltInSourceId, SearchResponse, ResultTableCollection, ResultTable } from "sharepoint/search";
    export { SearchSuggest, SearchSuggestQuery, SearchSuggestResult, PersonalResultSuggestion } from "sharepoint/searchsuggest";
    export { Site, OpenWebByIdResult } from "sharepoint/site";
    export { SiteGroupAddResult } from "sharepoint/sitegroups";
    export { UserUpdateResult, SiteUserProps } from "sharepoint/siteusers";
    export { SubscriptionAddResult, SubscriptionUpdateResult } from "sharepoint/subscriptions";
    export * from "sharepoint/types";
    export { UserCustomActionAddResult, UserCustomActionUpdateResult } from "sharepoint/usercustomactions";
    export { UtilityMethod, CreateWikiPageResult } from "sharepoint/utilities";
    export { ViewAddResult, ViewUpdateResult } from "sharepoint/views";
    export { WebPartDefinitions, WebPartDefinition, WebPart } from "sharepoint/webparts";
    export { Web, WebAddResult, WebUpdateResult, GetCatalogResult, WebEnsureUserResult } from "sharepoint/webs";
}
declare module "net/sprequestexecutorclient" {
    import { HttpClientImpl } from "net/httpclient";
    /**
     * Makes requests using the SP.RequestExecutor library.
     */
    export class SPRequestExecutorClient implements HttpClientImpl {
        /**
         * Fetches a URL using the SP.RequestExecutor library.
         */
        fetch(url: string, options: any): Promise<Response>;
        /**
         * Converts a SharePoint REST API response to a fetch API response.
         */
        private convertToResponse;
    }
}
declare module "net/nodefetchclient" {
    import { HttpClientImpl } from "net/httpclient";
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
    export class NodeFetchClient implements HttpClientImpl {
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
}
declare module "configuration/providers/cachingConfigurationProvider" {
    import { IConfigurationProvider } from "configuration/configuration";
    import { TypedHash } from "collections/collections";
    import * as storage from "utils/storage";
    /**
     * A caching provider which can wrap other non-caching providers
     *
     */
    export default class CachingConfigurationProvider implements IConfigurationProvider {
        private wrappedProvider;
        private store;
        private cacheKey;
        /**
         * Creates a new caching configuration provider
         * @constructor
         * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
         * @param {string} cacheKey Key that will be used to store cached items to the cache
         * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
         */
        constructor(wrappedProvider: IConfigurationProvider, cacheKey: string, cacheStore?: storage.PnPClientStore);
        /**
         * Gets the wrapped configuration providers
         *
         * @return {IConfigurationProvider} Wrapped configuration provider
         */
        getWrappedProvider(): IConfigurationProvider;
        /**
         * Loads the configuration values either from the cache or from the wrapped provider
         *
         * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
         */
        getConfiguration(): Promise<TypedHash<string>>;
        private selectPnPCache();
    }
}
declare module "configuration/providers/spListConfigurationProvider" {
    import { IConfigurationProvider } from "configuration/configuration";
    import { TypedHash } from "collections/collections";
    import { default as CachingConfigurationProvider } from "configuration/providers/cachingConfigurationProvider";
    import { Web } from "sharepoint/webs";
    /**
     * A configuration provider which loads configuration values from a SharePoint list
     *
     */
    export default class SPListConfigurationProvider implements IConfigurationProvider {
        private sourceWeb;
        private sourceListTitle;
        /**
         * Creates a new SharePoint list based configuration provider
         * @constructor
         * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
         * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default = "config")
         */
        constructor(sourceWeb: Web, sourceListTitle?: string);
        /**
         * Gets the url of the SharePoint site, where the configuration list is located
         *
         * @return {string} Url address of the site
         */
        readonly web: Web;
        /**
         * Gets the title of the SharePoint list, which contains the configuration settings
         *
         * @return {string} List title
         */
        readonly listTitle: string;
        /**
         * Loads the configuration values from the SharePoint list
         *
         * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
         */
        getConfiguration(): Promise<TypedHash<string>>;
        /**
         * Wraps the current provider in a cache enabled provider
         *
         * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
         */
        asCaching(): CachingConfigurationProvider;
    }
}
declare module "configuration/providers/index" {
    export { default as CachingConfigurationProvider } from "configuration/providers/cachingConfigurationProvider";
    export { default as SPListConfigurationProvider } from "configuration/providers/spListConfigurationProvider";
}
declare module "types/index" {
    export * from "sharepoint/index";
    export { ConfigOptions, FetchOptions, HttpClient, HttpClientImpl } from "net/httpclient";
    export { SPRequestExecutorClient } from "net/sprequestexecutorclient";
    export { NodeFetchClient } from "net/nodefetchclient";
    export { FetchClient } from "net/fetchclient";
    export { IConfigurationProvider } from "configuration/configuration";
    export * from "configuration/providers/index";
    export { LibraryConfiguration } from "configuration/pnplibconfig";
    export { TypedHash, Dictionary } from "collections/collections";
    export { Util } from "utils/util";
    export * from "utils/logging";
    export * from "utils/exceptions";
}
declare module "pnp" {
    import { Util } from "utils/util";
    import { PnPClientStorage } from "utils/storage";
    import { Settings } from "configuration/configuration";
    import { Logger } from "utils/logging";
    import { SPRest } from "sharepoint/rest";
    import { LibraryConfiguration } from "configuration/pnplibconfig";
    /**
     * Root class of the Patterns and Practices namespace, provides an entry point to the library
     */
    /**
     * Utility methods
     */
    export const util: typeof Util;
    /**
     * Provides access to the SharePoint REST interface
     */
    export const sp: SPRest;
    /**
     * Provides access to local and session storage
     */
    export const storage: PnPClientStorage;
    /**
     * Global configuration instance to which providers can be added
     */
    export const config: Settings;
    /**
     * Global logging instance to which subscribers can be registered and messages written
     */
    export const log: typeof Logger;
    /**
     * Allows for the configuration of the library
     */
    export const setup: (config: LibraryConfiguration) => void;
    /**
     * Expose a subset of classes from the library for public consumption
     */
    export * from "types/index";
    const Def: {
        config: Settings;
        log: typeof Logger;
        setup: (config: LibraryConfiguration) => void;
        sp: SPRest;
        storage: PnPClientStorage;
        util: typeof Util;
    };
    export default Def;
}
declare module "net/nodefetchclientbrowser" {
    import { HttpClientImpl } from "net/httpclient";
    /**
     * This module is substituted for the NodeFetchClient.ts during the packaging process. This helps to reduce the pnp.js file size by
     * not including all of the node dependencies
     */
    export class NodeFetchClient implements HttpClientImpl {
        /**
         * Always throws an error that NodeFetchClient is not supported for use in the browser
         */
        fetch(): Promise<Response>;
    }
}
declare module "types/locale" {
    export enum Locale {
        AfrikaansSouthAfrica = 1078,
        AlbanianAlbania = 1052,
        Alsatian = 1156,
        AmharicEthiopia = 1118,
        ArabicSaudiArabia = 1025,
        ArabicAlgeria = 5121,
        ArabicBahrain = 15361,
        ArabicEgypt = 3073,
        ArabicIraq = 2049,
        ArabicJordan = 11265,
        ArabicKuwait = 13313,
        ArabicLebanon = 12289,
        ArabicLibya = 4097,
        ArabicMorocco = 6145,
        ArabicOman = 8193,
        ArabicQatar = 16385,
        ArabicSyria = 10241,
        ArabicTunisia = 7169,
        ArabicUAE = 14337,
        ArabicYemen = 9217,
        ArmenianArmenia = 1067,
        Assamese = 1101,
        AzeriCyrillic = 2092,
        AzeriLatin = 1068,
        Bashkir = 1133,
        Basque = 1069,
        Belarusian = 1059,
        BengaliIndia = 1093,
        BengaliBangladesh = 2117,
        BosnianBosniaHerzegovina = 5146,
        Breton = 1150,
        Bulgarian = 1026,
        Burmese = 1109,
        Catalan = 1027,
        CherokeeUnitedStates = 1116,
        ChinesePeoplesRepublicofChina = 2052,
        ChineseSingapore = 4100,
        ChineseTaiwan = 1028,
        ChineseHongKongSAR = 3076,
        ChineseMacaoSAR = 5124,
        Corsican = 1155,
        Croatian = 1050,
        CroatianBosniaHerzegovina = 4122,
        Czech = 1029,
        Danish = 1030,
        Dari = 1164,
        Divehi = 1125,
        DutchNetherlands = 1043,
        DutchBelgium = 2067,
        Edo = 1126,
        EnglishUnitedStates = 1033,
        EnglishUnitedKingdom = 2057,
        EnglishAustralia = 3081,
        EnglishBelize = 10249,
        EnglishCanada = 4105,
        EnglishCaribbean = 9225,
        EnglishHongKongSAR = 15369,
        EnglishIndia = 16393,
        EnglishIndonesia = 14345,
        EnglishIreland = 6153,
        EnglishJamaica = 8201,
        EnglishMalaysia = 17417,
        EnglishNewZealand = 5129,
        EnglishPhilippines = 13321,
        EnglishSingapore = 18441,
        EnglishSouthAfrica = 7177,
        EnglishTrinidad = 11273,
        EnglishZimbabwe = 12297,
        Estonian = 1061,
        Faroese = 1080,
        Farsi = 1065,
        Filipino = 1124,
        Finnish = 1035,
        FrenchFrance = 1036,
        FrenchBelgium = 2060,
        FrenchCameroon = 11276,
        FrenchCanada = 3084,
        FrenchDemocraticRepofCongo = 9228,
        FrenchCotedIvoire = 12300,
        FrenchHaiti = 15372,
        FrenchLuxembourg = 5132,
        FrenchMali = 13324,
        FrenchMonaco = 6156,
        FrenchMorocco = 14348,
        FrenchNorthAfrica = 58380,
        FrenchReunion = 8204,
        FrenchSenegal = 10252,
        FrenchSwitzerland = 4108,
        FrenchWestIndies = 7180,
        FrisianNetherlands = 1122,
        FulfuldeNigeria = 1127,
        FYROMacedonian = 1071,
        Galician = 1110,
        Georgian = 1079,
        GermanGermany = 1031,
        GermanAustria = 3079,
        GermanLiechtenstein = 5127,
        GermanLuxembourg = 4103,
        GermanSwitzerland = 2055,
        Greek = 1032,
        Greenlandic = 1135,
        GuaraniParaguay = 1140,
        Gujarati = 1095,
        HausaNigeria = 1128,
        HawaiianUnitedStates = 1141,
        Hebrew = 1037,
        Hindi = 1081,
        Hungarian = 1038,
        IbibioNigeria = 1129,
        Icelandic = 1039,
        IgboNigeria = 1136,
        Indonesian = 1057,
        Inuktitut = 1117,
        Irish = 2108,
        ItalianItaly = 1040,
        ItalianSwitzerland = 2064,
        Japanese = 1041,
        Kiche = 1158,
        Kannada = 1099,
        KanuriNigeria = 1137,
        Kashmiri = 2144,
        KashmiriArabic = 1120,
        Kazakh = 1087,
        Khmer = 1107,
        Kinyarwanda = 1159,
        Konkani = 1111,
        Korean = 1042,
        KyrgyzCyrillic = 1088,
        Lao = 1108,
        Latin = 1142,
        Latvian = 1062,
        Lithuanian = 1063,
        Luxembourgish = 1134,
        MalayMalaysia = 1086,
        MalayBruneiDarussalam = 2110,
        Malayalam = 1100,
        Maltese = 1082,
        Manipuri = 1112,
        MaoriNewZealand = 1153,
        Mapudungun = 1146,
        Marathi = 1102,
        Mohawk = 1148,
        MongolianCyrillic = 1104,
        MongolianMongolian = 2128,
        Nepali = 1121,
        NepaliIndia = 2145,
        NorwegianBokmål = 1044,
        NorwegianNynorsk = 2068,
        Occitan = 1154,
        Oriya = 1096,
        Oromo = 1138,
        Papiamentu = 1145,
        Pashto = 1123,
        Polish = 1045,
        PortugueseBrazil = 1046,
        PortuguesePortugal = 2070,
        Punjabi = 1094,
        PunjabiPakistan = 2118,
        QuechaBolivia = 1131,
        QuechaEcuador = 2155,
        QuechaPeru = 3179,
        RhaetoRomanic = 1047,
        Romanian = 1048,
        RomanianMoldava = 2072,
        Russian = 1049,
        RussianMoldava = 2073,
        SamiLappish = 1083,
        Sanskrit = 1103,
        ScottishGaelic = 1084,
        Sepedi = 1132,
        SerbianCyrillic = 3098,
        SerbianLatin = 2074,
        SindhiIndia = 1113,
        SindhiPakistan = 2137,
        SinhaleseSriLanka = 1115,
        Slovak = 1051,
        Slovenian = 1060,
        Somali = 1143,
        Sorbian = 1070,
        SpanishSpainModernSort = 3082,
        SpanishSpainTraditionalSort = 1034,
        SpanishArgentina = 11274,
        SpanishBolivia = 16394,
        SpanishChile = 13322,
        SpanishColombia = 9226,
        SpanishCostaRica = 5130,
        SpanishDominicanRepublic = 7178,
        SpanishEcuador = 12298,
        SpanishElSalvador = 17418,
        SpanishGuatemala = 4106,
        SpanishHonduras = 18442,
        SpanishLatinAmerica = 22538,
        SpanishMexico = 2058,
        SpanishNicaragua = 19466,
        SpanishPanama = 6154,
        SpanishParaguay = 15370,
        SpanishPeru = 10250,
        SpanishPuertoRico = 20490,
        SpanishUnitedStates = 21514,
        SpanishUruguay = 14346,
        SpanishVenezuela = 8202,
        Sutu = 1072,
        Swahili = 1089,
        Swedish = 1053,
        SwedishFinland = 2077,
        Syriac = 1114,
        Tajik = 1064,
        TamazightArabic = 1119,
        TamazightLatin = 2143,
        Tamil = 1097,
        Tatar = 1092,
        Telugu = 1098,
        Thai = 1054,
        TibetanBhutan = 2129,
        TibetanPeoplesRepublicofChina = 1105,
        TigrignaEritrea = 2163,
        TigrignaEthiopia = 1139,
        Tsonga = 1073,
        Tswana = 1074,
        Turkish = 1055,
        Turkmen = 1090,
        UighurChina = 1152,
        Ukrainian = 1058,
        Urdu = 1056,
        UrduIndia = 2080,
        UzbekCyrillic = 2115,
        UzbekLatin = 1091,
        Venda = 1075,
        Vietnamese = 1066,
        Welsh = 1106,
        Wolof = 1160,
        Xhosa = 1076,
        Yakut = 1157,
        Yi = 1144,
        Yiddish = 1085,
        Yoruba = 1130,
        Zulu = 1077,
        HIDHumanInterfaceDevice = 1279,
    }
}
declare module "utils/decorators" {
    export function deprecated(deprecationVersion: string, message: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}