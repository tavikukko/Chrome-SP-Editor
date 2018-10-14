import { List } from "./lists";
import { File } from "./files";
import { ItemUpdateResult } from "./items";
import { TypedHash } from "@pnp/common";
/**
 * Page promotion state
 */
export declare const enum PromotedState {
    /**
     * Regular client side page
     */
    NotPromoted = 0,
    /**
     * Page that will be promoted as news article after publishing
     */
    PromoteOnPublish = 1,
    /**
     * Page that is promoted as news article
     */
    Promoted = 2
}
/**
 * Type describing the available page layout types for client side "modern" pages
 */
export declare type ClientSidePageLayoutType = "Article" | "Home";
/**
 * Column size factor. Max value is 12 (= one column), other options are 8,6,4 or 0
 */
export declare type CanvasColumnFactorType = 0 | 2 | 4 | 6 | 8 | 12;
/**
 * Represents the data and methods associated with client side "modern" pages
 */
export declare class ClientSidePage extends File {
    sections: CanvasSection[];
    commentsDisabled: boolean;
    /**
     * Creates a new instance of the ClientSidePage class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web collection
     * @param commentsDisabled Indicates if comments are disabled, not valid until load is called
     */
    constructor(file: File, sections?: CanvasSection[], commentsDisabled?: boolean);
    /**
     * Creates a new blank page within the supplied library
     *
     * @param library The library in which to create the page
     * @param pageName Filename of the page, such as "page.aspx"
     * @param title The display title of the page
     * @param pageLayoutType Layout type of the page to use
     */
    static create(library: List, pageName: string, title: string, pageLayoutType?: ClientSidePageLayoutType): Promise<ClientSidePage>;
    /**
     * Creates a new ClientSidePage instance from the provided html content string
     *
     * @param html HTML markup representing the page
     */
    static fromFile(file: File): Promise<ClientSidePage>;
    /**
     * Converts a json object to an escaped string appropriate for use in attributes when storing client-side controls
     *
     * @param json The json object to encode into a string
     */
    static jsonToEscapedString(json: any): string;
    /**
     * Converts an escaped string from a client-side control attribute to a json object
     *
     * @param escapedString
     */
    static escapedStringToJson<T = any>(escapedString: string): T;
    /**
     * Add a section to this page
     */
    addSection(): CanvasSection;
    /**
     * Converts this page's content to html markup
     */
    toHtml(): string;
    /**
     * Loads this page instance's content from the supplied html
     *
     * @param html html string representing the page's content
     */
    fromHtml(html: string): this;
    /**
     * Loads this page's content from the server
     */
    load(): Promise<void>;
    /**
     * Persists the content changes (sections, columns, and controls)
     */
    save(): Promise<ItemUpdateResult>;
    /**
     * Enables comments on this page
     */
    enableComments(): Promise<ItemUpdateResult>;
    /**
     * Disables comments on this page
     */
    disableComments(): Promise<ItemUpdateResult>;
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    findControlById<T extends ClientSidePart = ClientSidePart>(id: string): T;
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    findControl<T extends ClientSidePart = ClientSidePart>(predicate: (c: ClientSidePart) => boolean): T;
    /**
     * Sets the comments flag for a page
     *
     * @param on If true comments are enabled, false they are disabled
     */
    private setCommentsOn;
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    private mergePartToTree;
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    private mergeColumnToTree;
    /**
     * Updates the properties of the underlying ListItem associated with this ClientSidePage
     *
     * @param properties Set of properties to update
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    private updateProperties;
}
export declare class CanvasSection {
    page: ClientSidePage;
    order: number;
    columns: CanvasColumn[];
    /**
     * Used to track this object inside the collection at runtime
     */
    private _memId;
    constructor(page: ClientSidePage, order: number, columns?: CanvasColumn[]);
    /**
     * Default column (this.columns[0]) for this section
     */
    readonly defaultColumn: CanvasColumn;
    /**
     * Adds a new column to this section
     */
    addColumn(factor: CanvasColumnFactorType): CanvasColumn;
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    addControl(control: ClientSidePart): this;
    toHtml(): string;
    /**
     * Removes this section and all contained columns and controls from the collection
     */
    remove(): void;
}
export declare abstract class CanvasControl {
    protected controlType: number;
    dataVersion: string;
    column: CanvasColumn;
    order: number;
    id: string;
    controlData: ClientSideControlData;
    constructor(controlType: number, dataVersion: string, column?: CanvasColumn, order?: number, id?: string, controlData?: ClientSideControlData);
    /**
     * Value of the control's "data-sp-controldata" attribute
     */
    readonly jsonData: string;
    abstract toHtml(index: number): string;
    fromHtml(html: string): void;
    protected abstract getControlData(): ClientSideControlData;
}
export declare class CanvasColumn extends CanvasControl {
    section: CanvasSection;
    order: number;
    factor: CanvasColumnFactorType;
    controls: ClientSidePart[];
    constructor(section: CanvasSection, order: number, factor?: CanvasColumnFactorType, controls?: ClientSidePart[], dataVersion?: string);
    addControl(control: ClientSidePart): this;
    getControl<T extends ClientSidePart>(index: number): T;
    toHtml(): string;
    fromHtml(html: string): void;
    getControlData(): ClientSideControlData;
    /**
     * Removes this column and all contained controls from the collection
     */
    remove(): void;
}
/**
 * Abstract class with shared functionality for parts
 */
export declare abstract class ClientSidePart extends CanvasControl {
    /**
     * Removes this column and all contained controls from the collection
     */
    remove(): void;
}
export declare class ClientSideText extends ClientSidePart {
    private _text;
    constructor(text?: string);
    /**
     * The text markup of this control
     */
    text: string;
    getControlData(): ClientSideControlData;
    toHtml(index: number): string;
    fromHtml(html: string): void;
}
export declare class ClientSideWebpart extends ClientSidePart {
    title: string;
    description: string;
    propertieJson: TypedHash<any>;
    webPartId: string;
    protected htmlProperties: string;
    protected serverProcessedContent: ServerProcessedContent;
    protected canvasDataVersion: string;
    constructor(title: string, description?: string, propertieJson?: TypedHash<any>, webPartId?: string, htmlProperties?: string, serverProcessedContent?: ServerProcessedContent, canvasDataVersion?: string);
    static fromComponentDef(definition: ClientSidePageComponent): ClientSideWebpart;
    import(component: ClientSidePageComponent): void;
    setProperties<T = any>(properties: T): this;
    getProperties<T = any>(): T;
    toHtml(index: number): string;
    fromHtml(html: string): void;
    getControlData(): ClientSideControlData;
    protected renderHtmlProperties(): string;
    protected parseJsonProperties(props: TypedHash<any>): any;
}
/**
 * Client side webpart object (retrieved via the _api/web/GetClientSideWebParts REST call)
 */
export interface ClientSidePageComponent {
    /**
     * Component type for client side webpart object
     */
    ComponentType: number;
    /**
     * Id for client side webpart object
     */
    Id: string;
    /**
     * Manifest for client side webpart object
     */
    Manifest: string;
    /**
     * Manifest type for client side webpart object
     */
    ManifestType: number;
    /**
     * Name for client side webpart object
     */
    Name: string;
    /**
     * Status for client side webpart object
     */
    Status: number;
}
export interface ServerProcessedContent {
    searchablePlainTexts: TypedHash<string>;
    imageSources: TypedHash<string>;
    links: TypedHash<string>;
}
export interface ClientSideControlPosition {
    controlIndex?: number;
    sectionFactor: CanvasColumnFactorType;
    sectionIndex: number;
    zoneIndex: number;
}
export interface ClientSideControlData {
    controlType?: number;
    id?: string;
    editorType?: string;
    position: ClientSideControlPosition;
    webPartId?: string;
    displayMode?: number;
}
export interface ClientSideWebpartData {
    dataVersion: string;
    description: string;
    id: string;
    instanceId: string;
    properties: any;
    title: string;
    serverProcessedContent?: ServerProcessedContent;
}
export declare module ClientSideWebpartPropertyTypes {
    /**
     * Propereties for Embed (component id: 490d7c76-1824-45b2-9de3-676421c997fa)
     */
    interface Embed {
        embedCode: string;
        cachedEmbedCode?: string;
        shouldScaleWidth?: boolean;
        tempState?: any;
    }
    /**
     * Properties for Bing Map (component id: e377ea37-9047-43b9-8cdb-a761be2f8e09)
     */
    interface BingMap {
        center: {
            altitude?: number;
            altitudeReference?: number;
            latitude: number;
            longitude: number;
        };
        mapType: "aerial" | "birdseye" | "road" | "streetside";
        maxNumberOfPushPins?: number;
        pushPins?: {
            location: {
                latitude: number;
                longitude: number;
                altitude?: number;
                altitudeReference?: number;
            };
            address?: string;
            defaultAddress?: string;
            defaultTitle?: string;
            title?: string;
        }[];
        shouldShowPushPinTitle?: boolean;
        zoomLevel?: number;
    }
}
//# sourceMappingURL=clientsidepages.d.ts.map