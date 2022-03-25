import { SearchQueryInit } from "./types.js";
import { SearchResults } from "./query.js";
import { ISuggestQuery, ISuggestResult } from "./suggest.js";
export * from "./types.js";
export { ISearch, SearchQueryBuilder, SearchResults, Search, } from "./query.js";
export { ISuggest, IPersonalResultSuggestion, ISuggestQuery, ISuggestResult, Suggest, } from "./suggest.js";
declare module "../fi" {
    interface SPFI {
        /**
         * Conduct a search
         *
         * @param query Parameters for the search
         */
        search(query: SearchQueryInit): Promise<SearchResults>;
        /**
         * Conduct a suggest search query
         *
         * @param query Parameters for the search
         */
        searchSuggest(query: string | ISuggestQuery): Promise<ISuggestResult>;
    }
}
//# sourceMappingURL=index.d.ts.map