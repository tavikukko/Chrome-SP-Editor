import { ILibraryConfiguration, ITypedHash, IHttpClientImpl } from "@pnp/common";
export declare const emptyGuid = "00000000-0000-0000-0000-000000000000";
export interface SPConfigurationPart {
    sp?: {
        /**
         * Any headers to apply to all requests
         */
        headers?: ITypedHash<string>;
        /**
         * The base url used for all requests
         */
        baseUrl?: string;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => IHttpClientImpl;
    };
}
export interface SPConfiguration extends ILibraryConfiguration, SPConfigurationPart {
}
export declare function setup(config: SPConfiguration): void;
export declare class SPRuntimeConfigImpl {
    get headers(): ITypedHash<string>;
    get baseUrl(): string | null;
    get fetchClientFactory(): () => IHttpClientImpl;
}
export declare let SPRuntimeConfig: SPRuntimeConfigImpl;
//# sourceMappingURL=splibconfig.d.ts.map