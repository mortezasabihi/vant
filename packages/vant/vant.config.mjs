export default {
  name: 'vant',
  build: {
    srcDir: 'src',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'pnpm',
    extensions: {
      esm: '.mjs'
    },
    site: {
      publicPath:
        (typeof window === 'undefined' && process.env.PUBLIC_PATH) || '/vant/',
    },
    vetur: {
      tagPrefix: 'van-',
    },
  },
  site: {
    defaultLang: 'en-US',
    versions: [
      { label: 'v1', link: '/vant/v1/' },
      { label: 'v2', link: '/vant/v2/' },
      { label: 'v4', link: '/vant/v4/' },
    ],
    baiduAnalytics: {
      seed: 'ad6b5732c36321f2dafed737ac2da92f',
    },
    htmlMeta: {
      'docsearch:version': 'v3',
    },
    locales: {
      'zh-CN': {
        title: 'Vant 3',
        subtitle: '（适用于 Vue 3）',
        description: '轻量、可靠的移动端组件库',
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        langLabel: '中',
        links: [
          {
            logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg',
            url: 'https://vant-contrib.gitee.io/vant-weapp/',
          },
          {
            logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/github.svg',
            url: 'https://github.com/youzan/vant',
          },
        ],
        searchConfig: {
          appId: 'BLI2GGOUL8',
          apiKey: '07cb725cd26aa496996de6cb8ab9b5cc',
          indexName: 'vant',
          searchParameters: {
            facetFilters: ['lang:zh-CN', 'version:v3'],
          },
          transformItems(items) {
            if (location.hostname !== 'youzan.github.io') {
              items.forEach((item) => {
                if (item.url) {
                  item.url =
                    item.url &&
                    item.url.replace('youzan.github.io', location.hostname);
                }
              });
            }
            return items;
          },
        },
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'advanced-usage',
                title: '进阶用法',
              },
              {
                path: 'faq',
                title: '常见问题',
              },
              {
                path: 'changelog',
                title: '更新日志',
              },
              {
                path: 'migrate-from-v2',
                title: '从 v2 升级',
              },
              {
                path: 'contribution',
                title: '贡献指南',
              },
              {
                path: 'design',
                title: '设计资源',
              },
              {
                path: 'style-guide',
                title: '风格指南',
              },
              {
                path: 'locale',
                title: '国际化',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
              {
                path: 'cell',
                title: 'Cell 单元格',
              },
              {
                path: 'config-provider',
                title: 'ConfigProvider 全局配置',
              },
              {
                path: 'icon',
                title: 'Icon 图标',
              },
              {
                path: 'image',
                title: 'Image 图片',
              },
              {
                path: 'col',
                title: 'Layout 布局',
              },
              {
                path: 'popup',
                title: 'Popup 弹出层',
              },
              {
                path: 'style',
                title: 'Style 内置样式',
              },
              {
                path: 'toast',
                title: 'Toast 轻提示',
              },
            ],
          },
          {
            title: '表单组件',
            items: [
              {
                path: 'calendar',
                title: 'Calendar 日历',
              },
              {
                path: 'cascader',
                title: 'Cascader 级联选择',
              },
              {
                path: 'checkbox',
                title: 'Checkbox 复选框',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker 时间选择',
              },
              {
                path: 'field',
                title: 'Field 输入框',
              },
              {
                path: 'form',
                title: 'Form 表单',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard 数字键盘',
              },
              {
                path: 'password-input',
                title: 'PasswordInput 密码输入框',
              },
              {
                path: 'picker',
                title: 'Picker 选择器',
              },
              {
                path: 'radio',
                title: 'Radio 单选框',
              },
              {
                path: 'rate',
                title: 'Rate 评分',
              },
              {
                path: 'search',
                title: 'Search 搜索',
              },
              {
                path: 'slider',
                title: 'Slider 滑块',
              },
              {
                path: 'stepper',
                title: 'Stepper 步进器',
              },
              {
                path: 'switch',
                title: 'Switch 开关',
              },
              {
                path: 'uploader',
                title: 'Uploader 文件上传',
              },
            ],
          },
          {
            title: '反馈组件',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet 动作面板',
              },
              {
                path: 'dialog',
                title: 'Dialog 弹出框',
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu 下拉菜单',
              },
              {
                path: 'loading',
                title: 'Loading 加载',
              },
              {
                path: 'notify',
                title: 'Notify 消息通知',
              },
              {
                path: 'overlay',
                title: 'Overlay 遮罩层',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh 下拉刷新',
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet 分享面板',
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell 滑动单元格',
              },
            ],
          },
          {
            title: '展示组件',
            items: [
              {
                path: 'badge',
                title: 'Badge 徽标',
              },
              {
                path: 'circle',
                title: 'Circle 环形进度条',
              },
              {
                path: 'collapse',
                title: 'Collapse 折叠面板',
              },
              {
                path: 'count-down',
                title: 'CountDown 倒计时',
              },
              {
                path: 'divider',
                title: 'Divider 分割线',
              },
              {
                path: 'empty',
                title: 'Empty 空状态',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview 图片预览',
              },
              {
                path: 'lazyload',
                title: 'Lazyload 懒加载',
              },
              {
                path: 'list',
                title: 'List 列表',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar 通知栏',
              },
              {
                path: 'popover',
                title: 'Popover 气泡弹出框',
              },
              {
                path: 'progress',
                title: 'Progress 进度条',
              },
              {
                path: 'skeleton',
                title: 'Skeleton 骨架屏',
              },
              {
                path: 'steps',
                title: 'Steps 步骤条',
              },
              {
                path: 'sticky',
                title: 'Sticky 粘性布局',
              },
              {
                path: 'swipe',
                title: 'Swipe 轮播',
              },
              {
                path: 'tag',
                title: 'Tag 标签',
              },
            ],
          },
          {
            title: '导航组件',
            items: [
              {
                path: 'action-bar',
                title: 'ActionBar 动作栏',
              },
              {
                path: 'grid',
                title: 'Grid 宫格',
              },
              {
                path: 'index-bar',
                title: 'IndexBar 索引栏',
              },
              {
                path: 'nav-bar',
                title: 'NavBar 导航栏',
              },
              {
                path: 'pagination',
                title: 'Pagination 分页',
              },
              {
                path: 'sidebar',
                title: 'Sidebar 侧边导航',
              },
              {
                path: 'tab',
                title: 'Tab 标签页',
              },
              {
                path: 'tabbar',
                title: 'Tabbar 标签栏',
              },
              {
                path: 'tree-select',
                title: 'TreeSelect 分类选择',
              },
            ],
          },
          {
            title: '业务组件',
            items: [
              {
                path: 'address-edit',
                title: 'AddressEdit 地址编辑',
              },
              {
                path: 'address-list',
                title: 'AddressList 地址列表',
              },
              {
                path: 'area',
                title: 'Area 省市区选择',
              },
              {
                path: 'card',
                title: 'Card 商品卡片',
              },
              {
                path: 'contact-card',
                title: 'ContactCard 联系人卡片',
              },
              {
                path: 'contact-edit',
                title: 'ContactEdit 联系人编辑',
              },
              {
                path: 'contact-list',
                title: 'ContactList 联系人列表',
              },
              {
                path: 'coupon-list',
                title: 'Coupon 优惠券',
              },
              {
                path: 'submit-bar',
                title: 'SubmitBar 提交订单栏',
              },
            ],
          },
          {
            title: '组合式 API',
            items: [
              {
                path: 'vant-use-intro',
                title: '介绍',
              },
              {
                path: 'use-click-away',
                title: 'useClickAway',
              },
              {
                path: 'use-count-down',
                title: 'useCountDown',
              },
              {
                path: 'use-custom-field-value',
                title: 'useCustomFieldValue',
              },
              {
                path: 'use-event-listener',
                title: 'useEventListener',
              },
              {
                path: 'use-page-visibility',
                title: 'usePageVisibility',
              },
              {
                path: 'use-rect',
                title: 'useRect',
              },
              {
                path: 'use-relation',
                title: 'useRelation',
              },
              {
                path: 'use-scroll-parent',
                title: 'useScrollParent',
              },
              {
                path: 'use-toggle',
                title: 'useToggle',
              },
              {
                path: 'use-window-size',
                title: 'useWindowSize',
              },
            ],
          },
          {
            title: '废弃',
            items: [
              {
                path: 'theme',
                title: '定制主题',
              },
            ],
          },
        ],
      },
      'en-US': {
        title: 'Vant 3',
        subtitle: ' (for Vue 3)',
        description: 'Mobile UI Components built on Vue',
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        langLabel: 'EN',
        links: [
          {
            logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/github.svg',
            url: 'https://github.com/youzan/vant',
          },
        ],
        searchConfig: {
          appId: 'BLI2GGOUL8',
          apiKey: '07cb725cd26aa496996de6cb8ab9b5cc',
          indexName: 'vant',
          searchParameters: {
            facetFilters: ['lang:en-US', 'version:v3'],
          },
        },
        nav: [
          {
            title: 'Essentials',
            items: [
              {
                path: 'home',
                title: 'Introduction',
              },
              {
                path: 'quickstart',
                title: 'Quickstart',
              },
              {
                path: 'advanced-usage',
                title: 'Advanced Usage',
              },
              {
                path: 'changelog',
                title: 'Changelog',
              },
              {
                path: 'design',
                title: 'Design Resources',
              },
              {
                path: 'locale',
                title: 'Internationalization',
              },
            ],
          },
          {
            title: 'Basic Components',
            items: [
              {
                path: 'button',
                title: 'Button',
              },
              {
                path: 'cell',
                title: 'Cell',
              },
              {
                path: 'config-provider',
                title: 'ConfigProvider',
              },
              {
                path: 'icon',
                title: 'Icon',
              },
              {
                path: 'image',
                title: 'Image',
              },
              {
                path: 'col',
                title: 'Layout',
              },
              {
                path: 'popup',
                title: 'Popup',
              },
              {
                path: 'style',
                title: 'Built-in style',
              },
              {
                path: 'toast',
                title: 'Toast',
              },
            ],
          },
          {
            title: 'Form Components',
            items: [
              {
                path: 'calendar',
                title: 'Calendar',
              },
              {
                path: 'cascader',
                title: 'Cascader',
              },
              {
                path: 'checkbox',
                title: 'Checkbox',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker',
              },
              {
                path: 'field',
                title: 'Field',
              },
              {
                path: 'form',
                title: 'Form',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard',
              },
              {
                path: 'password-input',
                title: 'PasswordInput',
              },
              {
                path: 'picker',
                title: 'Picker',
              },
              {
                path: 'radio',
                title: 'Radio',
              },
              {
                path: 'rate',
                title: 'Rate',
              },
              {
                path: 'search',
                title: 'Search',
              },
              {
                path: 'slider',
                title: 'Slider',
              },
              {
                path: 'stepper',
                title: 'Stepper',
              },
              {
                path: 'switch',
                title: 'Switch',
              },
              {
                path: 'uploader',
                title: 'Uploader',
              },
            ],
          },
          {
            title: 'Action Components',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet',
              },
              {
                path: 'dialog',
                title: 'Dialog',
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu',
              },
              {
                path: 'loading',
                title: 'Loading',
              },
              {
                path: 'notify',
                title: 'Notify',
              },
              {
                path: 'overlay',
                title: 'Overlay',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh',
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet',
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell',
              },
            ],
          },
          {
            title: 'Display Components',
            items: [
              {
                path: 'badge',
                title: 'Badge',
              },
              {
                path: 'circle',
                title: 'Circle',
              },
              {
                path: 'collapse',
                title: 'Collapse',
              },
              {
                path: 'count-down',
                title: 'CountDown',
              },
              {
                path: 'divider',
                title: 'Divider',
              },
              {
                path: 'empty',
                title: 'Empty',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview',
              },
              {
                path: 'lazyload',
                title: 'Lazyload',
              },
              {
                path: 'list',
                title: 'List',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar',
              },
              {
                path: 'popover',
                title: 'Popover',
              },
              {
                path: 'progress',
                title: 'Progress',
              },
              {
                path: 'skeleton',
                title: 'Skeleton',
              },
              {
                path: 'steps',
                title: 'Steps',
              },
              {
                path: 'sticky',
                title: 'Sticky',
              },
              {
                path: 'swipe',
                title: 'Swipe',
              },
              {
                path: 'tag',
                title: 'Tag',
              },
            ],
          },
          {
            title: 'Navigation Components',
            items: [
              {
                path: 'action-bar',
                title: 'ActionBar',
              },
              {
                path: 'grid',
                title: 'Grid',
              },
              {
                path: 'index-bar',
                title: 'IndexBar',
              },
              {
                path: 'nav-bar',
                title: 'NavBar',
              },
              {
                path: 'pagination',
                title: 'Pagination',
              },
              {
                path: 'sidebar',
                title: 'Sidebar',
              },
              {
                path: 'tab',
                title: 'Tab',
              },
              {
                path: 'tabbar',
                title: 'Tabbar',
              },
              {
                path: 'tree-select',
                title: 'TreeSelect',
              },
            ],
          },
          {
            title: 'Business Components',
            items: [
              {
                path: 'address-edit',
                title: 'AddressEdit',
              },
              {
                path: 'address-list',
                title: 'AddressList',
              },
              {
                path: 'area',
                title: 'Area',
              },
              {
                path: 'card',
                title: 'Card',
              },
              {
                path: 'contact-card',
                title: 'ContactCard',
              },
              {
                path: 'contact-edit',
                title: 'ContactEdit',
              },
              {
                path: 'contact-list',
                title: 'ContactList',
              },
              {
                path: 'coupon-list',
                title: 'Coupon',
              },
              {
                path: 'submit-bar',
                title: 'SubmitBar',
              },
            ],
          },
          {
            title: 'Composables',
            items: [
              {
                path: 'vant-use-intro',
                title: 'Intro',
              },
              {
                path: 'use-click-away',
                title: 'useClickAway',
              },
              {
                path: 'use-count-down',
                title: 'useCountDown',
              },
              {
                path: 'use-custom-field-value',
                title: 'useCustomFieldValue',
              },
              {
                path: 'use-event-listener',
                title: 'useEventListener',
              },
              {
                path: 'use-page-visibility',
                title: 'usePageVisibility',
              },
              {
                path: 'use-rect',
                title: 'useRect',
              },
              {
                path: 'use-relation',
                title: 'useRelation',
              },
              {
                path: 'use-scroll-parent',
                title: 'useScrollParent',
              },
              {
                path: 'use-toggle',
                title: 'useToggle',
              },
              {
                path: 'use-window-size',
                title: 'useWindowSize',
              },
            ],
          },
          {
            title: 'Deprecated',
            items: [
              {
                path: 'theme',
                title: 'Custom Theme',
              },
            ],
          },
        ],
      },
    },
  },
};
