<script setup>
const { dialogRef, closeDialog } = useDialog()

defineExpose({
  dialogRef
})
</script>

<template>
  <dialog id="dialog" ref="dialogRef" style="font-size:30px;">
    <header>標題</header>
    <main style="min-height:220px;">內容</main>
    <footer style="text-align:center;">
      <button type="button" 
              @click="closeDialog"
              style="font-size:30px;">
        取消
      </button>
      <button type="button" 
              @click="closeDialog"
              style="font-size:30px;">
        確定
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
