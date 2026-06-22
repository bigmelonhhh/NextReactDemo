export const zhuofanAsset = (path: string) => `/images/zhuofan/${path}`;

export const navItems = [
  { label: "首页", href: "#home" },
  {
    label: "解决方案",
    href: "#solutions",
    children: [
      "一网通办解决方案",
      "一网统管解决方案",
      "数字乡村解决方案",
      "智慧园区解决方案",
      "数字政府咨询规划",
    ],
  },
  { label: "客户案例", href: "#cases" },
  { label: "资讯动态", href: "#news" },
  {
    label: "关于我们",
    href: "#about",
    children: ["公司简介", "发展历程", "荣誉资质", "合作伙伴", "文化活动"],
  },
  {
    label: "招贤纳士",
    href: "#jobs",
    children: ["人才招聘", "人才培养", "薪酬福利"],
  },
];

export const heroSlides = [
  {
    image: zhuofanAsset("img/newIndexOne/2.png"),
    alt: "超级绿窗整体解决方案",
  },
  {
    image: zhuofanAsset("img/newIndexOne/2.jpg"),
    alt: "数字政务服务解决方案",
  },
  {
    image: zhuofanAsset("img/newIndexOne/3.png"),
    alt: "责任同心筑梦行久远",
  },
  {
    image: zhuofanAsset("img/newIndexOne/4.png"),
    alt: "卓繁信息数字政府解决方案",
  },
];

export const newsItems = [
  {
    title: "刷到了！央媒聚焦：数智赋能 · 卓繁信息助力政府服务与社会治理实现中国式现代化",
    date: "2023-5-4",
    year: "2023",
    month: "5-4",
    summary: "数字中国春潮涌，扬帆远航向未来！",
    image: zhuofanAsset("img/0504/big-banner.jpg"),
    featured: true,
  },
  {
    title: "阵容豪华，声势浩大！卓繁第三代政务服务数智大厅首次亮相DCSE",
    date: "2023-4-28",
    summary: "卓繁信息，6B03展台，敬请惠临!",
  },
  {
    title: "喜报｜卓繁信息荣登2022年上海市专精特新中小企业复核公示名单",
    date: "2023-4-4",
    summary: "近日，上海市经济和信息化委员会公布2022年度上海市“专精特新”中小企业名单......",
  },
  {
    title: "芜湖港航数字化升级，打造智能航运新生态",
    date: "2022-2-27",
    summary: "优化营商环境，为企为民办实事。",
  },
];

export const caseItems = [
  { title: "无差别综合一窗", area: "西藏自治区，四川省" },
  { title: "24小时自助服务", area: "上海市徐汇区，重庆市巴南区" },
  { title: "智慧大厅", area: "青海省西宁市，成都市高新区" },
  { title: "工程建设项目审批", area: "西藏自治区拉萨市，河南省商丘市" },
  { title: "一件事一次办", area: "内蒙古自治区鄂尔多斯市，湖南省郴州市" },
  { title: "基层延伸", area: "湖北省襄阳市，浙江省舟山市" },
];

export const solutionItems = [
  {
    title: "一网通办解决方案",
    description:
      "藉由完善的政务应用、支撑及终端赋能方案提升平台能力，全面深化数据治理，持续改善用户体验，推动“一网通办”改革在政务服务领域深化拓展",
    icon: zhuofanAsset("img/solution-new/icon/yw.png"),
    iconActive: zhuofanAsset("img/solution-new/icon/yws.png"),
  },
  {
    title: "数字乡村解决方案",
    description:
      "依托信息惠民服务一体化平台提供各类综合服务，为政府提供基层管理抓手，实现“小事不出村、大事不出镇”的数字乡村便民惠民服务愿景",
    icon: zhuofanAsset("img/solution-new/icon/xc.png"),
    iconActive: zhuofanAsset("img/solution-new/icon/xcs.png"),
  },
  {
    title: "一网统管解决方案",
    description:
      "聚焦城市治理现代化建设及应用实施，构建数字资产利用及多技术融合的一体化平台，实现“观、管、防、处”理念下的智能化管理和全方位监控",
    icon: zhuofanAsset("img/solution-new/icon/tg.png"),
    iconActive: zhuofanAsset("img/solution-new/icon/tgs.png"),
  },
  {
    title: "智慧园区解决方案",
    description:
      "融合新一代信息与通信技术，赋能园区实现及时、可互动、易整合的信息感知、传递及处理，提高园区内产业聚合能力及入驻企业市场竞争能力",
    icon: zhuofanAsset("img/solution-new/icon/zh.png"),
    iconActive: zhuofanAsset("img/solution-new/icon/zhs.png"),
  },
  {
    title: "数字政府咨询规划",
    description:
      "以“聚政事、解政题、服政业”为使命，聚焦“数字政府”的政策环境、业务模式、应用场景、技术标准，预见其发展趋势，为“数字政府”建设提供完整咨询解决方案和技术支撑",
    icon: zhuofanAsset("img/solution-new/icon/gov.png"),
    iconActive: zhuofanAsset("img/solution-new/icon/govs.png"),
  },
];

export const footerLinks = ["公司简介", "荣誉资质", "文化活动", "人才招聘"];

export const contactInfo = [
  "地址：上海市徐汇区桂平路418号A座21层",
  "电话：021-60748199",
  "邮编：200235",
  "传真：021-60748199转3103",
];
