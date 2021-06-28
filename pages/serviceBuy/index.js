// pages/essaySelection/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[
      {
        image_src:"../../image/serviceBg.jpeg",
        id:0,
        ZHtitle:"语法修改",
        ENtitle:"Grammar to modify",
        price:200,
        descript:"对文书中的语法进行优化，让文书中的使用语言更专业，更流畅",
        time:"服务时长:1稿/3天,加急2天"
      },
      {
        image_src:"../../image/serviceBg.jpeg",
        id:1,
        ZHtitle:"语法修改",
        ENtitle:"Grammar to modify",
        price:200,
        descript:"对文书中的语法进行优化，让文书中的使用语言更专业，更流畅",
        time:"服务时长:1稿/3天,加急2天"
        },
        {
          image_src:"../../image/serviceBg.jpeg",
          id:2,
          ZHtitle:"语法修改",
          ENtitle:"Grammar to modify",
          price:200,
          descript:"对文书中的语法进行优化，让文书中的使用语言更专业，更流畅",
          time:"服务时长:1稿/3天,加急2天"
          },
    ],
    current:0,
    reviews:[
      {
        avatarUrl:"../../image/avatar.png",
        content:"导师专业平台帅气开发者牛逼导师专业平台帅气开发者牛逼导师专业平台帅气开发者牛逼导师专业平台帅气开发者牛逼",
        id:12345678
      },
      {
        avatarUrl:"../../image/avatar.png",
        content:"导师专业平台帅气开发者牛逼导师专业平台帅气开发者牛逼导师专业平台帅气开发者牛逼导师专业平台帅气开发者牛逼",
        id:12345678
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  displayMain(e){
    console.log(e.detail);
    this.setData({
      current:e.detail.current
    });
  }
})