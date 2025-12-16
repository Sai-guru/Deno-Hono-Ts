import { Hono } from "hono";
import { authRoutes } from "./auth.routes.ts";

export const routes = new Hono();

routes.route("/auth", authRoutes);
