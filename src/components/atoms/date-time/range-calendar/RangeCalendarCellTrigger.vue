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
        // Selection Start
        'data-[selection-start]:bg-black-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-black-secondary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-black-primary data-[selection-start]:focus:text-primary-foreground [&[data-selection-start]]:rounded-r-none',
        // Selection End
        'data-[selection-end]:bg-black-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-black-secondary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-black-primary data-[selection-end]:focus:text-primary-foreground [&[data-selection-end]]:rounded-l-none',
        // Highlight
        'data-[highlighted]:bg-black-quaternary data-[highlighted]:text-black-secondary',
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
