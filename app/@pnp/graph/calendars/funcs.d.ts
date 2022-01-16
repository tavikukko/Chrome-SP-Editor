import { IGraphQueryable, IGraphQueryableCollection } from "../graphqueryable.js";
import { EmailAddress, Event as IEvent } from "@microsoft/microsoft-graph-types";
/**
 * Temporary until graph types include this type
 */
interface IEventWithTag extends IEvent {
    "@odata.etag": string;
}
/**
 * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range,
 * from the user's default calendar, or from some other calendar of the user's
 *
 * @param this IGraphQueryable instance
 * @param start start time
 * @param end end time
 */
export declare function calendarView(this: IGraphQueryable, start: string, end: string): IGraphQueryableCollection<ICalendarViewInfo[]>;
export declare type ICalendarViewInfo = IEventWithTag;
/**
 * Get the emailAddress objects that represent all the meeting rooms in the user's tenant or in a specific room list.
 *
 * @param this IGraphQueryable instance
 * @param roomList The SMTP address associated with the room list.
 */
export declare function findRooms(this: IGraphQueryable, roomList?: string): IGraphQueryableCollection<EmailAddress[]>;
/**
 * Get the instances (occurrences) of an event for a specified time range.
 * If the event is a seriesMaster type, this returns the occurrences and exceptions of the event in the specified time range.
 *
 * @param this IGraphQueryable instance
 * @param start start time
 * @param end end time
 */
export declare function instances(this: IGraphQueryable, start: string, end: string): IGraphQueryableCollection<IInstance[]>;
export declare type IInstance = IEventWithTag;
export {};
//# sourceMappingURL=funcs.d.ts.map