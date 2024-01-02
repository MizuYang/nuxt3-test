<script setup>
definePageMeta({
 middleware: (to, from) => {
   console.log("aboute 頁面=>", { to, from });
 },
});
</script>

<template>
  <div>
    About 頁面

    <UserComponent />
  </div>

  <NuxtLink to="/" style="font-size:25px;">回到首頁</NuxtLink>
</template>

<style scoped></style>
