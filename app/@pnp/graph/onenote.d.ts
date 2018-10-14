import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
export interface OneNoteMethods {
    notebooks: Notebooks;
    sections: Sections;
    pages: Pages;
}
/**
 * Represents a onenote entity
 */
export declare class OneNote extends GraphQueryableInstance implements OneNoteMethods {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    readonly notebooks: Notebooks;
    readonly sections: Sections;
    readonly pages: Pages;
}
/**
 * Describes a collection of Notebook objects
 *
 */
export declare class Notebooks extends GraphQueryableCollection {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Gets a notebook instance by id
     *
     * @param id Notebook id
     */
    getById(id: string): Notebook;
    /**
     * Create a new notebook as specified in the request body.
     *
     * @param displayName Notebook display name
     */
    add(displayName: string): Promise<NotebookAddResult>;
}
/**
 * Describes a notebook instance
 *
 */
export declare class Notebook extends GraphQueryableInstance {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    readonly sections: Sections;
}
/**
 * Describes a collection of Sections objects
 *
 */
export declare class Sections extends GraphQueryableCollection {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Gets a section instance by id
     *
     * @param id Section id
     */
    getById(id: string): Section;
    /**
     * Adds a new section
     *
     * @param displayName New section display name
     */
    add(displayName: string): Promise<SectionAddResult>;
}
/**
 * Describes a sections instance
 *
 */
export declare class Section extends GraphQueryableInstance {
    constructor(baseUrl: string | GraphQueryable, path?: string);
}
/**
 * Describes a collection of Pages objects
 *
 */
export declare class Pages extends GraphQueryableCollection {
    constructor(baseUrl: string | GraphQueryable, path?: string);
}
export interface NotebookAddResult {
    data: any;
    notebook: Notebook;
}
export interface SectionAddResult {
    data: any;
    section: Section;
}
//# sourceMappingURL=onenote.d.ts.map