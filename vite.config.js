import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      // 절대경로 추가
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // 로컬호스트 변경
    host: "localhost",
    port: 3000,
    proxy: {
      // 프록시 설정 추가
      "/sensor-data": {
        target: "http://3.39.219.177:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sensor-data/, "/sensor-data"),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
