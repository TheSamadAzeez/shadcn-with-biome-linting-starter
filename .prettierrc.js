/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  endOfLine: 'lf',
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false,
  bracketSameLine: false,
  tailwindStylesheet: './src/app/globals.css',
}
