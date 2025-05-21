<template>
  <div>
    <p class="text-black-sexternary mb-5 text-sm">{{ title }}</p>
    <div class="flex flex-col gap-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
