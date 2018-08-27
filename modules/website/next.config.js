const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-plugin-transpile-modules');

module.exports = withTypescript(
  withTM({
    transpileModules: ['shared'],
    webpack(config, options) {
      if (options.isServer && options.dev) {
        const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

        config.plugins.push(
          new ForkTsCheckerWebpackPlugin({
            tsconfig: '../../tsconfig.json',
            tslint: '../../tslint.json',
          }),
        );
      }

      return config;
    },
  })
);
