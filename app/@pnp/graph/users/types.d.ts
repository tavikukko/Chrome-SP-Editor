import { _GraphQueryableCollection } from "../graphqueryable";
import { User as IUserType } from "@microsoft/microsoft-graph-types";
import { _DirectoryObject, IDirectoryObjects } from "../directory-objects/types";
import { IUpdateable, IDeleteable, IGetById } from "../decorators";
export declare class _User extends _DirectoryObject<IUserType> {
    /**
    * The groups and directory roles associated with the user
    */
    get memberOf(): IDirectoryObjects;
}
export interface IUser extends _User, IUpdateable<IUserType>, IDeleteable {
}
export declare const User: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IUser;
/**
 * Describes a collection of Users objects
 *
 */
export declare class _Users extends _GraphQueryableCollection<IUserType[]> {
}
export interface IUsers extends _Users, IGetById<IUser> {
}
export declare const Users: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IUsers;
//# sourceMappingURL=types.d.ts.map