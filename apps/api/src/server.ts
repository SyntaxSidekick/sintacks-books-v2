import { closeDatabaseConnection } from "@sintacks/database";
import { createLogger } from "@sintacks/observability";
import { createServer } from "node:http";
import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { closeRedis } from "./infrastructure/redis.js";

const logger = createLogger("api-server");
const server = createServer(createApp());

server.listen(env.API_PORT, () => {
  logger.info({ port: env.API_PORT }, "api listening");
});

function shutdown(signal: string): void {
  logger.info({ signal }, "api shutdown started");
  server.close(() => {
    void (async () => {
      closeRedis();
      await closeDatabaseConnection();
      logger.info("api shutdown complete");
    })();
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
