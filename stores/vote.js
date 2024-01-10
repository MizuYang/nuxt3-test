import { defineStore } from 'pinia'

export const useVoteStore = defineStore('voteStore', () => {
  // data
  const data = ref({})
  const isVoteing = ref(false)

  getData()

  async function getData () {
    const res = await useAsyncData('getVote', () => {
      return $fetch('https://vue-lessons-api.vercel.app/vote/list')
    })
    data.value = res.data.value
  }
  // 投票
  async function vote(name) {
    if (isVoteing.value) return
    isVoteing.value = true
    try {
      const res = await useAsyncData('vote', () => {
        return $fetch('https://vue-lessons-api.vercel.app/vote/add', {
          method: 'POST',
          body: {
            type: name
          },
        })
      })
      console.log(res)
    } catch (err) {
      console.error(err)
    } finally {
      isVoteing.value = false
    }
    data.value[name].count++
  }

  return {
    data,
    vote,
    isVoteing
  }
})