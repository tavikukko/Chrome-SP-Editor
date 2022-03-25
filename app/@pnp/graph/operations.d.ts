import { IGraphQueryable } from "./graphqueryable.js";
export declare const graphGet: <T = any>(o: IGraphQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const graphPost: <T = any>(o: IGraphQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const graphDelete: <T = any>(o: IGraphQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const graphPatch: <T = any>(o: IGraphQueryable<any>, init?: RequestInit) => Promise<T>;
export declare const graphPut: <T = any>(o: IGraphQueryable<any>, init?: RequestInit) => Promise<T>;
//# sourceMappingURL=operations.d.ts.map