<script setup lang="ts">
import { NDropdown } from 'naive-ui'

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
  <div fixed z-999 h-16 w-full flex justify-center bg-white px-5 text-base shadow-lg sm:px-8>
    <nav max-w-7xl w-full flex-bc inline-flex>
      <div flex-cc>
        <img src="@/assets/icon.png" h-8>
        <span text="2xl #040404" ml-2 font-bold>企什么</span>
        <div v-if="!isMobile" bg="#e00707" text="xs white" ml--1 scale-80 px-2 py-0.5>
          <div>全国企业核名查询系统</div>
          <div>人工智能企业起名工具</div>
        </div>
      </div>
      <NDropdown
        v-if="isMobile"
        trigger="click"
        :options="options"
        size="huge"
        @select="handleSelect"
      >
        <img src="@/assets/m/icon-nav.png" h-4 cursor-pointer>
      </NDropdown>
      <div v-else flex-cc text="#222 lg" space-x-8>
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
        <RouterLink to="/contact" box-border h-6>
          联系我们
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
