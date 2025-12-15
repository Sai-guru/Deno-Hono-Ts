import { Hono } from "hono";
import { authRoutes } from "./auth.routes.ts";
import { healthRoute } from "./health.ts";

export const routes = new Hono();

routes.route("/health", healthRoute);
routes.route("/auth", authRoutes);
