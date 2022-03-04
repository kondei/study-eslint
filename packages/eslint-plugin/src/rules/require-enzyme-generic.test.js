const ESLintUtils = require('@typescript-eslint/utils').ESLintUtils;
const rule = require('./require-enzyme-generic');

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('my-rule', rule, {
  valid: [
    {
      code: 'var foo = true',
      options: [{ allowFoo: true }],
    },
  ],

  invalid: [
    {
      code: 'var invalidVariable = true',
      errors: [{ message: 'Unexpected invalid variable.' }],
    },
    {
      code: 'var invalidVariable = true',
      errors: [{ message: /^Unexpected.+variable/ }],
    },
  ],
});
