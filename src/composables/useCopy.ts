import onCopy from 'copy-to-clipboard'

export default function useCopy() {
  const copy = (text) => {
    if (onCopy(text))
      window.$message.success('复制成功')

    else
      window.$message.success('复制失败')
  }

  return {
    copy,
  }
}
