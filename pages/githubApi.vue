<script setup>
import { getUserInfo, getUserRepos } from '@/api/github.js'

// data
const userName = 'MizuYang'
const userInfo = ref({})
const isEdit = ref(false)
const inputRef = ref(null)

userInfo.value = await getUserInfo(userName)
getUserRepos()

function editInputShow() {
  isEdit.value = true
  nextTick(() => (inputRef.value.focus()))
}
async function save() {
  isEdit.value = false
  userInfo.value = await getUserInfo(userName)
}

</script>

<template>
  <input type="text" 
         ref="inputRef" 
         v-model="userName" 
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
</template>

<style lang='scss' scope></style>
