import { SearchRequest as ISearchRequestType, SearchResponse as ISearchResponseType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableInstance } from "../graphqueryable.js";
/**
 * Search
 */
export declare class _Search extends _GraphQueryableInstance<ISearchRequestType[]> {
    executeQuery(request: {
        requests: ISearchRequestType[];
    }): Promise<ISearchResponseType[]>;
}
export interface ISearch {
    executeQuery(request: {
        requests: ISearchRequestType[];
    }): Promise<ISearchResponseType[]>;
}
export declare const Search: (baseUrl: string | import("../graphqueryable.js").IGraphQueryable<any>, path?: string) => ISearch & import("../../odata/invokable-binder.js").IInvokable<any>;
//# sourceMappingURL=types.d.ts.map