const gulp = require('gulp');
const webserver = require("browser-sync").create();
const del = require('del');
const runSequence = require('run-sequence');
const PATHS = {
    dist: 'dist',
    js: 'js/**/*.js',
    css: 'node_modules/bootstrap/dist/css/bootstrap.css',
    html: ['**/*.html', '!node_modules/**/*.html'],
    stubs: 'stub/**/*.js'
};

//clean the dist folder
gulp.task('clean', function clean(done) {
    return del([PATHS.dist], done);
});

//<-------------build tasks------------->//

gulp.task('scripts.angular-main', function () {
    return gulp.src('node_modules/angular/angular.min.js')
        .pipe(gulp.dest(PATHS.dist + '/scripts/angular/'));
});

gulp.task('scripts.angular-bootstrap', function () {
    return gulp.src([
            'node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'node_modules/angular-bootstrap/ui-bootstrap.min.js'
        ])
        .pipe(gulp.dest(PATHS.dist + '/scripts/angular-bootstrap/'));
});

gulp.task('scripts.angular-uuid4', function () {
    return gulp.src('node_modules/angular-uuid4/angular-uuid4.min.js')
        .pipe(gulp.dest(PATHS.dist + '/scripts/angular-uuid4/'));
});

gulp.task('scripts.angular', function (done) {
    runSequence('scripts.angular-main', 'scripts.angular-bootstrap', 'scripts.angular-uuid4', done);
});

//copy the required scripts into dist folder
gulp.task('scripts.js', function () {
    return gulp.src(PATHS.js).pipe(gulp.dest(PATHS.dist + '/scripts/js'));
});

//copy html files into dist folder
gulp.task('scripts.html', function () {
    return gulp.src(PATHS.html)
        .pipe(gulp.dest(PATHS.dist));
});

//build css files from scss
gulp.task('scripts.css', function () {
    return gulp.src(PATHS.css)
        .pipe(gulp.dest(PATHS.dist + '/css'));
});

//build css files from scss
gulp.task('scripts.stubs', function () {
    return gulp.src(PATHS.stubs).pipe(gulp.dest(PATHS.dist + '/scripts/stub'));
});

//unified task for scripts
gulp.task('scripts', function (done) {
    runSequence('clean', 'scripts.angular', 'scripts.js', 'scripts.stubs', 'scripts.html', 'scripts.css', done);
});
//<-------------build tasks------------->//


//<-------------webserver task------------->//
gulp.task('webserver', function () {
    webserver.init({
        server: "./" + PATHS.dist,
        port: 8080
    });
});
//<-------------webserver task------------->//

//<-------------default task------------->//
gulp.task('default', function (done) {
    runSequence('scripts', 'webserver', done);
});
//<-------------default task------------->//