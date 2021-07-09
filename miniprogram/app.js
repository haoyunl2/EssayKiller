//app.js
App({
  onLaunch: function () {
    // 初始化云函数环境
    wx.cloud.init({
      // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
      env: 'essay-polisher-1g30n3m6d47fe0e3',
      traceUser: true,
    })

    console.log('App Launch')
      //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init({
      traceUser: true,
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    userInfo: null
  },
})