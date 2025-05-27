<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"

defineProps<{
  email: string
  class?: HTMLAttributes["class"]
}>()

const color = inject("contact-card-color", "pink") as
  | "yellow"
  | "pink"
  | "green"
  | "orange"
  | "violet"

const linkColorClasses = computed(() => ({
  "text-yellow-primary hover:text-yellow-secondary": color === "yellow",
  "text-pink-primary hover:text-pink-secondary": color === "pink",
  "text-green-primary hover:text-green-secondary": color === "green",
  "text-orange-primary hover:text-orange-secondary": color === "orange",
  "text-violet-primary hover:text-violet-secondary": color === "violet",
}))
</script>

<template>
  <p :class="['transition-colors hover:underline', linkColorClasses]">
    <a :href="`mailto:${email}`">{{ email }}</a>
  </p>
</template>
