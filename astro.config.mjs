// @ts-check

import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import checker from "vite-plugin-checker";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],

	vite: {
		plugins: [
			checker({
				typescript: true,
			}),
		],
	},
});
