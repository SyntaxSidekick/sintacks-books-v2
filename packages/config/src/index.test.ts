import { describe, expect, it } from "vitest";
import { parsePublicEnv, ports } from "./index.js";

describe("public configuration", () => {
  it("keeps port assignments centralized", () => {
    expect(ports.web).toBe(5185);
    expect(ports.api).toBe(3010);
  });

  it("parses browser-safe defaults", () => {
    expect(parsePublicEnv({}).WEB_PUBLIC_API_BASE_URL).toBe("http://localhost:3010");
  });
});
