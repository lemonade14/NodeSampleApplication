'use strict';

// ルーティングテーブル
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  console.log('アクセス');
  res.msg = 'ありがとう';
  next();
});


// アクションを呼び出す
var apiUser    = require('../../controllers/api/v1/get/user');
var apiLogin   = require('../../controllers/api/v1/get/login');
var apiSummary = require('../../controllers/api/v1/get/summary');


// ルーティングの設定を行う
router.get('/user', apiUser);
router.get('/login', apiLogin);
router.get('/summary', apiSummary);


// レスポンスを返す際には共通部分で返す
// dispatch
router.use(function(req, res, next){
  res.json(res.msg);
});

module.exports = router;

