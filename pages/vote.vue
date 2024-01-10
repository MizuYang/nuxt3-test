<script setup>
// store
const store = useVoteStore()
const { data } = store

</script>

<template>
  <ClientOnly>
    <ul>
      <template v-for="item in data" :key="item.name">
        <li>
          <button type="button" style="font-size:25px;">
            投
            <img :src="item.path" alt="框架圖片" width="50" style="display:inline-block;">
            {{ item.name }}
            一票
          </button>
          實得票數：{{ item.count }}
        </li>
      </template>
    </ul>
  </ClientOnly>
</template>

<style lang='scss' scope></style>
