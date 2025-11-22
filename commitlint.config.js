export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'ci', 'build'],
    ],
    'header-max-length': [2, 'always', Infinity],
    'body-max-length': [2, 'always', Infinity],
    'footer-max-length': [2, 'always', Infinity],
  },
}
