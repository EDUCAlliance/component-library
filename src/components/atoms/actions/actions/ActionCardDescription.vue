<template>
  <p :class="descriptionClasses">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { inject, computed } from "vue"
import type { ActionCardDescriptionProps, ActionCardProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<ActionCardDescriptionProps>(), {
  class: "",
})

const actionCardContext = inject<ActionCardProps>("actionCardContext", {
  color: "violet",
  variant: "outlined",
})

const baseClasses = "mt-2 text-sm sm:text-base"

const variantClasses = {
  outlined: "text-black-tertiary",
  filled: "",
}

const descriptionClasses = computed(() =>
  cn(baseClasses, variantClasses[actionCardContext.variant!], props.class),
)
</script>
