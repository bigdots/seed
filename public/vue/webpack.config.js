const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const fs = require("fs");
const filePath = path.resolve(__dirname, "src");
// console.error(filePath);
let files = fs.readdirSync(filePath);
// console.error(files);

// let targetdirs = files.reduce((total, current) => {
//     let dirP = path.join(filePath, current);
//     let stats = fs.statSync(dirP);
//     if(stats.isDirectory()){
//         total.push(dirP)
//     }
//     return total;
// }, []);

let entry = files.reduce((total, current) => {
    total[current] = path.resolve("src", current, "index.js");
    return total;
}, {});

module.exports = {
    entry,
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
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
            }
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
