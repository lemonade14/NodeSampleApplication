'use strict';

//TODO: controllersはapiとsocketが並列なのにRouterはapiの下にsocketがあるのはどうなのかなぁ


// アクションを呼び出す
var socketData = require('../../controllers/socket/v1/data');

var apiSocket = function(io) {

  // 名前空間を作成し、名前空間毎にハンドラーを登録
  var apiSocket = io.of("/api/socket");
  socketData(apiSocket);


  return apiSocket;
};

module.exports = apiSocket;
