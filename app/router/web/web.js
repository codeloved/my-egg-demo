'use strict';

/**
 * 页面相关路由
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.web.index.index);
};

