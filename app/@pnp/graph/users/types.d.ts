import { _GraphQueryableCollection } from "../graphqueryable.js";
import { User as IUserType, Person as IPersonType } from "@microsoft/microsoft-graph-types";
import { _DirectoryObject, IDirectoryObjects } from "../directory-objects/types.js";
import { IUpdateable, IDeleteable, IGetById } from "../decorators.js";
export declare class _User extends _DirectoryObject<IUserType> {
    /**
    * The groups and directory roles associated with the user
    */
    get memberOf(): IDirectoryObjects;
    /**
     * Retrieve a collection of person objects ordered by their relevance to the user
     */
    get people(): IPeople;
    /**
    * People that have direct reports to the user
    */
    get directReports(): IPeople;
    /**
    * The manager associated with this user
    */
    get manager(): IUser;
}
export interface IUser extends _User, IUpdateable<IUserType>, IDeleteable {
}
export declare const User: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IUser & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
export declare class _Users extends _GraphQueryableCollection<IUserType[]> {
}
export interface IUsers extends _Users, IGetById<IUser> {
}
export declare const Users: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IUsers & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
export declare class _People extends _GraphQueryableCollection<IPersonType[]> {
}
export interface IPeople extends _People {
}
export declare const People: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IPeople & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
//# sourceMappingURL=types.d.ts.map