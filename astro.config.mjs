import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
// import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    // adapter: cloudflare(),
    adapter: vercel(),
});
