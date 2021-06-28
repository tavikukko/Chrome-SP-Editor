import { Message as IMessageType, MailFolder as IMailFolderType, MailboxSettings as IMailboxSettingsType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable.js";
import { IGetById, IAddable, IUpdateable } from "../decorators.js";
/**
 * Message
 */
export declare class _Message extends _GraphQueryableInstance<IMessageType> {
}
export interface IMessage extends _Message {
}
export declare const Message: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IMessage & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
/**
 * Messages
 */
export declare class _Messages extends _GraphQueryableCollection<IMessageType[]> {
}
export interface IMessages extends _Messages, IGetById<IMessage>, IAddable<IMessageType> {
}
export declare const Messages: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IMessages & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
/**
 * MailFolder
 */
export declare class _MailFolder extends _GraphQueryableInstance<IMailFolderType> {
}
export interface IMailFolder extends _MailFolder {
}
export declare const MailFolder: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IMailFolder & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
/**
 * MailFolders
 */
export declare class _MailFolders extends _GraphQueryableCollection<IMailFolderType[]> {
}
export interface IMailFolders extends _MailFolders, IGetById<IMailFolder>, IAddable<IMailFolderType> {
}
export declare const MailFolders: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IMailFolders & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
/**
 * MailboxSettings
 */
export declare class _MailboxSettings extends _GraphQueryableInstance<IMailboxSettingsType> {
}
export interface IMailboxSettings extends _MailboxSettings, IUpdateable<IMailboxSettingsType> {
}
export declare const MailboxSettings: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IMailboxSettings & import("@pnp/odata/invokable-binder.js").IInvokable<any>;
//# sourceMappingURL=types.d.ts.map