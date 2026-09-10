import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arumatacosmn.com',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
