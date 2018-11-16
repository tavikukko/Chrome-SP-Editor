import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { DriveItem as IDriveItem } from "@microsoft/microsoft-graph-types";
import { TypedHash } from "@pnp/common";
export interface IDriveItemsMethods {
    getById(id: string): DriveItem;
}
/**
 * Describes a collection of Drive objects
 *
 */
export declare class Drives extends GraphQueryableCollection {
    /**
     * Gets a Drive instance by id
     *
     * @param id Drive id
     */
    getById(id: string): Drive;
}
/**
 * Describes a Drive instance
 *
 */
export declare class Drive extends GraphQueryableInstance {
    readonly root: Root;
    readonly items: IDriveItemsMethods;
    readonly list: DriveList;
    readonly recent: Recent;
    readonly sharedWithMe: SharedWithMe;
}
/**
 * Describes a Root instance
 *
 */
export declare class Root extends GraphQueryableInstance {
    readonly children: Children;
    search(query: string): DriveSearch;
}
/**
 * Describes a collection of Drive Item objects
 *
 */
export declare class DriveItems extends GraphQueryableInstance implements IDriveItemsMethods {
    /**
     * Gets a Drive Item instance by id
     *
     * @param id Drive Item id
     */
    getById(id: string): DriveItem;
}
/**
 * Describes a Drive Item instance
 *
 */
export declare class DriveItem extends GraphQueryableInstance {
    readonly children: Children;
    readonly thumbnails: Thumbnails;
    /**
     * Deletes this Drive Item
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a Drive item
     *
     * @param properties Set of properties of this Drive Item to update
     */
    update(properties: TypedHash<string | number | boolean | string[]>): Promise<void>;
    /**
     * Move the Drive item and optionally update the properties
     *
     * @param parentReference Should contain Id of new parent folder
     * @param properties Optional set of properties of this Drive Item to update
     */
    move(parentReference: TypedHash<any>, properties?: TypedHash<string | number | boolean | string[]>): Promise<void>;
}
/**
 * Return a collection of DriveItems in the children relationship of a DriveItem
 *
 */
export declare class Children extends GraphQueryableCollection {
    /**
    * Create a new folder or DriveItem in a Drive with a specified parent item or path
    * Currently only Folder or File works
    * @param name The name of the Drive Item.
    * @param properties Type of Drive Item to create.
    * */
    add(name: string, driveItemType: IDriveItem): Promise<IDriveItemAddResult>;
}
export declare class DriveList extends GraphQueryable {
}
export declare class Recent extends GraphQueryableInstance {
}
export declare class SharedWithMe extends GraphQueryableInstance {
}
export declare class DriveSearch extends GraphQueryableInstance {
}
export declare class Thumbnails extends GraphQueryableInstance {
}
export interface IDriveItemAddResult {
    data: IDriveItem;
    driveItem: DriveItem;
}
//# sourceMappingURL=onedrive.d.ts.map