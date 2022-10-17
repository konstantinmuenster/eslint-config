import { Linter } from 'eslint';

const config: Linter.Config = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    './index.ts',
  ],
};

export = config;
