'use strict';

var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

// 静的なファイルはここで返す
app.use(express.static('src/bower_components'));
// TODO: 本来はS3などから配信したい（APIと静的ファイルは別にしたい）
app.get('/', function (req, res, next) {
  res.sendfile(__dirname + '/index.html');
});

// ルーティングの設定
var apiRouter        = require('./app/routes/api/index');
app.use('/api', apiRouter);


// ソケット通信の設定(基本的にファイル名と名前空間は同じとする)
//    -> /api/socket
var apiSocketRouter  = require('./app/routes/api/socket');
apiSocketRouter(io);


