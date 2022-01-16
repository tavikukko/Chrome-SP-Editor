import { IPresence } from "./types.js";
declare module "../users/types" {
    interface _User {
        readonly presence: IPresence;
    }
    interface IUser {
        readonly presence: IPresence;
    }
}
//# sourceMappingURL=users.d.ts.map