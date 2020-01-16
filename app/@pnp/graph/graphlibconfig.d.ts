import { ILibraryConfiguration, ITypedHash, IHttpClientImpl } from "@pnp/common";
export interface GraphConfigurationPart {
    graph?: {
        /**
         * Any headers to apply to all requests
         */
        headers?: ITypedHash<string>;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => IHttpClientImpl;
    };
}
export interface GraphConfiguration extends ILibraryConfiguration, GraphConfigurationPart {
}
export declare function setup(config: GraphConfiguration): void;
export declare class GraphRuntimeConfigImpl {
    get headers(): ITypedHash<string>;
    get fetchClientFactory(): () => IHttpClientImpl;
}
export declare let GraphRuntimeConfig: GraphRuntimeConfigImpl;
//# sourceMappingURL=graphlibconfig.d.ts.map