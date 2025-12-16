import postgres from "postgres";
import { ENV } from "./env.ts";

// Disable prepared statements for Neon pooler compatibility
export let sql = postgres(ENV.DATABASE_URL, {
  prepare: false,
});

// Initialize users table if not exists
export async function initDB() {
  try {
    // Drop existing table and recreate with correct schema
    await sql`DROP TABLE IF EXISTS users CASCADE`;

    await sql`
      CREATE TABLE users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log("✅ Database initialized");
  } catch (error) {
    console.error("❌ DB init error:", error);
  }
}
