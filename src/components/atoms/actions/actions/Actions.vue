<template>
  <div :class="actionsClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ActionsProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<ActionsProps>(), {
  class: "",
})

const baseClasses =
  "grid grid-cols-1 gap-px overflow-hidden rounded-lg sm:grid-cols-2 *:outline-black-quaternary outline-black-quaternary outline *:outline"

const actionsClasses = cn(baseClasses, props.class)
</script>
