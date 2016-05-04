'use strict';

/**
 * befor/afterなど独自メソッドを実行しやすくする
 */
var ActionExec = function(action) {
  return action.before()
        .then(action.execute())
        .then(action.dispatch())
        .then(action.after())
        .catch(function(error){
          console.log('Error!');
          console.log(error);
        });
};

// ルーティングテーブル
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  console.log('アクセス');
  res.msg = 'ありがとう';
  next();
});



// ルーティングの設定を行う
router.get('/user', function(res, req, next){
  var ApiUser = require('../../controllers/api/v1/get/user');
  return ActionExec(new ApiUser(res, req, next));
});

router.get('/login', function(res, req, next){
  var ApiLogin   = require('../../controllers/api/v1/get/login');
  return ActionExec(new ApiLogin(res, req, next));
});

router.get('/summary', function(res, req, next){
  var ApiSummary = require('../../controllers/api/v1/get/summary');
  return ActionExec(new ApiSummary(res, req, next));
});


// レスポンスを返す際には共通部分で返す
// dispatch
router.use(function(req, res, next){
  res.json(res.msg);
});

module.exports = router;


