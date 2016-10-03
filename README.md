# react-node-sample

## Starting from scratch

Create a new folder and initialize using npm

    mkdir react-node-sample
    cd react-node-sample
    npm init

Accept all the defaults at the prompts

## Install and configure webpack

Install webpack using npm

    npm install webpack --save

Webpack needs a configuration file to work its magic

    touch webpack.config.js

Now for some webpack magic, add the following to the webpack config file

    var webpack = require("webpack");
    var path = require("path");

    var BUILD_DIR = path.resolve(__dirname, "src/client/public");
    var APP_DIR = path.resolve(__dirname, "src/client/app");

    var config = {
        entry: APP_DIR + "/index.jsx",
        output: {
            path: BUILD_DIR,
            filename: "bundle.js"
        }
    };

    module.exports = config;
