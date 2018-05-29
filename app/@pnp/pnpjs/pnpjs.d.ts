import { Logger } from "@pnp/logging";
import { Util, PnPClientStorage } from "@pnp/common";
import { Settings } from "@pnp/config-store";
import { GraphRest } from "@pnp/graph";
import { SPRestAddIn } from "@pnp/sp-addinhelpers";
import { PnPConfiguration } from "./config/pnplibconfig";
/**
 * Root class of the Patterns and Practices namespace, provides an entry point to the library
 */
/**
 * Re-export everything from the dependencies to match the previous pattern
 */
export * from "@pnp/sp";
export * from "@pnp/graph";
export * from "@pnp/common";
export * from "@pnp/logging";
export * from "@pnp/config-store";
export * from "@pnp/odata";
/**
 * Utility methods
 */
export declare const util: typeof Util;
/**
 * Provides access to the SharePoint REST interface
 */
export declare const sp: SPRestAddIn;
/**
 * Provides access to the Microsoft Graph REST interface
 */
export declare const graph: GraphRest;
/**
 * Provides access to local and session storage
 */
export declare const storage: PnPClientStorage;
/**
 * Global configuration instance to which providers can be added
 */
export declare const config: Settings;
/**
 * Global logging instance to which subscribers can be registered and messages written
 */
export declare const log: typeof Logger;
/**
 * Allows for the configuration of the library
 */
export declare const setup: (config: PnPConfiguration) => void;
declare const Def: {
    config: Settings;
    graph: GraphRest;
    log: typeof Logger;
    setup: (config: PnPConfiguration) => void;
    sp: SPRestAddIn;
    storage: PnPClientStorage;
    util: typeof Util;
};
export default Def;
