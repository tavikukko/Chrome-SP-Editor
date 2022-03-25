import { Timeline, TimelinePipe } from "../timeline.js";
/**
 * Behavior that will copy all the observers in the source timeline and apply it to the incoming instance
 *
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @param filter If provided filters the moments from which the observers are copied. It should return true for each moment to include.
 * @returns The mutated this
 */
export declare function CopyFrom(source: Timeline<any>, behavior?: "replace" | "append", filter?: (moment: string) => boolean): TimelinePipe;
//# sourceMappingURL=copy-from.d.ts.map