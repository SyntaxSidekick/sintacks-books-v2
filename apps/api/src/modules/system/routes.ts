import { checkDatabaseConnection } from "@sintacks/database";
import { checkEmailTransport } from "@sintacks/email";
import { createStorageClient, checkStorageBucket } from "@sintacks/storage";
import {
  healthResponseSchema,
  readinessResponseSchema,
  versionResponseSchema,
  type ReadinessResponse,
} from "@sintacks/contracts";
import { Router, type Router as ExpressRouter } from "express";
import { env } from "../../config/env.js";
import { checkRedis } from "../../infrastructure/redis.js";

export const systemRouter: ExpressRouter = Router();

systemRouter.get("/health", (_req, res) => {
  res.json(
    healthResponseSchema.parse({
      status: "ok",
      service: "api",
      uptimeSeconds: process.uptime(),
      timestamp: new Date().toISOString(),
    }),
  );
});

systemRouter.get("/ready", async (_req, res) => {
  const storage = createStorageClient({
    endpoint: env.S3_ENDPOINT,
    region: env.S3_REGION,
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.S3_SECRET_ACCESS_KEY,
    bucket: env.S3_BUCKET,
    forcePathStyle: env.S3_FORCE_PATH_STYLE,
  });

  const checks = await Promise.allSettled([
    checkDatabaseConnection(),
    checkRedis(env.REDIS_URL),
    checkStorageBucket(storage, env.S3_BUCKET),
    checkEmailTransport({ host: env.SMTP_HOST, port: env.SMTP_PORT, from: env.EMAIL_FROM }),
  ]);

  const names = ["database", "redis", "storage", "email"] as const;
  const dependencies = checks.map((check, index) => ({
    name: names[index],
    status: check.status === "fulfilled" ? "ok" : "unavailable",
  }));
  const ready = dependencies.every((dependency) => dependency.status === "ok");
  const body: ReadinessResponse = readinessResponseSchema.parse({
    status: ready ? "ready" : "not_ready",
    dependencies,
    timestamp: new Date().toISOString(),
  });

  res.status(ready ? 200 : 503).json(body);
});

systemRouter.get("/version", (_req, res) => {
  res.json(
    versionResponseSchema.parse({
      name: env.APP_NAME,
      version: env.APP_VERSION,
      environment: env.APP_ENV,
    }),
  );
});
