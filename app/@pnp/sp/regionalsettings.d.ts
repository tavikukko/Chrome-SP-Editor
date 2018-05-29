import { SharePointQueryable, SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
/**
 * Describes regional settings ODada object
 */
export declare class RegionalSettings extends SharePointQueryableInstance {
    /**
     * Creates a new instance of the RegionalSettings class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this regional settings collection
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Gets the collection of languages used in a server farm.
     */
    readonly installedLanguages: InstalledLanguages;
    /**
     * Gets the collection of language packs that are installed on the server.
     */
    readonly globalInstalledLanguages: InstalledLanguages;
    /**
     * Gets time zone
     */
    readonly timeZone: TimeZone;
    /**
     * Gets time zones
     */
    readonly timeZones: TimeZones;
}
/**
 * Describes installed languages ODada queriable collection
 */
export declare class InstalledLanguages extends SharePointQueryableCollection {
    constructor(baseUrl: string | SharePointQueryable, path?: string);
}
/**
 * Describes TimeZone ODada object
 */
export declare class TimeZone extends SharePointQueryableInstance {
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    utcToLocalTime(utcTime: string | Date): Promise<string>;
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    localTimeToUTC(localTime: string | Date): Promise<string>;
}
/**
 * Describes time zones queriable collection
 */
export declare class TimeZones extends SharePointQueryableCollection {
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Gets an TimeZone by id
     *
     * @param id The integer id of the timezone to retrieve
     */
    getById(id: number): Promise<TimeZone>;
}
