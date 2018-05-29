import { SharePointQueryable, SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
/**
 * Describes a collection of Field objects
 *
 */
export declare class Forms extends SharePointQueryableCollection {
    /**
     * Creates a new instance of the Fields class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    getById(id: string): Form;
}
/**
 * Describes a single of Form instance
 *
 */
export declare class Form extends SharePointQueryableInstance {
}
