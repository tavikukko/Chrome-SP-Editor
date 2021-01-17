import { IGraphConfiguration } from "./graphlibconfig.js";
import { GraphBatch } from "./batch.js";
import { Runtime, IConfigOptions, ISPFXContext, ITypedHash } from "@pnp/common";
export declare class GraphRest {
    private _options;
    private _baseUrl;
    private _runtime;
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(_options?: IConfigOptions, _baseUrl?: "v1.0" | "beta", _runtime?: Runtime);
    createBatch(): GraphBatch;
    setup(config: IGraphConfiguration | ISPFXContext): void;
    createIsolated<T = ITypedHash<any>>(init?: Partial<IGraphIsolatedInit<T>>): Promise<GraphRest>;
    protected childConfigHook<T>(callback: ({ options: IConfigOptions, baseUrl: string, runtime: Runtime }: {
        options: any;
        baseUrl: any;
        runtime: any;
    }) => T): T;
}
export interface IGraphIsolatedInit<T> {
    cloneGlobal: boolean;
    config: T;
    options: IConfigOptions;
    baseUrl: "v1.0" | "beta";
}
export declare const graph: GraphRest;
//# sourceMappingURL=rest.d.ts.map