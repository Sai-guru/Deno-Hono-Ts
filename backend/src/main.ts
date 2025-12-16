import { app } from "./app.ts";
import { initDB } from "./config/db.ts";

 await initDB();

Deno.serve(app.fetch);
