import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'node_modules', 'eslint.config.js'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: tsParser,
    globals: {
      ...globals.browser,
      ...globals.es2020,
      ...globals.node,
    },
  },

  plugins: {
    '@typescript-eslint': tseslint,
    prettier: prettierPlugin,
  },

  rules: {
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    ...prettierPlugin.configs.recommended.rules,
    ...eslintConfigPrettier.rules,

    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'prefer-const': 'error',
    'no-unused-vars': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1, -1, 2, -2],
        ignoreDefaultValues: true,
        ignoreArrayIndexes: true,
      },
    ],
    curly: ['error', 'all'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
  },
};
