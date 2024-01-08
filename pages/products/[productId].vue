<script setup>
// data
const route = useRoute()
console.log('route: ', route)
const productId = route.params.productId
</script>

<template>
 <p style="font-size:25px;">產品 ID: {{ productId }}</p>
</template>

<style lang='scss' scope></style>
