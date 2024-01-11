export default defineNuxtPlugin((nuxtApp) => {
  // console.log('nuxtApp', nuxtApp)
  
  return {
    // 建立要注入的方法
    provide: {
      hello: (msg) => `你好${msg}！`
    }
  }
})
