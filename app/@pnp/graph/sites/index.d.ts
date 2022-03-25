import { ISites } from "./types.js";
import "./group.js";
export { ISites, Sites, ISite, Site, } from "./types.js";
declare module "../fi" {
    interface GraphFI {
        readonly sites: ISites;
    }
}
//# sourceMappingURL=index.d.ts.map