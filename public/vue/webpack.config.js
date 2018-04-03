const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const fs = require("fs");
const filePath = path.resolve(__dirname, "src");
// console.error(filePath);
let files = fs.readdirSync(filePath);
// console.error(files);

let targetdirs = files.reduce((total, current) => {
    let dirP = path.join(filePath, current);
    let stats = fs.statSync(dirP);
    if (stats.isDirectory()) {
        total.push(current);
    }
    return total;
}, []);

let entry = targetdirs.reduce((total, current) => {
    total[current] = path.resolve("src", current, "index.js");
    return total;
}, {});

module.exports = {
    entry,
    output: {
        filename: "[name]/main.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 244,
                    name: "assets/[name].[hash:7].[ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "url-loader",
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
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js" // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
    // optimization:{
    //     splitChunks: {

    //     }
    // }
};
