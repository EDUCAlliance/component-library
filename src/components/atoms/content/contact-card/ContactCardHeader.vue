<script setup lang="ts">
import type { HTMLAttributes } from "vue"

defineProps<{
  name: string
  organization?: string
  role?: string
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <h3 class="text-xl font-bold">{{ name }}</h3>
    <p v-if="organization" class="text-black-sexternary mt-3">{{ organization }}</p>
    <p v-if="role" class="mt-1 text-sm">{{ role }}</p>
  </div>
</template>
