import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/demo/",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  "/config/": [
    {
      text: "node.js-配置使用",
      collapsible: true,
        // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
        // 必要的，分组的子项目
      icon: "laptop-code",
     prefix: "node/",
      children: [
        "1.md",
        "2.md",
        "3.md"
      ],
    },
    {
      text: "c-配置使用",
      collapsible: true,
        // 可选的。设置分组是否默认展开，默认值是 false
      expanded: false,
        // 必要的，分组的子项目
      icon: "laptop-code",
      prefix: "c/",
      children: [
        "1.md",
        "2.md"
      ],
    },

  ]
});
// {
//   text: "文章",
//   icon: "book",
//   prefix: "posts/",
//   children: "structure",
// },