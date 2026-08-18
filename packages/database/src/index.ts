import prismaClientPackage from "@prisma/client";

const { PrismaClient } = prismaClientPackage;

type PrismaClientInstance = InstanceType<typeof PrismaClient>;

let prisma: PrismaClientInstance | undefined;

export function getPrismaClient(): PrismaClientInstance {
  prisma ??= new PrismaClient();
  return prisma;
}

export async function checkDatabaseConnection(
  client: PrismaClientInstance = getPrismaClient(),
): Promise<boolean> {
  await client.$queryRaw`SELECT 1`;
  return true;
}

export async function closeDatabaseConnection(): Promise<void> {
  if (prisma) {
    await prisma.$disconnect();
    prisma = undefined;
  }
}
