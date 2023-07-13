<script setup lang="ts">
import { NDropdown } from 'naive-ui'
import logo from '@/assets/logo.png'
import logo_m from '@/assets/m/logo.png'

const { push } = useRouter()
const { isMobile } = useBasicLayout()

const options = [
  {
    label: '公司起名',
    key: '/m/naming',
  },
  {
    label: '公司核名',
    key: '/m/check',
  },
  {
    label: '经营范围',
    key: '/m/scope',
  },
]
function handleSelect(key: string) {
  push(key)
}
</script>

<template>
  <div fixed z-999 h-12 w-full flex justify-center bg-white px-5 text-base shadow-lg sm:px-8>
    <nav max-w-7xl w-full flex-bc inline-flex>
      <img :src="isMobile ? logo_m : logo" h-6>
      <NDropdown v-if="isMobile" trigger="click" :options="options" @select="handleSelect">
        <img src="@/assets/m/icon-nav.png" h-4 cursor-pointer>
      </NDropdown>
      <div v-else flex-cc text="#222 base" space-x-8>
        <RouterLink to="/" box-border h-6>
          首页
        </RouterLink>
        <RouterLink to="/naming" box-border h-6>
          公司起名
        </RouterLink>
        <RouterLink to="/check" box-border h-6>
          公司核名
        </RouterLink>
        <RouterLink to="/scope" box-border h-6>
          经营范围
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.router-link-active {
  color: #0e4cdb;
}
</style>
