// data
const dialogData = ref({})
const dialogRef = ref(null)

export const useDialog = () => {

  function openDialog(data) {
    nextTick(() => {
      if (dialogRef.value) {
        dialogRef.value.showModal()
        dialogData.value = data
        console.log(dialogData.value)
      }
    })
  }
  function closeDialog(type) {
    nextTick(() => {
      if (dialogRef.value) dialogRef.value.close()
      if(dialogData.value[type].onComplate) dialogData.value[type].onComplate()
    })
  }

  return {
    openDialog,
    closeDialog,
    dialogRef,
    dialogData
  }
}