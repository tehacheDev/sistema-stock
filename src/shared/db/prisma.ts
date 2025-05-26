import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient();

export function getPrismaClient() {
  return prisma;
}

export async function disconnectPrisma() {
  await prisma.$disconnect();
}