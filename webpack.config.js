var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "src/public");
var APP_DIR = path.resolve(__dirname, "src");

var config = {
    entry: APP_DIR + "/app-client.jsx",
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                include: APP_DIR,
                loader: "babel"
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    }
};

module.exports = config;