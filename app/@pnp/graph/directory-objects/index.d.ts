import { IDirectoryObjects } from "./types.js";
export { IDirectoryObject, DirectoryObjectTypes, DirectoryObject, DirectoryObjects, IDirectoryObjects, } from "./types.js";
declare module "../rest" {
    interface GraphRest {
        readonly directoryObjects: IDirectoryObjects;
    }
}
//# sourceMappingURL=index.d.ts.map