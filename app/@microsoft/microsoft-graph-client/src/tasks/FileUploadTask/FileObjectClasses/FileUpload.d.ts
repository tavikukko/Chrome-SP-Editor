/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/// <reference types="node" />
import { FileObject, SliceType } from "../../LargeFileUploadTask";
import { Range } from "../Range";
/**
 * @class
 * Class used for creating LargeFileUploadTask fileobject.
 * This class accepts files of type ArrayBuffer, Blob, Buffer.
 */
export declare class FileUpload implements FileObject<SliceType> {
    content: ArrayBuffer | Blob | Buffer;
    name: string;
    size: number;
    /**
     * @public
     * @constructor
     * @param {ArrayBuffer | Blob | Buffer} content - The file to be uploaded
     * @param {string} name - The name of the file to be uploaded
     * @param {number} size - The total size of the file to be uploaded
     * @returns An instance of the FileUpload class
     */
    constructor(content: ArrayBuffer | Blob | Buffer, name: string, size: number);
    /**
     * @public
     * Slices the file content to the given range
     * @param {Range} range - The range value
     * @returns The sliced file part
     */
    sliceFile(range: Range): ArrayBuffer | Blob | Buffer;
}
