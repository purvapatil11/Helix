import { handlers } from "@/auth" // Referring to the auth.ts we just created
import { PrismaClientValidationError } from "@/src/generated/prisma/internal/prismaNamespace"
export const { GET, POST } = handlers