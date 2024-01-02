export default defineNuxtPlugin((nuxtApp) => {
  return {
    // 建立要注入的方法
    provide: {
      testClientOnly: () => 'testClientOnly'
    }
  }
})
