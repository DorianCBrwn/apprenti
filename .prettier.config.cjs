module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  filepath: undefined,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  parser: undefined,
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  rangeEnd: Infinity,
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: true,
  vueIndentScriptAndStyle: false,
  tailwindConfig: "./styles/tailwind.config.js",
  plugins: ["prettier-plugin-tailwindcss"],
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

// {
// 	"useTabs": true,
// 	"singleQuote": true,
// 	"trailingComma": "none",
// 	"printWidth": 100,
// 	"plugins": ["prettier-plugin-tailwindcss"],
// 	"pluginSearchDirs": ["."],
// 	"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
// }