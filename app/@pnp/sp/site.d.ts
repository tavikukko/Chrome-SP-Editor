import { SharePointQueryableInstance } from "./sharepointqueryable";
import { Web } from "./webs";
import { UserCustomActions } from "./usercustomactions";
import { ContextInfo, DocumentLibraryInformation } from "./types";
import { SPBatch } from "./batch";
import { Features } from "./features";
/**
 * Describes a site collection
 *
 */
export declare class Site extends SharePointQueryableInstance {
    /**
     * Gets the root web of the site collection
     *
     */
    readonly rootWeb: Web;
    /**
     * Gets the active features for this site collection
     *
     */
    readonly features: Features;
    /**
     * Gets all custom actions for this site collection
     *
     */
    readonly userCustomActions: UserCustomActions;
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    getRootWeb(): Promise<Web>;
    /**
     * Gets the context information for this site collection
     */
    getContextInfo(): Promise<ContextInfo>;
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    getDocumentLibraries(absoluteWebUrl: string): Promise<DocumentLibraryInformation[]>;
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    getWebUrlFromPageUrl(absolutePageUrl: string): Promise<string>;
    /**
     * Creates a new batch for requests within the context of this site collection
     *
     */
    createBatch(): SPBatch;
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    openWebById(webId: string): Promise<OpenWebByIdResult>;
}
/**
 * The result of opening a web by id: contains the data returned as well as a chainable web instance
 */
export interface OpenWebByIdResult {
    data: any;
    web: Web;
}
