// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "zh";
export const SITE_TAB = "MFCompany";
export const SITE_TITLE = "MFCompany 🧊";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "MFCompany";
export const USER_SITE = "https://mfblog.pages.dev/"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://mfblog.pages.dev/";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友情链接",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "邮箱",
    href: "mailto:1785553865@qq.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://afdian.net/a/saroprock",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "ri:cup-line",
  },
  {
    href: "https://github.com/MuFengStudio",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://space.bilibili.com/1402340395",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];
