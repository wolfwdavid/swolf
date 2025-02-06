import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      pages: 'build', // Folder for the built pages
      assets: 'build', // Folder for static assets like images, fonts, etc.
      fallback: 'index.html', // Ensures correct routing on GitHub Pages (SPA fallback)
    }),
    paths: {
      base: dev ? "" : "/swolf", // Sets the base path for GitHub Pages
    },
    // appDir: "app", // This is usually optional, only necessary if you're facing issues
    prerender: {
      handleHttpError: "warn", // Prevents build failures due to 404s
      entries: ["*"], // Prerenders all routes
    },
  }
};
