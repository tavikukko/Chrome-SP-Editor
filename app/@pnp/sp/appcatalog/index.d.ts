import { IWeb } from "../webs/types.js";
import "./web.js";
export { IAppAddResult, IApp, IAppCatalog, App, AppCatalog, } from "./types.js";
declare module "../rest" {
    interface SPRest {
        getTenantAppCatalogWeb(): Promise<IWeb>;
    }
}
//# sourceMappingURL=index.d.ts.map