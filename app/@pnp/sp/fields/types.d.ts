import { _SPCollection, _SPInstance, IDeleteable } from "../spqueryable.js";
export declare class _Fields extends _SPCollection<IFieldInfo[]> {
    /**
     * Creates a field based on the specified schema
     *
     * @param xml A string or XmlSchemaFieldCreationInformation instance descrbing the field to create
     */
    createFieldAsXml(xml: string | IXmlSchemaFieldCreationInformation): Promise<IFieldAddResult>;
    /**
     * Gets a field from the collection by id
     *
     * @param id The Id of the list
     */
    getById(id: string): IField;
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    getByTitle(title: string): IField;
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    getByInternalNameOrTitle(name: string): IField;
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    add(title: string, fieldTypeKind: number, properties: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addField(title: string, fieldTypeKind: number, properties: IAddFieldProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldText to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addText(title: string, properties?: IFieldCreationProperties & AddTextProps): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldCalculated to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCalculated(title: string, properties?: IFieldCreationProperties & AddCalculatedProps): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldDateTime to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addDateTime(title: string, properties?: IFieldCreationProperties & AddDateTimeProps): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldNumber to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addNumber(title: string, properties?: IFieldCreationProperties & AddNumberProps): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldCurrency to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCurrency(title: string, properties?: IFieldCreationProperties & AddCurrencyProps): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldMultiLineText to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     *
     */
    addMultilineText(title: string, properties?: IFieldCreationProperties & AddMultilineTextProps): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldUrl to the collection
     *
     * @param title The field title
     */
    addUrl(title: string, properties?: IFieldCreationProperties & AddUrlProps): Promise<IFieldAddResult>;
    /** Adds a user field to the colleciton
     *
     * @param title The new field's title
     * @param properties
     */
    addUser(title: string, properties?: IFieldCreationProperties & AddUserProps): Promise<IFieldAddResult>;
    /**
     * Adds a SP.FieldLookup to the collection
     *
     * @param title The new field's title
     * @param properties Set of additional properties to set on the new field
     */
    addLookup(title: string, properties?: IAddFieldProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldChoice to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addChoice(title: string, properties?: IFieldCreationProperties & AddChoiceProps): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldMultiChoice to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addMultiChoice(title: string, properties?: IFieldCreationProperties & AddChoiceProps): Promise<IFieldAddResult>;
    /**
   * Adds a new SP.FieldBoolean to the collection
   *
   * @param title The field title.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addBoolean(title: string, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
  * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
  *
  * @param displayName The display name of the new field.
  * @param primaryLookupFieldId The guid of the primary Lookup Field.
  * @param showField Which field to show from the lookup list.
  */
    addDependentLookupField(displayName: string, primaryLookupFieldId: string, showField: string): Promise<IFieldAddResult>;
    /**
   * Adds a new SP.FieldLocation to the collection
   *
   * @param title The field title.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addLocation(title: string, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldLocation to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addImageField(title: string, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
}
export interface IFields extends _Fields {
}
export declare const Fields: import("../spqueryable.js").ISPInvokableFactory<IFields>;
export declare class _Field extends _SPInstance<IFieldInfo> {
    delete: (this: import("../spqueryable.js").ISPQueryable<any>) => Promise<void>;
    /**
   * Updates this field instance with the supplied properties
   *
   * @param properties A plain object hash of values to update for the list
   * @param fieldType The type value such as SP.FieldLookup. Optional, looked up from the field if not provided
   */
    update(properties: any, fieldType?: string): Promise<IFieldUpdateResult>;
    /**
   * Sets the value of the ShowInDisplayForm property for this field.
   */
    setShowInDisplayForm(show: boolean): Promise<void>;
    /**
   * Sets the value of the ShowInEditForm property for this field.
   */
    setShowInEditForm(show: boolean): Promise<void>;
    /**
   * Sets the value of the ShowInNewForm property for this field.
   */
    setShowInNewForm(show: boolean): Promise<void>;
}
export interface IField extends _Field, IDeleteable {
}
export declare const Field: import("../spqueryable.js").ISPInvokableFactory<IField>;
/**
 * This interface defines the result of adding a field
 */
export interface IFieldAddResult {
    data: Partial<IFieldInfo>;
    field: IField;
}
/**
 * This interface defines the result of updating a field
 */
export interface IFieldUpdateResult {
    data: Partial<IFieldInfo>;
    field: IField;
}
export declare type AddTextProps = {
    MaxLength?: number;
};
export declare type AddCalculatedProps = {
    DateFormat?: DateTimeFieldFormatType;
    FieldTypeKind?: number;
    Formula?: string;
    OutputType?: FieldTypes;
};
export declare type AddDateTimeProps = {
    DateTimeCalendarType?: CalendarType;
    DisplayFormat?: DateTimeFieldFormatType;
    FriendlyDisplayFormat?: DateTimeFieldFriendlyFormatType;
};
export declare type AddNumberProps = {
    MinimumValue?: number;
    MaximumValue?: number;
};
export declare type AddCurrencyProps = AddNumberProps & {
    CurrencyLocaleId?: number;
};
export declare type AddMultilineTextProps = {
    AllowHyperlink?: boolean;
    AppendOnly?: boolean;
    NumberOfLines?: number;
    RestrictedMode?: boolean;
    RichText?: boolean;
};
export declare type AddUrlProps = {
    DisplayFormat?: UrlFieldFormatType;
};
export declare type AddUserProps = {
    SelectionMode?: FieldUserSelectionMode;
};
export declare type AddChoiceProps = {
    Choices: string[];
    EditFormat?: ChoiceFieldFormatType;
    FillInChoice?: boolean;
};
/**
 * Specifies the type of the field.
 */
export declare const enum FieldTypes {
    Invalid = 0,
    Integer = 1,
    Text = 2,
    Note = 3,
    DateTime = 4,
    Counter = 5,
    Choice = 6,
    Lookup = 7,
    Boolean = 8,
    Number = 9,
    Currency = 10,
    URL = 11,
    Computed = 12,
    Threading = 13,
    Guid = 14,
    MultiChoice = 15,
    GridChoice = 16,
    Calculated = 17,
    File = 18,
    Attachments = 19,
    User = 20,
    Recurrence = 21,
    CrossProjectLink = 22,
    ModStat = 23,
    Error = 24,
    ContentTypeId = 25,
    PageSeparator = 26,
    ThreadIndex = 27,
    WorkflowStatus = 28,
    AllDayEvent = 29,
    WorkflowEventType = 30
}
export declare enum DateTimeFieldFormatType {
    DateOnly = 0,
    DateTime = 1
}
export declare enum DateTimeFieldFriendlyFormatType {
    Unspecified = 0,
    Disabled = 1,
    Relative = 2
}
/**
 * Specifies the control settings while adding a field.
 */
export declare const enum AddFieldOptions {
    /**
   *  Specify that a new field added to the list must also be added to the default content type in the site collection
   */
    DefaultValue = 0,
    /**
   * Specify that a new field added to the list must also be added to the default content type in the site collection.
   */
    AddToDefaultContentType = 1,
    /**
   * Specify that a new field must not be added to any other content type
   */
    AddToNoContentType = 2,
    /**
   *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
   */
    AddToAllContentTypes = 4,
    /**
   * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
   */
    AddFieldInternalNameHint = 8,
    /**
   * Specify that a new field that is added to the specified list must also be added to the default list view
   */
    AddFieldToDefaultView = 16,
    /**
   * Specify to confirm that no other field has the same display name
   */
    AddFieldCheckDisplayName = 32
}
export interface IXmlSchemaFieldCreationInformation {
    Options?: AddFieldOptions;
    SchemaXml: string;
}
export declare const enum CalendarType {
    Gregorian = 1,
    Japan = 3,
    Taiwan = 4,
    Korea = 5,
    Hijri = 6,
    Thai = 7,
    Hebrew = 8,
    GregorianMEFrench = 9,
    GregorianArabic = 10,
    GregorianXLITEnglish = 11,
    GregorianXLITFrench = 12,
    KoreaJapanLunar = 14,
    ChineseLunar = 15,
    SakaEra = 16,
    UmAlQura = 23
}
export declare enum UrlFieldFormatType {
    Hyperlink = 0,
    Image = 1
}
export declare enum FieldUserSelectionMode {
    PeopleAndGroups = 1,
    PeopleOnly = 0
}
export interface IFieldCreationProperties {
    DefaultFormula?: string;
    Description?: string;
    EnforceUniqueValues?: boolean;
    FieldTypeKind?: number;
    Group?: string;
    Hidden?: boolean;
    Indexed?: boolean;
    Required?: boolean;
    Title?: string;
    ValidationFormula?: string;
    ValidationMessage?: string;
}
export interface IAddFieldProperties {
    Title?: string;
    Type?: number;
    Required?: boolean;
    IsCompactName?: boolean;
    LookupListId?: string;
    LookupWebId?: string;
    Choices?: string[];
    LookupFieldName?: string;
}
export declare enum ChoiceFieldFormatType {
    Dropdown = 0,
    RadioButtons = 1
}
export interface IFieldInfo {
    DefaultFormula: string | null;
    DefaultValue: string | null;
    Description: string;
    Direction: string;
    EnforceUniqueValues: boolean;
    EntityPropertyName: string;
    FieldTypeKind: FieldTypes;
    Filterable: boolean;
    FromBaseType: boolean;
    Group: string;
    Hidden: boolean;
    Id: string;
    Indexed: boolean;
    IndexStatus: number;
    InternalName: string;
    JSLink: string;
    PinnedToFiltersPane: boolean;
    ReadOnlyField: boolean;
    Required: boolean;
    SchemaXml: string;
    Scope: string;
    Sealed: boolean;
    ShowInFiltersPane: number;
    Sortable: boolean;
    StaticName: string;
    Title: string;
    TypeAsString: string;
    TypeDisplayName: string;
    TypeShortDescription: string;
    ValidationFormula: string | null;
    ValidationMessage: string | null;
}
//# sourceMappingURL=types.d.ts.map