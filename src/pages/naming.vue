<script setup lang="ts">
import { NCarousel } from 'naive-ui'
import icon_easy from '@/assets/naming/icon-easy.png'
import icon_excellent from '@/assets/naming/icon-excellent.png'
import icon_pass from '@/assets/naming/icon-pass.png'
import icon_quick from '@/assets/naming/icon-quick.png'

useTitle('公司起名 - 企什么')

const { push } = useRouter()
const { isMobile } = useBasicLayout()
if (isMobile.value)
  push('/m/naming')

const descList = [
  { icon: icon_easy, text: '易读好记' },
  { icon: icon_pass, text: '注册通过率高' },
  { icon: icon_excellent, text: '高分美名' },
  { icon: icon_quick, text: '急速起名' },
]

const carouselRef = ref()
function prev() {
  carouselRef.value.prev()
}
function next() {
  carouselRef.value.next()
}

const res = ref<{ companyName: string; key: string }[]>([])

function setRes(data) {
  res.value = data
}
</script>

<template>
  <div>
    <div class="header" py-40>
      <div text="#F4F7FC" m-auto max-w-7xl flex-col-cc>
        <div mb-6 text="6xl" font-bold>
          人工智能公司起名系统
        </div>
        <div mb-6 text-2xl>
          已为创业者提供38620+次服务
        </div>
        <div flex-col-cs text-black>
          <NamingForm @set-res="setRes" />
        </div>
      </div>
    </div>
    <NamingRes v-if="res.length" mt-24 :res="res" />
    <template v-else>
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
      <div mt-24 class="bg2" w-full flex-cc>
        <div my-24 flex>
          <div h-35 w-78 flex-col-cs text="2xl white">
            <img src="@/assets/naming/quote.png" mb-4 w-12>
            <p>智能公司</p>
            <p>起名的亮点</p>
          </div>
          <div flex-cc>
            <img src="@/assets/naming/banner-prev.png" mx-8 h-4 cursor-pointer @click="prev">
            <NCarousel
              ref="carouselRef"
              :slides-per-view="3"
              :show-dots="false"
              :space-between="20"
              :loop="false"
              w-4xl
            >
              <img src="@/assets/naming/banner1.png">
              <img src="@/assets/naming/banner2.png">
              <img src="@/assets/naming/banner3.png">
              <img src="@/assets/naming/banner4.png">
            </NCarousel>
            <img src="@/assets/naming/banner-next.png" mx-8 h-4 cursor-pointer @click="next">
          </div>
        </div>
      </div>
      <NamingDesc mt-24 />
    </template>
    <TheFooter mt-24 />
  </div>
</template>

<style scoped lang="scss">
.bg2 {
  background: url('@/assets/naming/bg2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
