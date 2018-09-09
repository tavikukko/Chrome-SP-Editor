import { ODataBatch } from "@pnp/odata";
export declare class GraphBatch extends ODataBatch {
    private batchUrl;
    constructor(batchUrl?: string);
    protected executeImpl(): Promise<void>;
    private formatRequests;
    private _parseResponse;
}
