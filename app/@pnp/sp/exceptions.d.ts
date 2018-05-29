export declare class SPBatchParseException extends Error {
    constructor(msg: string);
}
export declare class SPODataIdException extends Error {
    readonly data: any;
    constructor(data: any, msg?: string);
}
export declare class MaxCommentLengthException extends Error {
    constructor(msg?: string);
}
export declare class NotSupportedInBatchException extends Error {
    constructor(operation?: string);
}
