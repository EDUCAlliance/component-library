<template>
  <h3 :class="titleClasses">
    <slot />
  </h3>
</template>

<script setup lang="ts">
import type { ActionCardTitleProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<ActionCardTitleProps>(), {
  class: "",
})

const baseClasses = "mt-4 text-lg font-bold sm:mt-6 sm:text-xl md:mt-7"

const titleClasses = cn(baseClasses, props.class)
</script>
