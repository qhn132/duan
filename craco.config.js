const CracoLessPlugin = require('craco-less');

console.log('==============================================');
console.log('🚀 ~ Run Craco to config theme of Ant-Design');
console.log('==============================================');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#18bcf3' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
