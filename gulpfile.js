/**
 * Created by wuxin on 16/4/28.
 */
var gulp = require('gulp');



var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'), //css压缩需要
    cssver = require('gulp-make-css-url-version'),
    jshint = require('gulp-jshint'), //js 检验
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'), //压缩js
    rename = require('gulp-rename'),//重命名
    htmlmin = require('gulp-htmlmin'), //压缩文件
    imagemin = require('gulp-imagemin'), //图片压缩
    pngquant = require('imagemin-pngquant'), //深度压缩
    cache = require('gulp-cache'), //只压缩更改的图片
    rev = require('gulp-rev'),  //对文件名加md5后缀 gulp-rev 格式-+md5 gulp-rev-append ?+md5
    revCollector = require('gulp-rev-collector'), //页面生成版本号 免除缓存影响
    clean = require('gulp-clean');
    //revappend = require('gulp-rev-append');


//压缩css 需要执行gulp cssmin 命令
gulp.task('cssmin', function () {
    gulp.src('dev_public/css/*.css')
        //给css文件里引用文件加版本号（文件MD5）
        .pipe(cssmin())
        //.pipe(rev())                  //文件名加md5后缀
        .pipe(gulp.dest('public/css'))  //输出文件到本地
        .pipe(rev.manifest({path: 'css-manifest.json'}))         //生成一个rev-mainfest.json
        .pipe(gulp.dest('./rev'));    //将rev-manifest.json 保存到 rev
});

//压缩js 需要执行gulp jsmin 命令
gulp.task('jsmin', function () {
    gulp.src(['dev_public/js/*.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true//类型：Boolean 默认：true 是否完全压缩
        }))
        //.pipe(rev())
        .pipe(gulp.dest('public/js'))
        .pipe(rev.manifest({path: 'js-manifest.json'}))         //生成一个rev-mainfest.json
        .pipe(gulp.dest('./rev'));
});
/*
gulp.task('jsmin2', function () {
    gulp.src(['devlopment/lib/factory/*.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(rev())
        .pipe(gulp.dest('compressionment/lib/factory/'))
        .pipe(rev.manifest({path: 'js2-manifest.json'}))         //生成一个rev-mainfest.json
        .pipe(gulp.dest('./rev'));
});
//子账号部分压缩
gulp.task('jsmin3', function () {
    gulp.src(['devlopment/s/lib/factory/*.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(rev())
        .pipe(gulp.dest('compressionment/s/lib/factory/'))
        .pipe(rev.manifest({path: 'js3-manifest.json'}))         //生成一个rev-mainfest.json
        .pipe(gulp.dest('./rev/s'));
});
gulp.task('jsmin4', function () {
    gulp.src(['devlopment/s/lib/controller/*.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(rev())
        .pipe(gulp.dest('compressionment/s/lib/controller'))
        .pipe(rev.manifest({path: 'js4-manifest.json'}))         //生成一个rev-mainfest.json
        .pipe(gulp.dest('./rev/s'));
});
*/
/*
//压缩 html 需要执行gulp htmlmin 命令
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('devlopment/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('compressionment/'))
        .pipe(rev.manifest({path: 'html-manifest.json'}))         //生成一个rev-mainfest.json
        .pipe(gulp.dest('./rev'));
});
//子账号部分压缩
gulp.task('htmlmin2', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('devlopment/s/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('compressionment/s/'))
        .pipe(rev.manifest({path: 'html1-manifest.json'}))         //生成一个rev-mainfest.json
        .pipe(gulp.dest('./rev/s'));
});
//压缩图片  需要执行 gulp imagemin
gulp.task('imagemin', function () {
 gulp.src('src/images/*.{png,jpg,gif,ico}')
 .pipe(cache(imagemin({
 progressive: true,
 svgoPlugins: [{removeViewBox: false}],
 use: [pngquant()]
 })))
 .pipe(gulp.dest('dist/images'))
 .pipe(rev.manifest({path: 'image-manifest.json'}))         //生成一个rev-mainfest.json
 .pipe(gulp.dest('./rev'));
 });
*/
/*
//给页面引用url添加版本号，以清除页面缓存 gulp rev  //需要特殊版本号
gulp.task('rev',function(){
    gulp.src(['./rev/*.json','compressionment/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('compressionment/'))
});
////子账号部分压缩
gulp.task('rev2',function(){
    gulp.src(['./rev/s/*.json','compressionment/s/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('compressionment/s/'))
});
*/

gulp.task('bower', function(){
    gulp.src('./bower_components/angularjs/angular.min.js')
        .pipe(gulp.dest('./public/js/libs/angularjs'));
    gulp.src('./bower_components/angularjs/angular.min.js.map')
        .pipe(gulp.dest('./public/js/libs/angularjs'));

    gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./public/js/libs/jquery'));
    gulp.src('./bower_components/dist/dist/jquery.min.map')
        .pipe(gulp.dest('./public/js/libs/jquery'));
})
//// 清空图片、样式、js
gulp.task('clean',function(){
    //gulp.src(['./rev/*','compressionment/*html','compressionment/s/*html','compressionment/css/*.css','compressionment/lib/factory/*.js','compressionment/lib/controller/*js','compressionment/s/lib/factory/*.js','compressionment/s/lib/controller/*js'],{read: false})
    gulp.src(['./rev/*','public/css/*.css','public/js/*.js'],{read: false})
        .pipe(clean());
})



// 默认执行
gulp.task('default', function(){
    //gulp.run('cssmin', 'jsmin', 'htmlmin','jsmin2','htmlmin2','jsmin3','jsmin4');
    gulp.run('cssmin', 'jsmin', 'bower');
});

// 监视文件的变化
gulp.task('watch', function () {
    gulp.watch(['dev_public/js/*.js','dev_public/css/*.css'], ['jsmin','cssmin']);
});

// 监听文件变化
// gulp.watch('./js/*.js', function(){
//     gulp.run('cssmin', 'jsmin', 'htmlmin');
// });
