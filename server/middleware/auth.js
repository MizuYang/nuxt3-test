export default defineEventHandler((event) => {
  // 取得 call api url (顯示在 vscode 終端機)
  console.log(event.node.req.url)
});
 