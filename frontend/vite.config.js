import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    // 👇 LA LÍNEA QUE RESUELVE TU ERROR
    base: "./",

    define: {
      "import.meta.env.VITE_ENVIRONMENT": JSON.stringify(env.VITE_ENVIRONMENT),
    },
  };
});
