<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PaginationListItem, type PaginationListItemProps, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import type { PaginationColor, PaginationSize } from "./types"

const props = defineProps<PaginationListItemProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => reactiveOmit(props, "class"))
const forwardedProps = useForwardProps(delegatedProps.value)

const color = inject<PaginationColor>("pagination-color", "black")
const size = inject<PaginationSize>("pagination-size", "base")
</script>

<template>
  <PaginationListItem
    data-slot="pagination-list-item"
    v-bind="forwardedProps"
    :class="
      cn(
        'border-black-quinternary bg-white-primary text-black-tertiary hover:bg-white-tertiary hover:text-black-primary flex items-center justify-center border font-bold transition-colors disabled:pointer-events-none disabled:opacity-50',
        size === 'base' && 'h-12 min-w-10 px-4 py-3 text-base leading-6',
        size === 'sm' && 'h-9 min-w-9 px-3 py-2 text-sm leading-5',
        color === 'black' &&
          'data-[selected=true]:bg-black-primary data-[selected=true]:border-black-primary data-[selected=true]:text-white-primary data-[selected=true]:hover:bg-black-primary data-[selected=true]:hover:text-white-primary',
        color === 'yellow' &&
          'data-[selected=true]:bg-yellow-primary data-[selected=true]:border-yellow-primary data-[selected=true]:text-black-primary data-[selected=true]:hover:bg-yellow-primary data-[selected=true]:hover:text-black-primary',
        color === 'pink' &&
          'data-[selected=true]:bg-pink-primary data-[selected=true]:border-pink-primary data-[selected=true]:text-white-primary data-[selected=true]:hover:bg-pink-primary data-[selected=true]:hover:text-white-primary',
        color === 'green' &&
          'data-[selected=true]:bg-green-primary data-[selected=true]:border-green-primary data-[selected=true]:text-white-primary data-[selected=true]:hover:bg-green-primary data-[selected=true]:hover:text-white-primary',
        color === 'orange' &&
          'data-[selected=true]:bg-orange-primary data-[selected=true]:border-orange-primary data-[selected=true]:text-black-primary data-[selected=true]:hover:bg-orange-primary data-[selected=true]:hover:text-black-primary',
        color === 'violet' &&
          'data-[selected=true]:bg-violet-primary data-[selected=true]:border-violet-primary data-[selected=true]:text-white-primary data-[selected=true]:hover:bg-violet-primary data-[selected=true]:hover:text-white-primary',
        props.class,
      )
    "
  >
    <slot />
  </PaginationListItem>
</template>
