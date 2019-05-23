'use strict';
/**
 * 转发相关api
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/username', controller.api.post.username);
};
