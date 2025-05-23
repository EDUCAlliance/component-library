<template>
  <div class="p-4 text-sm">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue"
import type { CardProps } from "./types"

const cardContext = inject<CardProps>("cardContext", {
  variant: "default",
})
</script>
