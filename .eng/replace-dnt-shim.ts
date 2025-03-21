import { dirname, fromFileUrl } from "jsr:@std/path@1";

const __dirname = dirname(fromFileUrl(import.meta.url));
const pwd = dirname(__dirname);

export async function deleteShim(path: string) {
    await Deno.remove(path);
}

export async function replaceGlobalsFile(path: string) {
    const content = `export const globals = globalThis;
    
export const WINDOWS = (globals.Deno && globals.Deno.build.os === "windows") || (globals.process && globals.process.platform === "win32") || (globals.navigator && globals.navigator.userAgent.includes("Windows"));
export const DARWIN = (globals.Deno && globals.Deno.build.os === "darwin") || (globals.process && globals.process.platform === "darwin") || (globals.navigator && globals.navigator.userAgent.includes("Mac OS X"));

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

    `;

    await Deno.writeTextFile(path, content);
}

export async function replaceGlobalsTypeFile(path: string) {
    const content = `export declare const globals: typeof globalThis & Record<string, any>;
    
export declare const WINDOWS: boolean;
export declare const DARWIN: boolean;
export declare function loadOsModule(): typeof import("node:os") | undefined;
`;

    await Deno.writeTextFile(path, content);
}

await replaceGlobalsTypeFile(`${pwd}/npm/types/globals.d.ts`);
await replaceGlobalsFile(`${pwd}/npm/esm/globals.js`);
await deleteShim(`${pwd}/npm/esm/_dnt.shims.js`);
await deleteShim(`${pwd}/npm/types/_dnt.shims.d.ts`);
