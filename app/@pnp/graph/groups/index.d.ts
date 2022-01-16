import { IGroups } from "./types.js";
export { Group, GroupType, Groups, IGroup, IGroupAddResult, IGroups, } from "./types.js";
declare module "../rest" {
    interface GraphRest {
        readonly groups: IGroups;
    }
}
//# sourceMappingURL=index.d.ts.map