Page({

  /**
   * 页面的初始数据
   */
  data: {
    dd:[],
    showModalStatus: false,
    animationData: {},
    show: false,
    datas: {},
    showD: false,
    dataD: {},
    nams:[],
    numbers:1
  },
  tabBats:function(){
    wx.switchTab({
      url: '../../pages/home/home',
    })
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
// ~~~~~~~~~~~~~~~~~~~~
//  原价购买
  //显示对话框
  showYuan: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      datas: animation.export(),
      show: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        datas: animation.export()
      })
    }.bind(this), 100)
  },
  //隐藏对话框
  hideYuan: function () {
    // 隐藏遮罩层
   
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      datas: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        datas: animation.export(),
        show: false
      })
    }.bind(this), 200)
    this.setData({
      numbers: 1
    })
  },

  // ~~~~~~~~~~~~~~~~~~~~
  //  积分兑换
  //显示对话框
  showDui: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      dataD: animation.export(),
      showD: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        dataD: animation.export()
      })
    }.bind(this), 100)
  },
  //隐藏对话框
  hideDui: function () {
    // 隐藏遮罩层
 
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      dataD: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        dataD: animation.export(),
        showD: false
      })
    }.bind(this), 200)
    this.setData({
      numbers: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'keys',
      success: function (res) {
        console.log(res)
        that.setData({
          dd: res.data
        })
      },
    })
  },

  jiaNum: function(){
   var num= this.data.numbers;
   num++;
   console.log(num)
  this.setData({
     numbers: num
   })
  },
jianNum:function(){
  var nums = this.data.numbers;
 console.log(nums)
 if (nums>1){
     nums--;
     this.setData({
       numbers: nums
     }) 
  }
},
  jiaru:function(){
  var that = this;
    this.setData({
      show:false
    })
    wx.showLoading({
      title: '添加中...',
    })
    console.log(1)
    setTimeout(function(){
      wx.showToast({
        title: '添加购物车成功～',
      })
    },2000)

    var dats = {};
  wx.getStorage({
    key: 'list',
   complete:function(res){
    if (res.data == undefined || res.data ==null || res.data ==""){
         var myList = [];
      }else{
        var  myList=res.data;
        var k=[];
      }
    
      dats.yo = that.data.dd;
      dats.yu = that.data.numbers;
      if (myList!=""){
        for (var a = 0; a <myList.length;a++){
          if (myList[a].yo['id'] == that.data.dd.id){
               myList.splice(a,1)
          }
        }
        k.push(dats)
        var myList = myList.concat(k);
      
      }else{
        myList.push(dats);
      }
      console.log(myList)
      wx.setStorage({
        key: 'list',
        data: myList
      })

    }
  })
  },
  duiHuan:function(){
    wx.showLoading({
      title: '查询中...',
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showModal({
        title: '消息',
        content: '积分余额不足，无法兑换。你有0积分可用',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }, 2000)

  },

  //用户点击购物车
  gouWuC:function(){
    wx.switchTab({
      url: '../../pages/shoppingCart/shoppingCart',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    })
  },
  ggds:function(){
    wx.removeStorage({
      key: 'list',
      success: function (res) {
        console.log(res.data)
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
  
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '沂源酒庄酒现促销8折起',
      desc: '各类名酒都在沂源酒庄，赶快行动吧，现促销8折起哦',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
        console.log("ok!");
        console.log(res)
      },
      fail: function (res) {
        // 转发失败
        console.log(res)
      }
    }
  }
})