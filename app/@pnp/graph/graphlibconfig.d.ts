import { ILibraryConfiguration, ITypedHash, IHttpClientImpl, Runtime } from "@pnp/common";
export interface IGraphConfigurationPart {
    graph?: IGraphConfigurationProps;
}
export interface IGraphConfigurationProps {
    /**
    * The base url used for all requests (default: none)
    */
    baseUrl?: string;
    /**
     * Any headers to apply to all requests
     */
    headers?: ITypedHash<string>;
    /**
     * Defines a factory method used to create fetch clients
     */
    fetchClientFactory?: () => IHttpClientImpl;
}
export interface IGraphConfiguration extends ILibraryConfiguration, IGraphConfigurationPart {
}
export declare function setup(config: IGraphConfiguration, runtime?: Runtime): void;
//# sourceMappingURL=graphlibconfig.d.ts.map