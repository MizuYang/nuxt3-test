<script setup>
const route = useRoute()
const { coursesId } = route.params
const data = ref({})

await getCourse()

async function getCourse() {
  const api = `https://vue-lessons-api.vercel.app/courses/${coursesId}`
  data.value = await useAsyncData('test-course-2', async () => {
    return await $fetch(api)
  })
}
</script>

<template>
  <NuxtLink to='/courses'
            style="font-size:30px;">
    返回
  </NuxtLink>

  {{ coursesId }}

  {{ data }}
</template>

<style lang='scss' scope></style>
