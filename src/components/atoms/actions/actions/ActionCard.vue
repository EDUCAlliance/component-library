<template>
  <component
    :is="componentTag"
    :href="link"
    :class="cardClasses"
    class="group relative cursor-pointer p-4 duration-150 sm:p-6 md:p-8"
  >
    <slot />
    <font-awesome-icon
      :icon="['fas', 'arrow-right']"
      :class="arrowClasses"
      class="absolute top-4 right-4 -rotate-45 text-xl opacity-70 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 sm:top-6 sm:right-6 sm:text-2xl"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, provide } from "vue"
import type { ActionCardProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<ActionCardProps>(), {
  color: "violet",
  variant: "outlined",
  class: "",
})

const componentTag = computed(() => (props.link ? "a" : "div"))

const colorClasses = {
  outlined: {
    violet: "outline-black-quaternary hover:bg-white-tertiary outline",
    orange: "outline-black-quaternary hover:bg-white-tertiary outline",
    pink: "outline-black-quaternary hover:bg-white-tertiary outline",
    green: "outline-black-quaternary hover:bg-white-tertiary outline",
  },
  filled: {
    violet: "bg-violet-primary hover:bg-violet-primary/95 text-white-primary",
    orange: "bg-orange-primary hover:bg-orange-primary/95 text-white-primary",
    pink: "bg-pink-primary hover:bg-pink-primary/95 text-white-primary",
    green: "bg-green-primary hover:bg-green-primary/95 text-white-primary",
  },
}

const arrowColorClasses = {
  outlined: "text-black-tertiary",
  filled: "text-white-primary",
}

const cardClasses = cn(colorClasses[props.variant][props.color], props.class)
const arrowClasses = cn(arrowColorClasses[props.variant])

provide("actionCardContext", props)
</script>
