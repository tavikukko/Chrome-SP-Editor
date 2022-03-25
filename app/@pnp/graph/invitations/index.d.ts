import { IInvitations } from "./types.js";
export { IInvitationAddResult, IInvitations, Invitations, } from "./types.js";
declare module "../fi" {
    interface GraphFI {
        readonly invitations: IInvitations;
    }
}
//# sourceMappingURL=index.d.ts.map