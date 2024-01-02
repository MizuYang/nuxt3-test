<script setup>
// composables
const { count, addCount} = useAddCount()

// stores
const productStore = useProductStore()

// plugins
const { $hello } = useNuxtApp()


definePageMeta({
  // 1.: middleware - 匿名使用方法
  //  middleware: (to, from) => {
  //    console.log("index 頁面=>", { to, from });
  //  },
  // 2.: middleware - 具名使用方法
  middleware: ['auth'] // 加入 middleware/ 的檔名
});

</script>

<template>
  <HomeHeader />
  <h1>首頁</h1>
  <HomeMain />
  <HomeFooter />
  <Btn />

  <!-- composables 練習 -->
  <div style="font-size:20px;margin:20px 0;">
    composables 練習 <br />
    count: {{ count }}
    <button type='button' @click='addCount'>
      count+1
    </button>
  </div>

  <!-- pinia 練習 -->
  <div style="font-size:20px;margin:20px 0;">
    pinia 練習 <br />

    product: 
    <!-- 有產品 -->
    <template v-if="productStore.product.name">
      {{ productStore.product.name }} (${{ productStore.product.price }})
    </template>
    <!-- 無產品 -->
    <template v-else>
      <span style="color:gray">(尚無產品)</span>
    </template>

    <button type='button' @click='productStore.getProduct'>
      取得產品
    </button>
  </div>

  <!-- plugin provide -->
  <div style="font-size:20px;margin:20px 0;">
    plugin provide 練習 <br />
    {{ $hello('Mizu') }}
  </div>

  <!-- plugin directive -->
  <div style="font-size:20px;margin:20px 0;">
    plugin directive 練習 <br />
    <span v-timeformat="new Date()"></span>
  </div>

  <!-- plugin use (vcalendar 套件) -->
  <div style="font-size:20px;margin:20px 0;">
    plugin use (vcalendar 套件)
    <div>
      <VDatePicker mode="time" />
    </div>
  </div>

  <!-- <ClientOnly> (只有在本地端才運行 plugin 註冊的方法) -->
<div style="font-size:20px;margin:20px 0;">
  <ClientOnly>
    {{ '<ClientOnly> 練習 (只有在本地端才運行 plugin 註冊的方法)' }} <br /> 
    {{ $testClientOnly() }}
  </ClientOnly>
</div>

<!-- middleware 練習 -->
<div style="font-size:20px;margin:20px 0;">
  middleware 匿名形式 <br />
  <Middleware-匿名 />
</div>
  
</template>

<style lang='scss' scope></style>
