<template>
  <div :class="iconWrapperClasses">
    <font-awesome-icon :icon="icon" :class="iconClasses" />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue"
import type { ActionCardIconProps, ActionCardProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<ActionCardIconProps>(), {
  class: "",
})

const actionCardContext = inject<ActionCardProps>("actionCardContext", {
  color: "violet",
  variant: "outlined",
})

const iconWrapperColorClasses = {
  outlined: {
    violet: "bg-violet-tertiary",
    orange: "bg-orange-tertiary",
    pink: "bg-pink-tertiary",
    green: "bg-green-tertiary",
  },
  filled: {
    violet: "bg-white-primary",
    orange: "bg-white-primary",
    pink: "bg-white-primary",
    green: "bg-white-primary",
  },
}

const iconColorClasses = {
  outlined: {
    violet: "text-violet-primary",
    orange: "text-orange-primary",
    pink: "text-pink-primary",
    green: "text-green-primary",
  },
  filled: {
    violet: "text-black-primary",
    orange: "text-black-primary",
    pink: "text-black-primary",
    green: "text-black-primary",
  },
}

const baseWrapperClasses = "flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12"
const baseIconClasses = "text-lg sm:text-xl"

const iconWrapperClasses = computed(() =>
  cn(
    baseWrapperClasses,
    iconWrapperColorClasses[actionCardContext.variant!][actionCardContext.color!],
    props.class,
  ),
)

const iconClasses = computed(() =>
  cn(baseIconClasses, iconColorClasses[actionCardContext.variant!][actionCardContext.color!]),
)
</script>
