import { IRequestClient } from "@pnp/common";
import { IQueryableData } from "./queryable";
/**
 * Defines the context for a given request to be processed in the pipeline
 */
export interface RequestContext<ReturnType> extends IQueryableData<ReturnType> {
    result?: ReturnType;
    clientFactory: () => IRequestClient;
    hasResult: boolean;
    isBatched: boolean;
    requestId: string;
    method: string;
}
export declare type PipelineMethod<ReturnType> = (c: RequestContext<ReturnType>) => Promise<RequestContext<ReturnType>>;
/**
 * Sets the result on the context
 */
export declare function setResult<T = any>(context: RequestContext<T>, value: any): Promise<RequestContext<T>>;
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
export declare function pipe<T = any>(context: RequestContext<T>): Promise<T>;
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
export declare function requestPipelineMethod(alwaysRun?: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Contains the methods used within the request pipeline
 */
export declare class PipelineMethods {
    /**
     * Logs the start of the request
     */
    static logStart<T = any>(context: RequestContext<T>): Promise<RequestContext<T>>;
    /**
     * Handles caching of the request
     */
    static caching<T = any>(context: RequestContext<T>): Promise<RequestContext<T>>;
    /**
     * Sends the request
     */
    static send<T = any>(context: RequestContext<T>): Promise<RequestContext<T>>;
    /**
     * Logs the end of the request
     */
    static logEnd<T = any>(context: RequestContext<T>): Promise<RequestContext<T>>;
}
export declare function getDefaultPipeline(): (typeof PipelineMethods.logStart)[];
//# sourceMappingURL=pipeline.d.ts.map