export function useLogin() {

  async function userLogin() {
    const api = 'https://vue-lessons-api.vercel.app/auth/login'

    const res = await $fetch(api, {
      method: 'POST',
      body: {
        username: 'mike',
        password: '7654321',
      }
    })
    console.log(res)
    // 將 toekn 存到 cookie
    const cookie = useCookie('nuxt-mizu-login-token')
    cookie.value = res.data.token // 設定值
    console.log(cookie.value) // 讀取值
  }

  return {
    userLogin
  }
}