import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['next/core-web-vitals', './react.js'],
};

export = config;
