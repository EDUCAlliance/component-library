<template>
  <div :class="contentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils"

interface RichTableContentProps {
  class?: string
}

const props = withDefaults(defineProps<RichTableContentProps>(), {
  class: "",
})

const contentClasses = cn("w-full", props.class)
</script>
