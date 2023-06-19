<script setup lang="ts">
import descIcon1 from '@/assets/desc-icon-1.png'
import descIcon2 from '@/assets/desc-icon-2.png'
import descIcon3 from '@/assets/desc-icon-3.png'
import descIcon4 from '@/assets/desc-icon-4.png'

const descList = [
  { icon: descIcon1, text: '易读好记' },
  { icon: descIcon2, text: '注册通过率高' },
  { icon: descIcon3, text: '高分美名' },
  { icon: descIcon4, text: '急速起名' },
]

const textList = [
  { text: '基于企业工商大数据', text1: '分析注册通过率' },
  { text: '系统结合唐诗宋词', text1: '公司起名更优雅' },
  { text: '独家算法结合行业', text1: '五行喜忌' },
]
</script>

<template>
  <div>
    <div class="header" py-48>
      <div text="#F4F7FC" m-auto max-w-7xl>
        <div mb-6 text="4xl" font-bold>
          人工智能公司起名系统
        </div>
        <div mb-6 text-2xl>
          已为创业者提供38620+次服务
        </div>
        <div flex-col-cs text-black>
          <NamingForm />
        </div>
      </div>
    </div>
    <div mt-24 flex-col-cc>
      <div text="3xl #222 center" mb-4 font-bold>
        基于企业大数据的公司起名
      </div>
      <div text="base #666 center">
        <p>采用企业大数据分析，从6000万+企业信息和驰名/著名商标中分析出公司名称的通过率</p>
      </div>
      <div mt-12 flex>
        <div
          v-for="(item, index) in descList" :key="item.text"
          :style="{ backgroundColor: index % 2 ? '#ebebeb' : '#f5f5f5' }"
          h-42 w-80 flex-col-ss px-7
        >
          <img :src="item.icon" mb-7 mt-12 h-5>
          <div text="xl #222">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div mt-24 class="header" w-full flex-cc>
      <div my-24 flex>
        <div h-35 w-78 flex-col-cs text="2xl white">
          <p text-42 opacity-30>
            “
          </p>
          <p>智能公司</p>
          <p>起名的亮点</p>
        </div>
        <div
          v-for="(item) in textList" :key="item.text"
          mr-5 h-35 w-78 flex-col-cs px-7 bg="#ffffffCC"
        >
          <div text="xl #222">
            <p mb-2>
              {{ item.text }}
            </p>
            <p>{{ item.text1 }}</p>
          </div>
        </div>
      </div>
    </div>
    <NamingDesc mt-24 />
    <TheFooter mt-24 />
  </div>
</template>

<style scoped lang="scss">
.header {
  background: url('@/assets/header-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
