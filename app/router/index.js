'use strict';

module.exports = app => {
  require('./web/web.js')(app);
  require('./api/api.js')(app);
};
