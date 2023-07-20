<script setup lang="ts">
useTitle('企什么')

const res = ref<{ companyName: string; key: string }[]>([])

function setRes(data) {
  res.value = data
}

const { push } = useRouter()
const { isMobile } = useBasicLayout()

if (isMobile.value)
  push('/m/naming')
</script>

<template>
  <div min-w-7xl>
    <div class="header" py-40>
      <div text="#F4F7FC" m-auto max-w-7xl flex-col-cc>
        <div mb-6 text="6xl" font-bold>
          企业注册&nbsp;&nbsp;&nbsp;公司起名&nbsp;&nbsp;&nbsp;记账报税
        </div>
        <div mb-6 text-2xl>
          为创业者提供等一站式服务
        </div>
        <div flex-col-cs text-black>
          <div flex-col-cs>
            <!-- <div mb-1 font-bold>
              <button px-8 py-4 text="#1054dd" bg="#f4f7fc" border="1 solid #F4F7FC">
                智能起名
              </button>
              <button px-8 py-4 text-white border="1 solid #F4F7FC" @click="push('/check')">
                公司核名
              </button>
            </div> -->
            <NamingForm @set-res="setRes" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="form" flex justify-center py-12 text-base>
      <div flex-col-cs>
        <div>
          <button px-8 py-4 text="#F4F7FC" bg="#1054DD">
            智能起名
          </button>
          <button
            px-8 py-4 text="#222"
            @click="push('/check')"
          >
            公司核名
          </button>
        </div>
        <NamingForm @set-res="setRes" />
      </div>
    </div> -->
    <NamingRes v-if="res.length" mt-24 :res="res" />
    <RegisterDesc v-else mt-24 />
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
