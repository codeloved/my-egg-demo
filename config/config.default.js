/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558582828406_7301';

  // add your middleware config here
  config.middleware = [ 'errorPage', 'errorHandle' ];

  config.debug = true;

  config.JAVADOMAIN = 'java domain';

  config.onerror = {
    html(err, ctx) {
      // html hander
      ctx.body = '<h3>error</h3>';
      ctx.status = 500;
    },
    json(err, ctx) {
      // json hander
      ctx.body = { message: 'error' };
      ctx.status = 500;
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    defaultExtension: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
