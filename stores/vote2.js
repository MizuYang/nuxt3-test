import { defineStore } from 'pinia'

export const useVote2Store = defineStore('vote2Store', () => {
  // 匯入其他 store
  const voteStore = useVoteStore()
  const vote2Data = computed(() => voteStore.data)

  return {
    vote2Data
  }
})
