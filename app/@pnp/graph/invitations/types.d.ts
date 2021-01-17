import { ITypedHash } from "@pnp/common";
import { Invitation as IInvitationType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection } from "../graphqueryable.js";
/**
 * Invitations
 */
export declare class _Invitations extends _GraphQueryableCollection<IInvitationType[]> {
    /**
     * Create a new Invitation via invitation manager.
     *
     * @param invitedUserEmailAddress The email address of the user being invited.
     * @param inviteRedirectUrl The URL user should be redirected to once the invitation is redeemed.
     * @param additionalProperties A plain object collection of additional properties you want to set in the invitation
     */
    create(invitedUserEmailAddress: string, inviteRedirectUrl: string, additionalProperties?: ITypedHash<any>): Promise<IInvitationAddResult>;
}
export interface IInvitations extends _Invitations {
}
export declare const Invitations: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IInvitations & import("../../odata/invokable-binder.js").IInvokable<any>;
/**
 * IInvitationAddResult
 */
export interface IInvitationAddResult {
    data: IInvitationType;
}
//# sourceMappingURL=types.d.ts.map