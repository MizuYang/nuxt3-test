<script setup>
// store
const store = useVoteStore()

</script>

<template>
  <ul>
    <template v-for="item in store.data" :key="item.name">
      <li class="d-flex align-items-center">
        <button type="button" class="d-flex align-items-center me-3"
                @click="store.vote(item.name)"
                style="font-size:25px;">
          投
          <img :src="item.path" :alt="item.name" width="50" style="display:inline-block;">
          {{ item.name }}
          一票
        </button>
        
        <template v-if='store.isVoteing'>
          投票中...
        </template>
        <template v-else>實得票數：{{ item.count }}</template>
      </li>
    </template>
  </ul>
  <p>
    可以右鍵 => 網頁原始碼查看 <br />
    的確有三個 img 標籤和內容 <br />
    代表的確有正確運行 SSR
  </p>
</template>

<style lang='scss' scope>
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.me-3 {
  margin-right: 9px;
}
</style>
