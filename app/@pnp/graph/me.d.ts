import { GraphQueryable, GraphQueryableInstance } from "./graphqueryable";
import { OneNoteMethods } from "./onenote";
export declare class Me extends GraphQueryableInstance {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
    * The onenote associated with me
    */
    readonly onenote: OneNoteMethods;
}
