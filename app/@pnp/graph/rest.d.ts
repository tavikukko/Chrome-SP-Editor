import { GraphQueryable } from "./graphqueryable";
import { GraphConfiguration } from "./config/graphlibconfig";
import { Groups } from "./groups";
import { Teams } from "./teams";
import { Users, User } from "./users";
import { IPlannerMethods } from "./planner";
import { GraphBatch } from "./batch";
export declare class GraphRest extends GraphQueryable {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    readonly groups: Groups;
    readonly teams: Teams;
    readonly me: User;
    readonly planner: IPlannerMethods;
    readonly users: Users;
    createBatch(): GraphBatch;
    setup(config: GraphConfiguration): void;
}
export declare let graph: GraphRest;
//# sourceMappingURL=rest.d.ts.map