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
if (isMobile.value)
  push('/m/check')

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
  <div>
    <div class="header" py-40>
      <div text="#F4F7FC" m-auto max-w-7xl flex-col-cc>
        <div mb-6 text="6xl" font-bold>
          工商核名预查询系统
        </div>
        <div mb-6 text-2xl>
          快速查询公司名字能否注册
        </div>
        <div flex-col-cs text-black>
          <CheckForm @set-res="setRes" />
        </div>
      </div>
    </div>
    <div v-if="res.length" m-auto mt-24 max-w-7xl>
      <div text="3xl #222" mb-4 font-bold>
        智能核名系统已为您查询到以下结果
      </div>
      <div mb-12 text="base #666">
        本站数据仅供参考，最终以工商局审核结果为准
      </div>
      <div space-y-4>
        <div
          v-for="(item) in res"
          :key="item.companyName"
          flex flex-col p="x7 y3"
          border="~ 1 #ddd"
        >
          <div>
            <div flex-sc>
              <p text="lg #222" mr-4>
                {{ item.companyName }}
              </p>
              <NTag type="success" size="small">
                {{ item.regStatus }}
              </NTag>
            </div>
            <div mt-4 flex space-x-8>
              <div><span text-gray>法定代表人: </span><span>{{ item.legalPersonName }}</span></div>
              <div><span text-gray>注册资本: </span><span>{{ item.regCapital }}</span></div>
              <div><span text-gray>成立日期: </span><span>{{ item.regData }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
      <div mt="-12" flex-cc>
        <div
          v-for="item in descList"
          :key="item.text"
          m-3 h-28 w-74 flex-cc bg-white px-7 shadow-lg
        >
          <img :src="item.icon" mr-8 w-8>
          <div>
            <div text="lg #222">
              {{ item.text }}
            </div>
            <div text="sm #222">
              {{ item.text1 }}
            </div>
          </div>
        </div>
      </div>
      <div mt-24 flex-col-cc>
        <div text="3xl #222" mb-4 font-bold>
          公司核名的作用
        </div>
        <div text="base #666">
          采用企业大数据分析，从6000万+企业信息和驰名/著名商标中分析出公司名称的通过率
        </div>
        <div mt-12 flex>
          <div
            v-for="(item, index) in textList"
            :key="item.text"
            :style="{ backgroundColor: index % 2 ? '#ebebeb' : '#f5f5f5' }"
            h-42 w-80 flex-col-cs px-12
          >
            <div mb-5 flex-cc text="#222">
              <img :src="item.icon" mr-2 w-6>
              <div text-lg>
                {{ item.text }}
              </div>
            </div>
            <div text-base>
              {{ item.text1 }}
            </div>
          </div>
        </div>
      </div>
      <RegisterDesc mt-24 />
      <NamingDesc mt-24 />
    </template>
    <TheFooter mt-24 />
  </div>
</template>
