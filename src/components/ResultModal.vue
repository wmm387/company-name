<script setup lang="ts">
import { NModal } from 'naive-ui'

const show = ref(false)

const result = ref('')

function open(res: string) {
  result.value = res
  show.value = true
}

defineExpose({ open })
</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" title="起名结果" style="width: 95%; max-width: 500px" class="p-4">
    <div>
      {{ result }}
    </div>
  </NModal>
</template>
