<script setup>
// data
const route = useRoute()
console.log('route: ', route)
const productId = route.params.productId
</script>

<template>
  <NuxtLink to='/products'
            style="font-size:30px;">
    返回
  </NuxtLink>
  <p style="font-size:25px;">產品 ID: {{ productId }}</p>
</template>

<style lang='scss' scope></style>
