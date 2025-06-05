import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" });

export const dbConnection = drizzle(process.env.DATABASE_URL as string);
