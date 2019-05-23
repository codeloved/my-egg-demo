'use strict';
/**
 * 转发接口
 */
const Service = require('egg').Service;

class PostService extends Service {
  async username() {
    // const { ctx, config } = this;
    // const url = config.JAVADOMAIN + '/post';
    // const res = await ctx.curl(url, {
    //   method: 'POST',
    //   data: {
    //     code: ctx.request.body.code,
    //   },
    //   dataType: 'json',
    // });
    return {
      name: 'this is egg',
    };
  }
}

module.exports = PostService;
