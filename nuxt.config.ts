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
      ]
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
  "modules": ['@pinia/nuxt']
})
