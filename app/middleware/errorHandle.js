'use strict';

module.exports = (options, app) => {
  return async function errorHandle(ctx, next) {
    try {
      await next();
    } catch (error) {
      // 在next()之后捕获异常,此时可以捕获到controller和service之中的异常,因为next执行的就是里面的
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      app.emit('error', error, this);
      const status = error.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error_msg = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : error.message;
      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error_msg };
      ctx.body.success = false;
      if (status === 422) {
        ctx.body.detail = error.errors;
      }
      ctx.status = status;
    }
  };
};
