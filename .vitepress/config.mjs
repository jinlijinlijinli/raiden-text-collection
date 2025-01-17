import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/raiden-text-collection/',
  //base: '/', 网站部署的路径，默认根目录
  // base: '/vitepress/', //网站部署到github的vitepress这个仓库里
  head: [["link", { rel: "icon", href: "/public/logo.png" }]],
  lang: 'zh-CN',
  title: "雷电将军文本收录",
  description: "Text Collection",
  appearance: 'dark',
  themeConfig: {
    darkModeSwitchLabel: '深浅模式',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      level: [2, 4], // 显示2-4级标题
      label: '当前页大纲' // 文字显示
    },
    //左上角logo
    logo: "/avatar.png",
    //顶部导航
    nav: [
      { text: '主页', link: '/' },
      {
        text: '其他',
        items: [
          { text: '主体', link: '' },
          { text: '通用', link: '' },
          { text: '方法', link: '' },
          { text: '扩展', link: '' }
        ]
      },
      { text: '资源', link: '' },
      { text: '示例', link: '' },
    ],
    sidebarMenuLabel: '目录',
    sidebar: [
      {
        
        //分组标题1
        text: '一、角色资料',
        collapsible: true, // 启用折叠功能
        collapsed: true, // 默认展开（可以设置为 true，默认折叠）
        items: [
          { text: '1.1 角色-资料页', link: '/01 角色资料/1.1 角色-资料页.md' },
          { text: '1.2 故事', link: '/01 角色资料/1.2 角色故事.md' },
          { text: '1.3 语音', link: '/01 角色资料/1.3 语音.md' },
          { text: '1.4 装扮-衣装', link: '/01 角色资料/1.4 装扮-衣装.md' },
          { text: '1.5 名片', link: '/01 角色资料/1.5 名片.md' },
          { text: '1.6 特色料理', link: '/01 角色资料/1.6 特色料理.md' },
          { text: '1.7 活动祈愿名', link: '/01 角色资料/1.7 活动祈愿名.md' },
          { text: '1.8 命之座-天赋', link: '/01 角色资料/1.8 命之座-天赋.md' },
          { text: '1.9 角色登场立绘介绍', link: '/01 角色资料/1.9 角色登场立绘介绍.md' },
          { text: '1.10 生日', link: '/01 角色资料/1.10 生日.md' },
          { text: '1.11 活动-角色介绍', link: '/01 角色资料/1.11 活动-角色介绍.md' },
          { text: '1.12 角色PV', link: '/01 角色资料/1.12 角色PV.md' },
          { text: '1.13 角色演示', link: '/01 角色资料/1.13 角色演示.md' },
          { text: '1.14 拾枝杂谈', link: '/01 角色资料/1.14 拾枝杂谈.md' },
          { text: '1.15 官方EP', link: '/01 角色资料/1.15 官方EP.md' },
        ],
      },
      {
        //分组标题2
        text: '二、角色个人资料中相关内容',
        collapsible: true, // 启用折叠功能
        collapsed: true, // 默认展开（可以设置为 true，默认折叠）
        items: [
          { text: '2.1 九条裟罗', link: '/02 角色个人资料中相关内容/2.1 九条裟罗.md' },
          { text: '2.2 流浪者', link: '/02 角色个人资料中相关内容/2.2 流浪者.md' },
          { text: '2.3 早柚', link: '/02 角色个人资料中相关内容/2.3 早柚.md' },
          { text: '2.4 八重神子', link: '/02 角色个人资料中相关内容/2.4 八重神子.md' },
          { text: '2.5 钟离', link: '/02 角色个人资料中相关内容/2 5 钟离.md' },
          { text: '2.6 温迪', link: '/02 角色个人资料中相关内容/2.6 温迪.md' },
          { text: '2.7 枫原万叶', link: '/02 角色个人资料中相关内容/2.7 枫原万叶.md' },
          { text: '2.8 神里绫华', link: '/02 角色个人资料中相关内容/2.8 神里绫华.md' },
          { text: '2.9 宵宫', link: '/02 角色个人资料中相关内容/2.9 宵宫.md' },
          { text: '2.10 珊瑚宫心海', link: '/02 角色个人资料中相关内容/2.10 珊瑚宫心海.md' },
          { text: '2.11 托马', link: '/02 角色个人资料中相关内容/2.11 托马.md' },
          { text: '2.12 五郎', link: '/02 角色个人资料中相关内容/2.12 五郎.md' },
          { text: '2.13 荒泷一斗', link: '/02 角色个人资料中相关内容/2.13 荒泷一斗.md' },
          { text: '2.14 神里绫人', link: '/02 角色个人资料中相关内容/2.14 神里绫人.md' },
          { text: '2.15 久岐忍', link: '/02 角色个人资料中相关内容/2.15 久岐忍.md' },
          { text: '2.16 纳西妲', link: '/02 角色个人资料中相关内容/2.16 纳西妲.md' },
          { text: '2.17 绮良良', link: '/02 角色个人资料中相关内容/2.17 绮良良.md' },
          { text: '2.18 千织', link: '/02 角色个人资料中相关内容/2.18 千织.md' },
          { text: '2.19 旅行者(空_荧)', link: '/02 角色个人资料中相关内容/2.19 旅行者（空_荧）.md' },
          { text: '2.20 玛薇卡', link: '/02 角色个人资料中相关内容/2.20 玛薇卡.md' },
          { text: '2.21 茜特菈莉', link: '/02 角色个人资料中相关内容/2.21 茜特菈莉.md' }
        ],
      },
      {
        //分组标题3
        text: '三、任务相关文本',
        collapsible: true, // 启用折叠功能
        collapsed: true, // 默认false展开（可以设置为 true，默认折叠）
        items: [
          // { text: '3.1 魔神任务', link: '/03 任务相关文本/3.1 魔神任务.md' },
          {
            text: '3.1 魔神任务', // 子分组标题
            collapsible: true, // 启用折叠功能
            collapsed: true, // 默认false展开（可以设置为 true，默认折叠）
            items: [
              { text: '3.1.1 蒙德 序章 第二幕 为了没有眼泪的明天', link: '/03 任务相关文本/3.1.1 蒙德 序章 第二幕.md' },
              { text: '3.1.2 璃月 第一章 第二幕 辞行久远之躯', link: '/03 任务相关文本/3.1.2 璃月 第一章 第二幕.md' },
              { text: '3.1.3 璃月 第一章 第三幕 迫近的客星', link: '/03 任务相关文本/3.1.3 璃月 第一章 第三幕.md' },
              { text: '3.1.4 稻妻 第二章 序幕 振袖秋风问红叶', link: '/03 任务相关文本/3.1.4 稻妻 第二章 序幕.md' },
              { text: '3.1.5 稻妻 第二章 第一幕 不动鸣神，恒常乐土', link: '/03 任务相关文本/3.1.5 稻妻 第二章 第一幕.md' },
              { text: '3.1.6 稻妻 第二章 第二幕 无念无想，泡影断灭', link: '/03 任务相关文本/3.1.6 稻妻 第二章 第二幕.md' },
              { text: '3.1.7 稻妻 第二章 第三幕 千手百眼，天下人间', link: '/03 任务相关文本/3.1.7 稻妻 第二章 第三幕.md' },
              { text: '3.1.8 须弥 第三章 第五幕 虚空鼓动，劫火高扬', link: '/03 任务相关文本/3.1.8 须弥 第三章 第三幕.md' },
              { text: '3.1.9 须弥 第三章 第四幕 赤土之王与三朝圣者', link: '/03 任务相关文本/3.1.9 须弥 第三章 第四幕.md' },
              { text: '3.1.10 须弥 第三章 第五幕 虚空鼓动，劫火高扬', link: '/03 任务相关文本/3.1.10 须弥 第三章 第五幕.md' },
              { text: '3.1.11 间章 第三幕 倾落伽蓝 ', link: '/03 任务相关文本/3.1.11 间章 第三幕.md' }
            ]
          },
          {
            text: '3.2 传说任务', // 子分组标题
            collapsible: true, // 启用折叠功能
            collapsed: true, // 默认false展开（可以设置为 true，默认折叠）
            items: [
              { text: '3.2.1 雷电将军传说任务 -- 天下人之章·第一幕「影照浮世风流」', link: '/03 任务相关文本/3.2.1 雷电将军传说任务 天下人之章·第一幕.md' },
              { text: '3.2.2 雷电将军传说任务 -- 天下人之章·第二幕「须臾百梦」', link: '/03 任务相关文本/3.2.2 雷电将军传说任务 天下人之章·第二幕.md' },
              { text: '3.2.3 璃月 第一章 第三幕 迫近的客星', link: '/03 任务相关文本/3.1.3 璃月 第一章 第三幕.md' },
              { text: '3.2.4 稻妻 第二章 序幕 振袖秋风问红叶', link: '/03 任务相关文本/3.1.4 稻妻 第二章 序幕.md' },
              { text: '3.2.5 稻妻 第二章 第一幕 不动鸣神，恒常乐土', link: '/03 任务相关文本/3.1.5 稻妻 第二章 第一幕.md' },
              { text: '3.2.6 稻妻 第二章 第二幕 无念无想，泡影断灭', link: '/03 任务相关文本/3.1.6 稻妻 第二章 第二幕.md' },
              { text: '3.2.7 稻妻 第二章 第三幕 千手百眼，天下人间', link: '/03 任务相关文本/3.1.7 稻妻 第二章 第三幕.md' },
              { text: '3.2.8 须弥 第三章 第五幕 虚空鼓动，劫火高扬', link: '/03 任务相关文本/3.1.8 须弥 第三章 第三幕.md' },
              { text: '3.2.9 须弥 第三章 第四幕 赤土之王与三朝圣者', link: '/03 任务相关文本/3.1.9 须弥 第三章 第四幕.md' },
              { text: '3.2.10 须弥 第三章 第五幕 虚空鼓动，劫火高扬', link: '/03 任务相关文本/3.1.10 须弥 第三章 第五幕.md' },
              { text: '3.2.11 间章 第三幕 倾落伽蓝 ', link: '/03 任务相关文本/3.1.11 间章 第三幕.md' }
            ]
          },

        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jinlijinlijinli' },
      {
        icon: {
          svg: '<svg t="1712563369533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5180" width="128" height="128"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="5181"></path></svg>'
        },
        link: 'https://space.bilibili.com/11165777'
      }
    ],

    // 搜索框样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    markdown: {
      container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息'
      },
      image: {
        // 开启图片懒加载
        lazyLoading: true
      }
    },

    footer: {
      copyright: "Copyright@ 2024 Jinli"
    }
  }
})
