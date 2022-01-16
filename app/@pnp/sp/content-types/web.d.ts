import { IContentTypes } from "./types.js";
declare module "../webs/types" {
    interface _Web {
        readonly contentTypes: IContentTypes;
    }
    interface IWeb {
        /**
         * Content types contained in this web
         */
        readonly contentTypes: IContentTypes;
    }
}
//# sourceMappingURL=web.d.ts.map