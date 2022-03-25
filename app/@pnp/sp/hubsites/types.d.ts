import { _SPCollection, _SPInstance } from "../spqueryable.js";
import { ISerializableNavigationNode } from "../navigation/types.js";
import { ISite } from "../sites/types.js";
export declare class _HubSites extends _SPCollection<IHubSiteInfo[]> {
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    getById(id: string): IHubSite;
}
export interface IHubSites extends _HubSites {
}
export declare const HubSites: import("../spqueryable.js").ISPInvokableFactory<IHubSites>;
export declare class _HubSite extends _SPInstance<IHubSiteInfo> {
    /**
     * Gets the ISite instance associated with this hubsite
     */
    getSite(): Promise<ISite>;
}
export interface IHubSite extends _HubSite {
}
export declare const HubSite: import("../spqueryable.js").ISPInvokableFactory<IHubSite>;
export interface IHubSiteInfo {
    ID: string;
    Title: string;
    SiteId: string;
    TenantInstanceId: string;
    SiteUrl: string;
    LogoUrl: string;
    Description: string;
    Targets: string;
    SiteDesignId: string;
    RequiresJoinApproval: boolean;
    RelatedHubSiteIds: string[];
    ParentHubSiteId: string;
    HideNameInNavigation: boolean;
    EnablePermissionsSync: boolean;
}
export interface IHubSiteWebData {
    headerEmphasis: string | null;
    themeKey: string | null;
    name: string | null;
    url: string;
    logoUrl: string | null;
    usesMetadataNavigation: boolean;
    megaMenuEnabled: boolean;
    navigation: ISerializableNavigationNode[];
    isNavAudienceTargeted: boolean;
    siteDesignId: string;
    requiresJoinApproval: boolean;
    hideNameInNavigation: boolean;
    parentHubSiteId: string;
    relatedHubSiteIds: string[] | null;
}
//# sourceMappingURL=types.d.ts.map