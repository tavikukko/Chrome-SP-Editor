import { Notebook as INotebookType, Onenote as IOnenoteType, OnenoteSection as ISectionType, OnenotePage as IOnenotePageType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableInstance, _GraphQueryableCollection, IGraphQueryableCollection } from "../graphqueryable.js";
import { IGetById } from "../decorators.js";
/**
 * Represents a onenote entity
 */
export declare class _OneNote extends _GraphQueryableInstance<IOnenoteType> {
    get notebooks(): INotebooks;
    get sections(): ISections;
    get pages(): IGraphQueryableCollection<IOnenotePageType[]>;
}
export interface IOneNote extends _OneNote {
}
export declare const OneNote: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => IOneNote & import("@pnp/odata").IInvokable<any>;
/**
 * Describes a notebook instance
 *
 */
export declare class _Notebook extends _GraphQueryableInstance<INotebookType> {
    get sections(): ISections;
}
export interface INotebook extends _Notebook {
}
export declare const Notebook: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => INotebook & import("@pnp/odata").IInvokable<any>;
/**
 * Describes a collection of Notebook objects
 *
 */
export declare class _Notebooks extends _GraphQueryableCollection<INotebookType[]> {
    /**
     * Create a new notebook as specified in the request body.
     *
     * @param displayName Notebook display name
     */
    add(displayName: string): Promise<INotebookAddResult>;
}
export interface INotebooks extends _Notebooks, IGetById<INotebook> {
}
export declare const Notebooks: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => INotebooks & import("@pnp/odata").IInvokable<any>;
/**
 * Describes a sections instance
 */
export declare class _Section extends _GraphQueryableInstance<ISectionType> {
}
export interface ISection extends _Section {
}
export declare const Section: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => ISection & import("@pnp/odata").IInvokable<any>;
/**
 * Describes a collection of Sections objects
 *
 */
export declare class _Sections extends _GraphQueryableCollection<ISectionType[]> {
    /**
     * Adds a new section
     *
     * @param displayName New section display name
     */
    add(displayName: string): Promise<ISectionAddResult>;
}
export interface ISections extends _Sections, IGetById<ISection> {
}
export declare const Sections: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => ISections & import("@pnp/odata").IInvokable<any>;
/**
 * INotebookAddResult
 */
export interface INotebookAddResult {
    data: any;
    notebook: INotebook;
}
/**
 * ISectionAddResult
 */
export interface ISectionAddResult {
    data: any;
    section: ISection;
}
//# sourceMappingURL=types.d.ts.map