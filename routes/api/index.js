'use strict';

// ルーティングテーブル
var express = require('express');
var router = express.Router();


// アクションを呼び出す
var apiUser = require('../../controllers/api/v1/get/user');

router.get('/', function(req, res, next){
  console.log('アクセス');
  res.msg = 'ありがとう';
  next();
});
router.get('/user', apiUser);


// dispatch
router.use(function(req, res, next){
  res.send(res.msg);
});

module.exports = router;

