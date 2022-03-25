import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable.js";
import { Site as ISiteType } from "@microsoft/microsoft-graph-types";
/**
 * Sites
 */
export declare class _Sites extends _GraphQueryableCollection<ISiteType[]> {
    /**
     * Gets the team site for the group
     */
    get root(): ISite;
}
export interface ISites extends _Sites {
}
export declare const Sites: import("../graphqueryable.js").IGraphInvokableFactory<ISites>;
/**
 * Site
 */
export declare class _Site extends _GraphQueryableInstance<ISiteType> {
    get sites(): ISites;
}
export interface ISite extends _Site {
}
export declare const Site: import("../graphqueryable.js").IGraphInvokableFactory<ISite>;
//# sourceMappingURL=types.d.ts.map