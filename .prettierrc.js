module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],

  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,

  // prettier-plugin-sort-imports
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
}
