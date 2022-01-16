import "./web.js";
import { ISiteDesigns } from "./types.js";
export { ISiteDesignCreationInfo, ISiteDesignInfo, ISiteDesignPrincipals, ISiteDesignUpdateInfo, ISiteDesigns, SiteDesigns, ISiteDesignRun, ISiteDesignTask, ISiteScriptActionStatus, } from "./types.js";
declare module "../rest" {
    interface SPRest {
        readonly siteDesigns: ISiteDesigns;
    }
}
//# sourceMappingURL=index.d.ts.map