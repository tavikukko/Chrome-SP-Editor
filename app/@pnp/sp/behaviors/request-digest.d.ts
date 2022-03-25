import { TimelinePipe } from "@pnp/core";
import { Queryable } from "@pnp/queryable";
interface IDigestInfo {
    expiration: Date;
    value: string;
}
export declare function RequestDigest(hook?: (url: string, init: RequestInit) => IDigestInfo | null | undefined): TimelinePipe<Queryable>;
export {};
//# sourceMappingURL=request-digest.d.ts.map