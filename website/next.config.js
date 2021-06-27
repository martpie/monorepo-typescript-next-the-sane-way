const withTM = require('next-transpile-modules')(['shared']);

module.exports = withTM({
    webpack5: true,
});
