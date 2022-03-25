export declare type ValidProxyMethods = "apply" | "get" | "has" | "set";
export declare type ExtensionDelegateType<T extends Record<string, unknown>> = {
    (op: string, target: T, ...rest: any[]): void;
};
export declare type ExtensionType<T extends Record<string, unknown> = {}> = Pick<ProxyHandler<T>, ValidProxyMethods> | ExtensionDelegateType<T> | Record<any, any>;
/**
 * Decorator factory wrapping any tagged class in the extension proxy, enabling the use of object extensions
 *
 * @description MUST be applied last (i.e. be the first decorator in the list top to bottom applied to a class)
 *
 * @returns Decorator implementation
 */
export declare function extendable(): (target: any) => any;
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
export declare function extend<T extends object>(target: T, extensions: ExtensionType | ExtensionType[]): T;
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
export declare function extendFactory<T extends (...args: any[]) => any>(factory: T, extensions: ExtensionType | ExtensionType[]): void;
/**
 * Disables all extensions
 */
export declare const disableExtensions: () => void;
/**
 * Enables all extensions
 */
export declare const enableExtensions: () => void;
//# sourceMappingURL=extendable.d.ts.map