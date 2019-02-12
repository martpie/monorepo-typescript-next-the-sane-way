const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-plugin-transpile-modules');

module.exports = withPlugins([
  withTM({
    transpileModules: ['shared'],
  }),
  withTypescript,
], {
  webpack(config, options) {
    if (options.isServer && options.dev) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          tsconfig: '../tsconfig.json',
          tslint: '../tslint.json',
        }),
      );
    }

    return config;
  },
});
