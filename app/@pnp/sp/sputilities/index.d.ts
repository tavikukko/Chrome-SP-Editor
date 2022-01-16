import { IUtilities } from "./types.js";
export { ICreateWikiPageResult, IEmailProperties, IUtilities, IWikiPageCreationInfo, Utilities, } from "./types.js";
declare module "../rest" {
    interface SPRest {
        readonly utility: IUtilities;
    }
}
//# sourceMappingURL=index.d.ts.map