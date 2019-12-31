import { _GraphQueryable } from "./graphqueryable";
import { GraphConfiguration } from "./graphlibconfig";
import { GraphBatch } from "./batch";
export declare class GraphRest extends _GraphQueryable {
    createBatch(): GraphBatch;
    setup(config: GraphConfiguration): void;
}
export declare let graph: GraphRest;
//# sourceMappingURL=rest.d.ts.map