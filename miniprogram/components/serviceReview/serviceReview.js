// components/serviceReview/servieceReview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    reviews:{
      type:"Array",
      data:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached:function(){
    console.log(this.properties.reviews);
  }
})
