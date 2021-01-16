module.exports = {
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  overrides: [
    {
      files: [
        "*.ts",
        "*.tsx",
        "*.d.ts"
      ],
      parserOptions: {
        project: "./tsconfig.json"
      },
    },
  ],
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "no-multi-spaces": ["error"],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    // The following rules do not have equivalent checks in TypeScript, so we recommend that you only run them at CI/push time, to lessen the local performance burden.
    "import/no-named-as-default": "off",
    "import/no-cycle": "off",
    "import/no-unused-modules": "off",
    "import/no-deprecated": "off",
  }
};
  