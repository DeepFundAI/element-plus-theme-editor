<template>
  <el-row style="padding: 40px 20px 0 20px">
    <el-col :span="6">
      <div class="flex items-center gap-2">
        <span>主题编辑器</span>
        <el-button type="primary" link @click="openGithub">
          <Github style="color: rgb(48, 49, 51)" class="!w-5 !h-5" />
        </el-button>
      </div>
    </el-col>
    <el-col :span="18" style="display: flex; justify-content: end; align-items: start">
      <el-switch
        v-model="isDark"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
        style="margin-right: 10px"
      />
      <el-switch
        v-model="autoColorCalc"
        active-text="色值自动计算"
        inactive-text="手动"
        style="margin-right: 10px"
      />
      <el-button @click="saveObjectAsCss('cssVar.css')">导出</el-button>
      <!-- <el-button>编辑</el-button> -->
      <el-button type="primary">保存</el-button>
    </el-col>
  </el-row>
  <el-row class="editor-container">
    <el-col :span="8" style="border: 1px solid #efefef; padding: 10px">
      <el-tabs v-model="activeName" class="h-full theme-tab-pane">
        <el-tab-pane label="颜色" name="first">
          <el-collapse v-model="activeNames">
            <el-collapse-item
              v-for="colorTheme in color"
              :key="colorTheme.type"
              :title="colorTheme.name"
              :name="colorTheme.type"
            >
              <el-table
                :data="colorTheme.data"
                :show-header="false"
                :border="true"
                style="width: 100%"
              >
                <el-table-column width="40" type="expand">
                  <template #default="props">
                    <div>
                      <div class="text-gray-400">{{ props.row.desc }}</div>
                      <el-tag
                        v-for="(item, index) in props.row.depended"
                        :key="index"
                        type="info"
                        class="mr-1"
                        >{{ item }}</el-tag
                      >
                      <div class="flex justify-start gap-1 mt-1">
                        <el-color-picker
                          v-model="props.row.value"
                          @change="updateCssVar(props.row)"
                          :show-alpha="props.row.type === 'color-rgba'"
                        />
                        <el-input
                          v-model="props.row.value"
                          @input="updateCssVar(props.row)"
                          style="width: 50%"
                        ></el-input>
                        <el-button type="primary" @click="resetColor(props.row)" link
                          >重置</el-button
                        >
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column width="auto" label="名称">
                  <template #default="props">
                    {{ props.row.name }} | {{ props.row.cssVar }} | {{ props.row.value }}
                  </template>
                </el-table-column>
                <el-table-column width="60" label="颜色">
                  <template #default="props">
                    <div :style="{ backgroundColor: props.row.value, height: '20px' }"></div>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="尺寸" name="second">
          <el-collapse v-model="activeNames">
            <el-collapse-item
              v-for="sizeTheme in size"
              :key="sizeTheme.type"
              :title="sizeTheme.name"
              :name="sizeTheme.type"
            >
              <el-table
                :data="sizeTheme.data"
                :show-header="false"
                :border="true"
                style="width: 100%"
              >
                <el-table-column width="40" type="expand">
                  <template #default="props">
                    <div>
                      <div class="text-gray-400">{{ props.row.desc }}</div>
                      <el-tag
                        v-for="(item, index) in props.row.depended"
                        :key="index"
                        type="info"
                        class="mr-1"
                        >{{ item }}</el-tag
                      >
                      <div class="flex justify-start gap-1 mt-1">
                        <el-input-number
                          class="ml-1"
                          style="width: 20%"
                          v-model="props.row.value"
                          :min="props.row.type === 'fontweight' ? 0 : 1"
                          :step="props.row.type === 'fontweight' ? 100 : 1"
                          @change="updateCssVar(props.row)"
                        />
                        <el-button type="primary" @click="resetColor(props.row)" link
                          >重置</el-button
                        >
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column width="auto" label="名称">
                  <template #default="props">
                    {{ props.row.name }} | {{ props.row.cssVar }} | {{ props.row.value }}
                  </template>
                </el-table-column>
                <el-table-column width="80" label="字号">
                  <template #default="props">
                    <div
                      v-if="props.row.type === 'fontsize'"
                      class="font h-12 flex justify-center items-center"
                      :style="{ fontSize: `${props.row.value}${props.row.unit}` }"
                    >
                      <span>Aa</span>
                    </div>
                    <div
                      v-if="props.row.type === 'fontweight'"
                      class="font h-12 flex justify-center items-center"
                      :style="{ fontWeight: props.row.value }"
                    >
                      <span>Aa</span>
                    </div>
                    <div
                      v-if="props.row.type === 'lineheight'"
                      class="font h-12 w-full flex justify-center items-center"
                    >
                      <div
                        class="flex w-full justify-center items-center"
                        :style="{ height: `${props.row.value}${props.row.unit}` }"
                        style="background-color: rgb(255, 242, 240)"
                      >
                        <span>Aa</span>
                      </div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="风格" name="third">
          <el-collapse v-model="activeNames">
            <el-collapse-item
              v-for="styleTheme in style"
              :key="styleTheme.type"
              :title="styleTheme.name"
              :name="styleTheme.type"
            >
              <el-table
                :data="styleTheme.data"
                :show-header="false"
                :border="true"
                style="width: 100%"
              >
                <el-table-column width="40" type="expand">
                  <template #default="props">
                    <div>
                      <div class="text-gray-400">{{ props.row.desc }}</div>
                      <el-tag
                        v-for="(item, index) in props.row.depended"
                        :key="index"
                        type="info"
                        class="mr-1"
                        >{{ item }}</el-tag
                      >
                      <div class="flex justify-start gap-1 mt-1">
                        <el-input-number
                          class="ml-1"
                          style="width: 20%"
                          v-model="props.row.value"
                          :min="1"
                          @change="updateCssVar(props.row)"
                          v-if="props.row.type === 'borderradius'"
                        />
                        <el-input
                          class="ml-1"
                          style="width: 80%"
                          v-model="props.row.value"
                          :min="1"
                          @change="updateCssVar(props.row)"
                          v-if="props.row.type === 'boxshadow'"
                        />
                        <el-button type="primary" @click="resetColor(props.row)" link
                          >重置</el-button
                        >
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column width="auto" label="名称">
                  <template #default="props">
                    {{ props.row.name }} | {{ props.row.cssVar }} | {{ props.row.value }}
                  </template>
                </el-table-column>
                <el-table-column width="80" label="字号">
                  <template #default="props">
                    <div
                      v-if="props.row.type === 'borderradius'"
                      class="border-radius h-12 flex justify-center items-center overflow-hidden"
                    >
                      <div
                        class="h-12 translate-x-1/3 translate-y-1/3 border-solid border border-gray-600 w-full bg-white"
                        :style="{ borderRadius: `${props.row.value}${props.row.unit}` }"
                      ></div>
                    </div>
                    <div
                      v-if="props.row.type === 'boxshadow'"
                      class="border-radius h-12 flex justify-center items-center overflow-hidden"
                    >
                      <div
                        class="h-8 border-solid border border-gray-200 w-8 bg-white"
                        :style="{ boxShadow: props.row.value }"
                      ></div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="其它" name="fourth">
          <el-collapse v-model="activeNames">
            <el-collapse-item
              v-for="otherTheme in other"
              :key="otherTheme.type"
              :title="otherTheme.name"
              :name="otherTheme.type"
            >
              <el-table
                :data="otherTheme.data"
                :show-header="false"
                :border="true"
                style="width: 100%"
              >
                <el-table-column width="40" type="expand">
                  <template #default="props">
                    <div>
                      <div class="text-gray-400">{{ props.row.desc }}</div>
                      <el-tag
                        v-for="(item, index) in props.row.depended"
                        :key="index"
                        type="info"
                        class="mr-1"
                        >{{ item }}</el-tag
                      >
                      <div class="flex justify-start gap-1 mt-1">
                        <el-input-number
                          class="ml-1"
                          style="width: 20%"
                          v-model="props.row.value"
                          :min="1"
                          @change="updateCssVar(props.row)"
                          v-if="props.row.type === 'borderwidth'"
                        />
                        <el-input
                          class="ml-1"
                          style="width: 80%"
                          v-model="props.row.value"
                          :min="1"
                          @input="updateCssVar(props.row)"
                          v-if="props.row.type === 'borderstyle'"
                        />
                        <el-button type="primary" @click="resetColor(props.row)" link
                          >重置</el-button
                        >
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column width="auto" label="名称">
                  <template #default="props">
                    {{ props.row.name }} | {{ props.row.cssVar }} | {{ props.row.value }}
                  </template>
                </el-table-column>
                <el-table-column width="80" label="字号">
                  <template #default="props">
                    <div
                      v-if="props.row.type === 'borderwidth'"
                      class="border-radius h-12 flex justify-center items-center overflow-hidden"
                    >
                      <div
                        class="h-12 translate-x-1/3 translate-y-1/3 border-solid border border-gray-600 w-full bg-white"
                        :style="{ borderWidth: `${props.row.value}${props.row.unit}` }"
                      ></div>
                    </div>
                    <div
                      v-if="props.row.type === 'borderstyle'"
                      class="border-radius h-12 flex justify-center items-center overflow-hidden"
                    >
                      <div
                        class="h-8 border-solid border border-gray-500 w-8 bg-white"
                        :style="{ borderStyle: props.row.value }"
                      ></div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col
      :span="16"
      class="overflow-y-auto bg-background-00 black:bg-background-00-dark"
      style="padding: 10px"
    >
      <RouterView />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { ref, type Ref } from 'vue'
import { useDark } from '@vueuse/core'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { type CssVarInfo } from '@/common/models/css-var-info.ts'
import color from '@/common/config/theme/color'
import size from '@/common/config/theme/size'
import style from '@/common/config/theme/style'
import other from '@/common/config/theme/other'
import Github from '@/components/icons/Github.vue'

const activeName = ref('first')
const activeNames = ref(['1'])
const modifyCssVar: Ref<Record<string, string>> = ref({})
const autoColorCalc = ref(true)

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
  storageKey: 'theme-mode',
  storage: localStorage,
})

const mixColor = (color1: string, color2: string, weight: number) => {
  const w = Math.max(Math.min(weight, 1), 0)
  const toHex = (color: string) => color.replace('#', '')
  const c1 = toHex(color1)
  const c2 = toHex(color2)
  const r = Math.round(parseInt(c1.slice(0, 2), 16) * w + parseInt(c2.slice(0, 2), 16) * (1 - w))
  const g = Math.round(parseInt(c1.slice(2, 4), 16) * w + parseInt(c2.slice(2, 4), 16) * (1 - w))
  const b = Math.round(parseInt(c1.slice(4, 6), 16) * w + parseInt(c2.slice(4, 6), 16) * (1 - w))
  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

const recomputeColorVars = (cssVar: string, base: string) => {
  const match = cssVar.match(/^--el-color-(\w+)$/)
  if (!match) return
  const type = match[1]
  const targetType = type === 'warning' ? 'warnning' : type
  const group = color.find((c) => c.type === targetType)
  if (!group) return
  group.data.forEach((item) => {
    if (item.cssVar === cssVar) return
    const light = item.cssVar.match(/light-(\d+)$/)
    const dark = item.cssVar.match(/dark-(\d+)$/)
    let value: string | undefined
    if (light) {
      value = mixColor('#ffffff', base, Number(light[1]) / 10)
    } else if (dark) {
      value = mixColor('#000000', base, Number(dark[1]) / 10)
    }
    if (value) {
      item.value = value
      setCssVarValue(item.cssVar, value)
      modifyCssVar.value[item.cssVar] = value
    }
  })
}

const updateCssVar = (props: CssVarInfo) => {
  const value = props.value + props.unit
  setCssVarValue(props.cssVar, value)
  modifyCssVar.value[props.cssVar] = value

  if (autoColorCalc.value) {
    recomputeColorVars(props.cssVar, props.value)
  }
}

const setCssVarValue = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value)
}

const resetColor = (props: CssVarInfo) => {
  props.value = props.originValue
  updateCssVar(props)
}

// 保存变量至css文件中
function saveObjectAsCss(filename: string) {
  let cssText = ''

  for (const key in modifyCssVar.value) {
    if (Object.prototype.hasOwnProperty.call(modifyCssVar.value, key)) {
      const value = modifyCssVar.value[key]
      cssText += `${key}: ${value};\n`
    }
  }

  const blob = new Blob([cssText], { type: 'text/css' })
  const a = document.createElement('a')
  const url = URL.createObjectURL(blob)
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(url)
  document.body.removeChild(a)
}

const openGithub = () => {
  window.open('https://github.com/DeepFundAI/element-plus-theme-editor', '_blank')
}
</script>
<style lang="less" scoped>
.editor-container {
  height: calc(100% - 72px);
  padding: 20px 20px 40px 20px;
}
.el-col {
  height: 100%;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.font,
.border-radius {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAntljEKADAIA23p6v//qQ+wfUEcCu1yriEgp0FHRJSJcnehmmWm1Dv/lO4HIg1AAAKjTqm03ea88zMCCEDgO4HV5bS757f+7wRoAAIQ4B9gByAAgQ3pfiDmXmAeEwAAAABJRU5ErkJggg==);
}
</style>
<style lang="less">
.theme-tab-pane {
  height: 100%;
  .el-tabs__content {
    height: calc(100% - 40px);
    overflow-y: auto;
  }
}
</style>
<style lang="less">
#app {
  height: 100%;
  width: 100%;
}
</style>
