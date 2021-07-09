// pages/team/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    instructor:[
      {
        id:0,
        name:"皮卡丘",
        image:"/image/pikaqiu.png",
        intro:"/image/pikaqiu_intro.png"
      },
      {
        id:1,
        name:"皮卡丘",
        image:"/image/pikaqiu.png",
        intro:"/image/pikaqiu_intro.png"
      },
      {
        id:2,
        name:"皮卡丘",
        image:"/image/pikaqiu.png",
        intro:"/image/pikaqiu_intro.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"GetTeamMem",
      data:{
        majorId:1
      }
    }).then(res => {
      console.log("获取成功");
      console.log(res);
      // this.setData({
      //   instructor:res.result.data,
      // });
    })
  },
  handleIndexShowChange(e){
    const {index} = e.detail;
    let list = this.data.indexShow;
    list.forEach((v,i) => i===index ? v.isActive = true : v.isActive = false);
    this.setData({
      indexShow:list
    })
  },
})