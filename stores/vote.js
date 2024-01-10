import { defineStore } from 'pinia'

export const useVoteStore = defineStore('voteStore', () => {
  // data
  const data = ref({})

  getData()

  async function getData () {
    const res = await useAsyncData('getVote', () => {
      return $fetch('https://vue-lessons-api.vercel.app/vote/list')
    })
    data.value = res.data.value
  }
  // 投票
  async function vote(name) {
    console.log('投票', name)
    const res = await useAsyncData('vote', () => {
      return $fetch('https://vue-lessons-api.vercel.app/vote/add', {
        method: 'POST',
        body: {
          type: name
        },
      })
    })
    data.value[name].count++
  }

  return {
    data,
    vote
  }
})