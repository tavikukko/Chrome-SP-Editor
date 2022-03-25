import { IAppCatalog } from "./types.js";
declare module "../webs/types" {
    interface _Web {
        appcatalog: IAppCatalog;
    }
    interface IWeb {
        /**
         * Gets the appcatalog (if it exists associated with this web)
         */
        appcatalog: IAppCatalog;
    }
}
//# sourceMappingURL=web.d.ts.map