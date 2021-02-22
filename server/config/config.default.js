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
  config.keys = appInfo.name + '_1613553330712_7989';

  // add your middleware config here
  config.middleware = [];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // cors
  config.security = {
    csrf:{
      enable:false,
    },
    domainWhiteList:['*']
  }
  config.cors = {
    origin:'*',
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }
  config.mongoose = {
    url: 'mongodb://106.12.59.185:27017/admin',
    options: {},
  };
  // // config/config.default.js
  return {
    ...config,
    ...userConfig,
  };
};
