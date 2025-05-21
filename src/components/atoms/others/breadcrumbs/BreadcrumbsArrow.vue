<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next"
import { type HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{ class?: HTMLAttributes["class"] }>(), {})
</script>

<template>
  <span
    aria-hidden="true"
    :class="cn('text-black-tertiary flex items-center', props.class)"
    v-bind="$attrs"
  >
    <ChevronRight :size="20" />
  </span>
</template>
