// 引用货币数据
const exchangeRateMap = require("../../utils/exchange-rate");
//引用全局对象
let app = getApp();

Page({
  data: {
    exchangeList: [], //用于下方列表展示
    baseMoneyKey: "CNY", //保存当前基础货币的key值
    baseExchangeItem: {
      //保存当前基础货币的其他信息
      key: app.baseMoneyKey,
      baseNum: 100,
      name: "人民币 ¥",
    },
  },
  onLoad() {
    //页面初始化时调用
    //初始化列表数据
    // delete exchangeRateMap.CNY;
    const exchangeRateList = [];
    for (let moneyKey of Object.keys(exchangeRateMap)) {
      if (moneyKey === this.data.baseExchangeItem.key) {
        continue;
      }
      exchangeRateList.push({
        key: moneyKey,
        ...exchangeRateMap[moneyKey],
      });
    }
    this.setData({
      exchangeList: exchangeRateList,
    });
  },
  onClickSwitchBaseMoney() {
    wx.navigateTo({
      url: `/pages/choose-base-money/index?curMoneyKey=${this.data.baseExchangeItem.key}`,
    });
  },
  onShow() {
    if (app.baseMoneyKey === this.data.baseExchangeItem.key) {
      return;
    }
    this.data.baseExchangeItem.key = app.baseMoneyKey;
    this.setData({ baseExchangeItem: this.data.baseExchangeItem });
    const baseExchangeItem = this.data.exchangeList.find((item) => {
      if (item.key === app.baseMoneyKey) return true;
    });
    this.onLoad();
    this.setData({
      baseExchangeItem: baseExchangeItem,
    });
  },
});
