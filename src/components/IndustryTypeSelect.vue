<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(['select'])

const visible = ref(false)

const targetRef = ref()
onClickOutside(targetRef, () => closed())

const list = [
  {
    title: '科技类',
    items: ['网络科技', '电子商务', '信息技术', '游戏', '电子', '软件', '新材料', '生物科技', '教育科技'],
  },
  {
    title: '许可类',
    items: ['投资管理', '金融', '资产', '商业保理', '融资租赁', '医疗器材', '人力资源', '食品', '劳务派遣'],
  },
  {
    title: '服务类',
    items: ['广告', '文化传播', '建筑装潢', '设计', '美容美发', '房地产中介', '物业管理', '商务咨询', '企业管理'],
  },
  {
    title: '其他类',
    items: ['贸易', '实业', '制造', '服饰', '化妆品', '工程', '农业', '餐饮管理', '物流'],
  },
]

function select(item: string) {
  emit('select', item)
  closed()
}

function show() {
  visible.value = true
}

function closed() {
  visible.value = false
}

defineExpose({ show })
</script>

<template>
  <div v-if="visible" ref="targetRef" w-full flex-col-cs flex-wrap bg-white p-6 shadow-lg>
    <div
      v-for="group in list"
      :key="group.title"
      class="mb-3 flex-sc"
    >
      <div bg="#4d85fb" text="sm #fff center" h-8 w-20 lh-8>
        {{ group.title }}
      </div>
      <div flex="sc wrap">
        <div
          v-for="item in group.items"
          :key="item"
          ml-8 cursor-pointer
          text="sm #353535 hover:#a7cdfe"
          @click="select(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
