declare module "./types" {
    interface _Items {
        getAll(requestSize?: number, acceptHeader?: string): Promise<any[]>;
    }
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    interface IItems {
        getAll(requestSize?: number, acceptHeader?: string): Promise<any[]>;
    }
}
export {};
//# sourceMappingURL=get-all.d.ts.map