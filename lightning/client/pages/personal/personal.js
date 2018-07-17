Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userImg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            userName: res.userInfo.nickName,
            userImg: res.userInfo.avatarUrl
          })
        }
      })
  },
  gouwulan:()=>{
    wx.switchTab({
      url: '../../pages/shoppingCart/shoppingCart',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
      })

  },
  kaifa:()=>{
    wx.navigateTo({
      url: '../../pages/Development/Development',
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