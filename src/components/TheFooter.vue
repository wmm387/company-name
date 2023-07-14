<script setup lang="ts">
import icon1 from '@/assets/footer-icon-1.png'
import icon2 from '@/assets/footer-icon-2.png'
import icon3 from '@/assets/footer-icon-3.png'
import icon4 from '@/assets/footer-icon-4.png'

const itemList = [
  { icon: icon1, text: '信息保密', text2: '所有客户信息严格保密，保护客户信息免遭泄落 ' },
  { icon: icon2, text: '安全送达', text2: '办理完成后所有材料精心包装 快递直达  ' },
  { icon: icon3, text: '品质保障', text2: '所有产品保证服务质量由专业人士进行操作' },
  { icon: icon4, text: '全程服务', text2: '售前咨询，下单24小时内响应 关键环节100%提醒 ' },
]
</script>

<template>
  <div w-full>
    <div bg="#F4F7FC" sm="flex-cc" flex-bc px-5 space-x-4>
      <div
        v-for="item in itemList"
        :key="item.text"
        my-3
        sm="my-6 mx-12 flex-ss flex-row w-64"
        flex-col-cc
      >
        <div h-8 w-8 sm="h-10 w-10" flex-cc>
          <img :src="item.icon" w-7 sm="w-10 mr-4">
        </div>
        <div>
          <div text="base #222" sm:text-lg>
            {{ item.text }}
          </div>
          <div hidden sm:block text="sm #666">
            {{ item.text2 }}
          </div>
        </div>
      </div>
    </div>
    <div bg="#151B26" text="#787B80 sm" flex-cc px-5 py-6 sm:px-18>
      <div max-w-7xl w-full flex-cc>
        <div flex-col-cc gap-2 sm="flex-cc flex-row gap-4">
          <div>©企什么（苏州）网络科技有限公司 2023 版权所有</div>
          <div>
            <a href="https://beian.miit.gov.cn/" target="_blank">
              苏ICP备2023022188号
            </a>
          </div>
          <!-- <div>
            <a
              href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=1101080232137"
              target="_blank"
            >
              苏公网安备 1101080232137号
            </a>
          </div> -->
        </div>
        <!-- <div flex-cc>
          <img src="@/assets/icon-phone.png" mr-2 w-3>
          <div>咨询电话: 0512-66886688</div>
        </div> -->
      </div>
    </div>
  </div>
</template>
