import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', () => {
  // data 
  const product  = ref(0)

  function getProduct () {
    product.value = {
      name: '很貴的蘋果',
      price: 500
    }

    console.log(product.value)
  }
  
  return {
    product,
    getProduct,
  }
})
