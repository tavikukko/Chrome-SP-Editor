import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Contacts, ContactFolders } from "./contacts";
import { OneNoteMethods } from "./onenote";
/**
 * Describes a collection of Users objects
 *
 */
export declare class Users extends GraphQueryableCollection {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Gets a user from the collection using the specified id
     *
     * @param id Id of the user to get from this collection
     */
    getById(id: string): User;
}
/**
 * Represents a user entity
 */
export declare class User extends GraphQueryableInstance {
    /**
    * The onenote associated with me
    */
    readonly onenote: OneNoteMethods;
    /**
    * The Contacts associated with the user
    */
    readonly contacts: Contacts;
    /**
    * The Contact Folders associated with the user
    */
    readonly contactFolders: ContactFolders;
}
//# sourceMappingURL=users.d.ts.map