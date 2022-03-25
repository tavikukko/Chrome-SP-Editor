import { Attachment as IAttachmentType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable.js";
import { IGetById } from "../decorators.js";
/**
 * Attachment
 */
export declare class _Attachment extends _GraphQueryableInstance<IAttachmentType> {
}
export interface IAttachment extends _Attachment {
}
export declare const Attachment: import("../graphqueryable.js").IGraphInvokableFactory<IAttachment>;
/**
 * Attachments
 */
export declare class _Attachments extends _GraphQueryableCollection<IAttachmentType[]> {
    /**
     * Add attachment to this collection
     *
     * @param name Name given to the attachment file
     * @param bytes File content
     */
    addFile(name: string, bytes: string | Blob): Promise<IAttachmentType>;
}
export interface IAttachments extends _Attachments, IGetById<IAttachment> {
}
export declare const Attachments: import("../graphqueryable.js").IGraphInvokableFactory<IAttachments>;
//# sourceMappingURL=types.d.ts.map