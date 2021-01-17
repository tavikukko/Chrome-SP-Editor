import { ILibraryConfiguration, ITypedHash, IHttpClientImpl, Runtime } from "@pnp/common";
export declare const emptyGuid = "00000000-0000-0000-0000-000000000000";
export interface ISPConfigurationPart {
    sp?: ISPConfigurationProps;
}
export interface ISPConfigurationProps {
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
}
export interface ISPConfiguration extends ILibraryConfiguration, ISPConfigurationPart {
}
export declare function setup(config: ISPConfiguration, runtime?: Runtime): void;
//# sourceMappingURL=splibconfig.d.ts.map