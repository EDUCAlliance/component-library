<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { reactiveOmit } from "@vueuse/core"
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from "reka-ui"

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        `border-black-quinternary data-[placeholder]:text-black-sexternary focus-visible:border-ring group aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 focus:ring-black-secondary data-[state=open]:border-black-primary has-[data-slot=select-value]:bg-orange-primary flex h-11 w-fit items-center justify-between gap-2 rounded-md border bg-transparent py-3 pr-3 pl-4 text-sm whitespace-nowrap shadow-xs transition-[color,border-radius] duration-150 outline-none hover:rounded-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 data-[state=open]:rounded-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        props.class,
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="text-black-tertiary text-[12px] duration-200 ease-in-out group-data-[state=open]:rotate-180"
      />
    </SelectIcon>
  </SelectTrigger>
</template>
