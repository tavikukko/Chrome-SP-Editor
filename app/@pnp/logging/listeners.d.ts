import { ILogEntry, ILogListener } from "./index.js";
export declare function ConsoleListener(prefix?: string, colors?: IConsoleListenerColors): ILogListener;
/**
 * Text color options for use in the ConsoleListener
 * All values can be specified as known names, hex values, rgb, or rgba values
 */
export interface IConsoleListenerColors {
    /** Default text color for all logging levels unless they're specified */
    color?: string;
    /** Text color to use for messages with LogLevel.Verbose */
    verbose?: string;
    /** Text color to use for messages with LogLevel.Info */
    info?: string;
    /** Text color to use for messages with LogLevel.Warning */
    warning?: string;
    /** Text color to use for messages with LogLevel.Error */
    error?: string;
}
export declare function FunctionListener(impl: (entry: ILogEntry) => void): ILogListener;
//# sourceMappingURL=listeners.d.ts.map