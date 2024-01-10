<script setup>
// store
const store = useVoteStore()
const { data, vote } = store

</script>

<template>
  <ClientOnly>
    <ul>
      <template v-for="item in data" :key="item.name">
        <li class="d-flex align-items-center">
          <button type="button" class="d-flex align-items-center me-3"
                  @click="vote(item.name)"
                  style="font-size:25px;">
            投
            <img :src="item.path" :alt="item.name" width="50" style="display:inline-block;">
            {{ item.name }}
            一票
          </button>
          實得票數：{{ item.count }}
        </li>
      </template>
    </ul>
  </ClientOnly>
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
