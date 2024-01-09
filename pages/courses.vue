<script setup>
const courses = ref([])


onMounted(async () => {
  nextTick(async () => {
    await getCourse()
  })
})

async function getCourse() {
  const api = 'https://vue-lessons-api.vercel.app/courses/list'
  const { data } = await useAsyncData('test-course-1', async () => {
    return await $fetch(api)
  })

  if(data.value) courses.value = data.value
}
</script>

<template>
  {{ courses }}

  <!-- 用三個切換課程的 tab 並在進入該課程後用該課程的 id 去 call 取得課程資料 API
  用三個切換課程的 tab 並在進入該課程後用該課程的 id 去 call 取得課程資料 API
  用三個切換課程的 tab 並在進入該課程後用該課程的 id 去 call 取得課程資料 API -->
</template>

<style lang='scss' scope></style>
