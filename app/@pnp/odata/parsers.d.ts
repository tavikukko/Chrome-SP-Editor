export interface ODataParser<T> {
    hydrate?: (d: any) => T;
    parse(r: Response): Promise<T>;
}
export declare abstract class ODataParserBase<T> implements ODataParser<T> {
    parse(r: Response): Promise<T>;
    protected parseImpl(r: Response, resolve: (value?: T | PromiseLike<T>) => void, reject: (value?: T | PromiseLike<T>) => void): void;
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    protected handleError(r: Response, reject: (reason?: any) => void): boolean;
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    protected parseODataJSON<U>(json: any): U;
}
export declare class ODataDefaultParser extends ODataParserBase<any> {
}
export declare class TextParser extends ODataParserBase<string> {
    protected parseImpl(r: Response, resolve: (value: any) => void): void;
}
export declare class BlobParser extends ODataParserBase<Blob> {
    protected parseImpl(r: Response, resolve: (value: any) => void): void;
}
export declare class JSONParser extends ODataParserBase<any> {
    protected parseImpl(r: Response, resolve: (value: any) => void): void;
}
export declare class BufferParser extends ODataParserBase<ArrayBuffer> {
    protected parseImpl(r: Response, resolve: (value: any) => void): void;
}
export declare class LambdaParser<T = any> implements ODataParser<T> {
    private parser;
    constructor(parser: (r: Response) => Promise<T>);
    parse(r: Response): Promise<T>;
}
