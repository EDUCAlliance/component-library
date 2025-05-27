<template>
  <article :class="cardClasses">
    <slot />
  </article>
</template>

<script setup lang="ts">
import { provide } from "vue"
import type { CardProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<CardProps>(), {
  variant: "default",
  class: "",
})

const cardClasses = cn(
  "overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm relative duration duration-300 hover:rounded-none",
  props.class,
)

provide("cardContext", props)
</script>
