<template>
  <div :class="columnClasses">
    <span class="text-black-primary text-base font-bold">{{ label }}</span>
    <button
      v-if="sortable"
      class="ml-2 opacity-60 transition-opacity hover:opacity-100"
      @click="handleSort"
    >
      <font-awesome-icon :icon="['fas', 'sort']" class="h-3 w-3" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { RichTableColumnProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableColumnProps>(), {
  sortable: false,
  width: "auto",
  class: "",
})

const columnClasses = cn("flex items-center gap-2 px-3", props.class)

const handleSort = () => {
  // Emit sort event that parent can listen to
  // Implementation would depend on sorting requirements
}
</script>
