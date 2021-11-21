import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1,10)",
    createDate: Date.now(),
    "avatar|1": [
      "http://img2.woyaogexing.com/2021/04/30/f559055ca1434dc0b8e08b602d031bf2%21400x400.jpeg",
      "https://p.qqan.com/up/2020-10/16038655617357481.jpg",
      "https://p.qqan.com/up/2020-10/16038655612991102.jpg",
      "https://p.qqan.com/up/2020-10/16038655845134809.jpg",
      "https://p.qqan.com/up/2020-10/16038656513174848.jpg",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1,10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://p.qqan.com/up/2020-10/16038655617357481.jpg",
            "https://p.qqan.com/up/2020-10/16038655612991102.jpg",
            "https://p.qqan.com/up/2020-10/16038655845134809.jpg",
            "https://p.qqan.com/up/2020-10/16038656513174848.jpg",
          ],
        },
      ],
    },
  });
});
