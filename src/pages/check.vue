<script setup lang="ts">
import icon_archive from '@/assets/check/icon-archive.png'
import icon_building from '@/assets/check/icon-building.png'
import icon_cancel from '@/assets/check/icon-cancel.png'
import icon_data from '@/assets/check/icon-data.png'
import icon_intelligent from '@/assets/check/icon-intelligent.png'
import icon_pass from '@/assets/check/icon-pass.png'
import icon_service from '@/assets/check/icon-service.png'
import icon_upgrade from '@/assets/check/icon-upgrade.png'

const descList = [
  { icon: icon_data, text: '大数据', text1: 'AI智能分析' },
  { icon: icon_building, text: '6000万+企业', text1: '数据实时更新' },
  { icon: icon_pass, text: '通过率', text1: '高达98%' },
  { icon: icon_service, text: '已成功服务', text1: '已成功服务' },
]

const textList = [
  { icon: icon_archive, text: '基于工商数据', text1: '对比数据库，排除现有企业名称' },
  { icon: icon_intelligent, text: '字号联想算法', text1: '字形字义字音，智能识别' },
  { icon: icon_upgrade, text: '数据实时更新 ', text1: '排除正被别人提交审核的名字' },
  { icon: icon_cancel, text: '行业关联算法', text1: '检测相似的业内品牌名称' },
]
</script>

<template>
  <div>
    <div class="header" py-48>
      <div text="#F4F7FC" m-auto max-w-7xl flex-cc>
        <div>
          <div mb-6 text="4xl" font-bold>
            工商核名预查询系统
          </div>
          <div mb-6 text-2xl>
            快速查询公司名字能否注册
          </div>
          <div flex-col-cs text-black>
            <CheckForm />
          </div>
        </div>
      </div>
    </div>
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
    <TheFooter mt-24 />
  </div>
</template>

<style scoped lang="scss">
</style>
