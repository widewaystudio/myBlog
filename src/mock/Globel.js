import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://img.zcool.cn/community/01c3d55e7713a8a80120a89510edcc.jpg@1280w_1l_2o_100sh.jpg",
    siteTile: "程序猿的小窝",
    github: "https://github.com/DuYi-Edu",
    qq: "343807393",
    qqQ: "http://pic.qcsdn.com/img/20190527/a451fc18b13bd77825cec3c23c985a18.png-zhu",
    weixin: "yh77bao",
    mail: "349807393@qq.com",
    icp: "津2019024544",
    gitHubName: "wideway",
    favicon: "https://github.com/wideway",
  },
});
