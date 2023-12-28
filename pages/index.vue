<script setup>
const { count, addCount} = useAddCount()

</script>

<template>
  <HomeHeader />
  <h1>首頁</h1>
  <HomeMain />
  <HomeFooter />
  <Btn />

  <!-- composables 練習 -->
  <div style="font-size:20px;">
    count: {{ count }}
    <button type='button' @click='addCount'>
      count+1
    </button>
  </div>
</template>

<style lang='scss' scope></style>
