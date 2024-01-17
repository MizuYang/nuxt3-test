<script setup>
const { userInfo, userLogin, userLogout } = useLogin()

</script>

<template>
  <template v-if="userInfo.name">
    <span style="font-size:35px;color:green;">
      {{ userInfo.name }} 登入成功!
    </span>
    
    <button type='button' @click="userLogout" style="font-size:50px;">
      登出
    </button>
  </template>
  <template v-else>
    <button type='button' @click="userLogin" style="font-size:50px;">
      登入
    </button>
  </template>
</template>

<style lang='scss' scope></style>
