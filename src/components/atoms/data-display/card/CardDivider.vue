<template>
  <hr :class="dividerClasses" />
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils"

const props = withDefaults(
  defineProps<{
    class?: string
    color?: "black" | "white"
  }>(),
  {
    color: "black",
  },
)

const dividerClasses = cn(
  "relative",
  props.color === "white" && "border-white-primary",
  props.color === "black" && "border-black-primary",
  props.class,
)
</script>
