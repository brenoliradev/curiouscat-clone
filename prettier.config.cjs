/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'none',
  tabWidth: 2,
  bracketSpacing: true,
  semi: false
}

module.exports = config
