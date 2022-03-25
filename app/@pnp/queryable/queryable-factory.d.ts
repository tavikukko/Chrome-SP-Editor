import { IQueryableInternal, QueryableInit } from "./queryable.js";
export declare function queryableFactory<InstanceType extends IQueryableInternal>(constructor: {
    new (init: QueryableInit, path?: string): InstanceType;
}): (init: QueryableInit, path?: string) => InstanceType;
//# sourceMappingURL=queryable-factory.d.ts.map