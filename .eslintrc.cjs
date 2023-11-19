/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  ignorePatterns: [
    'build/',  // Exclude the entire "build" directory
    'dist/',   // Exclude the entire "dist" directory, add more as needed
  ],

};
