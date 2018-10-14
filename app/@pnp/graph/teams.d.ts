import { Group } from "./groups";
import { GraphQueryable, GraphQueryableInstance } from "./graphqueryable";
import { TeamProperties } from "./types";
import { ODataParser } from "@pnp/odata";
import { FetchOptions } from "@pnp/common";
export declare class Teams {
    /**
     * Creates a new team and associated Group with the given information
     */
    create(name: string, description?: string, teamProperties?: TeamProperties): Promise<TeamCreateResult>;
}
/**
 * Represents a Microsoft Team
 */
export declare class Team extends GraphQueryableInstance<TeamProperties> {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    /**
     * Updates this team instance's properties
     *
     * @param properties The set of properties to update
     */
    update(properties: TeamProperties): Promise<TeamUpdateResult>;
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    get<T = TeamProperties>(parser?: ODataParser<T>, options?: FetchOptions): Promise<T>;
}
export interface TeamUpdateResult {
    data: any;
    team: Team;
}
export interface TeamCreateResult {
    data: any;
    group: Group;
    team: Team;
}
//# sourceMappingURL=teams.d.ts.map