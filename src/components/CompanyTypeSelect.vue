<script setup lang="ts">
const emit = defineEmits(['select'])

const visible = ref(false)

const targetRef = ref()
onClickOutside(targetRef, () => closed())

const list = [
  { id: 0, name: '有限公司' },
  { id: 1, name: '合伙企业' },
]

function select(item: { id: number; name: string }) {
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
  <div v-if="visible" ref="targetRef" w-full flex-col-cs bg-white shadow-lg>
    <div
      v-for="item in list"
      :key="item.id"
      text="base #353535"
      p="y4 x6"
      class="w-full cursor-pointer hover:bg-#f2f2f2"
      @click="select(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>
