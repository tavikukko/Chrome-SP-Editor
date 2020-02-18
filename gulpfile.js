// /gulpfile.js
var gulp = require('gulp');
var del = require('del');
var rename = require("gulp-rename");
var replace = require('gulp-replace');

gulp.task('clean', (done) => {
  console.log("Deleting old definitions");
  return del([
    'public/@pnp/common/**/*',
    'public/@pnp/config-store/**/*',
    'public/@pnp/graph/**/*',
    'public/@pnp/logging/**/*',
    'public/@pnp/nodejs/**/*',
    'public/@pnp/odata/**/*',
    'public/@pnp/pnpjs/**/*',
    'public/@pnp/sp/**/*',
    'app/@pnp/adaljsclient/**/*',
    'public/vs/**/*',
    'public/@pnp/sp-addinhelpers/**/*',
    'public/@pnp/sp-clientsvc/**/*',
    'public/@pnp/sp-taxonomy/**/*',
    'public/@microsoft/microsoft-graph-types/**/*',
    'public/bundles/common.es5.umd.bundle.js',
    'public/bundles/config-store.es5.umd.bundle.js',
    'public/bundles/graph.es5.umd.bundle.js',
    'public/bundles/logging.es5.umd.bundle.js',
    'public/bundles/nodejs.es5.umd.js',
    'public/bundles/odata.es5.umd.bundle.js',
    'public/bundles/pnpjs.es5.umd.bundle.js',
    'public/bundles/sp-addinhelpers.es5.umd.bundle.js',
    'public/bundles/sp-clientsvc.es5.umd.bundle.js',
    'public/bundles/sp-taxonomy.es5.umd.bundle.js',
    'public/bundles/sp.es5.umd.bundle.js',
    'public/bundles/adaljsclient.es5.umd.bundle.js',
  ], done);
});

gulp.task('copy:commmon', (done) => {
  console.log("Copy @pnp/common");
  gulp.src('./node_modules/@pnp/common/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/common/'))
  gulp.src('./dist/common.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:config-store', (done) => {
  console.log("Copy @pnp/config-store");
  gulp.src('./node_modules/@pnp/config-store/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/config-store/'))
  gulp.src('./dist/config-store.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:graph', (done) => {
  console.log("Copy @pnp/graph");
  gulp.src('./node_modules/@pnp/graph/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/graph/'))
  gulp.src('./dist/graph.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:logging', (done) => {
  console.log("Copy @pnp/logging");
  gulp.src('./node_modules/@pnp/logging/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/logging/'))
  gulp.src('./dist/logging.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:odata', (done) => {
  console.log("Copy @pnp/odata");
  gulp.src('./node_modules/@pnp/odata/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/odata/'))
  gulp.src('./dist/odata.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:pnpjs', (done) => {
  console.log("Copy @pnp/pnpjs");
  gulp.src('./node_modules/@pnp/pnpjs/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/pnpjs/'))
  // gulp.src('./dist/pnpjs.es5.umd.bundle.js')
  //  .pipe(gulp.dest('./public/bundles/'))
  gulp.src('./node_modules/@pnp/pnpjs/dist/pnp.js')
    .pipe(rename('pnpjs.es5.umd.bundle.js'))
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:sp', (done) => {
  console.log("Copy @pnp/sp");
  gulp.src('./node_modules/@pnp/sp/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/sp/'))
  gulp.src('./dist/sp.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:sp-addinhelpers', (done) => {
  console.log("Copy @pnp/sp-addinhelpers");
  gulp.src('./node_modules/@pnp/sp-addinhelpers/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/sp-addinhelpers/'))
  gulp.src('./dist/sp-addinhelpers.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:adaljsclient', (done) => {
  console.log("Copy @pnp/adaljsclient");
  gulp.src('./node_modules/@pnp/adaljsclient/**/*.d.ts')
    .pipe(gulp.dest('./public/@pnp/adaljsclient/'))
  gulp.src('./dist/adaljsclient.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:sp-clientsvc', (done) => {
  console.log("Copy @pnp/sp-clientsvc");
  gulp.src('./node_modules/@pnp/sp-clientsvc/src/**/*')
    .pipe(gulp.dest('./public/@pnp/sp-clientsvc/'))
  gulp.src('./node_modules/@pnp/sp-clientsvc/dist/sp-clientsvc.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:sp-taxonomy', (done) => {
  console.log("Copy @pnp/sp-taxonomy");
  gulp.src('./node_modules/@pnp/sp-taxonomy/src/**/*')
    .pipe(gulp.dest('./public/@pnp/sp-taxonomy/'))
  gulp.src('./node_modules/@pnp/sp-taxonomy/dist/sp-taxonomy.es5.umd.bundle.js')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/bundles/'))
  done();
});

gulp.task('copy:microsoft-graph-types', (done) => {
  console.log("Copy @microsoft/microsoft-graph-types");
  gulp.src('./node_modules/@microsoft/microsoft-graph-types/microsoft-graph.d.ts')
    .pipe(gulp.dest('./public/@microsoft/microsoft-graph-types/'));
  done();
});

gulp.task('copy:monaco-editor', (done) => {
  console.log("Copy monaco-editor");
  gulp.src('./node_modules/monaco-editor/min/**/*')
    .pipe(replace(/(\/\/.*?sourceMappingURL\s*=.*\.js\.map)/g, ''))
    .pipe(gulp.dest('./public/'));
  // gulp.src('./node_modules/monaco-editor/min-maps/**/*')
  //   .pipe(gulp.dest('./public/monaco-editor/min-maps/'));
  // gulp.src('./node_modules/monaco-editor/*', { nodir: true })
  //   .pipe(gulp.dest('./public/monaco-editor/'));
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
