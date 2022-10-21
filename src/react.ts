import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

import { TypescriptEslintConfig } from './typescript';

export const ReactTypescriptEslintConfig = [
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
