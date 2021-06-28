//index.js
Page( {
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: config.telphone,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  onLoad: function() {
    // var that = this;
	
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo( function( userInfo ) {
    //   //更新数据
    //   that.setData( {
    //     userInfo: userInfo
    //   })
    // })
  },

  goToCollection: function() {
    wx.navigateTo({ url: '/pages/collection/index', })
  }
})