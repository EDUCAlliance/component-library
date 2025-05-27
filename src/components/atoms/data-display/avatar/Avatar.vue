<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { AvatarRoot } from "reka-ui"
import { provide } from "vue"

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  size?: AvatarSize
}>()

provide("avatar-size", props.size || "md")

const sizeClasses = {
  xs: "size-6",
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
  xl: "size-14",
}
</script>

<template>
  <AvatarRoot
    data-slot="avatar"
    :class="cn('relative flex shrink-0 rounded-full', sizeClasses[props.size || 'md'], props.class)"
  >
    <slot />
  </AvatarRoot>
</template>
