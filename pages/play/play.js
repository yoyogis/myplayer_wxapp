// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false,
    playing:null,
    imageUrl:"https://yuanyu002.com/images/",
    imageIndex:-1,
    imageHight:200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audioCtx = wx.getBackgroundAudioManager();
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
    const app = getApp();
    if(app.globalData.playing){
      this.setData({
        playing: app.globalData.playing,
        isPlaying: !this.audioCtx.paused
      }); 

      if(this.data.playing.images.length){
        this.setData({
          imageIndex:0
        })
      }
    }
    
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
  
  },

  play:function(){
    let toPlay = !this.data.isPlaying;
    if(toPlay){
      this.audioCtx.play();
    }else{
      this.audioCtx.pause();
    }
    
    this.setData({
      isPlaying: toPlay
    })
  },

  preImage:function(){
    this.setData({
      imageIndex: Math.max(this.data.imageIndex-1,0)
    })
  },

  nextImage: function () {
    this.setData({
      imageIndex: Math.min(this.data.imageIndex + 1, this.data.playing.images.length-1)
    })
  },

  imageLoaded:function(evt){
    this.setData({
      imageHight:evt.detail.height
    })
  }
})