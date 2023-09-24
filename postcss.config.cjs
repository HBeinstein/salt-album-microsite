/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
    require("postcss-nested"),
  ],
};

module.exports = config;
