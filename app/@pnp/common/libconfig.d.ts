import { ITypedHash } from "./collections.js";
import { ISPFXContext } from "./spfxcontextinterface.js";
export interface ILibraryConfiguration {
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
     * Used to supply the current context from an SPFx webpart to the library
     */
    spfxContext?: ISPFXContext;
    /**
     * Used to place the library in ie11 compat mode. Some features may not work as expected
     */
    ie11?: boolean;
}
export declare function setup<T = ILibraryConfiguration>(config: T, runtime?: Runtime): void;
export declare function onRuntimeCreate(hook: (runtime: Runtime) => void): void;
export declare class Runtime {
    private _v;
    constructor(_v?: Map<string | number | symbol, any>);
    /**
     *
     * @param config The set of properties to add to this runtime instance
     */
    assign<T = ITypedHash<any>>(config: T): void;
    /**
     * Gets a runtime value using T to define the available keys, and R to define the type returned by that key
     *
     * @param key
     */
    get<T = ILibraryConfiguration, R = any>(key: keyof T): R;
    /**
     * Exports the internal Map representing this runtime
     */
    export(): Map<string | number | symbol, any>;
}
export declare const DefaultRuntime: Runtime;
//# sourceMappingURL=libconfig.d.ts.map