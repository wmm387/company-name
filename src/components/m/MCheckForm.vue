<script setup lang="ts">
import { useDialog } from 'naive-ui'
import arrowDown from '@/assets/icon-arrow-down.png'

const emit = defineEmits(['setRes'])

const formData = ref({
  actionType: 1, // 核名
  cityName: '苏州市',
  industryType: '网络科技',
  companyName: '',
  companyType: 0,
  companyTypeName: '有限公司',
})

const citySelectRef = ref()
function showCitySelect() {
  citySelectRef.value.show()
}
function selectCity(cityName: string) {
  formData.value.cityName = cityName
}

const industryTypeSelectRef = ref()
function showIndustryTypeSelect() {
  industryTypeSelectRef.value.show()
}
function selectIndustryType(type: string) {
  formData.value.industryType = type
}

const companyTypeSelectRef = ref()
function showCompanyTypeSelect() {
  companyTypeSelectRef.value.show()
}
function selectCompanyType(data: { id: number; name: string }) {
  formData.value.companyType = data.id
  formData.value.companyTypeName = data.name
}

const dialog = useDialog()
function handleConfirm(content: string) {
  dialog.warning({
    title: '警告',
    content,
    positiveText: '确定',
    transformOrigin: 'center',
  })
}

const modalRef = ref()
function showPhoneModal() {
  modalRef.value.open()
}

function submit() {
  if (!formData.value.cityName)
    return handleConfirm('请选择城市')
  if (!formData.value.companyName)
    return handleConfirm('请输入您要查询的公司名称')
  if (!formData.value.industryType)
    return handleConfirm('请选择行业类型')

  showPhoneModal()
}

function setRes(res) {
  emit('setRes', res)
}
</script>

<template>
  <div text="base black">
    <div relative flex-col-cc space-y-4>
      <!-- 城市 -->
      <div relative w-full>
        <div h-14 w-full flex-bc cursor-pointer bg-white px-8 py-4 @click="showCitySelect">
          <div flex-cc>
            <img src="@/assets/icon-local.png" mr-4 w-4>
            <span v-if="formData.cityName">{{ formData.cityName }}</span>
            <span v-else text="#9ca3af">请选择城市</span>
          </div>
          <img :src="arrowDown" ml-4 w-3>
        </div>
        <CitySelect ref="citySelectRef" absolute left-0 top-15 @select="selectCity" />
      </div>
      <!-- 公司名称 -->
      <div h-14 w-full flex-bc cursor-pointer bg-white px-8 py-4>
        <div w-full flex-cc>
          <img src="@/assets/icon-edit.png" mr-4 w-4>
          <input v-model="formData.companyName" w-full outline="none active:none" placeholder="请输入您要查询的公司名称">
        </div>
      </div>
      <!-- 行业类型 -->
      <div relative w-full>
        <div h-14 w-full flex-bc cursor-pointer bg-white px-8 py-4 @click="showIndustryTypeSelect">
          <div flex-cc>
            <img src="@/assets/icon-more.png" mr-4 w-4>
            <span v-if="formData.industryType">{{ formData.industryType }}</span>
            <span v-else text="#9ca3af">请选择行业类型</span>
          </div>
          <img :src="arrowDown" ml-4 w-3>
        </div>
        <IndustryTypeSelect ref="industryTypeSelectRef" absolute left-0 top-15 @select="selectIndustryType" />
      </div>
      <!-- 公司类型 -->
      <div relative w-full>
        <div h-14 w-full flex-bc cursor-pointer bg-white px-8 py-4 @click="showCompanyTypeSelect">
          <div flex-cc>
            <img src="@/assets/icon-more.png" mr-4 w-4>
            <span v-if="formData.companyTypeName">{{ formData.companyTypeName }}</span>
            <span v-else text="#9ca3af">请选择公司类型</span>
          </div>
          <img :src="arrowDown" ml-4 w-3>
        </div>
        <CompanyTypeSelect ref="companyTypeSelectRef" absolute left-0 top-15 @select="selectCompanyType" />
      </div>
      <!-- 按钮 -->
      <button border="2px #fff" h-14 w-42 text="xl #F4F7FC" @click="submit">
        查询结果
      </button>
    </div>
  </div>
  <SubmitModal ref="modalRef" :data="formData" @set-res="setRes" />
</template>
