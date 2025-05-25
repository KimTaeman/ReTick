import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";

const app = new Hono();
export const db = new PrismaClient();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

async function startServer() {
  try {
    // Test DB connection
    await db.$connect();
    console.log("✅ Connected to the database");

    // Start the server after DB is connected
    serve(
      {
        fetch: app.fetch,
        port: 3000,
      },
      (info) => {
        console.log(`🚀 Server is running on http://localhost:${info.port}`);
      }
    );
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err);
    process.exit(1);
  }
}

startServer();
