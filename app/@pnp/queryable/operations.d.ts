import { IQueryableInternal } from "./queryable";
export declare type Operation = <T = any>(this: IQueryableInternal, init?: RequestInit) => Promise<T>;
export declare function get<T = any>(this: IQueryableInternal, init?: RequestInit): Promise<T>;
export declare function post<T = any>(this: IQueryableInternal, init?: RequestInit): Promise<T>;
export declare function put<T = any>(this: IQueryableInternal, init?: RequestInit): Promise<T>;
export declare function patch<T = any>(this: IQueryableInternal, init?: RequestInit): Promise<T>;
export declare function del<T = any>(this: IQueryableInternal, init?: RequestInit): Promise<T>;
export declare function op<T>(q: IQueryableInternal, operation: Operation, init?: RequestInit): Promise<T>;
//# sourceMappingURL=operations.d.ts.map