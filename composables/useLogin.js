
export function useLogin() {
  // data
  const userInfo = ref({})
  const cookie = useCookie('nuxt-mizu-login-token', {
    domain: '.nuxt3demo.com'
  })
  const auth1 = cookie.value?.token // 紀錄當入登入的auth token

  onMounted(() => {
    checkLogin()

    // 每100毫秒檢查一次登入token
    const timer = setInterval(() => {
      const cookie2 = useCookie('nuxt-mizu-login-token', {
        domain: '.nuxt3demo.com'
      })
      const auth2 = cookie2.value?.token

      // token 不同就 reload
      if(auth1 !== auth2) {
        window.location.reload()
        clearInterval(timer)
      }
    }, 100)
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
    cookie.value = {
      token: res.data.token // 設定值
    }
    console.log(cookie.value) // 讀取值
  }
  async function checkLogin() {
    const cookie1 = useCookie('nuxt-mizu-login-token', {
      domain: '.nuxt3demo.com'
    })
    const token = cookie1.value?.token
    
    // 有登入 token 才驗證登入狀態
    if(!token) return
    
    try {
      const res = await $fetch('https://vue-lessons-api.vercel.app/testToken', {
        method: 'POST',
        headers: {
          Authorization: token
        }
      })
      console.log(res)
      // 登入驗證成功: 可在此處取得用戶資料
      userInfo.value = { name: "成智遠" }
    } catch (err) {
      console.error(err)
      // 登入驗證失敗: 可將用戶返回登入頁面
      cookie.value = null
    }
  }
  function userLogout() {
    cookie.value = null
    userInfo.value = {}
  }

  return {
    userLogin,
    userLogout,
    userInfo
  }
}