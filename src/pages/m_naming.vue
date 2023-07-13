<script setup lang="ts">
import icon_easy from '@/assets/naming/icon-easy.png'
import icon_excellent from '@/assets/naming/icon-excellent.png'
import icon_pass from '@/assets/naming/icon-pass.png'
import icon_quick from '@/assets/naming/icon-quick.png'

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
  <div m-auto container>
    <div class="header" px-5 py-16>
      <div text="#F4F7FC">
        <div mb-4 text="3xl" font-bold>
          人工智能公司起名系统
        </div>
        <div mb-6 text-base>
          已为创业者提供38620+次服务
        </div>
        <MNamingForm @set-res="setRes" />
      </div>
    </div>
    <NamingRes v-if="res.length" mt-24 :res="res" />
    <template v-else>
      <div mt-16 flex-col-cc px-5>
        <div text="3xl #222 center" mb-4 font-bold>
          基于企业大数据的公司起名
        </div>
        <div text="base #666 center">
          <p>采用企业大数据分析，从6000万+企业信息和驰名/著名商标中分析出公司名称的通过率</p>
        </div>
        <div grid="~ cols-2" mt-8 w-full gap-5>
          <div
            v-for="(item, index) in descList" :key="item.text"
            :style="{ backgroundColor: [1, 2].includes(index) ? '#ebebeb' : '#f5f5f5' }"
            flex-col-cc p-5
          >
            <img :src="item.icon" mb-4 h-6>
            <div text="lg #222">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <div mt-16 w-full flex-col-cc>
        <div class="bg2" text="3xl #222 center" mb-4 font-bold>
          智能公司起名的亮点
        </div>
        <div flex>
          <!-- <div h-35 w-78 flex-col-cc text="2xl white">
            <img src="@/assets/naming/quote.png" mb-4 w-12>
            <p>智能公司</p>
            <p>起名的亮点</p>
          </div> -->
          <div flex-col-cc>
            <img src="@/assets/naming/banner1.png">
            <img src="@/assets/naming/banner2.png">
            <img src="@/assets/naming/banner3.png">
            <img src="@/assets/naming/banner4.png">
          </div>
        </div>
      </div>
      <MNamingDesc mt-16 px-5 />
    </template>
    <TheFooter mt-16 />
  </div>
</template>

<style scoped lang="scss">
.bg2 {
  background: url('@/assets/m/name-desc-header-1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
