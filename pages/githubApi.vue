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
function save() {
  isEdit.value = false
  getUserInfo(userName)
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

  {{ userInfo }}
</template>

<style lang='scss' scope></style>
