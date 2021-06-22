import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  const currentGlobal = global as NodeJS.Global & { prisma?: PrismaClient }

  if (!currentGlobal.prisma) {
    currentGlobal.prisma = new PrismaClient()
  }

  prisma = currentGlobal.prisma
}

export default prisma
