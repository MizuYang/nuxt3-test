<script setup>
// get api
const { data: peopleData } = await useFetch("/api/people");
</script>

<template>
  <!-- CRUD: get api -->
  <ul>
    <template v-for="people in peopleData" :key="people._id">
      <li>
        {{ people.name }} ({{ people.age }}): {{ people.email }}
      </li>
    </template>
  </ul>
</template>

<style lang='scss' scope></style>
