import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
export declare class Plans extends GraphQueryableCollection {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Gets a plan from this collection by id
     *
     * @param id Plan's id
     */
    getById(id: string): Plan;
}
export declare class Plan extends GraphQueryableInstance {
}
