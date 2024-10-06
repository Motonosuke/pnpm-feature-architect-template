import * as path from "path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setUp.ts"],
    includeSource: ["src/**/*.spec.{js,ts,jsx,tsx}"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    env: dotenv.config({ path: ".env.development" }).parsed,
  },
});
