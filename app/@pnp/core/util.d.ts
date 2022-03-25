export declare type DateAddInterval = "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second";
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
export declare function dateAdd(date: Date, interval: DateAddInterval, units: number): Date | undefined;
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
export declare function combine(...paths: (string | null | undefined)[]): string;
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
export declare function getRandomString(chars: number): string;
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export declare function getGUID(): string;
/**
 * Determines if a given value is a function
 *
 * @param f The thing to test for functionness
 */
export declare function isFunc(f: any): f is Function;
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
export declare function isArray(array: any): array is any[];
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
export declare function isUrlAbsolute(url: string): boolean;
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
export declare function stringIsNullOrEmpty(s: string | undefined | null): s is undefined | null | "";
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
export declare function objectDefinedNotNull<T>(obj: T | undefined | null): obj is T;
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
export declare function jsS(o: any): string;
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
export declare function hOP<T extends string>(o: any, p: T): boolean;
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
export declare function getHashCode(s: string): number;
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
export declare function delay(ms: number): Promise<void>;
//# sourceMappingURL=util.d.ts.map