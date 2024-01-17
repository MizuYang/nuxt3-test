
export function useLogin() {
  // data
  const userInfo = ref({})
  const cookie = useCookie('nuxt-mizu-login-token')

  onMounted(() => {
    checkLogin()
  })

  async function userLogin() {
    const api = 'https://vue-lessons-api.vercel.app/auth/login'

    const res = await $fetch(api, {
      method: 'POST',
      body: {
        username: 'mike',
        password: '7654321',
      }
    })
    userInfo.value = res.data
    
    // 將 toekn 存到 cookie
    cookie.value = res.data.token // 設定值
    console.log(cookie.value) // 讀取值
  }
  async function checkLogin() {
    const token = cookie
    
    // 有登入 token 才驗證登入狀態
    if(!token.value) return
    
    try {
      const res = await $fetch('https://vue-lessons-api.vercel.app/testToken', {
        method: 'POST',
        headers: {
          Authorization: token.value
        }
      })
      console.log(res)
      // 登入驗證成功: 可在此處取得用戶資料
      userInfo.value = { name: "成智遠" }
    } catch (err) {
      console.error(err)
      // 登入驗證失敗: 可將用戶返回登入頁面
    }
  }

  return {
    userLogin,
    userInfo
  }
}