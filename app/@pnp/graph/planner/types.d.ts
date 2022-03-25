import { PlannerPlan as IPlannerPlanType, PlannerPlanDetails as IPlannerPlanDetailsType, PlannerTask as IPlannerTaskType, PlannerTaskDetails as IPlannerTaskDetailsType, PlannerBucket as IPlannerBucketType, Planner as IPlannerType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableInstance, _GraphQueryableCollection } from "../graphqueryable.js";
import { IGetById, IDeleteableWithETag, IUpdateableWithETag } from "../decorators.js";
/**
 * Planner
 */
export declare class _Planner extends _GraphQueryableInstance<IPlannerType> {
    get plans(): IPlans;
    get tasks(): ITasks;
    get buckets(): IBuckets;
}
export interface IPlanner extends _Planner {
}
export declare const Planner: import("../graphqueryable.js").IGraphInvokableFactory<IPlanner>;
/**
 * Details
 */
export declare class _PlanDetails extends _GraphQueryableInstance<IPlannerPlanDetailsType> {
}
export interface IPlanDetails extends _PlanDetails, IUpdateableWithETag<IPlannerPlanDetailsType> {
}
export declare const PlanDetails: import("../graphqueryable.js").IGraphInvokableFactory<ITaskDetails>;
/**
 * Plan
 */
export declare class _Plan extends _GraphQueryableInstance<IPlannerPlanType> {
    get tasks(): ITasks;
    get buckets(): IBuckets;
    get details(): IPlanDetails;
}
export interface IPlan extends _Plan, IUpdateableWithETag<IPlannerPlanType>, IDeleteableWithETag {
}
export declare const Plan: import("../graphqueryable.js").IGraphInvokableFactory<IPlan>;
export declare class _Plans extends _GraphQueryableCollection<IPlannerPlanType[]> {
    /**
     * Create a new Planner Plan.
     *
     * @param owner Id of Group object.
     * @param title The Title of the Plan.
     */
    add(owner: string, title: string): Promise<IPlanAddResult>;
}
export interface IPlans extends _Plans, IGetById<IPlan> {
}
export declare const Plans: import("../graphqueryable.js").IGraphInvokableFactory<IPlans>;
/**
 * Details
 */
export declare class _TaskDetails extends _GraphQueryableInstance<IPlannerTaskDetailsType> {
}
export interface ITaskDetails extends _TaskDetails, IUpdateableWithETag<IPlannerTaskDetailsType> {
}
export declare const TaskDetails: import("../graphqueryable.js").IGraphInvokableFactory<ITaskDetails>;
/**
 * Task
 */
export declare class _Task extends _GraphQueryableInstance<IPlannerTaskType> {
    get details(): ITaskDetails;
}
export interface ITask extends _Task, IUpdateableWithETag<IPlannerTaskType>, IDeleteableWithETag {
}
export declare const Task: import("../graphqueryable.js").IGraphInvokableFactory<ITask>;
/**
 * Tasks
 */
export declare class _Tasks extends _GraphQueryableCollection<IPlannerTaskType[]> {
    /**
     * Create a new Planner Task.
     *
     * @param planId Id of Plan.
     * @param title The Title of the Task.
     * @param assignments Assign the task
     * @param bucketId Id of Bucket
     */
    add(planId: string, title: string, assignments?: Record<string, any>, bucketId?: string): Promise<ITaskAddResult>;
}
export interface ITasks extends _Tasks, IGetById<ITask> {
}
export declare const Tasks: import("../graphqueryable.js").IGraphInvokableFactory<ITasks>;
/**
 * Bucket
 */
export declare class _Bucket extends _GraphQueryableInstance<IPlannerBucketType> {
    get tasks(): ITasks;
}
export interface IBucket extends _Bucket, IUpdateableWithETag<IPlannerBucketType>, IDeleteableWithETag {
}
export declare const Bucket: import("../graphqueryable.js").IGraphInvokableFactory<IBucket>;
/**
 * Buckets
 */
export declare class _Buckets extends _GraphQueryableCollection<IPlannerBucketType[]> {
    /**
     * Create a new Bucket.
     *
     * @param name Name of Bucket object.
     * @param planId The Id of the Plan.
     * @param oderHint Hint used to order items of this type in a list view.
     */
    add(name: string, planId: string, orderHint?: string): Promise<IBucketAddResult>;
}
export interface IBuckets extends _Buckets, IGetById<IBucket> {
}
export declare const Buckets: import("../graphqueryable.js").IGraphInvokableFactory<IBuckets>;
export interface IBucketAddResult {
    data: IPlannerBucketType;
    bucket: IBucket;
}
export interface IPlanAddResult {
    data: IPlannerPlanType;
    plan: IPlan;
}
export interface ITaskAddResult {
    data: IPlannerTaskType;
    task: ITask;
}
//# sourceMappingURL=types.d.ts.map