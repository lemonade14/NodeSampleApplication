'use strict';

/**
 * ソケット通信で送られてきたデータを処理する
 */
var socketData = function (socket) {
  console.log('WebSocket!コネクション');

  // クライアントに通知
  socket.emit('news', { hello: 'world' });

  // クライアントから受信
  socket.on('my other event', function (data) {
    console.log(data);
  });
};
module.exports = socketData;

