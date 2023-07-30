<script setup lang="ts">
useTitle('联系我们 - 企什么')

const form = reactive({
  phone: '',
  email: '',
  remark: '',
})

function submit() {
  form.phone = ''
  form.email = ''
  form.remark = ''
  window.$message.success('提交成功')
}
</script>

<template>
  <div min-w-7xl>
    <div class="bg" py-40>
      <div text="#F4F7FC" m-auto max-w-7xl flex-col-cc>
        <div mb-6 text="6xl" font-bold>
          联系我们
        </div>
        <div mb-6 text-2xl>
          期待您的来电
        </div>
      </div>
    </div>
    <div bg="#f7f9fa" py-12>
      <div m-auto max-w-7xl p-5>
        <p text="4xl #333" mb-8>
          联系方式
        </p>
        <div grid="~ cols-5" gap-6>
          <div col-span-2 rounded-2 bg-white p-16 text-base space-y-8>
            <div text=" 3xl #333">
              企什么(苏州)网络有限公司
            </div>
            <div h-1px bg="#E3E5E6" />
            <div flex-ss>
              <img src="@/assets/contact/phone.png" mr-2 mt-1 h-4>
              <div>
                <div mb-1 text="#333">
                  联系电话
                </div>
                <div text="#666">
                  吴经理: 13584015828
                </div>
              </div>
            </div>
            <div h-1px bg="#E3E5E6" />
            <div flex-ss>
              <img src="@/assets/contact/email.png" mr-2 mt-1 h-3>
              <div>
                <div mb-1 text="#333">
                  电子邮箱
                </div>
                <div text="#666">
                  info@qishenme.cn
                </div>
              </div>
            </div>
            <div h-1px bg="#E3E5E6" />

            <div flex-ss>
              <img src="@/assets/contact/location.png" mr-2 mt-1 h-4>
              <div>
                <div mb-1 text="#333">
                  联系地址
                </div>
                <div text="#666">
                  苏州吴中经济开发区城南街道迎春南路
                </div>
              </div>
            </div>
          </div>
          <div col-span-3 flex flex-col items-center justify-between rounded-2 bg-white p-16 text-base space-y-4>
            <input
              v-model="form.phone"
              border="1 #e7e9ea" w-full rounded-2 p-5
              outline="none active:none"
              placeholder="您的姓名"
            >
            <input
              v-model="form.email"
              border="1 #e7e9ea" w-full rounded-2 p-5
              outline="none active:none"
              placeholder="您的电话"
            >
            <textarea
              v-model="form.remark"
              rows="6"
              border="1 #e7e9ea" w-full rounded-2 p-5
              outline="none active:none"
              placeholder="备注"
            />
            <button bg="#1054DD" w-54 rounded-2 py-4 text="#F4F7FC" @click="submit">
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url('@/assets/contact/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
