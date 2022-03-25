import { TimelinePipe } from "@pnp/core";
import { IGraphInvokableFactory, IGraphQueryable, GraphInit } from "./graphqueryable.js";
export declare class GraphFI {
    protected _root: IGraphQueryable;
    /**
     * Creates a new instance of the GraphFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root?: GraphInit);
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
    protected create<T extends IGraphQueryable>(factory: IGraphInvokableFactory<T>, path?: string): T;
}
export declare function graphfi(root?: GraphInit | GraphFI): GraphFI;
//# sourceMappingURL=fi.d.ts.map