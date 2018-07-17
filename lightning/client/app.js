//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var globalData= {
  naem: '',
  id: '',
  userInfo: null
}
App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})

