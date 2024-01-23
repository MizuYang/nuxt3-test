
const userRepos = ref([])
const userInfo = ref({})
const isLimit = ref(false) // 達顯示上限(儲存庫已經沒專案可顯示了)
const isLoadingFetching = ref(false) // 正在讀取中, 防止連續讀取來打API

// 取得 github 用戶資料
async function getUserInfo(name='MizuYang') {
  const { data } = await useFetch(`https://api.github.com/users/${name}`, {
    method: 'GET',
  })
  console.log(data.value)

  userInfo.value = data.value
}
// 取得 github 用戶 repo
async function getUserRepos(name='MizuYang') {
  const { data } = await useFetch(`https://api.github.com/users/${name}/repos?page=1&per_page=6&sort=pushed`, {
    method: 'GET'
  })

  console.log(data.value)

  userRepos.value = data.value
}

// 加入 loading 獲得的資料
async function loadUserRepo(name='MizuYang', pageNumber=1) {
  isLoadingFetching.value = true
  const { data } = await useFetch(`https://api.github.com/users/${name}/repos?page=${pageNumber}&per_page=3&sort=pushed`, {
    method: 'GET'
  })
  console.log(data.value)
  userRepos.value = [...userRepos.value, ...data.value] // 舊的資料 + 新的資料
  isLoadingFetching.value = false
  if(!data.value.length) isLimit.value = true // 儲存庫已經沒專案可顯示了
}

export {
  userRepos,
  userInfo, 
  isLimit,
  isLoadingFetching,
  getUserInfo,
  getUserRepos,
  loadUserRepo,
}