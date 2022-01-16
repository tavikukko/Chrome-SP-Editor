import { _SharePointQueryableCollection, _SharePointQueryableInstance } from "../sharepointqueryable.js";
/**
 * Describes a collection of Form objects
 *
 */
export declare class _TermStore extends _SharePointQueryableInstance<ITermStoreInfo> {
    /**
     * Gets the term groups associated with this tenant
     */
    get groups(): ITermGroups;
    /**
     * Gets the term groups associated with this tenant
     */
    get sets(): ITermSets;
}
export interface ITermStore extends _TermStore {
}
export declare const TermStore: import("../sharepointqueryable.js").ISPInvokableFactory<ITermStore>;
export declare class _TermGroups extends _SharePointQueryableCollection<ITermGroupInfo[]> {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id: string): ITermGroup;
}
export interface ITermGroups extends _TermGroups {
}
export declare const TermGroups: import("../sharepointqueryable.js").ISPInvokableFactory<ITermGroups>;
export declare class _TermGroup extends _SharePointQueryableInstance<ITermGroupInfo> {
    /**
     * Gets the term sets associated with this tenant
     */
    get sets(): ITermSets;
}
export interface ITermGroup extends _TermGroup {
}
export declare const TermGroup: import("../sharepointqueryable.js").ISPInvokableFactory<ITermGroup>;
export declare class _TermSets extends _SharePointQueryableCollection<ITermSetInfo[]> {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id: string): ITermSet;
}
export interface ITermSets extends _TermSets {
}
export declare const TermSets: import("../sharepointqueryable.js").ISPInvokableFactory<ITermSets>;
export declare class _TermSet extends _SharePointQueryableInstance<ITermSetInfo> {
    /**
     * Gets all the terms in this set
     */
    get terms(): ITerms;
    get parentGroup(): ITermGroup;
    get children(): IChildren;
    get relations(): IRelations;
    getTermById(id: string): ITerm;
    /**
     * Gets all the terms in this termset in an ordered tree using the appropriate sort ordering
     * ** This is an expensive operation and you should strongly consider caching the results **
     *
     * @param props Optional set of properties controlling how the tree is retrieved.
     */
    getAllChildrenAsOrderedTree(props?: Partial<IGetOrderedTreeProps>): Promise<IOrderedTermInfo[]>;
}
export interface ITermSet extends _TermSet {
}
export declare const TermSet: import("../sharepointqueryable.js").ISPInvokableFactory<ITermSet>;
export declare class _Children extends _SharePointQueryableCollection<ITermInfo[]> {
}
export interface IChildren extends _Children {
}
export declare const Children: import("../sharepointqueryable.js").ISPInvokableFactory<IChildren>;
export declare class _Terms extends _SharePointQueryableCollection<ITermInfo[]> {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id: string): ITerm;
}
export interface ITerms extends _Terms {
}
export declare const Terms: import("../sharepointqueryable.js").ISPInvokableFactory<ITerms>;
export declare class _Term extends _SharePointQueryableInstance<ITermInfo> {
    get children(): IChildren;
    get relations(): IRelations;
    get set(): ITermSet;
}
export interface ITerm extends _Term {
}
export declare const Term: import("../sharepointqueryable.js").ISPInvokableFactory<ITerm>;
export declare class _Relations extends _SharePointQueryableCollection<IRelationInfo[]> {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id: string): IRelation;
}
export interface IRelations extends _Relations {
}
export declare const Relations: import("../sharepointqueryable.js").ISPInvokableFactory<IRelations>;
export declare class _Relation extends _SharePointQueryableInstance<IRelationInfo> {
    get fromTerm(): ITerm;
    get toTerm(): ITerm;
    get set(): ITermSet;
}
export interface IRelation extends _Relation {
}
export declare const Relation: import("../sharepointqueryable.js").ISPInvokableFactory<IRelation>;
export interface ITermStoreInfo {
    id: string;
    name: string;
    defaultLanguageTag: string;
    languageTags: string[];
    administrators?: ITaxonomyUserInfo;
}
export interface ITermGroupInfo {
    id: string;
    description: string;
    name: string;
    displayName: string;
    createdDateTime: string;
    lastModifiedDateTime: string;
    type: string;
    scope: "global" | "system" | "siteCollection";
}
export interface ITermSetInfo {
    id: string;
    localizedNames: {
        name: string;
        languageTag: string;
    }[];
    description: string;
    createdDateTime: string;
    customSortOrder: string[];
    properties?: ITaxonomyProperty[];
    childrenCount: number;
    groupId: string;
    isOpen: boolean;
    isAvailableForTagging: boolean;
    contact: string;
}
export interface ITermInfo {
    childrenCount: number;
    id: string;
    labels: {
        name: string;
        isDefault: boolean;
        languageTag: string;
    }[];
    createdDateTime: string;
    customSortOrder: ITermSortOrderInfo[];
    lastModifiedDateTime: string;
    descriptions: {
        description: string;
        languageTag: string;
    }[];
    properties?: ITaxonomyProperty[];
    localProperties?: ITaxonomyLocalProperty[];
    isDeprecated: boolean;
    isAvailableForTagging: {
        setId: string;
        isAvailable: boolean;
    }[];
    topicRequested: boolean;
    parent?: ITermInfo;
}
export interface ITermSortOrderInfo {
    setId: string;
    order: string[];
}
export interface IOrderedTermInfo extends ITermInfo {
    children: IOrderedTermInfo[];
    defaultLabel: string;
}
export interface IRelationInfo {
    id: string;
    relationType: string;
}
export interface ITaxonomyUserInfo {
    user: {
        displayName: string;
        email: string;
        id: string;
    };
}
export interface ITaxonomyProperty {
    key: string;
    value: string;
}
export interface ITaxonomyLocalProperty {
    setId: string;
    properties: ITaxonomyProperty[];
}
export interface IGetOrderedTreeProps {
    retrieveProperties: boolean;
}
//# sourceMappingURL=types.d.ts.map