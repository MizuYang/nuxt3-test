const dialogRef = ref(null)
// data
const dialogData = ref({})

export const useDialog = () => {

  function openDialog(data) {
    nextTick(() => {
      if (dialogRef.value) {
        dialogRef.value.showModal()
        dialogData.value = data
        console.log(dialogData)
      }
    })
  }
  function closeDialog() {
    nextTick(() => {
      if (dialogRef.value) dialogRef.value.close()
    })
  }

  return {
    openDialog,
    closeDialog,
    dialogRef,
    dialogData
  }
}