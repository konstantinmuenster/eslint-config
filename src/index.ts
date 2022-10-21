import { JavascriptEslintConfig } from './javascript';
import { ReactTypescriptEslintConfig } from './react';
import { TypescriptEslintConfig } from './typescript';
import { NextEslintConfig } from './next';

export {
  JavascriptEslintConfig,
  TypescriptEslintConfig,
  ReactTypescriptEslintConfig,
  NextEslintConfig,
};

export default [
  ...JavascriptEslintConfig,
  ...TypescriptEslintConfig,
  ...ReactTypescriptEslintConfig,
];
