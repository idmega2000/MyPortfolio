const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css');

module.exports = withImages(
  withCSS({
    webpack(config) {
      config.resolve.alias['components'] = path.join(__dirname, 'src/components');
      config.resolve.alias['constants'] = path.join(__dirname, 'src/constants');
      config.resolve.alias['public'] = path.join(__dirname, 'public');
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });
      return config;
    },
  }),
);
