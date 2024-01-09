<script setup>
const props = defineProps({
  course: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <NuxtLink :to='`/courses/${props.course.id}`'>
    <h2 style="font-size:20px;">
      課程名稱：{{ props.course.name }}
    </h2>
    <p>
      課程價格：{{ props.course.money }} <br />
      老師姓名：{{ props.course.teacher.name }}
    </p>
  </NuxtLink>
</template>

<style lang='scss' scope></style>
