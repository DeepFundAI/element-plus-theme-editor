export default [
  {
    type: 'border',
    name: '边框',
    data: [
      {
        name: '边框宽度',
        depended: ['全局'],
        value: 1,
        originValue: 1,
        id: 'elBorderWidth',
        cssVar: '--el-border-width',
        type: 'borderwidth',
        unit: 'px',
        desc: '边框宽度'
      },
      {
        name: '边框样式',
        depended: ['全局'],
        value: 'solid',
        originValue: 'solid',
        id: 'elBorderWidth',
        cssVar: '--el-border-style',
        type: 'borderstyle',
        unit: '',
        desc: '边框样式 支持solid 实线 dashed 虚线 dotted 点 none 无'
      }
    ]
  }
]