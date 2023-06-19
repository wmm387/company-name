<template>
  <div fixed z-999 h-12 w-full flex justify-center bg-white px-8 text-base shadow-lg>
    <nav max-w-7xl w-full flex-bc inline-flex>
      <div>NIDAN</div>
      <div flex-cc text="#222 base">
        <RouterLink to="/" mr-8 box-border h-6>
          首页
        </RouterLink>
        <RouterLink to="/naming" mr-8 box-border h-6>
          公司起名
        </RouterLink>
        <RouterLink to="/check" box-border h-6>
          公司核名
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
