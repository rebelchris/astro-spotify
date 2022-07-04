import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
// import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    adapter: vercel()
    // adapter: cloudflare()
});
