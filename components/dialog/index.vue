<script setup>
const { dialogData, dialogRef, openDialog, closeDialog } = useDialog()

defineExpose({
  dialogRef
})
</script>

<template>
  <dialog id="dialog" ref="dialogRef" style="font-size:30px;">
    <header>{{ dialogData?.title }}</header>
    <main style="min-height:220px;">{{ dialogData?.content }}</main>
    <footer style="text-align:center;">
      <!-- 取消按鈕 -->
      <button type="button" 
              @click="closeDialog('cancel')"
              style="font-size:30px;">
        {{ dialogData?.cancel?.btnName }}
      </button>
      <!-- 確定按鈕 -->
      <button type="button" 
              @click="closeDialog('confirm')"
              style="font-size:30px;">
        {{ dialogData?.confirm?.btnName }}
      </button>
    </footer>
  </dialog>
</template>

<style lang='scss' scope>
#dialog {
  width: 330px;
  height: 280px;
  overflow: hidden;
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 6px #ccc;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(218, 115, 56, 0.4);
}
</style>
