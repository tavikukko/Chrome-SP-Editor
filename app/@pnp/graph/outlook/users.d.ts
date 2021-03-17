import { IOutlook } from "./types.js";
declare module "../users/types" {
    interface _User {
        readonly outlook: IOutlook;
    }
    interface IUser {
        readonly outlook: IOutlook;
    }
}
//# sourceMappingURL=users.d.ts.map