import { ICommunications } from "./types.js";
import "./users.js";
export { Presence, IPresence, Communications, ICommunications, } from "./types.js";
declare module "../fi" {
    interface GraphFI {
        readonly communications: ICommunications;
    }
}
//# sourceMappingURL=index.d.ts.map