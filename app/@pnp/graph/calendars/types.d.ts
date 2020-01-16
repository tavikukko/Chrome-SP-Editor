import { Event as IEventType, Calendar as ICalendarType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable";
import { IDeleteable, IUpdateable, IGetById } from "../decorators";
/**
 * Calendars
 */
export declare class _Calendars extends _GraphQueryableCollection<ICalendarType[]> {
}
export interface ICalendars<GetType = any> extends _Calendars {
}
export declare const Calendars: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ICalendars<any>;
/**
 * Calendar
 */
export declare class _Calendar extends _GraphQueryableInstance<ICalendarType> {
    get events(): IEvents;
}
export interface ICalendar extends _Calendar {
}
export declare const Calendar: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ICalendar;
/**
 * Event
 */
export declare class _Event extends _GraphQueryableInstance<IEventType> {
}
export interface IEvent extends _Event, IDeleteable, IUpdateable {
}
export declare const Event: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IEvent;
/**
 * Events
 */
export declare class _Events extends _GraphQueryableCollection<IEventType[]> {
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    add(properties: IEventType): Promise<IEventAddResult>;
}
export interface IEvents extends _Events, IGetById<IEvent> {
}
export declare const Events: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IEvents;
/**
 * EventAddResult
 */
export interface IEventAddResult {
    data: IEventType;
    event: IEvent;
}
//# sourceMappingURL=types.d.ts.map