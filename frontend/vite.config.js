import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "import.meta.env.VITE_ENV": JSON.stringify(env.VITE_ENV),
      "import.meta.env.VITE_COLOR": JSON.stringify(env.VITE_COLOR),
    },
  };
});
