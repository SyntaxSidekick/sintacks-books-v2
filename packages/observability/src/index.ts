import pino, { type LoggerOptions } from "pino";

const redactedPaths = [
  "req.headers.authorization",
  "req.headers.cookie",
  "*.password",
  "*.token",
  "*.secret",
  "*.apiKey",
  "*.DATABASE_URL",
  "*.S3_SECRET_ACCESS_KEY",
];

export function createLogger(service: string, level = "info") {
  const options: LoggerOptions = {
    name: service,
    level,
    redact: { paths: redactedPaths, censor: "[redacted]" },
    base: { service },
  };

  return pino(options);
}

export function sentryEnabled(dsn?: string): boolean {
  return Boolean(dsn);
}
