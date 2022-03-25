import "./web.js";
import "./list.js";
import { ISiteScripts } from "./types.js";
export { SiteScripts, ISiteScripts, ISiteScriptInfo, ISiteScriptUpdateInfo, ISiteScriptSerializationInfo, ISiteScriptSerializationResult, } from "./types.js";
declare module "../fi" {
    interface SPFI {
        readonly siteScripts: ISiteScripts;
    }
}
//# sourceMappingURL=index.d.ts.map