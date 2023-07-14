<script setup lang="ts">
import { NTag } from 'naive-ui'
import icon_archive from '@/assets/check/icon-archive.png'
import icon_building from '@/assets/check/icon-building.png'
import icon_cancel from '@/assets/check/icon-cancel.png'
import icon_data from '@/assets/check/icon-data.png'
import icon_intelligent from '@/assets/check/icon-intelligent.png'
import icon_pass from '@/assets/check/icon-pass.png'
import icon_service from '@/assets/check/icon-service.png'
import icon_upgrade from '@/assets/check/icon-upgrade.png'

useTitle('公司核名 - 企什么')

const { push } = useRouter()
const { isMobile } = useBasicLayout()
if (!isMobile.value)
  push('/check')

const descList = [
  { icon: icon_data, text: '大数据', text1: 'AI智能分析' },
  { icon: icon_building, text: '6000万+企业', text1: '数据实时更新' },
  { icon: icon_pass, text: '通过率', text1: '高达98%' },
  { icon: icon_service, text: '已成功服务', text1: '全国50万+企业' },
]

const textList = [
  { icon: icon_archive, text: '基于工商数据', text1: '对比数据库，排除现有企业名称' },
  { icon: icon_intelligent, text: '字号联想算法', text1: '字形字义字音，智能识别' },
  { icon: icon_upgrade, text: '数据实时更新 ', text1: '排除正被别人提交审核的名字' },
  { icon: icon_cancel, text: '行业关联算法', text1: '检测相似的业内品牌名称' },
]

interface Item {
  companyName: string
  legalPersonName: string
  regCapital: string
  regData: string
  regStatus: string
}

const res = ref<Item[]>([])
function setRes(data) {
  res.value = data
  window.scrollTo(0, 550)
}
</script>

<template>
  <div m-auto container>
    <div class="header" px-5 py-16>
      <div text="#F4F7FC">
        <div mb-6 text="3xl" font-bold>
          工商核名预查询系统
        </div>
        <div mb-6 text-base>
          快速查询公司名字能否注册
        </div>
        <MCheckForm @set-res="setRes" />
      </div>
    </div>
    <div v-if="res.length" mt-12 px-5>
      <div text="3xl #222 center" mb-4 font-bold>
        智能核名系统已为您查询到以下结果
      </div>
      <div text="base #666 center">
        本站数据仅供参考，最终以工商局审核结果为准
      </div>
      <div mt-8 space-y-4>
        <div
          v-for="(item) in res"
          :key="item.companyName"
          p-4 border="~ 1 #ddd"
        >
          <div flex-sc>
            <p text="lg #222" mr-4>
              {{ item.companyName }}
            </p>
            <NTag type="success" size="small">
              {{ item.regStatus }}
            </NTag>
          </div>
          <div mt-2 flex-bc text-sm>
            <div flex-col-cs>
              <p text-gray>
                法定代表人
              </p>
              <p>{{ item.legalPersonName }}</p>
            </div>
            <div flex-col-cs>
              <p text-gray>
                注册资本
              </p>
              <p>{{ item.regCapital }}</p>
            </div>
            <div flex-col-cs>
              <p text-gray>
                成立日期
              </p>
              <p>{{ item.regData }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
      <div grid="~ cols-4">
        <div
          v-for="item in descList"
          :key="item.text"
          h-24 flex-col-cc
        >
          <img :src="item.icon" mb-2 w-5>
          <div text="xs #222">
            {{ item.text }}
          </div>
          <div text="xs #222">
            {{ item.text1 }}
          </div>
        </div>
      </div>
      <div flex-col-cc px-5 py-12 bg="#f2f4fb">
        <div text="3xl #222 center" mb-4 font-bold>
          公司核名的作用
        </div>
        <div text="base #666 center">
          采用企业大数据分析，从6000万+企业信息和驰名/著名商标中分析出公司名称的通过率
        </div>
        <div grid="~ cols-2" mt-8 w-full gap-5>
          <div
            v-for="(item, index) in textList"
            :key="item.text"
            :style="{ backgroundColor: [1, 2].includes(index) ? '#ebedf5' : '#fff' }"
            flex="~ items-start" p-4
          >
            <img :src="item.icon" mr-2 mt-1 w-5>
            <div>
              <div text="base #222" mb-1>
                {{ item.text }}
              </div>
              <div text="sm #666">
                {{ item.text1 }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MRegisterDesc mt-12 />
      <MNamingDesc mt-12 />
    </template>
    <TheFooter mt-12 />
  </div>
</template>
