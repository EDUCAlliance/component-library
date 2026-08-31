<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { inject } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PaginationNext, type PaginationNextProps, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import type { PaginationSize } from "./types"

const props = defineProps<PaginationNextProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)

const size = inject<PaginationSize>("pagination-size", "base")
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    v-bind="forwardedProps"
    :class="
      cn(
        'border-black-quinternary bg-white-primary text-black-tertiary hover:bg-white-tertiary hover:text-black-primary flex items-center justify-center rounded-r-full border transition-colors disabled:pointer-events-none disabled:opacity-50',
        size === 'base' && 'h-12 w-12',
        size === 'sm' && 'h-9 w-9',
        props.class,
      )
    "
  >
    <slot>
      <font-awesome-icon icon="fa-solid fa-chevron-right" :class="size === 'sm' ? 'text-xs' : 'text-sm'" />
    </slot>
  </PaginationNext>
</template>
