var gulp = require('gulp'),
spawn = require('child_process').spawn,
livereload = require('gulp-livereload'),
// gulp-jsdoc
jsdoc = require('gulp-jsdoc'),
server;




gulp.task('server',function(){
  if(server){
    //サーバーが起動していたら終了
    server.kill('SIGKILL');
    server=undefined;
  }
   //サーバーを起動。npm startと同じ。私の環境がwindowsなのでこうしてる。
   server = spawn('node',['./src/app.js']);
  // console.logとかをコンソールに表示
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


// jsdocを書き出すタスク
// プロジェクト情報
var infos = {
  // プロジェクト名
  name: 'NodeSampleApplication',
  // バージョン
  version: '1.0.0'
};

// HTMLのテンプレート設定
var template = {
  // テンプレートプラグイン「ink-docstrap」を使用する
  path: 'ink-docstrap',

  // プロジェクト名 ページタイトル・ヘッダーの左上に表示されます
  systemName: 'NodeSampleApplication',
  // HTMLのスタイルテーマ
  // cerulean, cosmo, cyborg, darkly, flatly, journal, lumen, paper, readable, sandstone, simplex, slate, spacelab, superhero, united, yetiの中から選べます
  theme: 'superhero',
  // ソースコードに行番号を表示するかどうか
  linenums: true
};

// オプション
var options = {
  // ソースコードを記述したHTMLを生成するかどうか
  outputSourceFiles: true
};

gulp.task('jsdoc', function() {
  // 書き出されるindex.htmlに「README.md」を埋め込む
  gulp.src(['./src/app/**/*.js', 'README.md'])
    .pipe(jsdoc.parser(infos))
    .pipe(jsdoc.generator('./docs/', template, options))
});


