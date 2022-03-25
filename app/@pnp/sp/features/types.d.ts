import { _SPInstance, _SPCollection } from "../spqueryable.js";
export declare class _Features extends _SPCollection<IFeatureInfo[]> {
    /**
     * Adds (activates) the specified feature
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    add(featureId: string, force?: boolean): Promise<IFeatureAddResult>;
    /**
     * Gets a feature from the collection with the specified guid
     *
     * @param id The Id of the feature (GUID)
     */
    getById(id: string): IFeature;
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    remove(featureId: string, force?: boolean): Promise<any>;
}
export interface IFeatures extends _Features {
}
export declare const Features: import("../spqueryable.js").ISPInvokableFactory<IFeatures>;
export declare class _Feature extends _SPInstance<IFeatureInfo> {
}
export interface IFeature extends _Feature {
}
export declare const Feature: import("../spqueryable.js").ISPInvokableFactory<IFeature>;
/**
 * Result from adding (activating) a feature to the collection
 */
export interface IFeatureAddResult {
    data: IFeatureInfo;
    feature: IFeature;
}
export interface IFeatureInfo {
    DefinitionId: string;
}
//# sourceMappingURL=types.d.ts.map