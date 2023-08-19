const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        static: "./build",
        port: 3001,
        hot: true,
        open: true,
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                secure: false
            }
        }
    },
    watchOptions: {
        ignored: [path.resolve(__dirname, "./node_modules"), path.resolve(__dirname, "./build")]
    }
}
