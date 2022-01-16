import { IInvitations } from "./types.js";
export { IInvitationAddResult, IInvitations, Invitations, } from "./types.js";
declare module "../rest" {
    interface GraphRest {
        readonly invitations: IInvitations;
    }
}
//# sourceMappingURL=index.d.ts.map