import { IPhoto } from "./types.js";
declare module "../groups/types" {
    interface _Group {
        readonly photo: IPhoto;
    }
    interface IGroup {
        readonly photo: IPhoto;
    }
}
//# sourceMappingURL=groups.d.ts.map