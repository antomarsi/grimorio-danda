const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#EB6B6F",
      "@layout-header-background": "#7C3F58",
      "@menu-dark-bg": "#EB6B6F",
      "@menu-dark-submenu-bg": "#7C3F58",
      "@menu-dark-arrow-color": "#FFF6D3",
      "@menu-dark-highlight-color": "#FFF6D3",
      "@background-color": "#FFF6D3",
      "@layout-body-background": "#FFF6D3"
    }
  })
);
