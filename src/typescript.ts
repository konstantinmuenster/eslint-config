import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export const TypescriptEslintConfig = [
  compat.config({
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
  }),
];
