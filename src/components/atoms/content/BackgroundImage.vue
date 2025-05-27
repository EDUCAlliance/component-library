<script setup lang="ts">
import { cn } from "@/lib/utils"

const props = defineProps<{
  src: string
  alt: string
  class?: string
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="cn('absolute top-0 left-0 h-full w-full object-cover', props.class)"
  />
</template>
