export const globals = globalThis;

export const WINDOWS = (globals.Deno && globals.Deno.build.os === "windows") ||
    (globals.process && globals.process.platform === "win32") ||
    (globals.navigator && globals.navigator.userAgent.includes("Windows"));
export const DARWIN = (globals.Deno && globals.Deno.build.os === "darwin") ||
    (globals.process && globals.process.platform === "darwin") ||
    (globals.navigator && globals.navigator.userAgent.includes("Mac OS X"));

export function loadOsModule() {
    if (globals.Deno) {
        return undefined;
    } else if (globals.process) {
        // deno-lint-ignore no-explicit-any
        const proc = globals.process;
        if (proc.versions && proc.getBuiltinModule) {
            return proc.getBuiltinModule("node:os");
        } else if (globals.Bun && typeof require !== "undefined") {
            return require("node:os");
        }
    }

    return undefined;
}
