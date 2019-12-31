// /gulpfile.js
var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');

gulp.task('clean', (done) => {
  console.log("Deleting old definitions");
  return del([
    'app/@pnp/common/**/*',
    'app/@pnp/config-store/**/*',
    'app/@pnp/graph/**/*',
    'app/@pnp/logging/**/*',
    'app/@pnp/nodejs/**/*',
    'app/@pnp/odata/**/*',
    'app/@pnp/pnpjs/**/*',
    'app/@pnp/sp/**/*',
    'app/@pnp/adaljsclient/**/*',
    'app/monaco-editor/**/*',
    'app/@pnp/sp-addinhelpers/**/*',
    'app/@pnp/sp-clientsvc/**/*',
    'app/@pnp/sp-taxonomy/**/*',
    'app/@microsoft/microsoft-graph-types/**/*',
    'app/js/common.es5.umd.bundle.js',
    'app/js/config-store.es5.umd.bundle.js',
    'app/js/graph.es5.umd.bundle.js',
    'app/js/logging.es5.umd.bundle.js',
    'app/js/nodejs.es5.umd.js',
    'app/js/odata.es5.umd.bundle.js',
    'app/js/pnpjs.es5.umd.bundle.js',
    'app/js/sp-addinhelpers.es5.umd.bundle.js',
    'app/js/sp-clientsvc.es5.umd.bundle.js',
    'app/js/sp-taxonomy.es5.umd.bundle.js',
    'app/js/sp.es5.umd.bundle.js',
  ], done);
});

gulp.task('copy:commmon', (done) => {
  console.log("Copy @pnp/common");
  gulp.src('./node_modules/@pnp/common/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/common/'))
  gulp.src('./dist/common.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:config-store', (done) => {
  console.log("Copy @pnp/config-store");
  gulp.src('./node_modules/@pnp/config-store/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/config-store/'))
   gulp.src('./dist/config-store.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:graph', (done) => {
  console.log("Copy @pnp/graph");
  gulp.src('./node_modules/@pnp/graph/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/graph/'))
  gulp.src('./dist/graph.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:logging', (done) => {
  console.log("Copy @pnp/logging");
  gulp.src('./node_modules/@pnp/logging/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/logging/'))
  gulp.src('./dist/logging.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:odata', (done) => {
  console.log("Copy @pnp/odata");
  gulp.src('./node_modules/@pnp/odata/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/odata/'))
  gulp.src('./dist/odata.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:sp', (done) => {
  console.log("Copy @pnp/sp");
  gulp.src('./node_modules/@pnp/sp/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/sp/'))
  gulp.src('./dist/sp.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:sp-addinhelpers', (done) => {
  console.log("Copy @pnp/sp-addinhelpers");
  gulp.src('./node_modules/@pnp/sp-addinhelpers/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/sp-addinhelpers/'))
  gulp.src('./dist/sp-addinhelpers.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:adaljsclient', (done) => {
  console.log("Copy @pnp/adaljsclient");
  gulp.src('./node_modules/@pnp/adaljsclient/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/adaljsclient/'))
  gulp.src('./dist/adaljsclient.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:sp-clientsvc', (done) => {
  console.log("Copy @pnp/sp-clientsvc");
  gulp.src('./node_modules/@pnp/sp-clientsvc/src/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/sp-clientsvc/'))
  gulp.src('./node_modules/@pnp/sp-clientsvc/dist/sp-clientsvc.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:sp-taxonomy', (done) => {
  console.log("Copy @pnp/sp-taxonomy");
  gulp.src('./node_modules/@pnp/sp-taxonomy/src/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/sp-taxonomy/'))
  gulp.src('./node_modules/@pnp/sp-taxonomy/dist/sp-taxonomy.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('copy:microsoft-graph-types', (done) => {
  console.log("Copy @microsoft/microsoft-graph-types");
  gulp.src('./node_modules/@microsoft/microsoft-graph-types/microsoft-graph.d.ts')
    .pipe(gulp.dest('./app/@microsoft/microsoft-graph-types/'));
  done();
});

gulp.task('copy:monaco-editor', (done) => {
  console.log("Copy monaco-editor");
  gulp.src('./node_modules/monaco-editor/min/**/*')
    .pipe(gulp.dest('./app/monaco-editor/min/'));
  gulp.src('./node_modules/monaco-editor/min-maps/**/*')
    .pipe(gulp.dest('./app/monaco-editor/min-maps/'));
  gulp.src('./node_modules/monaco-editor/*', { nodir: true })
    .pipe(gulp.dest('./app/monaco-editor/'));
  done();
});

gulp.task('copy:pnpjs', (done) => {
  console.log("Copy @pnp/pnpjs");
  gulp.src('./node_modules/@pnp/pnpjs/**/*.d.ts')
    .pipe(gulp.dest('./app/@pnp/pnpjs/'))
    gulp.src('./dist/pnpjs.es5.umd.bundle.js')
    .pipe(gulp.dest('./app/js/'))
  //gulp.src('./node_modules/@pnp/pnpjs/dist/pnp.js')
   // .pipe(rename('pnpjs.es5.umd.bundle.js'))
   // .pipe(gulp.dest('./app/js/'))
  done();
});

gulp.task('default',
  gulp.series(['clean',
    'copy:commmon',
    'copy:config-store',
    'copy:graph',
    'copy:logging',
    'copy:odata',
    'copy:pnpjs',
    'copy:sp',
    'copy:adaljsclient',
    'copy:sp-addinhelpers',
    'copy:sp-clientsvc',
    'copy:sp-taxonomy',
    'copy:microsoft-graph-types',
    'copy:monaco-editor',
  ]));
