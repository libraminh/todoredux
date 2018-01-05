var path = require("path");
var webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, ".build"),
        filename: "bundle.js",
        //chunkFilename: "[name].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["env", "react", "stage-2"]
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, ".build"),
        compress: true,
        inline: true,
        historyApiFallback: true /* Ko có dòng này F5 là khỏi router lun */,
        host: "0.0.0.0",
        public: "localhost:3000",
        port: 3000,
        open: true
    },
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new Dotenv({
            path: path.join(__dirname, "wp.dev.env"),
            safe: false
        })
    ],
    resolve: {
        alias: {
            actions: path.resolve(__dirname, "src/actions"),
        }
    }
};
