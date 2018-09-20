const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-plugin-transpile-modules');
const util = require('util');
const path = require('path');

/**
 * Stolen from https://stackoverflow.com/questions/10776600/testing-for-equality-of-regular-expressions
 */
function regexEqual(x, y) {
  return (x instanceof RegExp) && (y instanceof RegExp) &&
    (x.source === y.source) && (x.global === y.global) &&
    (x.ignoreCase === y.ignoreCase) && (x.multiline === y.multiline);
}

const withTest = (nextConfig = {}) => {

  const { transpileModules = [] } = nextConfig;
  const includes = transpileModules.map(module => (new RegExp(`${module}(?!.*node_modules)`)))
  const excludes = transpileModules.map(module => (new RegExp(`node_modules(?!\/${module}(?!.*node_modules))`)))

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
/*       if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 7.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      // Avoid Webpack to resolve transpiled modules path to their real path
      config.resolve.symlinks = false

      config.externals = config.externals.map(external => {
        if (typeof external !== 'function') return external
        return (ctx, req, cb) =>
          (Boolean(includes.find(include => include.test(req))) ? cb() : external(ctx, req, cb))
      })

      config.module.rules.push({
        test: /\.+(ts|tsx|LOL)$/, // /\.+(js|jsx|ts|tsx|LOL)$/
        loader: options.defaultLoaders.babel,
        // include: includes
        include: path.resolve(__dirname, 'node_modules/shared')
      }) */

      config.resolve.symlinks = false

      config.module.rules.push({
        test: /\.+(js|jsx|ts|tsx|LOL)$/,
        loader: options.defaultLoaders.babel,
        include: [path.join(__dirname, 'node_modules', 'shared')],
      });

      console.log(util.inspect(config.module.rules, { showHidden: false, depth: null }))
      console.log("=============")

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },

    webpackDevMiddleware(config) {
      // Replace /node_modules/ by the new exclude RegExp
      const ignored = config.watchOptions.ignored.filter(
        regexp => !regexEqual(regexp, /node_modules/)
      ).concat(excludes);

      config.watchOptions.ignored = ignored;
      return config
    }
  })
};

module.exports = withTypescript(
  withTest({
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
