import { describe, expect, it } from "vitest";
import { healthResponseSchema } from "./index.js";

describe("healthResponseSchema", () => {
  it("accepts the liveness contract", () => {
    expect(
      healthResponseSchema.parse({
        status: "ok",
        service: "api",
        uptimeSeconds: 1,
        timestamp: new Date().toISOString(),
      }),
    ).toMatchObject({ status: "ok" });
  });
});
