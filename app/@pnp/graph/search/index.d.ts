import { SearchRequest as ISearchRequestType, SearchResponse as ISearchResponseType } from "@microsoft/microsoft-graph-types";
export { ISearch, Search, } from "./types.js";
declare module "../rest" {
    interface GraphRest {
        query(...requests: ISearchRequestType[]): Promise<ISearchResponseType[]>;
    }
}
//# sourceMappingURL=index.d.ts.map