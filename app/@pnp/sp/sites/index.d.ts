import { ISite } from "./types.js";
export { IOpenWebByIdResult, ISite, Site, IContextInfo, IDocumentLibraryInformation, } from "./types.js";
declare module "../rest" {
    interface SPRest {
        readonly site: ISite;
    }
}
//# sourceMappingURL=index.d.ts.map