'use strict';

var apiLogin = function(req, res, next) {
  console.log('ログインページです！');
  res.msg = {auth: true};
  next();
};
module.exports = apiLogin;
