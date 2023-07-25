<script setup lang="ts">
import icon_inconsistency from '@/assets/scope/icon-inconsistency.png'
import icon_region from '@/assets/scope/icon-region.png'
import icon_documents from '@/assets/scope/icon-documents.png'
import icon_stamp from '@/assets/scope/icon-stamp.png'
import icon_map from '@/assets/scope/icon-map.png'
import icon_category from '@/assets/scope/icon-category.png'

useTitle('经营范围 - 企什么')

const { push } = useRouter()
const { isMobile } = useBasicLayout()
if (isMobile.value)
  push('/m/scope')

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

const { copy } = useCopy()

const res = ref([])

function setRes(data) {
  res.value = data
  window.scrollTo(0, 550)
}
</script>

<template>
  <div>
    <div class="header" py-40>
      <div text="#F4F7FC" m-auto max-w-7xl flex-col-cc>
        <div mb-6 text="6xl" font-bold>
          经营范围智能生成器
        </div>
        <div mb-6 text-2xl>
          经营范围不知道怎么填？一键智能生成
        </div>
        <div flex-col-cs text-black>
          <ScopeForm @set-res="setRes" />
        </div>
      </div>
    </div>
    <div v-if="res.length" bg="#f2f4fb" py-24>
      <div m-auto max-w-7xl>
        <div text="3xl #222" mb-4 font-bold>
          经营范围系统为您查询到以下结果
        </div>
        <div mb-12 text="base #666">
          本站数据仅供参考，最终以工商局审核结果为准
        </div>
        <div grid="~ cols-2" gap-4>
          <div
            v-for="(item, index) in res"
            :key="item"
            bg="white"
            flex flex-col p-4
            border="~ 1 #EDF0F5"
          >
            <div mb-4 flex-bc>
              <p text="xl #1054DD">
                推荐{{ index + 1 }}
              </p>
              <button
                text="base #fff"
                p="x4 y1"
                bg="#1054DD"
                rounded
                @click="copy(item)"
              >
                复制内容
              </button>
            </div>
            <div bg="#f2f4fb" flex="~ 1" p-4>
              <p text="sm #222" mr-4 lh-6>
                经营范围:
              </p>
              <p flex-1 text="sm #666" lh-6>
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
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
      <div my-24 flex-col-cc>
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
    </template>
    <TheFooter />
  </div>
</template>
