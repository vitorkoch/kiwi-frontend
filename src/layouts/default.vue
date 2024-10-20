<script lang="ts" setup>
import { loadPreferedTheme } from "@/scripts/theme-switcher";
onMounted(() => {
  loadPreferedTheme({
    shouldBeSetted: true,
  });
});
</script>
<template>
  <Navbar v-motion-pop class="col-start-1 col-end-1 row-start-1 row-end-3" />

  <main
    class="flex items-center justify-start flex-col col-start-2 col-end-2 row-start-1 row-end-1 p-2"
  >
    <slot />
  </main>

  <Footer
    v-motion-slide-top
    class="col-start-2 col-end-2 row-start-2 row-end-2"
  />
</template>
