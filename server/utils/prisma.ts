import { PrismaClient } from "@prisma/client";

const prisma = global.prismadb || new PrismaClient({
  log: ['query'],
  errorFormat: 'minimal',
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

if (process.env.NODE_ENV === "production") global.prismadb = prisma;

export default prisma;
