const path = require("path");
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 5 versions", "safari >= 7"],
        },
      },
    ],
    [
      "@babel/preset-react"
    ],
  ],
  plugins: [
    "@babel/plugin-transform-destructuring",
    [
      "module-resolver",
      {
        alias: {
          "lib/src": path.resolve(__dirname, "packages/lib/src"),
        },
      },
    ],
  ],
};
