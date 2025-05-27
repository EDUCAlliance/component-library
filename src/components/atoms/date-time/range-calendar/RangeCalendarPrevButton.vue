<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarPrev, type RangeCalendarPrevProps, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarPrevProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarPrev
    data-slot="range-calendar-prev-button"
    :class="
      cn(
        'text-black-tertiary size-6 p-0 opacity-50 hover:opacity-100',
        'absolute left-0',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot>
      <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-sm" />
    </slot>
  </RangeCalendarPrev>
</template>
