<template>
  <button type="button" :class="classes" :disabled="disabled"><slot></slot></button>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    size?: "xs" | "sm" | "base" | "lg"
    disabled?: boolean
  }>(),
  {
    size: "base",
    disabled: false,
  },
)

const classes = computed(() => ({
  "text-black-primary hover:underline disabled:hover:no-underline disabled:text-black-sexternary underline-offset-4 disabled:cursor-not-allowed ease-in-out flex items-center gap-3  focus:ring-2 focus:ring-offset-2 focus:outline-hidden focus:ring-black-secondary":
    true,
  "text-xs [&>svg]:size-3 h-6 py-1": props.size === "xs",
  "text-sm [&>svg]:size-4 h-9 py-2": props.size === "sm",
  "text-base [&>svg]:size-4 h-12 py-3": props.size === "base",
  "text-lg  [&>svg]:size-5 h-13 py-3": props.size === "lg",
}))
</script>
