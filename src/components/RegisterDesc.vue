<script setup lang="ts">
import descIcon1 from '@/assets/desc-icon-1.png'
import descIcon2 from '@/assets/desc-icon-2.png'
import descIcon3 from '@/assets/desc-icon-3.png'
import descIcon4 from '@/assets/desc-icon-4.png'
import descIcon5 from '@/assets/desc-icon-5.png'
import descIcon6 from '@/assets/desc-icon-6.png'
import descBg1 from '@/assets/desc-bg-1.png'
import descBg2 from '@/assets/desc-bg-2.png'
import descBg3 from '@/assets/desc-bg-3.png'
import descBg4 from '@/assets/desc-bg-4.png'
import descBg5 from '@/assets/desc-bg-5.png'
import descBg6 from '@/assets/desc-bg-6.png'

const descList = [
  { icon: descIcon1, text: '准备企业名称', text2: '准备3-5个公司名称', bgImg: descBg1 },
  { icon: descIcon2, text: '提交工商局核名', text2: '3-7天那企业名称预先核准通知书核名失败则需重新核名 ', bgImg: descBg2 },
  { icon: descIcon3, text: '提交公司注册资料', text2: '公司章程，公司登记申请书', bgImg: descBg3 },
  { icon: descIcon4, text: '办理公司营业执照', text2: '5-7个工作日领取营业执照后，再办理其他相关证件', bgImg: descBg4 },
  { icon: descIcon5, text: '刻章备案', text2: '拿营业执照原件及复印件到公安局指定刻章店制作 ', bgImg: descBg5 },
  { icon: descIcon6, text: '银行开户、定税 代理记账', text2: '请代理记账公司付很少就可以享受专业的会计师服务', bgImg: descBg6 },
]
</script>

<template>
  <div flex-col-cc>
    <div text="3xl #222" mb-4 font-bold>
      公司注册流程
    </div>
    <div text="base #666">
      根据工商局规定，注册新公司均需要提交名称进行审核审核通过后才可注册登记
    </div>
    <div text="base #666">
      提交前可通过在线预核名，快速得到核名结果
    </div>
    <div mt-12 flex>
      <div
        v-for="(item, index) in descList"
        :key="item.text"
        :style="{ backgroundColor: index % 2 ? '#F4F7FC' : '#1054DD', color: index % 2 ? '#000' : '#fff' }"
        relative h-80 w-55 flex-col-ss px-7
      >
        <img :src="item.icon" mb-7 mt-12 h-5>
        <div text-xl>
          {{ item.text }}
        </div>
        <div mt-3>
          {{ item.text2 }}
        </div>
        <img absolute bottom-0 right-0 h-28 :src="item.bgImg">
      </div>
    </div>
  </div>
</template>
