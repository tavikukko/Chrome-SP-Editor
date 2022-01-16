import { IFolder } from "./types.js";
declare module "../lists/types" {
    interface _List {
        readonly rootFolder: IFolder;
    }
    interface IList {
        /**
         * Root folder for this list/library
         */
        readonly rootFolder: IFolder;
    }
}
//# sourceMappingURL=list.d.ts.map