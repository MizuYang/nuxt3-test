<script setup>
const courses = ref([])

await getCourse()

async function getCourse() {
  const api = 'https://vue-lessons-api.vercel.app/courses/list'
  const { data } = await useAsyncData('test-course-1', async () => {
    return await $fetch(api)
  })

  if(data.value) courses.value = data.value
}
</script>

<template>
  <div class="d-flex">
    <div class="border cursor-pointer mx-3" 
         v-for="course in courses" :key="course.id">
      <Course :course="course" />
    </div>
  </div>
</template>

<style lang='scss' scope>
.d-flex {
  display: flex;
}
.border {
  border: 1px solid black;
}
.cursor-pointer {
  cursor: pointer;

  &:hover {
    background-color: #bebaba;
  }
}
.mx-3 {
  margin-left: 9px;
  margin-right: 9px;
}
</style>
