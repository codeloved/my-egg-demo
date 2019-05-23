'use strict';

// 转发api

const Controller = require('../../core/base_controller.js');

class PostController extends Controller {
  async username() {
    const { ctx } = this;
    const data = await ctx.service.api.post.username();
    this.success(data);
  }
}

module.exports = PostController;
