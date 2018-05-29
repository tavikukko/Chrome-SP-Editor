import { SPHttpClient } from "./sphttpclient";
import { Dictionary } from "@pnp/common";
export declare class CachedDigest {
    expiration: Date;
    value: string;
}
export declare class DigestCache {
    private _httpClient;
    private _digests;
    constructor(_httpClient: SPHttpClient, _digests?: Dictionary<CachedDigest>);
    getDigest(webUrl: string): Promise<string>;
    clear(): void;
}
