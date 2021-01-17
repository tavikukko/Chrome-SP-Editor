import { IFetchOptions, IRequestClient } from "@pnp/common";
import { IGraphQueryable } from "./graphqueryable.js";
export declare function registerCustomRequestClientFactory(requestClientFactory: () => IRequestClient): void;
export declare const graphGet: <T = any>(o: IGraphQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const graphPost: <T = any>(o: IGraphQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const graphDelete: <T = any>(o: IGraphQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const graphPatch: <T = any>(o: IGraphQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const graphPut: <T = any>(o: IGraphQueryable<any>, options?: IFetchOptions) => Promise<T>;
//# sourceMappingURL=operations.d.ts.map