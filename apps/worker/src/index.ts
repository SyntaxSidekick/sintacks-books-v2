import { parseServerEnv } from "@sintacks/config";
import { createLogger } from "@sintacks/observability";
import { Queue, Worker } from "bullmq";
import { Redis } from "ioredis";
import { queueNames } from "./queues.js";

const env = parseServerEnv(process.env);
const logger = createLogger("worker");
const connection = new Redis(env.REDIS_URL, { maxRetriesPerRequest: null });
const queue = new Queue(queueNames.infrastructureVerification, { connection });

const worker = new Worker(
  queueNames.infrastructureVerification,
  () => Promise.resolve({ status: "ok", checkedAt: new Date().toISOString() }),
  { connection },
);

worker.on("ready", () => logger.info("worker ready"));
worker.on("failed", (job, error) => logger.error({ jobId: job?.id, error }, "job failed"));

await queue.add("heartbeat", {}, { removeOnComplete: true, removeOnFail: true });

async function shutdown(signal: string): Promise<void> {
  logger.info({ signal }, "worker shutdown started");
  await Promise.allSettled([worker.close(), queue.close(), connection.quit()]);
  logger.info("worker shutdown complete");
}

process.on("SIGINT", () => void shutdown("SIGINT"));
process.on("SIGTERM", () => void shutdown("SIGTERM"));
