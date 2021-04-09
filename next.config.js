// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
// const withFonts = require("next-fonts");
// const webpack = require("webpack");
// const path = require("path");

 
// module.exports = withImages(
//    {


//        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Note: we provide webpack above so you should not `require` it
//     // Perform customizations to webpack config
//     config.module.rules.push({
//             test: /\.(eot|ttf|woff|woff2)$/,
//             use: {
//               loader: "url-loader",
//             },
//           });
//       config.module.rules.push({
//         test: /\.(woff(2)?|ttf|eot|svg|jpg|png|ico)(\?v=\d+\.\d+\.\d+)?$/,
//         use: [
          
//           {
//             loader:'file-loader' ,
//           },
//         ],
//       });

//     // Important: return the modified config
//     return config
//   },
//   images: {
//     domains: ['accounts.google.com', '3.64.214.244'],
//    },
//   target: 'serverless',
// }
// )
// next.config.js

const   withPWA = require('next-pwa');
const  runtimeCaching = require ('next-pwa/cache');
const prod = process.env.NODE_ENV === 'production'
module.exports =  withPWA(
  {
   pwa: {
    dest: 'public',
    register: true,
    disable: prod ? false : true,
    runtimeCaching,
  },
  webpack: (config) => {
    config.module.rules.push({
      issuer: {
        // nextjs already handles url() in css/sass/scss files
        test: /\.\w+(?<!(s?c|sa)ss)$/i,
      },
      test: /\.(jpg|gif|png|svg|ico)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            // sample options
            limit: 8192,
            outputPath: '...',
            context: 'src',
            name: '[path][name].[hash:8].[ext]',
            
          },
        },
      ],
    });

    return config;
  },
  images: {
     domains: ['accounts.google.com', '3.64.214.244','uploadludovic.s3.eu-central-1.amazonaws.com'],
   },
  
}

)
