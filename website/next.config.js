const withTM = require('next-transpile-modules')(['shared'], {
  debug: true,
});

module.exports = withTM({
  future: {
    webpack5: true,
  },
});
