'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

//注：开发环境修改变量后重启服务才会生效
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://hyperf-chat.jayjay.cn"',
  WEB_SOCKET_URL: '"wss://hyperf-chat.jayjay.cn"',
});
