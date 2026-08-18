import { z } from "zod";

export const authEnvSchema = z.object({
  BETTER_AUTH_SECRET: z.string().min(16),
  BETTER_AUTH_URL: z.string().url(),
});

export type AuthEnv = z.infer<typeof authEnvSchema>;

export function parseAuthEnv(input: Record<string, string | undefined>): AuthEnv {
  return authEnvSchema.parse(input);
}

export const authStageStatus =
  "Better Auth package boundary exists; login and session workflows are deferred to the authentication stage.";
