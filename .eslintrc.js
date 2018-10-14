module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {},
  parserOptions: {
    parser: "babel-eslint"
  }
};
