<script setup>
// data
const dialogComponent = ref(null)

// composable
const { openDialog } = useDialog()

onMounted(() => {
  console.log(dialogComponent.value.dialogRef)
})

function openModal() {
  openDialog()
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
