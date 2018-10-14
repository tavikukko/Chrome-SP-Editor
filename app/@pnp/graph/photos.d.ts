import { GraphQueryable, GraphQueryableInstance } from "./graphqueryable";
export declare class Photo extends GraphQueryableInstance {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Gets the image bytes as a blob (browser)
     */
    getBlob(): Promise<Blob>;
    /**
     * Gets the image file byets as a Buffer (node.js)
     */
    getBuffer(): Promise<ArrayBuffer>;
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    setContent(content: ArrayBuffer | Blob): Promise<void>;
}
//# sourceMappingURL=photos.d.ts.map