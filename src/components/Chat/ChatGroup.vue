<script setup lang="ts">
const { groupName, groupImageUrl, isVerified } = defineProps<{
  groupName: string;
  groupImageUrl?: string;
  isVerified?: boolean
}>();
</script>

<template>
  <div
    class="bg-primary rounded-xl p-2 m-4 w-full h-full flex flex-col item-center justify-center"
  >
  
  <div class="flex flex-col items-center justify-center gap-1 p-2">
      <img :src="groupImageUrl" class="size-12" alt="group image" id="group-image" v-if="groupImageUrl"/>
      <LucideUsers v-else/>
      <label for="group-image" class="flex flex-row gap-2 items-center justify-center">
        {{groupName}}
        <LucideBadgeCheck class="text-accent text-2xl" v-if="isVerified"/>
      </label>
    </div>

    <slot />
    <div class="flex justify-between items-center w-full gap-3 p-4">
      <div
        class="flex w-full bg-dark rounded-full py-2 px-4 flex-row items-center jutify-center text-xl gap-1"
      >
        <LucidePlus class="text-2xl" />
        <LucideSmile class="text-2xl" />
        <input
          type="text"
          class="bg-dark p-2 flex-1 focus:outline-none"
          placeholder="Type your message"
        />
      </div>

      <div class="bg-accent rounded-full p-4 hover:cursor-pointer">
        <LucideSend :size="32" color="black" />
      </div>
    </div>
  </div>
</template>
