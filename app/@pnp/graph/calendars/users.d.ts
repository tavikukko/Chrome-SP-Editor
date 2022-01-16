import { ICalendar, IEvents, ICalendars } from "./types.js";
import { ICalendarViewInfo } from "./funcs.js";
import { IGraphQueryableCollection } from "../graphqueryable.js";
import { EmailAddress } from "@microsoft/microsoft-graph-types";
declare module "../users/types" {
    interface _User {
        readonly calendar: ICalendar;
        readonly calendars: ICalendars;
        readonly attachmentFiles: ICalendar;
        readonly events: IEvents;
        calendarView(start: string, end: string): IGraphQueryableCollection<ICalendarViewInfo[]>;
        findRooms(roomList?: string): IGraphQueryableCollection<EmailAddress[]>;
    }
    interface IUser {
        readonly calendar: ICalendar;
        readonly calendars: ICalendars;
        readonly attachmentFiles: ICalendar;
        readonly events: IEvents;
        calendarView(start: string, end: string): IGraphQueryableCollection<ICalendarViewInfo[]>;
        findRooms(roomList?: string): IGraphQueryableCollection<EmailAddress[]>;
    }
}
//# sourceMappingURL=users.d.ts.map