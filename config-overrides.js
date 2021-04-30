const { override, addDecoratorsLegacy } = require('customize-cra');

module.exports = {
  webpack: override(
    // usual webpack plugin
    addDecoratorsLegacy(),
    config => {
      config.module.rules = [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            publicPath: '/assets',
          },
        },
      ];
      return config;
    }
  ),
};
