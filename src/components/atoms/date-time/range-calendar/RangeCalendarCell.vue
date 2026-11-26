<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarCell, type RangeCalendarCellProps, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarCellProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCell
    data-slot="range-calendar-cell"
    :class="
      cn('relative p-0 text-center text-sm focus-within:relative focus-within:z-20', props.class)
    "
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCell>
</template>
