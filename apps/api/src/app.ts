import { corsOrigins } from "@sintacks/config";
import { errorResponseSchema } from "@sintacks/contracts";
import { createLogger } from "@sintacks/observability";
import compression from "compression";
import cors from "cors";
import express, { type ErrorRequestHandler, type Express } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { nanoid } from "nanoid";
import type { IncomingMessage } from "node:http";
import { pinoHttp } from "pino-http";
import swaggerUi from "swagger-ui-express";
import { env } from "./config/env.js";
import { openApiDocument } from "./modules/system/openapi.js";
import { systemRouter } from "./modules/system/routes.js";

export function createApp(): Express {
  const logger = createLogger("api", env.NODE_ENV === "development" ? "debug" : "info");
  const app = express();

  app.set("trust proxy", env.TRUST_PROXY);
  app.use(helmet());
  app.use(cors({ origin: corsOrigins(env), credentials: true }));
  app.use(express.json({ limit: "1mb" }));
  app.use(compression());
  app.use(
    rateLimit({ windowMs: 60_000, limit: 120, standardHeaders: "draft-8", legacyHeaders: false }),
  );
  app.use((req, res, next) => {
    const requestId = req.header("x-request-id") ?? nanoid();
    res.setHeader("x-request-id", requestId);
    next();
  });
  app.use(
    pinoHttp({
      logger,
      genReqId: (req: IncomingMessage) => req.headers["x-request-id"]?.toString() ?? nanoid(),
    }),
  );

  app.use("/api/v1", systemRouter);
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

  const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    void next;
    req.log.error({ error }, "request failed");
    const status = error instanceof SyntaxError ? 400 : 500;
    res.status(status).json(
      errorResponseSchema.parse({
        requestId: req.id,
        error: {
          code: status === 400 ? "BAD_REQUEST" : "INTERNAL_ERROR",
          message: "Request failed",
        },
      }),
    );
  };
  app.use(errorHandler);

  return app;
}
