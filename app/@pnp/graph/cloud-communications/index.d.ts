import { ICommunications } from "./types.js";
import "./users.js";
export { Presence, IPresence, Communications, ICommunications, } from "./types.js";
declare module "../rest" {
    interface GraphRest {
        readonly communications: ICommunications;
    }
}
//# sourceMappingURL=index.d.ts.map