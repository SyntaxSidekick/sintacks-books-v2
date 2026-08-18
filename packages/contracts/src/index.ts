import { z } from "zod";

export const requestIdSchema = z.string().min(1);

export const errorResponseSchema = z.object({
  requestId: requestIdSchema,
  error: z.object({
    code: z.string().min(1),
    message: z.string().min(1),
  }),
});

export const healthResponseSchema = z.object({
  status: z.literal("ok"),
  service: z.string(),
  uptimeSeconds: z.number().nonnegative(),
  timestamp: z.string().datetime(),
});

export const dependencyStatusSchema = z.object({
  name: z.enum(["database", "redis", "storage", "email"]),
  status: z.enum(["ok", "unavailable", "skipped"]),
});

export const readinessResponseSchema = z.object({
  status: z.enum(["ready", "not_ready"]),
  dependencies: z.array(dependencyStatusSchema),
  timestamp: z.string().datetime(),
});

export const versionResponseSchema = z.object({
  name: z.string(),
  version: z.string(),
  environment: z.string(),
});

export const paginationQuerySchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(25),
});

export type ErrorResponse = z.infer<typeof errorResponseSchema>;
export type HealthResponse = z.infer<typeof healthResponseSchema>;
export type ReadinessResponse = z.infer<typeof readinessResponseSchema>;
export type VersionResponse = z.infer<typeof versionResponseSchema>;
