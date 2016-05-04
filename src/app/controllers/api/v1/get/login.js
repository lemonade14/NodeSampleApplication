'use strict';

var Action = require('../../../action');

/**
 * apiLogin ログイン関係を扱うController
 *
 */
class ApiLogin extends Action {

  execute() {
    console.log('ログイン処理');
  }

  dispatch() {
    this.response = {
      auth: true
    };
    return super.dispatch();
  }
}

module.exports = ApiLogin;
