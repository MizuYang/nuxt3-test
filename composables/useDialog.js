const dialogRef = ref(null)

export const useDialog = () => {



  function openDialog() {
    nextTick(() => {
      if (dialogRef.value) dialogRef.value.showModal()
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
    dialogRef
  }
}