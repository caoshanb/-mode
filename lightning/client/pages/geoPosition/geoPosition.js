Page({

  /**
   * 页面的初始数据
   */
  data: {
    lnt:' 114.12897352184292',
    lat:'22.640173784094728',
    markers: [{
      latitude:'22.640173784094728',
      longitude:"114.12897352184292"

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      altitude: "true",
      success: function (res) {
        console.log(res.latitude)
        that.setData({
          lnt: res.longitude,
          lat: res.latitude
        })
      }
    })
  },

positions:function(){
  var that = this;
  wx.getLocation({
    type: 'gcj02',
    altitude:"true",
    success: function (res) {
      console.log(res)
      var latitude = 22.640173784094728;
      var longitude = 114.12897352184292 ;
      var speed = res.speed;
      var accuracy = res.accuracy;
      wx.openLocation({
        latitude: latitude,
        longitude: longitude,
        scale: 28,
        name:"李朗国际珠宝园",
        address:"深圳市龙岗区李朗国际珠宝产业园A1栋"
      })
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