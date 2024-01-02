export default defineNuxtRouteMiddleware((to, from) => {
  console.log('具名的 middleware','to, from: ',  to, from)
})
