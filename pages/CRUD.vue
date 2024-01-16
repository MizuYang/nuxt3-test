<script setup>
// get api
const { data: peopleData } = await useFetch("/api/people");

// post api
const form = ref({
  name: "",
  email: "",
  age: "",
})
function addPeople() {

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
  <ul>
    <template v-for="people in peopleData" :key="people._id">
      <li>
        {{ people.name }} ({{ people.age }}): {{ people.email }}
      </li>
    </template>
  </ul>
</template>

<style lang='scss' scope></style>
