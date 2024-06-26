import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: "./.cert/private.key",
      cert: "./.cert/certificate.crt",
    },
  },
  plugins: [react()],
});
