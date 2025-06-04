export default [
  {
    type: 'primary',
    name: '品牌色',
    data: [
      {
        name: '主色调',
        depended: ['Badge', 'Button', 'Calendar', 'CheckBox', 'Selector', 'Cascader', 'Input', 'Checkbox', 'Collapse', 'Select', 'DatePicker', 'Dialog', 'Drawer', 'Dropdown', 'Link', 'Loading', 'Message', 'Pagination', 'Progress', 'Radio', 'Result', 'Slider', 'Step', 'Switch', 'Table', 'Tabs', 'Tag', 'Text', 'Timeline', 'Transfer', 'Tree', 'Upload'],
        value: '#409eff',
        originValue: '#409eff',
        id: 'elColorPrimart',
        cssVar: '--el-color-primary',
        type: 'color-16',
        unit: '',
        desc: '主背景色调，如Button等'
      },
      {
        name: '主色调亮3',
        depended: ['Link', 'Tag-dark'],
        value: '#79bbff',
        originValue: '#79bbff',
        id: 'elColorPrimaryLight3',
        cssVar: '--el-color-primary-light-3',
        type: 'color-16',
        unit: '',
        desc: '主背景色调亮3'
      },
      {
        name: '主色调亮5',
        depended: ['Button', 'Link', 'Tag'],
        value: '#a0cfff',
        originValue: '#a0cfff',
        id: 'elColorPrimaryLight5',
        cssVar: '--el-color-primary-light-5',
        type: 'color-16',
        unit: '',
        desc: '主背景色调亮5，如Button等'
      },
      {
        name: '主色调亮7',
        depended: ['Button', 'Checkbox'],
        value: '#c6e2ff',
        originValue: '#c6e2ff',
        id: 'elColorPrimaryLight7',
        cssVar: '--el-color-primary-light-7',
        type: 'color-16',
        unit: '',
        desc: '主背景色调亮7，如Button等'
      },
      {
        name: '主色调亮8',
        depended: ['Button', 'Checkbox', 'Tag'],
        value: '#d9ecff',
        originValue: '#d9ecff',
        id: 'elColorPrimaryLight8',
        cssVar: '--el-color-primary-light-8',
        type: 'color-16',
        unit: '',
        desc: '主背景色调亮8，如Button等'
      },
      {
        name: '主色调亮9',
        depended: ['Button', 'Calendar', 'Dropdown', 'Table', 'Tag', 'Tree', 'Upload'],
        value: '#ecf5ff',
        originValue: '#ecf5ff',
        id: 'elColorPrimaryLight9',
        cssVar: '--el-color-primary-light-9',
        type: 'color-16',
        unit: '',
        desc: '主背景色调亮9，如Button等'
      },
      {
        name: '主色调暗2',
        depended: ['Button'],
        value: '#337ecc',
        originValue: '#337ecc',
        id: 'elColorPrimaryDark2',
        cssVar: '--el-color-primary-dark-2',
        type: 'color-16',
        unit: '',
        desc: '主背景色调暗2'
      }
    ]
  },
  {
    type: 'success',
    name: '成功色',
    data: [
      {
        name: '成功色调',
        depended: ['Alert', 'Badge', 'Button', 'Link', 'Message', 'Notification', 'Progress', 'Result', 'Step', 'Tag', 'Text', 'Timeline', 'Upload'],
        value: '#67c23a',
        originValue: '#67c23a',
        id: 'elColorSuccess',
        cssVar: '--el-color-success',
        type: 'color-16',
        unit: '',
        desc: '成功状态背景色调，如Button等'
      },
      {
        name: '成功色调亮3',
        depended: ['Button', 'Link', 'Tag'],
        value: '#95d475',
        originValue: '#95d475',
        id: 'elColorSuccessLight3',
        cssVar: '--el-color-success-light-3',
        type: 'color-16',
        unit: '',
        desc: '成功状态背景色调亮3，如Button等'
      },
      {
        name: '成功色调亮5',
        depended: ['Button', 'Link', 'Tag'],
        value: '#b3e19d',
        originValue: '#b3e19d',
        id: 'elColorSuccessLight5',
        cssVar: '--el-color-success-light-5',
        type: 'color-16',
        unit: '',
        desc: '成功状态背景色调亮5，如Button等'
      },
      {
        name: '成功色调亮7',
        depended: [],
        value: '#d1edc4',
        originValue: '#d1edc4',
        id: 'elColorSuccessLight7',
        cssVar: '--el-color-success-light-7',
        type: 'color-16',
        unit: '',
        desc: '成功状态背景色调亮7，预留色'
      },
      {
        name: '成功色调亮8',
        depended: ['Button', 'Message', 'Tag'],
        value: '#e1f3d8',
        originValue: '#e1f3d8',
        id: 'elColorSuccessLight8',
        cssVar: '--el-color-success-light-8',
        type: 'color-16',
        unit: '',
        desc: '成功状态背景色调亮8，如Button等'
      },
      {
        name: '成功色调亮9',
        depended: ['Alert', 'Button', 'Message', 'Tag'],
        value: '#f0f9eb',
        originValue: '#f0f9eb',
        id: 'elColorSuccessLight9',
        cssVar: '--el-color-success-light-9',
        type: 'color-16',
        unit: '',
        desc: '成功状态背景色调亮9，如Button等'
      },
      {
        name: '成功色调暗2',
        depended: ['Button'],
        value: '#529b2e',
        originValue: '#529b2e',
        id: 'elColorSuccessDark2',
        cssVar: '--el-color-success-dark-2',
        type: 'color-16',
        unit: '',
        desc: '成功状态背景色调暗2，如Button等'
      }
    ]
  },
  {
    type: 'warnning',
    name: '警告色',
    data: [
      {
        name: '警告色调',
        depended: ['Alert', 'Button', 'Badge', 'Link', 'Message', 'Notification', 'Progress', 'Result', 'Tag', 'Text', 'Timeline'],
        value: '#e6a23c',
        originValue: '#e6a23c',
        id: 'elColorWarning',
        cssVar: '--el-color-warning',
        type: 'color-16',
        unit: '',
        desc: '警告状态背景色调，如Button等'
      },
      {
        name: '警告色调亮3',
        depended: ['Link', 'Button', 'Tag'],
        value: '#eebe77',
        originValue: '#eebe77',
        id: 'elColorWarningLight3',
        cssVar: '--el-color-warning-light-3',
        type: 'color-16',
        unit: '',
        desc: '警告状态背景色调亮3，如Button等'
      },
      {
        name: '警告色调亮5',
        depended: ['Link', 'Button', 'Tag'],
        value: '#f3d19e',
        originValue: '#f3d19e',
        id: 'elColorWarningLight5',
        cssVar: '--el-color-warning-light-5',
        type: 'color-16',
        unit: '',
        desc: '警告状态背景色调亮5，如Button等'
      },
      {
        name: '警告色调亮7',
        depended: [],
        value: '#f8e3c5',
        originValue: '#f8e3c5',
        id: 'elColorWarningLight7',
        cssVar: '--el-color-warning-light-7',
        type: 'color-16',
        unit: '',
        desc: '警告状态背景色调亮7，预留色'
      },
      {
        name: '警告色调亮8',
        depended: ['Message', 'Button', 'Tag'],
        value: '#faecd8',
        originValue: '#faecd8',
        id: 'elColorWarningLight8',
        cssVar: '--el-color-warning-light-8',
        type: 'color-16',
        unit: '',
        desc: '警告状态背景色调亮8，如Button等'
      },
      {
        name: '警告色调亮9',
        depended: ['Alert', 'Button', 'Message', 'Tag'],
        value: '#fdf6ec',
        originValue: '#fdf6ec',
        id: 'elColorWarningLight9',
        cssVar: '--el-color-warning-light-9',
        type: 'color-16',
        unit: '',
        desc: '警告状态背景色调亮9，如Button等'
      },
      {
        name: '警告色调暗2',
        depended: ['Button'],
        value: '#b88230',
        originValue: '#b88230',
        id: 'elColorWarningDark2',
        cssVar: '--el-color-warning-dark-2',
        type: 'color-16',
        unit: '',
        desc: '警告状态背景色调暗2，如Button等'
      }
    ]
  },
  {
    type: 'danger',
    name: '危险色',
    data: [
      {
        name: '危险色调',
        depended: ['Badge', 'Button', 'Form', 'Textarea', 'Input', 'Link', 'Progress', 'Result', 'Step', 'Tag', 'Text', 'Timeline'],
        value: '#f56c6c',
        originValue: '#f56c6c',
        id: 'elColorDanger',
        cssVar: '--el-color-danger',
        type: 'color-16',
        unit: '',
        desc: '危险状态背景色调，如Button等'
      },
      {
        name: '危险色调亮3',
        depended: ['Link', 'Button', 'Tag'],
        value: '#f89898',
        originValue: '#f89898',
        id: 'elColorDangerLight3',
        cssVar: '--el-color-danger-light-3',
        type: 'color-16',
        unit: '',
        desc: '危险状态背景色调亮3，如Button等'
      },
      {
        name: '危险色调亮5',
        depended: ['Link', 'Button', 'Tag'],
        value: '#fab6b6',
        originValue: '#fab6b6',
        id: 'elColorDangerLight5',
        cssVar: '--el-color-danger-light-5',
        type: 'color-16',
        unit: '',
        desc: '危险状态背景色调亮5，如Button等'
      },
      {
        name: '危险色调亮7',
        depended: [],
        value: '#fcd3d3',
        originValue: '#fcd3d3',
        id: 'elColorDangerLight7',
        cssVar: '--el-color-danger-light-7',
        type: 'color-16',
        unit: '',
        desc: '危险状态背景色调亮7，预留色'
      },
      {
        name: '危险色调亮8',
        depended: ['Tag', 'Button'],
        value: '#fde2e2',
        originValue: '#fde2e2',
        id: 'elColorDangerLight8',
        cssVar: '--el-color-danger-light-8',
        type: 'color-16',
        unit: '',
        desc: '危险状态背景色调亮8，如Button等'
      },
      {
        name: '危险色调亮9',
        depended: ['Tag', 'Button'],
        value: '#fef0f0',
        originValue: '#fef0f0',
        id: 'elColorDangerLight9',
        cssVar: '--el-color-danger-light-9',
        type: 'color-16',
        unit: '',
        desc: '危险状态背景色调亮9，如Button等'
      },
      {
        name: '危险色调暗2',
        depended: ['Button'],
        value: '#c45656',
        originValue: '#c45656',
        id: 'elColorDangerDark2',
        cssVar: '--el-color-danger-dark-2',
        type: 'color-16',
        unit: '',
        desc: '危险状态背景色调暗2，如Button等'
      }
    ]
  },
  {
    type: 'error',
    name: '异常色',
    data: [
      {
        name: '错误色调',
        depended: ['Alert', 'Button', 'Link', 'Message', 'Notification', 'Result', 'Tag', 'Text'],
        value: '#f56c6c',
        originValue: '#f56c6c',
        id: 'elColorError',
        cssVar: '--el-color-error',
        type: 'color-16',
        unit: '',
        desc: '错误状态背景色调，如Button等'
      },
      {
        name: '错误色调亮3',
        depended: ['Link', 'Tag'],
        value: '#f89898',
        originValue: '#f89898',
        id: 'elColorErrorLight3',
        cssVar: '--el-color-error-light-3',
        type: 'color-16',
        unit: '',
        desc: '错误状态背景色调亮3'
      },
      {
        name: '错误色调亮5',
        depended: ['Link', 'Tag'],
        value: '#fab6b6',
        originValue: '#fab6b6',
        id: 'elColorErrorLight5',
        cssVar: '--el-color-error-light-5',
        type: 'color-16',
        unit: '',
        desc: '错误状态背景色调亮5'
      },
      {
        name: '错误色调亮7',
        depended: [],
        value: '#fcd3d3',
        originValue: '#fcd3d3',
        id: 'elColorErrorLight7',
        cssVar: '--el-color-error-light-7',
        type: 'color-16',
        unit: '',
        desc: '错误状态背景色调亮7，预留色'
      },
      {
        name: '错误色调亮8',
        depended: ['Message', 'Tag'],
        value: '#fde2e2',
        originValue: '#fde2e2',
        id: 'elColorErrorLight8',
        cssVar: '--el-color-error-light-8',
        type: 'color-16',
        unit: '',
        desc: '错误状态背景色调亮8'
      },
      {
        name: '错误色调亮9',
        depended: ['Alert', 'Message', 'Tag'],
        value: '#fef0f0',
        originValue: '#fef0f0',
        id: 'elColorErrorLight9',
        cssVar: '--el-color-error-light-9',
        type: 'color-16',
        unit: '',
        desc: '错误状态背景色调亮9'
      },
      {
        name: '错误色调暗2',
        depended: [],
        value: '#c45656',
        originValue: '#c45656',
        id: 'elColorErrorDark2',
        cssVar: '--el-color-error-dark-2',
        type: 'color-16',
        unit: '',
        desc: '错误状态背景色调暗2，预留色'
      }
    ]
  },
  {
    type: 'info',
    name: '信息色',
    data: [
      {
        name: '信息色调',
        depended: ['Alert', 'Button', 'Badge', 'CheckBox', 'Dialog', 'Textarea', 'Input', 'Link'],
        value: '#909399',
        originValue: '#909399',
        id: 'elColorInfo',
        cssVar: '--el-color-info',
        type: 'color-16',
        unit: '',
        desc: '信息状态背景色调，如Button等'
      },
      {
        name: '信息色调亮3',
        depended: ['Badge', 'Button', 'Calendar', 'CheckBox', 'Selector'],
        value: '#b1b3b8',
        originValue: '#b1b3b8',
        id: 'elColorInfoLight3',
        cssVar: '--el-color-info-light-3',
        type: 'color-16',
        unit: '',
        desc: '信息状态背景色调亮3，如Button等'
      },
      {
        name: '信息色调亮5',
        depended: ['Badge', 'Button', 'Calendar', 'CheckBox', 'Selector'],
        value: '#c8c9cc',
        originValue: '#c8c9cc',
        id: 'elColorInfoLight5',
        cssVar: '--el-color-info-light-5',
        type: 'color-16',
        unit: '',
        desc: '信息状态背景色调亮5，如Button等'
      },
      {
        name: '信息色调亮7',
        depended: ['Badge', 'Button', 'Calendar', 'CheckBox', 'Selector'],
        value: '#dedfe0',
        originValue: '#dedfe0',
        id: 'elColorInfoLight7',
        cssVar: '--el-color-info-light-7',
        type: 'color-16',
        unit: '',
        desc: '信息状态背景色调亮7，如Button等'
      },
      {
        name: '信息色调亮8',
        depended: ['Badge', 'Button', 'Calendar', 'CheckBox', 'Selector'],
        value: '#e9e9eb',
        originValue: '#e9e9eb',
        id: 'elColorInfoLight8',
        cssVar: '--el-color-info-light-8',
        type: 'color-16',
        unit: '',
        desc: '信息状态背景色调亮8，如Button等'
      },
      {
        name: '信息色调亮9',
        depended: ['Badge', 'Button', 'Calendar', 'CheckBox', 'Selector'],
        value: '#f4f4f5',
        originValue: '#f4f4f5',
        id: 'elColorInfoLight9',
        cssVar: '--el-color-info-light-9',
        type: 'color-16',
        unit: '',
        desc: '信息状态背景色调亮9，如Button等'
      },
      {
        name: '信息色调暗2',
        depended: ['Badge', 'Button', 'Calendar', 'CheckBox', 'Selector'],
        value: '#73767a',
        originValue: '#73767a',
        id: 'elColorInfoDark2',
        cssVar: '--el-color-info-dark-2',
        type: 'color-16',
        unit: '',
        desc: '信息状态背景色调暗2，如Button等'
      }
    ]
  },
  {
    type: 'bg',
    name: '背景色',
    data: [
      {
        name: '背景色',
        depended: ['全局'],
        value: '#ffffff',
        originValue: '#ffffff',
        id: 'elBgColor',
        cssVar: '--el-bg-color',
        type: 'color-16',
        unit: '',
        desc: '全局背景色'
      },
      {
        name: '页面背景色',
        depended: ['全局'],
        value: '#f2f3f5',
        originValue: '#f2f3f5',
        id: 'elBgColorPage',
        cssVar: '--el-bg-color-page',
        type: 'color-16',
        unit: '',
        desc: '页面背景色'
      },
      {
        name: '遮罩层背景色',
        depended: ['全局'],
        value: '#ffffff',
        originValue: '#ffffff',
        id: 'elBgColorOverlay',
        cssVar: '--el-bg-color-overlay',
        type: 'color-16',
        unit: '',
        desc: '遮罩层背景色'
      }
    ]
  },
  {
    type: 'text',
    name: '文本色',
    data: [
      {
        name: '主要文本色',
        depended: ['全局'],
        value: '#303133',
        originValue: '#303133',
        id: 'elTextColorPrimary',
        cssVar: '--el-text-color-primary',
        type: 'color-16',
        unit: '',
        desc: '主要文本色'
      },
      {
        name: '常规文本色',
        depended: ['全局'],
        value: '#606266',
        originValue: '#606266',
        id: 'elTextColorRegular',
        cssVar: '--el-text-color-regular',
        type: 'color-16',
        unit: '',
        desc: '常规文本色'
      },
      {
        name: '次要文本色',
        depended: ['全局'],
        value: '#909399',
        originValue: '#909399',
        id: 'elTextColorSecondary',
        cssVar: '--el-text-color-secondary',
        type: 'color-16',
        unit: '',
        desc: '次要文本色'
      },
      {
        name: '占位符文本色',
        depended: ['全局'],
        value: '#a8abb2',
        originValue: '#a8abb2',
        id: 'elTextColorPlaceholder',
        cssVar: '--el-text-color-placeholder',
        type: 'color-16',
        unit: '',
        desc: '占位符文本色'
      },
      {
        name: '禁用文本色',
        depended: ['全局'],
        value: '#c0c4cc',
        originValue: '#c0c4cc',
        id: 'elTextColorDisabled',
        cssVar: '--el-text-color-disabled',
        type: 'color-16',
        unit: '',
        desc: '禁用文本色'
      }
    ]
  },
  {
    type: 'border',
    name: '边框色',
    data: [
      {
        name: '边框颜色',
        depended: ['全局'],
        value: '#dcdfe6',
        originValue: '#dcdfe6',
        id: 'elBorderColor',
        cssVar: '--el-border-color',
        type: 'color-16',
        unit: '',
        desc: '常规边框颜色'
      },
      {
        name: '浅色边框颜色',
        depended: ['全局'],
        value: '#e4e7ed',
        originValue: '#e4e7ed',
        id: 'elBorderColorLight',
        cssVar: '--el-border-color-light',
        type: 'color-16',
        unit: '',
        desc: '浅色边框颜色'
      },
      {
        name: '更浅色边框颜色',
        depended: ['全局'],
        value: '#ebeef5',
        originValue: '#ebeef5',
        id: 'elBorderColorLighter',
        cssVar: '--el-border-color-lighter',
        type: 'color-16',
        unit: '',
        desc: '更浅色边框颜色'
      },
      {
        name: '极浅色边框颜色',
        depended: ['全局'],
        value: '#f2f6fc',
        originValue: '#f2f6fc',
        id: 'elBorderColorExtraLight',
        cssVar: '--el-border-color-extra-light',
        type: 'color-16',
        unit: '',
        desc: '极浅色边框颜色'
      },
      {
        name: '深色边框颜色',
        depended: ['全局'],
        value: '#d4d7de',
        originValue: '#d4d7de',
        id: 'elBorderColorDark',
        cssVar: '--el-border-color-dark',
        type: 'color-16',
        unit: '',
        desc: '深色边框颜色'
      },
      {
        name: '更深色边框颜色',
        depended: ['全局'],
        value: '#cdd0d6',
        originValue: '#cdd0d6',
        id: 'elBorderColorDarker',
        cssVar: '--el-border-color-darker',
        type: 'color-16',
        unit: '',
        desc: '更深色边框颜色'
      }
    ]
  },
  {
    type: 'fill',
    name: '填充色',
    data: [
      {
        name: '填充色',
        depended: ['全局'],
        value: '#f0f2f5',
        originValue: '#f0f2f5',
        id: 'elFillColor',
        cssVar: '--el-fill-color',
        type: 'color-16',
        unit: '',
        desc: '常规填充色'
      },
      {
        name: '浅色填充色',
        depended: ['全局'],
        value: '#f5f7fa',
        originValue: '#f5f7fa',
        id: 'elFillColorLight',
        cssVar: '--el-fill-color-light',
        type: 'color-16',
        unit: '',
        desc: '浅色填充色'
      },
      {
        name: '更浅色填充色',
        depended: ['全局'],
        value: '#fafafa',
        originValue: '#fafafa',
        id: 'elFillColorLighter',
        cssVar: '--el-fill-color-lighter',
        type: 'color-16',
        unit: '',
        desc: '更浅色填充色'
      },
      {
        name: '极浅色填充色',
        depended: ['全局'],
        value: '#fafcff',
        originValue: '#fafcff',
        id: 'elFillColorExtraLight',
        cssVar: '--el-fill-color-extra-light',
        type: 'color-16',
        unit: '',
        desc: '极浅色填充色'
      },
      {
        name: '深色填充色',
        depended: ['全局'],
        value: '#ebedf0',
        originValue: '#ebedf0',
        id: 'elFillColorDark',
        cssVar: '--el-fill-color-dark',
        type: 'color-16',
        unit: '',
        desc: '深色填充色'
      },
      {
        name: '更深色填充色',
        depended: ['全局'],
        value: '#e6e8eb',
        originValue: '#e6e8eb',
        id: 'elFillColorDarker',
        cssVar: '--el-fill-color-darker',
        type: 'color-16',
        unit: '',
        desc: '更深色填充色'
      },
      {
        name: '空白填充色',
        depended: ['全局'],
        value: '#ffffff',
        originValue: '#ffffff',
        id: 'elFillColorBlank',
        cssVar: '--el-fill-color-blank',
        type: 'color-16',
        unit: '',
        desc: '空白填充色'
      }
    ]
  },
  {
    type: 'mask',
    name: '遮罩色',
    data: [
      {
        name: '遮罩层颜色',
        depended: ['全局'],
        value: 'rgba(0, 0, 0, 0.8)',
        originValue: 'rgba(0, 0, 0, 0.8)',
        id: 'elOverlayColor',
        cssVar: '--el-overlay-color',
        type: 'color-rgba',
        unit: '',
        desc: '遮罩层颜色'
      },
      {
        name: '浅色遮罩层颜色',
        depended: ['全局'],
        value: 'rgba(0, 0, 0, 0.7)',
        originValue: 'rgba(0, 0, 0, 0.7)',
        id: 'elOverlayColorLight',
        cssVar: '--el-overlay-color-light',
        type: 'color-rgba',
        unit: '',
        desc: '浅色遮罩层颜色'
      },
      {
        name: '更浅色遮罩层颜色',
        depended: ['全局'],
        value: 'rgba(0, 0, 0, 0.5)',
        originValue: 'rgba(0, 0, 0, 0.5)',
        id: 'elOverlayColorLighter',
        cssVar: '--el-overlay-color-lighter',
        type: 'color-rgba',
        unit: '',
        desc: '更浅色遮罩层颜色'
      },
      {
        name: '遮罩颜色',
        depended: ['全局'],
        value: 'rgba(255, 255, 255, 0.9)',
        originValue: 'rgba(255, 255, 255, 0.9)',
        id: 'elMaskColor',
        cssVar: '--el-mask-color',
        type: 'color-rgba',
        unit: '',
        desc: '遮罩颜色'
      },
      {
        name: '极浅色遮罩颜色',
        depended: ['全局'],
        value: 'rgba(255, 255, 255, 0.3)',
        originValue: 'rgba(255, 255, 255, 0.3)',
        id: 'elMaskColorExtraLight',
        cssVar: '--el-mask-color-extra-light',
        type: 'color-rgba',
        unit: '',
        desc: '极浅色遮罩颜色'
      }
    ]
  }
]