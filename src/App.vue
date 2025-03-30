<template>
  <main class="main">
    <Intro />
    test
  </main>
</template>

<script setup>

import Intro from "@/components/Intro.vue";
</script>

<style lang="scss">
@use "@/styles/_normalize";
@use "@/styles/_fonts";
</style>

<style scoped lang="scss">
.main {
  background-color: vars.$bg_color;
  min-width: 100vw;
  min-height: 100vh;
}
</style>