/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module GraphResponseHandler
 * References - https://fetch.spec.whatwg.org/#responses
 */
import { GraphRequestCallback } from "./IGraphRequestCallback";
import { ResponseType } from "./ResponseType";
/**
 * @enum
 * Enum for document types
 * @property {string} TEXT_HTML - The text/html content type
 * @property {string} TEXT_XML - The text/xml content type
 * @property {string} APPLICATION_XML - The application/xml content type
 * @property {string} APPLICATION_XHTML - The application/xhml+xml content type
 */
export declare enum DocumentType {
    TEXT_HTML = "text/html",
    TEXT_XML = "text/xml",
    APPLICATION_XML = "application/xml",
    APPLICATION_XHTML = "application/xhtml+xml"
}
/**
 * @class
 * Class for GraphResponseHandler
 */
export declare class GraphResponseHandler {
    /**
     * @private
     * @static
     * To parse Document response
     * @param {Response} rawResponse - The response object
     * @param {DocumentType} type - The type to which the document needs to be parsed
     * @returns A promise that resolves to a document content
     */
    private static parseDocumentResponse;
    /**
     * @private
     * @static
     * @async
     * To convert the native Response to response content
     * @param {Response} rawResponse - The response object
     * @param {ResponseType} [responseType] - The response type value
     * @returns A promise that resolves to the converted response content
     */
    private static convertResponse;
    /**
     * @public
     * @static
     * @async
     * To get the parsed response
     * @param {Response} rawResponse - The response object
     * @param {ResponseType} [responseType] - The response type value
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns The parsed response
     */
    static getResponse(rawResponse: Response, responseType?: ResponseType, callback?: GraphRequestCallback): Promise<any>;
}
