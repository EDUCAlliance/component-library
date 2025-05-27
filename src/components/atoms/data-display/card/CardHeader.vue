<script setup lang="ts">
import { inject, defineProps } from "vue"
import type { CardProps } from "./types"
import { cn } from "@/lib/utils"

// :class="[cardContext?.padding && 'px-4 py-3', 'border-b border-gray-200']"

const props = withDefaults(
  defineProps<{
    class?: string
  }>(),
  {
    class: "",
  },
)

const cardContext = inject<CardProps>("cardContext", {
  variant: "default",
})
</script>

<template>
  <header
    :class="
      cn(
        'text-white-primary relative flex flex-col justify-end gap-3 p-4 *:not-[img]:relative',
        props.class,
      )
    "
  >
    <slot />
  </header>
</template>
