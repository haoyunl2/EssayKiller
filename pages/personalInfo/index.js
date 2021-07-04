// pages/personalInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesrc : "../../image/tom.png",
    name: "tom",
    ind: 0,
    gender: ['男性','女性' ],
    nickname: "tommy",
    birthday: "1999-06-02",
    email: "tom1@qq.com",
    univer: 'UCB',
    ind_uni: 1,
    major: ['CS','MATH','DATA SCIENCE' ],
    ind_maj: 0
  },

  goback(){
    wx.switchTab({
      url: '/pages/contact/index',
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ind: e.detail.value
    })
  },
  bindPickerChange_uni: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ind_uni: e.detail.value
    })
  },
  bindPickerChange_maj: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ind_maj: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      birthday: e.detail.value
    })
  },
  changename: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  changenickname: function(e){
    this.setData({
      nickname: e.detail.value
    })
  },
  changemail: function(e){
    this.setData({
      email: e.detail.value
    })
  },

  changeuniver: function(e){
    this.setData({
      univer: e.detail.value
    })
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