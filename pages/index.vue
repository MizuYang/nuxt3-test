<script setup>
// composables
const { count, addCount} = useAddCount()
useFetchTest()

// stores
const productStore = useProductStore()

// plugins
const { $hello } = useNuxtApp()

// 測試 useFetch
const { data } = await useFetch('https://randomuser.me/api/', {
  // 官方: https://nuxt.com/docs/api/composables/use-fetch#params
  // method: "GET",    // HTTP 請求的方法，GET(default)、POST 、 DELETE、PUT。
  // query: {},        // 將參數透過？的方式帶到 URL 上
  // params: {},       // 將參數帶到 URL 上
  // body: {},         // Request body
  // headers: {},      // Request headers
  // baseURL: "/",     // 基本的 API URL 路徑
  // timeout: 0        // 自動中止請求的毫秒數
})


definePageMeta({
  // 1.: middleware - 匿名使用方法
  //  middleware: (to, from) => {
  //    console.log("匿名 middleware index 頁面 =>", { to, from });
  //  },
  // 2.: middleware - 具名使用方法
  middleware: ['auth'] // 加入 middleware/ 的檔名
});


async function fetchData () {
  const res = await fetch('/api/hello')
  console.log(await res.json())
}
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

<!-- middleware 練習(捕捉路由變化) -->
<div style="font-size:20px;margin:20px 0;">
  middleware (捕捉路由變化) <br />
  <NuxtLink to="/about">移動到about頁面</NuxtLink>
</div>

<!-- server/middleware 練習(捕捉 http Request 請求) -->
<div style="font-size:20px;margin:20px 0;">
  middleware (捕捉 http Request) <br />
  <button type='button' @click='fetchData'>get api</button>
</div>

<!-- useFetch 練習 -->
{{ data }}
  
</template>

<style lang='scss' scope></style>
