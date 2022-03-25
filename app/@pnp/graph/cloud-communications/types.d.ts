import { Presence as IUserPresence } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable.js";
/**
 * Presence
 */
export declare class _Presence extends _GraphQueryableInstance<IUserPresence> {
}
export interface IPresence extends _Presence {
}
export declare const Presence: import("../graphqueryable.js").IGraphInvokableFactory<IPresence>;
export declare class _Communications extends _GraphQueryableCollection<IUserPresence[]> {
    /**
     * Retrieve presence information for a group of users.
     *
     * @param ids An array of user id's to retrieve presence for.
     */
    getPresencesByUserId(ids: string[]): Promise<IUserPresence[]>;
}
export interface ICommunications extends _Communications {
}
export declare const Communications: import("../graphqueryable.js").IGraphInvokableFactory<ICommunications>;
//# sourceMappingURL=types.d.ts.map