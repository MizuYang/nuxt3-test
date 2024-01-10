<script setup>
const pages = {
  home: {
    path: '/',
    name: '首頁'
  },
  about: {
    path: '/about',
    name: 'about'
  },
  user: {
    path: '/user',
    name: 'user'
  },
  parent: {
    path: '/parent',
    name: 'parent (嵌套 router 練習)'
  },
  products: {
    path: '/products',
    name: 'products (嵌套 router 練習)'
  },
  courses: {
    path: '/courses',
    name: 'courses (接課程API練習嵌套路由)'
  },
  vote: {
    path: '/vote',
    name: 'vote (pinia練習投票功能)'
  },
}

//! loading 方法二: 自訂 loading 元件
// const nuxtApp = useNuxtApp();
// const isLoading = ref(false);
// nuxtApp.hook("page:start", () => {
//   console.log('page:start')
//   isLoading.value = true;
// });
// nuxtApp.hook("page:finish", () => {
//   console.log('page:finish')
//   isLoading.value = false;
// });
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

    <!--//! loading 方法一: NuxtLoadingIndicator -->
    <NuxtLoadingIndicator color="#f00" 
                          :height="10" 
                          :throttle="0">
      <p style="text-align:center;">Loading...</p>
    </NuxtLoadingIndicator>

    <!--//! loading 方法二: 自訂 loading 元件 -->
    <!-- <div v-show="isLoading" class="loading">
      Loading
    </div> -->

  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 50px;
  color: #fff;
  background-color: #00000052;
}
</style>
