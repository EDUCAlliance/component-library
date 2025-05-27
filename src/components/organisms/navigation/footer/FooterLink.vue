<template>
  <p>
    <a :href="props.href" class="text-black-primary flex items-center gap-2 hover:underline">
      <slot />
    </a>
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string
}>()
</script>
