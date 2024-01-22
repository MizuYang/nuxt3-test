<script setup>
// data
const userName = 'MizuYang'
const isEdit = ref(false)
const inputRef = ref(null)


function editInputShow() {
  isEdit.value = true
  nextTick(() => (inputRef.value.focus()))
}
function save() {
  isEdit.value = false
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
</template>

<style lang='scss' scope></style>
