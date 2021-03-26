
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/scss')],
  },
  distDir: 'dist',
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
          },
        ],
      });

    // Important: return the modified config
    return config
  },
}

 