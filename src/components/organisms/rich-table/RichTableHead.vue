<template>
  <div :class="headClasses" style="grid-template-columns: subgrid">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils"

interface RichTableHeadProps {
  class?: string
}

const props = withDefaults(defineProps<RichTableHeadProps>(), {
  class: "",
})

const headClasses = cn(
  "grid items-center border-b border-black-primary pb-4 mb-0 col-span-full",
  props.class,
)
</script>
