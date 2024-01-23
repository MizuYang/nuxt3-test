<script setup>
import { 
  userInfo, 
  userRepos, 
  getUserInfo, 
  getUserRepos,
  loadUserRepo,
  isLimit,
  isLoadingFetching
} from '@/api/github.js'

// composables
const { isEnteredView, intersectionObserver } = useIntersectionObserver()

// data
const userName = ref('MizuYang')
const isEdit = ref(false)
const inputRef = ref(null)
const loadingRef = ref(null)
const curPageNumber = ref(1)


await getUserInfo(userName.value)
await getUserRepos(userName.value)

watch(isEnteredView, () => {
  if(isLimit.value || isLoadingFetching.value) return
  // loading 出現在可視範圍 => 滾動條至底 => 打 api 取得資料
  console.log(curPageNumber.value)
  curPageNumber.value++
  console.log(curPageNumber.value)
  loadUserRepo(userName.value, curPageNumber.value)
})

onMounted(() => {
  intersectionObserver(loadingRef.value.$el)
})

function editInputShow() {
  isEdit.value = true
  nextTick(() => (inputRef.value.focus()))
}
async function save() {
  isEdit.value = false
  userInfo.value = await getUserInfo(userName.value)
  userRepos.value = await getUserRepos(userName.value)
}

</script>

<template>
  <input type="text" 
         ref="inputRef" 
         v-model.trim="userName" 
         :disabled="!isEdit">
  <button type="button" @click="isEdit?save():editInputShow()">
    {{ isEdit?'儲存':'編輯' }}
  </button>

  <!-- 用戶資訊 -->
  <div>
    <p>{{ userName }}</p>
    <p>{{ userInfo?.location }}</p>
    <img :src="userInfo?.avatar_url" :alt="userInfo?.name" width="100" height="100">
  </div>

  <!-- Repos -->
  <ul>
    <template v-for="item in userRepos" :key="item.node_id">
      <li>
        <p style="font-size:30px;">
          {{ item?.description }} <br />
          {{ item?.name }}
        </p>
        <a :href="item?.html_url" 
           target="_blank"
           style="font-size:20px;">
          {{ item?.html_url }}
        </a>

      </li>
    </template>
  </ul>

  <template v-if="!isLimit">
    <Loading ref="loadingRef" />
  </template>
  <template v-else>
    <p style="text-align:center;font-size:25px;">已經到底了...</p>
  </template>
</template>

<style lang='scss' scope></style>
