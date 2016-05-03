'use strict';

/**
 * ソケット通信で送られてきたデータを処理する
 */
var socketData = function (io) {

  // 定期的にデータを更新していく
  // TODO: 本来ここは、S3やDBの更新内容を元に通知させる
  var randomUpdate = function() {
    // 3秒~8秒の間でランダムに通知させる
    var waitTime = (Math.floor(Math.random()*5) + 3)*1000;
    console.log(waitTime + '後にイベント発火');

    setTimeout(function(){
      // クライアントに通知
      io.emit('updateSummaryData', getUpdateUserData());
      randomUpdate();
    }, waitTime);
  }

  // ランダム通知実行
  randomUpdate();

  io.on('connection', function(socket){
    console.log('WebSocket!コネクション');

    // クライアントから受信
    socket.on('completeUpdate', function (data) {
      console.log('クライアントから更新完了通知が来たよ');
      console.log(data);
    });
  });





};


var getName = function(index) {
  if (index === 1) {
    return '青島';
  } else if (index === 2) {
    return '山田';
  } else if (index === 3) {
    return '吉田';
  }
  return '';

}
var getUpdateUserData = function() {

  var res = {};
  res.id = Math.ceil(Math.random()*3);
  res.userName = getName(res.id);
  // 36.0 ~ 38.0までの数値
  res.bodyTemperature = (360 + Math.floor(Math.random()*21))/10;
  // 50 ~ 80
  res.pulse = 50 + Math.floor(Math.random()*31);
  // 120~150 と 50~80
  res.bloodPressure = (120 + Math.floor(Math.random()*31)) + '-' + (50 + Math.floor(Math.random()*31)) ;

  return res;
}
module.exports = socketData;

