import { _GraphQueryableInstance, _GraphQueryableCollection } from "../graphqueryable";
import { IUpdateable, IGetById, IDeleteable } from "../decorators";
import { Team as ITeamType, TeamsAsyncOperation as ITeamsAsyncOperation, TeamsTab as ITeamsTabType } from "@microsoft/microsoft-graph-types";
/**
 * Represents a Microsoft Team
 */
export declare class _Team extends _GraphQueryableInstance<ITeamType> {
    get primaryChannel(): IChannel;
    get channels(): IChannels;
    /**
     * Archives this Team
     *
     * @param shouldSetSpoSiteReadOnlyForMembers Should members have Read-only in associated Team Site
     */
    archive(shouldSetSpoSiteReadOnlyForMembers?: boolean): Promise<void>;
    /**
    * Unarchives this Team
    */
    unarchive(): Promise<void>;
    /**
     * Clones this Team
     * @param name The name of the new Group
     * @param description Optional description of the group
     * @param partsToClone Parts to clone ex: apps,tabs,settings,channels,members
     * @param visibility Set visibility to public or private
     */
    cloneTeam(name: string, description?: string, partsToClone?: string, visibility?: "public" | "private"): Promise<ITeamCreateResultAsync>;
    getOperationById(id: string): Promise<ITeamsAsyncOperation>;
}
export interface ITeam extends _Team, IUpdateable<ITeamType> {
}
export declare const Team: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITeam & import("@pnp/odata").IInvokable<any>;
/**
 * Teams
 */
export declare class _Teams extends _GraphQueryableCollection<ITeamType[]> {
    create(team: ITeamType): Promise<ITeamCreateResultAsync>;
}
export interface ITeams extends _Teams, IGetById<ITeam> {
}
export declare const Teams: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITeams & import("@pnp/odata").IInvokable<any>;
/**
 * Channel
 */
export declare class _Channel extends _GraphQueryableInstance {
    get tabs(): ITabs;
}
export interface IChannel extends _Channel {
}
export declare const Channel: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IChannel & import("@pnp/odata").IInvokable<any>;
/**
 * Channels
 */
export declare class _Channels extends _GraphQueryableCollection {
    /**
     * Creates a new Channel in the Team
     * @param displayName The display name of the new channel
     * @param description Optional description of the channel
     *
     */
    add(displayName: string, description?: string): Promise<IChannelCreateResult>;
}
export interface IChannels extends _Channels, IGetById<IChannel> {
}
export declare const Channels: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IChannels & import("@pnp/odata").IInvokable<any>;
/**
 * Tab
 */
export declare class _Tab extends _GraphQueryableInstance {
}
export interface ITab extends _Tab, IUpdateable, IDeleteable {
}
export declare const Tab: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITab & import("@pnp/odata").IInvokable<any>;
/**
 * Tabs
 */
export declare class _Tabs extends _GraphQueryableCollection {
    /**
     * Adds a tab to the channel
     * @param name The name of the new Tab
     * @param appUrl The url to an app ex: https://graph.microsoft.com/beta/appCatalogs/teamsApps/12345678-9abc-def0-123456789a
     * @param tabsConfiguration visit https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamstab_add for reference
     */
    add(name: string, appUrl: string, properties: ITeamsTabType): Promise<ITabCreateResult>;
}
export interface ITabs extends _Tabs, IGetById<ITab> {
}
export declare const Tabs: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITabs & import("@pnp/odata").IInvokable<any>;
export interface ITeamUpdateResult {
    data: any;
    team: ITeam;
}
export interface IChannelCreateResult {
    data: any;
    channel: IChannel;
}
export interface ITabCreateResult {
    data: any;
    tab: ITab;
}
export interface ITabUpdateResult {
    data: any;
    tab: ITab;
}
export interface ITeamCreateResultAsync {
    teamId: string;
    operationId: string;
}
export interface ITeamCreateResult {
    data: any;
    team: ITeam;
}
//# sourceMappingURL=types.d.ts.map