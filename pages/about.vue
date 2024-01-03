<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log("匿名 middleware about 頁面 =>", { to, from });
  },
});

// 單一設定 meta tag
useHead({
  // useHead 的所有屬性,可參考：https://nuxt.com/docs/api/composables/use-head#usehead
  title: "這是關於 Mizu 的頁面",
  meta: [
    { property: "og:title", content: "這是關於 Mizu 的頁面" },
    { property: "og:url", content: "http://localhost:3000/about" },
    { property: "og:image", content: "http://localhost:3000/share.jpg" },
    { name: "description", content: "關於 Mizu 頁面" },
    { property: "og:description", content: "關於 Mizu 頁面" },
  ],
});
</script>

<template>
  <div>
    About 頁面

    <UserComponent />
  </div>

  <NuxtLink to="/" style="font-size: 25px">回到首頁</NuxtLink>
</template>

<style scoped></style>
