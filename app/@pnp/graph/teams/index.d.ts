import { ITeamCreateResult, ITeam, ITeams } from "./types.js";
import { Team as ITeamType } from "@microsoft/microsoft-graph-types";
import "./users.js";
export { Channel, Channels, IChannel, IChannelCreateResult, IChannels, ITab, ITabCreateResult, ITabUpdateResult, ITabs, ITeam, ITeamCreateResult, ITeamCreateResultAsync, ITeamUpdateResult, ITeams, Tab, Tabs, Team, Teams, } from "./types.js";
declare module "../groups/types" {
    interface _Group {
        readonly team: ITeam;
        createTeam(properties: ITeamType): Promise<ITeamCreateResult>;
    }
    interface IGroup {
        readonly team: ITeam;
        createTeam(properties: ITeamType): Promise<ITeamCreateResult>;
    }
}
declare module "../fi" {
    interface GraphFI {
        readonly teams: ITeams;
    }
}
//# sourceMappingURL=index.d.ts.map