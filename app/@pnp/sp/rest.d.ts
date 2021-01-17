import { IConfigOptions, ISPFXContext, Runtime, ITypedHash } from "@pnp/common";
import { ISPConfiguration } from "./splibconfig.js";
/**
 * Root of the SharePoint REST module
 */
export declare class SPRest {
    private _options;
    private _baseUrl;
    private _runtime;
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(_options?: IConfigOptions, _baseUrl?: string, _runtime?: Runtime);
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    configure(options: IConfigOptions, baseUrl?: string): SPRest;
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    setup(config: ISPConfiguration | ISPFXContext): void;
    createIsolated<T = ITypedHash<any>>(init?: Partial<ISPIsolatedInit<T>>): Promise<SPRest>;
    protected childConfigHook<T>(callback: ({ options: IConfigOptions, baseUrl: string, runtime: Runtime }: {
        options: any;
        baseUrl: any;
        runtime: any;
    }) => T): T;
}
export interface ISPIsolatedInit<T> {
    cloneGlobal: boolean;
    config: T;
    options: IConfigOptions;
    baseUrl: string;
}
export declare const sp: SPRest;
//# sourceMappingURL=rest.d.ts.map