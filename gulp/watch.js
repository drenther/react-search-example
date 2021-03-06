var gulp = require("gulp");
var config = require("./config");
var path = require("path");
var bs = require('browser-sync').create('main');

gulp.task('watch', ['js', 'css'], function() {
    bs.init({

        server: {
            baseDir: config.paths.views,
        },
    });

    var justReload = [
        path.join(config.paths.views, 'index.html'),
    ];

    gulp.watch(justReload, bs.reload);
    gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
    gulp.watch(path.join(config.paths.jsSrc, '**', '*.js'), ['js']);
});
