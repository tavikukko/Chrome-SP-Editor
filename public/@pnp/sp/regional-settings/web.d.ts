import { IRegionalSettings } from "./types";
declare module "../webs/types" {
    interface _Web {
        regionalSettings: IRegionalSettings;
    }
    interface IWeb {
        /**
         * Regional settings for this web
         */
        regionalSettings: IRegionalSettings;
    }
}
//# sourceMappingURL=web.d.ts.map