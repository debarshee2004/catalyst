import { db } from "@/database";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 16,
    maxPasswordLength: 32,
    autoSignIn: true,
  },
  account: {
    accountLinking: {
      enabled: true,
      autoLink: true,
    },
  },
  socialProviders: {
    google: {
      clientId: (process.env.GOOGLE_CLIENT_ID as string) || "",
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET as string) || "",
    },
    github: {
      clientId: (process.env.GITHUB_CLIENT_ID as string) || "",
      clientSecret: (process.env.GITHUB_CLIENT_SECRET as string) || "",
    },
  },
});
