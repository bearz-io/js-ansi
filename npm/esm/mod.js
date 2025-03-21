/**
 * ## Overview
 *
 * The `ansi` module provides color detection, writing ansi
 * codes, and an ansi writer.
 *
 * ![logo](https://raw.githubusercontent.com/bearz-io/js/refs/heads/main/eng/assets/bearz.io.png)
 *
 * [![JSR](https://jsr.io/badges/@bearz/ansi)](https://jsr.io/@bearz/ansi)
 * [![npm version](https://badge.fury.io/js/@bearz%2Fansi.svg)](https://badge.fury.io/js/@bearz%2Fansi)
 * [![GitHub version](https://badge.fury.io/gh/bearz-io%2Fjs-ansi.svg)](https://badge.fury.io/gh/bearz-io%2Fjs-ansi)
 *
 * ## Documentation
 *
 * Documentation is available on [jsr.io](https://jsr.io/@bearz/ansi/doc)
 *
 * A list of other modules can be found at [github.com/bearz-io/js](https://github.com/bearz-io/js)
 *
 * ## Usage
 *
 * ```typescript
 * import { blue, writer, bgBlue, green, bold, apply } from "@bearz/ansi";
 *
 * console.log(blue("test"));
 * console.log(green("success"));
 * writer.write("Hello, World!").writeLine();
 * writer.debug("Hello, World!");
 * writer.info("Hello, World!");
 * writer.success("Hello, World!");
 * writer.writeLine(apply("Hello, World!", bold, green, bgBlue) + " test");
 * writer.styleLine("Hello, World", bold, green);
 * writer.info("An informational message");
 * writer.writeLine(blue("My message"));
 * writer.writeLine(apply("Multiple Styles", bgBlue, bold));
 * writer.style("ok, ", blue);
 * writer.styleLine("success", green);
 * ```
 *
 * ## Notes
 *
 * The core ansi functions in the `styles` module comes from
 * Deno's `@std/fmt/color` with addition modififcations such as
 * being less tied to deno and additional functions like `apply`
 * and `rgb24To8`.
 *
 * The `detector` module is heavily based on support color, but
 * isn't a direct port.
 *
 * The `@bearz/process` module is used for the writer class rather than
 * console.log so that text is directly written to stdout and because
 * stdout in that module abstracts the runtime specific stuff for deno,
 * node, and bun.
 *
 * ## License
 *
 * [Deno's MIT License](https://jsr.io/@std/fmt/1.0.6/LICENSE)
 *
 * [Support Colors MIT License](https://github.com/chalk/chalk/blob/main/license)
 *
 * [MIT License](./LICENSE.md)
 * @module
 */
export * from "./styles.js";
export * from "./enums.js";
export { writer } from "./writer.js";
export * from "./settings.js";
