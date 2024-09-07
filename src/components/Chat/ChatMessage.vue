<script lang="ts" setup>
const { isSender, senderImageUrl } = defineProps<{
  isSender: boolean;
  senderImageUrl?: string;
}>();
</script>

<template>

  <div
    class="px-4 py-2 self-start data-[is-sender=true]:self-end text-light data-[is-sender=true]:text-dark rounded-2xl data-[is-sender=false]:rounded-tl-sm data-[is-sender=true]:rounded-tr-sm flex flex-row data-[is-sender=true]:flex-row-reverse items-center justify-center text-normal max-w-xs text-pretty"
    :data-is-sender="isSender"
  >
  <img :src="senderImageUrl" v-if="senderImageUrl" alt="" class="size-8 rounded-full mb-6"/>
  <LucideUserCircle v-else class="size-8 mb-6 text-light"  />
  <div class="px-4 py-2 bg-secondary data-[is-sender=true]:bg-accent data-[is-sender=true]:text-dark rounded-2xl data-[is-sender=false]:rounded-tl-sm data-[is-sender=true]:rounded-tr-sm flex items-center justify-center text-normal text-light w-full text-pretty"
    :data-is-sender="isSender">
    <slot />
  </div>
  </div>
</template>
