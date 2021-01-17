import { Batch } from "@pnp/odata";
import { Runtime } from "@pnp/common";
/**
 * Manages a batch of OData operations
 */
export declare class SPBatch extends Batch {
    private url;
    private runtime;
    constructor(url: string, runtime?: Runtime);
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    static ParseResponse(body: string): Response[];
    protected executeImpl(): Promise<void>;
}
//# sourceMappingURL=batch.d.ts.map