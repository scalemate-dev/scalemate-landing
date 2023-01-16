const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  runtimeCompiler: true,
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;

    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/', '/automate', '/book-a-demo', '/unite'],
          {
            // options
          }
        ),
      ]
    }
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/global.scss";
          @import "@/assets/variables.scss";
        `
      }
    },
  },
}