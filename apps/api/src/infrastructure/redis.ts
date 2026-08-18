import { Redis } from "ioredis";

let redis: Redis | undefined;

export function getRedis(url: string): Redis {
  redis ??= new Redis(url, { lazyConnect: true, maxRetriesPerRequest: 2 });
  return redis;
}

export async function checkRedis(url: string): Promise<boolean> {
  const client = getRedis(url);
  if (client.status === "wait") {
    await client.connect();
  }
  await client.ping();
  return true;
}

export function closeRedis(): void {
  if (redis) {
    redis.disconnect();
    redis = undefined;
  }
}
