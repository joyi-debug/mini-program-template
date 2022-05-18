// app.js
const settingUtil = require("./utils/setting-util");
App({
  baseMoneyKey: "CNY",
  onLaunch: function () {
    //在app.js初始化时，加载全局的基础货币设置
    //从storage中获取默认货币key
    this.baseMoneyKey = settingUtil.getBaseMoneyKey();
    console.log(this.baseMoneyKey);
  },
});
