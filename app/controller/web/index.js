'use strict';

const Controller = require('../../core/base_controller.js');

class IndexController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.nj');
  }
}

module.exports = IndexController;
