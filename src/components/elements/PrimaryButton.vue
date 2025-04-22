<template>
  <button type="button" :class="classes" :disabled="disabled"><slot></slot></button>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    size?: "xs" | "sm" | "base" | "lg" | "circle"
    disabled?: boolean
  }>(),
  {
    size: "base",
    disabled: false,
  },
)

const classes = computed(() => ({
  "disabled:bg-black-quinternary bg-black-primary disabled:cursor-not-allowed text-white-primary hover:rounded-none disabled:hover:rounded-full duration-150 text-white flex items-center gap-3":
    true,
  "text-xs rounded-[12px] [&>svg]:size-3 h-6 px-3 py-1": props.size === "xs",
  "text-sm rounded-[18px] [&>svg]:size-4 h-9 px-4 py-2": props.size === "sm",
  "text-base rounded-[24px] [&>svg]:size-4 h-12 px-6 py-3": props.size === "base",
  "text-lg rounded-[26px] [&>svg]:size-5 h-13 px-6 py-3": props.size === "lg",
}))
</script>
