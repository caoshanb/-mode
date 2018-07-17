var app=getApp();

Page({
  data:{
    imgUrl:[
      '../../image/time1.jpeg',
      '../../image/time2.jpg'
    ],
    list:[{
      num:7822,
      jifen: 650,
      img:'../../image/0.png',
      id:0,
      jiage: 190, 
      name:"珍藏酿香"
    },
      {
        num: 6901,
        jifen: 730,
        img: '../../image/1.png',
        id: 1,
        jiage: 130,
        name: "珍藏酿香"
      },
      {
        num: 4032,
        jifen: 1650,
        img: '../../image/2.png',
        id: 2,
        jiage: 400,
        name: "珍藏酿香"
      },
      {
        num: 2120,
        jifen: 2020,
        img: '../../image/3.jpg',
        id: 3,
        jiage: 700,
        name: "珍藏酿香"
      },
      {
        num:6210,
        jifen: 2550,
        img: '../../image/4.png',
        id: 4,
        jiage: 880,
        name: "珍藏酿香"
      },
      {
        num: 4332,
        jifen: 820,
        img: '../../image/5.png',
        id: 5,
        jiage:259,
        name: "珍藏酿香"
      },
      {
        num: 1032,
        jifen: 850,
        img: '../../image/6.png',
        id: 6,
        jiage: 210,
        name: "珍藏酿香"
      },
      {
        num: 832,
        jifen: 890,
        img: '../../image/7.png',
        id: 7,
        jiage: 230,
        name: "珍藏酿香"
      }, {
        num:729,
        jifen: 620,
        img: '../../image/8.png',
        id: 8,
        jiage: 170,
        name: "珍藏酿香"
      }, {
        num: 425,
        jifen: 1980,
        img: '../../image/9.png',
        id: 9,
        jiage: 681,
        name: "珍藏酿香"
      }],
    indicator:true,
    phones:13217692203
 

  },
  onLoad: function (options){
    
    wx.getStorage({
      key: 'not',
      success: function(res) {
        //指定滚动条
        wx.pageScrollTo({
          scrollTop: 545,
        })
      },
       complete:function(){
        //删除本地缓存
        wx.removeStorage({
          key: 'not',
          success: function (res) {
          },
        })
      }
    })
    
  
  },
  phoneCode:()=>{
    var that=this;
    wx.makePhoneCall({
      phoneNumber:"13217692203",
    success:()=>{
      console.log("拨打电话成功！") 
    }
    })
  },
  chuancan:(e)=>{
      wx.setStorage({
        key: 'keys',
        data: e.currentTarget.dataset.id
      })
      wx.navigateTo({
        url: '../commodity/commodity',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    }) 

  }

}) 