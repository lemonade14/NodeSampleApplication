var gulp = require('gulp'),
spawn = require('child_process').spawn,
livereload = require('gulp-livereload'),
server;

gulp.task('server',function(){
    if(server){
         //サーバーが起動していたら終了
         server.kill('SIGKILL');
         server=undefined;
    }
     //サーバーを起動。npm startと同じ。私の環境がwindowsなのでこうしてる。
     server = spawn('node',['./src/app.js']);
　　　//console.logとかをコンソールに表示
     server.stdout.setEncoding('utf8');
     server.stdout.on('data',function(data){
         console.log(data);
     });
     //エラーをコンソールに表示
     server.stderr.setEncoding('utf8');
     server.stderr.on('data',function(data){
         console.log(data);
     });
})

//livereloadサーバへ変更通知を行い、ブラウザのリロードを行う。
gulp.task('reload',function(){
     gulp.src(['src/index.html'])
             .pipe(livereload());  
})

gulp.task('watch',['server'],function(){
        livereload.listen();

        //サーバ再起動の対象にするファイル
        gulp.watch(['src/app.js','src/controllers/**','src/routes/**'],['server']);
        //ブラウザリロードの対象にするファイル
        gulp.watch(['src/index.html'],['reload']);
})
