import type { Linter } from 'eslint';
import '@rushstack/eslint-patch/modern-module-resolution';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.js'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
  ],
};

export = config;
