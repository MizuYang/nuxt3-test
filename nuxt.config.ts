// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // [全域] 優化 SEO (meta tag)
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Nuxt3 練習",
      "meta": [
        { "name": "description", "content": "這是 Mizu 的 Nuxt3 練習網頁" },
        { "property": "title", "content": "Nuxt3 練習 desu~" },
        { "property": "og:title", "content": "Nuxt3 練習 desu~" },
        { "property": "og:url", "content": "http://localhost:3000/" },
        { "property": "og:description", "content": "這是 Mizu 的 Nuxt3 練習網頁" },
      ],
      // 全域載入外部資源
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      //   },
      // ],
      // script: [
      //   {
      //     src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      //     async: true,
      //   },
      // ],
    }
  },

  // 設定特定的資料夾才可 Auto Import, 其餘資料夾需手動 import
  // "components": {
  //   "dirs": [
  //     {
  //       path: '~/components/<資料夾名稱>',
  //       global: true
  //     }
  //   ]
  // }
  // 新增其他想 Auto Import 的資料夾
  "imports": {
    "dirs": ['stores'] // 資料夾名稱
  },
  // "modules": ['@pinia/nuxt']
  "modules": [
    [
        '@pinia/nuxt',
        {
            'autoImports': ['defineStore', 'acceptHMRUpdate'],
        },
    ]
  ],
  // 1. 使用 .env 來設定環境變數
  // "runtimeConfig": {
  //   // 只能在 server 端讀取到的環境變數
  //   // 可以放置敏感資料, 例: token
  //   "token": '',
    
  //   // 只能在 client 端讀取到的環境變數
  //   // 可放 apiUrl
  //   "public": {
  //     "apiUrl": '',
  //   }
  // }

  // 2. 使用 vite 的方式處理環境變數
  "vite": {
    "define": {
      "process.env": process.env,
    },
  },
})


