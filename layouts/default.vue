<script setup>
const pages = {
  home: {
    path: '/',
    name: '首頁'
  },
  about: {
    path: 'about',
    name: 'about'
  },
  user: {
    path: 'user',
    name: 'user'
  },
}
</script>

<template>
  <div>
    <header>
      header 區塊
      <ul>
        <li v-for="page in pages" :key="page.name">
          <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
        </li>
      </ul>
    </header>
    <slot />
    <footer>footer 區塊</footer>
  </div>
</template>

<style scoped></style>
