

// 取得 github 用戶資料
export async function getUserInfo(name) {
  console.log('getUserInfo')
  const { data } = await useFetch(`https://api.github.com/users/${name}`, {
    method: 'GET',
  })
  console.log(data.value)

  return data.value
}
// 取得 github 用戶 repo
export function getUserRepos() {
  console.log('getUserRepos')
}
 
