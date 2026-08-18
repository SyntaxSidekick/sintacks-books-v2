import { describe, expect, it } from "vitest";
import { queueNames } from "./queues.js";

describe("queue names", () => {
  it("uses a namespaced infrastructure queue", () => {
    expect(queueNames.infrastructureVerification).toMatch(/^sintacks\./);
  });
});
