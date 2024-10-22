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
      text: "环境-配置使用",
      icon: "code",
      prefix: "config.md",
      link: "config.md",
    },
    {
      text: "node.js-配置使用",
      icon: "nodejs",
      prefix: "node/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "c-配置使用",
      icon: "code",
      prefix: "c/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "java-配置使用",
      icon: "code",
      prefix: "java/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/posts/": [
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});