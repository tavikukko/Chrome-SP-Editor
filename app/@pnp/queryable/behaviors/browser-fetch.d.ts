import { Queryable } from "../queryable.js";
import { TimelinePipe } from "@pnp/core";
interface BrowserFetchProps {
    replace?: boolean;
}
export declare function BrowserFetch(props?: BrowserFetchProps): TimelinePipe<Queryable>;
interface BrowserFetchWithRetryProps extends BrowserFetchProps {
    retries?: number;
    interval?: number;
}
export declare function BrowserFetchWithRetry(props?: BrowserFetchWithRetryProps): TimelinePipe<Queryable>;
export {};
//# sourceMappingURL=browser-fetch.d.ts.map