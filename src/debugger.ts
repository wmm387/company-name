import { addListener, launch } from 'devtools-detector'

function block() {
  if (
    window.outerHeight - window.innerHeight > 200
    || window.outerWidth - window.innerWidth > 200
  )
    document.body.innerHTML = '检测到非法调试,请关闭后刷新重试!'

  setInterval(() => {
    (function () {
      return false
    }
      .constructor('debugger')
      .call())
  }, 50)
}

export function init() {
  block()

  document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    // eslint-disable-next-line no-caller
    const e = event || window.event || arguments.callee.arguments[0]
    if (e && e.keyCode === 123) {
      e.returnValue = false
      return false
    }
  }

  if (document.body.innerHTML !== '检测到非法调试,请关闭后刷新重试!') {
    addListener(
      () => {
        try {
          window.open('about:blank', '_self')
        }
        catch (err) {
          const a = document.createElement('button')
          a.onclick = function () {
            window.open('about:blank', '_self')
          }
          a.click()
        }
      },
    )
    launch()
  }
}

if (import.meta.env.MODE === 'production')
  init()
