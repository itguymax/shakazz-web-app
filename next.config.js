const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const path = require("path");

module.exports = () => withFonts(
  withCSS(
    withImages(
      withSass({
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
            },
          });
        config.module.rules.push({
        test: /\.(woff(2)?|ttf|eot|svg|jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            // options:{
            //   outputPath: 'static/webfonts/',
            //   publicPath: '../webfonts/',
            // // optional, just to prettify file names
            //   name: '[name].[ext]',
            // }
          },
        ],
      });
      config.resolve.modules.push(path.resolve("./"));
      return config;
        },
      })
    )
  )
);
