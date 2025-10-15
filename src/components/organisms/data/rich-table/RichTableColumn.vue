<template>
  <div :class="columnClasses">
    <span class="text-black-primary text-base font-bold">{{ label }}</span>
    <button
      v-if="sortable"
      class="ml-2 opacity-60 transition-opacity hover:opacity-100"
      @click="handleSort"
      aria-label="Sort column"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-3 w-3 fill-current">
        <path
          d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { RichTableColumnProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableColumnProps>(), {
  sortable: false,
  class: "",
})

const emit = defineEmits<{
  sort: [key: string]
}>()

const columnClasses = cn("flex items-center gap-2 px-3 py-0", props.class)

const handleSort = () => {
  emit("sort", props.columnKey)
}
</script>
