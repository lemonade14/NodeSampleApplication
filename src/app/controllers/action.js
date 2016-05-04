'use strict';

class Action
{

  constructor(req, res, next)
  {
    console.log('Action');
    this.req  = req;
    this.res  = res;
    this.next = next;
    this.actionRes = {};
  }

  /**
   * @return Promise
   */
  before() {
    console.log('before');
    return Promise.resolve(this);
  }

  execute(req, res, next) {
    throw new Error('override');
  }

  /**
   * レスポンスを返すときは、キーなどが明確になるように
   * dispatchメソッド内で定義する
   * @return Promise
   */
  dispatch() {
    console.log('dispatch');
    this.res.msg = this.response;
    this.next();
    return Promise.resolve(this);
  }

  /**
   * @return Promise
   */
  after() {
    console.log('after');
    return Promise.resolve(this);

  }

}

module.exports = Action;

