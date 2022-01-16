import { IConversations, ISenders } from "./types.js";
declare module "../groups/types" {
    interface _Group {
        readonly conversations: IConversations;
        readonly acceptedSenders: ISenders;
        readonly rejectedSenders: ISenders;
    }
    interface IGroup {
        readonly conversations: IConversations;
        readonly acceptedSenders: ISenders;
        readonly rejectedSenders: ISenders;
    }
}
//# sourceMappingURL=groups.d.ts.map