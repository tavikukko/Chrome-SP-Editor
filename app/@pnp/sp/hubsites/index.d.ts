import { IHubSites } from "./types.js";
import "./site.js";
import "./web.js";
export { HubSite, HubSites, IHubSite, IHubSiteInfo, IHubSiteWebData, IHubSites, } from "./types.js";
declare module "../fi" {
    interface SPFI {
        /**
         * Lists all of the subsites
         */
        readonly hubSites: IHubSites;
    }
}
//# sourceMappingURL=index.d.ts.map