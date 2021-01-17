import { SearchQueryInit } from "./types.js";
import { ICachingOptions } from "@pnp/odata";
import { SearchResults } from "./query.js";
import { ISuggestQuery, ISuggestResult } from "./suggest.js";
export * from "./types.js";
export { ISearch, SearchQueryBuilder, SearchResults, Search, } from "./query.js";
export { ISuggest, IPersonalResultSuggestion, ISuggestQuery, ISuggestResult, Suggest, } from "./suggest.js";
declare module "../rest" {
    interface SPRest {
        /**
         * Conduct a search
         *
         * @param query Parameters for the search
         */
        search(query: SearchQueryInit): Promise<SearchResults>;
        /**
         * Conduct a search with caching enabled
         *
         * @param query Parameters for the search
         * @param options Optional, caching options
         */
        searchWithCaching(query: SearchQueryInit, options?: ICachingOptions): Promise<SearchResults>;
        /**
         * Conduct a suggest search query
         *
         * @param query Parameters for the search
         */
        searchSuggest(query: string | ISuggestQuery): Promise<ISuggestResult>;
    }
}
//# sourceMappingURL=index.d.ts.map