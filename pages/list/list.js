// list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist:[],
    playing:{

    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://yuanyu002.com/playlists',
      success:res=>{
        console.log(res);
        this.setData({playlist : res.data});
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.getBackgroundAudioManager();
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
  
  },

  bindPlay:function(evt){
  //  this.audioCtx.stop();
    const info = evt.target.dataset.info;
    const app = getApp();
    const playing = {
      md5: info.md5,
      images: info.images,
      name: info.fileName,
      author: 'xxx',
      src: `https://yuanyu002.com/play/` + info.md5
    };
    app.globalData.playing = playing;

    this.setData({
      playing: playing
    });
    this.audioCtx.title = info.fileName;
    this.audioCtx.epname = info.fileName;
    this.audioCtx.singer = 'yyapp001';
    this.audioCtx.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'

    this.audioCtx.src = `https://yuanyu002.com/play/` + info.md5;
    //this.audioCtx.play();
  }
})