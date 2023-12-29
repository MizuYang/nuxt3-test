// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  }
})
