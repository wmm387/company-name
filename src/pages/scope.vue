<script setup lang="ts">
import icon_inconsistency from '@/assets/scope/icon-inconsistency.png'
import icon_region from '@/assets/scope/icon-region.png'
import icon_documents from '@/assets/scope/icon-documents.png'
import icon_stamp from '@/assets/scope/icon-stamp.png'
import icon_map from '@/assets/scope/icon-map.png'
import icon_category from '@/assets/scope/icon-category.png'

const descList = [
  { icon: icon_inconsistency, text: '行业差异性', text2: '不同的行业类型，对应不同的经营范围， 原则上不能随意写 ' },
  { icon: icon_region, text: '地区差异性', text2: '同一个行业，不同地区也有地方差异性， 写法不一样' },
  { icon: icon_documents, text: '许可经营项', text2: '不同时期，许可经营项是不一样的， 写法有差异' },
]

const descList2 = [
  { icon: icon_stamp, text: '来源真实公司', text2: '系统生成的经营范围都来自真实 经营的公司' },
  { icon: icon_map, text: '考虑地区差异', text2: '根据用户选择的地区推荐可用的 经营范围' },
  { icon: icon_category, text: '适用5000+个行业', text2: '300多个大类，5000多个小类行业均可推荐 ' },
  { icon: icon_documents, text: '许可经营项对比', text2: '根据大数据检索行业最新许可经营项 智能匹配推荐 ' },
]
</script>

<template>
  <div>
    <div class="header" py-48>
      <div text="#F4F7FC" m-auto max-w-7xl flex-cc>
        <div>
          <div mb-6 text="4xl" font-bold>
            经营范围智能生成器
          </div>
          <div mb-6 text-2xl>
            经营范围不知道怎么填？一键智能生成
          </div>
          <div flex-col-cs text-black>
            <ScopeForm />
          </div>
        </div>
      </div>
    </div>
    <div flex-col-cc py-24 bg="#f2f4fb">
      <div text="3xl #222 center" mb-4 font-bold>
        什么是工商核名
      </div>
      <div mt-12 flex>
        <div
          v-for="(item, index) in descList" :key="item.text"
          :style="{ backgroundColor: index % 2 ? '#ebedf5' : '#fff' }"
          h-50 w-100 flex-col-cs px-18
        >
          <div flex-sc>
            <img :src="item.icon" mr-4 h-6>
            <div text="xl #222">
              {{ item.text }}
            </div>
          </div>
          <div text="sm #222" mt-6>
            {{ item.text2 }}
          </div>
        </div>
      </div>
    </div>
    <div mt-24 flex-col-cc>
      <div text="3xl #222 center" mb-4 font-bold>
        经营范围生成器为什么好用
      </div>
      <div mt-12 flex>
        <div
          v-for="(item, index) in descList2" :key="item.text"
          :style="{ backgroundColor: index % 2 ? '#F4F7FC' : '#1054DD', color: index % 2 ? '#222' : '#fff' }"
          h-60 w-80 flex-col-cs px-12
        >
          <img :src="item.icon" mb-7 h-6>
          <div text="xl">
            {{ item.text }}
          </div>
          <div text="sm" mt-6>
            {{ item.text2 }}
          </div>
        </div>
      </div>
    </div>
    <TheFooter mt-24 />
  </div>
</template>
