import { defineConfig, loadEnv } from "vite"; // 👈 добавляем loadEnv
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@app": path.resolve(__dirname, "./src/app"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@shared": path.resolve(__dirname, "./src/shared"),
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION),
      __APP_NAME__: JSON.stringify(env.VITE_APP_NAME),
    },
  };
});
