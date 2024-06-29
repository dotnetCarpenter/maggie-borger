import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://maggie-borger.com',
    build: {
        inlineStylesheets: 'never'
    }
});
