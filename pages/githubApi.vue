<script setup>
import { getUserInfo, getUserRepos } from '@/api/github.js'

// data
const userName = ref('MizuYang')
const userInfo = ref({})
const userRepos = ref([])
const isEdit = ref(false)
const inputRef = ref(null)

userInfo.value = await getUserInfo(userName.value)
userRepos.value = await getUserRepos(userName.value)

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

  <Loading />
</template>

<style lang='scss' scope></style>
