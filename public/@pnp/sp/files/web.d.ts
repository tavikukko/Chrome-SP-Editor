import { IFile } from "./types";
declare module "../webs/types" {
    interface _Web {
        getFileByServerRelativeUrl(fileRelativeUrl: string): IFile;
        getFileByServerRelativePath(fileRelativeUrl: string): IFile;
        getFileById(uniqueId: string): IFile;
    }
    interface IWeb {
        /**
         * Gets a file by server relative url
         *
         * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
         */
        getFileByServerRelativeUrl(fileRelativeUrl: string): IFile;
        /**
         * Gets a file by server relative url if your file name contains # and % characters
         *
         * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
         */
        getFileByServerRelativePath(fileRelativeUrl: string): IFile;
        /**
         * Gets a file by id
         *
         * @param uniqueId The UniqueId of the file
         */
        getFileById(uniqueId: string): IFile;
    }
}
//# sourceMappingURL=web.d.ts.map