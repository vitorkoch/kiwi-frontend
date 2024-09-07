<script></script>

<template>
  <Navbar class="col-start-1 col-end-1 row-start-1 row-end-3" v-motion-pop />

  <main
    class="flex items-center justify-start flex-col col-start-2 col-end-2 row-start-1 row-end-1 p-2"
  >
    <slot />
  </main>

  <Footer
    class="col-start-2 col-end-2 row-start-2 row-end-2"
    v-motion-slide-top
  />
</template>
