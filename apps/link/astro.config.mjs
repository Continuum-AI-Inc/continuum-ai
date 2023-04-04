import {
  defineConfig
} from "astro/config";

// https://astro.build/config
import node from "@astrojs/node";

export default defineConfig({
  outDir: "../../dist/apps/link",
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
	server: {
		port: 3002
	}
});
