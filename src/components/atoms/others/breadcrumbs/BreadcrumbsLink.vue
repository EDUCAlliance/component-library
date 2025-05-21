<script setup lang="ts">
import { type HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    active?: boolean
    href?: string
  }>(),
  { active: false },
)
</script>

<template>
  <a
    :href="props.href"
    :aria-current="props.active ? 'page' : undefined"
    :class="
      cn(
        'text-black-tertiary hover:text-black-primary underline-offset-4 transition-colors hover:underline',
        props.active && 'font-bold underline underline-offset-4',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>
