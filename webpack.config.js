const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool: "source-map",

    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },

    output: {
        filename: '[name].app-build.js',
        path: path.resolve(__dirname, 'deploy')
      },

    devServer: {
        port: 4200,
        contentBase: './deploy',
        open: true
      },

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    },
                ],
            },

            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
        new CleanWebpackPlugin()
    ],
};