var path = require("path");
var webpack = require("webpack");

var publicDir = "/Public";
var dirRoot = __dirname + publicDir;
var resourceRoot = dirRoot + '';
var sourceRoot = dirRoot + '';
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer')
var publicPath = '/Public/build/';
var mobile_theme = JSON.stringify(require("./Public/theme/mobile.js")());


module.exports = {
    entry: {
        // Tpl: resourceRoot + "/module/tpl.js",
        test: resourceRoot + '/admin_react/index.js'
    },
    output: {
        filename: "[name].bundle.js",
        sourceMapFilename: "[file].map",
        publicPath: publicPath,
        path: sourceRoot + '/Public/build'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css!postcss"},
            {test: /\.scss/, loader: "style!css!postcss!sass"},
            {test: /\.less/, loader: "style!css!postcss!less?{'modifyVars':" + mobile_theme + "}"},
            {test: /\.ejs$/, loader: 'ejs-compiled?htmlmin'},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.jsx?$/, loader: 'babel'}
        ],
        postLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['es3ify'],
            }
        ]
    },
    resolve: {
        extensions: ['', '.web.js', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        alias: {
            zepto: "zepto.1.1.6.min.js",
            base: "base.2.0.js",
            iScroll: "iscroll.js",
            ejs: "ejs_production.js"
        },
        root: [path.resolve(dirRoot + "/src")]
    },
    devtool: "#source-map",
    'ejs-compiled-loader': {
        'htmlmin': true, // or enable here
        'htmlminOptions': {
            removeComments: true
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),
        new webpack.ProvidePlugin({}),
        new webpack.DefinePlugin({
            ENV: JSON.stringify("PRO")
        })
    ],
    postcss: [
        pxtorem({
            rootValue: 75,
            propWhiteList: [],
        }),
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
        })
    ],
    babel: {
        "presets": [
            "es2015",
            "react",
            "stage-0"
        ],
        "ignore": [],
        "plugins": [
            [
                "import",
                {
                    "style": "css",
                    "libraryName": "antd-mobile"
                }
            ],
            [
                "import",
                {
                    "style": "css",
                    "libraryName": "antd"
                }
            ],
            "add-module-exports"
        ]
    }
};