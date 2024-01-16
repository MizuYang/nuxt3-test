<script setup>
// get api
const { data: peopleData, refresh } = await useFetch("/api/people");

// post api
const form = ref({
  name: "",
  email: "",
  age: "",
})
async function addPeople() {
  const res = await $fetch('/api/people/create', {
    method: 'POST',
    body: form.value
  })
  console.log('post api: ', res)
  // 更新畫面, 初始化表單
  refresh()
  formInit()
}
function formInit() {
  form.value = {
    name: "",
    email: "",
    age: ""
  }
}

// put api
onMounted(() => {
  addIsEditToAllObjects()
})
function addIsEditToAllObjects() {
  peopleData.value.map(people => {
    return {
      ...people,
      isEdit: false
    }
  })
}
</script>

<template>
  <!-- CRUD: post -->
  <form>
    <div>
      <input type="text" 
             placeholder="名字"
             v-model.trim="form.name"
             style="text-align:center;width:80px;">
      <input type="text" 
             placeholder="信箱"
             v-model.trim="form.email"
             style="text-align:center;width:130px;">
      <input type="number" 
             placeholder="年齡"
             v-model.number.trim="form.age"
             style="text-align:center;width:80px;">
      <button type="button" @click="addPeople">
        新增用戶
      </button>
    </div>
  </form>

  <!-- CRUD: get -->
  <ul style="width:400px;">
    <template v-for="people in peopleData" :key="people._id">
      <li style="margin:10px;display:flex;">
        <div style="margin-right:20px;">
          <!-- CRUD: post -->
          <button type='button' @click="people.isEdit=!people.isEdit">
            {{ people.isEdit?'儲存':'編輯' }}
          </button>
          <!-- CRUD: delete -->
          <button type='button'>
            刪除
          </button>
        </div>
        <div>
          <template v-if="!people.isEdit">
            <!-- 未編輯時, 直接顯示名字 -->
            {{ people.name }}
          </template>
          <template v-else>
            <!-- 編輯欄位 -->
            <input type="text" v-model="people.name">
          </template>
          <p>
            年齡:{{ people.age }}
            信箱:{{ people.email }}
          </p>
        </div>
      </li>
    </template>
  </ul>
</template>

<style lang='scss' scope></style>
