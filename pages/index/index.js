//index.js
//获取应用实例
var app = getApp();
var config = require("../../config.js");
Page( {
  data: {
    images: [
    '/image/tom.png',
    '/image/tom_and_jerry.png',
    '/image/lunbotu.png',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    navs: [
      {
        id:'0',
        url:'/pages/list/index',
        image: '/image/undergraduate.png',
        text: '本科文书'
      },

      {
        id:'1',
	      url:'/pages/strength/index',
        image: '/image/transfer.png',
        text: '转学文书'
      },

      {
        id:'2',
		    url:'/pages/mien/index',
        image: '/image/schoolselection.png',
        text: '选校推荐'
      },

      {
        id:'3',
		    url:'/pages/contact/index',
        image: '/image/cv.png',
        text: '简历润色'
      }
    ],
    
    indexShow: [
      {
        id:0, 
        name:"导师团队展示",
        image:"/image/index_instructor5.png",
        unclickImage:"/image/index_instructor_unclick.png",
        isActive:true
      },

      {
        id:1,
        name:"留学经验分享",
        image:"/image/index_experience1.png",
        unclickImage:"/image/index_experience_unclick.png",
        isActive:false
      }
    ],
      
    instructor: [
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
    ],
    
    experience: [
      {
        id:0,
        image:"/image/experience1.png"
      },

      {
        id:1,
        image:"/image/experience2.png"
      }
    ]
  },
	
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
    var that = this;
	console.log(config.courses);
	that.setData({courses:config.courses});
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },

  handleIndexShowChange(e){
    const {index} = e.detail;
    let list = this.data.indexShow;
    list.forEach((v,i) => i===index ? v.isActive = true : v.isActive = false);
    this.setData({
      indexShow:list
    })
  }

})
