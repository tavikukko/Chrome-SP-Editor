import { IDeleteableWithETag, _SPCollection, _SPInstance } from "../spqueryable.js";
export declare class _Attachments extends _SPCollection<IAttachmentInfo[]> {
    /**
    * Gets a Attachment File by filename
    *
    * @param name The name of the file, including extension.
    */
    getByName(name: string): IAttachment;
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    add(name: string, content: string | Blob | ArrayBuffer): Promise<IAttachmentAddResult>;
}
export interface IAttachments extends _Attachments {
}
export declare const Attachments: import("../spqueryable.js").ISPInvokableFactory<IAttachments>;
export declare class _Attachment extends _SPInstance<IAttachmentInfo> {
    delete: (this: import("../spqueryable.js").ISPQueryable<any>, eTag?: string) => Promise<void>;
    /**
     * Gets the contents of the file as text
     *
     */
    getText(): Promise<string>;
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    getBlob(): Promise<Blob>;
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    getBuffer(): Promise<ArrayBuffer>;
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    getJSON(): Promise<any>;
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    setContent(content: string | ArrayBuffer | Blob): Promise<IAttachment>;
    /**
     * Delete this attachment file and send it to recycle bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    recycle(eTag?: string): Promise<void>;
    private getParsed;
}
export interface IAttachment extends _Attachment, IDeleteableWithETag {
}
export declare const Attachment: import("../spqueryable.js").ISPInvokableFactory<IAttachment>;
export interface IAttachmentAddResult {
    file: IAttachment;
    data: IAttachmentFileInfo;
}
export interface IAttachmentFileInfo {
    name: string;
    content: string | Blob | ArrayBuffer;
}
export interface IAttachmentInfo {
    FileName: string;
    FileNameAsPath: {
        DecodedUrl: string;
    };
    ServerRelativePath: {
        DecodedUrl: string;
    };
    ServerRelativeUrl: string;
}
//# sourceMappingURL=types.d.ts.map