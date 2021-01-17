import { ISubscriptions } from "./types.js";
export { ISubscription, ISubAddResult, ISubscriptions, Subscription, Subscriptions, } from "./types.js";
declare module "../rest" {
    interface GraphRest {
        readonly subscriptions: ISubscriptions;
    }
}
//# sourceMappingURL=index.d.ts.map