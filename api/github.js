

// 取得 github 用戶資料
export async function getUserInfo(name) {
  const { data } = await useFetch(`https://api.github.com/users/${name}`, {
    method: 'GET',
  })
  console.log(data.value)

  return data.value
}
// 取得 github 用戶 repo
export async function getUserRepos(name) {
  console.log('getUserRepos')
  const { data } = await useFetch(`https://api.github.com/users/${name}/repos`, {
    method: 'GET'
  })

  console.log(data.value)

  return data.value
}
 
