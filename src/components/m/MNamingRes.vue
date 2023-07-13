<script setup lang="ts">
import { NDivider } from 'naive-ui'

defineProps<{
  res: { companyName: string; key: string }[]
}>()

const { copy } = useCopy()

function formatCompanyName({ companyName, key }: { companyName: string; key: string }) {
  return companyName.replace(key, `<span text="#1054DD">${key}</span>`)
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
</script>

<template>
  <div px-5>
    <div text="2xl #222" mb-2 font-bold>
      智能起名系统已为您查询到以下结果
    </div>
    <div mb-8 text="sm #666">
      本站数据仅供参考，最终以工商局审核结果为准
    </div>
    <div space-y-4>
      <div
        v-for="(item) in res"
        :key="item.key"
        flex flex-col p="x7 y3"
        border="~ 1 #ddd"
      >
        <p text="lg #222" v-html="formatCompanyName(item)" />
        <NDivider my="!2" />
        <div flex-bc>
          <p text="base #222 center">
            通过率: {{ `${random(1, 100)}%` }}
          </p>
          <button
            text="base #fff"
            p="x3"
            bg="#1054DD"
            @click="copy(item.companyName)"
          >
            复制
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
