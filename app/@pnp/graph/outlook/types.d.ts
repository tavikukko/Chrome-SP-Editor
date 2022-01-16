import { _GraphQueryableCollection, _GraphQueryableInstance } from "@pnp/graph/graphqueryable";
import { OutlookUser as IOutlookType, OutlookCategory as IOutlookCategoryType } from "@microsoft/microsoft-graph-types";
import { IDeleteable, IGetById, IUpdateable } from "@pnp/graph/decorators";
/**
 * Outlook
 */
export declare class _Outlook extends _GraphQueryableInstance<IOutlookType> {
    get masterCategories(): IMasterCategories;
}
export interface IOutlook extends _Outlook {
}
export declare const Outlook: (baseUrl: string | import("@pnp/graph").IGraphQueryable<any>, path?: string) => IOutlook & import("@pnp/odata").IInvokable<any>;
/**
 * Describes an Outlook Category instance
 */
export declare class _OutlookCategory extends _GraphQueryableInstance<IOutlookCategoryType> {
}
export interface IOutlookCategory extends _OutlookCategory, IUpdateable<IOutlookCategoryType>, IDeleteable {
}
export declare const OutlookCategory: (baseUrl: string | import("@pnp/graph").IGraphQueryable<any>, path?: string) => IOutlookCategory & import("@pnp/odata").IInvokable<any>;
/**
 * Categories
 */
export declare class _MasterCategories extends _GraphQueryableCollection<IOutlookCategoryType[]> {
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    add(properties: IOutlookCategoryType): Promise<IMasterCategoryAddResult>;
}
export interface IMasterCategories extends _MasterCategories, IGetById<IOutlookCategory> {
}
export declare const MasterCategories: (baseUrl: string | import("@pnp/graph").IGraphQueryable<any>, path?: string) => IMasterCategories & import("@pnp/odata").IInvokable<any>;
/**
 * MasterCategoryAddResult
 */
export interface IMasterCategoryAddResult {
    data: IOutlookCategoryType;
}
//# sourceMappingURL=types.d.ts.map