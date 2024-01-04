export const useFetchTest = () => {
  onMounted(async () => {
    await getFetchData()
  })

  async function getFetchData () {
    const res = await $fetch('/api/hello')
    console.log('$fetch: ', res)
  }

  return {

  }
}