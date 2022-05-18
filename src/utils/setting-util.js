const BASE_MONEY_KEY = "baseMoney";
const DEFAULT_MONEY_KEY = "CNY";

//保存基础货币key的函数
function saveBaseMoneyKey(baseMoneyKey) {
  //将用户选择的基础货币保存至storage
  wx.setStorageSync(BASE_MONEY_KEY, baseMoneyKey);
}

//获取基础货币的函数
function getBaseMoneyKey() {
  return wx.getStorageSync(BASE_MONEY_KEY) || DEFAULT_MONEY_KEY;
}

module.exports = {
  saveBaseMoneyKey,
  getBaseMoneyKey,
};
