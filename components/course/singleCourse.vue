<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div>
    <p>
      課程編號: {{ props.data.id }} <br />
      課程名稱: {{ props.data.name }} <br />
      課程價格: {{ props.data.money }} <br />
      <img :src="props.data.photo" alt="課程圖片">
      <img :src="props.data.teacher.img" alt="課程老師圖片">
    </p>
  </div>
</template>

<style lang='scss' scope></style>

  