<script setup></script>

<template>
  <nav style="margin-top:50px;">
    <ul>
      <li>
        <NuxtLink to="/parent">/parent  index頁</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/parent/childA">/parent/childA</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/parent/childB">/parent/childB</NuxtLink>
      </li>
    </ul>
  </nav>

  <main>
    <NuxtPage />
  </main>
</template>

<style lang='scss' scope></style>
