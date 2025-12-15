import { Hono } from "hono";
import { authController } from "../controllers/auth.controller.ts";
import type { JWTPayload } from "jose";

type Variables = {
  user: JWTPayload;
};

export const authRoutes = new Hono<{ Variables: Variables }>();

// Public routes
authRoutes.route("/", authController); // mounts /register and /login
