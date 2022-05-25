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
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
  },
};
