import { app } from "./app.ts";
import { initDB } from "./config/db.ts";

 await initDB().then(()=>{
    console.log("Database connected successfully.");
 }).catch((error)=>{
    console.error("Failed to connect the database:", error);
 });

Deno.serve(app.fetch);
