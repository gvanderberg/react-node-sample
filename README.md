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

APP_DIR is the location of our React codebase
BUILD_DIR is the bundle output

## Install and configure Babel-Loader

Babel is used to translate our code into a format that is supported by all browsers.

    npm install babel-loader --save
    npm install babel-preset-es2015 --save
    npm install babel-preset-react --save

I like being verbose in my code and the commands I run so you can combine the above into a single line if you want.
babel-preset-es2015 and babel-preset-react are babel plugins used to translate ES6 and JSX.

Now create .babelrc file

    touch .babelrc

And add the following

    {
        "presets": [
            "es2015",
            "react"
        ]
    }

And now we tell webpack to use babel-loader

    // Existing code
    var config = {
        // Existing code
        module: {
            loaders: [
                {
                    test: /\.jsx?/,
                    include: APP_DIR,
                    loader: "babel"
                }
            ]
        },
        // Existing code
    };

## Install React and React-DOM

    npm install react --save
    npm install react-dom --save

[isomorphic-lab](https://github.com/insin/isomorphic-lab)

[sitepoint](https://www.sitepoint.com/building-a-react-universal-blog-app-a-step-by-step-guide/)

[codementor](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack)