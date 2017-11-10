const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.resolve("./main/App.js"),
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },
    resolve : { extensions: [".js", ".jsx"] },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node-modules/, query: {presets: [ 'es2015', 'react']} }
        ],
    },
}