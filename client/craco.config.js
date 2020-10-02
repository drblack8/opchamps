const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                '@body-background':"#202c3b",
                '@popover-background': '#164c7e'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
