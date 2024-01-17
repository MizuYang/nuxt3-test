<script setup>
const { userLogin } = useLogin()
</script>

<template>
  <button type='button' @click="userLogin" style="font-size:50px;">
    登入
  </button>
</template>

<style lang='scss' scope></style>
