<template>
  <div :class="rowClasses" style="grid-template-columns: subgrid">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { RichTableRowProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableRowProps>(), {
  class: "",
})

const rowClasses = cn(
  "grid items-center py-4 px-0 border-b border-white-quinternary last:border-b-0 hover:bg-gray-50 transition-colors col-span-full",
  props.class,
)
</script>
