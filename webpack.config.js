// const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: mode,

    // entry: './src/index.js',
    // output: {
    //     filename: 'sample1.js',
    //     path: path.resolve(__dirname, 'public')
    // },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                },

                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                  {
                      loader:"sass-loader",
                      options: {
                          implementation: require("sass"),
                          sassOptions: {
                            fiber: require("fibers")
                          }
                      }
                  }
                ],
            }
        ]
    },

devtool: 'source-map',

devServer: {
    port:4200,
    contentBase: './src',
    watchContentBase: true
}

}