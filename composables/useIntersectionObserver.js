export function useIntersectionObserver() {
  const observer = ref(null)
  const isEnteredView = ref(false)
  const elRef = ref(null)

  function intersectionObserver(el, options = {
    root: null,
    threshold: 0
  }) {
    observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry=> {
        console.log(entry)
        isEnteredView.value = entry.isIntersecting
      })
    }, options)
    console.log(observer.value)

    observer.value.observe(el)
  }
  function unobserver(el) {
    if(observer.value) {
      observer.value.unobserve(el) 
      console.log('卸載成功')
    }
  }

  return {
    intersectionObserver,
    unobserver,
    isEnteredView,
    elRef
  }
}