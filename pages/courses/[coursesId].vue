<script setup>
const route = useRoute()
console.log(route)
const { coursesId } = route.params

</script>

<template>
  <NuxtLink to='/courses'
            style="font-size:30px;">
    返回
  </NuxtLink>

  {{ coursesId }}
</template>

<style lang='scss' scope></style>
