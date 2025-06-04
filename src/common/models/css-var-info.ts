export interface CssVarInfo {
    // 变量名称
    name: string;
    // 被依赖的组件
    depended: [];
    // 色值
    value: string;
    // 原始色值
    originValue: string;
    // 变量id
    id: string;
    // 变量原始id
    cssVar: string;
    // 变量描述
    desc: string;
    // 变量属性
    type: string;
    // 属性值单位
    unit: string;
}