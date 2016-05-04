'use strict';

var Action = require('../../../action');

/**
 * apiLogin ログイン関係を扱うController
 *
 */
class ApiSummary extends Action {

  execute() {
    console.log('ユーザのデータを返すページです');
  }

  dispatch() {
    this.response =  {
      data: [
        {
          id: 1,
          userName: '青島',
          bodyTemperature: '36.5',
          pulse: 67,
          bloodPressure: '140-90'
        },
        {
          id: 2,
          userName: '山田',
          bodyTemperature: '37.2',
          pulse: 72,
          bloodPressure: '130-72'
        },
        {
          id: 3,
          userName: '吉田',
          bodyTemperature: '36.3',
          pulse: 81,
          bloodPressure: '128-69'
        }
      ]
    };
    return super.dispatch();
  }
}

module.exports = ApiSummary;


