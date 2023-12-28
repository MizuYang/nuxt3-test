export const useAddCount = () => {
  // data 
  const count = ref(0)
  
  function addCount () {
    count.value += 1
  }

  return {
    count,
    addCount,
  }
}