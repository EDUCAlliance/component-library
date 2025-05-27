<script setup lang="ts">
import { cn } from "@/lib/utils"
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from "reka-ui"
import { computed, inject, type HTMLAttributes } from "vue"

type TabsColor = "black" | "yellow" | "pink" | "green" | "orange" | "violet"

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const tabsColor = inject<TabsColor>("tabs-color", "black")
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        'focus-visible:border-ring text-black-tertiary focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 whitespace-nowrap transition-[color,box-shadow,background-color] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
        tabsColor === 'yellow' &&
          'data-[state=active]:bg-yellow-secondary data-[state=active]:text-yellow-quaternary',
        tabsColor === 'pink' &&
          'data-[state=active]:bg-pink-secondary data-[state=active]:text-pink-quaternary',
        tabsColor === 'green' &&
          'data-[state=active]:bg-green-secondary data-[state=active]:text-green-quaternary',
        tabsColor === 'orange' &&
          'data-[state=active]:bg-orange-secondary data-[state=active]:text-orange-quaternary',
        tabsColor === 'violet' &&
          'data-[state=active]:bg-violet-secondary data-[state=active]:text-violet-quaternary',
        tabsColor === 'black' &&
          'data-[state=active]:bg-black-quaternary data-[state=active]:text-black-secondary',
        props.class,
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
