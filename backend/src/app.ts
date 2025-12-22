import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { routes } from "./routes/index.ts";

export const app = new Hono();

// CORS configuration
app.use(
  "*",
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // Allow cookies
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Set-Cookie"],
    maxAge: 86400, // 24 hours
  })
);

app.use("*", logger());
app.route("/api", routes);
