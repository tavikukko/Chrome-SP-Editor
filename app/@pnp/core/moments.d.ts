import { ObserverAction, ObserverFunction, Timeline } from "./timeline.js";
/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
export declare function broadcast<T extends ObserverAction>(): (observers: T[], ...args: any[]) => void;
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
export declare function asyncReduce<T extends ObserverFunction<[...Parameters<T>]>>(): (observers: T[], ...args: [...Parameters<T>]) => Promise<[...Parameters<T>]>;
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
export declare function request<T extends ObserverFunction>(): (observers: T[], ...args: [...Parameters<T>]) => Promise<ReturnType<T>>;
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
export declare function lifecycle<T extends ObserverFunction>(): (observers: T[]) => Timeline<any>;
//# sourceMappingURL=moments.d.ts.map