module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  extends: ["plugin:vue/vue3-recommended", "./.eslintrc-auto-import.json"],
  rules: {
    "no-explicit-any": "off",
    "ban-types": "off",
  },
};
