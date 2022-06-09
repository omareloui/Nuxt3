<script setup lang="ts">
import { useThemeStore } from "~~/store/useTheme";

const themeStore = useThemeStore();
</script>

<template>
  <Container tag="main" class="homepage">
    <button @click="themeStore.toggleTheme">Toggle Theme</button>
  </Container>
</template>

<style scoped lang="sass">
@use "~~/assets/styles/mixins" as *

.homepage
  +h(100vh)
  +grid($center: true)

  button
    +brdr(none)
    +ff(main)
    +clickable
    +br-lg
    +clr-bg(invert)
    +clr-txt(invert)
    +pa(20px)
</style>
