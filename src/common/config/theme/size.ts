export default [
  {
    type: 'fontsize',
    name: '字号',
    data: [
      {
        name: '超大字号',
        depended: [],
        value: 20,
        originValue: 20,
        id: 'elFontSizeExtraLarge',
        cssVar: '--el-font-size-extra-large',
        type: 'fontsize',
        unit: 'px',
        desc: '超大字号，'
      },
      {
        name: '大号字体',
        depended: [],
        value: 18,
        originValue: 18,
        id: 'elFontSizeLarge',
        cssVar: '--el-font-size-large',
        type: 'fontsize',
        unit: 'px',
        desc: '大号字体，'
      },
      {
        name: '中号字体',
        depended: [],
        value: 16,
        originValue: 16,
        id: 'elFontSizeMedium',
        cssVar: '--el-font-size-medium',
        type: 'fontsize',
        unit: 'px',
        desc: '中号字体，'
      },
      {
        name: '默认字号',
        depended: [],
        value: 14,
        originValue: 14,
        id: 'elFontSizeBase',
        cssVar: '--el-font-size-base',
        type: 'fontsize',
        unit: 'px',
        desc: '默认字号，'
      },
      {
        name: '小号字体',
        depended: [],
        value: 13,
        originValue: 13,
        id: 'elFontSizeSmall',
        cssVar: '--el-font-size-small',
        type: 'fontsize',
        unit: 'px',
        desc: '小号字体，'
      },
      {
        name: '超小字号',
        depended: [],
        value: 12,
        originValue: 12,
        id: 'elFontSizeExtraSmall',
        cssVar: '--el-font-size-extra-small',
        type: 'fontsize',
        unit: 'px',
        desc: '超小字号，'
      }
    ]
  },
  {
    type: 'lineheight',
    name: '行间距',
    data: [
      {
        name: '大组件尺寸',
        depended: [],
        value: 40,
        originValue: 40,
        id: 'elComponentSizeLarge',
        cssVar: '--el-component-size-large',
        type: 'lineheight',
        unit: 'px',
        desc: '较大行间距/组件高度'
      },
      {
        name: '默认组件尺寸',
        depended: [],
        value: 32,
        originValue: 32,
        id: 'elComponentSize',
        cssVar: '--el-component-size',
        type: 'lineheight',
        unit: 'px',
        desc: '默认组件行间距/高度'
      },
      {
        name: '小型组件尺寸',
        depended: [],
        value: 24,
        originValue: 24,
        id: 'elComponentSizeSmall',
        cssVar: '--el-component-size-small',
        type: 'lineheight',
        unit: 'px',
        desc: '小型组件组件行间距/高度'
      },
      {
        name: '主要字体行高',
        depended: [],
        value: 24,
        originValue: 24,
        id: 'elFontLineHeightPrimary',
        cssVar: '--el-font-line-height-primary',
        type: 'lineheight',
        unit: 'px',
        desc: '主要字体行高，'
      }
    ]
  },
  {
    type: 'fontweight',
    name: '字体粗细',
    data: [
      {
        name: '主要字体粗细',
        depended: [],
        value: 500,
        originValue: 500,
        id: 'elFontWeightPrimary',
        cssVar: '--el-font-weight-primary',
        type: 'fontweight',
        unit: '',
        desc: '主要字体粗细，'
      }
    ]
  }
]