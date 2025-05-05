<template>
  <div
    class="flex flex-wrap gap-0 [&>*:first-child]:-mr-px [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:-mr-px [&>*:not(:first-child):not(:last-child)]:rounded-none"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const containerClasses = computed(() => ({
  "flex gap-0 flex-wrap": true,
}))
</script>
