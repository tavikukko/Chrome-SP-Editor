import { Batch } from "@pnp/odata";
import { Runtime } from "@pnp/common";
export declare class GraphBatch extends Batch {
    private batchUrl;
    private maxRequests;
    private runtime;
    constructor(batchUrl?: string, maxRequests?: number, runtime?: Runtime);
    setRuntime(runtime: Runtime): this;
    protected executeImpl(): Promise<void>;
    /**
     * Urls come to the batch absolute, but the processor expects relative
     * @param url Url to ensure is relative
     */
    private makeUrlRelative;
    private formatRequests;
    private parseResponse;
}
//# sourceMappingURL=batch.d.ts.map