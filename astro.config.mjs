// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://esmeray6.github.io',
	output: "static",
	integrations: [mdx(), sitemap()],
	vite:
		{ plugins: [tailwindcss()] }
});
