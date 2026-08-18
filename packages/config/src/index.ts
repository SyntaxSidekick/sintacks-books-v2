import { z } from "zod";

export const ports = {
  api: 3010,
  web: 5185,
  storybook: 6010,
  postgres: 5440,
  redis: 6390,
  minioApi: 9010,
  minioConsole: 9011,
  mailpitSmtp: 1030,
  mailpitWeb: 8030,
} as const;

const boolish = z
  .enum(["true", "false"])
  .optional()
  .transform((value) => value === "true");

export const publicEnvSchema = z.object({
  APP_NAME: z.string().default("Sintacks Books"),
  APP_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_VERSION: z.string().default("0.1.0"),
  WEB_PUBLIC_API_BASE_URL: z.string().url().default("http://localhost:3010"),
});

export const serverEnvSchema = publicEnvSchema.extend({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  API_PORT: z.coerce.number().int().positive().default(ports.api),
  API_CORS_ORIGINS: z.string().default("http://localhost:5185,http://localhost:6010"),
  API_PUBLIC_URL: z.string().url().default("http://localhost:3010"),
  WEB_PUBLIC_URL: z.string().url().default("http://localhost:5185"),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  S3_ENDPOINT: z.string().url(),
  S3_REGION: z.string().default("us-east-1"),
  S3_ACCESS_KEY_ID: z.string().min(1),
  S3_SECRET_ACCESS_KEY: z.string().min(1),
  S3_BUCKET: z.string().min(3),
  S3_FORCE_PATH_STYLE: boolish,
  SMTP_HOST: z.string().default("localhost"),
  SMTP_PORT: z.coerce.number().int().positive().default(1030),
  EMAIL_FROM: z.string().email().default("development@sintacks.invalid"),
  BETTER_AUTH_SECRET: z.string().min(16),
  BETTER_AUTH_URL: z.string().url(),
  SENTRY_DSN: z.string().optional(),
  TRUST_PROXY: boolish,
  SERVE_WEB_STATIC: boolish,
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;
export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function parsePublicEnv(input: Record<string, string | undefined>): PublicEnv {
  return publicEnvSchema.parse(input);
}

export function parseServerEnv(input: Record<string, string | undefined>): ServerEnv {
  return serverEnvSchema.parse(input);
}

export function corsOrigins(env: Pick<ServerEnv, "API_CORS_ORIGINS">): string[] {
  return env.API_CORS_ORIGINS.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}
