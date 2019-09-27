module.exports = {
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier", "react", "testcafe", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "off",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
    "max-len": [2, 80, 2],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "function-paren-newline": 0,
    "import/prefer-default-export": 0,
    "no-trailing-spaces": ["error", { skipBlankLines: true }],
    "arrow-parens": "off",
    "no-use-before-define": ["error", { "functions": false, "classes": false }],
    "no-restricted-syntax": 0,


    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        "ignores": ["modules"]
      }
    ],


    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0
  }
};