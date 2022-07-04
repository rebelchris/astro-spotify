import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import cloudflare from '@astrojs/cloudflare';
import worker, { cloudflare } from 'astro-service-worker/adapter';

// https://astro.build/config
export default defineConfig({
    adapter: worker(cloudflare)
});
