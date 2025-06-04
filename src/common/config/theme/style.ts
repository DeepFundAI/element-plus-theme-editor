export default [
  {
    type: 'borderradius',
    name: '圆角',
    data: [
      {
        name: '基础边框半径',
        depended: [],
        value: 4,
        originValue: 4,
        id: 'elBorderRadiusBase',
        cssVar: '--el-border-radius-base',
        type: 'borderradius',
        unit: 'px',
        desc: '基础边框半径，'
      },
      {
        name: '小型边框半径',
        depended: [],
        value: 2,
        originValue: 2,
        id: 'elBorderRadiusSmall',
        cssVar: '--el-border-radius-small',
        type: 'borderradius',
        unit: 'px',
        desc: '小型边框半径，'
      },
      {
        name: '圆形边框半径',
        depended: [],
        value: 20,
        originValue: 20,
        id: 'elBorderRadiusRound',
        cssVar: '--el-border-radius-round',
        type: 'borderradius',
        unit: 'px',
        desc: '圆形边框半径，'
      },
      {
        name: '圆形边框半径',
        depended: [],
        value: 100,
        originValue: 100,
        id: 'elBorderRadiusCircle',
        cssVar: '--el-border-radius-circle',
        type: 'borderradius',
        unit: '%',
        desc: '圆形边框半径，'
      }
    ]
  },
  {
    type: 'boxshadow',
    name: '阴影',
    data: [
      {
        name: '通用盒子阴影',
        depended: [],
        value: '0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)',
        originValue: '0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)',
        id: 'elBoxShadow',
        cssVar: '--el-box-shadow',
        type: 'boxshadow',
        unit: '',
        desc: '通用盒子阴影，'
      },
      {
        name: '浅色盒子阴影',
        depended: [],
        value: '0px 0px 12px rgba(0, 0, 0, 0.12)',
        originValue: '0px 0px 12px rgba(0, 0, 0, 0.12)',
        id: 'elBoxShadowLight',
        cssVar: '--el-box-shadow-light',
        type: 'boxshadow',
        unit: '',
        desc: '浅色盒子阴影，'
      },
      {
        name: '较浅色盒子阴影',
        depended: [],
        value: '0px 0px 6px rgba(0, 0, 0, 0.12)',
        originValue: '0px 0px 6px rgba(0, 0, 0, 0.12)',
        id: 'elBoxShadowLighter',
        cssVar: '--el-box-shadow-lighter',
        type: 'boxshadow',
        unit: '',
        desc: '较浅色盒子阴影，'
      },
      {
        name: '深色盒子阴影',
        depended: [],
        value: '0px 16px 48px 16px rgba(0, 0, 0, 0.08), 0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16)',
        originValue: '0px 16px 48px 16px rgba(0, 0, 0, 0.08), 0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16)',
        id: 'elBoxShadowDark',
        cssVar: '--el-box-shadow-dark',
        type: 'boxshadow',
        unit: '',
        desc: '深色盒子阴影，'
      }
    ]
  }
]