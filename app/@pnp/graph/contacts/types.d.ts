import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable.js";
import { Contact as IContactType, ContactFolder as IContactFolderType, EmailAddress as IEmailAddressType } from "@microsoft/microsoft-graph-types";
import { IUpdateable, IDeleteable, IGetById } from "../decorators.js";
/**
 * Contact
 */
export declare class _Contact extends _GraphQueryableInstance<IContactType> {
}
export interface IContact extends _Contact, IUpdateable<IContactType>, IDeleteable {
}
export declare const Contact: import("../graphqueryable.js").IGraphInvokableFactory<IContact>;
/**
 * Contacts
 */
export declare class _Contacts extends _GraphQueryableCollection<IContactType[]> {
    /**
    * Create a new Contact for the user.
    *
    * @param givenName The contact's given name.
    * @param surName The contact's surname.
    * @param emailAddresses The contact's email addresses.
    * @param businessPhones The contact's business phone numbers.
    * @param additionalProperties A plain object collection of additional properties you want to set on the new contact
    */
    add(givenName: string, surName: string, emailAddresses: IEmailAddressType[], businessPhones: string[], additionalProperties?: Record<string, any>): Promise<IContactAddResult>;
}
export interface IContacts extends _Contacts, IGetById<IContact> {
}
export declare const Contacts: import("../graphqueryable.js").IGraphInvokableFactory<IContacts>;
/**
 * Contact Folder
 */
export declare class _ContactFolder extends _GraphQueryableInstance<IContactFolderType> {
    /**
     * Gets the contacts in this contact folder
     */
    get contacts(): IContacts;
    /**
    * Gets the contacts in this contact folder
    */
    get childFolders(): IContactFolders;
}
export interface IContactFolder extends _ContactFolder, IUpdateable, IDeleteable {
}
export declare const ContactFolder: import("../graphqueryable.js").IGraphInvokableFactory<IContactFolder>;
/**
 * Contact Folders
 */
export declare class _ContactFolders extends _GraphQueryableCollection<IContactFolderType[]> {
    /**
     * Create a new Contact Folder for the user.
     *
     * @param displayName The folder's display name.
     * @param parentFolderId The ID of the folder's parent folder.
     */
    add(displayName: string, parentFolderId?: string): Promise<IContactFolderAddResult>;
}
export interface IContactFolders extends _ContactFolders, IGetById<IContactFolder> {
}
export declare const ContactFolders: import("../graphqueryable.js").IGraphInvokableFactory<IContactFolders>;
/**
 * IContactFolderAddResult
 */
export interface IContactFolderAddResult {
    data: IContactFolderType;
    contactFolder: IContactFolder;
}
/**
 * IContactAddResult
 */
export interface IContactAddResult {
    data: IContactType;
    contact: IContact;
}
//# sourceMappingURL=types.d.ts.map