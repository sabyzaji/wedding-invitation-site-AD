import path from "node:path";
import { fileURLToPath } from "node:url";

import base44 from "@base44/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const hasBase44Proxy = Boolean(env.VITE_BASE44_APP_BASE_URL);

  return {
    plugins: [
      react(),
      ...(hasBase44Proxy
        ? [
            base44({
              legacySDKImports: env.BASE44_LEGACY_SDK_IMPORTS === "true",
              hmrNotifier: false,
              navigationNotifier: false,
              analyticsTracker: false,
              visualEditAgent: false,
            }),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "127.0.0.1",
      strictPort: true,
    },
  };
});
