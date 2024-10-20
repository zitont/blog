import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import markdownItTaskLists from "markdown-it-task-lists";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "博客演示",
  description: "zitont的博客演示",

  theme,

  extendsMarkdown: (md) => {
    // 使用静态导入的插件
    md.use(markdownItTaskLists);
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});