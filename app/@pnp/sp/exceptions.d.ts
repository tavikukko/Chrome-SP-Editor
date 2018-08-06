export declare class SPBatchParseException extends Error {
    constructor(msg: string);
}
export declare class MaxCommentLengthException extends Error {
    constructor(msg?: string);
}
export declare class NotSupportedInBatchException extends Error {
    constructor(operation?: string);
}
