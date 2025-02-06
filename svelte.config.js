import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      pages: 'build', // The folder to store the built pages
      assets: 'build', // The folder for static assets like images, fonts, etc.
      fallback: 'index.html', // Ensures correct routing on GitHub Pages (SPA fallback)
    }),
    paths: {
      base: dev ? "" : "/swolf", // Fixes navigation issues in GitHub Pages
    },
    appDir: "app", // Prevents asset loading issues; only necessary if you see problems
    prerender: {
      handleHttpError: "warn", // Prevents 404 errors from stopping the build
      entries: ["*"], // Ensures all pages are prerendered
    },
  }
};
