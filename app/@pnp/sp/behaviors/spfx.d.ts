import { TimelinePipe } from "@pnp/core";
import { Queryable } from "@pnp/queryable";
interface ISPFXContext {
    aadTokenProviderFactory?: {
        getTokenProvider(): Promise<{
            getToken(resource: string): Promise<string>;
        }>;
    };
    msGraphClientFactory?: {
        getClient: () => Promise<any>;
    };
    pageContext: {
        web: {
            absoluteUrl: string;
        };
        legacyPageContext: {
            formDigestTimeoutSeconds: number;
            formDigestValue: string;
        };
    };
}
export declare function SPFx(context: ISPFXContext): TimelinePipe<Queryable>;
export {};
//# sourceMappingURL=spfx.d.ts.map