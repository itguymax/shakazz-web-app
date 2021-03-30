const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const path = require("path");

 
module.exports = withFonts(
  withCSS(
    withImages(
      withSass({
       webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
            },
          });
      config.module.rules.push({
        test: /\.(woff(2)?|ttf|eot|svg|jpg|png|ico)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options:{
            // optional, just to prettify file names
             publicPath: './assets',
              name: '[name].[ext]',
              emitFile: false,
              esModule: false,
            }
          },
        ],
      });

    // Important: return the modified config
    return config
  },
  images: {
    domains: ['accounts.google.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '/assets/scss')],
  },
  target: 'serverless',
      })
    )
  )
);