import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// 1. Setup the Postgres connection pool
const connectionString = Bun.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });

// 2. Initialize the adapter
const adapter = new PrismaPg(pool);

// 3. Create the Prisma instance using the adapter
// This allows Prisma to use Bun's native networking stack
const prisma = new PrismaClient({ adapter });

export default prisma;
