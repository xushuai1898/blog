module.exports = {
  base: '/',
  title: 'Megatron7的博客',
  description: '读更多的书，遇见更多的人',
  themeConfig: {
    tags: "/tags",
    displayAllHeaders: true, // 默认值：false
    lastUpdated: '上次更新', // string | boolean
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'web后端', link: '/blog/be/利用redis-lua+python实现接口限流.md' },
      { text: '效率提升', link: '/blog/effect/MAC平台10款效率工具推荐.md' },
      { text: 'web前端', link: '/blog/effect/MAC平台10款效率工具推荐.md' },
      { text: '服务器运维', link: '/blog/ops/利用sed命令、钉钉机器人上报服务器错误日志.md' },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // },
      { text: '我的GitHub1', link: 'https://github.com/Megatron7-code', target: '_blank' },
      { text: '支持作者', link: '/blog/support/支持作者.md'},
      // {
      //   text: "标签云",
      //   link: '/blog/tags/',
      //   tags: true
      // }
    ],
    sidebar: [
      // ['/', '首页'],
      // ['/blog/FirstBlog.md', '我的第一篇博客'],
      // ['/blog/SecondBlog.md', '我的第二篇博客'],
      // ['/blog/Python/tornado.md', 'Python'],
      // {
      //   title: 'Group 1',   // 必要的
      //   path: '/foo/',      // 可选的, 应该是一个绝对路径
      //   collapsable: false, // 可选的, 默认值是 true,
      //   sidebarDepth: 1,    // 可选的, 默认值是 1
      //   children: [
      //     '/'
      //   ]
      // },
      // ['/blog/effect', '效率提升'],
      // ['/blog/fe', 'web前端'],
      // ['/blog/ops', '服务器运维'],
      {
        title: 'web后端',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/blog/be/利用redis-lua+python实现接口限流.md', '利用redis-lua+python实现接口限流'],
        ]
      },
      {
        title: '效率提升',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/blog/effect/MAC平台10款效率工具推荐.md', 'MAC平台10款效率工具推荐'],
          ['/blog/effect/12款精选浏览器插件推荐.md', '12款精选浏览器插件推荐'],
        ]
      },
      {
        title: 'web前端',
        collapsable: false, // 可选的, 默认值是 true,
        children: [

        ]
      },
      {
        title: '服务器运维',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/blog/ops/利用sed命令、钉钉机器人上报服务器错误日志.md', '利用sed命令、钉钉机器人上报服务器错误日志'],
          ['/blog/ops/shell 常用知识汇总.md', 'shell 常用知识汇总'],
          ['/blog/ops/往Mysql数据库存储emoji表情怎么变成了问号.md', '往Mysql数据库存储emoji表情怎么变成了问号'],
          ['/blog/ops/VPC网络的理解与实践.md', 'VPC网络的理解与实践'],
        ]
      },
      {
        title: '支持作者',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/blog/support/支持作者.md', '支持作者'],
        ]
      },
    ],
    logo: '/WechatIMG13.jpeg'
  }
};
