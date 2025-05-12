<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl"

const props = defineProps<{
  /** Custom CSS class */
  class?: HTMLAttributes["class"]
  /** Size of the avatars */
  size?: AvatarSize
  /** Maximum number of avatars to show before collapsing */
  max?: number
}>()
</script>

<template>
  <div data-slot="avatar-group" :class="cn('flex items-center', props.class)">
    <template v-for="(child, index) in $slots.default?.()" :key="index">
      <div
        class="ring-white-primary relative -ml-3 rounded-full ring-2 transition-transform hover:translate-x-1"
      >
        <component :is="child" />
      </div>
    </template>
  </div>
</template>
