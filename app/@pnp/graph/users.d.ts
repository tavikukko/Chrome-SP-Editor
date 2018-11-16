import { TypedHash } from "@pnp/common";
import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Contacts, ContactFolders } from "./contacts";
import { OneNoteMethods } from "./onenote";
import { Drive, Drives } from "./onedrive";
import { Tasks } from "./planner";
/**
 * Describes a collection of Users objects
 *
 */
export declare class Users extends GraphQueryableCollection {
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
    /**
    * The default Drive associated with the user
    */
    readonly drive: Drive;
    /**
    * The Drives the user has available
    */
    readonly drives: Drives;
    /**
    * The Tasks the user has available
    */
    readonly tasks: Tasks;
    /**
     * Updates this user
     *
     * @param properties Properties used to update this user
     */
    update(properties: TypedHash<any>): Promise<void>;
    /**
     * Deletes this user
     */
    delete(): Promise<void>;
}
//# sourceMappingURL=users.d.ts.map