import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
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
}
