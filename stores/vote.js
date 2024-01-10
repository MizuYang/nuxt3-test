import { defineStore } from 'pinia'

export const useVoteStore = defineStore('voteStore', () => {
  // data
  const data = ref([])

  getData()

  async function getData () {
    const res = await useAsyncData('vote', () => {
      return $fetch('https://vue-lessons-api.vercel.app/vote/list')
    })

    console.log(res)
    data.value = res.data.value
  }

  return {
    data
  }
})