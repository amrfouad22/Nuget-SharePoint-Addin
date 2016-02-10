'use script';
var gulp = require('gulp');
var exec = require('child_process').exec;
gulp.task('build', function (cb) {
  exec('nuget pack', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
gulp.task('watch',function(){
   gulp.watch('*',['build']); 
});