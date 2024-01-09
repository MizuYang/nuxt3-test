<script setup>
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);
</script>

<template>
  <h1>404 Not Found</h1>
  <p>錯誤網址:{{ route.params.slug }}</p>
  <NuxtLink to='/'>
    <p style="font-size:25px;">返回首頁</p>
  </NuxtLink>
</template>