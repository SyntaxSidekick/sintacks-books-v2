import { HeadBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { z } from "zod";

export const storageKeySchema = z
  .string()
  .min(1)
  .max(1024)
  .regex(/^[A-Za-z0-9][A-Za-z0-9._/-]*$/);

export interface StorageConfig {
  endpoint: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  forcePathStyle: boolean;
}

export function createStorageClient(config: StorageConfig): S3Client {
  return new S3Client({
    endpoint: config.endpoint,
    region: config.region,
    forcePathStyle: config.forcePathStyle,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });
}

export async function checkStorageBucket(client: S3Client, bucket: string): Promise<boolean> {
  await client.send(new HeadBucketCommand({ Bucket: bucket }));
  return true;
}
