var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "src/public");
var APP_DIR = path.resolve(__dirname, "src");

var config = {
    context: APP_DIR,
    entry: "./client",
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
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: [APP_DIR]
    }
};

module.exports = config;