'use strict';

var Action = require('../../../action');

class ApiUser extends Action {

  constructor(req, res, next) {
    super(req, res, next);
  }

  before() {
    return super.before().then(function(){
      console.log('Api User before');
    });
  }
  execute() {
    return Promise.resolve(this);
  }

  dispatch() {
    this.response = {
      msg: 'ユーザ情報ページです'
    };
    return super.dispatch();
  }

  after() {
    return super.after().then(function(){
      console.log('Api User after');
    });
  }

}

module.exports = ApiUser;

