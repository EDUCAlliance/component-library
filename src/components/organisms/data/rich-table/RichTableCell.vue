<template>
  <div :class="cellClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { RichTableCellProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableCellProps>(), {
  class: "",
})

const cellClasses = cn("px-3 py-0 text-sm text-black-sexternary", props.class)
</script>
