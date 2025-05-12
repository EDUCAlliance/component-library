<script setup lang="ts">
import { cn } from "@/lib/utils"
import { AvatarFallback, type AvatarFallbackProps } from "reka-ui"
import { computed, inject, type HTMLAttributes } from "vue"

const props = defineProps<
  AvatarFallbackProps & {
    class?: HTMLAttributes["class"]
  }
>()

const parentSize = inject("avatar-size", "md")

const textSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-lg",
}

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: className, ...delegated } = props
  return delegated
})
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="delegatedProps"
    :class="
      cn(
        'bg-black-quinternary text-white-primary flex size-full items-center justify-center rounded-full select-none',
        textSizeClasses[parentSize],
        props.class,
      )
    "
  >
    <slot />
  </AvatarFallback>
</template>
