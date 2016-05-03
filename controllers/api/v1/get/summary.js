'use strict';

var apiSummary = function(req, res, next) {
  console.log('ユーザのデータを返すページです');

  var resJson = {
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
  res.msg = resJson;
  next();
};
module.exports = apiSummary;
