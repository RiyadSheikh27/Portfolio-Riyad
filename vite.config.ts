import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { sendContactEmail } from "./lib/sendContactEmail.mjs";

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });

const contactEmailPlugin = (env) => ({
  name: "dev-contact-email",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const url = req.url?.split("?")[0];

      if (url !== "/.netlify/functions/send-email") {
        next();
        return;
      }

      if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.end();
        return;
      }

      if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Method not allowed" }));
        return;
      }

      try {
        const body = await readBody(req);
        const payload = JSON.parse(body);
        await sendContactEmail(payload, env);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ success: true }));
      } catch (error) {
        console.error("dev send-email error:", error);

        const statusCode =
          error.message === "All fields are required" ? 400 : 500;

        res.statusCode = statusCode;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            error: error.message || "Failed to send message",
          })
        );
      }
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), contactEmailPlugin(env)],
  };
});
