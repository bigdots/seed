const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        front: "./src/front/index.js",
        back: "./src/back/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/js")
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     // filename: "vendor-[hash].min.js"
        // })
    ]
    // optimization:{
    //     splitChunks: {

    //     }
    // }
};
