import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";
import { handleChatRequest, handleContactRequest } from "./src/server/api";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    devApiMiddleware(),
  ].filter(Boolean) as Plugin[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

function devApiMiddleware(): Plugin {
  return {
    name: "cc-dev-api",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end();
          return;
        }
        const buffers: Buffer[] = [];
        await new Promise<void>((resolve) => {
          req.on("data", (c) => buffers.push(Buffer.from(c)));
          req.on("end", () => resolve());
        });
        const body = Buffer.concat(buffers).toString("utf8");
        const reply = await handleChatRequest(new Request("/api/chat", { method: "POST", body }));
        res.statusCode = reply.status;
        const text = await reply.text();
        res.setHeader("Content-Type", "application/json");
        res.end(text);
      });
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end();
          return;
        }
        const buffers: Buffer[] = [];
        await new Promise<void>((resolve) => {
          req.on("data", (c) => buffers.push(Buffer.from(c)));
          req.on("end", () => resolve());
        });
        const body = Buffer.concat(buffers).toString("utf8");
        const reply = await handleContactRequest(new Request("/api/contact", { method: "POST", body }));
        res.statusCode = reply.status;
        const text = await reply.text();
        res.setHeader("Content-Type", "application/json");
        res.end(text);
      });
    },
  };
}
