import { IOneNote } from "./types.js";
declare module "../users/types" {
    interface _User {
        readonly onenote: IOneNote;
    }
    interface IUser {
        readonly onenote: IOneNote;
    }
}
//# sourceMappingURL=users.d.ts.map