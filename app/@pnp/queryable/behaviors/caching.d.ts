import { Queryable } from "../queryable.js";
import { TimelinePipe } from "@pnp/core";
export declare type CacheKeyFactory = (url: string) => string;
export declare type CacheExpireFunc = (url: string) => Date;
export interface ICachingProps {
    store?: "local" | "session";
    keyFactory?: CacheKeyFactory;
    expireFunc?: CacheExpireFunc;
}
export declare function Caching(props?: ICachingProps): TimelinePipe<Queryable>;
//# sourceMappingURL=caching.d.ts.map