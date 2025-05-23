<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = withDefaults(
  defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>(),
  {
    as: "button",
  },
)

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    data-slot="calendar-cell-trigger"
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'hover:bg-white-quaternary h-9 w-8 cursor-pointer rounded-full p-0 font-normal aria-selected:opacity-100',
        '[&[data-today]:not([data-selected])]:bg-white-quinternary [&[data-today]:not([data-selected])]:text-black-secondary [&[data-today]:not([data-selected])]:hover:bg-black-quaternary',
        // Selected
        'data-[selected]:bg-black-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-black-secondary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-black-primary data-[selected]:focus:text-primary-foreground data-[selected]:opacity-100',
        // Disabled
        'data-[disabled]:text-black-quinternary data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-black-quinternary',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
