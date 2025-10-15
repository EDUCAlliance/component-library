<template>
  <div :class="tableClasses" :style="tableStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from "vue"
import type { RichTableProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableProps>(), {
  columns: "1fr",
  class: "",
})

const tableClasses = cn("bg-white-primary", props.class)

const tableStyle = computed(() => {
  return {
    display: "grid",
    gridTemplateColumns: props.columns,
    gridAutoRows: "auto",
  }
})

provide("richTableContext", props)
</script>
