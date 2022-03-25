import { TimelinePipe } from "@pnp/core";
import { ISPQueryable, SPInit } from "./spqueryable.js";
export declare class SPFI {
    protected _root: ISPQueryable;
    /**
     * Creates a new instance of the SPFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root?: SPInit);
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors: TimelinePipe[]): this;
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    protected create<T extends ISPQueryable>(factory: (q: ISPQueryable, path?: string) => T, path?: string): T;
}
export declare function spfi(root?: SPInit | SPFI): SPFI;
//# sourceMappingURL=fi.d.ts.map