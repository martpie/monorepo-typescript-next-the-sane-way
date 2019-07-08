const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['shared'],
  webpack(config, options) {
    if (options.isServer && options.dev) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          tsconfig: './tsconfig.json'
        })
      );
    }

    return config;
  }
});
