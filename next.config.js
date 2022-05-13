/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-daisyui"]); // or whatever library giving trouble

module.exports = withTM({
  reactStrictMode: true,
});
