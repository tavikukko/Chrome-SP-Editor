import { IAttachments } from "./types.js";
declare module "../conversations/types" {
    interface _Post {
        readonly attachments: IAttachments;
    }
    interface IPost {
        readonly attachments: IAttachments;
    }
}
//# sourceMappingURL=conversations.d.ts.map