<script setup lang="ts">
import { type HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{ class?: HTMLAttributes["class"] }>(), {})
</script>

<template>
  <span :class="cn('flex items-center', props.class)" v-bind="$attrs">
    <slot />
  </span>
</template>
