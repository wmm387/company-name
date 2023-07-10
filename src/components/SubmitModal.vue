<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { NButton, NForm, NFormItem, NInput, NModal, NSpace } from 'naive-ui'
import api from '@/api'

const props = defineProps<{ data: any }>()

const emit = defineEmits(['setRes'])

const show = ref(false)

function open() {
  show.value = true
}

const { label, isCounting, loading: smsLoading, getSmsCode } = useSmsCode()

const formRef = ref<FormInst>()

const loginForm = reactive({ userName: '', phone: '', code: '' })

const REGEXP_PHONE = /^1+\d{10}$/

const loginRules = {
  userName: [
    { required: true, message: '请输入姓名', trigger: ['blur'] },
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: ['blur'] },
    { pattern: REGEXP_PHONE, message: '请输入合法手机号', trigger: ['input'] },
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: ['blur'] },
  ],
}

const showCodeInput = ref(false)
async function handlePhoneInput() {
  if (REGEXP_PHONE.test(loginForm.phone)) {
    const { data } = await api.getSmsCode({ phone: loginForm.phone })
    if (data)
      loginForm.code = data
    else
      showCodeInput.value = true
  }
}

async function handleSmsCode() {
  getSmsCode(loginForm.phone)
}

const resultModalRef = ref()
const loading = ref(false)
async function handleSubmit() {
  loading.value = true
  try {
    formRef.value?.validate()
    const { data } = await api.getAnswer({
      ...props.data,
      ...loginForm,
    })
    if (data)
      emit('setRes', data)
      // resultModalRef.value.open(data)
    show.value = false
    loading.value = false
  }
  catch (err) {
    loading.value = false
  }
}

defineExpose({ open })
</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" title="快捷实名认证" style="width: 95%; max-width: 500px" class="p-4">
    <div text="#ff9e47" mb-4>
      根据《网络安全法》相关规定，使用互联网服务需要实名认证！
    </div>
    <NForm ref="formRef" :model="loginForm" :rules="loginRules" :show-label="false" size="large">
      <NFormItem path="userName">
        <NInput v-model:value="loginForm.userName" placeholder="请输入姓名" />
      </NFormItem>
      <NFormItem path="phone">
        <NInput v-model:value="loginForm.phone" placeholder="请输入手机号" maxlength="11" @input="handlePhoneInput" />
      </NFormItem>
      <NFormItem v-if="showCodeInput" path="code">
        <div class="w-full flex-cc">
          <NInput v-model:value="loginForm.code" placeholder="请输入验证码" size="large" @keyup.enter="handleSubmit" />
          <div class="w-[18px]" />
          <NButton :disabled="isCounting" :loading="smsLoading" size="large" type="info" ghost @click="handleSmsCode">
            {{ label }}
          </NButton>
        </div>
      </NFormItem>
      <NSpace vertical :size="24">
        <NButton type="info" block :loading="loading" size="large" @click="handleSubmit">
          立即提交
        </NButton>
      </NSpace>
    </NForm>
  </NModal>
  <ResultModal ref="resultModalRef" />
</template>
