<script setup lang="ts">
import icon_easy from '@/assets/naming/icon-easy.png'
import icon_excellent from '@/assets/naming/icon-excellent.png'
import icon_pass from '@/assets/naming/icon-pass.png'
import icon_quick from '@/assets/naming/icon-quick.png'

useTitle('公司起名 - 企什么')

const { push } = useRouter()
const { isMobile } = useBasicLayout()
if (!isMobile.value)
  push('/naming')

const descList = [
  { icon: icon_easy, text: '易读好记' },
  { icon: icon_pass, text: '注册通过率高' },
  { icon: icon_excellent, text: '高分美名' },
  { icon: icon_quick, text: '急速起名' },
]

const textList = [
  '基于企业工商大数据分析注册通过率',
  '系统结合唐诗宋词公司起名更优雅',
  '独家算法结合行业五行喜忌',
  '遵循公司命名规则 保证名称能够注册',
  '人工智能算法1秒出结果',
]

const res = ref<{ companyName: string; key: string }[]>([])

function setRes(data) {
  res.value = data
  window.scrollTo(0, 550)
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
    <MNamingRes v-if="res.length" id="res" mt-16 :res="res" />
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
            v-for="(item, index) in descList"
            :key="item.text"
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
        <div class="bg1" text="3xl white center" w-full py-12 font-bold>
          智能公司起名的亮点
        </div>
        <div class="bg2" w-full flex-col-cc px-5 py-12 space-y-5>
          <div
            v-for="text in textList"
            :key="text"
            class="bg3"
            w-full py-8
            text="base #222 center"
          >
            {{ text }}
          </div>
        </div>
      </div>
      <MNamingDesc mt-16 />
    </template>
    <TheFooter mt-16 />
  </div>
</template>

<style scoped lang="scss">
.bg1 {
  background: url('@/assets/m/name-desc-header-1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg2 {
  background: url('@/assets/m/name-desc-header-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg3 {
  background: url('@/assets/m/name-desc-header-3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
