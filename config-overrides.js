const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    // usual webpack plugin
    addDecoratorsLegacy(),
    addWebpackAlias({
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      enums: path.resolve(__dirname, 'src/enums/'),
      store: path.resolve(__dirname, 'src/store/'),
    })
  ),
};
