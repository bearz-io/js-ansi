export declare const globals: typeof globalThis & Record<string, any>;

export declare const WINDOWS: boolean;
export declare const DARWIN: boolean;
export declare function loadOsModule(): typeof import("node:os") | undefined;
