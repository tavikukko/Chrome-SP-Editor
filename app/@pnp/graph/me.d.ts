import { GraphQueryable, GraphQueryableInstance } from "./graphqueryable";
import { OneNoteMethods } from "./onenote";
import { Contacts, ContactFolders } from "./contacts";
export declare class Me extends GraphQueryableInstance {
    constructor(baseUrl: string | GraphQueryable, path?: string);
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
//# sourceMappingURL=me.d.ts.map