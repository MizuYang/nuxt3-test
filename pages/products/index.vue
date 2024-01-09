<script setup>
const products = ref({
  egg: {
    name: '雞蛋',
    price: 10
  },
  milk: {
    name: '牛奶',
    price: 15
  },
  rice: {
    name: '飯',
    price: 30
  },
})
</script>

<template>
  <nav>
    <ul>
      <template v-for="(value,key) in products" :key="value.name">
        <li>
            <NuxtLink :to="`/products/${key}`">
              {{ value.name }}
            </NuxtLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang='scss' scope></style>
