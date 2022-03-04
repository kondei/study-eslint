module.exports = {
  rules: {
    'no-mutating-methods': require('./src/rules/no-mutating-methods'),
    'require-enzyme-generic': require('./src/rules/require-enzyme-generic'),
  },
  configs: {
    selectors: require('./src/configs/selectors'),
  },
};
