//index.js
//获取应用实例
Page( {
  data: {
    swiperUrlArry:[],
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
        name:"皮卡丘1",
        photo:"/image/pikaqiu.png",
        person:150,
        rank:4.5,
        role:"本科生",
        univWord:"加州大学伯克利",
        service:"本科文书"
      },

      {
        id:1,
        name:"皮卡丘2",
        photo:"/image/pikaqiu.png",
        person:150,
        rank:4.5,
        role:"研究生",
        univWord:"南加州大学",
        service:"本科文书/留学咨询"
      },

      {
        id:2,
        name:"皮卡丘3",
        photo:"/image/pikaqiu.png",
        person:150,
        rank:4.5,
        role:"博士生",
        univWord:"哥伦比亚大学",
        service:"本科文书/转学文书"
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
	
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"GetSwiperImage"
    })
    .then(res => {
      console.log("获取轮播图成功", res)
      this.setData({
        swiperUrlArry:res.result
      })
    })
    .catch(res => {
      console.log("获取轮播图失败", res)
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
