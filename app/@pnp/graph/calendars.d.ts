import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { TypedHash } from "@pnp/common";
import { Event as IEvent } from "@microsoft/microsoft-graph-types";
export declare class Calendars extends GraphQueryableCollection {
    constructor(baseUrl: string | GraphQueryable, path?: string);
}
export declare class Calendar extends GraphQueryableInstance {
    readonly events: Events;
}
export declare class Events extends GraphQueryableCollection {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    getById(id: string): Event;
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    add(properties: Event): Promise<EventAddResult>;
}
export interface EventAddResult {
    data: IEvent;
    event: Event;
}
export declare class Event extends GraphQueryableInstance {
    /**
     * Update the properties of an event object
     *
     * @param properties Set of properties of this event to update
     */
    update(properties: TypedHash<any>): Promise<void>;
    /**
     * Deletes this event
     */
    delete(): Promise<void>;
}
//# sourceMappingURL=calendars.d.ts.map