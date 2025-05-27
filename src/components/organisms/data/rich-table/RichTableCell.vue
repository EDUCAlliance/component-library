<template>
  <div :class="cellClasses" :style="cellStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import type { RichTableCellProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableCellProps>(), {
  width: "auto",
  class: "",
})

const cellClasses = cn("px-3 text-sm text-black-sexternary", props.class)

const cellStyle = computed(() => {
  if (props.width === "fit-content") {
    return { width: "fit-content" }
  }
  return props.width && props.width !== "auto" ? { width: props.width } : {}
})
</script>
