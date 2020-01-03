import { IGraphQueryable } from "./graphqueryable";
import { ITypedHash } from "@pnp/common";
/**
 * Decorator used to specify the default path for Queryable objects
 *
 * @param path
 */
export declare function defaultPath(path: string): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {};
} & T;
/**
 * Adds the delete method to the tagged class
 */
export declare function deleteable(): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {
        delete(this: IGraphQueryable<any>): Promise<void>;
    };
} & T;
export interface IDeleteable {
    /**
     * Delete this instance
     */
    delete(): Promise<void>;
}
/**
 * Adds the update method to the tagged class
 */
export declare function updateable(): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {
        update(this: IGraphQueryable<any>, props: ITypedHash<any>): Promise<void>;
    };
} & T;
export interface IUpdateable<T = ITypedHash<any>> {
    /**
     * Update the properties of an event object
     *
     * @param props Set of properties to update
     */
    update(props: T): Promise<void>;
}
/**
 * Adds the add method to the tagged class
 */
export declare function addable(): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {
        add(this: IGraphQueryable<any>, props: any): Promise<void>;
    };
} & T;
export interface IAddable<T = ITypedHash<any>, R = {
    id: string;
}> {
    /**
     * Adds a new item to this collection
     *
     * @param props properties used to create the new thread
     */
    add(props: T): Promise<R>;
}
/**
 * Adds the getById method to a collection
 */
export declare function getById<R>(factory: (...args: any[]) => R): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {
        getById(this: IGraphQueryable<any>, id: string): R;
    };
} & T;
export interface IGetById<R = any, T = string> {
    /**
     * Adds a new item to this collection
     *
     * @param props properties used to create the new thread
     */
    getById(id: T): R;
}
//# sourceMappingURL=decorators.d.ts.map