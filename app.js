'use strict';

var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

// 静的なファイルはここで返す
// TODO: 本来はS3などから配信したい（APIと静的ファイルは別にしたい）
app.get('/', function (req, res, next) {
  res.sendfile(__dirname + '/index.html');
});
app.use(express.static('bower_components'));

// ルーティングの設定
var apiRouter        = require('./routes/api/index');
app.use('/api', apiRouter);


// ソケット通信の設定(基本的にファイル名と名前空間は同じとする)
//    -> /api/socket
var apiSocketRouter  = require('./routes/api/socket');
apiSocketRouter(io);


