var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = reqauire('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var webpack = require("webpack");
var uglify = require('gulp-uglify');
const filter = require('gulp-filter');
var rename = require('gulp-rename');
var base64 = require("gulp-base64");
var path = require('path');
var fs = require('fs');
require('events').EventEmitter.prototype._maxListeners = 300;

var publicDir = "/Public";
var dirRoot = __dirname + publicDir;
var resourceRoot = dirRoot + '';
var sourceRoot = dirRoot + '';


var gulpConfig = {
    webpack: {
        models: [
            {name: "Order_confirm", src: resourceRoot + "/Order/js/confirm.js", watch: [resourceRoot + '/Order/js/confirm/**/*.js']},
        ],
        common: [dirRoot + '/Public/js/**/*.js'],
        build: {
            path: sourceRoot + '/build/js'
        }
    },
    sass: {
        models: [
            {name: 'Address_add', src: resourceRoot + '/Address/css/add.scss', watch: []},
        ],
        common: [dirRoot + '/Public/sassmixins/**/*.scss'],
        build: {
            path: sourceRoot + '/build/css'
        },
        exclude: [/.*\/test\/.*/]
    },
    image: {
        common: [resourceRoot + '/image/**/*'],
        build: {
            path: sourceRoot + '/image'
        }
    },
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: true
    }
};

//模块化配置
var webpackModels = gulpConfig.webpack.models;
var commonJS = gulpConfig.webpack.common;
var buildJS = gulpConfig.webpack.build.path;

var config = function () {
    return {
        entry: {},
        output: {
            filename: "[name].bundle.js",
            sourceMapFilename: "[file].map"
        },
        module: {
            loaders: [
                {test: /\.css$/, loader: "style!css"}
            ]
        },
        resolve: {
            alias: {
                zepto: "zepto.1.1.6.min.js",
                base: "base.2.0.js",
                iScroll: "iscroll.js",
                ejs: "ejs_production.js"
            },
            root: [path.resolve(dirRoot + "/src")]
        },
        devtool: "#source-map"
    }
};
//sass 配置
var sassModels = gulpConfig.sass.models;
var commonScss = gulpConfig.sass.common;
var buildCSS = gulpConfig.sass.build.path;

var autoprefixerConfig = gulpConfig.autoprefixer;


/*************************************** webpack 模块化打包 *******************************************************/
var webpackModelsTask = [];
webpackModels.map(function (d) {
    webpackModelsTask.push('webpack_' + d.name);
    gulp.task('webpack_' + d.name, function (callback) {
        var myConfig = Object.create(makeConfig(d.name, d.src, d.build || buildJS));
        webpack(myConfig, function (err, stats) {
            if (err) throw new gutil.PluginError("webpack:build", err);
            // gutil.log("[webpack:build]", stats.toString({
            //     colors: true
            // }));
            callback();
        });
    });
});

gulp.task("js-watch", webpackModelsTask, function () {
    webpackModels.map(function (d) {
        d.watch.push(d.src);
        gulp.watch(d.watch.concat(commonJS), ['webpack_' + d.name]);
    });
});

var makeConfig = function (model, indexSrc, buildPath) {
    var c = config();
    c.entry = {};
    c.entry[model] = indexSrc;
    c.output.path = buildPath;
    return c;
};


/********************************************** webpack 模块化打包 end************************************************/
/********************************************** sass 模块化编译 ******************************************************/
var sassModelsTask = [];
sassModels.map(function (d) {
    sassModelsTask.push('sass_' + d.name);
    gulp.task('sass_' + d.name, function () {
        return gulp.src(d.src)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer(autoprefixerConfig))
            .pipe(base64({
                exclude: gulpConfig.sass.exclude
            }))
            .pipe(cleanCSS())
            .pipe(sourcemaps.write('./', {
                includeContent: false,
                sourceRoot: 'source'
            }))
            .pipe(gulp.dest(d.build || buildCSS));
    });
});


gulp.task('sass-watch', sassModelsTask, function () {
    sassModels.map(function (d) {
        d.watch.push(d.src);
        gulp.watch(d.watch.concat(commonScss), ['sass_' + d.name]);
    });
});
/*************************************** sass 模块化编译 end *******************************************************/

/*************************************** 图片处理 ******************************************************************/
gulp.task('image-copy', function () {
    gulp.src(gulpConfig.image.common)
        .pipe(gulp.dest(gulpConfig.image.build.path));
});

gulp.task('image-watch', ['image-copy'], function () {
    gulp.watch(gulpConfig.image.common, ['image-copy']);
});
/*************************************** 图片处理 ******************************************************************/

gulp.task('all', ['js-watch', 'sass-watch']);

gulp.task('default', function () {
    console.log("               gulp all");
    console.log("               gulp js-watch");
    console.log("               gulp sass-watch");
});

