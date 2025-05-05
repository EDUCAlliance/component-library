<template>
  <button type="button" :class="classes" :disabled="disabled"><slot></slot></button>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    size?: "xs" | "sm" | "base" | "lg" | "icon"
    color: "yellow" | "pink" | "green" | "orange" | "violet"
    disabled?: boolean
  }>(),
  {
    size: "base",
    disabled: false,
    color: "yellow",
  },
)

const classes = computed(() => ({
  "disabled:cursor-not-allowed hover:rounded-none disabled:hover:rounded-full duration-300 ease-in-out text-white flex items-center gap-3 focus:ring-2 focus:ring-offset-2 focus:outline-hidden transition-[border-radius]":
    true,

  "text-xs rounded-[12px] [&>svg]:size-3 h-6 px-3 py-1": props.size === "xs",
  "text-sm rounded-[18px] [&>svg]:size-4 h-9 px-4 py-2": props.size === "sm",
  "text-base rounded-[24px] [&>svg]:size-4 h-12 px-6 py-3": props.size === "base",
  "text-lg rounded-[26px] [&>svg]:size-5 h-13 px-6 py-3": props.size === "lg",

  "disabled:bg-yellow-quinternary dark:bg-yellow-quaternary bg-yellow-primary text-black-primary focus:ring-yellow-secondary":
    props.color === "yellow",
  "disabled:bg-pink-tertiary bg-pink-primary text-white-primary focus:ring-pink-secondary":
    props.color === "pink",
  "disabled:bg-green-tertiary bg-green-primary text-white-primary focus:ring-green-secondary":
    props.color === "green",
  "disabled:bg-orange-tertiary bg-orange-primary text-black-primary focus:ring-orange-secondary":
    props.color === "orange",
  "disabled:bg-violet-tertiary bg-violet-primary text-white-primary": props.color === "violet",
}))
</script>
