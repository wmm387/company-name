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
  <div text-base>
    <div border="1 solid #F4F7FC" relative h-14 inline-flex bg-white>
      <div w-60 flex-bc cursor-pointer px-8 py-auto @click="showCitySelect">
        <div flex-cc>
          <img src="@/assets/icon-local.png" mr-4 w-4>
          <span v-if="formData.cityName">{{ formData.cityName }}</span>
          <span v-else text="#9ca3af">请选择城市</span>
        </div>
        <img :src="arrowDown" ml-4 w-3>
      </div>
      <div w-80 flex-bc px-8 py-auto>
        <div w-full flex-cc>
          <img src="@/assets/icon-edit.png" mr-4 w-4>
          <input
            v-model="formData.companyName"
            outline="none active:none"
            placeholder="请输入您要查询的公司名称"
          >
        </div>
      </div>
      <div bg="#D6D8DB" text="#D6D8DB" my-3 h-8 w-1px />
      <div w-64 flex-bc cursor-pointer px-8 py-auto @click="showIndustryTypeSelect">
        <div flex-cc>
          <img src="@/assets/icon-more.png" mr-4 w-4>
          <span v-if="formData.industryType">{{ formData.industryType }}</span>
          <span v-else text="#9ca3af">请选择行业类型</span>
        </div>
        <img :src="arrowDown" ml-4 w-3>
      </div>
      <div bg="#D6D8DB" text="#D6D8DB" my-3 h-8 w-1px />
      <div relative w-50 flex-sc px-8 py-auto>
        <div flex-bc cursor-pointer @click="showCompanyTypeSelect">
          <div flex-cc>
            <img src="@/assets/icon-more.png" mr-4 w-4>
            <span>{{ formData.companyTypeName }}</span>
          </div>
          <img :src="arrowDown" ml-4 w-3>
        </div>
        <CompanyTypeSelect ref="companyTypeSelectRef" absolute left-0 top-14 @select="selectCompanyType" />
      </div>
      <button bg="#1054DD" w-54 py-4 text="#F4F7FC" @click="submit">
        查询结果
      </button>
      <CitySelect ref="citySelectRef" absolute top-14 @select="selectCity" />
      <IndustryTypeSelect ref="industryTypeSelectRef" absolute top-14 @select="selectIndustryType" />
    </div>
  </div>
  <SubmitModal ref="modalRef" :data="formData" @set-res="setRes" />
</template>
