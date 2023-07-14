<script setup lang="ts">
import api from '@/api'

const emit = defineEmits(['select'])

const visible = ref(false)

const targetRef = ref()
onClickOutside(targetRef, () => closed())

const provinceList = [
  { id: 110000000000, name: '北京' },
  { id: 120000000000, name: '天津' },
  { id: 130000000000, name: '河北' },
  { id: 140000000000, name: '山西' },
  { id: 150000000000, name: '内蒙' },
  { id: 210000000000, name: '辽宁' },
  { id: 220000000000, name: '吉林' },
  { id: 230000000000, name: '黑龙江' },
  { id: 310000000000, name: '上海' },
  { id: 320000000000, name: '江苏' },
  { id: 330000000000, name: '浙江' },
  { id: 340000000000, name: '安徽' },
  { id: 350000000000, name: '福建' },
  { id: 360000000000, name: '江西' },
  { id: 370000000000, name: '山东' },
  { id: 410000000000, name: '河南' },
  { id: 420000000000, name: '湖北' },
  { id: 430000000000, name: '湖南' },
  { id: 440000000000, name: '广东' },
  { id: 450000000000, name: '广西' },
  { id: 460000000000, name: '海南' },
  { id: 500000000000, name: '重庆' },
  { id: 510000000000, name: '四川' },
  { id: 520000000000, name: '贵州' },
  { id: 530000000000, name: '云南' },
  { id: 540000000000, name: '西藏' },
  { id: 610000000000, name: '陕西' },
  { id: 640000000000, name: '宁夏' },
  { id: 650000000000, name: '新疆' },
]

const cityList = ref<{ id: number; name: string }[]>([])

async function getCityList(provinceId: number) {
  const { data } = await api.getCity(provinceId)
  cityList.value = data ?? []
}

function select(name: string) {
  emit('select', name)
  closed()
}

function show() {
  visible.value = true
}

function closed() {
  visible.value = false
  cityList.value = []
}

defineExpose({ show })
</script>

<template>
  <div
    v-if="visible"
    ref="targetRef"
    z-99 w-full flex flex-wrap
    bg-white py-5 pl-3 shadow-lg
  >
    <template v-if="cityList.length">
      <div
        v-for="item in cityList"
        :key="item.id"
        m-2 h-8 w-16 flex-cc cursor-pointer rounded
        bg="#eee hover:#4d85fb"
        text="sm #353535 hover:#fff"
        @click="select(item.name)"
      >
        {{ item.name }}
      </div>
    </template>
    <template v-else>
      <div
        v-for="item in provinceList"
        :key="item.id"
        m-2 h-8 w-16 flex-cc cursor-pointer rounded
        bg="#eee hover:#4d85fb"
        text="sm #353535 hover:#fff"
        @click="getCityList(item.id)"
      >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>
