<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { inject } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PaginationEllipsis, type PaginationEllipsisProps, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import type { PaginationSize } from "./types"

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)

const size = inject<PaginationSize>("pagination-size", "base")
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="forwardedProps"
    :class="
      cn(
        'border-black-quinternary bg-white-primary text-black-tertiary flex items-center justify-center border font-bold',
        size === 'base' && 'h-12 min-w-10 px-4 py-3 text-base leading-6',
        size === 'sm' && 'h-9 min-w-9 px-3 py-2 text-sm leading-5',
        props.class,
      )
    "
  >
    <slot />
  </PaginationEllipsis>
</template>
