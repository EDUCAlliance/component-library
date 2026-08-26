<template>
  <div :class="columnClasses" role="columnheader" :aria-sort="ariaSort">
    <span class="text-black-primary text-base font-bold">{{ label }}</span>
    <button
      v-if="sortable"
      type="button"
      class="ml-2 opacity-60 transition-opacity hover:opacity-100"
      @click="handleSort"
      :aria-label="`Sort ${label} ${nextSortDirection === 'asc' ? 'ascending' : 'descending'}`"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-3 w-3 fill-current">
        <path
          v-if="sortDirection !== 'asc'"
          d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z"
        />
        <path
          v-if="sortDirection !== 'desc'"
          d="M137.4 470.7l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import type { RichTableColumnProps, RichTableSortDirection } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableColumnProps>(), {
  sortable: false,
  class: "",
})

const emit = defineEmits<{
  sort: [key: string, direction: RichTableSortDirection]
}>()

const columnClasses = cn("flex items-center gap-2 px-3 py-0", props.class)
const nextSortDirection = computed<RichTableSortDirection>(() =>
  props.sortDirection === "asc" ? "desc" : "asc",
)
const ariaSort = computed<"ascending" | "descending" | "none" | undefined>(() => {
  if (!props.sortable) return undefined
  if (props.sortDirection === "asc") return "ascending"
  if (props.sortDirection === "desc") return "descending"
  return "none"
})

const handleSort = () => {
  emit("sort", props.columnKey, nextSortDirection.value)
}
</script>
