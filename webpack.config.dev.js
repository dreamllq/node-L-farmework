var config = require("./webpack.config");
var webpack = require("webpack");

config.plugins = [
    new webpack.ProvidePlugin({}),
    new webpack.DefinePlugin({
        ENV: JSON.stringify("DEV")
    }),
    new webpack.EnvironmentPlugin([
        "NODE_ENV"
    ])
];

module.exports = config;