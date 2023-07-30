<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'

function getMoblie() {
  const prefixArray = ['13', '15', '18']
  const i = Math.floor(3 * Math.random())
  const prefix = prefixArray[i]
  let moblie = `${prefix + Math.floor(Math.random() * 10)}****`
  for (let j = 0; j < 4; j++)
    moblie = moblie + Math.floor(Math.random() * 10)
  return moblie
}

const featList = ['公司起名', '公司核名', '经营范围']
const timeList = ['分钟', '秒', '小时']

function getRandomTextList() {
  const text: string[] = []
  for (let cnt = 0; cnt < 10; cnt++) {
    const timePrefix = timeList[Math.floor(3 * Math.random())]
    let time = Math.ceil(Math.random() * 56)
    if (timePrefix === '小时')
      time = Math.ceil(Math.random() * 22)

    const feat = featList[Math.floor(3 * Math.random())]
    text.push(`用户${getMoblie()}` + `, ${time}${timePrefix}前, 使用了${feat}`)
  }
  return text
}

const group = ref<string[][]>([])

onMounted(() => {
  group.value = []
  for (let cnt = 0; cnt < 3; cnt++)
    group.value.push(getRandomTextList())
})
</script>

<template>
  <div m-4 flex-cc space-x-6>
    <div relative>
      <img src="@/assets/swiper-bg.png" h-28>
      <div text="2xl white center" absolute top="1/2" class="translate-y--1/2" w-full>
        实时查询动态
      </div>
    </div>
    <div v-for="(list, idx) in group" :key="idx" text="base #666" h-28 tracking-wide>
      <Vue3Marquee vertical>
        <p v-for="i in list" :key="i" my-2 w-full>
          {{ i }}
        </p>
      </Vue3Marquee>
    </div>
  </div>
</template>
