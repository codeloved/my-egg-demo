'use strict';

const status = [ 404, 403 ];

module.exports = () => {
  return async function errorPage(ctx, next) {
    await next();
    if ((status.indexOf(ctx.status) > -1) && !ctx.body) {
      const { message } = ctx;
      if (ctx.acceptJSON) {
        ctx.body = { error: 'Not Found' };
      } else {
        await ctx.render('404.nj', { error: message });
      }
    }
  };
};
