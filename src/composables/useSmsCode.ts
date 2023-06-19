import api from '@/api'

export default function useSmsCode() {
  const loading = ref(false)

  const { counts, start, isCounting } = useCountDown(60)

  const countingLabel = (second: number) => `${second}秒后重新获取`
  const label = computed(() => {
    let text = '获取验证码'
    if (loading.value)
      text = ''

    if (isCounting.value)
      text = countingLabel(counts.value)

    return text
  })

  /**
   * 获取短信验证码
   * @param phone - 手机号
   */
  async function getSmsCode(phone: string) {
    if (loading.value)
      return
    loading.value = true
    const { data } = await api.sendSmsCode(phone)
    if (data)
      start()
    loading.value = false
  }

  return {
    label,
    start,
    isCounting,
    getSmsCode,
    loading,
  }
}
