import { load } from "@std/dotenv";

// Load .env file
await load({ export: true });

export const ENV = {
  PORT: Number(Deno.env.get("PORT") ?? 8000),
  JWT_SECRET: Deno.env.get("JWT_SECRET") ?? "our-secret",
  DATABASE_URL: Deno.env.get("DATABASE_URL") ?? "",
};
