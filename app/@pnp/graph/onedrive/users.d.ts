import { IDrive, IDrives } from "./types.js";
declare module "../users/types" {
    interface _User {
        readonly drive: IDrive;
        readonly drives: IDrives;
    }
    interface IUser {
        readonly drive: IDrive;
        readonly drives: IDrives;
    }
}
//# sourceMappingURL=users.d.ts.map