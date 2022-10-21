import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

import { TypescriptEslintConfig } from './typescript';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export const ReactTypescriptEslintConfig = [
  compat.extends(
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ),
  ...TypescriptEslintConfig,
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },
  },
];
