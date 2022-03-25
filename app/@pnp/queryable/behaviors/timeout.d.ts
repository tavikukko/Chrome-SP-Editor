import { TimelinePipe } from "@pnp/core";
import { Queryable } from "../queryable.js";
/**
 * Behavior that will cause a timeout in the request after the specified milliseconds
 *
 * @param timeout Either the number of milliseconds to set a timeout, or a caller supplied AbortSignal reference
 */
export declare function Timeout(timeout: number | AbortSignal): TimelinePipe<Queryable>;
//# sourceMappingURL=timeout.d.ts.map