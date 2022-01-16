import { IWeb } from "./types.js";
import { SPBatch } from "../batch.js";
export { IWeb, IWebs, Web, IWebAddResult, IWebUpdateResult, Webs, IWebInfo, IStorageEntity, IWebInfosData, } from "./types.js";
declare module "../rest" {
    interface SPRest {
        /**
         * Access to the current web instance
         */
        readonly web: IWeb;
        /**
         * Creates a new batch object for use with the SharePointQueryable.addToBatch method
         *
         */
        createBatch(): SPBatch;
    }
}
//# sourceMappingURL=index.d.ts.map