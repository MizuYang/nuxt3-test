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
  }

  return {
    userLogin
  }
}