/**
 *
 * IDE安装的prettier插件应该可以读取此配置，并开启保存时自动格式化，以便在 git commit之前，暴露编码风格问题。（如果无法读取，请保证IDE的插件配置和此处最大程度一致。）
 * 配置项均参照默认设置 https://prettier.io/docs/en/options.html
 */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid"
};
