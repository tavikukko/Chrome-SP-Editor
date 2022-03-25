import { _GraphQueryableSearchableCollection } from "../graphqueryable.js";
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
export declare const User: import("../graphqueryable.js").IGraphInvokableFactory<IUser>;
export declare class _Users extends _GraphQueryableSearchableCollection<IUserType[]> {
}
export interface IUsers extends _Users, IGetById<IUser> {
}
export declare const Users: import("../graphqueryable.js").IGraphInvokableFactory<IUsers>;
export declare class _People extends _GraphQueryableSearchableCollection<IPersonType[]> {
}
export interface IPeople extends _People {
}
export declare const People: import("../graphqueryable.js").IGraphInvokableFactory<IPeople>;
//# sourceMappingURL=types.d.ts.map