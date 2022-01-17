module.exports = {
  runtimeCompiler: true,
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