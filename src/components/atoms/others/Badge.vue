<template>
  <div :class="badgeClasses">
    <div :class="dotClasses" v-if="props.variant === 'secondary'" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    color?: "gray" | "yellow" | "pink" | "green" | "orange" | "violet" | "black" | "white"
    variant?: "primary" | "secondary"
    size?: "xs" | "sm" | "base"
  }>(),
  {
    color: "white",
    size: "base",
    variant: "primary",
  },
)

const badgeClasses = computed(() => ({
  "text-black-primary flex w-fit items-center gap-1 rounded-full border": true,
  "bg-white-quinternary border-black-quinternary":
    props.color === "gray" && props.variant === "primary",
  "bg-black-primary border-black-tertiary text-white-primary":
    props.color === "black" && props.variant === "primary",
  "bg-yellow-tertiary border-yellow-primary":
    props.color === "yellow" && props.variant === "primary",
  "bg-pink-tertiary border-pink-primary": props.color === "pink" && props.variant === "primary",
  "bg-green-tertiary border-green-primary": props.color === "green" && props.variant === "primary",
  "bg-orange-tertiary border-orange-primary":
    props.color === "orange" && props.variant === "primary",
  "bg-violet-tertiary border-violet-primary":
    props.color === "violet" && props.variant === "primary",
  "bg-white-primary border-black-quaternary":
    props.variant === "secondary" || props.color === "white",
  "px-2 py-1 text-sm": props.size === "base",
  "px-2 py-1 text-xs": props.size === "sm",
  "px-[6px] py-2px text-xs": props.size === "xs",
}))

const dotClasses = computed(() => ({
  "w-2 h-2 rounded-full": props.variant === "secondary",
  "bg-black-primary": props.color === "black" && props.variant === "secondary",
  "bg-yellow-primary": props.color === "yellow" && props.variant === "secondary",
  "bg-pink-primary": props.color === "pink" && props.variant === "secondary",
  "bg-green-primary": props.color === "green" && props.variant === "secondary",
  "bg-orange-primary": props.color === "orange" && props.variant === "secondary",
  "bg-violet-primary": props.color === "violet" && props.variant === "secondary",
}))
</script>
