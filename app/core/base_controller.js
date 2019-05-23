'use strict';

/**
 * 封装控制器的基本操作,比如对返回的渲染模式进行包装,减少重复代码
 */

const Controller = require('egg').Controller;

class BaseController extends Controller {

  // 对返回成功的数据的返回接口进行统一包装
  success(data) {
    this.ctx.status = 200;
    this.ctx.body = {
      success: true,
      status: 0,
      data,
    };
  }

  // not found
  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
