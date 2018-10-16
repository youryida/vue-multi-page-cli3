/**
 * prettier.config.js or .prettierrc.js
 *
 * IDE安装的prettier插件应该可以读取此配置，并开启保存时自动格式化，以便在 git commit之前，暴露编码风格问题。（如果无法读取，请保证IDE的插件配置和此处最大程度一致。）
 *
 */
module.exports = {
  singleQuote: false,
  trailingComma: "none",
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  semi: true
};
