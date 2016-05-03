'use strict';

var apiUser = function(req, res, next) {
  console.log('ユーザ情報を扱うクラスです');
  res.send('ユーザ情報ページです');
};
module.exports = apiUser;
