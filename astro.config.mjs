import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://visitlink.net',
  output: 'server',
  adapter: cloudflare()
});