import {
  defineConfig
} from 'astro/config';
import svelte from "@astrojs/svelte";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/main',
  integrations: [svelte(), tailwind()],
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  server: {
    port: 3000
  }
});
