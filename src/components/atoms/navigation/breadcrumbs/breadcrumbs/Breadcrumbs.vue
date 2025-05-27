<script setup lang="ts">
import { type HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{ class?: HTMLAttributes["class"] }>(), {})
</script>

<template>
  <nav aria-label="Breadcrumb" :class="cn('flex items-center gap-4', props.class)" v-bind="$attrs">
    <slot />
  </nav>
</template>
