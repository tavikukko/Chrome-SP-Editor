import { IUser, IUsers } from "./types.js";
export { IUser, IUsers, User, Users, IPeople, People, } from "./types.js";
declare module "../rest" {
    interface GraphRest {
        readonly me: IUser;
        readonly users: IUsers;
    }
}
//# sourceMappingURL=index.d.ts.map