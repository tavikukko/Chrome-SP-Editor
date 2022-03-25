import { ISPQueryable } from "./spqueryable.js";
export declare const spGet: <T = any>(o: ISPQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const spPost: <T = any>(o: ISPQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const spPostMerge: <T = any>(o: ISPQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const spPostDelete: <T = any>(o: ISPQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const spPostDeleteETag: <T = any>(o: ISPQueryable<any>, init?: RequestInit, eTag?: string) => Promise<T>;
export declare const spDelete: <T = any>(o: ISPQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const spPatch: <T = any>(o: ISPQueryable<any>, init?: RequestInit) => Promise<T>;
//# sourceMappingURL=operations.d.ts.map