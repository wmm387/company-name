<script setup lang="ts">
const descList = [
  { title: '不能重名', label: '相同或相似行业存在重名公司，不能注册。如：“永信网络科技”与“永信信息科技”算重名。' },
  { title: '不能触犯驰名商标', label: '如：“万达”是驰名商标，不能注册为公司名字。 ' },
  { title: '不能与知名公司名字混淆', label: '如：“新微软”、“微软之家”等不能注册为公司名字。' },
  { title: '不能使用行业通用性词汇', label: '如：“广州电脑科技有限公司”不能注册为公司名字。' },
  { title: '尽量不用地区名称及简称', label: '如：广州、北京、京等不能注册为公司名字。 ' },
  { title: '不能使用繁体、数字、英文', label: '注册公司只能是简体字' },
  { title: '不能使用名人字号', label: '如：如马云、王健林等不能注册为公司 名字。' },
  { title: '不能带有宗教色彩', label: '如：如佛教、伊斯兰等不能注册为公司 名字。' },
]
</script>

<template>
  <div flex-col-cc>
    <div text="3xl #222" font-bold>
      公司起名 注意以下事项
    </div>
    <div mt-12 w-340 flex flex-wrap>
      <div
        v-for="item in descList"
        :key="item.title"
        border="1 #E6E7EB"
        m-2.5 h-64 w-78
      >
        <div relative>
          <img src="@/assets/naming/desc-bg.png" w-full>
          <div top="1/2" absolute left-6 text="xl white" class="-translate-y-1/2">
            {{ item.title }}
          </div>
        </div>
        <div px-6 py-8 text="base #666" lh-8>
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>
