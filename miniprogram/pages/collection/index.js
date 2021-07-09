// pages/collection/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    instructor: [
      {
        id:0,
        name:"皮卡丘1",
        photo:"/image/pikaqiu.png",
        intro:"/image/pikaqiu_intro.png",
        person:150,
        rank:4.5
      },

      {
        id:1,
        name:"皮卡丘2",
        photo:"/image/pikaqiu.png",
        intro:"/image/pikaqiu_intro.png",
        person:200,
        rank:4.3
      },

      {
        id:2,
        name:"皮卡丘3",
        photo:"/image/pikaqiu.png",
        intro:"/image/pikaqiu_intro.png",
        person:1000,
        rank:5.0
      }
    ],
    icon_person:"/image/icon_person.png",
    icon_rank:"/image/icon_rank.png",
    univ:"University of California, Berkely"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})