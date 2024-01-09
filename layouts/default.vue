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
  parent: {
    path: 'parent',
    name: 'parent (嵌套 router 練習)'
  },
  products: {
    path: 'products',
    name: 'products (嵌套 router 練習)'
  },
  courses: {
    path: 'courses',
    name: 'courses (接課程API練習嵌套路由)'
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
        <li>
          <NuxtLink to='https://google.com.tw'
                    target="_blank"
                    external>
            前往 Google
          </NuxtLink>
        </li>
      </ul>
    </header>
    <slot />
    <footer>footer 區塊</footer>
  </div>
</template>

<style scoped></style>
