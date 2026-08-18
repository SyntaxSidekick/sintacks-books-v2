import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app.js";

describe("api app", () => {
  it("serves liveness", async () => {
    const response = await request(createApp()).get("/api/v1/health").expect(200);
    expect(response.body.status).toBe("ok");
  });
});
