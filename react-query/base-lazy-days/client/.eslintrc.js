module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
