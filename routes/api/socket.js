'use strict';

// アクションを呼び出す
var socketData = require('../../controllers/socket/v1/data');


var apiSocket = function(io) {

  // 名前空間を作成し、名前空間毎にハンドラーを登録
  var apiSocket = io.of("/api/socket");
  apiSocket.on('connection', socketData);


  return apiSocket;
};

module.exports = apiSocket;
