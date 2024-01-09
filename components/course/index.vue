<script setup>
const props = defineProps({
  course: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="">
    <h2 style="font-size:20px;">
      課程名稱：{{ course.name }}
    </h2>
    <p>
      課程價格：{{ course.money }} <br />
      老師姓名：{{ course.teacher.name }}
    </p>
  </div>
</template>

<style lang='scss' scope>
.d-flex {
  display: flex;
}
</style>
