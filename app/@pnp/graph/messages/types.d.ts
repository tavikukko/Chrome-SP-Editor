import { Message as IMessageType, MailFolder as IMailFolderType, MailboxSettings as IMailboxSettingsType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance, _GraphQueryableSearchableCollection } from "../graphqueryable.js";
import { IGetById, IAddable, IUpdateable } from "../decorators.js";
/**
 * Message
 */
export declare class _Message extends _GraphQueryableInstance<IMessageType> {
}
export interface IMessage extends _Message {
}
export declare const Message: import("../graphqueryable.js").IGraphInvokableFactory<IMessage>;
/**
 * Messages
 */
export declare class _Messages extends _GraphQueryableSearchableCollection<IMessageType[]> {
}
export interface IMessages extends _Messages, IGetById<IMessage>, IAddable<IMessageType> {
}
export declare const Messages: import("../graphqueryable.js").IGraphInvokableFactory<IMessages>;
/**
 * MailFolder
 */
export declare class _MailFolder extends _GraphQueryableInstance<IMailFolderType> {
}
export interface IMailFolder extends _MailFolder {
}
export declare const MailFolder: import("../graphqueryable.js").IGraphInvokableFactory<IMailFolder>;
/**
 * MailFolders
 */
export declare class _MailFolders extends _GraphQueryableCollection<IMailFolderType[]> {
}
export interface IMailFolders extends _MailFolders, IGetById<IMailFolder>, IAddable<IMailFolderType> {
}
export declare const MailFolders: import("../graphqueryable.js").IGraphInvokableFactory<IMailFolders>;
/**
 * MailboxSettings
 */
export declare class _MailboxSettings extends _GraphQueryableInstance<IMailboxSettingsType> {
}
export interface IMailboxSettings extends _MailboxSettings, IUpdateable<IMailboxSettingsType> {
}
export declare const MailboxSettings: import("../graphqueryable.js").IGraphInvokableFactory<IMailboxSettings>;
//# sourceMappingURL=types.d.ts.map