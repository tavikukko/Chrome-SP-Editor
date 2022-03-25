export declare function body<T = unknown, U = any>(o: U, previous?: T): T & {
    body: string;
};
export declare function headers<T = unknown, U extends Record<string, string> = {}>(o: U, previous?: T): T & {
    headers: U;
};
//# sourceMappingURL=request-builders.d.ts.map