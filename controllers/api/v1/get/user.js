'use strict';

var apiUser = function(req, res, next) {
  console.log('ユーザ情報を扱うクラスです');
  res.msg = 'ユーザ情報ページです';
  next();
};
module.exports = apiUser;
