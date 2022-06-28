const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const ForkTsCheckerWEbpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    entry: {
        "ts/app": path.join(__dirname, "src", "index.tsx"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new ForkTsCheckerWEbpackPlugin(),
    ],
};
