<template>
  <p class="min-w-0">
    <a
      :href="props.href"
      class="text-black-primary flex min-w-0 items-center gap-2 break-words hover:underline"
    >
      <slot />
    </a>
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string
}>()
</script>
