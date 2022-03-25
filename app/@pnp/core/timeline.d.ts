/**
 * Represents an observer that does not affect the timeline
 */
export declare type ObserverAction = (this: Timeline<any>, ...args: any[]) => void;
/**
 * Represents an observer with side effects within the timeline
 */
export declare type ObserverFunction<R = any> = (this: Timeline<any>, ...args: any[]) => Promise<R>;
/**
 * Defines the set of all valid observer types
 */
export declare type ValidObserver = ObserverAction | ObserverFunction;
/**
 * The set of moments that make up a timeline
 */
export declare type Moments = Record<string, (this: Timeline<any>, handlers: ValidObserver[], ...args: any[]) => void>;
/**
 * Represents the collection of observers
 */
export declare type ObserverCollection = Record<string, ValidObserver[]>;
/**
 * A type used to represent the proxied Timeline.on property
 */
declare type DistributeOn<T extends Moments, R extends Moments = T> = {
    [Prop in string & keyof T]: {
        (handler: Parameters<T[Prop]>[0][number]): Timeline<R>;
        toArray(): Parameters<T[Prop]>[0][number][];
        replace(handler: Parameters<T[Prop]>[0][number]): Timeline<R>;
        prepend(handler: Parameters<T[Prop]>[0][number]): Timeline<R>;
        clear(): boolean;
    };
};
/**
 * A type used to represent the proxied Timeline.emit property
 */
declare type DistributeEmit<T extends Moments> = {
    [Prop in string & keyof T]: (...args: Parameters<Parameters<T[Prop]>[0][number]>) => ReturnType<Parameters<T[Prop]>[0][number]>;
};
/**
 * Virtual events that are present on all Timelines
 */
declare type DefaultTimelineMoments<T extends Moments> = {
    init: (observers: ((this: Timeline<T>) => void)[], ...args: any[]) => void;
    dispose: (observers: ((this: Timeline<T>) => void)[], ...args: any[]) => void;
    log: (observers: ((this: Timeline<T>, message: string, level: number) => void)[], ...args: any[]) => void;
    error: (observers: ((this: Timeline<T>, err: string | Error) => void)[], ...args: any[]) => void;
};
/**
 * The type combining the defined moments and DefaultTimelineEvents
 */
declare type OnProxyType<T extends Moments> = DistributeOn<T> & DistributeOn<DefaultTimelineMoments<T>, T>;
/**
 * The type combining the defined moments and DefaultTimelineEvents
 */
declare type EmitProxyType<T extends Moments> = DistributeEmit<T> & DistributeEmit<DefaultTimelineMoments<T>>;
/**
 * Represents a function accepting and returning a timeline, possibly manipulating the observers present
 */
export declare type TimelinePipe<T extends Timeline<any> = any> = (intance: T) => T;
/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
export declare abstract class Timeline<T extends Moments> {
    protected readonly moments: T;
    protected observers: ObserverCollection;
    private _onProxy;
    private _emitProxy;
    protected _inheritingObservers: boolean;
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments: T, observers?: ObserverCollection);
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors: TimelinePipe[]): this;
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on(): OnProxyType<T>;
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message: string, level?: number): void;
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    protected error(e?: any): void;
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    protected get emit(): EmitProxyType<T>;
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    protected start(init?: any): Promise<any>;
    /**
     * Method orchestrating the emit calls for the moments defined in inheriting classes
     *
     * @param init A value passed into start from the initiator of the timeline
     */
    protected abstract execute(init?: any): Promise<any>;
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    protected cloneObserversOnChange(): void;
}
export declare function cloneObserverCollection(source: ObserverCollection): ObserverCollection;
export {};
//# sourceMappingURL=timeline.d.ts.map