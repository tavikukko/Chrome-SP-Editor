import { IFeatures } from "./types.js";
declare module "../sites/types" {
    interface _Site {
        readonly features: IFeatures;
    }
    interface ISite {
        /**
         * Access the features activated in this site
         */
        readonly features: IFeatures;
    }
}
//# sourceMappingURL=site.d.ts.map