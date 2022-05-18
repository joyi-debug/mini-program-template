//choose-base-money的js文件
//引入汇率数据
const exchangeRateMap = require("../../utils/exchange-rate");
//引入存取函数
const settingUtil = require("../../utils/setting-util");
//引用全局对象
let app = getApp();

Page({
  data: {
    curMoneyKey: "CNY",
    exchangeList: [],
  },
  onLoad(options) {
    //初始化列表数据
    const exchangeRateList = [];
    for (let moneyKey of Object.keys(exchangeRateMap)) {
      exchangeRateList.push({
        key: moneyKey,
        ...exchangeRateMap[moneyKey],
      });
    }
    this.setData({
      exchangeList: exchangeRateList,
      curMoneyKey: options["curMoneyKey"],
    });
  },
  onChooseBaseMoney(event) {
    //从event中获取当前点击货币的key，并更新到app中
    const baseMoneyKey = event.currentTarget.dataset["moneyKey"];
    app.baseMoneyKey = baseMoneyKey;
    //保存设置
    settingUtil.saveBaseMoneyKey(baseMoneyKey);
    wx.navigateBack();
  },
});
