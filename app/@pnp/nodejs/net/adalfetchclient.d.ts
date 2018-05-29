import { HttpClientImpl } from "@pnp/common";
export interface AADToken {
    accessToken: string;
    expiresIn: number;
    expiresOn: string | Date;
    isMRRT?: boolean;
    resource: string;
    tokenType: string;
}
export declare class AdalFetchClient implements HttpClientImpl {
    private _tenant;
    private _clientId;
    private _secret;
    private _resource;
    private _authority;
    private authContext;
    constructor(_tenant: string, _clientId: string, _secret: string, _resource?: string, _authority?: string);
    fetch(url: string, options: any): Promise<Response>;
    acquireToken(): Promise<AADToken>;
}
