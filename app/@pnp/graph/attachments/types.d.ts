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
export declare const Attachment: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IAttachment & import("@pnp/odata").IInvokable<any>;
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
export declare const Attachments: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IAttachments & import("@pnp/odata").IInvokable<any>;
//# sourceMappingURL=types.d.ts.map