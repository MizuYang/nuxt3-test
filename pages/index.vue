<script setup>
import axios from 'axios'

// composables
const { count, addCount} = useAddCount()
useFetchTest()

// stores
const productStore = useProductStore()

// plugins
const { $hello } = useNuxtApp()

// 測試 useFetch
// const { data } = await useFetch('https://randomuser.me/api/', {
  // 官方: https://nuxt.com/docs/api/composables/use-fetch#params
  // method: "GET",    // HTTP 請求的方法，GET(default)、POST 、 DELETE、PUT。
  // query: {},        // 將參數透過？的方式帶到 URL 上
  // params: {},       // 將參數帶到 URL 上
  // body: {},         // Request body
  // headers: {},      // Request headers
  // baseURL: "/",     // 基本的 API URL 路徑
  // timeout: 0        // 自動中止請求的毫秒數

  // useFetch  攔截器 interceptors
  // onRequest({ request, options }) {
  //   // 設置 request headers
  //   options.headers = options.headers || {};
  //   options.headers.authorization = `Bearer 1234567890`;

  //   console.log('request: ', request)
  //   console.log('options: ', options)
  // },
  // onRequestError({ request, options, error }) {
  //   // 處理 request 錯誤
  //   console.log('request: ', request)
  //   console.log('options: ', options)
  //   console.log('error: ', error)
  // },
  // onResponse({ request, response, options }) {
  //   console.log('request: ', request)
  //   console.log('response: ', response)
  //   console.log('options: ', options)
  //   // 處理回傳資料
  //   // return response._data;
  // },
  // onResponseError({ request, response, options }) {
  //   // 處理 response 錯誤
  //   console.log('request: ', request)
  //   console.log('response: ', response)
  //   console.log('options: ', options)
  // },
// })

//! 1. useFetch: server端打 API ； client端 不打 API
// const data = await useFetch("https://randomuser.me/api/")

//! 2. useAsyncData: server端打 API ； client端 不打 API
// const { data } = await useAsyncData("mizu唯一值-1", () =>
//   $fetch("https://randomuser.me/api/")
// );

//! 3. $fetch: server端、client端 都會打 API
// const data = await $fetch("https://randomuser.me/api/")

// refresh: 重新取得 API 資料
const { data, refresh } = await useAsyncData("key1", () =>
  $fetch("https://randomuser.me/api/")
);
// refreshNuxtData: 重新取得 API 資料
function onRefreshNuxtData () {
  refreshNuxtData("key1")
}

// 同時呼叫多個 API ，更換 data 名稱
callMoreApi()
async function callMoreApi () {
  //! (X) 會一個一個執行，造成阻塞
  // const { data: orgsData } = await useFetch('https://api.github.com/orgs/nuxt')
  // const { data: reposData } = await useFetch('https://api.github.com/orgs/nuxt/repos')

  //! (O) 會在 Promise.all 一起執行，等資料都跑完再一起回傳
  // const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  //     useFetch(`https://api.github.com/orgs/nuxt`),
  //   useFetch(`https://api.github.com/orgs/nuxt/repos`),
  // ])
  // console.log('orgsData: ', orgsData.value)
  // console.log('reposData: ', reposData.value)
}

// 使用 axios + useAsyncData call api
useAxiosWithUseAsyncDataCallApi()
async function useAxiosWithUseAsyncDataCallApi () {
  const { data: res } = await useAsyncData('axiosTest', async () => {
    const resUserData = await axios.get('https://randomuser.me/api/')
    // 這邊必須回傳 res.data 才不會出錯
    return resUserData.data
  })
  console.log('res', res.value)
}


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


// useRoute, useRouter 練習
const route = useRoute()
console.log('route:', route)
const router = useRouter()
console.log('router:', router)
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

  <!-- fetch 練習 -->
  <div style="font-size:20px;margin:20px 0;">
    fetch 練習 <br />
    <button type='button' @click='refresh'>
      refresh重抓API資料
    </button>
    <button type='button' @click='onRefreshNuxtData'>
      refreshNuxtData重抓API資料
    </button>
    <small>{{ data }}</small>
  </div>
  
</template>

<style lang='scss' scope></style>
