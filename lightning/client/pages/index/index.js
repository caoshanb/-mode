//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        currentTab: 0,
        numbers:0,
        list:[],
        names:{},
        clickMe: function () {
          this.setData({ msg: "搭噶好！ World" })
        }
    },
onLoad:function(options){
 this.setData({
   names:options
 })
  // var that = this;
  // wx.request({
  //   url: "http://m.kugou.com/app/i/getSongInfo.php?hash=2b616f6ab9f8655210fd823b900085cc&cmd=playInfo",
  //       data:{},
  //       method:"GET",
  //       success:function(res){
  //         console.log(res.data)
  //         that.setData({
  //             list:res.data,
  //         });
  //       }
  // })
  var that = this;
  wx.request({
    url: "https://api.hibai.cn/api/index/index",
    data:
    { "TransCode": "020111", "OpenId": "Test", "Body": { "SongListId": "141998290" } },
    method: "POST",
    success: function (res) {
      console.log(res.data.Body.songs)
     
         that.setData({
           list: res.data.Body.songs
          });
    }
  })



},

//滑动切换
swiperTab: function (e) {
  var that = this;
  that.setData({
    currentTab: e.detail.current
  });
},
//点击切换
clickTab: function (e) {
  var that = this;
  if (this.data.currentTab === e.target.dataset.current) {
    return false;
  } else {
    that.setData({
      currentTab: e.target.dataset.current
    })

  }
},
inputsk:function(event){
 var that=this;
  var text = event.detail.value;
  console.log(text)
 wx.request({
   url: "https://api.hibai.cn/api/index/index",
   data: 
   {"TransCode": "020111", "OpenId": "Test", "Body": { "SongListId": "141998290" } },
   method: "POST",
   success: function (res) {
     console.log(res)
    //  that.setData({
    //    gequ: res.data.result.songs[0]
    //  })
   }
 })
}



})