// deno-lint-ignore-file no-unused-vars
import { jwtVerify } from "jose";
import { ENV } from "../config/env.ts";
import { JWT } from "../utils/jwt.ts";
import { sql } from "../config/db.ts";
import { hashPassword, verifyPassword } from "../utils/hash.ts";
import postgres from "postgres";  //just making sure postgres is imported for types

// @Register
export async function register(email: string, password: string) {
  try {
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email}
    `;
    if (existingUser.length > 0) throw new Error("User already exists");

    
    const hashedPass = await hashPassword(password);

    const result : postgres.RowList<postgres.Row[]> = await sql`
      INSERT INTO users (email, password) 
      VALUES (${email}, ${hashedPass})
      RETURNING id, email
    `;

    return ({message:"User registered successfully", user: email});
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error("Registration failed");
  }
}

// @Login
export async function login(email: string, password: string) {
  try {
    const result = await sql`
      SELECT id, password FROM users WHERE email = ${email}
    `;

    if (result.length === 0) throw new Error("Invalid credentials");

    const user = result[0];
    const validPass = await verifyPassword(password, user.password);
    if (!validPass) throw new Error("Invalid credentials");

    const token = await JWT.sign({ id: user.id, email }, "2h");

     return ({message:"User logged in successfully", user: email, token}); 
  // deno-lint-ignore no-unused-vars
  } catch (error) {
    throw new Error("Invalid credentials");
  }
}

// @VerifyToken
export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(ENV.JWT_SECRET)
    );
    return { valid: true, payload };
  } catch (_) {
    return { valid: false };
  }
}
