<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  RangeCalendarCellTrigger,
  type RangeCalendarCellTriggerProps,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = withDefaults(
  defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>(),
  {
    as: "button",
  },
)

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    data-slot="range-calendar-trigger"
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'hover:bg-white-quaternary h-9 w-8 cursor-pointer rounded-full p-0 font-normal data-[selected]:opacity-100',
        '[&[data-today]:not([data-selected])]:bg-white-quinternary [&[data-today]:not([data-selected])]:text-black-secondary',
        // Range
        'data-[highlighted]:rounded-none data-[highlighted]:bg-(--calendar-range) data-[highlighted]:text-(--calendar-range-foreground) data-[selected]:rounded-none data-[selected]:bg-(--calendar-range) data-[selected]:text-(--calendar-range-foreground)',
        // Range days outside the displayed month
        '[&[data-selected][data-outside-view]]:bg-(--calendar-range-muted) [&[data-selected][data-outside-view]]:text-(--calendar-range-muted-foreground)',
        // Range edges
        '[&[data-selected][data-selection-start]]:rounded-l-full [&[data-selected][data-selection-start]]:bg-(--calendar-accent) [&[data-selected][data-selection-start]]:text-(--calendar-accent-foreground)',
        '[&[data-selected][data-selection-end]]:rounded-r-full [&[data-selected][data-selection-end]]:bg-(--calendar-accent) [&[data-selected][data-selection-end]]:text-(--calendar-accent-foreground)',
        '[&[data-highlighted][data-highlighted-start]]:rounded-l-full [&[data-highlighted][data-highlighted-start]]:bg-(--calendar-accent) [&[data-highlighted][data-highlighted-start]]:text-(--calendar-accent-foreground)',
        '[&[data-highlighted][data-highlighted-end]]:rounded-r-full [&[data-highlighted][data-highlighted-end]]:bg-(--calendar-accent) [&[data-highlighted][data-highlighted-end]]:text-(--calendar-accent-foreground)',
        // Outside months
        'data-[outside-view]:text-black-quinternary',
        // Disabled
        'data-[disabled]:text-black-quinternary data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
