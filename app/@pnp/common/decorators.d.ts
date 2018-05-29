export declare function deprecatedClass(deprecationVersion: string, message: string): (target: any) => void;
export declare function deprecated(deprecationVersion: string, message: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare function beta(message?: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
