import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the Vercel adapter for deployment
		adapter: adapter(),

		// Additional configuration (optional)
		prerender: {
			// Change if you need to prerender specific pages
			entries: ['*']
		}
	}
};

export default config;
