Page({

  /**
   * 页面的初始数据
   */
  data: {
    dd:[],
    list:[],
    show:true,
    zongshu:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'list',
      success: function(res) {
        var sk=0;
        console.log(res.data.length)
        
        if (res.data){
          console.log(res)
          that.setData({
              list:res.data,
              show:false
          })
          console.log(that.data.list[0].yo.name)
          for (var i = 0; i <that.data.list.length; ++i) {
            sk += that.data.list[i].yo.jiage * that.data.list[i].yu
           
            
          }
          console.log(sk)
          that.setData({
            zongshu:sk
          })
        }
      },
    })
  },
  shoppings:()=>{
    wx.setStorage({
      key: 'not',
      data: '1',
    })
    wx.switchTab({
      url: '../home/home',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    }) 
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