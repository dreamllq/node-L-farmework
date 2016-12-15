var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require('gulp-sass');
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
const pxtorem = require('postcss-pxtorem');


/************************************* end ******************************************************************/

gulp.task("webpack", function (callback) {
    var config = require('./webpack.config.pro');
    var myConfig = Object.create(config);
    myConfig.postcss.push(pxtorem({
        rootValue: 75,
        propWhiteList: [],
    }));
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);

        if (stats.hasErrors()) {
            gutil.log("[webpack:build]", stats.toString({
                colors: true
            }));
        }
        callback();
    });
});


gulp.task('build', ['webpack'], function () {
});
