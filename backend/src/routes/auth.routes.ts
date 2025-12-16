import { Hono } from "hono";
import { loginController,registerController } from "../controllers/auth.controller.ts";
import type { JWTPayload } from "jose";

type Variables = {
  user: JWTPayload;
};

export const authRoutes = new Hono<{ Variables: Variables }>();

// Public routes
authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
