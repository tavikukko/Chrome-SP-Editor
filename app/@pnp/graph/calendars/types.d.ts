import { Event as IEventType, Calendar as ICalendarType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable.js";
import { IDeleteable, IUpdateable, IGetById } from "../decorators.js";
import { calendarView, instances } from "./funcs.js";
/**
 * Calendar
 */
export declare class _Calendar extends _GraphQueryableInstance<ICalendarType> {
    get events(): IEvents;
    calendarView: typeof calendarView;
}
export interface ICalendar extends _Calendar {
}
export declare const Calendar: import("../graphqueryable.js").IGraphInvokableFactory<ICalendar>;
/**
 * Calendars
 */
export declare class _Calendars extends _GraphQueryableCollection<ICalendarType[]> {
}
export interface ICalendars extends _Calendars, IGetById<ICalendar> {
}
export declare const Calendars: import("../graphqueryable.js").IGraphInvokableFactory<ICalendars>;
/**
 * Event
 */
export declare class _Event extends _GraphQueryableInstance<IEventType> {
    instances: typeof instances;
}
export interface IEvent extends _Event, IDeleteable, IUpdateable {
}
export declare const Event: import("../graphqueryable.js").IGraphInvokableFactory<IEvent>;
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
export declare const Events: import("../graphqueryable.js").IGraphInvokableFactory<IEvents>;
/**
 * EventAddResult
 */
export interface IEventAddResult {
    data: IEventType;
    event: IEvent;
}
//# sourceMappingURL=types.d.ts.map