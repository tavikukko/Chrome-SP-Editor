import { IGraphQueryable, IGraphQueryableCollection } from "../graphqueryable.js";
import { EmailAddress, Event as IEvent } from "@microsoft/microsoft-graph-types";
/**
 * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range,
 * from the user's default calendar, or from some other calendar of the user's
 *
 * @param this IGraphQueryable instance
 * @param start start time
 * @param end end time
 */
export declare function calendarView(this: IGraphQueryable, start: string, end: string): IGraphQueryableCollection<ICalendarViewInfo[]>;
/**
 * Temporary until graph types include this type
 */
export interface ICalendarViewInfo extends IEvent {
    "@odata.etag": string;
}
/**
 * Get the emailAddress objects that represent all the meeting rooms in the user's tenant or in a specific room list.
 *
 * @param this IGraphQueryable instance
 * @param roomList The SMTP address associated with the room list.
 */
export declare function findRooms(this: IGraphQueryable, roomList?: string): IGraphQueryableCollection<EmailAddress[]>;
//# sourceMappingURL=funcs.d.ts.map