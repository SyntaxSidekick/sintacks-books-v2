import { healthResponseSchema, readinessResponseSchema } from "@sintacks/contracts";
import { env } from "../env.js";

async function getJson(path: string): Promise<unknown> {
  const response = await fetch(`${env.WEB_PUBLIC_API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
  return response.json();
}

export async function getHealth() {
  return healthResponseSchema.parse(await getJson("/api/v1/health"));
}

export async function getReadiness() {
  return readinessResponseSchema.parse(await getJson("/api/v1/ready"));
}
