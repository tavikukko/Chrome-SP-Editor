import { IUser, IUsers } from "./types.js";
export { IUser, IUsers, User, Users, IPeople, People, } from "./types.js";
declare module "../fi" {
    interface GraphFI {
        readonly me: IUser;
        readonly users: IUsers;
    }
}
//# sourceMappingURL=index.d.ts.map