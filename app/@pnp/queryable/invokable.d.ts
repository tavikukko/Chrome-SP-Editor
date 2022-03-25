/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
export declare function invokable(invokeableAction?: (this: any, init?: RequestInit) => Promise<any>): (target: any) => any;
export interface IInvokable<R = any> {
    <T = R>(init?: RequestInit): Promise<T>;
}
//# sourceMappingURL=invokable.d.ts.map