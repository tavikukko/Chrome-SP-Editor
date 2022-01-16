import { IProfiles } from "./types.js";
export { IProfiles, Profiles, IClientPeoplePickerQueryParameters, IFollowedContent, IHashTag, IHashTagCollection, IPeoplePickerEntity, IPeoplePickerEntityData, IPeoplePickerQuerySettings, IUserProfile, UrlZone, } from "./types.js";
declare module "../rest" {
    interface SPRest {
        readonly profiles: IProfiles;
    }
}
//# sourceMappingURL=index.d.ts.map