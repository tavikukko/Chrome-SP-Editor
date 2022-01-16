import { ICalendar, IEvents } from "./types.js";
declare module "../groups/types" {
    interface _Group {
        readonly calendar: ICalendar;
        readonly attachmentFiles: ICalendar;
        readonly events: IEvents;
    }
    interface IGroup {
        readonly calendar: ICalendar;
        readonly attachmentFiles: ICalendar;
        readonly events: IEvents;
    }
}
//# sourceMappingURL=groups.d.ts.map