import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

import { ReactTypescriptEslintConfig } from './react';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export const NextEslintConfig = [
  compat.extends('next/core-web-vitals'),
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
