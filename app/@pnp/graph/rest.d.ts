import { GraphQueryable } from "./graphqueryable";
import { GraphConfiguration } from "./config/graphlibconfig";
import { Groups } from "./groups";
import { Me } from "./me";
import { Teams } from "./teams";
import { Users } from "./users";
export declare class GraphRest extends GraphQueryable {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    readonly groups: Groups;
    readonly teams: Teams;
    readonly me: Me;
    readonly users: Users;
    setup(config: GraphConfiguration): void;
}
export declare let graph: GraphRest;
