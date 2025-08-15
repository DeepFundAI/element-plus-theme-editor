import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        questionboxbg: '#E8E9FF',
        aif10enterbg: 'rgba(115,116,255,0.16)',

        // 一级文本色 /标题 正文
        'text-01': '#131C30',
        // 二级文本色 / 正文
        'text-02-01': '#2A354E',
        // 二级文本色 / 正文 辅文
        'text-03': '#545E71',
        // 三级文本色 / 辅文
        'text-04': '#A9B2BE',
        // 主题本色 / 正文 辅文
        'text-05': '#636FFF',
        // 特殊文本色一
        'text-06': '#FF2436',
        // 特殊文本色二
        'text-07': '#FF661A',
        // 特殊文本色三
        'text-08': '#FF9500',
        // 特殊文本色四
        'text-09': '#07AB4B',
        // 异常文本色
        'text-10': '#E63C47',
        // 会话面板文本色
        'text-11': '#2A354E',
        // 指标上涨
        'text-12': '#FF2436',
        // 指标下降
        'text-13': '#07AB4B',

        // 黑版一级文本色 /标题 正文
        'text-01-dark': '#FAFBFC',
        // 黑版二级文本色 / 正文
        'text-02-01-dark': '#F2F5FA',
        'text-02-02-dark': '#FFD993',
        // 黑版二级文本色 / 正文 辅文
        'text-03-dark': '#C4CAD5',
        // 黑版三级文本色 / 辅文
        'text-04-dark': '#828FA1',
        // 黑版主题本色 / 正文 辅文
        'text-05-dark': '#7E8DFF',
        // 黑版特殊文本色一
        'text-06-dark': '#FF2436',
        // 黑版特殊文本色二
        'text-07-dark': '#FF661A',
        // 黑版特殊文本色三
        'text-08-dark': '#FF9500',
        // 黑版特殊文本色四
        'text-09-dark': '#07AB4B',
        // 黑版异常文本色
        'text-10-dark': '#E63C47',
        // 会话面板文本色
        'text-11-dark': '#F2F5FA',

        // 一级边框 / 分割线 / 边框悬停态 分割线
        'border-01': '#C8CBD0',
        // 二级边框 / 分割线 / 边框 分割线
        'border-02': '#DADDE0',
        // 三级边框 / 分割线 / 边框 分割线
        'border-03': '#E0E4EA',
        // 主题边框 / 分割线 / 边框 分割线
        'border-04': '#636FFF',
        // 异常边框色
        'border-05': '#FF8080',
        // 主题边框 / 分割线 / 边框 分割线
        'border-06': 'rgba(99, 111, 255, 0.4)',
        // 左侧导航时间轴
        'border-07': 'rgba(196,202,213,1)',
        'border-08': '#EBEDF0',
        // 反馈面板边框
        'border-09': 'rgba(224,228,234,1)',

        // 黑版一级边框 / 分割线 / 边框悬停态 分割线
        'border-01-dark': '#60656C',
        // 黑版二级边框 / 分割线 / 边框 分割线
        'border-02-dark': '#60656C',
        // 黑版三级边框 / 分割线 / 边框 分割线
        'border-03-dark': '#545E71',
        // 黑版主题边框 / 分割线 / 边框 分割线
        'border-04-dark': '#7E8DFF',
        // 黑版异常边框色
        'border-05-dark': '#FFAAAA',
        // 黑版主题边框 / 分割线 / 边框 分割线
        'border-06-dark': 'rgba(126, 141, 255, 0.4)',
        // 左侧导航时间轴
        'border-07-dark': 'rgba(130,143,161,1)',
        'border-08-dark': '#272E3B',
        // 黑版反馈面板边框
        'border-09-dark': 'rgba(84,94,113,1)',

        // 一级背景色 / 页面 卡片背景
        'background-00': '#FFFFFF',
        'background-01': 'rgba(255,255,255,0.80)',
        // 二级背景色 / 小区块背景
        'background-02': '#FFF',
        // 三级背景色 / 小区块背景
        'background-03': '#F2F5FA',
        // 四级背景色 / 小区块背景
        'background-04': '#EDEEF0',
        // 主题背景色 / 特殊区块背景
        'background-05': '#636FFF',
        // 页面背景色
        'background-06': '#EBEEF5',
        // 目录收缩栏hover背景色
        'background-07': '#EFF0FF',
        // 命令行背景
        'background-08': '#F7F8FA',
        // 消息异常背景色
        'background-09': '#FFECEC',
        // 导航Tab小工具tip背景色
        'background-10': 'rgba(99,111,255,0.20)',
        // 激活态导航Tab小工具tip背景色
        'background-11': '#9696FF',
        // 导航Tab小工具 hover态背景色
        'background-12': 'rgba(115,116,255,0.16)',
        // rag hover背景
        'background-13': '#E8E9FF',
        // 分享页背景
        'background-14': '#F5F5FA',
        // 激活态导航Tab小工具tip背景色
        'background-15': '#FFFFFF',
        // 命令行背景
        'background-16': '#FFF',
        // rag 背景
        'background-17': '#FFF',
        // deep think 背景
        'background-18': '#FFF',
        // 反馈面板背景
        'background-19': 'rgba(255,255,255,0.80)',

        // 黑版一级背景色 / 页面 卡片背景
        'background-00-dark': '#181E25',
        'background-01-dark': 'rgba(19,28,48,0.80)',
        // 黑版二级背景色 / 小区块背景
        'background-02-dark': '#374152',
        // 黑版三级背景色 / 小区块背景
        'background-03-dark': '#2A354E',
        // 黑版四级背景色 / 小区块背景
        'background-04-dark': '#60656C',
        // 黑版主题背景色 / 特殊区块背景
        'background-05-dark': '#7E8DFF',
        // 黑版页面背景色
        'background-06-dark': '#2E343A',
        // 目录收缩栏hover背景色
        'background-07-dark': '#363E7C',
        // 黑版消息异常背景色
        'background-09-dark': '#5D374D',
        // 黑版导航Tab小工具tip背景色
        'background-10-dark': 'rgba(126,141,255,0.20)',
        // 黑版激活态导航Tab小工具tip背景色
        'background-11-dark': '#6E6EBE',
        // 黑版导航Tab小工具 hover态背景色
        'background-12-dark': 'rgba(99,111,255,0.40)',
        // rag hover背景
        'background-13-dark': '#2C3450',
        // 分享页背景
        'background-14-dark': '#242C35',
        // 黑版激活态导航Tab小工具tip背景色
        'background-15-dark': '#131C30',
        // 黑版命令行背景
        'background-16-dark': '#1D232A',
        // 黑版rag 背景
        'background-17-dark': '#1D232A',
        // 黑版deep think 背景
        'background-18-dark': '#1D273F',
        // 反馈面板黑版背景
        'background-19-dark': '#10182E',
      },
      backgroundImage: {
        'stock-news': 'linear-gradient(180deg, #F4F8FF 0%, #FFF6FE 100%)',
        'stock-news-dark':
          'linear-gradient(1deg, #1C599D 0%, #2F4D8F 30%, #3F3294 79%, #3F2578 100%)',
        'stock-news-right-btn': 'linear-gradient(90deg, rgba(236,240,255,0.00) 0%, #EAEFFF 77%)',
        'stock-news-right-btn-dark':
          'linear-gradient(90deg, rgba(5,14,44,0.00) 0%, #050E2C 77%, #08040D 100%)',
        'stock-news-left-btn': ' linear-gradient(90deg, #EAEFFF 0%, rgba(236,240,255,0.00) 77%)',
        'stock-news-left-btn-dark':
          'linear-gradient(90deg, #08040D 0%,#050E2C 23%, rgba(5,14,44,0.00) 100%)',
        'ai-guide1': "url('/images/ai-guide1.gif')",
        'ai-guide2': "url('/images/ai-guide2.gif')",
        'ai-guide3': "url('/images/ai-guide3.gif')",
        'tour-guide1': "url('/images/guide-step1.gif')",
        'tour-guide1-dark': "url('/images/guide-step1-dark.gif')",
        'tour-guide2': "url('/images/guide-step2.gif')",
        'tour-guide2-dark': "url('/images/guide-step2-dark.gif')",
        page: "url('/images/page.png')",
        'page-dark': "url('/images/page-dark.png')",
        'page-banner': "url('/images/banner.png')",
        head: "url('/images/head.png')",
        'head-dark': "url('/images/head-dark.png')",
        drawerbg: 'linear-gradient(134deg, #EFE7FE 0%, #FBF0F7 17%, #EBF3FD 57%, #EAF3FD 100%)',
        drawerbgdark: 'linear-gradient(to right, rgba(49,52,56,0.40), rgba(49,52,56,0.40))',
        chatcardtool:
          'linear-gradient(to right, #D263FF 24%, #3F72FF 50%, #457CFF 91%, #83EEFF 100%)',
        tg: 'linear-gradient(305deg, #3F72FF 0%, #8F63FF 90%)',
        'tg-dark': 'linear-gradient(305deg, #7EA0FF 0%, #BEA4FF 90%)',
        'title-bar': 'linear-gradient(-45deg, #3F72FF 0%, #8F63FF 100%)',
        'title-bar-dark': 'linear-gradient(-45deg, #3F72FF 0%, #8F63FF 100%)',
        'chat-panel': "url('/images/chatpanel.png')",
        'chat-panel-dark': "url('/images/chatpanel-dark.png')",
        'page-footer-logo': "url('/images/footer-logo.png')",
        'page-footer-logo-dark': "url('/images/footer-logo-dark.png')",
        'recommend-question-dark':
          'linear-gradient(180deg, rgba(24,30,37,0.80) 12%, rgba(24,30,37,0.00) 100%)',
        'r-q-item': 'linear-gradient(90deg, #F0E8FF 0%, #FBF0F8 30%, #F5F2FA 79%, #EBF4FE 100%)',
        'r-q-item-dark':
          'linear-gradient(90deg, #3F2578 0%, #3F3294 30%, #2F4D8F 79%, #1C599D 100%)',
        'chat-panel-aime-box':
          'radial-gradient(50% 118%, rgba(22,91,255,0.45) 50%, rgba(0,58,255,0.13) 80%, rgba(163,190,255,0.55) 100%)',
        'chat-panel-aime-box-dark':
          'linear-gradient(180deg, #BE5BFF 0%, #2A97FF 53%, #A528E9 100%)',
        'chat-panel-header':
          'linear-gradient(180deg, #FFFFFF 50%, rgba(255,255,255,0.60) 72%, rgba(255,255,255,0.00) 100%)',
        'chat-panel-header-dark':
          'linear-gradient(180deg, #19192D 50%, rgba(25,26,45,0.60) 74%, rgba(25,25,45,0.00) 100%)',
        'chat-news': "url('/images/news.png')",
        'chat-news-dark': "url('/images/news-dark.png')",
        'smart-bar-robot':
          'linear-gradient(46deg, rgba(30,150,234,0.3) 1%, rgba(186,96,245,0.3) 100%)',
        'smart-bar-robot-dark':
          'linear-gradient(135deg, rgba(43,90,255,0.5) 0%, rgba(220,98,255,0.5) 100%)',
        nodata: "url('/images/nodata.png')",
        'nodata-dark': "url('/images/nodata-dark.png')",
      },
      boxShadow: {
        'select-section': '0px 2px 12px 0px rgba(0,0,0,0.16)',
        'select-section-dark': ' 0px 2px 12px 0px rgba(255,255,255,0.24)',
        enterHover: '1px 2px 8px 0px rgba(0,0,0,0.12)',
        'chat-panel-close': '0px 2px 8px 0px rgba(0,0,0,0.48)',
        'chat-panel-close-dark': '0px 2px 8px 0px rgba(255,255,255,0.48)',
        'nav-tool': '0px 2px 4px 0px rgba(0,0,0,0.16)',
        'nav-tool-dark': '0px 2px 4px 0px rgba(255,255,255,0.16)',
        robot: '0px 1px 4px 0px rgba(38,0,123,0.44)',
        'robot-dark': '0px 1px 2px 0px rgba(38,0,123,0.28)',
        'smart-bar': '0px 2px 12px 0px rgba(0,0,0,0.12)',
        'smart-bar-dark': '0px 2px 12px 0px rgba(0,0,0,0.12)',
      },
      dropShadow: {
        'chat-panel-close-dark': '0px 0px 3px rgb(255 255 255)',
        'chat-panel-close': '0px 0px 3px rgba(0,0,0,0.4)',
        'robot-chat-panel': '0px 0px 8px rgba(57,136,255,0.4)',
      },
      backgroundSize: {
        full: '100% 100%',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addVariant }) {
      addComponents({
        '.border-base': {
          position: 'relative',
        },
        '.border-base-card': {
          position: 'relative',
        },
        '.border-gradient': {
          border: '1px solid transparent !important',
          'border-radius': '6px',
          'background-clip': 'padding-box, border-box',
          'background-origin': 'padding-box, border-box',
          'background-image':
            'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0)), linear-gradient(20deg, #7638FF, #E788BD, #30A3FE)',
        },
        '.dark .border-gradient': {
          'background-image':
            'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0)), linear-gradient(20deg, #7638FF, #E788BD, #30A3FE)',
        },
        '.flex-common': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        '.flex-content-start': {
          display: 'flex',
          'justify-content': 'start',
          'align-items': 'center',
        },
        '.flex-content-between': {
          display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
        },
      })
      addVariant('black', '.dark &')
    }),
  ],
}
