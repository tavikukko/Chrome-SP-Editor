import { ICalendar, IEvents } from "./types";
declare module "../groups/types" {
    interface _Group {
        readonly attachmentFiles: ICalendar;
        readonly events: IEvents;
    }
    interface IGroup {
        readonly attachmentFiles: ICalendar;
        readonly events: IEvents;
    }
}
//# sourceMappingURL=groups.d.ts.map