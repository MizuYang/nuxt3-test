<script setup>
// data
const dialogComponent = ref(null)
const dialogConfig = {
    title: '我是標題',
    content: '我是內文',
    confirm: {
      btnName: '確定',
      onComplate() {
        console.log('您點擊了確定!')
      }
    },
    cancel: {
      btnName: '取消',
      onComplate() {
        console.log('您點擊了取消!')
      }
    }
  }

// composable
const { openDialog } = useDialog()

onMounted(() => {
  console.log(dialogComponent.value.dialogRef)
})

function openModal() {
  openDialog(dialogConfig)
}
</script>

<template>
  <Dialog ref="dialogComponent" />

  <div style="margin:20px;">
    <button type="button" 
            @click="openModal"  
            style="font-size:30px;">
      顯示 Dialog
    </button>
  </div>
</template>

<style lang='scss' scope></style>
