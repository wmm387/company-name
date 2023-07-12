<script setup lang="ts">
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
  <div m-auto max-w-7xl>
    <div text="3xl #222" mb-4 font-bold>
      智能起名系统已为您查询到以下结果
    </div>
    <div mb-12 text="base #666">
      本站数据仅供参考，最终以工商局审核结果为准
    </div>
    <div space-y-4>
      <div flex-bc text="sm #666" px-7>
        <p>公司名称</p>
        <p>通过率</p>
        <p px-4>
          复制
        </p>
      </div>
      <div
        v-for="(item) in res"
        :key="item.key"
        flex flex-col p="x7 y3"
        border="~ 1 #ddd"
      >
        <div grid="~ cols-3" gap-4>
          <p text="lg #222" v-html="formatCompanyName(item)" />
          <p text="lg #222 center">
            {{ `${random(1, 100)}%` }}
          </p>
          <div flex-ec>
            <button
              text="base #fff"
              p="x4 y1"
              bg="#1054DD"
              @click="copy(item.companyName)"
            >
              复制
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
