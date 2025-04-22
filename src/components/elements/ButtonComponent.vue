<script setup lang="ts">
defineProps<{
  variant: 'primary' | 'secondary' | 'soft' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'circle'
}>()
</script>

<template>
  <button
    type="button"
    class="rounded-sm bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    test
  </button>
</template>
