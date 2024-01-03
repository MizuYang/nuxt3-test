<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log("匿名 middleware about 頁面 =>", { to, from });
  },
});

// 載入外部的CSS跟JS (CDN)
// 進入 about 頁面後, 可到 network 選擇 "All" 查看會載入 animate.css, jquery
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      tagPosition: 'bodyOpen'
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
      tagPosition: 'bodyClose'
    },
  ],
});

// 單一設定 meta tag - useSeoMeta (新方法)
useSeoMeta({
 title: "這是關於 Mizu 的頁面 XD",
 description: "關於我們 - 米知練習中",
 ogDescription: "關於我們 - 米知練習中",
 ogTitle: "這是關於 Mizu 的頁面 XD",
//  ogImage: "",
//  twitterCard: "summary_large_image",
//  twitterSite: "",
//  twitterCreator: "",
});

// 單一設定 meta tag - useServerSeoMeta (與 useSeoMeta 不同的是，useServerSeoMeta 是在伺服器端設定 meta tag, 本地端並不會改變)
// const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about")
// useServerSeoMeta({
//   title: () => `${res.data.value.title} - Nuxt3`,
//   ogTitle: () => `${res.data.value.title} - Nuxt3`,
//   description: () => `${res.data.value.description} - Nuxt3`,
//   ogDescription: () => `${res.data.value.description} - Nuxt3`,
// });

// 單一設定 meta tag - useHead (舊方法)
// useHead({
//   // useHead 的所有屬性,可參考：https://nuxt.com/docs/api/composables/use-head#usehead
//   title: "這是關於 Mizu 的頁面",
//   meta: [
//     { property: "og:title", content: "這是關於 Mizu 的頁面" },
//     { property: "og:url", content: "http://localhost:3000/about" },
//     { property: "og:image", content: "http://localhost:3000/share.jpg" },
//     { name: "description", content: "關於 Mizu 頁面" },
//     { property: "og:description", content: "關於 Mizu 頁面" },
//   ],
// });
</script>

<template>
  <div>
    About 頁面

    <UserComponent />
  </div>

  <NuxtLink to="/" style="font-size: 25px">回到首頁</NuxtLink>
</template>

<style scoped></style>
