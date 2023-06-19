<template>
  <div min-w-7xl>
    <div class="header" py-58>
      <div text="#F4F7FC" m-auto max-w-7xl>
        <div mb-6 text="4xl" font-bold>
          企业注册、公司起名、记账报税
        </div>
        <div text-2xl>
          为创业者提供等一站式服务
        </div>
      </div>
    </div>
    <div class="form" flex justify-center py-12 text-base>
      <div flex-col-cs>
        <div>
          <button px-8 py-4 text="#F4F7FC" bg="#1054DD">
            智能起名
          </button>
          <button
            px-8 py-4 text="#222"
            @click="$router.push('/check')"
          >
            公司核名
          </button>
        </div>
        <NamingForm />
      </div>
    </div>
    <RegisterDesc mt-24 />
    <TheFooter mt-24 />
  </div>
</template>

<style scoped lang="scss">
.form {
  background-image: url('@/assets/form-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
