import { ILibraryConfiguration } from "@pnp/common";
import { ISPConfigurationPart } from "@pnp/sp";
import { IGraphConfigurationPart } from "@pnp/graph";
export interface PnPConfiguration extends ILibraryConfiguration, ISPConfigurationPart, IGraphConfigurationPart {
}
export declare function setup(config: PnPConfiguration): void;
//# sourceMappingURL=pnplibconfig.d.ts.map