import globals from 'globals';

import { ReactTypescriptEslintConfig } from './react';

export const NextEslintConfig = [
  ...ReactTypescriptEslintConfig,
  {
    files: ['**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
