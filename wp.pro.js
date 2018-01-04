var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, ".build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: { presets: ["env", "react"] }
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
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new Dotenv({
            path: path.join(__dirname, "wp.dev.env"),
            safe: false
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
