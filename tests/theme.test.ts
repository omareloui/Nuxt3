import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";

await setup({
  rootDir: fileURLToPath(new URL("..", import.meta.url)),
  browser: true,
  server: true,
});

describe("Theme", async () => {
  it.todo("it should have a themes cookie ");
});
