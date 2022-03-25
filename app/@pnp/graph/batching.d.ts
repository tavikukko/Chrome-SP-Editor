import { TimelinePipe } from "@pnp/core";
import { IGraphQueryable } from "./graphqueryable.js";
declare module "./fi" {
    interface GraphFI {
        /**
         * Creates a batch behavior and associated execute function
         *
         */
        batched(props?: IGraphBatchProps): [GraphFI, () => Promise<void>];
    }
}
interface IGraphBatchProps {
    maxRequests?: number;
}
export declare function createBatch(base: IGraphQueryable, props?: IGraphBatchProps): [TimelinePipe, () => Promise<void>];
export {};
//# sourceMappingURL=batching.d.ts.map