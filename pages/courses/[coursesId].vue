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

  <ClientOnly>
    <CourseSingleCourse :data="data.data.data[0]" />
  </ClientOnly>

  <!-- 動態路由中的嵌套路由 -->
  <div>
    <p>動態路由中的嵌套路由</p>
    <ul>
      <li>
        <NuxtLink :to='`/courses/${coursesId}/`'>預設tab</NuxtLink>
      </li>
      <li>
        <NuxtLink :to='`/courses/${coursesId}/A`'>A</NuxtLink>
      </li>
      <li>
        <NuxtLink :to='`/courses/${coursesId}/B`'>B</NuxtLink>
      </li>
      <li>
        <NuxtLink :to='`/courses/${coursesId}/C`'>C</NuxtLink>
      </li>
    </ul>
  </div>

  <NuxtPage />
</template>

<style lang='scss' scope></style>
