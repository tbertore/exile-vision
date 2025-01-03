import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  tseslint.configs.recommendedTypeChecked,
  {
    ignores: ['node_modules', 'dist', 'eslint.config.mjs'],
    files: ['src/**/*.ts'],
    plugins: {},
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {},
  },
  eslintConfigPrettier,
)
